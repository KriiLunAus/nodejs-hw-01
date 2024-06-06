import { pathToDB } from '../constants/contacts.js';
import fs from "node:fs/promises";


export const getAllContacts = async () => {

    const existingContacts = await fs.readFile(pathToDB, "utf-8");
    console.log("Список контактів:", JSON.parse(existingContacts));
};

getAllContacts();



