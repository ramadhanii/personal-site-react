const sqlite3 = require('sqlite3');

const db = new sqlite3.Database(
    './database.db',
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            return console.error(err.message);
        }

        console.log('Connected to the SQLite database.');
    }
);

db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS bookmarks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            url TEXT NOT NULL,
            summary TEXT NOT NULL,
            content TEXT NOT NULL,
            created_at TEXT NOT NULL
        )`
    );
});