import { type SQLiteDatabase } from "expo-sqlite";

export async function startDb(database: SQLiteDatabase){
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS products(
        id INTERAGER PRIMARY KEY AUTOINCREMENT,
        name TEXT Not NULL,
        quantity INTERAGER NOT NULL
        ):
        `)
}
    
