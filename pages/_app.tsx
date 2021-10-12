import { AppProps } from "next/dist/shared/lib/router/router";
import "tailwindcss/tailwind.css";
import "../style/main.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
