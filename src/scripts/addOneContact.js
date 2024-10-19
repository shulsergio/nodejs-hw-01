import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const addOneContact = async (number) => {
  const contacts = await readContacts();
  console.log('read :', contacts);
  contacts.push(createFakeContact());
  console.log('add :', contacts);
  writeContacts(contacts);
};
addOneContact();
