// setup providers -- google authentication
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  async session({ session }) {
    // data about the user, to maintain session
    const sessionUser = await User.findOne({ email: session.user.email });
    // update session id with current user id
    session.user.id = sessionUser._id.toString();

    return session;
  },
  async signIn({ profile }) {
    try {
      await connectToDB();

      // check if user exists
      const userExists = await User.findOne({ email: profile.email });

      // if not, create new user & save to db
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", " ").toLowerCase(),
          image: profile.image,
        });
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };

// every nextjs route is a serverless route
