/*
  Warnings:

  - The primary key for the `genres` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `genres` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GenreToMovie" DROP CONSTRAINT "_GenreToMovie_A_fkey";

-- DropIndex
DROP INDEX "genres_name_key";

-- AlterTable
ALTER TABLE "_GenreToMovie" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "genres" DROP CONSTRAINT "genres_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "genres_pkey" PRIMARY KEY ("name");

-- AddForeignKey
ALTER TABLE "_GenreToMovie" ADD CONSTRAINT "_GenreToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "genres"("name") ON DELETE CASCADE ON UPDATE CASCADE;
