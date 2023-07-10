import { PrismaClient } from "@prisma/client";
import { mapToGenresArray } from "@/utils";
import { movieApi } from "@/apis";

const prisma = new PrismaClient();

async function hasGenres() {
	return !!(await prisma.genre.findFirst());
}

async function main() {
	if (await hasGenres()) {
		return;
	}
	const genres = await movieApi.getGenres();
	await prisma.genre.createMany({
		data: mapToGenresArray(genres)
	});
}

main()
	.catch((err) => {
		console.log(err);
		process.exit(1);
	})
	.finally(() => prisma.$disconnect());
