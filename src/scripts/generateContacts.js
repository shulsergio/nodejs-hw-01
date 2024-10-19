import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contactsParse = await readContacts();
  const newContacts = Array(number).fill(0).map(createFakeContact);
  const result = [...contactsParse, ...newContacts];
  console.log(result);
  writeContacts(result);
};

generateContacts(3);
