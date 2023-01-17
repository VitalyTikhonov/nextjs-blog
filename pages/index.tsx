import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I am a frontend and backend web developer.</p>

        <p>I can make web-sites (both frontend and backend) and desktop apps. Please contact me if interested:</p>

        <ul>
          <li><a href="https://t.me/VitalSense">Telegram @VitalSense</a></li>
          <li><a href="mailto:vitaliy.a.tikhonov@yandex.ru">vitaliy.a.tikhonov@yandex.ru</a></li>
        </ul>

        <p>
          This site is the result of me following <a href="https://nextjs.org/learn">the Next.js tutorial</a> (which is,
          btw, great, thank you, NextJS). It contains a few sample blog post pages:
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
