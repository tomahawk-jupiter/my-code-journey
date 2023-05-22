import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const SITE_TITLE = "myCodeJourney";

export default function Layout({ children }) {
  const router = useRouter();
  const currentRoute = router.pathname;

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
        {/* <h2 className={utilStyles.headingLg}>
          <Link href="/" className={utilStyles.colorInherit}>
            {SITE_TITLE}
          </Link>
        </h2> */}
        <Link
          className={`${styles.navLink} ${
            currentRoute === "/" ? styles.navLinkActive : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${styles.navLink} ${
            currentRoute === "/about" ? styles.navLinkActive : ""
          }`}
          href="/about"
        >
          About
        </Link>
      </header>

      <main>{children}</main>

      <div className={`${styles.footerSection} ${utilStyles.lightText}`}>
        <div className={styles.footerLinksContainer}>
          <div className={styles.footerLinksCol}>
            <Link className={styles.footerLink} href="/">
              Home
            </Link>
            <Link className={styles.footerLink} href="/">
              About
            </Link>
          </div>

          <div className={styles.footerLinksCol}>
            <Link className={styles.footerLink} href="/">
              Contact
            </Link>
            <Link className={styles.footerLink} href="/">
              GitHub
            </Link>
          </div>
        </div>

        <div className={utilStyles.lightText}>Copyright © {SITE_TITLE}</div>
      </div>
    </div>
  );
}
