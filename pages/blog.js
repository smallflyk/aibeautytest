import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';
import CanonicalUrl from '../components/CanonicalUrl';
import Breadcrumbs from '../components/Breadcrumbs';
import Favicon from '../components/Favicon';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind AI Beauty Analysis",
      excerpt: "Discover how artificial intelligence evaluates facial features to determine beauty scores based on symmetry, golden ratio, and other universal beauty standards.",
      imageUrl: "/images/blog-1.jpg",
      date: "April 15, 2025",
      category: "Technology",
      slug: "science-behind-ai-beauty-analysis"
    },
    {
      id: 2,
      title: "5 Tips for Getting the Most Accurate AI Beauty Test Results",
      excerpt: "Learn how to take the perfect photo for your AI beauty test. Simple adjustments in lighting, angle, and expression can significantly improve your results.",
      imageUrl: "/images/blog-2.jpg",
      date: "April 10, 2025",
      category: "Tips & Tricks",
      slug: "tips-for-accurate-ai-beauty-test"
    },
    {
      id: 3,
      title: "How AI is Transforming the Beauty Industry in 2025",
      excerpt: "From personalized skincare recommendations to virtual makeup try-ons, artificial intelligence is revolutionizing how we approach beauty and self-care.",
      imageUrl: "/images/blog-3.jpg",
      date: "April 2, 2025",
      category: "Industry Trends",
      slug: "ai-transforming-beauty-industry"
    },
    {
      id: 4,
      title: "Understanding Your Beauty Score: What the Numbers Mean",
      excerpt: "A detailed explanation of how to interpret your AI beauty test results, what each metric measures, and how to use this information to enhance your natural features.",
      imageUrl: "/images/blog-4.jpg",
      date: "March 25, 2025",
      category: "Beauty Analysis",
      slug: "understanding-beauty-score"
    },
    {
      id: 5,
      title: "Beauty Standards Across Cultures: How AI Adapts",
      excerpt: "Explore how AI beauty analysis accounts for diverse beauty standards from different cultures and ethnicities to provide fair and inclusive results.",
      imageUrl: "/images/blog-5.jpg",
      date: "March 18, 2025",
      category: "Cultural Insights",
      slug: "beauty-standards-across-cultures"
    },
    {
      id: 6,
      title: "The Psychology of Beauty: Why We're Drawn to Certain Features",
      excerpt: "Delve into the fascinating psychological aspects of beauty perception and how evolutionary factors influence what we find attractive in faces.",
      imageUrl: "/images/blog-6.jpg",
      date: "March 12, 2025",
      category: "Psychology",
      slug: "psychology-of-beauty"
    }
  ];
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Beauty Blog | AI Beauty Test Insights and Tips</title>
        <meta name="description" content="Explore our beauty blog for AI facial analysis insights and tips to improve your beauty score. Learn how symmetry and golden ratio affect your results." />
        <meta name="keywords" content="AI beauty test, beauty score, facial analysis, beauty analyzer, AI facial, beauty calc" />
        <Favicon />
      </Head>
      <CanonicalUrl />

      <main className={styles.main}>
        <Breadcrumbs />
        
        <section className={styles.hero}>
          <h1 className={styles.title}>AI Beauty Test Blog</h1>
          <p className={styles.description}>
            Insights, tips, and trends in AI beauty technology and analysis
          </p>
        </section>

        <section className={styles.blogSection}>
          <h2>Latest Articles</h2>
          <h3 className={styles.sectionSubtitle}>Expert Insights on AI Beauty and Analysis</h3>
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <div key={post.id} className={styles.blogCard}>
                <div className={styles.blogImage}>
                  <div 
                    className={styles.blogImagePlaceholder}
                    style={{
                      backgroundColor: '#f0f0f0',
                      width: '100%',
                      height: '225px', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#888',
                      fontSize: '14px'
                    }}
                  >
                    {post.title}
                  </div>
                  <div className={styles.blogCategory}>{post.category}</div>
                </div>
                <div className={styles.blogContent}>
                  <p className={styles.blogDate}>{post.date}</p>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <a className={styles.readMoreLink} title={`阅读文章：${post.title}`}>Read More</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.newsletterSection}>
          <div className={styles.newsletterContainer}>
            <h2>Subscribe to Our Newsletter</h2>
            <h3 className={styles.newsletterSubtitle}>Stay Informed on Beauty Tech Trends</h3>
            <p>Stay updated with the latest in AI beauty technology, tips, and trends.</p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className={styles.newsletterInput} 
              />
              <button className={styles.newsletterButton}>Subscribe</button>
            </form>
            <p className={styles.privacyNote}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
} 