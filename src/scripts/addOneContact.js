import fs from "node:fs/promises";
import { pathToDB } from '../constants/contacts.js';
import { createFakeContact } from '../utilits/createFakeContact.js';


export const addOneContact = async () => {

    const contactToAdd = createFakeContact();

    // fs.writeFile(pathToDB, JSON.stringify(contactToAdd));

};

console.log(pathToDB);
await addOneContact();
