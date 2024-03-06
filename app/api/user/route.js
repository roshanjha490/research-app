import { NextResponse } from "next/server";
import { get_table_data_by_array } from "@/lib/db";

export async function GET(request) {

    let sql = {
        table_name: 'users',
        where_array: {
            id: 1
        },
        order_by: 'id'
    }

    return NextResponse.json({
        success: true,
        result: await get_table_data_by_array(sql)
    })
}



