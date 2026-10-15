import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  HeartPulse, 
  Cpu, 
  Calculator, 
  Trophy, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { educationPrograms } from '../data/educationData';

export const EducationPage: React.FC = () => {
  const { language, t } = useLanguage();

  const getIcon = (category: string) => {
    switch (category) {
      case 'languages':
        return Globe;
      case 'medical':
        return HeartPulse;
      case 'stem':
        return Cpu;
      case 'sports':
        return Trophy;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header and Breadcrumbs */}
      <div>
        <div className="flex items-center gap-2 text-xs text-mutedText mb-3">
          <Link to="/" className="hover:text-primary transition-colors">Bosh sahifa</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Ta’lim va imkoniyatlar</span>
        </div>
        <SectionHeader
          badge="O‘quv jarayoni va to‘garaklar"
          title="Ta’lim va imkoniyatlar — kelajak poydevori"
          subtitle="Maktabimizda akademik fanlar bilan bir qatorda chet tillari, tibbiyot, IT va sport to‘garaklari o‘quvchilar uchun keng imkoniyatlar eshigini ochadi."
        />
      </div>

      {/* Flagship Program 1: English Language Deep Focus */}
      <section className="bg-gradient-to-br from-primary to-[#1d4770] rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/20 text-accent border border-accent/30">
            <Globe className="w-4 h-4" />
            <span>Xorijiy tillar chuqurlashtirilgan ta’limi</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
            Ingliz tilida erkin muloqot va xalqaro metodika
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed">
            Maktabimizda o‘quvchilarning ingliz tilida faqat grammatik qoidalarni yodlab qolmasdan, balki erkin so‘zlashish, jonli muloqot qilish va xalqaro darajadagi testlarga (IELTS, CEFR) mustaqil tayyorlanishlari uchun maxsus interaktiv muhit yaratilgan.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white/10 rounded-2xl border border-white/15 space-y-1">
              <div className="font-bold text-accent text-sm">Speaking Club & Muloqot</div>
              <p className="text-[11px] text-slate-200 leading-relaxed">
                Har hafta o‘quvchilar chet tilida erkin munozaralar va taqdimotlar o‘tkazadilar.
              </p>
            </div>
            <div className="p-4 bg-white/10 rounded-2xl border border-white/15 space-y-1">
              <div className="font-bold text-accent text-sm">Xorijiy mutaxassislar tajribasi</div>
              <p className="text-[11px] text-slate-200 leading-relaxed">
                Ingliz tili darslarida taklif etilgan xorijiy o‘qituvchilar bilan jonli so‘zlashuv darslari yo‘lga qo‘yilmoqda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Program 2: "Qiziqishdan kasb sari" (Medical & Healthcare Focus) */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
              <HeartPulse className="w-4 h-4 text-emerald-600" />
              <span>«Qiziqishdan kasb sari» to‘garagi</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary leading-tight">
              Tibbiyot va tabiiy fanlar bo‘yicha erta kasbiy tayyorgarlik
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              O‘z kelajagini shifokorlik, biotexnologiya va tibbiy soha bilan bog‘lashni niyat qilgan o‘quvchilarimiz uchun amaliy to‘garak tashkil etilgan. Bu to‘garakda nazariya bevosita amaliy mashqlar bilan boyitiladi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <div className="font-bold text-slate-800">Birinchi yordam ko‘rsatish</div>
                <p className="text-mutedText text-[11px]">Favqulodda vaziyatlarda hayotni saqlab qolish asoslari</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <div className="font-bold text-slate-800">Biologiya laboratoriyasi</div>
                <p className="text-mutedText text-[11px]">Mikroskoplar va anatomik maketlar yordamida izlanish</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <div className="font-bold text-slate-800">Shifokorlar bilan uchrashuv</div>
                <p className="text-mutedText text-[11px]">Tajribali soha mutaxassislari bilan ochiq davra suhbatlari</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <div className="font-bold text-slate-800">Sog‘lom turmush tarzi</div>
                <p className="text-mutedText text-[11px]">Sanitariya-gigiyena qoidalarini amalda qo‘llash</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-emerald-900 text-white rounded-2xl p-6 space-y-4 shadow-md">
            <h3 className="font-bold text-base text-emerald-100">
              To‘garak xulosasi
            </h3>
            <p className="text-xs text-emerald-200 leading-relaxed">
              To‘garak a’zolari o‘tgan o‘quv yillarida tibbiyot kollejlari va oliygohlariga muvaffaqiyatli yo‘llanma oldilar.
            </p>
            <div className="pt-2 border-t border-emerald-800 text-[11px] text-emerald-300">
              Qabul: Har o‘quv yili sentabr oyida boshlanadi.
            </div>
          </div>
        </div>
      </section>

      {/* All Extracurricular Programs List */}
      <section className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-primary">
          Barcha to‘garaklar va fakultativ mashg‘ulotlar ro‘yxati
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationPrograms.map((prog) => {
            const Icon = getIcon(prog.category);
            return (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/5 text-primary rounded-xl">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                      {prog.badge[language]}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-mainText text-base leading-snug mb-1">
                    {prog.title[language]}
                  </h4>

                  <p className="text-xs text-secondary font-medium mb-3">
                    {prog.subtitle[language]}
                  </p>

                  <p className="text-xs text-mutedText leading-relaxed mb-4">
                    {prog.description[language]}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                    {prog.features[language].slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-mutedText">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{prog.schedule[language]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>Auditoriya: {prog.gradeLevels}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
