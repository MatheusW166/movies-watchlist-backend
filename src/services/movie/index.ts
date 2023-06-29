import { Movie, MovieCreateResult } from "./types";

async function create(movie: Movie): Promise<MovieCreateResult> {
  // TODO: implementar criação de filmes
  throw "";
}

async function deleteById(id: number): Promise<void> {
  // TODO: implementar exclusão de filmes
  throw "";
}

async function findByTitle(title: string): Promise<MovieCreateResult[]> {
  // TODO: implementar busca de filmes
  throw "";
}

async function markAsWatched(userId: number, movieId: number): Promise<void> {
  // TODO: implementar watchlist de filmes
  throw "";
}

export * from "./types";
