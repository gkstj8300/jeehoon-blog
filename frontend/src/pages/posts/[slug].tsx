import React from 'react';
import getMarkdownPost from '@/utils/markDown/getMarkdownPost';
// import IndividualPost from '@/app/_components/_post/_individualPost/IndividualPost';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//     const { slug } = params;
//     const decodedSlug = decodeURIComponent(slug);
//     const post = await getMarkdownPost(decodedSlug);

//     return {
//         title: `${post.title}`,
//         description: post.description,
//     };
// }

// export default async function PostPage({ params }: { params: { slug: string } }) {
//     const { slug } = params;
//     const decodedSlug = decodeURIComponent(slug);
//     const post = await getMarkdownPost(decodedSlug);
// }