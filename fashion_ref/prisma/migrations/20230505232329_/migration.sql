-- DropForeignKey
ALTER TABLE `Images` DROP FOREIGN KEY `Images_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Posts` DROP FOREIGN KEY `Posts_ibfk_1`;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`PostId`) REFERENCES `Posts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
