import { NextPage } from 'next';
import Head from 'next/head';
import styles from './styles.module.scss';

const Posts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>
      <main className={styles.container}>
        <ul className={styles.posts}>
          <li>
            <a href="#">
              <time>12 de março de 2021</time>
              <strong>What Is React and How to Master It?</strong>
              <p>
                React is a JavaScript library for creating user interfaces.
                First up, note that React is a library and not a framework,
                though it&apos;s often referred to as one. This is because it
                doesn&apos;t create any sort of &quot;scaffold&quot; for the
                project. That means that this library alone is generally not
                enough to complete a project. Indeed, React developers often
                create apps using extra tools like Redux, TypeScript, and Jest.
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <time>12 de março de 2021</time>
              <strong>What Is React and How to Master It?</strong>
              <p>
                React is a JavaScript library for creating user interfaces.
                First up, note that React is a library and not a framework,
                though it&apos;s often referred to as one. This is because it
                doesn&apos;t create any sort of &quot;scaffold&quot; for the
                project. That means that this library alone is generally not
                enough to complete a project. Indeed, React developers often
                create apps using extra tools like Redux, TypeScript, and Jest.
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <time>12 de março de 2021</time>
              <strong>What Is React and How to Master It?</strong>
              <p>
                React is a JavaScript library for creating user interfaces.
                First up, note that React is a library and not a framework,
                though it&apos;s often referred to as one. This is because it
                doesn&apos;t create any sort of &quot;scaffold&quot; for the
                project. That means that this library alone is generally not
                enough to complete a project. Indeed, React developers often
                create apps using extra tools like Redux, TypeScript, and Jest.
              </p>
            </a>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Posts;
