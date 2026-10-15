import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  BookOpen, 
  Target, 
  Compass, 
  Users, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle2,
  ChevronRight,
  School,
  Building,
  UserCheck,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { schoolInfo } from '../data/schoolInfo';
import { SchoolBadge } from '../components/SchoolBadge';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Page Title & Breadcrumb */}
      <div>
        <div className="flex items-center gap-2 text-xs text-mutedText mb-3">
          <Link to="/" className="hover:text-primary transition-colors">Bosh sahifa</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Maktab haqida</span>
        </div>
        <SectionHeader
          badge="Muassasa pasporti"
          title="Namangan shahar 36-sonli umumta’lim maktabi"
          subtitle="Bilim, tarbiya, zamonaviy sharoitlar va davlat ta’lim standartlarini birlashtirgan ta’lim maskani."
        />
      </div>

      {/* Overview & Heritage Bento Grid */}
      <section className="bg-white rounded-3xl border border-black/[0.06] p-6 sm:p-12 shadow-apple">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <SchoolBadge size={64} />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  Umumta’lim muassasasi
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F]">
                  36-sonli maktab
                </h3>
                <p className="text-xs text-[#86868B]">
                  Namangan shahar ta’lim hududi
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
              Namangan shahar 36-sonli umumta’lim maktabi Namangan shahrining gavjum va rivojlanayotgan hududlaridan birida joylashgan bo‘lib, 1420 dan ziyod o‘quvchiga 1-sinfdan 11-sinfgacha sifatli ta’lim berib kelmoqda.
            </p>

            <div className="pt-2">
              <Link
                to="/director"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-full hover:bg-primary-dark transition-all shadow-apple-sm"
              >
                <UserCheck className="w-4 h-4 text-accent" />
                <span>Maktab direktori sahifasiga o‘tish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-50 rounded-2xl border border-black/[0.04] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Building className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="font-extrabold text-[#1D1D1F] text-sm">
                Zamonaviy o‘quv korpusi
              </h4>
              <p className="text-xs text-[#86868B] leading-relaxed">
                48 ta yorug‘ sinf xonasi, zamonaviy laboratoriyalar, kompyuter xonasi va axborot-resurs zali.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-black/[0.04] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="font-extrabold text-[#1D1D1F] text-sm">
                Chuqurlashtirilgan ta’lim
              </h4>
              <p className="text-xs text-[#86868B] leading-relaxed">
                Ingliz tili so‘zlashuv klubi, «Qiziqishdan kasb sari» tibbiyot to‘garagi va fan olimpiadalari.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-black/[0.04] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="font-extrabold text-[#1D1D1F] text-sm">
                Fidoyi pedagoglar
              </h4>
              <p className="text-xs text-[#86868B] leading-relaxed">
                84 dan ziyod oliy va birinchi toifali tajribali o‘qituvchilar jamoasi.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-black/[0.04] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="font-extrabold text-[#1D1D1F] text-sm">
                Xavfsiz va tinch muhit
              </h4>
              <p className="text-xs text-[#86868B] leading-relaxed">
                Doimiy videokuzatuv tizimi, qorovullik xizmati va sanitariya-gigiyena me’yorlari.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-primary to-[#18426d] text-white rounded-3xl p-8 sm:p-10 shadow-apple space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-accent">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Maktabimiz missiyasi
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Har bir o‘quvchiga davlat va jahon standartlariga mos zamonaviy bilim, milliy va umuminsoniy qadriyatlarga asoslangan tarbiya hamda hayotda o‘z o‘rnini topishiga yordam beruvchi kasbiy ko‘nikmalarni berish.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-apple space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F]">
            Kelajak qarashimiz (Vizion)
          </h3>
          <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
            Namangan viloyatidagi eng namunali, innovatsion texnologiyalarga ega, xorijiy tillar va tibbiyot to‘garaklari orqali bitiruvchilari nufuzli oliy ta’lim muassasalariga qabul qilinadigan ilg‘or ta’lim maskaniga aylanish.
          </p>
        </div>
      </section>

      {/* Official State Registry Passport */}
      <section className="bg-white rounded-3xl border border-black/[0.06] p-6 sm:p-10 shadow-apple space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] pb-4">
          <div>
            <h3 className="font-extrabold text-[#1D1D1F] text-base sm:text-lg">
              Davlat reestridagi rasmiy muassasa pasporti
            </h3>
            <p className="text-xs text-[#86868B]">
              Maktabgacha va maktab ta’limi vazirligi hisobidagi ko‘rsatkichlar
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1.5 w-fit">
            <CheckCircle2 className="w-4 h-4" />
            <span>Davlat akkreditatsiyasidan o‘tgan</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
            <span className="text-[#86868B]">To‘liq rasmiy nomi:</span>
            <div className="font-bold text-[#1D1D1F]">{schoolInfo.name[language]}</div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
            <span className="text-[#86868B]">Maktab direktori:</span>
            <div className="font-bold text-[#1D1D1F]">{schoolInfo.principal.name}</div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
            <span className="text-[#86868B]">Bo‘ysunuvchi tashkilot:</span>
            <div className="font-bold text-[#1D1D1F]">Namangan shahar MMTB</div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
            <span className="text-[#86868B]">Rasmiy telefon:</span>
            <div className="font-bold text-[#1D1D1F]">{schoolInfo.phoneFormatted}</div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
            <span className="text-[#86868B]">Elektron pochta:</span>
            <div className="font-bold text-[#1D1D1F] font-mono">{schoolInfo.email}</div>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
            <span className="text-[#86868B]">O‘quvchi sig‘imi:</span>
            <div className="font-bold text-[#1D1D1F]">{schoolInfo.statistics.studentsCount}+ o‘rin</div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to="/director"
          className="p-6 bg-white hover:bg-slate-50 rounded-3xl border border-black/[0.06] shadow-apple-sm transition-all flex items-center justify-between group"
        >
          <div>
            <span className="text-xs font-bold text-secondary uppercase block mb-1">Rahbar</span>
            <h4 className="font-extrabold text-[#1D1D1F] text-base">Maktab direktori va ma’muriyat</h4>
            <p className="text-xs text-[#86868B] mt-0.5">Direktor, zam direktorlar, psixolog va maslahatchilar</p>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link
          to="/#oqituvchilar"
          className="p-6 bg-white hover:bg-slate-50 rounded-3xl border border-black/[0.06] shadow-apple-sm transition-all flex items-center justify-between group"
        >
          <div>
            <span className="text-xs font-bold text-secondary uppercase block mb-1">Pedagoglar</span>
            <h4 className="font-extrabold text-[#1D1D1F] text-base">O‘qituvchilar jamoasi</h4>
            <p className="text-xs text-[#86868B] mt-0.5">Fan kafedralari va toifalar katalogi</p>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  );
};
