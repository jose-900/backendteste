/*
  Warnings:

  - Added the required column `product_id` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "address" ADD COLUMN     "product_id" TEXT NOT NULL;
