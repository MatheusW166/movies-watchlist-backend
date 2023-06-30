export type Movie = {
  title: string;
  releaseDate: Date;
  imdbScore: number;
  plot: string;
  genre: string;
  poster: string;
};

export type MovieCreateResult = Movie & {
  id: number
};

export type MovieUpdate = Partial<Movie>;
