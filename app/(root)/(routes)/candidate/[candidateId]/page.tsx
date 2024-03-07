import prismadb from "@/lib/prismadb";
import React from "react";
import { CandidateForm } from "./components/candidate-form";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface CandidateIdPageProps {
  params: {
    candidateId: string;
  };
}

const CandidateIdPage = async ({ params }: CandidateIdPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }
  // TODO : Check Subscription

  const candidate = await prismadb.candidate.findUnique({
    where: {
      id: params.candidateId,
      userId,
    },
  });

  const categories = await prismadb.category.findMany();

  return <CandidateForm initialData={candidate} categories={categories} />;
};

export default CandidateIdPage;
