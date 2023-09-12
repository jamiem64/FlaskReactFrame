import sqlite3
from sqlite3 import Error
import pandas as pd

conn = sqlite3.connect('database.db')
c = conn.cursor() 

# def create_connection(db_file):
#     """ create a database connection to a SQLite database """
#     conn = None
#     try:
#         conn = sqlite3.connect(db_file)
#         print(sqlite3.version)
#     except Error as e:
#         print(e)
#     finally:
#         if conn:
#             conn.close()

def create_table(sql_query):
    try:
        c.execute(sql_query)
        conn.commit()
        print("Table created OR already exists")
    except Error as e:
        print("Table not created")
        print("Error: ", e)

def add_to_table(
        table_name: str,
        col_names: list,
        values: list,
    ):
    try:
        c.executemany(f"INSERT INTO {table_name} VALUES (?,?,?,?,?,?,?,?)", values)

        conn.commit()

        print(f"{len(values)} records added to table '{table_name}'")
    except Error as e:
        print("Records not added")
        print("Error: ", e)

def display_table(table_name, cols): 
    c.execute(f'''SELECT * FROM {table_name}''')
    df = pd.DataFrame(c.fetchall(), columns=cols)
    print (df)

def fix_db_table():
    query = "ALTER TABLE stocks_info ADD url string"
    c.execute(query)
    conn.commit()

def clear_table():
    query = "DELETE FROM stocks_info"
    c.execute(query)
    conn.commit()

def main():
    display_table('stocks_info', ['symbol','name','currency','exchange','mic_code','country','type','url'])

main()