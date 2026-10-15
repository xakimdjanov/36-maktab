export type Language = 'uz' | 'ru' | 'en';

export interface TranslationDictionary {
  [key: string]: {
    uz: string;
    ru: string;
    en: string;
  };
}

export const translations: TranslationDictionary = {
  // Navigation
  'nav.home': {
    uz: 'Bosh sahifa',
    ru: 'Главная',
    en: 'Home',
  },
  'nav.about': {
    uz: 'Maktab haqida',
    ru: 'О школе',
    en: 'About school',
  },
  'nav.director': {
    uz: 'Maktab direktori',
    ru: 'Директор',
    en: 'Principal',
  },
  'nav.teachers': {
    uz: 'O‘qituvchilar',
    ru: 'Учителя',
    en: 'Teachers',
  },
  'nav.achievements': {
    uz: 'Yutuqlar',
    ru: 'Достижения',
    en: 'Achievements',
  },
  'nav.education': {
    uz: 'Ta’lim',
    ru: 'Образование',
    en: 'Education',
  },
  'nav.news': {
    uz: 'Yangiliklar',
    ru: 'Новости',
    en: 'News',
  },
  'nav.parents': {
    uz: 'Ota-onalar uchun',
    ru: 'Для родителей',
    en: 'For parents',
  },
  'nav.contact': {
    uz: 'Aloqa',
    ru: 'Контакты',
    en: 'Contact',
  },
  'nav.contactBtn': {
    uz: 'Bog‘lanish',
    ru: 'Связаться',
    en: 'Contact Us',
  },
  'nav.city': {
    uz: 'Namangan shahar',
    ru: 'г. Наманган',
    en: 'Namangan city',
  },
  'nav.sections': {
    uz: 'Sayt bo‘limlari',
    ru: 'Разделы сайта',
    en: 'Site sections',
  },
  'nav.chooseLang': {
    uz: 'Tilni tanlang:',
    ru: 'Выберите язык:',
    en: 'Select language:',
  },
  'nav.leadership': {
    uz: 'Rahbariyat',
    ru: 'Руководство',
    en: 'Leadership',
  },
  'nav.documents': {
    uz: 'Hujjatlar',
    ru: 'Документы',
    en: 'Documents',
  },
  'nav.gallery': {
    uz: 'Fotolavhalar',
    ru: 'Фотогалерея',
    en: 'Gallery',
  },

  // School Identity
  'school.name': {
    uz: 'Namangan shahar 36-sonli umumta’lim maktabi',
    ru: 'Общеобразовательная школа №36 города Намангана',
    en: 'Namangan City Secondary School No. 36',
  },
  'school.shortName': {
    uz: '36-sonli maktab',
    ru: 'Школа №36',
    en: 'School No. 36',
  },
  'school.tagline': {
    uz: 'Namangan shahar xalq ta’limi bo‘limi tasarrufidagi davlat umumta’lim maktabi',
    ru: 'Государственная школа при отделе народного образования города Намангана',
    en: 'Public secondary school under Namangan City Department of Public Education',
  },
  'school.location': {
    uz: 'Namangan shahri, Namangan viloyati, O‘zbekiston',
    ru: 'г. Наманган, Наманганская область, Узбекистан',
    en: 'Namangan city, Namangan region, Uzbekistan',
  },
  'school.phone': {
    uz: '+998 69 224-44-06',
    ru: '+998 69 224-44-06',
    en: '+998 69 224-44-06',
  },
  'school.email': {
    uz: 'namangan36m@umail.uz',
    ru: 'namangan36m@umail.uz',
    en: 'namangan36m@umail.uz',
  },
  'school.principal': {
    uz: 'Jalilov Axadjon Xolikovich',
    ru: 'Джалилов Ахаджон Холикович',
    en: 'Jalilov Axadjon Xolikovich',
  },
  'school.principalRole': {
    uz: 'Maktab direktori',
    ru: 'Директор школы',
    en: 'School Principal',
  },

  // Hero Section
  'hero.badge': {
    uz: 'Davlat umumta’lim muassasasi',
    ru: 'Государственное образовательное учреждение',
    en: 'State Public Educational Institution',
  },
  'hero.title': {
    uz: 'Kelajak sari bilim bilan!',
    ru: 'К знанию — ради будущего!',
    en: 'Towards the Future with Knowledge!',
  },
  'hero.subtitle': {
    uz: 'Namangan shahar 36-sonli umumta’lim maktabi — bilim, tarbiya, izlanish va yuksak maqsadlar sari birgalikda intiladigan ta’lim maskani.',
    ru: 'Общеобразовательная школа №36 города Намангана — центр образования, воспитания, открытий и высоких стремлений.',
    en: 'Namangan City Secondary School No. 36 — an educational institution striving together towards knowledge, character, inquiry, and high aspirations.',
  },
  'hero.ctaAbout': {
    uz: 'Maktab haqida',
    ru: 'О школе',
    en: 'About the School',
  },
  'hero.ctaAchievements': {
    uz: 'Yutuqlarimiz',
    ru: 'Наши достижения',
    en: 'Our Achievements',
  },
  'hero.quickCall': {
    uz: 'Tezkor aloqa',
    ru: 'Связаться',
    en: 'Contact Us',
  },

  // Stats
  'stats.title': {
    uz: 'Maktabimiz raqamlarda',
    ru: 'Наша школа в цифрах',
    en: 'Our School in Numbers',
  },
  'stats.students': {
    uz: 'O‘quvchilar soni',
    ru: 'Количество учащихся',
    en: 'Number of Students',
  },
  'stats.teachers': {
    uz: 'Pedagoglar jamoasi',
    ru: 'Педагогический коллектив',
    en: 'Teaching Faculty',
  },
  'stats.classes': {
    uz: 'Sinf xonalari va laboratoriyalar',
    ru: 'Классы и лаборатории',
    en: 'Classrooms & Labs',
  },
  'stats.achievements': {
    uz: 'Akademik yutuqlar va sertifikatlar',
    ru: 'Академические награды и сертификаты',
    en: 'Academic Awards & Certificates',
  },
  'stats.note': {
    uz: 'Ko‘rsatkichlar tasdiqlangan maktab pasporti asosida muntazam yangilanadi.',
    ru: 'Показатели регулярно обновляются на основе утвержденного паспорта школы.',
    en: 'Indicators are regularly updated based on the approved school passport.',
  },

  // Common UI
  'common.details': {
    uz: 'Batafsil',
    ru: 'Подробнее',
    en: 'Learn More',
  },
  'common.viewAll': {
    uz: 'Barchasini ko‘rish',
    ru: 'Смотреть все',
    en: 'View All',
  },
  'common.search': {
    uz: 'Qidirish...',
    ru: 'Поиск...',
    en: 'Search...',
  },
  'common.filterAll': {
    uz: 'Barchasi',
    ru: 'Все',
    en: 'All',
  },
  'common.download': {
    uz: 'Yuklab olish',
    ru: 'Скачать',
    en: 'Download',
  },
  'common.preview': {
    uz: 'Ko‘rish',
    ru: 'Просмотр',
    en: 'Preview',
  },
  'common.officialStatus': {
    uz: 'Rasmiy ma’lumot',
    ru: 'Официальная информация',
    en: 'Official Information',
  },
  'common.pendingVerification': {
    uz: 'Rasmiy ma’lumot kutilmoqda',
    ru: 'Ожидается официальное подтверждение',
    en: 'Pending Official Verification',
  },
  'common.back': {
    uz: 'Orqaga qaytish',
    ru: 'Назад',
    en: 'Go Back',
  },
  'common.close': {
    uz: 'Yopish',
    ru: 'Закрыть',
    en: 'Close',
  },
  'common.send': {
    uz: 'Yuborish',
    ru: 'Отправить',
    en: 'Submit',
  },
  'common.sending': {
    uz: 'Yuborilmoqda...',
    ru: 'Отправка...',
    en: 'Sending...',
  },
  'common.success': {
    uz: 'Muvaffaqiyatli yuborildi',
    ru: 'Успешно отправлено',
    en: 'Successfully Sent',
  },
  'common.error': {
    uz: 'Xatolik yuz berdi',
    ru: 'Произошла ошибка',
    en: 'An error occurred',
  },

  // Sections
  'home.aboutSectionTitle': {
    uz: 'Zamonaviy ta’lim va mustahkam tarbiya',
    ru: 'Современное образование и прочное воспитание',
    en: 'Modern Education & Strong Principles',
  },
  'home.teachersSectionTitle': {
    uz: 'Bizning ustozlarimiz — kelajak bunyodkorlari',
    ru: 'Наши учителя — создатели будущего',
    en: 'Our Teachers — Architects of the Future',
  },
  'home.teachersSubtitle': {
    uz: 'Malakali pedagoglar jamoasi yosh avlodga chuqur bilim va hayotiy ko‘nikmalarni berishda fidokorona mehnat qilmoqda.',
    ru: 'Квалифицированный педагогический коллектив самоотверженно трудится для всестороннего развития учащихся.',
    en: 'A dedicated team of qualified educators works tirelessly to impart deep knowledge and essential life skills.',
  },
  'home.achievementsSectionTitle': {
    uz: 'O‘quvchilarimizning akademik yutuqlari',
    ru: 'Академические достижения наших учащихся',
    en: 'Academic Achievements of Our Students',
  },
  'home.achievementsSubtitle': {
    uz: 'Oliy ta’lim muassasalariga qabul natijalari, fan olimpiadalari g‘oliblari va xalqaro sertifikatlar.',
    ru: 'Результаты поступления в вузы, победители предметных олимпиад и международные сертификаты.',
    en: 'Higher education admissions, subject olympiad laureates, and certified academic credentials.',
  },
  'home.englishTitle': {
    uz: 'Xorijiy tillarni chuqur o‘rganish',
    ru: 'Углубленное изучение иностранных языков',
    en: 'Intensive Foreign Language Education',
  },
  'home.englishSubtitle': {
    uz: 'Ingliz tili darslarida zamonaviy interaktiv metodika, so‘zlashuv amaliyoti va xalqaro til o‘rganish standartlari qo‘llaniladi.',
    ru: 'На уроках английского языка применяются интерактивные методики, разговорная практика и международные стандарты.',
    en: 'English lessons feature modern communicative methods, intensive speaking practice, and international standards.',
  },
  'home.clubsTitle': {
    uz: 'Qiziqishdan kasb sari',
    ru: 'От увлечения к профессии',
    en: 'From Interest to Profession',
  },
  'home.clubsSubtitle': {
    uz: 'Tibbiyot, tabiiy fanlar, birinchi yordam va kasbga yo‘naltirilgan to‘garaklar o‘quvchilarda amaliy ko‘nikmalarni shakllantiradi.',
    ru: 'Медицинские кружки, естественные науки, первая помощь и ранняя профориентация.',
    en: 'Healthcare, natural science workshops, first-aid fundamentals, and vocational guidance activities.',
  },
  'home.newsTitle': {
    uz: 'So‘nggi maktab yangiliklari',
    ru: 'Последние школьные новости',
    en: 'Latest School News',
  },
  'home.parentsTitle': {
    uz: 'Ota-onalar bilan hamkorlik',
    ru: 'Сотрудничество с родителями',
    en: 'Partnership with Parents',
  },
  'home.leadershipTitle': {
    uz: 'Maktab ma’muriyati',
    ru: 'Администрация школы',
    en: 'School Leadership',
  },
  'home.documentsTitle': {
    uz: 'Rasmiy me’yoriy hujjatlar',
    ru: 'Официальные нормативные документы',
    en: 'Official Regulatory Documents',
  },
  'home.contactTitle': {
    uz: 'Maktab bilan bog‘lanish',
    ru: 'Связаться со школой',
    en: 'Get in Touch with School',
  },

  // Contact Form
  'form.fullName': {
    uz: 'F.I.SH. (To‘liq ismingiz)',
    ru: 'Ф.И.О. (Ваше полное имя)',
    en: 'Full Name',
  },
  'form.fullNamePlaceholder': {
    uz: 'Masalan: Abdullayev Temur Olimovich',
    ru: 'Например: Абдуллаев Темур Олимович',
    en: 'e.g., Abdullayev Temur Olimovich',
  },
  'form.phone': {
    uz: 'Telefon raqamingiz',
    ru: 'Номер телефона',
    en: 'Phone Number',
  },
  'form.subject': {
    uz: 'Murojaat maqsadi yoki mavzusi',
    ru: 'Тема или цель обращения',
    en: 'Subject or Purpose of Inquiry',
  },
  'form.subjectPlaceholder': {
    uz: 'Mavzuni tanlang yoki yozing',
    ru: 'Выберите тему или укажите цель',
    en: 'Select or specify a subject',
  },
  'form.subjectOptions.admission': {
    uz: '1-sinfga yoki ko‘chirish qabul jarayoni',
    ru: 'Приём в 1 класс или перевод',
    en: 'Grade 1 Admission or Transfer',
  },
  'form.subjectOptions.academic': {
    uz: 'O‘quv jarayoni va baholar haqida',
    ru: 'Учебный процесс и оценки',
    en: 'Academic Process & Grading',
  },
  'form.subjectOptions.clubs': {
    uz: 'To‘garaklar va fakultativ mashg‘ulotlar',
    ru: 'Кружки и факультативы',
    en: 'Clubs & Extracurriculars',
  },
  'form.subjectOptions.reception': {
    uz: 'Direktor qabuliga yozilish',
    ru: 'Запись на приём к директору',
    en: 'Principal Reception Appointment',
  },
  'form.subjectOptions.general': {
    uz: 'Boshqa taklif yoki savol',
    ru: 'Другой вопрос или предложение',
    en: 'General Inquiry / Feedback',
  },
  'form.message': {
    uz: 'Murojaat matni',
    ru: 'Текст обращения',
    en: 'Message Text',
  },
  'form.messagePlaceholder': {
    uz: 'Savol, taklif yoki murojaatingiz mazmunini batafsil yozing...',
    ru: 'Подробно опишите ваш вопрос, предложение или цель обращения...',
    en: 'Please describe your inquiry, suggestion, or question in detail...',
  },
  'form.consent': {
    uz: 'Murojaat yuborish orqali shaxsga doir ma’lumotlarni ko‘rib chiqish tartibiga rozilik bildirasiz.',
    ru: 'Отправляя обращение, вы соглашаетесь с порядком рассмотрения персональных данных.',
    en: 'By submitting, you consent to the processing of contact information for inquiry response.',
  },
  'form.submitButton': {
    uz: 'Murojaatni yuborish',
    ru: 'Отправить обращение',
    en: 'Send Message',
  },
  'form.successMessage': {
    uz: 'Murojaatingiz qabul qilindi! Maktab mas’ullari ko‘rsatilgan telefon raqami orqali siz bilan bog‘lanishadi.',
    ru: 'Ваше обращение принято! Ответственные сотрудники свяжутся с вами по указанному телефону.',
    en: 'Your inquiry has been received! School administrators will contact you via the provided phone number.',
  },
  'form.errorPhone': {
    uz: 'Iltimos, to‘g‘ri telefon raqamini kiriting (+998...)',
    ru: 'Пожалуйста, введите корректный номер телефона (+998...)',
    en: 'Please enter a valid phone number (+998...)',
  },
  'form.errorRequired': {
    uz: 'Ushbu maydon to‘ldirilishi shart',
    ru: 'Это поле обязательно для заполнения',
    en: 'This field is required',
  },

  // Footer
  'footer.quickLinks': {
    uz: 'Tezkor havolalar',
    ru: 'Быстрые ссылки',
    en: 'Quick Links',
  },
  'footer.officialHours': {
    uz: 'Ish tartibi',
    ru: 'График работы',
    en: 'Working Hours',
  },
  'footer.hoursValue': {
    uz: 'Dushanba – Shanba: 08:00 – 17:00 (Yakshanba: dam olish)',
    ru: 'Понедельник – Суббота: 08:00 – 17:00 (Воскресенье: выходной)',
    en: 'Monday – Saturday: 08:00 – 17:00 (Sunday: closed)',
  },
  'footer.copyright': {
    uz: 'Barcha huquqlar himoyalangan.',
    ru: 'Все права защищены.',
    en: 'All rights reserved.',
  },
  'footer.accessibility': {
    uz: 'Qulaylik va shaffoflik',
    ru: 'Доступность и прозрачность',
    en: 'Accessibility & Transparency',
  },
};
