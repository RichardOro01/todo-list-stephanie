import { paths } from "@/config";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvide from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvide({
      name: "credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials?.password === "peshosha") {
          return { id: "Stephanie" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: paths.login,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
