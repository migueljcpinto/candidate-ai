const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Esquerda" },
        { name: "Centro-Esquerda" },
        { name: "Centro" },
        { name: "Centro-Direita" },
        { name: "Direita" },
        { name: "Populismo" },
        { name: "Ecologismo" },
      ],
    });
  } catch (error) {
    console.error("Error seeding default categories", error);
  } finally {
    await db.$disconnect();
  }
}

main();
