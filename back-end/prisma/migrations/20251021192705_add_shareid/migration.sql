/*
  Warnings:

  - A unique constraint covering the columns `[shareId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Favorite" ADD COLUMN "shareId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_shareId_key" ON "Favorite"("shareId");
