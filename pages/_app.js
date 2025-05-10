import '../styles/globals.css';
import Layout from '../components/Layout';
import SsrCheck from '../components/SsrCheck';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 添加X-Robots-Tag头
    // 注意：这种方法只能在客户端生效，服务器端需要在服务器配置中添加
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Robots-Tag';
    meta.content = 'index, follow';
    document.head.appendChild(meta);
  }, []);

  return (
    <Layout>
      <SsrCheck />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp; 