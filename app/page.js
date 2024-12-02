// Name: Josiane Nazaria De Souza
// Student ID: 200547851
// Email: 200547851@student.georgianc.on.ca

// app/page.js
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import Navfooter from "./components/Navfooter";
import "./globals.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josiane&apos;s Web Development Portfolio</title>
        <meta name="keywords" content="Next.js, portfolio, technology, web development" />
        <meta name="description" content="Josiane's Portfolio showcasing projects and blog about technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Josiane Nazaria De Souza" />
        <meta name="language" content="English" />
        <meta name="location" content="Canada" />
        <link rel="icon" href="/favicon.icon" sizes="any" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my personal website!</h1>
        <p className={styles.description}>
          Welcome to my personal website! Here, I showcase my projects, skills,
          and work experience. Feel free to explore and get in touch.
        </p>

        <div className={styles.ctaContainer}>
          <Link href="/about">
            <button className={styles.btn}>More About Me</button>
          </Link>
          <Link href="/portfolio">
            <button className={styles.btn}>My Portfolio</button>
          </Link>
        </div>

        <section className={styles.projects}>
          <h2 className={styles.h2}>Featured Projects</h2>
          <div className={styles.projectCards}>
            <div className={styles.card}>
              <h3 className={styles.h3}>Web Scraper</h3>
              <p className={styles.p}>A simple web scraper built with Next.js, scraping data from a website.</p>
              <Link href="/portfolio">
                <button className="btn btn-outline-primary">Learn More</button>
              </Link>
            </div>
            <div className={styles.card}>
              <h3 className={styles.h3}>Timezone</h3>
              <p className={styles.p}>This is a simple timezone API showing the current time in a selected timezone.</p>
              <Link href="/portfolio">
                <button className="btn btn-outline-primary">Learn More</button>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.skillsHome}>
          <h2 className={styles.h2}>Skills &amp; Technologies</h2>
          <div className={styles.skillsListHome}>
            <div>React</div>
            <div>Node.js</div>
            <div>Next.js</div>
            <div>HTML &amp; CSS</div>
          </div>
        </section>

      </main>
      <Navfooter />

    </div>

  );
}
