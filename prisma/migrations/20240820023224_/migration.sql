/*
  Warnings:

  - A unique constraint covering the columns `[user_email,anime_mal_id,anime_image,anime_name]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `anime_image` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `anime_name` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Collection_user_email_anime_mal_id_key` ON `collection`;

-- AlterTable
ALTER TABLE `collection` ADD COLUMN `anime_image` VARCHAR(191) NOT NULL,
    ADD COLUMN `anime_name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Collection_user_email_anime_mal_id_anime_image_anime_name_key` ON `Collection`(`user_email`, `anime_mal_id`, `anime_image`, `anime_name`);
