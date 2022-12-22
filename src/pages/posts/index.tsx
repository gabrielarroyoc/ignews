import Head from "next/head";
import { prismic } from "../../services/prismicio";
import styles from "../posts/styles.module.scss";
import { createClient } from "@prismicio/client";
import type { GetStaticPropsContext } from "next";

export default function Posts() {
  const response = prismic.getAllByType("post", {
    fetch: ["post.title", "post.text"],
    pageSize: 100,
  });
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>21 de Dezembro de 2022</time>
            <strong>O básico que você precisa saber sobre SQL</strong>
            <p>
              Uma breve explicação do que é SQL e um compilado dos comandos e
              clausulas mais utilizadas.
            </p>
          </a>
          <a href="#">
            <time>21 de Dezembro de 2022</time>
            <strong>O básico que você precisa saber sobre SQL</strong>
            <p>
              Uma breve explicação do que é SQL e um compilado dos comandos e
              clausulas mais utilizadas.
            </p>
          </a>
          <a href="#">
            <time>21 de Dezembro de 2022</time>
            <strong>O básico que você precisa saber sobre SQL</strong>
            <p>
              Uma breve explicação do que é SQL e um compilado dos comandos e
              clausulas mais utilizadas.
            </p>
          </a>
          <a href="#">
            <time>21 de Dezembro de 2022</time>
            <strong>O básico que você precisa saber sobre SQL</strong>
            <p>
              Uma breve explicação do que é SQL e um compilado dos comandos e
              clausulas mais utilizadas.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({});

  const page = await client.getByUID("page", "home");

  return {
    props: {
      page,
    },
  };
}
