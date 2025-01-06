import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';
export async function getStaticProps(){
  return {
    props: {
      allPostData,
    },
  };
}

export default function Home() {
  return (
    <Layout home>
    <Head>
        <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>UNDER CONSTRUCTION</p>
      <p>A seasoned IT support specialist and aspiring web developer</p>
    </section>
    </Layout>
  );
}
