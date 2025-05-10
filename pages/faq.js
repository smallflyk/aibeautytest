import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/FAQ.module.css';
import CanonicalUrl from '../components/CanonicalUrl';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const faqs = [
    {
      category: "基本信息",
      questions: [
        {
          question: "How does the AI beauty test work?",
          answer: "Our AI beauty test uses advanced facial recognition technology to analyze your facial features. The system evaluates key aspects such as facial symmetry, golden ratio proportions, skin quality, and facial harmony. By examining these elements in detail, our AI provides a comprehensive beauty score along with personalized recommendations to enhance your natural features."
        },
        {
          question: "How accurate is the AI beauty test?",
          answer: "Our AI beauty test is based on established beauty principles including facial symmetry, golden ratio proportions, and skin quality. While beauty is subjective and varies across cultures, our algorithm provides an objective analysis based on these universal beauty metrics. The AI has been trained on diverse datasets to ensure accuracy across different ethnicities, ages, and genders. However, it's important to remember that beauty cannot be fully defined by algorithms - our AI beauty test offers one perspective based on scientific principles."
        },
        {
          question: "How long does the AI beauty test take?",
          answer: "Our advanced AI provides beauty test results within seconds after uploading your photo. The entire process from uploading your image to receiving your detailed beauty analysis typically takes less than a minute. The speed of the analysis may vary slightly depending on your internet connection and the size of the uploaded image, but our system is optimized to deliver rapid results without compromising on accuracy."
        }
      ]
    },
    {
      category: "隐私与安全",
      questions: [
        {
          question: "Is my photo safe when I use the AI beauty test?",
          answer: "Yes, your privacy is our top priority. When you upload a photo for the AI beauty test, it is processed instantly through our secure servers and is never stored after the analysis is complete. We employ strict security protocols to ensure your data remains protected throughout the testing process. Your photo is only used for the purpose of the beauty analysis and is not shared with any third parties."
        }
      ]
    },
    {
      category: "使用指南",
      questions: [
        {
          question: "Can I use any photo for the AI beauty test?",
          answer: "For the most accurate AI beauty test results, we recommend using a clear, front-facing portrait photo with good lighting and no filters. The photo should show your entire face without obstruction from hair, glasses, or face coverings. Natural expressions work best, though a slight smile is fine. Photos with heavy makeup, extreme angles, or poor lighting may result in less accurate analysis. For optimal results, choose a recent photo that presents your natural appearance."
        },
        {
          question: "Can I use the AI beauty test on mobile devices?",
          answer: "Yes, our AI beauty test platform is fully responsive and works on all modern mobile devices. You can upload a photo from your phone's gallery or take a selfie directly through our interface. The mobile experience is optimized to provide the same comprehensive analysis and recommendations as the desktop version, allowing you to discover your beauty score anytime, anywhere."
        },
        {
          question: "Can I share my AI beauty test results?",
          answer: "Yes, after receiving your AI beauty test results, you'll have the option to share them on social media platforms including Facebook, Twitter, and Instagram. You can choose to share your overall score or the complete analysis. This feature is entirely optional, and you maintain full control over whether or not to share your results. Many users enjoy sharing their beauty scores with friends and comparing results."
        }
      ]
    },
    {
      category: "技术细节",
      questions: [
        {
          question: "What metrics are used in the AI beauty test?",
          answer: "Our AI beauty test analyzes several key metrics including facial symmetry (the balance between left and right sides of your face), golden ratio proportions (how closely your facial feature measurements align with the 1:1.618 ratio), skin quality (texture, evenness, and clarity), and facial harmony (how well your features work together as a whole). These metrics are combined to generate your overall beauty score, with detailed feedback on each aspect."
        },
        {
          question: "Is the AI beauty test biased toward certain ethnicities or features?",
          answer: "We've designed our AI beauty test to be as unbiased as possible by training it on diverse datasets representing various ethnicities, ages, and facial characteristics. The system evaluates beauty based on universal principles like symmetry and proportion rather than culturally specific standards. We continuously update our algorithms to ensure fair analysis across all demographic groups and to eliminate potential biases in our AI beauty test results."
        },
        {
          question: "Do you offer additional AI beauty tools beyond the beauty test?",
          answer: "We're constantly expanding our suite of AI beauty tools. In addition to our core beauty test, we plan to launch complementary features including age prediction, celebrity look-alike matching, and personalized hairstyle recommendations. These additional tools will use the same advanced AI technology to provide even more insights into your unique features and beauty potential. Stay tuned for updates on these exciting new features!"
        }
      ]
    }
  ];
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Frequently Asked Questions | AI Beauty Test</title>
        <meta name="description" content="Find answers to common questions about our AI beauty test. Learn how our beauty score works, how we protect your privacy, and get tips for accurate results." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CanonicalUrl />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.description}>
            Find answers to common questions about our AI beauty test
          </p>
        </section>

        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Common Questions</h2>
          <div className={styles.faqContainer}>
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className={styles.faqCategory}>
                <h2 className={styles.categoryTitle}>{category.category}</h2>
                {category.questions.map((faq, index) => (
                  <div 
                    key={`${categoryIndex}-${index}`}
                    className={`${styles.faqItem} ${activeIndex === `${categoryIndex}-${index}` ? styles.active : ''}`}
                  >
                    <div 
                      className={styles.faqQuestion}
                      onClick={() => toggleAccordion(`${categoryIndex}-${index}`)}
                    >
                      <h3>{faq.question}</h3>
                      <span className={styles.faqIcon}>
                        {activeIndex === `${categoryIndex}-${index}` ? '−' : '+'}
                      </span>
                    </div>
                    <div className={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.contactSection}>
          <h2>Still Have Questions?</h2>
          <p>
            If you couldn't find the answer to your question, feel free to contact us. Our team is here to help!
          </p>
          <a href="mailto:support@aibeautytest.com" className={styles.contactButton}>
            Contact Support
          </a>
        </section>
      </main>
    </div>
  );
} 