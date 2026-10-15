export interface Teacher {
  id: string;
  name: string;
  subject: {
    uz: string;
    ru: string;
    en: string;
  };
  department: 'exact' | 'natural' | 'languages' | 'humanities' | 'primary' | 'special';
  qualificationCategory: {
    uz: string;
    ru: string;
    en: string;
  };
  experienceYears?: number;
  education: {
    uz: string;
    ru: string;
    en: string;
  };
  achievements?: {
    uz: string;
    ru: string;
    en: string;
  };
  isConfirmed: boolean;
  avatarColor: string;
  initials: string;
  specialNote?: {
    uz: string;
    ru: string;
    en: string;
  };
}

export const departmentNames = {
  all: {
    uz: 'Barcha fanlar',
    ru: 'Все предметы',
    en: 'All Subjects',
  },
  exact: {
    uz: 'Aniq fanlar (Matematika, Informatika)',
    ru: 'Точные науки (Математика, Информатика)',
    en: 'Exact Sciences (Math, Computer Science)',
  },
  natural: {
    uz: 'Tabiiy fanlar (Fizika, Kimyo, Biologiya)',
    ru: 'Естественные науки (Физика, Химия, Биология)',
    en: 'Natural Sciences (Physics, Chemistry, Biology)',
  },
  languages: {
    uz: 'Xorijiy tillar (Ingliz tili, Rus tili)',
    ru: 'Иностранные языки (Английский, Русский)',
    en: 'Foreign Languages (English, Russian)',
  },
  humanities: {
    uz: 'Gumanitar fanlar (Ona tili, Tarix)',
    ru: 'Гуманитарные науки (Родной язык, История)',
    en: 'Humanities (Native Language, History)',
  },
  primary: {
    uz: 'Boshlang‘ich ta’lim',
    ru: 'Начальное образование',
    en: 'Primary Education',
  },
};

export const teachersData: Teacher[] = [
  {
    id: 't-1',
    name: 'Aniq fanlar kafedrasi o‘qituvchisi (Matematika)',
    subject: {
      uz: 'Matematika va Geometriya',
      ru: 'Математика и геометрия',
      en: 'Mathematics & Geometry',
    },
    department: 'exact',
    qualificationCategory: {
      uz: 'Malakali pedagog (Oliy ma’lumotli mutaxassis)',
      ru: 'Квалифицированный педагог (Высшее образование)',
      en: 'Qualified Educator (Higher Education Specialist)',
    },
    experienceYears: 14,
    education: {
      uz: 'Namangan davlat universiteti, Matematika fakulteti',
      ru: 'Наманганский государственный университет, факультет математики',
      en: 'Namangan State University, Faculty of Mathematics',
    },
    achievements: {
      uz: 'Shahar va viloyat fan olimpiadalari g‘oliblarini tayyorlagan',
      ru: 'Подготовил победителей городских и областных предметных олимпиад',
      en: 'Mentored city and regional subject olympiad winners',
    },
    isConfirmed: false,
    avatarColor: 'bg-primary text-white',
    initials: 'M.O‘.',
  },
  {
    id: 't-2',
    name: 'Ingliz tili kafedrasi xorijiy mutaxassisi',
    subject: {
      uz: 'Ingliz tili (Muloqot va so‘zlashuv amaliyoti)',
      ru: 'Английский язык (Разговорная практика)',
      en: 'English Language (Conversational Practice & Speaking)',
    },
    department: 'languages',
    qualificationCategory: {
      uz: 'Taklif etilgan xorijiy mutaxassis',
      ru: 'Приглашенный иностранный специалист',
      en: 'Invited International Educator',
    },
    experienceYears: 6,
    education: {
      uz: 'Xalqaro pedagogik sertifikatlar (TEFL/TESOL)',
      ru: 'Международные педагогические сертификаты (TEFL/TESOL)',
      en: 'International Pedagogical Credentials (TEFL/TESOL)',
    },
    achievements: {
      uz: 'O‘quvchilarda erkin muloqot va chet tilida fikrlash ko‘nikmalarini shakllantirish',
      ru: 'Формирование навыков свободного общения и мышления на иностранном языке',
      en: 'Developing fluent conversational communication and spontaneous language usage',
    },
    isConfirmed: false,
    avatarColor: 'bg-secondary text-white',
    initials: 'E.T.',
    specialNote: {
      uz: 'Maktabimizda o‘quvchilarning ingliz tilida erkin so‘zlashuv malakasini oshirishga yo‘naltirilgan interaktiv mashg‘ulotlar olib boriladi.',
      ru: 'В школе проводятся интерактивные занятия, направленные на свободное общение учащихся на английском языке.',
      en: 'Interactive sessions focused on fostering fluent communicative proficiency in conversational English.',
    },
  },
  {
    id: 't-3',
    name: 'Tabiiy fanlar kafedrasi o‘qituvchisi (Biologiya)',
    subject: {
      uz: 'Biologiya va Inson salomatligi',
      ru: 'Биология и здоровье человека',
      en: 'Biology & Human Health',
    },
    department: 'natural',
    qualificationCategory: {
      uz: 'Malakali pedagog (Tibbiyot to‘garagi rahbari)',
      ru: 'Квалифицированный педагог (Руководитель медкружка)',
      en: 'Qualified Educator (Head of Medical Club)',
    },
    experienceYears: 11,
    education: {
      uz: 'Toshkent davlat pedagogika universiteti',
      ru: 'Ташкентский государственный педагогический университет',
      en: 'Tashkent State Pedagogical University',
    },
    achievements: {
      uz: 'O‘quvchilarni tibbiyot oliygohlariga maqsadli yo‘naltirish dasturi rahbari',
      ru: 'Руководитель программы профориентации в медицинские вузы',
      en: 'Leads preparatory orientation curriculum for future medical university applicants',
    },
    isConfirmed: false,
    avatarColor: 'bg-emerald-800 text-white',
    initials: 'B.O‘.',
  },
  {
    id: 't-4',
    name: 'Informatika va AKT o‘qituvchisi',
    subject: {
      uz: 'Informatika va Raqamli texnologiyalar',
      ru: 'Информатика и цифровые технологии',
      en: 'Computer Science & Digital Technologies',
    },
    department: 'exact',
    qualificationCategory: {
      uz: 'Zamonaviy AKT mutaxassisi',
      ru: 'Специалист по современным ИКТ',
      en: 'Modern ICT Specialist',
    },
    experienceYears: 8,
    education: {
      uz: 'Muhammad al-Xorazmiy nomidagi TATU Farg‘ona filiali',
      ru: 'Ферганский филиал ТУИТ имени Мухаммада ал-Хоразмий',
      en: 'TUIT Fergana Branch',
    },
    achievements: {
      uz: 'Robototexnika va dasturlash bo‘yicha shahar musobaqasi sovrindorlari ustozi',
      ru: 'Наставник призеров городских соревнований по робототехнике и кодингу',
      en: 'Coach of city-level robotics and youth coding competition finalists',
    },
    isConfirmed: false,
    avatarColor: 'bg-blue-900 text-white',
    initials: 'I.O‘.',
  },
  {
    id: 't-5',
    name: 'Ona tili va adabiyot fani o‘qituvchisi',
    subject: {
      uz: 'O‘zbek tili va Adabiyoti',
      ru: 'Узбекский язык и литература',
      en: 'Uzbek Language & Literature',
    },
    department: 'humanities',
    qualificationCategory: {
      uz: 'Oliy ma’lumotli pedagog',
      ru: 'Педагог с высшим образованием',
      en: 'Pedagogue with Higher Degree',
    },
    experienceYears: 16,
    education: {
      uz: 'Namangan davlat universiteti, Filologiya fakulteti',
      ru: 'НамГУ, Филологический факультет',
      en: 'Namangan State University, Philology',
    },
    achievements: {
      uz: 'Ijodiy insholar va badiiy asarlar tanlovlari g‘oliblari ustozi',
      ru: 'Наставник призеров литературных конкурсов и сочинений',
      en: 'Mentor of literary essay and regional creative writing winners',
    },
    isConfirmed: false,
    avatarColor: 'bg-amber-800 text-white',
    initials: 'O.A.',
  },
  {
    id: 't-6',
    name: 'Boshlang‘ich sinf yetakchi o‘qituvchisi',
    subject: {
      uz: 'Boshlang‘ich ta’lim metodikasi',
      ru: 'Методика начального образования',
      en: 'Primary Education Methodology',
    },
    department: 'primary',
    qualificationCategory: {
      uz: 'Tajribali metodist pedagog',
      ru: 'Опытный педагог-методист',
      en: 'Experienced Primary Methodologist',
    },
    experienceYears: 19,
    education: {
      uz: 'Pedagogika kolleji va NamGU Boshlang‘ich ta’lim fakulteti',
      ru: 'НамГУ, Факультет начального образования',
      en: 'NamSU, Faculty of Primary Education',
    },
    achievements: {
      uz: '1-sinf o‘quvchilarini maktab muhitiga tez moslashtirish metodikasi muallifi',
      ru: 'Разработчик методик адаптации первоклассников к школьной среде',
      en: 'Specialist in early literacy and adaptive primary classroom transition',
    },
    isConfirmed: false,
    avatarColor: 'bg-teal-800 text-white',
    initials: 'B.T.',
  },
];
