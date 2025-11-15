# Code Journey: Website Cảm Ơn Mentor / Giáo Viên

![Banner](./public/codegym-logo.jpeg)

## Giới thiệu

Đây là một dự án **Next.js + TailwindCSS + Framer Motion** được tạo ra để:

- **Gửi lời tri ân** tới giáo viên và mentor đã đồng hành trong hành trình học lập trình.
- Trình bày **timeline học tập** và các **kỷ niệm đáng nhớ**.
- Tạo trải nghiệm **visual & interactive** với animation mượt mà.
- Có thể mở rộng với **mini game** hoặc **gallery hình ảnh** để tăng tính tương tác.

### Tính năng chính

1. **Landing Page / Hero Section**

   - Parallax background.
   - Animated particles.
   - Title + subtitle với text fade-up & typewriter effect.

2. **Timeline Học Tập**

   - Các mốc quan trọng trong quá trình học.
   - Animation xuất hiện khi scroll (`scroll reveal`).
   - Icon glow và trượt từ trái/phải.

3. **Lời Cảm Ơn (Thank You)**

   - Animation pop-up, scale, fade-in.
   - Nền gradient + sparkles nhẹ.

4. **Gallery / Kỷ niệm**

   - Ảnh project, notes, lớp học, team-building, sinh nhật.
   - Hover animation nhẹ để phóng to.

5. **Footer + Scroll To Top**

   - Nút di chuyển lên đầu trang.
   - Thông tin bản quyền.

## Công nghệ sử dụng

- **Next.js**: SSR, SEO tốt, page-based routing.
- **TailwindCSS + DaisyUI / shadcn**: layout nhanh, responsive.
- **Framer Motion**: animation mượt, scroll reveal, hover effect.
- **react-simple-typewriter**: hiệu ứng gõ chữ.
- **React**: component hóa toàn bộ UI.

---

## Cấu trúc thư mục

src/
├─ app/
│ └─ page.tsx # Trang chính gọi các component
├─ components/
│ └─ BackToTop.tsx
│ └─ CodeRain.tsx
│ └─ Footer.tsx
│ ├─ HeroSection.tsx
│ ├─ Timeline.tsx
│ ├─ ThankYou.tsx
│ ├─ Gallery.tsx
└─ styles/
└─ globals.css
public/
├─ codegym-logo.jpeg
├─ image1.jpg
├─ image2.jpg
├─ image3.jpg
├─ image4.jpg
├─ image5.jpg
├─ image6.jpg
├─ image7.jpg
├─ image8.jpg
├─ image9.jpg
└─ image10.jpg

## Hướng dẫn cài đặt & chạy

1. **Clone dự án:**

```bash
git clone https://github.com/<username>/thankyou-20-11-2025
cd next-thankyou

Cài dependencies:
npm install

Cấu hình TailwindCSS (nếu chưa có):
npx tailwindcss init -p

Và chỉnh tailwind.config.js:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Chạy ứng dụng:
npm run dev

Mở trình duyệt:
http://localhost:3000

Bạn sẽ thấy landing page với Hero Section, scroll xuống sẽ thấy Timeline, Thank You Gift, và Gallery.
```
