import fs from "node:fs/promises";
import { pathToDB } from '../constants/contacts.js';
import { createFakeContact } from '../utilits/createFakeContact.js';

const generateContacts = async (number) => {
    const data = [];

    for (let i = 0; i < number; i++){
        data.push(createFakeContact());
    }

try {
    const existingContacts = await fs.readFile(pathToDB, "utf-8");
    const contacts = JSON.parse(existingContacts);

    contacts.push(...data);
    console.log(JSON.stringify(contacts));
    // await fs.writeFile(pathToDB, JSON.stringify(contacts, null, 2));
} catch (error) {
    console.log("Помилка", error);
}

    };


await generateContacts(5);

