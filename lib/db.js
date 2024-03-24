import mysql from "mysql2/promise";


// Create the connection outside of the functions
let connection = null;

async function setupConnection() {
    connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        database: process.env.DB_DATABASE,
        port: 3306,
        password: process.env.DB_PASSWORD
    });

    return connection
}


export async function get_table_data_by_array({ table_name, where_array = {}, order_by, group_by = null, selected_field = null, find_num_rows = null, limit_no = null }) {

    if (!connection) {
        await setupConnection();
    }

    try {

        let query_string = await new Promise((resolve, reject) => {

            let query = 'SELECT';

            if (selected_field == null) {
                query += ' *'
            } else {
                query += ' ' + selected_field
            }

            if (Object.keys(where_array).length > 0) {

                query += ' FROM ' + table_name + ' WHERE '

                let conditions = [];

                for (let key in where_array) {
                    conditions.push(`${key} = '${where_array[key]}'`);
                }

                query += conditions.join(' AND ');
            } else {
                query += ' FROM ' + table_name
            }

            query += ' ORDER BY ' + order_by

            if (group_by == null) {
                query += ''
            } else {
                query += ' GROUP BY ' + group_by
            }

            resolve(query)

        })

        const result = await connection.query(query_string);

        return result
    } catch (err) {
        return err
    }

}


export async function insert_data_in_table({ table_name, data }) {

    if (!connection) {
        await setupConnection();
    }

    try {

        let query_string = await new Promise((resolve, reject) => {

            let query = 'INSERT INTO '

            query += '`' + table_name + '` '

            let column_names = [];

            for (let key in data) {
                column_names.push('`' + key + '`');
            }

            query += '(' + column_names.join(', ') + ') VALUES ';

            let column_values = [];

            for (let key in data) {
                column_values.push(`'${data[key]}'`);
            }

            query += '(' + column_values.join(', ') + ')';

            resolve(query)

        })

        const result = await connection.query(query_string);

        return result

    } catch (err) {
        return err
    }

}