import Head from "next/head";
import data from "data/products.json";
import contributors from "data/contributors.json";
import Content from "src/components/Content";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>国内 WordPress 関連プロダクトライセンスまとめ</title>
        <meta
          name="description"
          content="WordPressに関するプロダクトのライセンス形式をまとめたページです。有志のメンバーで管理しています。"
        />
      </Head>
      <Header />
      <Content props={data} />
      <Footer props={contributors} />
    </>
  );
}

export const getStaticProps = async () => {
  return { props: { data, contributors } };
};
