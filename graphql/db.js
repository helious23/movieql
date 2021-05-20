export const people = [
  {
    id: 1,
    name: "Max",
    age: 20,
    gender: "male",
  },
  {
    id: 2,
    name: "Jessie",
    age: 20,
    gender: "female",
  },
  {
    id: 3,
    name: "Jenny",
    age: 20,
    gender: "female",
  },
  {
    id: 4,
    name: "Lucy",
    age: 20,
    gender: "female",
  },
  {
    id: 5,
    name: "Flynn",
    age: 20,
    gender: "male",
  },
  {
    id: 6,
    name: "Nico",
    age: 20,
    gender: "male",
  },
  {
    id: 7,
    name: "Lynn",
    age: 20,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
