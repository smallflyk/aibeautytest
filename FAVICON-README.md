# Favicon 指南

为了完成网站的favicon设置，请生成并添加以下文件：

## 所需文件清单

将以下文件放在各自的目录中：

1. 在 `/public` 根目录下:
   - `favicon.ico` (大小：32x32或48x48，支持16x16和32x32的多尺寸ICO)

2. 在 `/public/favicon` 目录下:
   - `apple-touch-icon.png` (大小：180x180)
   - `favicon-16x16.png` (大小：16x16)
   - `favicon-32x32.png` (大小：32x32)
   - `safari-pinned-tab.svg` (SVG格式，单色)
   - `android-chrome-192x192.png` (大小：192x192)
   - `android-chrome-512x512.png` (大小：512x512)
   - `mstile-150x150.png` (大小：150x150)

## 生成方法

推荐使用以下工具生成完整的favicon包：

1. [Favicon Generator](https://realfavicongenerator.net/) - 上传一个高质量的图像，自动生成各种尺寸
2. [Favicon.io](https://favicon.io/) - 可以从图像、文本或表情符号创建favicon

## 图标设计建议

为了与网站风格保持一致，建议favicon设计：
- 使用主色调：#6b46e5 (紫色) 或 #5c6cff (蓝色)
- 保持简单、易识别
- 避免复杂细节，确保在小尺寸下仍然清晰
- 可以使用字母"B"或"AI"作为图标元素

## 部署检查清单

- [ ] 所有文件都已放置在正确的目录中
- [ ] 所有文件格式和尺寸都符合要求
- [ ] 已在所有页面组件中引入了Favicon组件
- [ ] 测试在各种浏览器和设备上的显示效果 