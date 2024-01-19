/*
  Warnings:

  - You are about to drop the column `createdAt` on the `user_profile` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `user_profile` table. All the data in the column will be lost.
  - You are about to drop the column `franchiseId` on the `user_profile` table. All the data in the column will be lost.
  - You are about to drop the column `isActivated` on the `user_profile` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `user_profile` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user_profile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_profile" DROP CONSTRAINT "user_profile_franchiseId_fkey";

-- DropIndex
DROP INDEX "user_profile_franchiseId_idx";

-- AlterTable
ALTER TABLE "user_profile" DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "franchiseId",
DROP COLUMN "isActivated",
DROP COLUMN "isDeleted",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "franchise_id" UUID,
ADD COLUMN     "is_activated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "user_profile_franchise_id_idx" ON "user_profile"("franchise_id");

-- AddForeignKey
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_franchise_id_fkey" FOREIGN KEY ("franchise_id") REFERENCES "franchise"("id") ON DELETE SET NULL ON UPDATE CASCADE;
