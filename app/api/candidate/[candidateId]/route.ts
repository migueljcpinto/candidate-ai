import prismadb from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { candidateId: string } }
) {
  try {
    const body = await req.json();
    const user = await currentUser();
    const { name, description, instructions, seed, src, categoryId } = body;

    if (!params.candidateId) {
      return new NextResponse("Candidate ID is required", { status: 400 });
    }

    if (!user || !user.id || !user.firstName) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (
      !src ||
      !name ||
      !description ||
      !instructions ||
      !seed ||
      !categoryId
    ) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // TODO: Check for subscription
    const candidate = await prismadb.candidate.update({
      where: {
        id: params.candidateId,
        userId: user.id,
      },
      data: {
        categoryId,
        userId: user.id,
        userName: user.firstName,
        src,
        name,
        description,
        instructions,
        seed,
      },
    });

    return NextResponse.json(candidate);
  } catch (error) {
    console.log("[CANDIDATE_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { candidateId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const candidate = await prismadb.candidate.delete({
      where: {
        userId,
        id: params.candidateId,
      },
    });

    return NextResponse.json(candidate);
  } catch (error) {
    console.log("[CANDIDATE_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
