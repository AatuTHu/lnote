import * as SQLite from 'expo-sqlite';

let dbPromise = null;

const getDb = () => {
    if (!dbPromise) {
        dbPromise = (async () => {
            const db = await SQLite.openDatabaseAsync('notes.db');
            await db.execAsync(`
                CREATE TABLE IF NOT EXISTS notes (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  title TEXT,
                  content TEXT NOT NULL,
                  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                );
            `);
            try {
                await db.execAsync(`ALTER TABLE notes ADD COLUMN title TEXT;`);
            } catch (e) {
                // Column already exists
            }
            return db;
        })();
    }
    return dbPromise;
};

export const fetchNotes = async () => {
    try {
        const db = await getDb();
        return await db.getAllAsync('SELECT * FROM notes ORDER BY id DESC;');
    } catch (error) {
        console.error('Error fetching notes:', error);
        return [];
    }
};

export const insertNote = async (title, text) => {
    if (!text.trim() && !title.trim()) return;
    try {
        const db = await getDb();
        await db.runAsync(
            'INSERT INTO notes (title, content, created_at) VALUES (?, ?, datetime(\'now\', \'localtime\'));',
            [title, text]
        );
    } catch (error) {
        console.error('Error inserting note:', error);
    }
};

export const updateNote = async (id, title, text) => {
    if (!text.trim() && !title.trim()) return;
    const db = await getDb();
    await db.runAsync('UPDATE notes SET title = ?, content = ? WHERE id = ?;', [title, text, id]);
};

export const deleteNote = async (id) => {
    const db = await getDb();
    await db.runAsync('DELETE FROM notes WHERE id = ?;', [id]);
};