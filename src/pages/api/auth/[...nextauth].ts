// next auth is use for authentication using google github
import NextAuth from "next-auth/next";
import {authOptions} from "@/lib/auth";

export default NextAuth(authOptions)