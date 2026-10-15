export interface Achievement {
  id: string;
  studentName: {
    uz: string;
    ru: string;
    en: string;
  };
  category: 'university' | 'olympiad' | 'certificate' | 'competition';
  year: number;
  institutionOrAward: {
    uz: string;
    ru: string;
    en: string;
  };
  fieldOrMajor: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  isConfirmed: boolean;
  scoreOrAward?: string;
  badgeType: 'gold' | 'silver' | 'blue' | 'green';
}

export const achievementCategories = {
  all: {
    uz: 'Barcha yutuqlar',
    ru: 'Все достижения',
    en: 'All Achievements',
  },
  university: {
    uz: 'OTMga qabul natijalari',
    ru: 'Поступления в вузы',
    en: 'University Admissions',
  },
  olympiad: {
    uz: 'Fan olimpiadalari',
    ru: 'Предметные олимпиады',
    en: 'Subject Olympiads',
  },
  certificate: {
    uz: 'Xalqaro sertifikatlar (IELTS / CEFR)',
    ru: 'Международные сертификаты',
    en: 'Certificates (IELTS / CEFR)',
  },
  competition: {
    uz: 'Ko‘rik-tanlovlar va sport',
    ru: 'Конкурсы и спорт',
    en: 'Competitions & Sports',
  },
};

export const achievementsData: Achievement[] = [
  {
    id: 'ach-1',
    studentName: {
      uz: 'Bitiruvchi o‘quvchi (Namuna profil)',
      ru: 'Выпускник школы (Образец профиля)',
      en: 'School Graduate (Sample Profile)',
    },
    category: 'university',
    year: 2025,
    institutionOrAward: {
      uz: 'Toshkent tibbiyot akademiyasi',
      ru: 'Ташкентская медицинская академия',
      en: 'Tashkent Medical Academy',
    },
    fieldOrMajor: {
      uz: 'Davolash ishi (Davlat granti)',
      ru: 'Лечебное дело (Государственный грант)',
      en: 'General Medicine (State Scholarship)',
    },
    description: {
      uz: 'Maktabimizning tibbiyot va tabiiy fanlar to‘garagi faoli, kirish imtihonlarida yuqori ball to‘plagan.',
      ru: 'Активист медицинского кружка школы, набрал высокий балл на вступительных экзаменах.',
      en: 'Participant of school medical prep club, attained top entrance examination score.',
    },
    isConfirmed: false,
    scoreOrAward: '189.5 ball',
    badgeType: 'gold',
  },
  {
    id: 'ach-2',
    studentName: {
      uz: '11-sinf o‘quvchisi (Namuna profil)',
      ru: 'Учащийся 11 класса (Образец)',
      en: 'Grade 11 Student (Sample)',
    },
    category: 'certificate',
    year: 2025,
    institutionOrAward: {
      uz: 'British Council & Cambridge Assessment',
      ru: 'British Council & Cambridge Assessment',
      en: 'British Council & Cambridge Assessment',
    },
    fieldOrMajor: {
      uz: 'IELTS Academic xalqaro sertifikati',
      ru: 'Международный сертификат IELTS Academic',
      en: 'IELTS Academic Certificate',
    },
    description: {
      uz: 'Maktabimizning chet tillari to‘garagida faol qatnashib, 11-sinfdayoq xalqaro sertifikatni qo‘lga kiritgan.',
      ru: 'Активный участник языкового кружка, получил высокий международный балл в 11 классе.',
      en: 'Active member of foreign languages club, achieved high band score in senior year.',
    },
    isConfirmed: false,
    scoreOrAward: 'Band 7.5',
    badgeType: 'blue',
  },
  {
    id: 'ach-3',
    studentName: {
      uz: '10-sinf o‘quvchisi (Namuna profil)',
      ru: 'Учащийся 10 класса (Образец)',
      en: 'Grade 10 Student (Sample)',
    },
    category: 'olympiad',
    year: 2024,
    institutionOrAward: {
      uz: 'Xalq ta’limi vazirligi / Fan olimpiadasi',
      ru: 'Министерство народного образования / Олимпиада',
      en: 'Ministry of Public Education / Subject Olympiad',
    },
    fieldOrMajor: {
      uz: 'Matematika fani bo‘yicha viloyat bosqichi',
      ru: 'Областной этап олимпиады по математике',
      en: 'Regional Mathematics Olympiad',
    },
    description: {
      uz: 'Shahar bosqichida 1-o‘rin, viloyat bosqichida faxrli 2-o‘rinni egallab, respublika bosqichi yo‘llanmasini olgan.',
      ru: '1-е место на городском этапе, призовое 2-е место на областном этапе олимпиады.',
      en: '1st place in municipal round, 2nd place in regional olympiad round.',
    },
    isConfirmed: false,
    scoreOrAward: '2-o‘rin (Faxriy yorliq)',
    badgeType: 'silver',
  },
  {
    id: 'ach-4',
    studentName: {
      uz: 'Bitiruvchi o‘quvchi (Namuna profil)',
      ru: 'Выпускник школы (Образец профиля)',
      en: 'School Graduate (Sample Profile)',
    },
    category: 'university',
    year: 2024,
    institutionOrAward: {
      uz: 'Namangan davlat universiteti',
      ru: 'Наманганский государственный университет',
      en: 'Namangan State University',
    },
    fieldOrMajor: {
      uz: 'Amaliy matematika va informatika',
      ru: 'Прикладная математика и информатика',
      en: 'Applied Mathematics & Informatics',
    },
    description: {
      uz: 'Maktab davrida IT to‘garagida muntazam shug‘ullanib, davlat granti asosida talabalikka qabul qilingan.',
      ru: 'Поступил на грантовой основе на факультет прикладной математики и информатики.',
      en: 'Admitted on full state grant following dedicated engagement in school IT club.',
    },
    isConfirmed: false,
    scoreOrAward: 'Davlat granti',
    badgeType: 'green',
  },
  {
    id: 'ach-5',
    studentName: {
      uz: '9-sinf o‘quvchisi (Namuna profil)',
      ru: 'Учащийся 9 класса (Образец)',
      en: 'Grade 9 Student (Sample)',
    },
    category: 'competition',
    year: 2024,
    institutionOrAward: {
      uz: 'Yosh kitobxon respublika ko‘rik-tanlovi',
      ru: 'Республиканский конкурс «Юный книголюб»',
      en: 'National "Young Book-Lover" Literary Contest',
    },
    fieldOrMajor: {
      uz: 'Badiiy kitobxonlik va adabiy tahlil',
      ru: 'Художественное чтение и литературный анализ',
      en: 'Literary Reading & Analysis',
    },
    description: {
      uz: 'Kitobxonlik ko‘rik-tanlovining shahar bosqichi mutlaq g‘olibi, 100 dan ortiq durdona asarlar bilimdoni.',
      ru: 'Победитель городского этапа конкурса юных книголюбов, знаток классической литературы.',
      en: 'Municipal winner of youth book contest, demonstrated mastery of classical literature.',
    },
    isConfirmed: false,
    scoreOrAward: '1-o‘rin',
    badgeType: 'gold',
  },
  {
    id: 'ach-6',
    studentName: {
      uz: '11-sinf o‘quvchisi (Namuna profil)',
      ru: 'Учащийся 11 класса (Образец)',
      en: 'Grade 11 Student (Sample)',
    },
    category: 'certificate',
    year: 2025,
    institutionOrAward: {
      uz: 'Davlat test markazi (Milliy sertifikat)',
      ru: 'Государственный тестовый центр (Нац. сертификат)',
      en: 'National Testing Agency (State Certificate)',
    },
    fieldOrMajor: {
      uz: 'Kimyo fani bo‘yicha A darajali sertifikat',
      ru: 'Сертификат уровня А по химии',
      en: 'Level A National Certificate in Chemistry',
    },
    description: {
      uz: 'OTM imtihonlarida maksimal 100% ball beruvchi milliy umumta’lim sertifikati sohibi.',
      ru: 'Обладатель национального сертификата уровня А, дающего максимальный балл при поступлении.',
      en: 'Earned maximum score waiver for university admission via Level A certificate.',
    },
    isConfirmed: false,
    scoreOrAward: 'Daraja A (100% ball)',
    badgeType: 'green',
  },
];
