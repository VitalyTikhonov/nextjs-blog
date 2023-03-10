import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I am a frontend and backend web developer.</p>

        <p>I can make web-sites and desktop apps. Please contact me if interested:</p>

        <ul>
          <li><a href="https://t.me/VitalSense">Telegram @VitalSense</a></li>
          <li><a href="mailto:vitaliy.a.tikhonov@yandex.ru">vitaliy.a.tikhonov@yandex.ru</a></li>
        </ul>

        <p>
          This site is the result of me following <a href="https://nextjs.org/learn">the Next.js tutorial</a> (which is,
          btw, great, thank you, NextJS). There are a few sample blog post pages at here:
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
