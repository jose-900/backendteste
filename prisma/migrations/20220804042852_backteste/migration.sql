-- CreateTable
CREATE TABLE "customer" (
    "customer_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "document" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("customer_id")
);
