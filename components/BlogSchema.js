import Head from 'next/head';

const BlogSchema = ({ title, description, slug, image, datePublished, dateModified }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.aibeautytest.art/blog/${slug}`
    },
    "headline": title,
    "description": description,
    "image": image || "https://www.aibeautytest.art/images/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": "AI Beauty Test",
      "@id": "https://www.aibeautytest.art/#organization"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Beauty Test",
      "@id": "https://www.aibeautytest.art/#organization",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aibeautytest.art/images/logo.png",
        "width": 112,
        "height": 112
      }
    },
    "datePublished": datePublished || "2023-11-15",
    "dateModified": dateModified || "2023-11-15"
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

export default BlogSchema; 