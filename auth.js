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
    let newUser = await UserModel(obj);
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
        const user = await handlelogin(obj);
        return user;
      }
    },
    async jwt({ token }) {
      const user = await handlelogin({ email: token.email });
      token.role = user.role;
      token._id = user._id;
      return token;
    },
    session({ session, token }) {
      session.user._id = token._id;
      session.user.role = token.role;
      return session;
    },
  },
});
