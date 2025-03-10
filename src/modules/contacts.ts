type User = {
  name: string,
  age: number,
  group: string,
};

export const users: User[] = [
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

export const logUser = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
}
