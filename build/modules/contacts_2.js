"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
exports.persons = [
    {
        name: 'Николай Николаев',
        age: 40,
        role: 'Системный администратор'
    },
    {
        name: 'Владимир Владимиров',
        age: 25,
        group: 'Frontend-разработчик',
    },
    {
        name: 'Александр Александров',
        age: 30,
        group: 'Backend-разработчик',
    },
    {
        name: 'Эмиль Абдулатыпов',
        age: 35,
        group: 'Fullstack-разработчик',
    },
    {
        name: 'Яна Линн',
        age: 27,
        group: 'Тестировщик',
    },
    {
        name: 'Дарина Романова',
        age: 26,
        group: 'Тестировщик',
    },
];
const logPerson = (person) => {
    console.log(`${person.name}, ${person.age}`);
};
exports.logPerson = logPerson;
