export interface EducationalProgram {
  id: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  subtitle: {
    uz: string;
    ru: string;
    en: string;
  };
  category: 'languages' | 'medical' | 'stem' | 'humanities' | 'sports';
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  features: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  schedule: {
    uz: string;
    ru: string;
    en: string;
  };
  gradeLevels: string;
  badge: {
    uz: string;
    ru: string;
    en: string;
  };
}

export const educationPrograms: EducationalProgram[] = [
  {
    id: 'english-excellence',
    title: {
      uz: 'Ingliz tili chuqurlashtirilgan muloqot dasturi',
      ru: 'Углубленная программа разговорного английского языка',
      en: 'Intensive English Communication & Speaking Program',
    },
    subtitle: {
      uz: 'Zamonaviy interaktiv metodika va chet tillarida erkin so‘zlashuv amaliyoti',
      ru: 'Современная интерактивная методика и практика свободного общения',
      en: 'Contemporary communicative pedagogy and active speaking fluency practice',
    },
    category: 'languages',
    description: {
      uz: 'Maktabimizda o‘quvchilarning chet tillarini chuqur egallashlari uchun maxsus interaktiv til mashg‘ulotlari tashkil etilgan. Unda grammatika quruq yodlashdan ko‘ra muloqot, lug‘at boyligi, eshitib tushunish va xorijiy mutaxassislar ishtirokidagi suhbat darslariga ustuvorlik beriladi.',
      ru: 'В школе организованы специальные интерактивные языковые курсы. Основное внимание уделяется живому общению, расширению словарного запаса, восприятию речи на слух и урокам с участием зарубежных преподавателей.',
      en: 'Specialized interactive language sessions designed to instill authentic oral fluency, listening comprehension, rich vocabulary acquisition, and immersive communicative practice.',
    },
    features: {
      uz: [
        'Speaking Club (So‘zlashuv klubi) haftalik amaliy mashg‘ulotlari',
        'Chet ellik taklif etilgan mutaxassislar bilan jonli darslar',
        'IELTS va Milliy sertifikat sinovlariga maqsadli tayyorgarlik',
        'Multimediali lingafon xonalarida audio-vizual ta’lim',
      ],
      ru: [
        'Еженедельные занятия в разговорном клубе (Speaking Club)',
        'Живые уроки с участием приглашенных зарубежных преподавателей',
        'Целенаправленная подготовка к тестам IELTS и нац. сертификатам',
        'Аудиовизуальное обучение в мультимедийных классах',
      ],
      en: [
        'Weekly interactive Speaking Club conversational workshops',
        'Engaging sessions conducted with invited international educators',
        'Targeted preparation for IELTS and National Language certification',
        'Audio-visual learning in multimedia language laboratories',
      ],
    },
    schedule: {
      uz: 'Seshanba, Payshanba, Shanba (14:00 – 16:00)',
      ru: 'Вторник, Четверг, Суббота (14:00 – 16:00)',
      en: 'Tuesday, Thursday, Saturday (14:00 – 16:00)',
    },
    gradeLevels: '5 – 11 sinflar',
    badge: {
      uz: 'Yetakchi yo‘nalish',
      ru: 'Ключевое направление',
      en: 'Flagship Program',
    },
  },
  {
    id: 'medical-career',
    title: {
      uz: '«Qiziqishdan kasb sari» — Tibbiyot va salomatlik to‘garagi',
      ru: '«От увлечения к профессии» — Медицинский клуб и основы здоровья',
      en: '"From Interest to Profession" — Medical & Healthcare Club',
    },
    subtitle: {
      uz: 'Bo‘lajak shifokorlar, hamshiralar va biologiya fani ixlosmandlari uchun erta kasbga yo‘naltirish',
      ru: 'Ранняя профориентация для будущих медиков и любителей биологии',
      en: 'Early healthcare vocational guidance for future physicians and biological sciences enthusiasts',
    },
    category: 'medical',
    description: {
      uz: 'Tibbiyot kasbini tanlamoqchi bo‘lgan o‘quvchilar uchun biologiya, odam anatomiyasi, gigiyena, birinchi tibbiy yordam ko‘rsatish amaliyoti hamda shifokorlar bilan uchrashuvlarni o‘z ichiga olgan maxsus to‘garak faoliyati.',
      ru: 'Специальный кружок для учащихся, планирующих связать будущее с медициной: основы биологии, анатомия человека, гигиена, первая помощь и встречи с медицинскими специалистами.',
      en: 'Dedicated club for aspiring medical students covering biological foundations, human anatomy, emergency first-aid skills, and clinical career exploration.',
    },
    features: {
      uz: [
        'Favqulodda vaziyatlarda birinchi tez tibbiy yordam ko‘rsatish amaliyoti',
        'Odam anatomiyasi va fiziologiyasini maketlar yordamida o‘rganish',
        'Biologiya va kimyo fanlaridan chuqurlashtirilgan laboratoriya mashg‘ulotlari',
        'Sog‘lom turmush tarzi va gigiyena qoidalarini targ‘ib qilish',
      ],
      ru: [
        'Практика оказания первой медицинской помощи в экстренных ситуациях',
        'Изучение анатомии и физиологии человека на наглядных макетах',
        'Углубленные лабораторные работы по биологии и химии',
        'Популяризация здорового образа жизни и санитарных норм',
      ],
      en: [
        'Hands-on emergency first-aid and CPR practical drills',
        'Human anatomy and physiological studies utilizing anatomical models',
        'Advanced scientific lab investigations in chemistry and biology',
        'Promotion of wellness, preventative hygiene, and community health',
      ],
    },
    schedule: {
      uz: 'Chorshanba, Juma (14:30 – 16:30)',
      ru: 'Среда, Пятница (14:30 – 16:30)',
      en: 'Wednesday, Friday (14:30 – 16:30)',
    },
    gradeLevels: '7 – 11 sinflar',
    badge: {
      uz: 'Kasbga yo‘naltirilgan',
      ru: 'Профориентационный',
      en: 'Career-Oriented',
    },
  },
  {
    id: 'it-robotics',
    title: {
      uz: 'IT va Raqamli texnologiyalar to‘garagi',
      ru: 'Кружок IT и цифровых технологий',
      en: 'IT & Digital Technologies Club',
    },
    subtitle: {
      uz: 'Kompyuter savodxonligi, dasturlash asoslari va veb-texnologiyalar',
      ru: 'Компьютерная грамотность, основы кодинга и веб-технологии',
      en: 'Computer literacy, coding fundamentals, and web technologies',
    },
    category: 'stem',
    description: {
      uz: 'Zamonaviy kompyuter sinfida o‘quvchilar axborot texnologiyalari, algoritmik fikrlash va dasturlash bo‘yicha boshlang‘ich amaliy ko‘nikmalarga ega bo‘ladilar.',
      ru: 'В современном компьютерном классе учащиеся осваивают азы алгоритмического мышления, программирования и веб-разработки.',
      en: 'Students develop algorithmic thinking, software logic, and digital skills in the modern computer lab.',
    },
    features: {
      uz: [
        'Algoritmlar va Python dasturlash tili asoslari',
        'Ofis dasturlari va taqdimotlar tayyorlash mahorati',
        'Kiberxavfsizlik va internetda xavfsiz yurish qoidalari',
      ],
      ru: [
        'Основы алгоритмов и язык программирования Python',
        'Работа с офисными программами и презентациями',
        'Кибербезопасность и правила безопасного интернета',
      ],
      en: [
        'Algorithms and core Python programming foundations',
        'Productivity software proficiency and presentation design',
        'Cybersecurity principles and digital citizenship',
      ],
    },
    schedule: {
      uz: 'Dushanba, Chorshanba (15:00 – 16:30)',
      ru: 'Понедельник, Среда (15:00 – 16:30)',
      en: 'Monday, Wednesday (15:00 – 16:30)',
    },
    gradeLevels: '5 – 9 sinflar',
    badge: {
      uz: 'Raqamli ta’lim',
      ru: 'Цифровое образование',
      en: 'Digital Education',
    },
  },
  {
    id: 'math-olympiad',
    title: {
      uz: 'Yosh matematiklar to‘garagi',
      ru: 'Кружок юных математиков',
      en: 'Young Mathematicians Olympiad Guild',
    },
    subtitle: {
      uz: 'Mantiqiy fikrlash, nostandart masalalar va olimpiada savollari tahlili',
      ru: 'Логическое мышление, нестандартные задачи и разбор олимпиад',
      en: 'Logical deduction, non-standard problem solving, and olympiad mastery',
    },
    category: 'stem',
    description: {
      uz: 'O‘quvchilarning mantiqiy va fazoviy tafakkurini rivojlantirishga qaratilgan olimpiada to‘garagi.',
      ru: 'Кружок углубленной математики, развивающий логическое и пространственное мышление.',
      en: 'Advanced mathematical club nurturing rigorous logical analysis and competition readiness.',
    },
    features: {
      uz: [
        'Murakkab va mantiqiy masalalarni yechish uslublari',
        'Fan olimpiadalari topshiriqlari tahlili',
        'Matematik musobaqalar va viktorinalar',
      ],
      ru: [
        'Методики решения нестандартных и логических задач',
        'Разбор заданий предметных олимпиад прошлых лет',
        'Математические викторины и турниры',
      ],
      en: [
        'Techniques for solving advanced analytical challenges',
        'Deconstruction of past municipal and national olympiad problems',
        'Inter-school math tourneys and quick-calculation contests',
      ],
    },
    schedule: {
      uz: 'Seshanba, Juma (15:00 – 16:30)',
      ru: 'Вторник, Пятница (15:00 – 16:30)',
      en: 'Tuesday, Friday (15:00 – 16:30)',
    },
    gradeLevels: '6 – 10 sinflar',
    badge: {
      uz: 'Akademik',
      ru: 'Академический',
      en: 'Academic',
    },
  },
  {
    id: 'chess-sports',
    title: {
      uz: 'Shaxmat va jismoniy tarbiya to‘garagi',
      ru: 'Кружок шахмат и спортивные секции',
      en: 'Chess Club & Athletics',
    },
    subtitle: {
      uz: 'Strategik intellekt va jismoniy chiniqish uyg‘unligi',
      ru: 'Гармония интеллектуальной стратегии и физической выносливости',
      en: 'Union of strategic foresight and physical vitality',
    },
    category: 'sports',
    description: {
      uz: 'O‘quvchilarning jismoniy sog‘lomligi va strategik aql-zakovatini chiniqtiruvchi sport va shaxmat mashg‘ulotlari.',
      ru: 'Спортивные занятия и шахматные турниры, закаляющие здоровье и стратегический интеллект учащихся.',
      en: 'Sports clubs and chess instruction building physical agility and tactical discernment.',
    },
    features: {
      uz: [
        'Shaxmat bo‘yicha nazariy va amaliy partiyalar tahlili',
        'Voleybol, basketbol va mini-futbol seksiyalari',
        'Maktab ichki sport musobaqalari',
      ],
      ru: [
        'Теория шахмат и разбор гроссмейстерских партий',
        'Секции волейбола, баскетбола и мини-футбола',
        'Внутришкольные спартакиады и турниры',
      ],
      en: [
        'Tactical chess theory and classical endgame analysis',
        'Volleyball, basketball, and futsal team sessions',
        'Inter-class sports meets and school tournaments',
      ],
    },
    schedule: {
      uz: 'Har kuni (Darsdan so‘ng)',
      ru: 'Ежедневно (После уроков)',
      en: 'Daily (After classes)',
    },
    gradeLevels: 'Barcha sinflar',
    badge: {
      uz: 'Sog‘lom hayot',
      ru: 'Здоровый образ жизни',
      en: 'Healthy Lifestyle',
    },
  },
];
