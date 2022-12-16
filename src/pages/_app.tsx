import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { SessionProvider } from "next-auth/react";
import "../styles/global.scss";
import { Session } from "next-auth";
import { NextComponentType } from "next";

export interface CustomAppProps extends AppProps {
  Component: NextComponentType;
  pageProps: { auth?: boolean; session?: Session };
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
