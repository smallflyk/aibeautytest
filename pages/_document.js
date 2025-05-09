import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
            rel="stylesheet"
          />
          <meta name="keywords" content="AI beauty test, beauty score, facial analysis, beauty analyzer, AI facial recognition, beauty calculator" />
          <meta name="author" content="AI Beauty Test" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="AI Beauty Test | Discover Your Beauty Score with Advanced AI" />
          <meta property="og:description" content="Upload your selfie for an instant AI beauty test. Our advanced AI analyzes facial symmetry, golden ratio, and skin quality to provide a detailed beauty score." />
          <meta property="og:image" content="/images/og-image.jpg" />
          <meta property="og:url" content="https://aibeautytest.com" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="AI Beauty Test | Discover Your Beauty Score with Advanced AI" />
          <meta property="twitter:description" content="Upload your selfie for an instant AI beauty test. Our advanced AI analyzes facial symmetry, golden ratio, and skin quality to provide a detailed beauty score." />
          <meta property="twitter:image" content="/images/og-image.jpg" />
          
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-NNZW6DE6XL"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-NNZW6DE6XL');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument; 