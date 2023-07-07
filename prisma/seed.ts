import { PrismaClient } from "@prisma/client";
import { rapidApi } from "@/apis";

const prisma = new PrismaClient();

async function hasGenres(): Promise<boolean> {
	return !!(await prisma.genre.findFirst());
}

async function main(): Promise<void> {
	if (await hasGenres()) {
		return;
	}
	const genres = await rapidApi.getGenres();
	await prisma.genre.createMany({
		data: genres.map((name) => ({ name }))
	});
}

main()
	.catch((err) => {
		console.log(err);
		process.exit(1);
	})
	.finally(() => prisma.$disconnect());
