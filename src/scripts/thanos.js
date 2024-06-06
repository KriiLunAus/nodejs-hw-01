import { pathToDB } from '../constants/contacts.js';
import fs from "node:fs/promises";


export const thanos = async () => {


    const existingContacts = await fs.readFile(pathToDB);
    const contacts = JSON.parse(existingContacts);

    const blippedContacts = contacts.filter(() =>  Math.random() >= 0.5);


    fs.writeFile(pathToDB, JSON.stringify(blippedContacts, null, 2));
};

await thanos();
