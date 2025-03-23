
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import type { Session } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session: async ({
      session,
      user,
    }: {
      session: Session & { user?: { id?: string } };
      user: AdapterUser;
    }) => {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};