-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED');

-- CreateEnum
CREATE TYPE "public"."Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateTable
CREATE TABLE "public"."Todo" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "dueDate" VARCHAR(10) NOT NULL,
    "status" "public"."Status" NOT NULL DEFAULT 'NOT_STARTED',
    "priority" "public"."Priority" NOT NULL DEFAULT 'LOW',
    "description" TEXT,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
