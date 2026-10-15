# Namangan shahar 36-sonli umumta’lim maktabi rasmiy veb-sayti

O‘zbekiston Respublikasi, Namangan viloyati, Namangan shahri 36-sonli davlat umumta’lim maktabining zamonaviy, xalqaro andozalarga mos, 3 tilda ishlovchi rasmiy portali.

---

## 🏛 Rasmiy maktab rekvizitlari
- **Muassasa nomi**: Namangan shahar 36-sonli umumta’lim maktabi
- **Maktab direktori**: Jalilov Axadjon Xolikovich
- **Joylashuv**: Namangan shahri, Namangan viloyati, O‘zbekiston
- **Rasmiy telefon**: +998 69 224-44-06
- **Rasmiy elektron pochta**: namangan36m@umail.uz
- **Ish tartibi**: Dushanba – Shanba, 08:00 – 17:00

---

## 📑 Sayt sahifalari va navigatsiya tartibi (Tasdiqlangan ketma-ketlik)
1. **Bosh sahifa (Home)** (`/`) — Maktab nishoni, "Kelajak sari bilim bilan!" shiori, raqamlarda statistika, qadriyatlar, ingliz tili ta'limi, «Qiziqishdan kasb sari» tibbiyot to'garagi, yangiliklar va murojaat shakli.
2. **Maktab haqida** (`/about`) — Maktab tarixi, missiya va vizion, direktor murojaati, davlat attestatsiyasi ma'lumotlari.
3. **O‘qituvchilar** (`/teachers`) — Fanlar va kafedralar bo‘yicha saralanuvchi pedagoglar katalogi, qidiruv tizimi, malaka toifalari.
4. **Yutuqlar va natijalar** (`/achievements`) — OTMga talabalikka qabul natijalari, fan olimpiadalari g‘oliblari, xalqaro IELTS/CEFR sertifikatlari, yillar bo‘yicha filtr.
5. **Ta’lim va imkoniyatlar** (`/education`) — Xorijiy tillar (Ingliz tili so'zlashuv klubi), «Qiziqishdan kasb sari» tibbiy to'garagi, IT va robototexnika, olimpiada to'garaklari va dars jadvallari.
6. **Yangiliklar va tadbirlar** (`/news`, `/news/:id`) — Kategoriyalar (tadbir, e'lon, akademik), qidiruv, to'liq maqolalar ko'rinishi.
7. **Ota-onalar uchun** (`/parents`) — 1-sinfga qabul hujjatlari ro'yxati, maktab formasi, dars va qo'ng'iroqlar jadvali, choraklar taqvimi, eMaktab (Kundalik) tizimiga havola.
8. **Aloqa** (`/contact`) — Maktab manzili, telefon, elektron pochta, interaktiv xarita va faqat telefon bilan ishlaydigan qulay murojaat yuborish shakli.

**Qo'shimcha rasmiy bo'limlar:**
- **Rahbariyat** (`/leadership`) — Maktab direktori Jalilov Axadjon Xolikovich, o‘quv va ma’naviy ishlar bo‘yicha o‘rinbosarlar, fuqarolarni qabul qilish vaqtlari.
- **Hujjatlar va ochiq ma’lumotlar** (`/documents`) — Maktab ustavi, ichki mehnat tartibi, ochiq hisobotlar, yuklab olish tizimi.
- **Fotogalereya** (`/gallery`) — Dars jarayonlari, bayramlar, to'garaklar, sport maydoni va kutubxona fotolavhalari (Lightbox bilan).

---

## 🎨 Dizayn tizimi va ranglar palitrasi
- **Primary (To‘q dengiz moviysi)**: `#163A5F`
- **Secondary (Ta’lim moviysi)**: `#2F6F9F`
- **Background (Yumshoq oqish fon)**: `#F7F9FC`
- **Surface (Oq yuza)**: `#FFFFFF`
- **Accent (Tilla-sariq bezak)**: `#D6AE57`
- **Main text (Qoramtir matn)**: `#202B38`
- **Secondary text (Kulrang matn)**: `#697586`

---

## 🌐 3 Tilda to‘liq xalqarolashtirish (i18n)
Sayt to‘liq 3 tilda ishlaydi:
- **O‘zbekcha (Lotin)** — Birlamchi til
- **Русский (Кириллица)**
- **English**

Har bir sahifa, sarlavha, tugma, shakl, xato xabari va bildirishnoma to‘liq tarjima qilingan bo‘lib, havola orqali ulashilganda `?lang=uz|ru|en` parametri orqali tanlangan til saqlanib qoladi.

---

## 📱 300px Ekran moslashuvchanligi (Mobile-First)
Sayt 300px, 320px, 360px, 375px, 390px, 430px va barcha planshet hamda kompyuter ekranlarida hech qanday gorizontal siljishsiz (zero horizontal overflow) mukammal ishlaydi.

---

## 🚀 Loyihani ishga tushirish

```bash
# Kutubxonalarni o'rnatish
npm install

# Dasturchi rejimida ishga tushirish (Local dev server)
npm run dev

# Ishlab chiqarishga yig'ish (Production build)
npm run build

# Yig'ilgan loyihani ko'rish (Preview)
npm run preview
```

---

## 📝 Ma'lumotlarni tahrirlash va yangilash
Barcha tarkibiy ma'lumotlar alohida data modullarida saqlanadi:
- `src/data/schoolInfo.ts` — Maktab pasporti va statistikasi
- `src/data/leadershipData.ts` — Rahbariyat tarkibi
- `src/data/teachersData.ts` — O'qituvchilar ro'yxati
- `src/data/achievementsData.ts` — O'quvchilar yutuqlari va OTM qabullari
- `src/data/educationData.ts` — To'garaklar va ta'lim dasturlari
- `src/data/newsData.ts` — Yangiliklar va e'lonlar
- `src/data/parentsData.ts` — Ota-onalar qo'llanmasi va qo'ng'iroqlar jadvali
- `src/data/documentsData.ts` — Me'yoriy hujjatlar va ustav
- `src/data/galleryData.ts` — Fotogalereya suratlari
- `src/data/translations.ts` — 3 tildagi barcha matnlar va tarjimalar lug'ati
# 36-maktab
