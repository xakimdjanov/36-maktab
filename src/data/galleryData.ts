export interface GalleryItem {
  id: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  category: 'classrooms' | 'events' | 'clubs' | 'sports' | 'library';
  date: string;
  caption: {
    uz: string;
    ru: string;
    en: string;
  };
  placeholderAspect: string;
  bgGradient: string;
}

export const galleryCategories = {
  all: {
    uz: 'Barcha rasmlar',
    ru: 'Все фотографии',
    en: 'All Photos',
  },
  classrooms: {
    uz: 'Dars jarayonlari va xonalar',
    ru: 'Учебные классы и уроки',
    en: 'Classrooms & Lessons',
  },
  events: {
    uz: 'Maktab tadbirlari va bayramlar',
    ru: 'Праздники и мероприятия',
    en: 'School Events & Ceremonies',
  },
  clubs: {
    uz: 'To‘garaklar va laboratoriya',
    ru: 'Кружки и лаборатории',
    en: 'Clubs & Laboratories',
  },
  sports: {
    uz: 'Sport maydoni va musobaqalar',
    ru: 'Спортплощадка и турниры',
    en: 'Sports Field & Tournaments',
  },
  library: {
    uz: 'Kutubxona va axborot-resurs',
    ru: 'Библиотека и ресурсы',
    en: 'Library & Resource Center',
  },
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: {
      uz: 'Zamonaviy interaktiv texnologiyalar bilan jihozlangan sinf xonasi',
      ru: 'Классная комната с современным интерактивным оборудованием',
      en: 'Classroom Equipped with Contemporary Interactive Technology',
    },
    category: 'classrooms',
    date: '2026-09-15',
    caption: {
      uz: 'Elektron doska va zamonaviy o‘quv qurollari bilan ta’minlangan o‘quv xonasi.',
      ru: 'Учебный кабинет, оснащенный интерактивной доской и наглядными пособиями.',
      en: 'Instructional room outfitted with interactive electronic board and teaching aids.',
    },
    placeholderAspect: 'aspect-[4/3]',
    bgGradient: 'from-blue-900 to-indigo-950',
  },
  {
    id: 'gal-2',
    title: {
      uz: '«Qiziqishdan kasb sari» tibbiyot to‘garagida amaliy mashg‘ulot',
      ru: 'Практическое занятие в медицинском кружке «От увлечения к профессии»',
      en: 'Practical Workshop at "From Interest to Profession" Healthcare Club',
    },
    category: 'clubs',
    date: '2026-09-22',
    caption: {
      uz: 'O‘quvchilar anatomiya maketlari yordamida inson organizmi tuzilishini o‘rganmoqdalar.',
      ru: 'Учащиеся изучают строение организма человека с помощью анатомических макетов.',
      en: 'Students study human physiological structures with anatomical teaching models.',
    },
    placeholderAspect: 'aspect-[4/3]',
    bgGradient: 'from-emerald-900 to-teal-950',
  },
  {
    id: 'gal-3',
    title: {
      uz: '«Bilimlar kuni» — 1-qo‘ng‘iroq tantanali bayrami',
      ru: 'Торжественная линейка первого звонка «День знаний»',
      en: 'First Bell Ceremony Celebrating Knowledge Day',
    },
    category: 'events',
    date: '2026-09-02',
    caption: {
      uz: 'Yangi o‘quv yilining boshlanishi va 1-sinf o‘quvchilarini tantanali kutib olish marosimi.',
      ru: 'Торжественная встреча первоклассников и начало нового учебного года.',
      en: 'Welcome ceremony honoring first-grade pupils embarking on their academic journey.',
    },
    placeholderAspect: 'aspect-[16/10]',
    bgGradient: 'from-amber-900 to-slate-900',
  },
  {
    id: 'gal-4',
    title: {
      uz: 'Ingliz tili so‘zlashuv klubi (Speaking Club) darsi',
      ru: 'Занятие разговорного клуба английского языка (Speaking Club)',
      en: 'English Speaking Club Dialogue Session',
    },
    category: 'classrooms',
    date: '2026-09-18',
    caption: {
      uz: 'Interaktiv guruhlarda o‘quvchilarning og‘zaki nutqini rivojlantirish darsi.',
      ru: 'Урок развития устной диалогической речи в интерактивных группах.',
      en: 'Collaborative spoken English conversational development drill.',
    },
    placeholderAspect: 'aspect-[4/3]',
    bgGradient: 'from-cyan-900 to-blue-950',
  },
  {
    id: 'gal-5',
    title: {
      uz: 'Maktab sport maydonchasida voleybol musobaqasi',
      ru: 'Волейбольный турнир на школьной спортивной площадке',
      en: 'Volleyball Tournament on the School Sports Grounds',
    },
    category: 'sports',
    date: '2026-09-25',
    caption: {
      uz: 'Sinflararo sog‘lomlashtirish sport haftaligi doirasidagi musobaqa.',
      ru: 'Соревнования в рамках недели здоровья между классами.',
      en: 'Inter-class athletics tournament fostering vitality and sportsmanship.',
    },
    placeholderAspect: 'aspect-[4/3]',
    bgGradient: 'from-sky-900 to-slate-900',
  },
  {
    id: 'gal-6',
    title: {
      uz: 'Maktab axborot-resurs markazi va kutubxona zali',
      ru: 'Школьный информационно-ресурсный центр и читальный зал',
      en: 'School Information Resource Center & Reading Hall',
    },
    category: 'library',
    date: '2026-09-10',
    caption: {
      uz: 'O‘quvchilarning mustaqil mutolaa qilishi va dars tayyorlashi uchun qulay sharoitlar.',
      ru: 'Комфортные условия для самостоятельного чтения и подготовки к занятиям.',
      en: 'Serene study environment for independent reading and research.',
    },
    placeholderAspect: 'aspect-[16/10]',
    bgGradient: 'from-indigo-950 to-blue-900',
  },
];
