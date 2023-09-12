import sqlite3
from sqlite3 import Error
import pandas as pd

conn = sqlite3.connect('backend/saves/JamieGame1')

c = conn.cursor()


def create_table(sql_query):
    c.execute(sql_query)
    conn.commit()
    print("Table created OR already exists")
    return

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



    c.execute(exe_str)

    conn.commit()

    print(f"{len(values)} records added to table '{table_name}'")

def display_table(table_name, cols): 
    c.execute(f'''SELECT * FROM {table_name}''')
    # c.execute('''
    #         SELECT
    #         a.product_name,
    #         b.price
    #         FROM products a
    #         LEFT JOIN prices b ON a.product_id = b.product_id
    #         ''')

    df = pd.DataFrame(c.fetchall(), columns=cols)
    print (df)

def init_save_file():
    table_name = 'villagers'
    table_cols = [
        'villager_id',
        'name',
        'gender',
        'age',
        'food_skill',
        'water_skill',
        'wood_skill',
        'stone_skill',
        'build_skill',
        'exped_skill',
    ]
    table_test_data = [
        ['NULL','Benjamin','M',18,2,2,2,2,2,2],
        ['NULL','Adolfo','M',24,2,2,2,2,2,2],
        ['NULL','Gaped','F',21,2,2,2,2,2,2],
        ['NULL','Busted','M',10029,2,2,2,2,2,2],
        ['NULL','Benjamin2','M',18,2,2,2,2,2,2],
        ['NULL','Adolfo2','M',24,2,2,2,2,2,2],
        ['NULL','Gaped2','F',21,2,2,2,2,2,2],
        ['NULL','Busted2','M',10029,2,2,2,2,2,2]
    ]
    create_query = '''
        CREATE TABLE IF NOT EXISTS villagers
        (
            [villager_id] INTEGER PRIMARY KEY, 
            [name] TEXT,
            [gender] TEXT,
            [age] INTEGER,
            [food_skill] INTEGER,
            [water_skill] INTEGER,
            [wood_skill] INTEGER,
            [stone_skill] INTEGER,
            [build_skill] INTEGER,
            [exped_skill] INTEGER
        )
    '''
    create_table(create_query)
    add_to_table(
        table_name,
        table_cols, 
        table_test_data
    )
    display_table(table_name, table_cols)
    

if __name__ == '__main__':
    init_save_file()
    # add_to_table(
    #     'products',
    #     ['product_id','product_name'],
    #     [['NULL','Bleurghhhh',],['NULL','Bleurghhhhghghgyygy']]
    # )
    # display_table()
    # add_to_table()
    # create_table()
    # create_connection('backend/db/test_database')