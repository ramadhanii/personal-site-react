'use server';
import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';

let db: Database;

async function initDb() {
    db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    })
}

export async function readAll(table: string, start = 0, limit = 10) {
    if (!db) await initDb();
    return db.all(`SELECT * FROM ${table} LIMIT ${limit} OFFSET ${start}`);
}
