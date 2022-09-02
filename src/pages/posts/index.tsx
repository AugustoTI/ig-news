import * as Prismic from '@prismicio/client';
import * as PrismicH from '@prismicio/helpers';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>
      <main className={styles.container}>
        <ul className={styles.posts}>
          {posts.map(({ title, excerpt, slug, updatedAt }) => (
            <li key={slug}>
              <a href="">
                <time>{updatedAt}</time>
                <strong>{title}</strong>
                <p>{excerpt}</p>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.get({
    predicates: [Prismic.predicate.at('document.type', 'post')],
    fetch: ['data.title', 'data.content'],
    pageSize: 10,
  });

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: PrismicH.asText(post.data.title),
      excerpt:
        post.data.content.find((content: any) => content.type === 'paragraph')
          ?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        },
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
