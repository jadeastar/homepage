import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
      <Head>
        <title>Innatical Technologies</title>
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
          content="Developing private internet services"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <img
          src="/innatical.svg"
          className="w-48 h-48 mb-12 glow"
          alt="Innatical Logo"
        />
        <h1 className="text-5xl font-bold text-white">
          Welcome to{" "}
          <a className="text-inndigo" href="/">
            Innatical
          </a>
        </h1>
        {/*
          🏳‍⚧ POWERED BY BIG TRANS ENERGY 🏳‍⚧
          🏳‍⚧ POWERED BY BIG TRANS ENERGY 🏳‍⚧
          🏳‍⚧ POWERED BY BIG TRANS ENERGY 🏳‍⚧
          🏳‍⚧ POWERED BY BIG TRANS ENERGY 🏳‍⚧
          🏳‍⚧ POWERED BY BIG TRANS ENERGY 🏳‍⚧
          🏳‍⚧ POWERED BY BIG TRANS ENERGY 🏳‍⚧
          🏳‍⚧ POWERED BY BIG TRANS ENERGY 🏳‍⚧
          🏳‍⚧ POWERED BY BIG TRANS ENERGY 🏳‍⚧
          🏳‍⚧ POWERED BY BIG TRANS ENERGY 🏳‍⚧
          (lots of them bc big)
         */}

        <p className="text-white mt-5">Developing private internet services</p>

        <div className="flex flex-col text-white font-bold text-2xl mt-12">
          {/* <div className=" flex flex-row">
            <h1 className="text-xl text-gray-400">
              What we have been working on
            </h1>
          </div> */}
          <div className="flex-wrap flex flex-row gap-12 text-center">
            <a
              href="https://innsight.cloud"
              className="bg-secondary p-3 rounded-lg w-72 font-bold"
            >
              Innsight
              <p className="text-base font-normal">
                Monitor and control your servers painlessly
              </p>
            </a>
            <a
              href="https://innatical.cloud"
              className="bg-secondary p-3 rounded-lg w-72 font-bold"
            >
              Innatical Cloud
              <p className="text-base font-normal">
                Host from the highest quality rentable servers in the industry
              </p>
            </a>
            <a
              href="https://isometric.chat"
              className="bg-secondary p-3 rounded-lg w-72 font-bold"
            >
              Isometric Chat
              <p className="text-base font-normal">
                Productively socialize on the most secure chat service in the
                world
              </p>
            </a>
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
