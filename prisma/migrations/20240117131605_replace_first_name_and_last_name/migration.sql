/*
  Warnings:

  - You are about to drop the column `firstName` on the `user_profile` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `user_profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_profile" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "first_name" TEXT,
ADD COLUMN     "last_name" TEXT;
