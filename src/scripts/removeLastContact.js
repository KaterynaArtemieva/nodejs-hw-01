import { readContacts } from "../utils/readContacts.js";
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();

        if (contacts.length === 0) {
            return;
        }

        contacts.pop();

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    } catch (err) {
        console.error(err);
    }
};

removeLastContact();
