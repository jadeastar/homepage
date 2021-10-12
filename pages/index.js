import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
      <Head>
        <title>Innatical Corporation</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="A lifestyle and tech company building products for humans, not for robots"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <img
          src="/innatical.svg"
          className="w-48 h-48 mb-12"
          alt="Innatical Logo"
        />
        <h1 className="text-5xl font-bold text-white">
          Welcome to{" "}
          <a className="text-inndigo" href="/">
            Innatical
          </a>
        </h1>

        <p className="mt-3 text-xl xk:w-1/4 text-white">
          A lifestyle and tech company building products for humans, not for
          robots
        </p>

        <div className="flex flex-col text-white font-bold text-2xl mt-12">
          {/* <div className=" flex flex-row">
            <h1 className="text-white text-xl text-gray-400">
              What we have been working on
            </h1>
          </div> */}
          <div className="flex-wrap flex flex-row gap-12 text-center">
            <a href="https://innsight.cloud">Innsight</a>
            <a href="https://innatical.cloud">Innatical Cloud</a>
            <a href="https://isometric.chat">Isometric Chat</a>
          </div>
        </div>
      </main>
      {/* 
      <footer className="flex items-center justify-center w-full h-12 text-white">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <a href="https://docker.com">Docker Swarm</a>
        </a>
      </footer> */}
    </div>
  );
}
