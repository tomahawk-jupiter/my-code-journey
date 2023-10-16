import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

import { getAllPostIds, getPostData } from "../../utils/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// TODO:
// Add meta data in Head for individual posts - keywords, description.
// Check how next handles duplicate meta tags, ie inherited from layout.
// Do I need to include the "key" attribute?

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
        <meta name="keywords" content={postData.tags.join(", ")} />
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>

        <div>
          {postData.tags.map((tag, index) => (
            <span className={utilStyles.tagText} key={index}>
              #{tag}{" "}
            </span>
          ))}
        </div>

        <div
          className="blog-content-container"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </>
  );
}

// export default function Post() {
//   return <Layout>...</Layout>;
// }

// export async function getStaticPaths() {
//   // Return a list of possible value for id
// }

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
// }
