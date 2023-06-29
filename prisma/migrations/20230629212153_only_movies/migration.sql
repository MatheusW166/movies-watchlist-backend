/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Watched` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Watched" DROP CONSTRAINT "Watched_movieId_fkey";

-- DropForeignKey
ALTER TABLE "Watched" DROP CONSTRAINT "Watched_userId_fkey";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Watched";
