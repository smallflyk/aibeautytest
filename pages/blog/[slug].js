import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';
import CanonicalUrl from '../../components/CanonicalUrl';
import BlogSchema from '../../components/BlogSchema';
import Breadcrumbs from '../../components/Breadcrumbs';

// 这里模拟博客文章数据，实际项目中应从API或数据库获取
const blogPosts = [
  {
    id: 1,
    title: "The Science Behind AI Beauty Analysis",
    content: "人工智能美颜分析背后的科学原理...(详细内容)",
    excerpt: "Discover how artificial intelligence evaluates facial features to determine beauty scores based on symmetry, golden ratio, and other universal beauty standards.",
    imageUrl: "/images/blog-1.jpg",
    date: "April 15, 2025",
    category: "Technology",
    slug: "science-behind-ai-beauty-analysis"
  },
  {
    id: 2,
    title: "5 Tips for Getting the Most Accurate AI Beauty Test Results",
    content: "获取最准确AI美颜测试结果的5个技巧...(详细内容)",
    excerpt: "Learn how to take the perfect photo for your AI beauty test. Simple adjustments in lighting, angle, and expression can significantly improve your results.",
    imageUrl: "/images/blog-2.jpg",
    date: "April 10, 2025",
    category: "Tips & Tricks",
    slug: "tips-for-accurate-ai-beauty-test"
  },
  {
    id: 3,
    title: "How AI is Transforming the Beauty Industry in 2025",
    content: "AI如何在2025年改变美容行业...(详细内容)",
    excerpt: "From personalized skincare recommendations to virtual makeup try-ons, artificial intelligence is revolutionizing how we approach beauty and self-care.",
    imageUrl: "/images/blog-3.jpg",
    date: "April 2, 2025",
    category: "Industry Trends",
    slug: "ai-transforming-beauty-industry"
  },
  {
    id: 4,
    title: "Understanding Your Beauty Score: What the Numbers Mean",
    content: "理解你的美颜分数：数字背后的含义...(详细内容)",
    excerpt: "A detailed explanation of how to interpret your AI beauty test results, what each metric measures, and how to use this information to enhance your natural features.",
    imageUrl: "/images/blog-4.jpg",
    date: "March 25, 2025",
    category: "Beauty Analysis",
    slug: "understanding-beauty-score"
  },
  {
    id: 5,
    title: "Beauty Standards Across Cultures: How AI Adapts",
    content: "跨文化的美丽标准：AI如何适应...(详细内容)",
    excerpt: "Explore how AI beauty analysis accounts for diverse beauty standards from different cultures and ethnicities to provide fair and inclusive results.",
    imageUrl: "/images/blog-5.jpg",
    date: "March 18, 2025",
    category: "Cultural Insights",
    slug: "beauty-standards-across-cultures"
  },
  {
    id: 6,
    title: "The Psychology of Beauty: Why We're Drawn to Certain Features",
    content: "美的心理学：为什么我们会被某些特征吸引...(详细内容)",
    excerpt: "Delve into the fascinating psychological aspects of beauty perception and how evolutionary factors influence what we find attractive in faces.",
    imageUrl: "/images/blog-6.jpg",
    date: "March 12, 2025",
    category: "Psychology",
    slug: "psychology-of-beauty"
  }
];

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  
  // 查找匹配slug的博客文章
  const post = blogPosts.find(post => post.slug === slug);
  
  // 格式化文章描述，确保字符数在140-160之间
  const formatDescription = (post) => {
    if (!post) return "";
    
    // 基础描述：使用摘要
    let baseDesc = post.excerpt || "";
    
    // 计算当前字符数
    const currentLength = baseDesc.length;
    
    // 如果太短，添加额外信息
    if (currentLength < 140) {
      const additionalInfo = ` Learn how AI technology analyzes facial features according to beauty principles and golden ratio. Discover insights about ${post.category.toLowerCase()} in AI beauty analysis and personalized recommendations.`;
      // 截取合适长度使总长度在140-160之间
      const neededLength = Math.min(additionalInfo.length, 160 - currentLength);
      baseDesc += additionalInfo.substring(0, neededLength);
    } 
    // 如果太长，截断到160字符
    else if (currentLength > 160) {
      baseDesc = baseDesc.substring(0, 157) + "...";
    }
    
    return baseDesc;
  };
  
  // 如果没有找到文章或页面仍在预渲染中
  if (!post && typeof window !== 'undefined') {
    return (
      <div className={styles.container}>
        <Head>
          <title>文章未找到 | AI Beauty Test Blog</title>
          <meta name="description" content="The requested blog post could not be found." />
          <meta name="robots" content="noindex, follow" />
        </Head>
        <CanonicalUrl />
        
        <main className={styles.main}>
          <div className={styles.errorContainer}>
            <h1>文章未找到</h1>
            <p>抱歉，您请求的文章不存在或已被移除。</p>
            <Link href="/blog">
              <a className={styles.backLink} title="返回博客列表">返回博客列表</a>
            </Link>
          </div>
        </main>
      </div>
    );
  }
  
  // 如果在服务器端渲染期间还没有slug，返回加载状态
  if (!post) {
    return <div>加载中...</div>;
  }
  
  // 获取格式化后的描述
  const optimizedDescription = formatDescription(post);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title} | AI Beauty Test Blog</title>
        <meta name="description" content={optimizedDescription} />
        <meta name="keywords" content={`AI beauty test, ${post.category.toLowerCase()}, ${post.title.toLowerCase()}`} />
      </Head>
      <CanonicalUrl />
      <BlogSchema 
        title={post.title}
        description={optimizedDescription}
        slug={post.slug}
        image={post.imageUrl}
        datePublished={post.date}
        dateModified={post.date}
      />
      
      <main className={styles.main}>
        <Breadcrumbs title={post.title} />
        
        <article className={styles.article}>
          <div className={styles.articleHeader}>
            <div className={styles.category}>{post.category}</div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.date}>{post.date}</p>
          </div>
          
          <div className={styles.featuredImage}>
            <div 
              style={{
                backgroundColor: '#f0f0f0',
                width: '100%',
                height: '450px', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888',
                fontSize: '18px',
                fontWeight: '500'
              }}
            >
              {post.title}
            </div>
          </div>
          
          <div className={styles.content}>
            <p>{post.content}</p>
            <p>这是博客文章的详细内容，这里是示例文本。在实际应用中，这里应该是从CMS或数据库获取的文章全文。</p>
            <h2>为什么AI美颜分析很重要</h2>
            <p>人工智能美颜分析正在改变我们评估和理解美的方式。通过使用先进的计算机视觉技术，AI可以识别面部特征，并根据公认的美学原则进行评估。</p>
            <h3>AI美颜分析的主要优势</h3>
            <ul>
              <li>客观的美学评估</li>
              <li>个性化的美容建议</li>
              <li>跨文化的美学理解</li>
              <li>技术与艺术的结合</li>
            </ul>
            <p>随着技术的不断发展，我们可以期待AI美颜分析在未来几年内变得更加精确和个性化。</p>
          </div>
          
          <div className={styles.shareSection}>
            <h3>分享这篇文章</h3>
            <div className={styles.shareButtons}>
              <button className={styles.shareButton} title="在Facebook上分享">Facebook</button>
              <button className={styles.shareButton} title="在Twitter上分享">Twitter</button>
              <button className={styles.shareButton} title="在LinkedIn上分享">LinkedIn</button>
            </div>
          </div>
          
          <div className={styles.navigationLinks}>
            <Link href="/blog">
              <a className={styles.backToBlog} title="返回博客列表">返回所有文章</a>
            </Link>
          </div>
        </article>
        
        <div className={styles.sidebar}>
          <div className={styles.authorBox}>
            <h3>关于作者</h3>
            <div className={styles.authorInfo}>
              <div 
                style={{
                  backgroundColor: '#f0f0f0',
                  width: '80px',
                  height: '80px', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#888',
                  fontSize: '12px',
                  borderRadius: '50%'
                }}
                className={styles.authorImage}
              >
                作者头像
              </div>
              <div>
                <p className={styles.authorName}>AI Beauty Team</p>
                <p className={styles.authorBio}>我们的团队由AI研究人员和美容行业专家组成，致力于提供最先进的AI美颜分析技术。</p>
              </div>
            </div>
          </div>
          
          <div className={styles.relatedPosts}>
            <h3>相关文章</h3>
            <ul>
              {blogPosts.filter(p => p.slug !== slug).slice(0, 3).map(relatedPost => (
                <li key={relatedPost.id}>
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <a title={`阅读文章：${relatedPost.title}`}>{relatedPost.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.newsletterBox}>
            <h3>订阅我们的通讯</h3>
            <p>获取最新的AI美颜技术和趋势更新。</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="您的电子邮件地址" required />
              <button type="submit">订阅</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
} 