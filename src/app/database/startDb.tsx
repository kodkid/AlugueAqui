import { type SQLiteDatabase } from "expo-sqlite";

export async function startDb(database: SQLiteDatabase) {
  await database.execAsync(
    `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL ,
            password TEXT  NOT NULL,
            email TEXT NOT NULL
        );`
  );
}
