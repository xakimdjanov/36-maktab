export interface NewsArticle {
  id: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  summary: {
    uz: string;
    ru: string;
    en: string;
  };
  content: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  date: string;
  category: 'events' | 'academic' | 'announcements' | 'competitions' | 'parents';
  isOfficialAnnouncement: boolean;
  author: {
    uz: string;
    ru: string;
    en: string;
  };
  readingTimeMinutes: number;
}

export const newsCategories = {
  all: {
    uz: 'Barcha yangiliklar',
    ru: 'Все новости',
    en: 'All News',
  },
  events: {
    uz: 'Maktab tadbirlari',
    ru: 'Школьные мероприятия',
    en: 'School Events',
  },
  academic: {
    uz: 'Ta’lim va yutuqlar',
    ru: 'Образование и успехи',
    en: 'Academic Excellence',
  },
  announcements: {
    uz: 'Muhim e’lonlar',
    ru: 'Важные объявления',
    en: 'Announcements',
  },
  competitions: {
    uz: 'Tanlovlar va olimpiadalar',
    ru: 'Конкурсы и олимпиады',
    en: 'Competitions & Olympiads',
  },
  parents: {
    uz: 'Ota-onalar xabarnomasi',
    ru: 'Информация родителям',
    en: 'Parent Bulletins',
  },
};

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-1',
    title: {
      uz: 'Maktabimizda «Kelajak sari bilim bilan» shiori ostida ochiq darslar haftaligi o‘tkazildi',
      ru: 'В нашей школе прошла неделя открытых уроков под девизом «К знанию — ради будущего»',
      en: 'Open Classroom Week Held Under the Motto "Towards the Future with Knowledge"',
    },
    summary: {
      uz: 'Aniq va tabiiy fanlar oyligi doirasida pedagoglarimiz zamonaviy pedagogik texnologiyalar va interaktiv metodlarni namoyish etdilar.',
      ru: 'В рамках месяца точных и естественных наук педагоги продемонстрировали современные интерактивные методики обучения.',
      en: 'As part of the exact and natural sciences month, faculty presented innovative instructional methodologies.',
    },
    content: {
      uz: [
        'Namangan shahar 36-sonli umumta’lim maktabida pedagogik mahoratni oshirish va o‘quvchilarning fanlarga bo‘lgan qiziqishini yanada kuchaytirish maqsadida ochiq darslar haftaligi tashkil etildi.',
        'Haftalik davomida matematika, fizika, ingliz tili va biologiya fanlari bo‘yicha tajribali o‘qituvchilar ilg‘or AKT vositalari hamda guruhli ishlash usullaridan foydalangan holda dars mashg‘ulotlarini olib bordilar.',
        'Ochiq darslarga maktab rahbariyati, metodik birlashma yetakchilari va ota-onalar vakillari tashrif buyurib, o‘quvchilarning faolligini yuqori baholadilar.',
      ],
      ru: [
        'В общеобразовательной школе №36 города Намангана прошла неделя открытых уроков, направленная на совершенствование педагогического мастерства.',
        'На протяжении недели преподаватели математики, физики, английского языка и биологии проводили интерактивные уроки с применением цифровых инструментов.',
        'Открытые уроки посетили руководство школы, методисты и представители родительского комитета, отметившие высокую вовлеченность учащихся.',
      ],
      en: [
        'An Open Classroom Week was conducted at Namangan City Secondary School No. 36 aimed at elevating pedagogical excellence and fostering student enthusiasm.',
        'Throughout the week, instructors in mathematics, physics, English, and biology hosted interactive lesson sessions utilizing digital media and collaborative inquiry.',
        'School administrators, methodologists, and parent representatives attended the presentations, praising the students\' dynamic engagement.',
      ],
    },
    date: '2026-10-10',
    category: 'academic',
    isOfficialAnnouncement: false,
    author: {
      uz: 'Maktab axborot xizmati',
      ru: 'Пресс-служба школы',
      en: 'School Information Bureau',
    },
    readingTimeMinutes: 3,
  },
  {
    id: 'news-2',
    title: {
      uz: '1-sinfga qabul jarayoni va kerakli hujjatlar to‘g‘risida ota-onalar uchun muhim eslatma',
      ru: 'Важное уведомление для родителей о приеме в 1 класс и перечне необходимых документов',
      en: 'Essential Notice for Parents Regarding 1st Grade Admissions and Required Documentation',
    },
    summary: {
      uz: 'Yangi o‘quv yili uchun maktabga qabul jarayoni qonunchilikda belgilangan tartibda davlat xizmatlari portali orqali amalga oshiriladi.',
      ru: 'Прием в первый класс на новый учебный год осуществляется в соответствии с законодательством через портал госуслуг.',
      en: 'First grade enrollment for the upcoming school year is processed via the official state public services system.',
    },
    content: {
      uz: [
        'Hurmatli ota-onalar! Farzandini 36-sonli umumta’lim maktabining 1-sinfiga berishni rejalashtirgan fuqarolar uchun qabul jarayoni mikrohudud bo‘yicha amalga oshiriladi.',
        'Kerakli hujjatlar ro‘yxati: Ota-onaning arizasi, bolaning tug‘ilganlik haqidagi guvohnomasi nusxasi, 026/u va 063/u shaklidagi tibbiy ma’lumotnomalar hamda 3x4 hajmdagi fotosuratlar.',
        'Savollar bo‘yicha maktab ma’muriyati qabulxonasiga yoki +998 69 224-44-06 raqamiga murojaat qilishingiz mumkin.',
      ],
      ru: [
        'Уважаемые родители! Для зачисления детей в 1 класс школы №36 прием осуществляется согласно закрепленному микроучастку.',
        'Перечень документов: заявление родителей, копия свидетельства о рождении ребенка, медицинские справки 026/у и 063/у, фотографии 3х4.',
        'По вопросам приема можно обратиться в канцелярию школы или по телефону +998 69 224-44-06.',
      ],
      en: [
        'Dear Parents! Enrollment for incoming first graders at School No. 36 is administered per designated residency microdistricts.',
        'Required documentation includes: parental application form, copy of the child\'s birth certificate, health forms 026/u and 063/u, and 3x4 cm passport-style photographs.',
        'For inquiries, kindly contact the school administrative office or call +998 69 224-44-06.',
      ],
    },
    date: '2026-10-05',
    category: 'announcements',
    isOfficialAnnouncement: true,
    author: {
      uz: 'Maktab ma’muriyati',
      ru: 'Администрация школы',
      en: 'School Administration',
    },
    readingTimeMinutes: 2,
  },
  {
    id: 'news-3',
    title: {
      uz: '«Qiziqishdan kasb sari» tibbiy to‘garak a’zolari uchun birinchi yordam amaliy mashg‘uloti',
      ru: 'Практическое занятие по первой помощи для участников медицинского кружка «От увлечения к профессии»',
      en: 'Hands-on First Aid Workshop Conducted for "From Interest to Profession" Healthcare Club',
    },
    summary: {
      uz: 'O‘quvchilar tibbiy qo‘llanmalar va modellar yordamida yurak-o‘pka reanimatsiyasi hamda jarohatlarda birinchi yordam ko‘rsatishni o‘rgandilar.',
      ru: 'Учащиеся на практике отработали правила первой помощи при травмах и алгоритм сердечно-легочной реанимации.',
      en: 'Students practiced essential trauma response techniques and emergency CPR algorithms utilizing medical simulators.',
    },
    content: {
      uz: [
        'Maktabimizda faoliyat yuritayotgan biologiya va tibbiyot to‘garagi a’zolari ishtirokida navbatdagi amaliy seminar tashkil etildi.',
        'Mashg‘ulotda o‘quvchilarga kundalik hayotda va favqulodda vaziyatlarda to‘g‘ri harakat qilish, qon ketishini to‘xtatish, suyak sinishlarida shina qo‘yish qoidalari amalda ko‘rsatib berildi.',
        'Bunday amaliy to‘garaklar o‘quvchilarimizda bo‘lajak shifokorlik kasbiga chuqur mehr va mas’uliyat hissini uyg‘otmoqda.',
      ],
      ru: [
        'В рамках действующего в школе биологического кружка состоялся практический семинар по основам неотложной помощи.',
        'Ребята ознакомились с правилами остановки кровотечений, наложения иммобилизационных шин и действиями в экстренных ситуациях.',
        'Такие кружки помогают сформировать осознанный интерес к медицинской профессии и высокую гражданскую ответственность.',
      ],
      en: [
        'A practical workshop on foundational emergency medical skills was conducted for students enrolled in the school healthcare club.',
        'Participants received training in hemorrhage control, splint application for fractures, and systematic accident response.',
        'These immersive activities build early vocational readiness and ethical commitment to the medical sciences.',
      ],
    },
    date: '2026-09-28',
    category: 'events',
    isOfficialAnnouncement: false,
    author: {
      uz: 'Tabiiy fanlar uslubiy birlashmasi',
      ru: 'Методическое объединение естественных наук',
      en: 'Natural Sciences Academic Board',
    },
    readingTimeMinutes: 3,
  },
  {
    id: 'news-4',
    title: {
      uz: 'Ingliz tili so‘zlashuv klubi (Speaking Club) navbatdagi interaktiv darsini yakunladi',
      ru: 'Разговорный клуб английского языка провел очередной интерактивный урок общения',
      en: 'English Speaking Club Concludes Another Engaging Interactive Communication Session',
    },
    summary: {
      uz: 'O‘quvchilar xalqaro mavzularda erkin muloqot qilib, yangi lug‘at va jonli iboralarni mustahkamladilar.',
      ru: 'Учащиеся практиковали навыки свободной речи на актуальные темы и расширили словарный запас.',
      en: 'Students engaged in spontaneous discourse on topical issues, expanding colloquial vocabulary and communicative ease.',
    },
    content: {
      uz: [
        'Maktabimizning xorijiy tillarni chuqur o‘rganish yo‘nalishida haftalik ingliz tili muloqot darsi bo‘lib o‘tdi.',
        'O‘quvchilar kichik guruhlarga bo‘lingan holda ekologiya, zamonaviy texnologiyalar va jahon madaniyati mavzularida taqdimotlar qildilar.',
        'Mashg‘ulot davomida o‘quvchilarning nutqidagi qoliplardan chiqish, tez va erkin javob qaytarish ko‘nikmalari mustahkamlandi.',
      ],
      ru: [
        'В рамках углубленного языкового образования состоялся еженедельный разговорный урок английского языка.',
        'Разделившись на группы, учащиеся готовили презентации и вели дискуссии на темы науки, экологии и культуры.',
        'Занятие помогло ребятам преодолеть языковой барьер и развить спонтанную устную речь.',
      ],
      en: [
        'The weekly conversational English session brought together enthusiastic learners for interactive dialogue.',
        'Collaborating in small cohorts, pupils presented brief thematic talks on technology, environment, and world cultures.',
        'The workshop reinforced active conversational responsiveness and reduced hesitation in second-language speech.',
      ],
    },
    date: '2026-09-20',
    category: 'academic',
    isOfficialAnnouncement: false,
    author: {
      uz: 'Xorijiy tillar kafedrasi',
      ru: 'Кафедра иностранных языков',
      en: 'Foreign Languages Department',
    },
    readingTimeMinutes: 2,
  },
];
