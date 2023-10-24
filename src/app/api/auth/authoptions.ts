import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import {NextAuthOptions} from "next-auth";
import { login } from "@/lib/apicalls";
export const authOptions: NextAuthOptions = {
    callbacks: {
        async jwt({ token, user }) {
            if(user){
            token.token = user;
            }
            return {...token}
        },
        async session({session, token}){
            session.user = token
            return session
        }
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            id: "credentials",
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "email", type: "text", placeholder: "user@info-rmi.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const response = await login(credentials?.email as string, credentials?.password as string);
                const userToken = await response;
                console.log(response);
                if(response!=false && userToken){
                    return userToken[0]["token"];
                } else{
                    return null
                }
            }

        })
    ],
    pages: {
        signIn: '/auth/',
        error: '/auth/',
    },
    secret: process.env.NEXTAUTH_SECRET,
    session:{
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    }
};
