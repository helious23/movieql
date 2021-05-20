let movies = [
  {
    id: 0,
    name: "StarWars",
    score: 1,
  },
  {
    id: 1,
    name: "Matrix",
    score: 5,
  },
  {
    id: 2,
    name: "Lord of the rings",
    score: 99,
  },
  {
    id: 3,
    name: "Godfather",
    score: 1,
  },
  {
    id: 4,
    name: "Logan",
    score: 22,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredPeople = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
