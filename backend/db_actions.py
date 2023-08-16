import sqlite3
from sqlite3 import Error
import pandas as pd

conn = sqlite3.connect('backend/db/test_database')

c = conn.cursor()


def create_table(sql_query):
    c.execute(sql_query)
    # c.execute('''
    #       CREATE TABLE IF NOT EXISTS products
    #       ([product_id] INTEGER PRIMARY KEY, [product_name] TEXT)
    #       ''')
          
    # c.execute('''
    #         CREATE TABLE IF NOT EXISTS prices
    #         ([product_id] INTEGER PRIMARY KEY, [price] INTEGER)
    #         ''')
    
    conn.commit()

def add_to_table(
        table_name: str,
        col_names: list,
        values: list,
    ):
    col_name_str = ""

    for i, col in enumerate(col_names):
        if i == len(col_names) - 1:
            col_name_str += col
        else:
            col_name_str += col + ', '

    exe_str = f"""INSERT INTO {table_name} ({col_name_str}) VALUES """
    
    # exe_str += "\n"
    for j, val_list in enumerate(values):
        # exe_str += "\n("
        exe_str += "("
        for i, val in enumerate(val_list):
            if i == len(val_list) - 1:
                if j == len(values) - 1:
                    exe_str += f"'{val}')"
                else:
                    exe_str += f"'{val}'),"
            else:
                if val == 'NULL':
                    exe_str += f"{val},"
                else:
                    exe_str += f"'{val}',"


    print('.')

    c.execute(exe_str)

    conn.commit()

def display_table(): 
    c.execute('''
            SELECT
            a.product_name,
            b.price
            FROM products a
            LEFT JOIN prices b ON a.product_id = b.product_id
            ''')

    df = pd.DataFrame(c.fetchall(), columns=['product_name','price'])
    print (df)


if __name__ == '__main__':
    add_to_table(
        'products',
        ['product_id','product_name'],
        [['NULL','Bleurghhhh',],['NULL','Bleurghhhhghghgyygy']]
    )

    display_table()
    # add_to_table()
    # create_table()
    # create_connection('backend/db/test_database')




# def create_connection(db_file):
#     # create a db connection to a SQLite db
#     conn = None
#     try:
#         conn = sqlite3.connect(db_file)
#         c = conn.cursor()
#         print(sqlite3.version)
#     except Error as e:
#         print(e)
#     finally:
#         if conn:
#             conn.close()