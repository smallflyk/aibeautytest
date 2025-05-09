import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Results.module.css';

export default function Results() {
  const [score, setScore] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [userImage, setUserImage] = useState(null);
  
  useEffect(() => {
    // 从localStorage获取用户上传的图片
    const uploadedImage = localStorage.getItem('uploadedImage');
    if (uploadedImage) {
      setUserImage(uploadedImage);
    }
    
    // This would normally come from your API
    // Simulating beauty test results
    const simulatedScore = (Math.random() * 2 + 8).toFixed(1); // Between 8.0 and 10.0
    setScore(simulatedScore);
    
    setMetrics({
      symmetry: (Math.random() * 1 + 8.5).toFixed(1),
      goldenRatio: (Math.random() * 1 + 8.3).toFixed(1),
      skin: (Math.random() * 1.5 + 8).toFixed(1),
      harmony: (Math.random() * 1.2 + 8.4).toFixed(1),
    });
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Your AI Beauty Test Results | Beauty Score Analysis</title>
        <meta name="description" content="View your detailed AI beauty test results. See your beauty score and personalized recommendations based on facial analysis." />
        <meta name="robots" content="noindex" /> {/* Don't index dynamic results pages */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.resultsHeader}>
          <h1>Your AI Beauty Test Results</h1>
          <p>Here's your detailed beauty analysis based on advanced AI evaluation</p>
        </section>

        <section className={styles.resultsContainer}>
          <div className={styles.resultsCard}>
            <div className={styles.photoSection}>
              <div className={styles.resultPhoto}>
                {userImage ? (
                  <img src={userImage} alt="Your Photo" />
                ) : (
                  // 回退到默认图片，以防localStorage中没有图片
                  <img src="/images/sample-result.jpg" alt="Beauty Test Result" />
                )}
              </div>
            </div>
            
            <div className={styles.scoreSection}>
              <div className={styles.overallScore}>
                <h2>Your Beauty Score</h2>
                <div className={styles.scoreCircle}>
                  {score ? score : '...'}
                </div>
                <p className={styles.scoreRank}>Stunning Beauty</p>
              </div>
              
              <div className={styles.metricsContainer}>
                <h3>Detailed Metrics</h3>
                {metrics ? (
                  <div className={styles.metrics}>
                    <div className={styles.metricItem}>
                      <span className={styles.metricName}>Symmetry</span>
                      <div className={styles.metricBar}>
                        <div 
                          className={styles.metricFill} 
                          style={{ width: `${metrics.symmetry * 10}%` }}
                        ></div>
                      </div>
                      <span className={styles.metricValue}>{metrics.symmetry}</span>
                    </div>
                    
                    <div className={styles.metricItem}>
                      <span className={styles.metricName}>Golden Ratio</span>
                      <div className={styles.metricBar}>
                        <div 
                          className={styles.metricFill} 
                          style={{ width: `${metrics.goldenRatio * 10}%` }}
                        ></div>
                      </div>
                      <span className={styles.metricValue}>{metrics.goldenRatio}</span>
                    </div>
                    
                    <div className={styles.metricItem}>
                      <span className={styles.metricName}>Skin Quality</span>
                      <div className={styles.metricBar}>
                        <div 
                          className={styles.metricFill} 
                          style={{ width: `${metrics.skin * 10}%` }}
                        ></div>
                      </div>
                      <span className={styles.metricValue}>{metrics.skin}</span>
                    </div>
                    
                    <div className={styles.metricItem}>
                      <span className={styles.metricName}>Facial Harmony</span>
                      <div className={styles.metricBar}>
                        <div 
                          className={styles.metricFill} 
                          style={{ width: `${metrics.harmony * 10}%` }}
                        ></div>
                      </div>
                      <span className={styles.metricValue}>{metrics.harmony}</span>
                    </div>
                  </div>
                ) : (
                  <p>Loading metrics...</p>
                )}
              </div>
            </div>
          </div>
          
          <div className={styles.analysisSection}>
            <h2>Your AI Beauty Analysis</h2>
            <p>
              Our advanced AI beauty test has analyzed your facial features using key beauty metrics including 
              facial symmetry, golden ratio proportions, skin quality, and overall harmony. Here's what our 
              AI beauty system found:
            </p>
            
            <div className={styles.analysisDetails}>
              <div className={styles.analysisItem}>
                <h3>Facial Symmetry</h3>
                <p>
                  Your face shows excellent symmetry between the left and right sides, which is a universal 
                  indicator of beauty. Our AI beauty test detected balanced features which contribute significantly 
                  to your overall beauty score.
                </p>
              </div>
              
              <div className={styles.analysisItem}>
                <h3>Golden Ratio Proportions</h3>
                <p>
                  The proportions of your facial features closely align with the golden ratio (1:1.618), 
                  a mathematical proportion often found in naturally beautiful objects and faces. Our AI beauty test 
                  indicates your facial thirds and feature spacing shows exceptional harmony.
                </p>
              </div>
              
              <div className={styles.analysisItem}>
                <h3>Skin Quality</h3>
                <p>
                  The AI beauty analysis detected good skin texture and tone. Your complexion appears healthy 
                  with minimal blemishes, contributing positively to your overall beauty score in our AI assessment.
                </p>
              </div>
              
              <div className={styles.analysisItem}>
                <h3>Facial Harmony</h3>
                <p>
                  Your features work together harmoniously, creating a balanced overall appearance. The AI beauty test 
                  found that the relationship between your eyes, nose, lips, and facial contours creates a pleasing 
                  aesthetic whole.
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.recommendationsSection}>
            <h2>Personalized Enhancement Recommendations</h2>
            <p>
              Based on your AI beauty test results, here are personalized recommendations to enhance your 
              natural beauty:
            </p>
            
            <div className={styles.recommendationsList}>
              <div className={styles.recommendationItem}>
                <h3>Hairstyle</h3>
                <p>
                  Your face shape would be complemented by layered styles that add volume around the cheekbones. 
                  Based on our AI beauty analysis, styles that frame your face would enhance your natural features.
                </p>
              </div>
              
              <div className={styles.recommendationItem}>
                <h3>Makeup Focus</h3>
                <p>
                  Emphasize your eyes with subtle definition to enhance their natural shape. Light contouring 
                  along the cheekbones would further accentuate your facial structure, according to our AI beauty test.
                </p>
              </div>
              
              <div className={styles.recommendationItem}>
                <h3>Skincare</h3>
                <p>
                  To maintain and improve your skin quality, products with vitamin C and hyaluronic acid would 
                  benefit your skin type. The AI beauty system suggests focusing on hydration and protection.
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.shareSection}>
            <h3>Share Your Results</h3>
            <p>Let your friends know about your AI beauty test results!</p>
            <div className={styles.shareButtons}>
              <button className={`${styles.shareButton} ${styles.facebook}`}>Facebook</button>
              <button className={`${styles.shareButton} ${styles.twitter}`}>Twitter</button>
              <button className={`${styles.shareButton} ${styles.instagram}`}>Instagram</button>
            </div>
          </div>
          
          <div className={styles.tryAgainSection}>
            <Link href="/">
              <a className={styles.tryAgainButton}>Try Another AI Beauty Test</a>
            </Link>
          </div>
        </section>
        
        <section className={styles.additionalTools}>
          <h2>Explore More AI Beauty Tools</h2>
          <div className={styles.toolsGrid}>
            <div className={styles.toolCard}>
              <div className={styles.toolIcon}>👤</div>
              <h3>Age Prediction</h3>
              <p>Discover how old you look with our AI age estimation technology.</p>
              <button className={styles.toolButton}>Coming Soon</button>
            </div>
            
            <div className={styles.toolCard}>
              <div className={styles.toolIcon}>✨</div>
              <h3>Celebrity Look-Alike</h3>
              <p>Find out which celebrities share your facial features.</p>
              <button className={styles.toolButton}>Coming Soon</button>
            </div>
            
            <div className={styles.toolCard}>
              <div className={styles.toolIcon}>💇</div>
              <h3>Hairstyle Matcher</h3>
              <p>Get AI-recommended hairstyles that suit your face shape.</p>
              <button className={styles.toolButton}>Coming Soon</button>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} AI Beauty Test. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 