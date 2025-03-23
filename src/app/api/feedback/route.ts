import { getServerSession } from "next-auth/next";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();



export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { content } = await req.json();

  const feedback = await prisma.feedback.create({
    data: {
      content,
      userId: session.user.id,
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
          email: true,
        },
      },
    },
  });

  return NextResponse.json(feedback);
}

export async function GET() {
  const feedbacks = await prisma.feedback.findMany({
    include: {
      user: {
        select: {
          name: true,
          image: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return NextResponse.json(feedbacks);
}