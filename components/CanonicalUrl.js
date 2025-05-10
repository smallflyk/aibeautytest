import Head from 'next/head';
import { useRouter } from 'next/router';

const CanonicalUrl = () => {
  const router = useRouter();
  const baseUrl = 'https://www.aibeautytest.art';
  const canonicalUrl = `${baseUrl}${router.asPath === '/' ? '/' : router.asPath}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default CanonicalUrl; 