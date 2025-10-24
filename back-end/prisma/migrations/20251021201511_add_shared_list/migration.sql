/*
  Warnings:

  - You are about to drop the `Share` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `shareId` on the `Favorite` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Share_shareId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Share";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "SharedList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Favorite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tmdbId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT,
    "poster" TEXT,
    "rating" REAL,
    "releaseDate" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sharedListId" TEXT,
    CONSTRAINT "Favorite_sharedListId_fkey" FOREIGN KEY ("sharedListId") REFERENCES "SharedList" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Favorite" ("createdAt", "id", "overview", "poster", "rating", "releaseDate", "title", "tmdbId") SELECT "createdAt", "id", "overview", "poster", "rating", "releaseDate", "title", "tmdbId" FROM "Favorite";
DROP TABLE "Favorite";
ALTER TABLE "new_Favorite" RENAME TO "Favorite";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
