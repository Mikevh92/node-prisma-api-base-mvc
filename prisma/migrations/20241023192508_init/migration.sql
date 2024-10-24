-- CreateTable
CREATE TABLE `estudiante` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NULL,
    `matricula` VARCHAR(255) NULL,
    `activo` INTEGER NULL DEFAULT 1,

    UNIQUE INDEX `estudiante_matricula_key`(`matricula`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
