/*
  Warnings:

  - You are about to drop the `tb_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tb_user";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "pw" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
