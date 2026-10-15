export interface SchoolInfo {
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  shortName: {
    uz: string;
    ru: string;
    en: string;
  };
  number: number;
  principal: {
    name: string;
    role: {
      uz: string;
      ru: string;
      en: string;
    };
    receptionHours: {
      uz: string;
      ru: string;
      en: string;
    };
    bioPlaceholder: {
      uz: string;
      ru: string;
      en: string;
    };
  };
  phone: string;
  phoneFormatted: string;
  email: string;
  address: {
    uz: string;
    ru: string;
    en: string;
  };
  city: string;
  region: string;
  country: string;
  workingHours: {
    uz: string;
    ru: string;
    en: string;
  };
  statistics: {
    studentsCount: number;
    teachersCount: number;
    classesCount: number;
    achievementsCount: number;
    isVerified: boolean;
  };
  inn: string;
  bankAccount: string;
}

export const schoolInfo: SchoolInfo = {
  name: {
    uz: 'Namangan shahar 36-sonli umumta’lim maktabi',
    ru: 'Общеобразовательная школа №36 города Намангана',
    en: 'Namangan City Secondary School No. 36',
  },
  shortName: {
    uz: '36-sonli maktab',
    ru: 'Школа №36',
    en: 'School No. 36',
  },
  number: 36,
  principal: {
    name: 'Jalilov Axadjon Xolikovich',
    role: {
      uz: 'Maktab direktori',
      ru: 'Директор школы',
      en: 'School Principal',
    },
    receptionHours: {
      uz: 'Dushanba, Chorshanba, Juma: 14:00 – 17:00',
      ru: 'Понедельник, Среда, Пятница: 14:00 – 17:00',
      en: 'Monday, Wednesday, Friday: 14:00 – 17:00',
    },
    bioPlaceholder: {
      uz: 'Maktab direktori lavozimida faoliyat yuritib, maktabda zamonaviy ta’lim standartlarini joriy etish, pedagogik salohiyatni yuksaltirish va o‘quvchilarning intellektual salohiyatini ro‘yobga chiqarishga rahbarlik qiladi.',
      ru: 'Возглавляет школу, руководит процессом внедрения современных стандартов образования, повышением квалификации педагогов и развитием потенциала учащихся.',
      en: 'Serves as school principal, leading the implementation of modern educational standards, enhancing faculty excellence, and unlocking students\' intellectual potential.',
    },
  },
  phone: '+998692244406',
  phoneFormatted: '+998 69 224-44-06',
  email: 'namangan36m@umail.uz',
  address: {
    uz: 'Namangan shahri, Namangan viloyati, O‘zbekiston',
    ru: 'г. Наманган, Наманганская область, Узбекистан',
    en: 'Namangan city, Namangan region, Uzbekistan',
  },
  city: 'Namangan',
  region: 'Namangan viloyati',
  country: 'O‘zbekiston',
  workingHours: {
    uz: 'Dushanba – Shanba: 08:00 – 17:00',
    ru: 'Понедельник – Суббота: 08:00 – 17:00',
    en: 'Monday – Saturday: 08:00 – 17:00',
  },
  statistics: {
    studentsCount: 1420,
    teachersCount: 84,
    classesCount: 48,
    achievementsCount: 135,
    isVerified: true,
  },
  inn: '201 123 456',
  bankAccount: '23402000300100001010',
};
