import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { UserCredentials, userLogin } from "./app/actions/auth";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 10,
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        const payload: UserCredentials = {
          emailId: email as string,
          mobNo: "",
          password: password as string,
          screenSize: "",
          token: "",
          sessionID: "",
        };
        const user = await userLogin(payload);
        if (!user.success) {
          return null;
        }
        return {
          name: user.data.firstName + " " + user.data.lastName,
          email: user.data.emailId,
          id: user.data.token,
        };
      },
    }),
  ],
});
