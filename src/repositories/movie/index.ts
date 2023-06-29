import { prisma } from "@/config";
import { Movie, MovieCreateResult } from "@/services/movie";

async function create(movie: Movie): Promise<MovieCreateResult> {
  return await prisma.movie.create({
    data: movie,
  });
}

async function deleteById(id: number): Promise<void> {
  await prisma.movie.delete({
    where: { id }
  });
}

async function findById(id: number): Promise<MovieCreateResult | null> {
  return await prisma.movie.findUnique({
    where: { id }
  });
}

async function findAll(): Promise<MovieCreateResult[]> {
  return await prisma.movie.findMany();
}

async function findFirstByTitle(title: string): Promise<MovieCreateResult | null> {
  return await prisma.movie.findFirst({
    where: {
      title: {
        equals: title,
        mode: "insensitive"
      }
    }
  });
}

async function findManyByTitle(title: string): Promise<MovieCreateResult[]> {
  return await prisma.movie.findMany({
    where: {
      title: {
        contains: title,
        mode: "insensitive"
      }
    }
  });
}

async function markAsWatched(userId: number, movieId: number): Promise<void> {
  await prisma.watched.create({
    data: {
      movieId,
      userId
    }
  });
}

const movieRepository = {
  create,
  deleteById,
  findManyByTitle,
  findFirstByTitle,
  markAsWatched,
  findById,
  findAll
};

export default movieRepository;
