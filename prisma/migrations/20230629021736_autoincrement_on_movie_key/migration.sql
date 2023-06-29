/*
  Warnings:

  - The primary key for the `Movie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Movie` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Watched` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `movieId` on the `Watched` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Watched" DROP CONSTRAINT "Watched_movieId_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Movie_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Watched" DROP CONSTRAINT "Watched_pkey",
DROP COLUMN "movieId",
ADD COLUMN     "movieId" INTEGER NOT NULL,
ADD CONSTRAINT "Watched_pkey" PRIMARY KEY ("userId", "movieId");

-- AddForeignKey
ALTER TABLE "Watched" ADD CONSTRAINT "Watched_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
