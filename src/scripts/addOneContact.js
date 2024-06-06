import fs from "node:fs/promises";
import { pathToDB } from '../constants/contacts.js';
import { createFakeContact } from '../utilits/createFakeContact.js';


export const addOneContact = async () => {

    const data = [];
    data.push(createFakeContact());


    const existingContacts = await fs.readFile(pathToDB, "utf-8");
    const contacts = JSON.parse(existingContacts);

    contacts.push(...data);
    await fs.writeFile(pathToDB, JSON.stringify(contacts, null, 2));
};

await addOneContact();
