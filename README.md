# Mini Marketplace – Test Topshiriq

Ushbu loyiha Frontend Intern sinovi uchun bajarildi. Vazifada sahifaning bir qismi Vanilla JavaScript yordamida, savat qismi esa React yordamida ishlanishi talab qilingan. Loyiha to‘liq bir sahifada ishlaydi.

---

## 1. Nima qildim (loyiha jarayoni)

loyihani run qilish uchun " npm run dev " qilinadi
react-cart faylini ichidagi html root faylni orniga ozim yozgan htmlni qoyganman react bilan js ni birga ishlatish uchun

### 1-qism: HTML, CSS va Vanilla JavaScript (Products bo‘limi)
- Avval loyihaning asosiy HTML tuzilmasini yaratdim.
- CSS yordamida sahifani ikki ustunli – “Products” va “Cart” ko‘rinishida joylashtirdim.
- FakeStore API orqali mahsulotlarni yuklab kelish uchun `fetch()` ishlatdim.
- Mahsulot kartochkalarini (rasm, nomi, narxi, “Add to cart”) dinamik ravishda sahifaga chiqardim.
- “Add to cart” tugmasi bosilganda mahsulot ma’lumotlarini global funksiyaga (`window.__addToCart`) yuboriladigan qilib qildim.  
  Bu keyinchalik React savat qismi bilan bog‘lanishi uchun kerak bo‘lgan.

### 2-qism: React yordamida savat (Cart) funksionalligini yaratdim
- Savat qismi HTML ichidagi alohida DOM id-ga joylashtirildi va React shu nuqtada ishga tushirilgan.
- React ichida `useState` orqali savatdagi mahsulotlar boshqarildi.
- “Add to cart” event’ini Vanilla JS dan qabul qilish uchun `window.__addToCart` ni React ichida `useEffect` orqali tingladim.
- Mahsulotlarni qo‘shish, sonini oshirish/kamaytirish, o‘chirish va savatni tozalash funksiyalarini yozdim.
- Savat ma’lumotlarini `localStorage` ga saqlab qo‘yish uchun `useEffect` ishlatdim.
- `CartItem` va `CartList` kabi komponentlarni alohida struktura bilan yaratdim.
- Savat UI max-height bilan cheklangan, mahsulotlar ko‘paysa scroll paydo bo‘ladi.
- Header (Cart title + items count) va footer (total sum) sticky holatda qoldirildi.

---

## 2. Texnologiyalar

### HTML / CSS / Vanilla JS
- Grid va Flexbox yordamida layout
- Responsive dizayn
- FakeStore API dan ma’lumot olish
- DOM manipulyatsiya

### React
- Vite
- useState, useEffect
- localStorage bilan sinxronizatsiya
- Component-based arxitektura


Rasmlar:

<img src='./screenshots/Screenshot 2025-12-11 213158.png'/>
<img src='./screenshots/Screenshot 2025-12-11 213226.png'/>
<img src='./screenshots/Screenshot 2025-12-11 213301.png'/>
