import { ExprArg, query as q } from 'faunadb';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { email } = user;

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index('user_by_email'), q.Casefold(email as ExprArg)),
              ),
            ),
            q.Create(q.Collection('users'), {
              data: { email },
            }),
            q.Get(
              q.Match(q.Index('user_by_email'), q.Casefold(email as ExprArg)),
            ),
          ),
        );

        return true;
      } catch (err) {
        return false;
      }
    },
  },
});