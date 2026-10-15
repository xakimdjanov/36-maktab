import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Globe, 
  HeartPulse, 
  Users, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Award,
  ChevronRight,
  GraduationCap,
  Clock,
  Search,
  CheckCircle2,
  AlertCircle,
  FileText,
  Download,
  ExternalLink,
  X,
  Maximize2,
  Cpu,
  Trophy,
  HelpCircle,
  User,
  MessageSquare,
  Send,
  Building,
  UserCheck,
  Target
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SchoolBadge } from '../components/SchoolBadge';
import { schoolInfo } from '../data/schoolInfo';
import { teachersData, departmentNames, Teacher } from '../data/teachersData';
import { achievementsData, achievementCategories, Achievement } from '../data/achievementsData';
import { newsArticles, newsCategories, NewsArticle } from '../data/newsData';
import { educationPrograms } from '../data/educationData';
import { bellSchedule, academicQuarters, parentsResources } from '../data/parentsData';
import { schoolDocuments } from '../data/documentsData';
import { leadershipData, LeadershipMember } from '../data/leadershipData';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();

  // Leadership Team State
  const [selectedLeaderCategory, setSelectedLeaderCategory] = useState<string>('all');
  const principal = leadershipData.find((m) => m.id === 'principal') || leadershipData[0];
  const deputies = leadershipData.filter((m) => m.category === 'deputy');
  const psychologist = leadershipData.find((m) => m.category === 'psychologist');
  const advisors = leadershipData.filter((m) => m.category === 'advisor');
  const teamList = leadershipData.filter((m) => m.id !== 'principal');

  const filteredTeam = selectedLeaderCategory === 'all'
    ? teamList
    : teamList.filter((m) => m.category === selectedLeaderCategory);

  // Teachers State
  const [selectedDept, setSelectedDept] = useState<string>('all');

  // Achievements State
  const [selectedAchCategory, setSelectedAchCategory] = useState<string>('all');
  const [selectedAchYear, setSelectedAchYear] = useState<string>('all');

  // News Modal State
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  // Documents Modal State
  const [showDocumentsModal, setShowDocumentsModal] = useState<boolean>(false);

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (showDocumentsModal || activeArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showDocumentsModal, activeArticle]);

  // Contact Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [subject, setSubject] = useState('admission');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 76;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  // Filtered teachers
  const filteredTeachers = useMemo(() => {
    return teachersData.filter((t) => {
      return selectedDept === 'all' || t.department === selectedDept;
    });
  }, [selectedDept]);

  // Filtered achievements
  const filteredAchievements = useMemo(() => {
    return achievementsData.filter((a) => {
      const matchCat = selectedAchCategory === 'all' || a.category === selectedAchCategory;
      const matchYear = selectedAchYear === 'all' || a.year.toString() === selectedAchYear;
      return matchCat && matchYear;
    });
  }, [selectedAchCategory, selectedAchYear]);

  // Handle phone format
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('+998')) {
      val = '+998 ';
    }
    setPhone(val);
    if (formErrors.phone) {
      setFormErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!fullName.trim() || fullName.trim().length < 3) {
      errors.fullName = t('form.errorRequired');
    }
    const rawDigits = phone.replace(/\D/g, '');
    if (rawDigits.length < 12) {
      errors.phone = t('form.errorPhone');
    }
    if (!message.trim() || message.trim().length < 10) {
      errors.message = t('form.errorRequired');
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFullName('');
      setPhone('+998 ');
      setMessage('');
    }, 700);
  };

  const departments = [
    { id: 'all', label: departmentNames.all[language] },
    { id: 'exact', label: 'Aniq fanlar' },
    { id: 'natural', label: 'Tabiiy fanlar' },
    { id: 'languages', label: 'Xorijiy tillar' },
    { id: 'humanities', label: 'Gumanitar' },
    { id: 'primary', label: 'Boshlang‘ich' },
  ];

  const achievementTabs = [
    { id: 'all', label: achievementCategories.all[language] },
    { id: 'university', label: achievementCategories.university[language] },
    { id: 'olympiad', label: achievementCategories.olympiad[language] },
    { id: 'certificate', label: achievementCategories.certificate[language] },
  ];

  return (
    <div className="space-y-28 sm:space-y-40 pb-28 overflow-x-hidden text-[#0F1E0E]">
      
      {/* ========================================================
          1. BOSH SAHIFA (HERO & SAGE BENTO STATS)
          ======================================================== */}
      <section id="bosh-sahifa" className="pt-10 sm:pt-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
        {/* Apple Style Clean Hero Center */}
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Subtle Sage Pill Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold tracking-wide uppercase bg-[#E2EDE1] text-[#182B17] border border-[#4E724B]/30 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4E724B] animate-pulse"></span>
            <span>{t('hero.badge')}</span>
          </div>

          {/* Large Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F1E0E] tracking-tight leading-[1.08]">
            {t('hero.title')}
          </h1>

          {/* Legible Large Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#31482F] max-w-3xl mx-auto leading-relaxed font-medium">
            {t('hero.subtitle')}
          </p>

          {/* Action Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => scrollTo('maktab-haqida')}
              className="px-7 py-4 rounded-full bg-[#4E724B] hover:bg-[#3B5738] text-white font-extrabold text-sm sm:text-base shadow-apple hover:shadow-apple-hover transition-all active:scale-95 cursor-pointer flex items-center gap-2.5"
            >
              <span>{t('hero.ctaAbout')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('yutuqlar')}
              className="px-7 py-4 rounded-full bg-white hover:bg-[#F2F7F1] text-[#0F1E0E] font-extrabold text-sm sm:text-base border-2 border-[#4E724B]/35 shadow-apple-sm transition-all active:scale-95 cursor-pointer flex items-center gap-2.5"
            >
              <Award className="w-4 h-4 text-[#4E724B]" />
              <span>{t('hero.ctaAchievements')}</span>
            </button>
          </div>
        </div>

        {/* Sage Bento Grid Showcase */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: School Passport (7 cols) */}
          <div className="md:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border-2 border-[#4E724B]/20 shadow-apple flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <SchoolBadge size={60} className="transition-transform group-hover:scale-105" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#182B17] bg-[#E2EDE1] px-3.5 py-1.5 rounded-full border border-[#4E724B]/30 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4E724B]" />
                  <span>Davlat attestatsiyasi</span>
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E0E] tracking-tight">
                  {schoolInfo.name[language]}
                </h2>
                <p className="text-sm sm:text-base text-[#3B5239] mt-1.5 leading-relaxed font-medium">
                  {t('school.tagline')}
                </p>
              </div>

              {/* Principal Card Preview */}
              <div className="p-5 bg-[#F2F7F1] rounded-2xl border border-[#4E724B]/20 space-y-1.5">
                <div className="text-xs uppercase font-extrabold text-[#4E724B] tracking-wider">
                  {schoolInfo.principal.role[language]}
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-[#0F1E0E]">
                  {schoolInfo.principal.name}
                </div>
                <div className="text-xs sm:text-sm text-[#3B5239]">
                  Qabul vaqti: {schoolInfo.principal.receptionHours[language]}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#4E724B]/15 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#3B5239]">
              <div className="flex items-center gap-2 font-medium">
                <MapPin className="w-4 h-4 text-[#4E724B]" />
                <span>{schoolInfo.address[language]}</span>
              </div>
              <a href={`tel:${schoolInfo.phone}`} className="font-extrabold text-[#0F1E0E] hover:underline">
                {schoolInfo.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Bento Card 2: Statistics in Richer Green Tone (5 cols) */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#4E724B] to-[#2A4328] text-white rounded-3xl p-7 sm:p-10 shadow-apple flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[#E2EDE1]">
                Raqamlarda
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {t('stats.title')}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 my-7">
              <div className="p-4 bg-white/15 rounded-2xl backdrop-blur-xs border border-white/20">
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  {schoolInfo.statistics.studentsCount}+
                </div>
                <div className="text-xs sm:text-sm text-[#E2EDE1] mt-1 font-semibold">
                  {t('stats.students')}
                </div>
              </div>

              <div className="p-4 bg-white/15 rounded-2xl backdrop-blur-xs border border-white/20">
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  {schoolInfo.statistics.teachersCount}+
                </div>
                <div className="text-xs sm:text-sm text-[#E2EDE1] mt-1 font-semibold">
                  {t('stats.teachers')}
                </div>
              </div>

              <div className="p-4 bg-white/15 rounded-2xl backdrop-blur-xs border border-white/20">
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  {schoolInfo.statistics.classesCount}+
                </div>
                <div className="text-xs sm:text-sm text-[#E2EDE1] mt-1 font-semibold">
                  {t('stats.classes')}
                </div>
              </div>

              <div className="p-4 bg-white/15 rounded-2xl backdrop-blur-xs border border-white/20">
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  {schoolInfo.statistics.achievementsCount}+
                </div>
                <div className="text-xs sm:text-sm text-[#E2EDE1] mt-1 font-semibold">
                  {t('stats.achievements')}
                </div>
              </div>
            </div>

            <div className="text-xs text-[#E2EDE1] leading-relaxed">
              {t('stats.note')}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. MAKTAB HAQIDA (ABOUT SECTION ON LANDING PAGE)
          ======================================================== */}
      <section id="maktab-haqida" className="px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4E724B] bg-[#E2EDE1] px-3.5 py-1 rounded-full border border-[#4E724B]/30">
              Maktab haqida ma’lumot
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1E0E] tracking-tight">
              Zamonaviy ta’lim va intizomli muhit
            </h2>
            <p className="text-base sm:text-lg text-[#3B5239] leading-relaxed font-medium">
              Namangan shahar 36-sonli maktabi har bir o‘quvchining qobiliyatini kashf etish va zamonaviy jamiyatda o‘z o‘rnini topishiga xizmat qiladi.
            </p>
          </div>

          {/* Facilities & Core Values Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#4E724B]/20 shadow-apple-sm hover:shadow-apple-hover hover:border-[#4E724B]/60 hover:-translate-y-2 transition-all duration-300 space-y-3 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#E2EDE1] text-[#4E724B] flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#4E724B] group-hover:text-white transition-all duration-300 shadow-apple-sm">
                <Building className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-lg sm:text-xl text-[#0F1E0E] group-hover:text-[#4E724B] transition-colors">
                48 ta zamonaviy sinfxona
              </h3>
              <p className="text-sm text-[#3B5239] leading-relaxed">
                Yorug‘ va qulay o‘quv xonalari, axborot-resurs zali, fizika, kimyo va biologiya laboratoriyalari.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#4E724B]/20 shadow-apple-sm hover:shadow-apple-hover hover:border-[#4E724B]/60 hover:-translate-y-2 transition-all duration-300 space-y-3 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#E2EDE1] text-[#4E724B] flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#4E724B] group-hover:text-white transition-all duration-300 shadow-apple-sm">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-lg sm:text-xl text-[#0F1E0E] group-hover:text-[#4E724B] transition-colors">
                Davlat ta’lim standarti
              </h3>
              <p className="text-sm text-[#3B5239] leading-relaxed">
                Chuqurlashtirilgan o‘quv rejalari, interaktiv multimedia vositalari va yuqori pedagogik sifat nazorati.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#4E724B]/20 shadow-apple-sm hover:shadow-apple-hover hover:border-[#4E724B]/60 hover:-translate-y-2 transition-all duration-300 space-y-3 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#E2EDE1] text-[#4E724B] flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#4E724B] group-hover:text-white transition-all duration-300 shadow-apple-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-lg sm:text-xl text-[#0F1E0E] group-hover:text-[#4E724B] transition-colors">
                Xavfsiz maktab muhiti
              </h3>
              <p className="text-sm text-[#3B5239] leading-relaxed">
                Doimiy videokuzatuv tizimi, tozalik va sanitariya nazorati hamda o‘quvchilar xavfsizligi ta’minlangan.
              </p>
            </div>
          </div>

          {/* Mission & Vision Banner */}
          <div className="bg-gradient-to-br from-[#E2EDE1] via-[#F7FAF6] to-[#D8E8D6] rounded-3xl p-8 sm:p-12 border-2 border-[#4E724B]/30 hover:border-[#4E724B]/60 flex flex-col md:flex-row items-center justify-between gap-8 shadow-apple-sm hover:shadow-apple-hover hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start gap-5 max-w-2xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#4E724B] text-white flex items-center justify-center shrink-0 shadow-apple-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#4E724B] bg-white px-3 py-1 rounded-full border border-[#4E724B]/20 inline-block shadow-xs">
                  Asosiy missiya va maqsad
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E0E] leading-tight group-hover:text-[#2A4328] transition-colors">
                  Maktabimizning bosh maqsadi
                </h3>
                <p className="text-sm sm:text-base text-[#182B17] leading-relaxed font-medium">
                  Har bir o‘quvchiga davlat va jahon standartlariga mos zamonaviy bilim, milliy qadriyatlarga asoslangan tarbiya berish hamda ularni kelajak kasblariga munosib tayyorlash.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowDocumentsModal(true)}
              className="px-7 py-4 bg-[#4E724B] hover:bg-[#3B5738] text-white font-extrabold text-sm sm:text-base rounded-full shadow-apple-sm hover:shadow-apple hover:scale-[1.03] active:scale-[0.98] transition-all shrink-0 cursor-pointer flex items-center gap-2.5 group/btn"
            >
              <FileText className="w-5 h-5 text-white group-hover/btn:rotate-6 transition-transform" />
              <span>Maktab ustavini ko‘rish</span>
              <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================
          3. MAKTAB DIREKTORI VA RAHBARIYAT (DEDICATED SECTION)
          ======================================================== */}
      <section id="maktab-direktori" className="px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4E724B] bg-[#E2EDE1] px-3.5 py-1 rounded-full border border-[#4E724B]/30">
              Maktab boshqaruvi
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1E0E] tracking-tight">
              Maktab direktori va ma’muriyat
            </h2>
            <p className="text-base sm:text-lg text-[#3B5239] leading-relaxed font-medium">
              Namangan shahar 36-sonli umumta’lim maktabining rahbariyati, direktor o‘rinbosarlari, psixologi va maslahatchilari.
            </p>
          </div>

          {/* Maktab Direktori Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-12 border-2 border-[#4E724B]/25 shadow-apple">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Principal Photo & Identity */}
              <div className="lg:col-span-5 flex flex-col items-center text-center p-8 bg-[#F2F7F1] rounded-3xl border border-[#4E724B]/20 space-y-4">
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt={principal.name}
                    className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-contain p-2 bg-white shadow-apple border-4 border-[#4E724B]/30 hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-2 right-2 p-2 bg-[#4E724B] text-white rounded-full shadow-apple-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-[#182B17] bg-[#E2EDE1] px-3.5 py-1.5 rounded-full border border-[#4E724B]/30">
                    {principal.role[language]}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F1E0E] pt-1">
                    {principal.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3B5239] font-medium">
                    Namangan shahar 36-sonli maktab rahbari
                  </p>
                </div>

                <div className="w-full pt-4 border-t border-[#4E724B]/20 space-y-2.5 text-xs sm:text-sm text-left">
                  <div className="flex items-center gap-2.5 text-[#0F1E0E]">
                    <Phone className="w-4 h-4 text-[#4E724B] shrink-0" />
                    <a href={`tel:${schoolInfo.phone}`} className="font-extrabold hover:underline">
                      {schoolInfo.phoneFormatted}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#0F1E0E]">
                    <Mail className="w-4 h-4 text-[#4E724B] shrink-0" />
                    <a href={`mailto:${schoolInfo.email}`} className="font-mono text-xs hover:underline truncate">
                      {schoolInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-2.5 text-[#0F1E0E] pt-1">
                    <Clock className="w-4 h-4 text-[#4E724B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-[#0F1E0E]">Qabul vaqti:</span>
                      <div className="text-xs text-[#3B5239] font-medium">{principal.receptionDays[language]}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message & Duties */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4E724B]">
                    Direktor rasmiy murojaati
                  </span>
                  <blockquote className="text-2xl sm:text-3xl font-extrabold text-[#0F1E0E] leading-tight">
                    «Maktabimizning bosh maqsadi — har bir o‘quvchiga zamonaviy bilim berish va ularni mustaqil hayotga munosib tayyorlashdir.»
                  </blockquote>
                  <p className="text-sm sm:text-base text-[#3B5239] leading-relaxed font-medium">
                    {principal.bio[language]}
                  </p>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-[#4E724B]/15">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#0F1E0E]">
                    Asosiy rahbarlik vazifalari:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#182B17]">
                    {principal.duties[language].map((duty, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 bg-[#F2F7F1] rounded-2xl border border-[#4E724B]/20">
                        <CheckCircle2 className="w-4 h-4 text-[#4E724B] shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{duty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => scrollTo('aloqa')}
                    className="px-6 py-3.5 bg-[#4E724B] hover:bg-[#3B5738] text-white font-extrabold text-sm rounded-full shadow-apple-sm transition-all"
                  >
                    Direktor qabuliga yozilish
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Zam Direktorlar, Psixolog va Maslahatchilar */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E0E]">
                  Zam direktorlar, psixolog va maslahatchilar
                </h3>
                <p className="text-xs sm:text-sm text-[#3B5239] mt-1 font-medium">
                  Maktab boshqaruvining o‘quv, ma’naviy, xo‘jalik va psixologik jamoasi.
                </p>
              </div>

              {/* Segmented Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {[
                  { id: 'all', label: `Barchasi (${teamList.length})` },
                  { id: 'deputy', label: `Zam direktorlar (${deputies.length})` },
                  { id: 'psychologist', label: 'Psixolog' },
                  { id: 'advisor', label: `Maslahatchilar (${advisors.length})` },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedLeaderCategory(cat.id as any)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border-2 ${
                      selectedLeaderCategory === cat.id
                        ? 'bg-[#4E724B] text-white border-[#4E724B] shadow-apple-sm'
                        : 'bg-white text-[#182B17] border-[#4E724B]/25 hover:border-[#4E724B] hover:bg-[#E2EDE1]/50'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Team Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeam.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#4E724B]/20 shadow-apple-sm hover:shadow-apple transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#182B17] bg-[#E2EDE1] px-3 py-1 rounded-full border border-[#4E724B]/25">
                        {member.badge?.[language]}
                      </span>
                      <span className="text-xs text-[#3B5239] bg-[#F2F7F1] px-2.5 py-1 rounded-full font-bold">
                        Tasdiqlangan
                      </span>
                    </div>

                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#4E724B] text-white font-extrabold flex items-center justify-center text-xs shadow-apple-sm shrink-0">
                        {member.avatarPlaceholderText}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[#0F1E0E] text-base leading-snug">
                          {member.name}
                        </h4>
                        <p className="text-xs font-extrabold text-[#4E724B] mt-0.5">
                          {member.role[language]}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#3B5239] leading-relaxed mt-3 pt-3 border-t border-[#4E724B]/15 font-medium">
                      {member.bio[language]}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#4E724B]/15 space-y-1.5 text-xs text-[#182B17]">
                      <span className="font-bold text-[#0F1E0E] block mb-1">Mas’uliyat sohalari:</span>
                      {member.duties[language].map((duty, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4E724B] shrink-0 mt-1.5"></span>
                          <span>{duty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#4E724B]/15 flex items-center gap-2 text-xs text-[#3B5239] font-medium">
                    <Clock className="w-4 h-4 text-[#4E724B] shrink-0" />
                    <span>Qabul: {member.receptionDays[language]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          4. O‘QITUVCHILAR (TEACHERS SECTION)
          ======================================================== */}
      <section id="oqituvchilar" className="px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="space-y-8">
          
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4E724B]">
              Pedagogik tarkib
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E0E] tracking-tight mt-1">
              {t('home.teachersSectionTitle')}
            </h2>
            <p className="text-sm sm:text-base text-[#3B5239] mt-1 max-w-2xl font-medium">
              {t('home.teachersSubtitle')}
            </p>
          </div>

          {/* Department Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {departments.map((dept) => (
              <button
                key={dept.id}
                type="button"
                onClick={() => setSelectedDept(dept.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border-2 ${
                  selectedDept === dept.id
                    ? 'bg-[#4E724B] text-white border-[#4E724B] shadow-apple-sm'
                    : 'bg-white text-[#182B17] border-[#4E724B]/25 hover:border-[#4E724B] hover:bg-[#E2EDE1]/50'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          {/* Teachers Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#4E724B]/20 shadow-apple-sm hover:shadow-apple transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#182B17] bg-[#E2EDE1] px-3 py-1 rounded-full border border-[#4E724B]/25">
                      {teacher.department.toUpperCase()}
                    </span>
                    <span className="text-xs text-[#3B5239] bg-[#F2F7F1] px-2.5 py-1 rounded-full font-bold">
                      O‘qituvchi
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#4E724B] text-white flex items-center justify-center font-extrabold text-sm shrink-0 shadow-apple-sm">
                      {teacher.initials}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#0F1E0E] text-base sm:text-lg leading-snug">
                        {teacher.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-extrabold text-[#4E724B] mt-0.5">
                        {teacher.subject[language]}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-[#4E724B]/15 text-xs sm:text-sm text-[#3B5239] font-medium">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-[#4E724B] shrink-0 mt-0.5" />
                      <span>{teacher.qualificationCategory[language]}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{teacher.education[language]}</span>
                    </div>
                  </div>
                </div>

                {teacher.specialNote && (
                  <div className="mt-4 p-3 bg-[#E2EDE1] rounded-2xl text-xs text-[#182B17] italic leading-snug font-medium">
                    "{teacher.specialNote[language]}"
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          5. YUTUQLAR (ACHIEVEMENTS SECTION)
          ======================================================== */}
      <section id="yutuqlar" className="px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4E724B]">
                O‘quvchilar natijalari
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E0E] tracking-tight mt-1">
                {t('home.achievementsSectionTitle')}
              </h2>
              <p className="text-sm sm:text-base text-[#3B5239] mt-1 max-w-2xl font-medium">
                {t('home.achievementsSubtitle')}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {['all', '2025', '2024'].map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setSelectedAchYear(yr)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border-2 ${
                    selectedAchYear === yr
                      ? 'bg-[#4E724B] text-white border-[#4E724B] shadow-apple-sm'
                      : 'bg-white text-[#182B17] border-[#4E724B]/25 hover:border-[#4E724B] hover:bg-[#E2EDE1]/50'
                  }`}
                >
                  {yr === 'all' ? 'Barcha yillar' : `${yr}-yil`}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {achievementTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedAchCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border-2 ${
                  selectedAchCategory === tab.id
                    ? 'bg-[#4E724B] text-white border-[#4E724B] shadow-apple-sm'
                    : 'bg-white text-[#182B17] border-[#4E724B]/25 hover:border-[#4E724B] hover:bg-[#E2EDE1]/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((ach) => (
              <div
                key={ach.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#4E724B]/20 shadow-apple-sm hover:shadow-apple transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#3B5239] font-bold">
                      {ach.year}-yil
                    </span>
                    {ach.scoreOrAward && (
                      <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#E2EDE1] text-[#182B17] border border-[#4E724B]/25">
                        {ach.scoreOrAward}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-3.5 mb-2">
                    <div className="p-3 bg-[#E2EDE1] rounded-2xl text-[#4E724B] shrink-0">
                      {ach.category === 'university' ? (
                        <GraduationCap className="w-5 h-5 text-[#4E724B]" />
                      ) : (
                        <Award className="w-5 h-5 text-[#4E724B]" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#0F1E0E] text-base sm:text-lg leading-snug">
                        {ach.institutionOrAward[language]}
                      </h4>
                      <p className="text-xs sm:text-sm font-extrabold text-[#4E724B] mt-0.5">
                        {ach.fieldOrMajor[language]}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3B5239] leading-relaxed mt-3 pt-3 border-t border-[#4E724B]/15 font-medium">
                    {ach.description[language]}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#4E724B]/15 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-extrabold text-[#0F1E0E]">
                    {ach.studentName[language]}
                  </span>
                  <span className="text-xs text-[#3B5239] bg-[#F2F7F1] px-2.5 py-0.5 rounded-full font-bold">
                    Tasdiqlangan
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          6. TA’LIM (EDUCATION PROGRAMS)
          ======================================================== */}
      <section id="talim" className="px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4E724B]">
              Ta’lim va imkoniyatlar
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1E0E] tracking-tight">
              Chuqurlashtirilgan to‘garaklar
            </h2>
            <p className="text-base sm:text-lg text-[#3B5239] leading-relaxed font-medium">
              Chet tillari, tibbiyot, IT va olimpiada to‘garaklari orqali keng bilim olish imkoniyatlari.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* English Speaking Spotlight */}
            <div className="bg-gradient-to-br from-[#4E724B] to-[#2A4328] text-white rounded-3xl p-8 sm:p-10 shadow-apple flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E2EDE1] bg-white/20 px-3.5 py-1 rounded-full border border-white/25">
                  Xorijiy tillar
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                  {t('home.englishTitle')}
                </h3>
                <p className="text-sm sm:text-base text-[#E2EDE1] leading-relaxed font-medium">
                  {t('home.englishSubtitle')}
                </p>

                <div className="space-y-2.5 pt-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>Speaking Club haftalik erkin so‘zlashuv amaliyoti</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>Taklif etilgan xorijiy mutaxassislar bilan jonli darslar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>IELTS va Milliy sertifikat sinovlariga maqsadli tayyorgarlik</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-white/15 rounded-2xl text-xs sm:text-sm text-white font-bold">
                Auditoriya: 5–11 sinflar • Haftada 3 kun
              </div>
            </div>

            {/* Medical Club Spotlight */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#4E724B]/30 shadow-apple flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#182B17] bg-[#E2EDE1] px-3.5 py-1 rounded-full border border-[#4E724B]/30">
                  Erta kasbga yo‘naltirish
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E0E] tracking-tight leading-tight">
                  «Qiziqishdan kasb sari» — Tibbiyot to‘garagi
                </h3>
                <p className="text-sm sm:text-base text-[#3B5239] leading-relaxed font-medium">
                  Bo‘lajak shifokorlar va tibbiyot sohasi ixlosmandlari uchun biologiya, inson anatomiyasi, birinchi yordam va amaliy laboratoriya darslari.
                </p>

                <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#182B17] font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4E724B] shrink-0" />
                    <span>Favqulodda vaziyatlarda birinchi tez tibbiy yordam ko‘rsatish</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4E724B] shrink-0" />
                    <span>Odam anatomiyasi va fiziologiyasini modellar asosida o‘rganish</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4E724B] shrink-0" />
                    <span>Tajribali shifokorlar bilan ochiq davra suhbatlari</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-[#F2F7F1] rounded-2xl text-xs sm:text-sm text-[#3B5239] font-bold border border-[#4E724B]/20">
                Auditoriya: 7–11 sinflar • Haftada 2 kun
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationPrograms.slice(2).map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#4E724B]/20 shadow-apple-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#182B17] bg-[#E2EDE1] px-3 py-1 rounded-full border border-[#4E724B]/25">
                    {prog.badge[language]}
                  </span>
                  <h4 className="font-extrabold text-[#0F1E0E] text-base sm:text-lg leading-snug mt-3">
                    {prog.title[language]}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3B5239] mt-2 leading-relaxed font-medium">
                    {prog.description[language]}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#4E724B]/15 text-xs text-[#3B5239] font-semibold">
                  Jadval: {prog.schedule[language]}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          7. YANGILIKLAR (NEWS & EVENTS)
          ======================================================== */}
      <section id="yangiliklar" className="px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4E724B]">
              Maktab axborot xizmati
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E0E] tracking-tight">
              {t('home.newsTitle')}
            </h2>
            <p className="text-sm sm:text-base text-[#3B5239] font-medium">
              Maktab hayotidagi eng so‘nggi rasmiy xabarnomalar, tadbirlar va e’lonlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="bg-white rounded-3xl border-2 border-[#4E724B]/20 overflow-hidden shadow-apple-sm hover:shadow-apple transition-all duration-200 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="h-36 bg-gradient-to-br from-[#4E724B] to-[#31482F] p-4 flex flex-col justify-between text-white relative">
                    <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full w-fit">
                      {article.category}
                    </span>
                    <span className="text-xs font-mono text-[#E2EDE1] font-bold">
                      {article.date}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-2">
                    <h4 className="font-extrabold text-[#0F1E0E] text-base leading-snug group-hover:text-[#4E724B] transition-colors line-clamp-2">
                      {article.title[language]}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3B5239] leading-relaxed line-clamp-3 font-medium">
                      {article.summary[language]}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                  <span className="text-xs sm:text-sm font-bold text-[#4E724B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Batafsil o‘qish</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          8. OTA-ONALAR UCHUN (FOR PARENTS)
          ======================================================== */}
      <section id="ota-onalar" className="px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4E724B]">
              Oila va maktab hamkorligi
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1E0E] tracking-tight">
              Ota-onalar uchun muhim qo‘llanmalar
            </h2>
            <p className="text-base sm:text-lg text-[#3B5239] leading-relaxed font-medium">
              1-sinfga qabul hujjatlari, maktab formasi, dars jadvallari va elektron baholash tizimi.
            </p>
          </div>

          {/* eMaktab Banner */}
          <div className="bg-[#182B17] text-white rounded-3xl p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-apple border border-[#4E724B]/30">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold text-[#A7C1A4] uppercase tracking-wider">
                Elektron kundalik
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                eMaktab (Kundalik) tizimiga kirish
              </h3>
              <p className="text-xs sm:text-sm text-[#E2EDE1] max-w-xl font-medium">
                Farzandingizning joriy baholari, dars jadvali va uyga vazifalarini doimiy kuzatib boring.
              </p>
            </div>

            <a
              href="https://emaktab.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#4E724B] hover:bg-[#3B5738] text-white font-extrabold text-sm rounded-full shadow-apple-sm transition-all active:scale-95 flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>eMaktab tizimiga o‘tish</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Schedule & Quarters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#4E724B]/20 shadow-apple space-y-5">
              <div className="flex items-center gap-3 pb-2 border-b border-[#4E724B]/15">
                <Clock className="w-6 h-6 text-[#4E724B]" />
                <h3 className="font-extrabold text-[#0F1E0E] text-lg sm:text-xl">
                  Dars va qo‘ng‘iroqlar jadvali
                </h3>
              </div>

              <div className="divide-y divide-[#4E724B]/15">
                {bellSchedule.map((row, idx) => (
                  <div key={idx} className="py-3 sm:py-3.5 grid grid-cols-12 items-center gap-2">
                    {/* Period Column */}
                    <div className="col-span-3 sm:col-span-3 flex items-center">
                      <span className="font-extrabold text-xs sm:text-sm md:text-base text-[#182B17]">
                        {row.period}
                      </span>
                    </div>

                    {/* Time Column - Fixed centered track */}
                    <div className="col-span-5 sm:col-span-5 flex justify-center">
                      <span className="font-extrabold text-xs sm:text-sm md:text-base text-[#0F1E0E] bg-[#F2F7F1] px-2.5 sm:px-4 py-1.5 rounded-xl border border-[#4E724B]/20 tracking-tight whitespace-nowrap shadow-xs">
                        {row.time}
                      </span>
                    </div>

                    {/* Recess Column */}
                    <div className="col-span-4 sm:col-span-4 text-right">
                      <span className={`text-[11px] sm:text-xs md:text-sm font-bold inline-block leading-tight ${
                        row.recess.includes('Katta')
                          ? 'text-[#4E724B] bg-[#E2EDE1] px-2 sm:px-2.5 py-1 rounded-full border border-[#4E724B]/25'
                          : row.recess.includes('yakuni')
                          ? 'text-[#0F1E0E] font-extrabold'
                          : 'text-[#3B5239]'
                      }`}>
                        {row.recess}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#4E724B]/20 shadow-apple space-y-5">
              <div className="flex items-center gap-3 pb-2 border-b border-[#4E724B]/15">
                <Calendar className="w-6 h-6 text-[#4E724B]" />
                <h3 className="font-extrabold text-[#0F1E0E] text-lg sm:text-xl">
                  O‘quv choraklari va ta’tillar
                </h3>
              </div>

              <div className="space-y-3">
                {academicQuarters.map((q, idx) => (
                  <div key={idx} className="p-4 bg-[#F2F7F1] rounded-2xl border-2 border-[#4E724B]/20 text-xs sm:text-sm space-y-1.5">
                    <div className="flex justify-between items-center font-bold text-[#182B17]">
                      <span className="font-extrabold text-sm sm:text-base text-[#0F1E0E]">{q.quarter}</span>
                      <span className="font-extrabold text-xs sm:text-sm text-[#4E724B] bg-white px-3 py-1 rounded-full border border-[#4E724B]/25">
                        {q.dates}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-[#3B5239] font-medium pt-1.5 border-t border-[#4E724B]/15">
                      Ta’til: <span className="text-[#0F1E0E] font-extrabold">{q.vacation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Admission Checklist */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#4E724B]/20 shadow-apple space-y-4">
            <h3 className="font-extrabold text-[#0F1E0E] text-lg sm:text-xl">
              1-sinfga qabul uchun talab etiladigan hujjatlar ro‘yxati
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs sm:text-sm">
              {parentsResources[0].details[language].map((docItem, idx) => (
                <div key={idx} className="p-3.5 bg-[#F2F7F1] rounded-2xl flex items-start gap-2.5 border border-[#4E724B]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#4E724B] shrink-0 mt-0.5" />
                  <span className="leading-snug font-semibold text-[#0F1E0E]">{docItem}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          9. ALOQA (CONTACT SECTION)
          ======================================================== */}
      <section id="aloqa" className="px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4E724B]">
              Rasmiy aloqa
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1E0E] tracking-tight">
              {t('home.contactTitle')}
            </h2>
            <p className="text-base sm:text-lg text-[#3B5239] leading-relaxed font-medium">
              Savollaringiz, takliflaringiz yoki murojaatlaringiz bo‘yicha maktab ma’muriyatiga bevosita bog‘laning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#4E724B]/20 shadow-apple space-y-5 text-sm">
                <h3 className="text-lg font-extrabold text-[#0F1E0E] border-b border-[#4E724B]/15 pb-3">
                  Rasmiy ma’lumotlar
                </h3>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#4E724B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F1E0E] block">Manzil:</span>
                    <span className="text-[#3B5239] leading-snug font-medium">{schoolInfo.address[language]}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-[#4E724B]/15">
                  <Phone className="w-5 h-5 text-[#4E724B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F1E0E] block">Telefon:</span>
                    <a href={`tel:${schoolInfo.phone}`} className="text-[#4E724B] font-extrabold text-base hover:underline">
                      {schoolInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-[#4E724B]/15">
                  <Mail className="w-5 h-5 text-[#4E724B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F1E0E] block">Elektron pochta:</span>
                    <a href={`mailto:${schoolInfo.email}`} className="text-[#3B5239] hover:text-[#4E724B] underline font-mono text-xs">
                      {schoolInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-[#4E724B]/15">
                  <Clock className="w-5 h-5 text-[#4E724B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F1E0E] block">Ish tartibi:</span>
                    <span className="text-[#3B5239] font-medium">{schoolInfo.workingHours[language]}</span>
                  </div>
                </div>
              </div>

              {/* Google Map Card */}
              <div className="bg-[#E2EDE1] rounded-3xl p-7 border-2 border-[#4E724B]/30 text-center space-y-3.5">
                <div className="w-12 h-12 rounded-full bg-[#4E724B] text-white font-extrabold text-base flex items-center justify-center mx-auto shadow-apple-sm">
                  36
                </div>
                <div className="text-sm font-bold text-[#0F1E0E]">
                  Namangan shahar 36-maktab
                </div>
                <a
                  href="https://maps.google.com/?q=Namangan+city+school+36"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#F2F7F1] text-[#0F1E0E] font-bold text-xs sm:text-sm rounded-full border border-[#4E724B]/30 shadow-apple-sm transition-all"
                >
                  <span>Google xaritada ko‘rish</span>
                  <ExternalLink className="w-4 h-4 text-[#4E724B]" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border-2 border-[#4E724B]/20 shadow-apple">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F1E0E] mb-1.5">
                Onlayn murojaat yuborish
              </h3>
              <p className="text-xs sm:text-sm text-[#3B5239] mb-7 font-medium">
                Elektron pochta kiritish shart emas, faqat telefon raqamingiz va xabaringizni yozing.
              </p>

              {formStatus === 'success' ? (
                <div className="p-7 bg-[#E2EDE1] border-2 border-[#4E724B]/40 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#4E724B] mx-auto" />
                  <h4 className="font-extrabold text-[#0F1E0E] text-lg">
                    Murojaatingiz qabul qilindi!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#182B17] leading-relaxed max-w-sm mx-auto font-medium">
                    {t('form.successMessage')}
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormStatus('idle')}
                    className="px-6 py-2.5 bg-[#4E724B] text-white text-xs sm:text-sm font-bold rounded-full shadow-apple-sm hover:bg-[#3B5738] transition-colors"
                  >
                    Yana murojaat qoldirish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4" noValidate>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#0F1E0E] mb-1.5">
                      {t('form.fullName')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (formErrors.fullName) setFormErrors((p) => ({ ...p, fullName: '' }));
                      }}
                      placeholder="Masalan: Abdullayev Temur Olimovich"
                      className={`w-full px-4 py-3 text-sm bg-[#F2F7F1] border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4E724B]/30 transition-all font-medium ${
                        formErrors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#4E724B]/25'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#0F1E0E] mb-1.5">
                      {t('form.phone')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="+998 90 123 45 67"
                      className={`w-full px-4 py-3 text-sm bg-[#F2F7F1] border-2 rounded-2xl font-mono focus:outline-none focus:ring-2 focus:ring-[#4E724B]/30 transition-all font-semibold ${
                        formErrors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#4E724B]/25'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#0F1E0E] mb-1.5">
                      {t('form.subject')}
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-[#F2F7F1] border-2 border-[#4E724B]/25 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4E724B]/30 font-medium"
                    >
                      <option value="admission">{t('form.subjectOptions.admission')}</option>
                      <option value="academic">{t('form.subjectOptions.academic')}</option>
                      <option value="clubs">{t('form.subjectOptions.clubs')}</option>
                      <option value="reception">{t('form.subjectOptions.reception')}</option>
                      <option value="general">{t('form.subjectOptions.general')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#0F1E0E] mb-1.5">
                      {t('form.message')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (formErrors.message) setFormErrors((p) => ({ ...p, message: '' }));
                      }}
                      placeholder={t('form.messagePlaceholder')}
                      className={`w-full px-4 py-3 text-sm bg-[#F2F7F1] border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4E724B]/30 transition-all resize-none font-medium ${
                        formErrors.message ? 'border-red-500 bg-red-50/20' : 'border-[#4E724B]/25'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  <p className="text-xs text-[#3B5239] font-medium">
                    {t('form.consent')}
                  </p>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 px-6 bg-[#4E724B] hover:bg-[#3B5738] text-white font-extrabold text-sm sm:text-base rounded-full shadow-apple hover:shadow-apple-hover transition-all flex items-center justify-center gap-2.5 active:scale-[0.99] cursor-pointer disabled:opacity-60"
                  >
                    {formStatus === 'submitting' ? (
                      <span>{t('common.sending')}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>{t('form.submitButton')}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          NEWS DETAIL MODAL - Teleported to document.body via Portal
          ======================================================== */}
      {activeArticle && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 bg-[#0B150A]/85 backdrop-blur-md animate-backdrop-fade overflow-y-auto"
          onClick={() => setActiveArticle(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-7 sm:p-9 shadow-apple-modal border-2 border-[#4E724B]/35 relative my-auto animate-modal-pop"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2.5 bg-[#E2EDE1] hover:bg-[#C8DCC6] rounded-full transition-colors cursor-pointer"
              aria-label="Yopish"
            >
              <X className="w-5 h-5 text-[#0F1E0E]" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#182B17] bg-[#E2EDE1] px-3.5 py-1.5 rounded-full border border-[#4E724B]/30">
              {activeArticle.category}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E0E] leading-tight mt-3 mb-2">
              {activeArticle.title[language]}
            </h3>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#3B5239] border-b border-[#4E724B]/20 pb-3 mb-4 font-semibold">
              <span>{activeArticle.date}</span>
              <span>•</span>
              <span>{activeArticle.author[language]}</span>
            </div>

            <div className="space-y-3.5 text-sm sm:text-base text-[#182B17] leading-relaxed font-medium">
              {activeArticle.content[language].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-[#4E724B]/20 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 bg-[#4E724B] hover:bg-[#3B5738] text-white font-extrabold text-xs sm:text-sm rounded-full cursor-pointer transition-all active:scale-95 shadow-apple-sm"
              >
                {t('common.close')}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* ========================================================
          DOCUMENTS MODAL - Teleported to document.body via Portal
          ======================================================== */}
      {showDocumentsModal && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 bg-[#0B150A]/85 backdrop-blur-md animate-backdrop-fade overflow-y-auto"
          onClick={() => setShowDocumentsModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[88vh] overflow-y-auto p-7 sm:p-9 shadow-apple-modal border-2 border-[#4E724B]/35 relative my-auto animate-modal-pop"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowDocumentsModal(false)}
              className="absolute top-5 right-5 p-2.5 bg-[#E2EDE1] hover:bg-[#C8DCC6] rounded-full transition-colors cursor-pointer"
              aria-label="Yopish"
            >
              <X className="w-5 h-5 text-[#0F1E0E]" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#4E724B] bg-[#E2EDE1] px-3.5 py-1.5 rounded-full border border-[#4E724B]/30">
              Ochiq ma’lumotlar
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E0E] leading-tight mt-2 mb-1">
              Rasmiy me’yoriy hujjatlar va Ustav
            </h3>
            <p className="text-xs sm:text-sm text-[#3B5239] mb-6 font-medium">
              Namangan shahar 36-sonli maktab faoliyatiga oid ochiq me’yoriy hujjatlar ro‘yxati.
            </p>

            <div className="space-y-3.5">
              {schoolDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 sm:p-5 bg-[#F2F7F1] hover:bg-[#E2EDE1] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm border-2 border-[#4E724B]/20 hover:border-[#4E724B]/40 transition-all group/doc"
                >
                  <div className="space-y-1">
                    <span className="font-bold text-xs text-[#4E724B] bg-white px-2.5 py-0.5 rounded-md border border-[#4E724B]/20 inline-block">
                      {doc.fileNumber}
                    </span>
                    <h4 className="font-extrabold text-[#0F1E0E] text-sm sm:text-base leading-snug group-hover/doc:text-[#4E724B] transition-colors">
                      {doc.title[language]}
                    </h4>
                    <span className="text-xs text-[#3B5239] font-medium block">
                      {doc.fileType} • {doc.fileSize} • {doc.publishDate}
                    </span>
                  </div>

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`${doc.title[language]} hujjati yuklab olindi.`);
                    }}
                    className="px-5 py-2.5 bg-[#4E724B] hover:bg-[#3B5738] text-white rounded-full text-xs sm:text-sm font-bold shadow-apple-sm hover:shadow-apple transition-all shrink-0 cursor-pointer text-center self-start sm:self-auto flex items-center gap-1.5 active:scale-95"
                  >
                    <Download className="w-4 h-4 text-white" />
                    <span>Yuklab olish</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
};
