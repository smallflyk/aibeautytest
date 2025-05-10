import { useEffect, useState } from 'react';
import Head from 'next/head';

const SsrCheck = () => {
  const [isClient, setIsClient] = useState(false);
  const [renderType, setRenderType] = useState('SSR'); // 默认为服务器端渲染
  
  useEffect(() => {
    // 客户端渲染检测
    setIsClient(true);
    
    // 检测渲染类型
    if (typeof window !== 'undefined') {
      // 判断是否使用了服务器端渲染
      const ssrAttr = document.documentElement.getAttribute('data-ssr');
      
      if (window.__NEXT_DATA__?.props?.pageProps?.__N_SSG) {
        setRenderType('SSG'); // 静态生成
      } else if (window.__NEXT_DATA__?.props?.pageProps?.__N_SSP) {
        setRenderType('SSR'); // 服务器端渲染
      } else {
        setRenderType('CSR'); // 客户端渲染
      }
      
      // 记录渲染方式 (仅开发环境)
      if (process.env.NODE_ENV === 'development') {
        console.info(`[SSR Check] Page rendered using: ${renderType}`);
        
        // 检查页面水合(hydration)问题
        const timeToHydration = performance.now() - (window.__NEXT_DATA__?.props?.pageProps?.__NEXT_PAGE_LOADED_TIME || 0);
        console.info(`[SSR Check] Time to hydration: ${Math.round(timeToHydration)}ms`);
      }
    }
  }, [renderType]);
  
  // 针对爬虫提供额外信息
  return (
    <Head>
      {isClient && (
        <meta name="ssr-state" content={renderType} />
      )}
    </Head>
  );
};

export default SsrCheck; 