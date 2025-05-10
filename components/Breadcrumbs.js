import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Breadcrumbs.module.css';
import Head from 'next/head';

const Breadcrumbs = ({ customItems, title }) => {
  const router = useRouter();
  
  // 获取当前路径并分割成分段
  const pathSegments = router.asPath.split('/').filter(segment => segment);
  
  // 构建面包屑项
  let breadcrumbItems = [{ label: '首页', path: '/' }];
  
  // 如果提供了自定义项目，则使用它们
  if (customItems) {
    breadcrumbItems = [...breadcrumbItems, ...customItems];
  } else {
    // 否则根据路径动态构建
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      const isLast = index === pathSegments.length - 1;
      
      // 为各个路径段设置合适的标签
      let label;
      if (segment === 'blog') {
        label = '博客';
      } else if (segment === 'about') {
        label = '关于我们';
      } else if (segment === 'faq') {
        label = '常见问题';
      } else {
        // 对于动态路径段（如文章slug），尝试美化显示
        label = title || segment.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
      }
      
      breadcrumbItems.push({
        label,
        path: currentPath,
        isCurrentPage: isLast
      });
    });
  }
  
  // 生成结构化数据
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://www.aibeautytest.art${item.path}`
    }))
  };
  
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <nav aria-label="面包屑导航" className={styles.breadcrumbs}>
        <ol>
          {breadcrumbItems.map((item, index) => (
            <li key={item.path}>
              {index > 0 && <span className={styles.separator}> / </span>}
              {item.isCurrentPage ? (
                <span aria-current="page" className={styles.current}>{item.label}</span>
              ) : (
                <Link href={item.path}>
                  <a title={`前往${item.label}`}>{item.label}</a>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs; 