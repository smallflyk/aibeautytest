import Head from 'next/head';
import styles from '../styles/About.module.css';
import CanonicalUrl from '../components/CanonicalUrl';
import Favicon from '../components/Favicon';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About AI Beauty Test | The Science Behind Beauty Analysis</title>
        <meta name="description" content="Learn about the AI technology behind our beauty test. Discover how our algorithm analyzes facial features to provide accurate beauty scores." />
        <Favicon />
      </Head>
      <CanonicalUrl />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>About AI Beauty Test</h1>
          <p className={styles.description}>
            Discover the science and technology behind our advanced AI beauty analysis system
          </p>
        </section>

        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2>Our Story</h2>
            <p>
              AI Beauty Test was created by a team of AI researchers and beauty industry experts who wanted to bring 
              objective beauty analysis to everyone. Our mission is to provide accurate, unbiased beauty assessments 
              using cutting-edge artificial intelligence technology.
            </p>
            <p>
              What started as a research project in 2022 has grown into a comprehensive beauty analysis platform 
              that helps thousands of users discover their unique beauty characteristics and receive personalized 
              enhancement recommendations.
            </p>
          </div>
          <div className={styles.aboutImage}>
            <img src="/images/about-image.jpg" alt="AI Beauty Analysis" />
          </div>
        </section>

        <section className={styles.technologySection}>
          <h2>The Technology Behind AI Beauty Test</h2>
          <div className={styles.technologyGrid}>
            <div className={styles.technologyItem}>
              <h3>Advanced Facial Recognition</h3>
              <p>
                Our AI beauty test uses sophisticated facial recognition algorithms to detect and analyze over 100 
                different facial points. This allows our system to accurately measure proportions, symmetry, and 
                facial harmony.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <h3>Golden Ratio Analysis</h3>
              <p>
                The AI beauty test evaluates how closely your facial features align with the Golden Ratio (1:1.618), 
                a mathematical proportion found throughout nature and historically associated with aesthetic beauty.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <h3>Skin Analysis</h3>
              <p>
                Our AI can detect skin texture, tone evenness, and complexion clarity to provide a comprehensive 
                assessment of skin quality as part of your overall beauty score.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <h3>Machine Learning</h3>
              <p>
                The AI beauty test system continuously improves through machine learning, analyzing thousands of 
                faces to refine its understanding of universal beauty standards across diverse ethnicities and features.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.scienceSection}>
          <div className={styles.scienceContent}>
            <h2>The Science of Beauty</h2>
            <p>
              While beauty is subjective in many ways, research has identified certain features and proportions that are 
              consistently perceived as attractive across cultures. Our AI beauty test is based on scientific studies in:
            </p>
            <ul className={styles.scienceList}>
              <li>Facial symmetry and its relationship to perceived attractiveness</li>
              <li>The golden ratio and its presence in aesthetically pleasing faces</li>
              <li>Feature harmony and balanced facial proportions</li>
              <li>Skin health indicators and their impact on beauty perception</li>
            </ul>
            <p>
              Our AI beauty test combines these scientific principles with advanced technology to provide an objective 
              analysis of facial features, while recognizing that true beauty encompasses much more than physical traits.
            </p>
          </div>
          <div className={styles.scienceImage}>
            <img src="/images/science-image.jpg" alt="Science of Beauty" />
          </div>
        </section>

        <section className={styles.privacySection}>
          <h2>Your Privacy Matters</h2>
          <p>
            At AI Beauty Test, we take your privacy seriously. All photos uploaded to our system are processed 
            securely and are never stored after your beauty test is complete. Your personal data is never shared 
            with third parties, and we use state-of-the-art encryption to protect your information.
          </p>
          <p>
            Our AI beauty test technology is designed to provide accurate results while respecting your privacy and data security.
          </p>
        </section>

        <section className={styles.teamSection}>
          <h2>Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <img src="/images/team-1.jpg" alt="Team Member" />
              </div>
              <h3>Dr. Emily Chen</h3>
              <p className={styles.memberTitle}>AI Research Director</p>
              <p className={styles.memberBio}>
                With a Ph.D. in Computer Vision from MIT, Emily leads our AI development team and has published 
                numerous papers on facial recognition and analysis.
              </p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <img src="/images/team-2.jpg" alt="Team Member" />
              </div>
              <h3>Michael Rodriguez</h3>
              <p className={styles.memberTitle}>Beauty Industry Expert</p>
              <p className={styles.memberBio}>
                Former beauty consultant with 15 years of experience in the industry, Michael ensures our AI beauty test 
                results are aligned with industry standards.
              </p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <img src="/images/team-3.jpg" alt="Team Member" />
              </div>
              <h3>Sarah Johnson</h3>
              <p className={styles.memberTitle}>UX/UI Designer</p>
              <p className={styles.memberBio}>
                A specialist in creating intuitive user experiences, Sarah ensures that our AI beauty test 
                platform is accessible and easy to use for everyone.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 