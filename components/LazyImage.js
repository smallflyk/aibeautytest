import { useState, useEffect } from 'react';
import Image from 'next/image';

const LazyImage = ({ src, alt, width, height, className, layout = "responsive" }) => {
  // 使用默认占位图作为初始值，避免图片不存在的错误
  const [imgSrc, setImgSrc] = useState('/images/placeholder.jpg');
  
  // 处理图片加载失败情况
  const handleError = () => {
    setImgSrc('/images/placeholder.jpg'); // 设置默认占位图
  };
  
  // 当组件挂载时尝试加载原始图片
  useEffect(() => {
    // 先检查图片是否存在
    const img = new Image();
    img.onload = () => {
      // 图片存在，设置为原始源
      setImgSrc(src);
      
      // 如果支持WebP，尝试WebP版本
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
            // 创建一个新的图片对象检查WebP版本是否存在
            const webpImg = new Image();
            webpImg.onload = () => {
              setImgSrc(webpSrc);
            };
            webpImg.src = webpSrc;
          }
        });
      }
    };
    
    img.onerror = () => {
      // 图片不存在，使用占位图
      setImgSrc('/images/placeholder.jpg');
    };
    
    img.src = src;
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