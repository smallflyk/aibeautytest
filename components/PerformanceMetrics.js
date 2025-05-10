import { useEffect } from 'react';
import { useRouter } from 'next/router';

const PerformanceMetrics = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window && 'PerformanceObserver' in window) {
      // 使用PerformanceObserver监控CLS指标
      const clsObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          console.log('CLS:', entries[0].value);
          // 这里可以发送到分析服务
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });

      // 监控LCP指标
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          console.log('LCP:', entries[0].startTime);
          // 这里可以发送到分析服务
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // 监控FID指标
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          console.log('FID:', entries[0].processingStart - entries[0].startTime);
          // 这里可以发送到分析服务
        }
      });
      fidObserver.observe({ type: 'first-input', buffered: true });

      // 清理函数
      return () => {
        clsObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
      };
    }
  }, [router.pathname]);

  // 这个组件不渲染任何内容
  return null;
};

export default PerformanceMetrics; 