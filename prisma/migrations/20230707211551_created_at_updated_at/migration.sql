/*
  Warnings:

  - Added the required column `updatedAt` to the `rates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `wants_watch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rates" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "wants_watch" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
