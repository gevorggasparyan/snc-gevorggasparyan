import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const testValidUser = { username: "test@email.com", password: "password" };

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials["username"];
        const password = credentials["password"];

        console.log("credentials", credentials);
        console.log("username", username);
        console.log("password", password);

        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (
          username === testValidUser.username &&
          password === testValidUser.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

export default handler;