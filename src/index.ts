import { logUser, users } from './modules/contacts';
import { logPerson, persons } from './modules/contacts_2';

console.group();

console.log('Users:');
console.group();
users.forEach(logUser);
console.groupEnd();

console.log('');

console.log('Persons:');
console.group();
persons.forEach(logPerson);
console.groupEnd();

console.groupEnd();
