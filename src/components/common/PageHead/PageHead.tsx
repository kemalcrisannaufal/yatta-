import Head from "next/head";

interface Proptypes {
  title: string;
}

const PageHead = (props: Proptypes) => {
  const { title } = props;
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/images/general/logo.svg" />
    </Head>
  );
};

export default PageHead;
