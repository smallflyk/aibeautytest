import Head from 'next/head';

const Preload = () => {
  return (
    <Head>
      {/* 预加载关键字体 */}
      <link 
        rel="preload" 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
        as="style" 
      />
      
      {/* 预加载关键JS脚本 */}
      <link 
        rel="preload" 
        href="/_next/static/chunks/main.js" 
        as="script" 
      />
      
      {/* 预加载logo图片 */}
      <link 
        rel="preload" 
        href="/images/logo.png" 
        as="image" 
        type="image/png" 
      />
      
      {/* DNS预取 */}
      <link 
        rel="dns-prefetch" 
        href="https://fonts.googleapis.com" 
      />
      <link 
        rel="dns-prefetch" 
        href="https://www.googletagmanager.com" 
      />
      
      {/* 预连接 */}
      <link 
        rel="preconnect" 
        href="https://fonts.gstatic.com" 
        crossOrigin="anonymous" 
      />
    </Head>
  );
};

export default Preload; 