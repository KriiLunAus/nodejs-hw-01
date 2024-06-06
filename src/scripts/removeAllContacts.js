import { pathToDB } from '../constants/contacts.js';
import fs from "node:fs/promises";


export const removeAllContacts = async () => {


    const existingContacts = await fs.readFile(pathToDB);
    const contacts = JSON.parse(existingContacts);
    contacts.length = 0;

    fs.writeFile(pathToDB, JSON.stringify(contacts));
};

await removeAllContacts();
