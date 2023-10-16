import Head from "next/head";
import { SITE_TITLE } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";

import { getSortedPostsData } from "../utils/posts";

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
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXl}>Recent</h1>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, tags, description }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>
                <h3 className={utilStyles.postTitleLink}>{title}</h3>
                {/* <div className={utilStyles.descriptionText}>{description}</div> */}
              </Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <div>
                {tags.map((tag, index) => (
                  <span className={utilStyles.tagText} key={index}>
                    #{tag}{" "}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
