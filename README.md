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

   - Hộp quà tương tác, click mở ra hiển thị lời nhắn.
   - Animation pop-up, scale, fade-in.
   - Nền gradient + sparkles nhẹ.

4. **Gallery / Kỷ niệm**

   - Ảnh project, notes, hoặc lớp học.
   - Hover animation nhẹ để phóng to.

5. **Footer + Scroll To Top**

   - Nút di chuyển lên đầu trang.
   - Thông tin bản quyền.

6. **(Tùy chọn) Mini Game**
   - Game đơn giản phong cách Flappy Bird/Dino.
   - Điểm cao → hiện lời cảm ơn “xịn hơn”.

---

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
│ ├─ Hero.jsx
│ ├─ Timeline.jsx
│ ├─ ThankYouGift.jsx
│ ├─ Gallery.jsx
│ └─ Footer.jsx
└─ styles/
└─ globals.css
public/
└─ codegym-logo.jpeg

yaml
Sao chép mã

---

## Hướng dẫn cài đặt & chạy

1. **Clone dự án:**

```bash
git clone https://github.com/<username>/code-journey-thank-you.git
cd code-journey-thank-you
Cài dependencies:

bash
Sao chép mã
npm install
Nếu bạn muốn Tailwind hoạt động:

bash
Sao chép mã
npx tailwindcss init -p
Và cấu hình tailwind.config.js:

js
Sao chép mã
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

bash
Sao chép mã
npm run dev
Mở trình duyệt:

arduino
Sao chép mã
http://localhost:3000
Bạn sẽ thấy landing page với Hero, scroll xuống sẽ thấy Timeline, Thank You Gift, Gallery.

Cách sử dụng
Scroll xuống các section hoặc click navbar để di chuyển đến Timeline / Thank You / Gallery.

Click vào hộp quà trong phần Thank You để mở ra các lời nhắn cảm ơn.

Hover các ảnh trong Gallery để phóng to nhẹ.
```
