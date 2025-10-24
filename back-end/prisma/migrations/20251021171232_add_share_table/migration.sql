-- CreateTable
CREATE TABLE "Favorite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tmdbId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT,
    "poster" TEXT,
    "rating" REAL,
    "releaseDate" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Share" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shareId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "favorites" JSONB NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Share_shareId_key" ON "Share"("shareId");
