import { Candidates } from "@/app/(root)/(routes)/candidates-list/components/candidates";
import { SearchInput } from "@/app/(root)/(routes)/candidates-list/components/search-input";
import VideoDemo from "@/components/video-demo";
import prismadb from "@/lib/prismadb";
import React from "react";

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}

const RootPage = async ({ searchParams }: RootPageProps) => {
  /*   const data = await prismadb.candidate.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });

  const categories = await prismadb.category.findMany(); */

  return (
    <div className="h-full p-4 space-y-2">
      <VideoDemo />
      {/* <SearchInput /> */}
      {/*       <Categories data={categories} /> */}
      {/* <Candidates data={data} /> */}
    </div>
  );
};
export default RootPage;
