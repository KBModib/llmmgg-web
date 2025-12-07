import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  console.log("Checking users in database...\n");

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      emailVerified: true,
    },
  });

  console.log(`Total users: ${users.length}\n`);

  if (users.length > 0) {
    console.log("Users:");
    users.forEach((user) => {
      console.log(
        `- ${user.name ?? "No name"} (${user.email}) - ${user.role} - Verified: ${!!user.emailVerified}`
      );
    });
  } else {
    console.log("No users found in database.");
    console.log("\nTo create a test user, you can:");
    console.log("1. Use the registration form at /portal/register");
    console.log("2. Run: npx prisma studio (to manually add users)");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
