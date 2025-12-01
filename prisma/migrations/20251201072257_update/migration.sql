-- DropForeignKey
ALTER TABLE "MatchPlayerLog" DROP CONSTRAINT "MatchPlayerLog_assistPlayerId_fkey";

-- DropForeignKey
ALTER TABLE "MatchPlayerLog" DROP CONSTRAINT "MatchPlayerLog_goalScorerId_fkey";

-- DropIndex
DROP INDEX "MatchPlayerLog_goalScorerId_key";
