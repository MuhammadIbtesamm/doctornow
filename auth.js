import connectDB from "@/lib/connectDB";
import { UserModel } from "@/lib/models/UserModel";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

async function handlelogin(obj) {
  await connectDB();
  const user = await UserModel.findOne({ email: obj.email });
  if (user) {
    return user;
  } else {
    let newUser = await UserModel({
      email: obj.email,
      firstname: obj.firstname,
      lastname: obj.lastname,
      picture: obj.picture,
      role: "user",
    });
    newUser = await newUser.save();
    return newUser;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        let obj = {
          firstname: profile.given_name,
          lastname: profile.family_name,
          email: profile.email,
          picture: profile.picture,
        };
        await handlelogin(obj);
        return true;
      }
      return true;
    },
    async session({ session, token }) {
      if (session?.user) {
        const user = await UserModel.findOne({ email: session.user.email });
        if (user) {
          session.user._id = user._id.toString();
          session.user.role = user.role;
          session.user.isApproved = user.isApproved;
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token._id = user._id;
      }
      return token;
    },
  },
  pages: {
    signIn: '/signin',
    error: '/error',
  },
  session: {
    strategy: "jwt",
  },
});

export const authConfig = {
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
  },
};
