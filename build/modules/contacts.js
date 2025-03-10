"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logUser = exports.users = void 0;
exports.users = [
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
const logUser = (user) => {
    console.log(`${user.name}, ${user.age}`);
};
exports.logUser = logUser;
