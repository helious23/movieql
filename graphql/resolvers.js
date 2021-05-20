import { getById, getMovies } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    adMovie: (_, { name, score }) => {
      return;
    },
  },
};

export default resolvers;
