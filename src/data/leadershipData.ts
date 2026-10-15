export interface LeadershipMember {
  id: string;
  category: 'director' | 'deputy' | 'psychologist' | 'advisor';
  name: string;
  role: {
    uz: string;
    ru: string;
    en: string;
  };
  receptionDays: {
    uz: string;
    ru: string;
    en: string;
  };
  phone?: string;
  email?: string;
  isConfirmed: boolean;
  avatarPlaceholderText: string;
  badge?: {
    uz: string;
    ru: string;
    en: string;
  };
  bio: {
    uz: string;
    ru: string;
    en: string;
  };
  duties: {
    uz: string[];
    ru: string[];
    en: string[];
  };
}

export const leadershipData: LeadershipMember[] = [
  // 1. Maktab direktori
  {
    id: 'principal',
    category: 'director',
    name: 'Jalilov Axadjon Xolikovich',
    role: {
      uz: 'Maktab direktori',
      ru: 'Директор школы',
      en: 'School Principal',
    },
    receptionDays: {
      uz: 'Dushanba, Chorshanba, Juma: 14:00 – 17:00',
      ru: 'Понедельник, Среда, Пятница: 14:00 – 17:00',
      en: 'Monday, Wednesday, Friday: 14:00 – 17:00',
    },
    phone: '+998 69 224-44-06',
    email: 'namangan36m@umail.uz',
    isConfirmed: true,
    avatarPlaceholderText: 'J.A.X.',
    badge: {
      uz: 'Bosh rahbar',
      ru: 'Руководитель',
      en: 'Head Principal',
    },
    bio: {
      uz: 'Maktab direktori lavozimida faoliyat yuritib, muassasada davlat ta’lim standartlarini to‘liq joriy etish, pedagogik jamoa salohiyatini yuksaltirish, ta’lim sifatini nazorat qilish hamda o‘quvchilar xavfsizligini ta’minlashga umumiy rahbarlik qiladi.',
      ru: 'Возглавляет школу, осуществляя общее руководство учебно-воспитательным процессом, внедрением государственных стандартов, повышением квалификации педагогов и обеспечением безопасности учащихся.',
      en: 'Leads general institutional governance, state educational standards compliance, instructional quality oversight, faculty development, and student safety.',
    },
    duties: {
      uz: [
        'Maktab faoliyati va moliyaviy-xo‘jalik ishlariga umumiy rahbarlik qilish',
        'Pedagog xodimlarni ishga qabul qilish va ularning kasbiy mahoratini oshirish',
        'O‘quv jarayonining qonuniy me’yorlarga muvofiqligini ta’minlash',
        'Ota-onalar va jamoatchilik vakillari bilan muntazam ochiq muloqot olib borish',
      ],
      ru: [
        'Общее руководство образовательной и административно-хозяйственной деятельностью',
        'Подбор квалифицированных кадров и повышение квалификации преподавателей',
        'Обеспечение соответствия учебных программ законодательным нормам',
        'Организация регулярного диалога с родителями и общественностью',
      ],
      en: [
        'Executive administration of academic and operational school affairs',
        'Recruitment and professional continuous development of teaching faculty',
        'Ensuring alignment with national educational standards and legislation',
        'Maintaining open communication channels with parents and the community',
      ],
    },
  },

  // 2. O‘quv ishlari bo‘yicha direktor o‘rinbosari (Zam direktor)
  {
    id: 'deputy-academic',
    category: 'deputy',
    name: 'O‘quv ishlari bo‘yicha direktor o‘rinbosari',
    role: {
      uz: 'O‘quv ishlari bo‘yicha direktor o‘rinbosari',
      ru: 'Заместитель директора по учебной работе',
      en: 'Deputy Director for Academic Affairs',
    },
    receptionDays: {
      uz: 'Seshanba, Payshanba: 10:00 – 13:00',
      ru: 'Вторник, Четверг: 10:00 – 13:00',
      en: 'Tuesday, Thursday: 10:00 – 13:00',
    },
    phone: '+998 69 224-44-06',
    email: 'namangan36m@umail.uz',
    isConfirmed: false,
    avatarPlaceholderText: 'O‘.I.D.O‘',
    badge: {
      uz: 'O‘quv ishlari zam direktori',
      ru: 'Замдиректора по учебе',
      en: 'Academic Vice Principal',
    },
    bio: {
      uz: 'Maktabda fanlar bo‘yicha o‘quv rejalarining bajarilishi, dars jadvallari, choraklik va yillik baholashlar, fan olimpiadalari hamda davlat imtihonlarini tashkil etishga mas’ul.',
      ru: 'Курирует выполнение учебных программ, расписание уроков, четвертные и годовые оценки, предметные олимпиады и государственные экзамены.',
      en: 'Oversees curricula execution, timetable scheduling, academic assessments, subject olympiads, and examination management.',
    },
    duties: {
      uz: [
        'Dars jadvallari va o‘quv soatlari taqsimotini nazorat qilish',
        'Fan olimpiadalari va bilimlar bellashuvlarini tashkillashtirish',
        'O‘quvchilarning akademik o‘zlashtirishini eMaktab orqali tahlil qilish',
      ],
      ru: [
        'Контроль учебного расписания и педагогической нагрузки',
        'Организация предметных олимпиад и интеллектуальных конкурсов',
        'Анализ успеваемости учащихся посредством системы eMaktab',
      ],
      en: [
        'Oversight of master lesson timetables and teaching hour distributions',
        'Organization of academic olympiads and scholastic competitions',
        'Performance analytics of student attainment via eMaktab',
      ],
    },
  },

  // 3. Ma’naviy-ma’rifiy ishlar bo‘yicha direktor o‘rinbosari (Zam direktor)
  {
    id: 'deputy-spiritual',
    category: 'deputy',
    name: 'Ma’naviy-ma’rifiy ishlar bo‘yicha direktor o‘rinbosari',
    role: {
      uz: 'Ma’naviy-ma’rifiy ishlar bo‘yicha direktor o‘rinbosari',
      ru: 'Заместитель директора по духовно-просветительской работе',
      en: 'Deputy Director for Spiritual and Educational Affairs',
    },
    receptionDays: {
      uz: 'Chorshanba, Shanba: 10:00 – 13:00',
      ru: 'Среда, Суббота: 10:00 – 13:00',
      en: 'Wednesday, Saturday: 10:00 – 13:00',
    },
    phone: '+998 69 224-44-06',
    email: 'namangan36m@umail.uz',
    isConfirmed: false,
    avatarPlaceholderText: 'M.M.D.O‘',
    badge: {
      uz: 'Ma’naviyat zam direktori',
      ru: 'Замдиректора по воспитанию',
      en: 'Pastoral Vice Principal',
    },
    bio: {
      uz: 'O‘quvchilar o‘rtasida odob-axloq, vatanparvarlik tarbiyasi, to‘garaklar, maktab bayramlari va ota-onalar bilan tarbiyaviy hamkorlik ishlariga rahbarlik qiladi.',
      ru: 'Руководит воспитательной работой, формированием патриотизма, кружками, праздничными мероприятиями и взаимодействием с родителями.',
      en: 'Coordinates character development, civic principles, school ceremonies, clubs, and parent-student social cohesion.',
    },
    duties: {
      uz: [
        'Maktabda sinfdan tashqari tarbiyaviy tadbirlar va to‘garaklar faoliyatini muvofiqlashtirish',
        'O‘quvchilar davomati va maktab formasi intizomini ta’minlash',
        'Tarbiyasi og‘ir o‘quvchilar bilan yakka tartibda profilaktik ishlar olib borish',
      ],
      ru: [
        'Координация внеклассных воспитательных мероприятий и кружков',
        'Контроль посещаемости и соблюдения школьной формы',
        'Индивидуальная профилактическая работа с учащимися',
      ],
      en: [
        'Coordination of extracurricular events and school enrichment clubs',
        'Monitoring student attendance and school uniform compliance',
        'Personal guidance and preventative behavioral mentoring',
      ],
    },
  },

  // 4. Xo‘jalik ishlari bo‘yicha direktor o‘rinbosari (Zam direktor)
  {
    id: 'deputy-finance',
    category: 'deputy',
    name: 'Xo‘jalik ishlari bo‘yicha direktor o‘rinbosari',
    role: {
      uz: 'Xo‘jalik ishlari bo‘yicha direktor o‘rinbosari',
      ru: 'Заместитель директора по хозяйственной части',
      en: 'Deputy Director for Facilities & Operations',
    },
    receptionDays: {
      uz: 'Dushanba – Juma: 09:00 – 12:00',
      ru: 'Понедельник – Пятница: 09:00 – 12:00',
      en: 'Monday – Friday: 09:00 – 12:00',
    },
    phone: '+998 69 224-44-06',
    email: 'namangan36m@umail.uz',
    isConfirmed: false,
    avatarPlaceholderText: 'X.I.D.O‘',
    badge: {
      uz: 'Xo‘jalik zam direktori',
      ru: 'Завхоз / Зам по АХЧ',
      en: 'Operations Manager',
    },
    bio: {
      uz: 'Maktab binosi, sinf xonalari, isitish-sovutish tizimi, moddiy-texnik ta’minot va yong‘in xavfsizligini ta’minlashga mas’ul xodim.',
      ru: 'Отвечает за содержание школьного здания, материально-техническое оснащение, отопление, безопасность и санитарное состояние.',
      en: 'Supervises campus facilities, heating/cooling infrastructure, procurement, physical safety, and sanitation standards.',
    },
    duties: {
      uz: [
        'Maktab binosining texnik holati va tozaligini saqlash',
        'Qishki isitish mavsumiga tayyorgarlik va kommunal xizmatlar barqarorligi',
        'Sinf xonalarini parta, doska va o‘quv jihozlari bilan ta’minlash',
      ],
      ru: [
        'Поддержание технического состояния и чистоты школьного корпуса',
        'Подготовка к отопительному сезону и мониторинг коммунальных сетей',
        'Оснащение классов мебелью и необходимым инвентарем',
      ],
      en: [
        'Maintenance of school building infrastructure and cleanliness',
        'Winter heating readiness and utility management',
        'Classroom furniture and educational equipment supply',
      ],
    },
  },

  // 5. Maktab amaliyotchi psixologi
  {
    id: 'psychologist',
    category: 'psychologist',
    name: 'Maktab amaliyotchi psixologi',
    role: {
      uz: 'Maktab amaliyotchi psixologi',
      ru: 'Школьный практический психолог',
      en: 'School Practicing Psychologist',
    },
    receptionDays: {
      uz: 'Har kuni: 09:00 – 15:00',
      ru: 'Ежедневно: 09:00 – 15:00',
      en: 'Daily: 09:00 – 15:00',
    },
    phone: '+998 69 224-44-06',
    email: 'namangan36m@umail.uz',
    isConfirmed: false,
    avatarPlaceholderText: 'M.P.',
    badge: {
      uz: 'Maktab psixologi',
      ru: 'Психолог',
      en: 'School Counselor',
    },
    bio: {
      uz: 'O‘quvchilarning psixologik salomatligi, sinfdagi ijtimoiy muhit, imtihonlar oldi hayajonini yengish, o‘smirlar bilan yakka tartibdagi suhbatlar hamda ota-onalarga psixologik maslahat berish xizmatini olib boradi.',
      ru: 'Оказывает психологическую поддержку учащимся, изучает микроклимат в классах, помогает преодолевать стресс перед экзаменами и консультирует родителей.',
      en: 'Fosters student mental wellbeing, classroom social climate, exam stress resilience, individual counseling, and parent advisory sessions.',
    },
    duties: {
      uz: [
        '1-sinf o‘quvchilarining maktabga moslashuv jarayonini psixologik kuzatish',
        'Bitiruvchi sinflarda kasbga yo‘naltirish psixologik testlarini o‘tkazish',
        'O‘quvchilar va ota-onalar uchun maxsus ishonch suhbatlari tashkil etish',
      ],
      ru: [
        'Психологический мониторинг адаптации первоклассников к школе',
        'Профориентационное тестирование выпускных классов',
        'Индивидуальные доверительные консультации для детей и родителей',
      ],
      en: [
        'Psychological monitoring of early primary transition and adaptation',
        'Vocational aptitude testing for graduating high school cohorts',
        'Confidential advisory sessions for students and parent guardians',
      ],
    },
  },

  // 6. Direktor maslahatchisi (Yoshlar masalalari bo‘yicha)
  {
    id: 'advisor-youth',
    category: 'advisor',
    name: 'Direktorning yoshlar masalalari bo‘yicha maslahatchisi',
    role: {
      uz: 'Direktorning yoshlar masalalari bo‘yicha maslahatchisi (Yetakchi)',
      ru: 'Советник директора по вопросам молодежи (Лидер молодежи)',
      en: 'Director\'s Advisor on Youth Affairs',
    },
    receptionDays: {
      uz: 'Dushanba – Juma: 09:00 – 16:00',
      ru: 'Понедельник – Пятница: 09:00 – 16:00',
      en: 'Monday – Friday: 09:00 – 16:00',
    },
    phone: '+998 69 224-44-06',
    email: 'namangan36m@umail.uz',
    isConfirmed: false,
    avatarPlaceholderText: 'Y.M.',
    badge: {
      uz: 'Direktor maslahatchisi',
      ru: 'Советник директора',
      en: 'Youth Advisor',
    },
    bio: {
      uz: 'Maktab yoshlar yetakchisi sifatida o‘quvchilarning jamoat tashkilotlaridagi faolligi, «Kamalak» va yoshlar ittifoqi loyihalari, ko‘rik-tanlovlar hamda ijtimoiy tashabbuslarni muvofiqlashtiradi.',
      ru: 'Курирует молодежные инициативы, ученическое самоуправление, деятельность детских организаций и участие в общенациональных проектах.',
      en: 'Mentors youth leadership organizations, student councils, civic initiatives, and nationwide student competitions.',
    },
    duties: {
      uz: [
        'O‘quvchilar o‘z-o‘zini boshqarish tizimini rivojlantirish',
        'Iqtidorli va tashabbuskor o‘quvchilar loyihalarini qo‘llab-quvvatlash',
        'Kitobxonlik va intellektual o‘yinlar tanlovlarini o‘tkazish',
      ],
      ru: [
        'Развитие ученического самоуправления в школе',
        'Поддержка проектов одаренных и инициативных учащихся',
        'Проведение интеллектуальных игр и литературных марафонов',
      ],
      en: [
        'Cultivating student self-governance and student council activities',
        'Empowering innovative student-led community and academic initiatives',
        'Directing reading marathons and inter-school academic quiz tourneys',
      ],
    },
  },

  // 7. Xotin-qizlar masalalari bo‘yicha direktor maslahatchisi
  {
    id: 'advisor-women',
    category: 'advisor',
    name: 'Xotin-qizlar masalalari bo‘yicha direktor maslahatchisi',
    role: {
      uz: 'Xotin-qizlar masalalari bo‘yicha direktor maslahatchisi',
      ru: 'Советник директора по вопросам женщин и девушек',
      en: 'Director\'s Advisor on Girls\' and Women\'s Affairs',
    },
    receptionDays: {
      uz: 'Seshanba, Payshanba: 14:00 – 17:00',
      ru: 'Вторник, Четверг: 14:00 – 17:00',
      en: 'Tuesday, Thursday: 14:00 – 17:00',
    },
    phone: '+998 69 224-44-06',
    email: 'namangan36m@umail.uz',
    isConfirmed: false,
    avatarPlaceholderText: 'X.Q.M.',
    badge: {
      uz: 'Direktor maslahatchisi',
      ru: 'Советник директора',
      en: 'Women\'s Advisor',
    },
    bio: {
      uz: 'Maktabda qizlar tarbiyasi, ularning kasb-hunar egallashi, sog‘lom turmush tarzi, huquqiy savodxonligi hamda ayol o‘qituvchilarning ijtimoiy muhofazasi bo‘yicha faoliyat yuritadi.',
      ru: 'Курирует вопросы воспитания девочек, их профессиональной ориентации, правовой грамотности и социальной защиты женщин-педагогов.',
      en: 'Oversees mentorship for female pupils, vocational literacy, wellness education, and welfare advocacy for female faculty members.',
    },
    duties: {
      uz: [
        'Qizlar o‘rtasida «Qizlarjon» klubi va mahorat darslarini tashkil qilish',
        'Qizlarning ta’lim olishi va dars qoldirmasligini nazorat qilish',
        'Onalar bilan qizlar tarbiyasiga oid davra suhbatlarini o‘tkazish',
      ],
      ru: [
        'Организация клуба для девушек и проведение практических мастер-классов',
        'Контроль посещаемости и качества обучения девушек',
        'Тематические круглые столы с матерями по вопросам воспитания',
      ],
      en: [
        'Facilitating girls\' leadership forums and practical workshops',
        'Monitoring academic attendance and personal development of female students',
        'Convening mother-daughter mentorship seminars on ethics and wellness',
      ],
    },
  },
];
