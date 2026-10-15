export interface ParentsResource {
  id: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  details: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  iconName: 'document' | 'clock' | 'calendar' | 'users' | 'shield';
}

export const bellSchedule = [
  { period: '1-dars', time: '08:00 – 08:45', recess: '5 daqiqa' },
  { period: '2-dars', time: '08:50 – 09:35', recess: '10 daqiqa (Katta tanaffus)' },
  { period: '3-dars', time: '09:45 – 10:30', recess: '5 daqiqa' },
  { period: '4-dars', time: '10:35 – 11:20', recess: '10 daqiqa (Katta tanaffus)' },
  { period: '5-dars', time: '11:30 – 12:15', recess: '5 daqiqa' },
  { period: '6-dars', time: '12:20 – 13:05', recess: 'Darslar yakuni' },
];

export const academicQuarters = [
  { quarter: 'I chorak', dates: '2-sentabr — 3-noyabr', vacation: '4-noyabr — 10-noyabr (7 kun)' },
  { quarter: 'II chorak', dates: '11-noyabr — 27-dekabr', vacation: '28-dekabr — 10-yanvar (14 kun)' },
  { quarter: 'III chorak', dates: '11-yanvar — 20-mart', vacation: '21-mart — 27-mart (7 kun)' },
  { quarter: 'IV chorak', dates: '28-mart — 25-may', vacation: 'Yozgi ta’til (26-may — 1-sentabr)' },
];

export const parentsResources: ParentsResource[] = [
  {
    id: 'admission-rules',
    title: {
      uz: '1-sinfga qabul qilish tartibi va qoidalari',
      ru: 'Порядок и правила приема в 1-й класс',
      en: 'Grade 1 Admission Procedures and Guidelines',
    },
    description: {
      uz: 'Bolalarni maktabning 1-sinfiga qabul qilish qonunchilikda belgilangan yosh me’yori va mikrohudud asosida amalga oshiriladi.',
      ru: 'Зачисление детей в 1 класс осуществляется на основе установленных возрастных норм и прикрепленного микроучастка.',
      en: 'Student enrollment into the first grade adheres to statutory age criteria and designated catchment areas.',
    },
    details: {
      uz: [
        'Ota-ona yoki ularning o‘rnini bosuvchi shaxslarning arizasi',
        'Bolaning tug‘ilganlik haqidagi guvohnomasi nusxasi',
        'Bolaning sog‘lig‘i to‘g‘risida 026/u va 063/u shaklidagi tibbiy ma’lumotnomalar',
        'Bolaning 3x4 hajmdagi 4 dona rangli fotosurati',
        'Ota-onaning shaxsini tasdiqlovchi pasport nusxasi',
      ],
      ru: [
        'Заявление родителей или законных представителей',
        'Копия свидетельства о рождении ребенка',
        'Медицинские справки о здоровье по формам 026/у и 063/у',
        '4 цветные фотографии ребенка размером 3х4 см',
        'Копия паспорта родителей, удостоверяющего личность',
      ],
      en: [
        'Parental or legal guardian application form',
        'Copy of the child\'s official birth certificate',
        'Medical health assessment records (Forms 026/u & 063/u)',
        'Four recent 3x4 cm passport-style color photographs',
        'Identification document copy of the parent/guardian',
      ],
    },
    iconName: 'document',
  },
  {
    id: 'uniform-guidelines',
    title: {
      uz: 'Maktab formasi va intizomiy talablar',
      ru: 'Школьная форма и дисциплинарные требования',
      en: 'School Uniform Guidelines & Code of Conduct',
    },
    description: {
      uz: 'Maktabda barcha o‘quvchilar uchun tasdiqlangan klassik ko‘rinishdagi yagona maktab formasi joriy etilgan.',
      ru: 'В школе введена утвержденная классическая единая форма для всех учащихся.',
      en: 'Approved classic student uniform dress code is observed across all grade divisions.',
    },
    details: {
      uz: [
        'O‘g‘il bolalar uchun: To‘q ko‘k kostyum-shim, oq ko‘ylak va toza poyabzal',
        'Qiz bolalar uchun: To‘q ko‘k nimcha/kostyum, tizzadan past klassik yubka/shim va oq bluzka',
        'Sport darslarida maxsus qulay sport kiyimlari talab etiladi',
        'Dars vaqtida mobil telefonlardan o‘quv maqsadlaridan tashqari foydalanish cheklanadi',
      ],
      ru: [
        'Для юношей: темно-синий костюм, белая рубашка, аккуратная обувь',
        'Для девушек: темно-синий жакет/юбка ниже колен или брюки, белая блузка',
        'На уроках физкультуры обязательна специальная спортивная форма',
        'Во время уроков использование смартфонов вне учебных целей ограничено',
      ],
      en: [
        'Boys: Dark navy suit trousers and jacket, crisp white shirt, formal footwear',
        'Girls: Dark navy vest/blazer, modest skirt below the knee or trousers, white blouse',
        'Physical education lessons require athletic sportswear and non-marking gym shoes',
        'Use of personal smartphones during instruction is strictly limited to sanctioned activities',
      ],
    },
    iconName: 'shield',
  },
  {
    id: 'parent-meetings',
    title: {
      uz: 'Ota-onalar majlislari va hamkorlik',
      ru: 'Родительские собрания и сотрудничество',
      en: 'Parent-Teacher Conferences & Engagement',
    },
    description: {
      uz: 'Har chorak yakunida va rejali asosda sinf rahbarlari hamda fan o‘qituvchilari ishtirokida uchrashuvlar tashkil etiladi.',
      ru: 'В конце каждой четверти и по графику проводятся встречи с классными руководителями и учителями.',
      en: 'Quarterly academic conferences and scheduled consultations are held with faculty and class mentors.',
    },
    details: {
      uz: [
        'Har chorak yakunida akademik o‘zlashtirish tahlili',
        'O‘quvchilarning xulq-atvori va qiziqishlarini birgalikda muhokama qilish',
        'Direktor va ma’muriyatning qabul kunlarida bevosita suhbat imkoniyati',
      ],
      ru: [
        'Анализ успеваемости по итогам каждой учебной четверти',
        'Совместное обсуждение поведения и способностей ребенка',
        'Возможность личной беседы с администрацией в приемные дни',
      ],
      en: [
        'Comprehensive review of academic performance at the conclusion of each term',
        'Collaborative guidance on personal conduct, study habits, and talent enrichment',
        'Direct consultation opportunities with school leadership during open reception hours',
      ],
    },
    iconName: 'users',
  },
];
