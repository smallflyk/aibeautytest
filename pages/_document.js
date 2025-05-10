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
          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#603cba" />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          
          {/* Fonts */}
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
            rel="stylesheet"
          />
          
          {/* SEO Meta Tags */}
          <meta name="keywords" content="AI beauty test, beauty score, facial analysis, beauty analyzer, AI facial recognition" />
          <meta name="author" content="AI Beauty Test" />
          <meta name="robots" content="index, follow" />
          
          {/* 搜索引擎验证 */}
          <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
          <meta name="baidu-site-verification" content="YOUR_BAIDU_VERIFICATION_CODE" />
          <meta name="sogou_site_verification" content="YOUR_SOGOU_VERIFICATION_CODE" />
          <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
          <meta name="360-site-verification" content="YOUR_360_VERIFICATION_CODE" />
          
          {/* Open Graph / Social Media */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="AI Beauty Test | Discover Your Beauty Score with Advanced AI" />
          <meta property="og:description" content="Upload your selfie for an instant AI beauty test. Our advanced AI analyzes facial symmetry, golden ratio, and skin quality to provide a detailed beauty score." />
          <meta property="og:image" content="/images/og-image.jpg" />
          <meta property="og:url" content="https://aibeautytest.art" />
          
          {/* Twitter Card */}
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