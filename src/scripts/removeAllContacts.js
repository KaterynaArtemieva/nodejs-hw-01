import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf8');
    } catch (err) {
        console.error(err);
    }
};

removeAllContacts();
