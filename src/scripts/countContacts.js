import { pathToDB } from '../constants/contacts.js';
import fs from "node:fs/promises";


export const countContacts = async () => {

    const existingContacts = await fs.readFile(pathToDB, "utf-8");
    console.log("Кількість контактів:", JSON.parse(existingContacts).length);
};

countContacts();



