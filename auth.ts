import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import { UserCredentials, userLogin } from "./app/actions/auth";

export interface SessionUserProfile {
  id: string;
  name: string;
  email: string;
  profileImage: string | null;
}

declare module "next-auth" {
  interface Session {
    user: SessionUserProfile;
  }
}

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
          image: user.data.profilePhoto,
          id: user.data.token,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    session({ session, token }) {
      const user = token as typeof token & SessionUserProfile;
      session.user = {
        ...session.user,
        id: user.id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
      };
      return session;
    },
  },
});
