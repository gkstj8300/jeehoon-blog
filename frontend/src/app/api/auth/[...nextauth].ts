import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
			clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
		}),
	],
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET
};

export default NextAuth(authOptions);
