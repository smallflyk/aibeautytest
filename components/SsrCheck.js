import { useEffect, useState } from 'react';

const SsrCheck = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return null; // 这个组件不渲染任何内容，只是用于检查SSR
};

export default SsrCheck; 