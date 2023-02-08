import { type NextPage } from "next";
import Head from "next/head";

import { NextPageWithLayout } from "./_app";
import { getLandingLayout } from "../components/layouts/landingLayout/landingLayout";
import Link from "next/link";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-red">Movie Rater</h1>
      <div className="mt-8 flex flex-col gap-6">
        <p className="text-lg text-white">Welcome to the app!</p>
        <p className="text-lg text-white">First off, what does the app do?</p>
        <p className="text-lg text-white">
          Well it is a relatively simple application that allows users to login
          and select between a list of movies to either bookmark as a favorite
          or leave a review on a movie that they have watched
        </p>
        <p className="text-lg text-white">
          It maintains user bookmarks and user reviews across the session by
          leveraging a <code className="text-red">postgresql</code> database!
        </p>
        <p className="text-lg text-white">
          Additionally the app will bring in other user reviews into the page
          and populate their reviews into the review page!
        </p>
        <p className="text-lg text-white">
          The application will be built using Next.js react framework for the
          frontend AND the backend, it will leverage the power of Prisma for
          mapping data to the DB, and will use TailwindCSS and HeadlessUI for
          the style system.
        </p>
        <p className="text-lg text-white">
          The app was set up using create-t3-app at the core and that went a
          long way towards allowing me to maintain a typesafe application that
          has that typesafety across the backend and the front end.
        </p>
        <p className="text-lg text-white">
          It should be noted that the design for this application actually comes
          from a challenge that I found on{" "}
          <a
            className="font-semibold text-red underline"
            href="https://www.frontendmentor.io"
            target="_blank"
            rel="noreferrer"
          >
            frontendmentor.io
          </a>
        </p>
        <p className="text-lg text-white">
          Interested in the code that went into it? Check out this link:
        </p>
        <Link
          href="https://github.com/barnettet31/entertainment-web-app"
          target="_blank"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-red px-6 py-3 text-center text-lg font-medium text-white shadow-sm hover:bg-red/70 md:w-1/4"
        >
          See the Code
        </Link>
        <p className="text-lg text-white">
          Or are you more interested digging into the app? Go login with Discord
          here:
        </p>
        <Link
          href="/signin"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-red px-6 py-3 text-center text-lg font-medium text-white shadow-sm hover:bg-red/70 md:w-1/4"
        >
          Login Page
        </Link>
      </div>
    </>
  );
};
Home.getLayout = getLandingLayout;

export default Home;
