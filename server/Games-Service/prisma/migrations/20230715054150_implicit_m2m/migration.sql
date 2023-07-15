/*
  Warnings:

  - You are about to drop the `usergames` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `usergames` DROP FOREIGN KEY `UserGames_gamesId_fkey`;

-- DropForeignKey
ALTER TABLE `usergames` DROP FOREIGN KEY `UserGames_userId_fkey`;

-- DropTable
DROP TABLE `usergames`;

-- CreateTable
CREATE TABLE `_GamesToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_GamesToUser_AB_unique`(`A`, `B`),
    INDEX `_GamesToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GamesToUser` ADD CONSTRAINT `_GamesToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Games`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GamesToUser` ADD CONSTRAINT `_GamesToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
