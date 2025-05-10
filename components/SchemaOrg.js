import Head from 'next/head';

const SchemaOrg = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.aibeautytest.art/#organization",
        "name": "AI Beauty Test",
        "url": "https://www.aibeautytest.art",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.aibeautytest.art/images/logo.png",
          "width": 112,
          "height": 112
        },
        "description": "AI美颜测试平台，通过先进人工智能分析面部特征提供详细美颜评分"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.aibeautytest.art/#website",
        "url": "https://www.aibeautytest.art",
        "name": "AI Beauty Test",
        "description": "使用AI分析面部特征并获取美颜评分",
        "publisher": {
          "@id": "https://www.aibeautytest.art/#organization"
        }
      }
    ]
  };

  return (
    <Head>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export default SchemaOrg; 