import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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

      <div className="py-14 px-10 lg:px-56 bg-white dark:bg-gray-900 flex-1">
        <div className="flex items-center text-inndigo font-black text-xl">
          <img
            src="/innatical.svg"
            className="w-8 h-8 mr-1"
            alt="Innatical Logo"
          />
          Innatical
        </div>

        <h1 className="text-5xl font-black mt-20 text-black dark:text-white">
          Developing
          <br />
          private internet
          <br />
          services
        </h1>
        <p className="mt-5 mb-20 text-black dark:text-white">
          Innatical is a technology company focusing on your privacy and
          security.
          <br />
          We beleive that privacy is a human right and put it in the core of all
          of our services.
          <br />
          We hope to build a better world where humanity and technology can
          co-exist ethically.
        </p>
        <a className="text-black dark:text-white" href="/#products">
          Learn More
        </a>
      </div>

      <div
        id="products"
        className="px-10 lg:px-56 bg-gray-100 dark:bg-gray-800 py-16"
      >
        <h1 className="text-2xl font-black mb-5 text-black dark:text-white">
          Our Products
        </h1>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="p-5 bg-white dark:bg-gray-900 rounded-lg text-black dark:text-white">
            <h1 className="text-xl font-bold">innsight</h1>
            <p className="mb-5 mt-2">
              Monitor and control your servers painlessly
            </p>
            <a href="https://innsight.cloud/">Learn More</a>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-lg text-black dark:text-white">
            <h1 className="text-xl font-bold">inncloud</h1>
            <p className="mb-5 mt-2">
              Host from the highest quality rentable servers in the industry
            </p>
            <a href="https://innatical.cloud/">Learn More</a>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-lg text-black dark:text-white">
            <h1 className="text-xl font-bold">isometric</h1>
            <p className="mb-5 mt-2">
              Productively socialize on the most secure chat service in the
              world
            </p>
            <a href="https://isometric.chat/">Learn More</a>
          </div>
        </div>
      </div>

      <div className="px-10 lg:px-56 py-8 bg-white dark:bg-gray-900 text-black dark:text-white">
        <p>Copyright © 2021 Innatical</p>
        <p className="font-bold">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          in California & Minnesota
        </p>
      </div>
    </div>
  );
}
