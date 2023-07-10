import { GenreCreateParams } from "@/dto";

function mapToGenresArray(genres?: string[]): GenreCreateParams[] {
	if (!genres) return [];
	return genres.map((name) => ({ name }));
}

export { mapToGenresArray };
