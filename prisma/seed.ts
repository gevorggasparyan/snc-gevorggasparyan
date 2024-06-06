import { PrismaClient } from "@prisma/client";
import { Person } from "@/utils/common/person";
import { mockUsers } from "@/utils/server/mock-users";

const prisma = new PrismaClient();

async function main() {
  // Create mock companies
  const companyA = await prisma.company.create({
    data: {
      name: "Company A",
    },
  });

  const companyB = await prisma.company.create({
    data: {
      name: "Company B",
    },
  });

  // Create mock users and assign them to companies
  for (const person of Object.values(Person)) {
    const user = mockUsers[person];
    if (user) {
      const createdUser = await prisma.user.create({
        data: {
          backgroundImageUrl: user.backgroundImageUrl,
          profilePictureUrl: user.profilePictureUrl,
          name: user.name,
          title: user.title,
          followers: user.followers,
          following: user.following,
          companies: {
            connect:
              person === Person.PersonA
                ? [{ id: companyA.id }]
                : [{ id: companyB.id }],
          },
        },
      });

      // Assign users to both companies for many-to-many relationship
      if (person === Person.PersonA) {
        await prisma.userCompanies.create({
          data: {
            userId: createdUser.id,
            companyId: companyB.id,
          },
        });
      } else if (person === Person.PersonB) {
        await prisma.userCompanies.create({
          data: {
            userId: createdUser.id,
            companyId: companyA.id,
          },
        });
      }
    }
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
