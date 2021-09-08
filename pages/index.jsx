import Head from "next/head";
import HelloWorld from "../components/hello-world";

const Home = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Next.js page" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js Page</title>
      </Head>
      <div className="app">
        <HelloWorld />
      </div>
    </div>
  );
};

export default Home;
