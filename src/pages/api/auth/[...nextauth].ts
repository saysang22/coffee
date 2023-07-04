//@/pages/api/auth[...nextauth].js
import clientPromise from '@/utill/database'
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import { NextApiRequest } from 'next'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { WithId } from 'mongodb'

const id = process.env.GITHUB_ID
const pw = process.env.GITHUM_PW

const idType: string = id ?? '';
const pwType: string = pw ?? '';


export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: idType,
      clientSecret: pwType,
    }),
    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      //2. 로그인요청시 실행되는코드
      //직접 DB에서 아이디,비번 비교하고
      //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials: Record<"email" | "password", string> | undefined, req: NextApiRequest) {

        let { email, password } = credentials ?? {}
        password = credentials?.password ?? ''
        let db = (await clientPromise).db()


        interface User {
          id: string,
          name: string,
          email: string,
          password: string
        }

        let user: User | null = null

        if (email) {
          user = await db
            .collection("user_cred")
            .findOne({ email: email }) as WithId<User> | null;
        }

        if (!user) {
          console.log("해당 이메일은 없음");
          return null;
        }
        const pwcheck = await bcrypt.compare(
          password,
          user.password
        );
        if (!pwcheck) {
          console.log("비번틀림");
          return null;
        }

        return user;
      },
    }),
  ],
  //3. jwt 써놔야 잘됩니다 + jwt 만료일설정
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, //30일
  },

  callbacks: {

    session({ session }) {
      return session
    },
    jwt({ token }) {
      return token
    }
  },
  secret: 'qwer1234',
  adapter: MongoDBAdapter(clientPromise)

};


export default NextAuth(authOptions);