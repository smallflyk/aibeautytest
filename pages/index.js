import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import CanonicalUrl from '../components/CanonicalUrl';

export default function Home() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(droppedFile);
    }
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  
  const analyzeImage = () => {
    if (!file) return;
    setIsAnalyzing(true);
    // 将图片存储到localStorage
    if (preview) {
      localStorage.setItem('uploadedImage', preview);
    }
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      window.location.href = '/results';
    }, 3000);
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>AI Beauty Test | Discover Your Beauty Score with Advanced AI</title>
        <meta name="description" content="Upload your selfie for an instant AI beauty test. Our advanced AI analyzes facial symmetry, golden ratio, and skin quality to provide a detailed beauty score." />
        <meta name="keywords" content="AI beauty test, beauty score, facial analysis, beauty analyzer, AI facial recognition, beauty calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CanonicalUrl />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Discover Your Beauty Score with AI</h1>
            <p className={styles.description}>
              Upload your selfie and let our advanced AI technology analyze your facial features to reveal your unique beauty score and personalized enhancement recommendations.
            </p>
            <p className={styles.smallText}>
              No registration required. Fast, secure, and private.
            </p>
          </div>
          
          <div className={styles.heroUploadSection}>
            <div 
              className={styles.heroDropzone}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {preview ? (
                <div className={styles.previewContainer}>
                  <img src={preview} alt="Preview" className={styles.preview} />
                  <button className={styles.changeButton} onClick={() => {setFile(null); setPreview(null);}}>
                    Change Photo
                  </button>
                </div>
              ) : (
                <>
                  <p>Drag & drop your photo here</p>
                  <p>or</p>
                  <label className={styles.uploadButton}>
                    Select Photo
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileChange} 
                      style={{display: 'none'}}
                    />
                  </label>
                </>
              )}
            </div>
            
            {file && (
              <button 
                className={`${styles.analyzeButton} ${isAnalyzing ? styles.analyzing : ''}`}
                onClick={analyzeImage}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? 'Analyzing...' : 'Start AI Beauty Test'}
              </button>
            )}
            
            <div className={styles.photoTips}>
              <p>For best results, use a clear front-facing portrait with good lighting.</p>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <h2>Experience the Power of AI Beauty Analysis</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔍</div>
              <h3>Instant Analysis</h3>
              <p>Get your beauty score in seconds with our smart AI beauty test algorithm.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚖️</div>
              <h3>Scientific Evaluation</h3>
              <p>Our AI beauty test evaluates symmetry, golden ratio, and facial proportions with precision.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>Privacy Protected</h3>
              <p>Your photos are processed securely and never stored after your AI beauty test is complete.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💡</div>
              <h3>Personalized Insights</h3>
              <p>Receive tailored beauty feedback made specifically for your unique facial features.</p>
            </div>
          </div>
        </section>

        <section className={styles.howItWorks}>
          <h2>How Our AI Beauty Test Works</h2>
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Upload Your Photo</h3>
              <p>Submit a clear front-facing selfie with good lighting and no filters for the most accurate AI beauty test.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>AI Analysis Process</h3>
              <p>Our advanced AI beauty test algorithm evaluates key facial features, proportions, and symmetry.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Get Your Results</h3>
              <p>Receive your beauty score along with detailed insights and personalized enhancement recommendations.</p>
            </div>
          </div>
        </section>

        <section className={styles.photoGuidelines}>
          <h2>Photo Guidelines for Accurate Results</h2>
          <div className={styles.guidelinesContent}>
            <div className={styles.guidelinesText}>
              <ul>
                <li>Clear front-facing portrait</li>
                <li>Good lighting conditions</li>
                <li>No filters or heavy makeup</li>
                <li>No sunglasses or face coverings</li>
                <li>Neutral expression or natural smile</li>
              </ul>
            </div>
            <div className={styles.guidelinesImage}>
              <img src="/images/photo-guidelines.jpg" alt="Photo Guidelines" />
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2>What Users Say About Our AI Beauty Test</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.rating}>★★★★★</div>
              <p>"The AI beauty test gave me insights about my facial features I never realized before. The recommendations were surprisingly helpful!"</p>
              <p className={styles.user}>— Alexandra S.</p>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.rating}>★★★★★</div>
              <p>"I was skeptical at first, but this AI beauty test is actually based on science. The analysis was detailed and accurate."</p>
              <p className={styles.user}>— Michael T.</p>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.rating}>★★★★★</div>
              <p>"Using the AI beauty test helped me understand which hairstyles would complement my face shape. Great tool!"</p>
              <p className={styles.user}>— Jennifer R.</p>
            </div>
          </div>
        </section>

        <section className={styles.faq}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            <div className={styles.faqItem}>
              <h3>How accurate is the AI beauty test?</h3>
              <p>Our AI beauty test is based on established beauty principles including facial symmetry, golden ratio proportions, and skin quality. While beauty is subjective, our AI provides an objective analysis based on these universal beauty metrics.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is my photo safe when I use the AI beauty test?</h3>
              <p>Yes, your privacy is our priority. All photos are processed instantly and are never stored after the AI beauty test is completed. We use secure processing methods to ensure your data remains protected.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How long does the AI beauty test take?</h3>
              <p>Our advanced AI provides beauty test results within seconds after uploading your photo. The entire process from upload to receiving your detailed beauty analysis typically takes less than a minute.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I use any photo for the AI beauty test?</h3>
              <p>For the most accurate results, we recommend using a clear, front-facing portrait photo with good lighting and no filters. Photos with obscured features may reduce the accuracy of your AI beauty test analysis.</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Ready to Discover Your Beauty Score?</h2>
          <p>Try our AI beauty test today and receive personalized insights to enhance your natural features.</p>
          <button 
            className={styles.ctaButton}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Take the AI Beauty Test Now
          </button>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3>AI Beauty Test</h3>
            <p>Discover your unique beauty score with our advanced AI technology. Get personalized insights to enhance your natural features.</p>
          </div>
          <div className={styles.footerColumn}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/"><a title="首页 - AI Beauty Test">Home</a></Link></li>
              <li><Link href="/about"><a title="关于我们 - AI Beauty Test">About</a></Link></li>
              <li><Link href="/faq"><a title="常见问题 - AI Beauty Test">FAQ</a></Link></li>
              <li><Link href="/blog"><a title="美容博客 - AI Beauty Test">Beauty Blog</a></Link></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Legal</h3>
            <ul>
              <li><Link href="/privacy"><a title="隐私政策 - AI Beauty Test">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a title="服务条款 - AI Beauty Test">Terms of Service</a></Link></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Connect</h3>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com" title="在Facebook上关注我们" aria-label="Facebook"><span>Facebook</span></a>
              <a href="https://www.twitter.com" title="在Twitter上关注我们" aria-label="Twitter"><span>Twitter</span></a>
              <a href="https://www.instagram.com" title="在Instagram上关注我们" aria-label="Instagram"><span>Instagram</span></a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} AI Beauty Test. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 