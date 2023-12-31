import { PrismaClient } from "@prisma/client";
import axios, { AxiosRequestConfig } from "axios";
import { Movie } from "@/services/movie";

function dtoToMovie(movieDto): Movie {
	const {
		titleText,
		releaseDate,
		ratingsSummary,
		plot,
		genres,
		primaryImage
	} = movieDto;

	const { day, month, year } = releaseDate;
	return {
		title: titleText.text,
		releaseDate: new Date(`${year ?? 2022}-${month ?? 1}/${day ?? 1}`),
		genre: genres?.genres[0]?.text ?? "Generic",
		imdbScore: ratingsSummary?.aggregateRating ?? -1,
		plot: plot?.plotText?.plainText ?? "no plot available",
		poster: primaryImage?.url ?? "no image available"
	};
}

const options: AxiosRequestConfig = {
	method: "GET",
	baseURL: process.env.MOVIES_API_URL,
	headers: {
		"X-RapidAPI-Key": process.env.MOVIES_API_KEY,
		"X-RapidAPI-Host": process.env.MOVIES_API_HOST
	},
	params: {
		startYear: "2020",
		endYear: "2022",
		titleType: "movie",
		info: "base_info",
		limit: "50",
	},
};

const prisma = new PrismaClient();

async function isPopulated(): Promise<boolean> {
	return await prisma.movie.findFirst({ where: { id: { gt: 0 } } }) !== null;
}

async function seed(): Promise<void> {
	if (await isPopulated()) {
		return;
	}

	const response = await axios.request(options);
	const data = response.data;

	if (!data.results || !Array.isArray(data.results)) {
		return;
	}

	const results: [] = data.results;
	const movies: Movie[] = results.map(dtoToMovie);

	await prisma.movie.createMany({
		data: movies
	});
}

seed()
	.catch((err) => console.log(err))
	.finally(() => prisma.$disconnect());
