import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import {NextAuthOptions} from "next-auth";
import { authOptions } from "../authoptions";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }