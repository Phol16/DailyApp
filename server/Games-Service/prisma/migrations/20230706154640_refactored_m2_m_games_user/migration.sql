/*
  Warnings:

  - You are about to drop the `_gamestouser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_gamestouser` DROP FOREIGN KEY `_GamesToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_gamestouser` DROP FOREIGN KEY `_GamesToUser_B_fkey`;

-- DropTable
DROP TABLE `_gamestouser`;

-- CreateTable
CREATE TABLE `UserGames` (
    `gamesId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`gamesId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserGames` ADD CONSTRAINT `UserGames_gamesId_fkey` FOREIGN KEY (`gamesId`) REFERENCES `Games`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserGames` ADD CONSTRAINT `UserGames_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
