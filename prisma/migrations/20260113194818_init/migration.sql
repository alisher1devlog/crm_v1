/*
  Warnings:

  - A unique constraint covering the columns `[lesson_id]` on the table `attendance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `staffs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `students` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `start_time` on the `lessons` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `end_time` on the `lessons` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `day` on the `schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `start_time` on the `schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `end_time` on the `schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `username` to the `staffs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StudentGroupStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'COMPLETED');

-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- DropForeignKey
ALTER TABLE "attendance" DROP CONSTRAINT "attendance_lesson_id_fkey";

-- DropForeignKey
ALTER TABLE "attendance_details" DROP CONSTRAINT "attendance_details_attendance_id_fkey";

-- DropForeignKey
ALTER TABLE "attendance_details" DROP CONSTRAINT "attendance_details_student_id_fkey";

-- DropForeignKey
ALTER TABLE "groups" DROP CONSTRAINT "groups_course_id_fkey";

-- DropForeignKey
ALTER TABLE "lessons" DROP CONSTRAINT "lessons_group_id_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_group_id_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_student_id_fkey";

-- DropForeignKey
ALTER TABLE "schedule" DROP CONSTRAINT "schedule_group_id_fkey";

-- DropForeignKey
ALTER TABLE "student_groups" DROP CONSTRAINT "student_groups_group_id_fkey";

-- DropForeignKey
ALTER TABLE "student_groups" DROP CONSTRAINT "student_groups_student_id_fkey";

-- AlterTable
ALTER TABLE "lessons" DROP COLUMN "start_time",
ADD COLUMN     "start_time" TIME(0) NOT NULL,
DROP COLUMN "end_time",
ADD COLUMN     "end_time" TIME(0) NOT NULL;

-- AlterTable
ALTER TABLE "schedule" DROP COLUMN "day",
ADD COLUMN     "day" "DayOfWeek" NOT NULL,
DROP COLUMN "start_time",
ADD COLUMN     "start_time" TIME(0) NOT NULL,
DROP COLUMN "end_time",
ADD COLUMN     "end_time" TIME(0) NOT NULL;

-- AlterTable
ALTER TABLE "staffs" ADD COLUMN     "username" VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE "student_groups" ADD COLUMN     "status" "StudentGroupStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "username" VARCHAR(50);

-- CreateIndex
CREATE UNIQUE INDEX "attendance_lesson_id_key" ON "attendance"("lesson_id");

-- CreateIndex
CREATE INDEX "attendance_details_attendance_id_idx" ON "attendance_details"("attendance_id");

-- CreateIndex
CREATE INDEX "attendance_details_student_id_idx" ON "attendance_details"("student_id");

-- CreateIndex
CREATE INDEX "groups_course_id_idx" ON "groups"("course_id");

-- CreateIndex
CREATE INDEX "groups_teacher_id_idx" ON "groups"("teacher_id");

-- CreateIndex
CREATE INDEX "lessons_group_id_idx" ON "lessons"("group_id");

-- CreateIndex
CREATE INDEX "lessons_lesson_date_idx" ON "lessons"("lesson_date");

-- CreateIndex
CREATE INDEX "payments_student_id_idx" ON "payments"("student_id");

-- CreateIndex
CREATE INDEX "payments_group_id_idx" ON "payments"("group_id");

-- CreateIndex
CREATE INDEX "payments_payment_date_idx" ON "payments"("payment_date");

-- CreateIndex
CREATE INDEX "schedule_group_id_idx" ON "schedule"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "schedule_group_id_day_start_time_key" ON "schedule"("group_id", "day", "start_time");

-- CreateIndex
CREATE UNIQUE INDEX "staffs_username_key" ON "staffs"("username");

-- CreateIndex
CREATE INDEX "student_groups_student_id_idx" ON "student_groups"("student_id");

-- CreateIndex
CREATE INDEX "student_groups_group_id_idx" ON "student_groups"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "students_username_key" ON "students"("username");

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_groups" ADD CONSTRAINT "student_groups_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_groups" ADD CONSTRAINT "student_groups_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lessons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_details" ADD CONSTRAINT "attendance_details_attendance_id_fkey" FOREIGN KEY ("attendance_id") REFERENCES "attendance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_details" ADD CONSTRAINT "attendance_details_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;
