import { prisma } from "../db.config.js";

export const getAllStoreReviews = async (storeId, cursor) => {
  const reviews = await prisma.Review.findMany({
    select: {
      id: true,
      content: true,
      store: true,
      member: true,
    },
    where: { storeId: storeId, id: { gt: cursor } },
    orderBy: { id: "asc" },
    take: 5,
  });

  return reviews;
};
