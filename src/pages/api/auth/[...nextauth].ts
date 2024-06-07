import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { mockProviders } from "next-auth/client/__tests__/helpers/mocks";
import credentials = mockProviders.credentials;
import credentials = mockProviders.credentials;
import credentials = mockProviders.credentials;

const testValidUser = { username: "test@email.com", password: "password" };

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "",
      type: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const username = credentials["username"];
        const password = credentials["password"];

        const user = { id: "1", name: "J Smith", email: username };

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
