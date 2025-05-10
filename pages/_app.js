import '../styles/globals.css';
import Layout from '../components/Layout';
import SsrCheck from '../components/SsrCheck';
import SchemaOrg from '../components/SchemaOrg';
import PerformanceMetrics from '../components/PerformanceMetrics';
import Preload from '../components/Preload';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    // 添加X-Robots-Tag头
    // 注意：这种方法只能在客户端生效，服务器端需要在服务器配置中添加
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Robots-Tag';
    meta.content = 'index, follow';
    document.head.appendChild(meta);
    
    // 实现动态代码分割 - 只在客户端预加载路由
    const handleRouteChangeComplete = () => {
      if (typeof window !== 'undefined') {
        // 预加载常用页面的资源
        router.prefetch('/blog');
        router.prefetch('/about');
        router.prefetch('/faq');
      }
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <Layout>
      <Preload />
      <SchemaOrg />
      <SsrCheck />
      <PerformanceMetrics />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp; 