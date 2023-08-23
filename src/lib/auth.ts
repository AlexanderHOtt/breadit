import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {strategy: "jwt"},
  pages: {signIn: "/sing-in"},
  providers: [
    
  ]
};
