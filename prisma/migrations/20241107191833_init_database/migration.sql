-- CreateTable
CREATE TABLE `member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `name` VARCHAR(15) NOT NULL,
    `nickname` VARCHAR(20) NOT NULL,
    `gender` VARCHAR(15) NOT NULL,
    `inactive_date` DATE NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `photo_link` VARCHAR(255) NOT NULL DEFAULT '',

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `food` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `member_food` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `member_id` INTEGER NOT NULL,
    `food_id` INTEGER NOT NULL,

    INDEX `food_id`(`food_id`),
    INDEX `member_id`(`member_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `member_food` ADD CONSTRAINT `member_food_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `member_food` ADD CONSTRAINT `member_food_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
