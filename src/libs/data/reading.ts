import { readAll } from './db';

export default async function getReading() {
    return await readAll('bookmarks');
}