import Head from "next/head";
import Card from "../components/common/Card";
import { SAMPLE_LISTINGS } from "../constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Explore Amazing Places
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SAMPLE_LISTINGS.map((listing, index) => (
            <Card key={index} {...listing} />
          ))}
        </div>
      </main>
    </>
  );
}
