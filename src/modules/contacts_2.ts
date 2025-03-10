type User = {
  name: string,
  age: number,
  group: string,
};

type Admin = {
  name: string;
  age: number;
  role: string;
}

type Person = Admin | User;

export const persons: Person[] = [
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

export const logPerson = (person: Person) => {
  console.log(`${person.name}, ${person.age}`);
}
