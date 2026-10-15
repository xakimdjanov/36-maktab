export interface SchoolDocument {
  id: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  category: 'charter' | 'regulations' | 'financial' | 'safety' | 'curriculum';
  fileNumber: string;
  publishDate: string;
  fileSize: string;
  fileType: 'PDF' | 'DOCX';
  isOfficial: boolean;
}

export const documentCategories = {
  all: {
    uz: 'Barcha hujjatlar',
    ru: 'Все документы',
    en: 'All Documents',
  },
  charter: {
    uz: 'Ustav va ta’sis hujjatlari',
    ru: 'Устав и учредительные документы',
    en: 'Charter & Founding Docs',
  },
  regulations: {
    uz: 'Ichki tartib va yo‘riqnomalar',
    ru: 'Внутренний распорядок',
    en: 'Internal Regulations',
  },
  financial: {
    uz: 'Ochiq byudjet va hisobotlar',
    ru: 'Открытый бюджет и отчеты',
    en: 'Budget & Financial Reports',
  },
  safety: {
    uz: 'Xavfsizlik va sanitariya me’yorlari',
    ru: 'Безопасность и санитария',
    en: 'Safety & Health Standards',
  },
};

export const schoolDocuments: SchoolDocument[] = [
  {
    id: 'doc-1',
    title: {
      uz: 'Namangan shahar 36-sonli umumiy o‘rta ta’lim maktabi Ustavi (Tasdiqlangan tahrir)',
      ru: 'Устав общеобразовательной школы №36 города Намангана (Утвержденная редакция)',
      en: 'Charter of Namangan City Secondary School No. 36 (Official Adopted Edition)',
    },
    category: 'charter',
    fileNumber: '№ 36-U/2023',
    publishDate: '2023-08-25',
    fileSize: '2.4 MB',
    fileType: 'PDF',
    isOfficial: true,
  },
  {
    id: 'doc-2',
    title: {
      uz: 'Maktab o‘qituvchi va xodimlari uchun ichki mehnat tartibi qoidalari',
      ru: 'Правила внутреннего трудового распорядка для учителей и сотрудников',
      en: 'Internal Employment and Professional Conduct Regulations',
    },
    category: 'regulations',
    fileNumber: '№ 12-B',
    publishDate: '2024-01-15',
    fileSize: '840 KB',
    fileType: 'PDF',
    isOfficial: true,
  },
  {
    id: 'doc-3',
    title: {
      uz: 'O‘quvchilarning maktabda o‘zini tutish va odob-axloq me’yorlari to‘g‘risidagi nizom',
      ru: 'Положение о нормах поведения и этике учащихся школы',
      en: 'Student Code of Conduct and Campus Ethics Regulation',
    },
    category: 'regulations',
    fileNumber: '№ 08-O',
    publishDate: '2024-09-02',
    fileSize: '512 KB',
    fileType: 'PDF',
    isOfficial: true,
  },
  {
    id: 'doc-4',
    title: {
      uz: 'Maktabning yillik smeta xarajatlari va moddiy-texnik ta’minot ochiq hisoboti',
      ru: 'Открытый отчет о годовой смете расходов и материально-техническом обеспечении',
      en: 'Annual Budget Estimate and Facilities Material-Technical Disclosure Report',
    },
    category: 'financial',
    fileNumber: '№ M-2025/1',
    publishDate: '2025-02-10',
    fileSize: '1.2 MB',
    fileType: 'PDF',
    isOfficial: true,
  },
  {
    id: 'doc-5',
    title: {
      uz: 'Maktabda yong‘in xavfsizligi va favqulodda vaziyatlarda harakat qilish yo‘riqnomasi',
      ru: 'Инструкция по пожарной безопасности и действиям при чрезвычайных ситуациях',
      en: 'Fire Safety and Emergency Preparedness Protocol',
    },
    category: 'safety',
    fileNumber: '№ F-44',
    publishDate: '2024-11-12',
    fileSize: '680 KB',
    fileType: 'PDF',
    isOfficial: true,
  },
  {
    id: 'doc-6',
    title: {
      uz: 'Umumta’lim o‘quv rejalari va fan soatlari taqsimoti (2025–2026 o‘quv yili)',
      ru: 'Учебные планы и распределение учебных часов (2025–2026 учебный год)',
      en: 'Curriculum Plans and Instructional Hour Allocations (Academic Year 2025–2026)',
    },
    category: 'charter',
    fileNumber: '№ O‘R-36',
    publishDate: '2025-08-28',
    fileSize: '1.8 MB',
    fileType: 'PDF',
    isOfficial: true,
  },
];
