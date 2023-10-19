import NextAuth from "next-auth/next"

declare module "next-auth" {

  interface portal{
    id: number;
    name: string;
  }
  interface Session{
    user:{
      token:string;
      portals: portal[];
    } & DefaultSession["user"],
  }
}