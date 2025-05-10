import { useState, useEffect } from 'react';
import Image from 'next/image';

const LazyImage = ({ src, alt, width, height, className, layout = "responsive" }) => {
  const [imgSrc, setImgSrc] = useState(src);
  
  // 处理图片加载失败情况
  const handleError = () => {
    setImgSrc('/images/placeholder.jpg'); // 设置默认占位图
  };
  
  // 检查是否是WebP格式支持
  useEffect(() => {
    // 如果有原始WebP图片，检查浏览器兼容性后使用
    if (src.includes('.jpg') || src.includes('.png')) {
      // 将路径中的jpg/png替换为webp，检查是否存在WebP版本
      const webpSrc = src.replace(/\.(jpg|png)$/, '.webp');
      
      // 创建一个测试图片来检查WebP支持
      const testWebP = (callback) => {
        const webP = new Image();
        webP.onload = webP.onerror = function () {
          callback(webP.height === 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      };
      
      testWebP((support) => {
        if (support) {
          setImgSrc(webpSrc);
        }
      });
    }
  }, [src]);
  
  return (
    <div className={className || ''}>
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        loading="lazy"
        onError={handleError}
        placeholder="blur"
        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3C/svg%3E"
      />
    </div>
  );
};

export default LazyImage; 