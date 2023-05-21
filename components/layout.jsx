import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const SITE_TITLE = "myCodeJourney";

export default function Layout({ children }) {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{SITE_TITLE}</title>
        <meta
          name="description"
          content="A blog to document things about coding I learn."
        />
        <meta name="keywords" content="blog, coding" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            SITE_TITLE
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        <Link href="/">Blog</Link>
        <Link href="/">About</Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/" className={utilStyles.colorInherit}>
            {SITE_TITLE}
          </Link>
        </h2>
      </header>

      <main>{children}</main>

      <div className={styles.backToHome}>
        <Link href="/">Blog</Link>
        <Link href="/">About</Link>
      </div>
    </div>
  );
}
