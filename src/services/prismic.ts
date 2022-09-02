import * as Prismic from '@prismicio/client';

const repositoryName = 'next-ignews-rocketseat';
const endpoint = Prismic.getRepositoryEndpoint(repositoryName);

export const getPrismicClient = () => {
  const prismic = Prismic.createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN as string,
  });

  return prismic;
};
