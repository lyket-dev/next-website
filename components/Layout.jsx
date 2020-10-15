import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <main>
      <Head>
        <title>
          Lyket - Instantly add clap and like buttons on your website
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#21fdd5" />
        <meta
          name="description"
          content="Bring your content to life! Lyket lets you instantly implement a feedback system in any website with clap/like/vote buttons that respect your visitor's privacy 👍❤️👏"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
