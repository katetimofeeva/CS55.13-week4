import localFont from "next/font/local";
import Layout from "@/components/layout";
import { getSortedList } from "../lib/data";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function getStaticProps(params) {
  const people = getSortedList();
  return {
    props: { people },
  };
}
export default function Home({ people }) {
  return (
    <Layout isHomePage={true}>
      <div className="container">
        <h1 className="text-center mt-5">List of people</h1>
        <ul class="list-group">
          {people.length ? (
            people.map(({ id, name }) => (
              <Link
                className="list-group-item list-item-action hover-link"
                aria-current="true"
                key={id}
                href={`/${id}`}
              >
                {name}
              </Link>
            ))
          ) : (
            <h3
              className="
            text-center"
            >
              you don't have any people
            </h3>
          )}
        </ul>
      </div>
    </Layout>
  );
}
