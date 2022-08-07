/*
  Warnings:

  - You are about to drop the column `customer_id` on the `product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_customer_id_fkey";

-- AlterTable
ALTER TABLE "product" DROP COLUMN "customer_id";
