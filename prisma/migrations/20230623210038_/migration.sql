/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "tb_user" (
    "id" TEXT NOT NULL,
    "pw" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "tb_user_pkey" PRIMARY KEY ("id")
);
