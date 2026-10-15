import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, User, HelpCircle, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactFormProps {
  initialSubject?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialSubject = '', onSuccess }) => {
  const { language, t } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [subject, setSubject] = useState(initialSubject || 'admission');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Phone input formatter for Uzbekistan format: +998 90 123 45 67
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('+998')) {
      val = '+998 ';
    }
    setPhone(val);
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim() || fullName.trim().length < 3) {
      newErrors.fullName = t('form.errorRequired');
    }

    // Phone validation for Uzbekistan (+998 followed by 9 digits)
    const rawDigits = phone.replace(/\D/g, '');
    if (rawDigits.length < 12) {
      newErrors.phone = t('form.errorPhone');
    }

    if (!message.trim() || message.trim().length < 10) {
      newErrors.message = t('form.errorRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('submitting');

    // Simulate reliable submission (client-side mock with safe storage simulation)
    setTimeout(() => {
      try {
        const storedSubmissions = JSON.parse(localStorage.getItem('namangan36_inquiries') || '[]');
        storedSubmissions.push({
          id: Date.now(),
          fullName,
          phone,
          subject,
          message,
          date: new Date().toISOString(),
        });
        localStorage.setItem('namangan36_inquiries', JSON.stringify(storedSubmissions));

        setStatus('success');
        setFullName('');
        setPhone('+998 ');
        setMessage('');
        if (onSuccess) onSuccess();
      } catch {
        setStatus('error');
      }
    }, 800);
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-4">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
          {t('common.success')}!
        </h3>
        <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
          {t('form.successMessage')}
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
        >
          Yana boshqa murojaat yuborish
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-xs font-bold text-mainText uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
        >
          <User className="w-3.5 h-3.5 text-secondary" />
          <span>{t('form.fullName')}</span>
          <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            if (errors.fullName) setErrors(prev => ({ ...prev, fullName: '' }));
          }}
          placeholder={t('form.fullNamePlaceholder')}
          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-xl shadow-xs transition-all focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none ${
            errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
          }`}
          required
        />
        {errors.fullName && (
          <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 shrink-0" />
            <span>{errors.fullName}</span>
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-bold text-mainText uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-secondary" />
          <span>{t('form.phone')}</span>
          <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="+998 90 123 45 67"
          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-xl font-mono shadow-xs transition-all focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none ${
            errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
          }`}
          required
        />
        {errors.phone ? (
          <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 shrink-0" />
            <span>{errors.phone}</span>
          </p>
        ) : (
          <p className="mt-1 text-[10px] text-mutedText">
            Format: +998 (operator kodi) raqam
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-bold text-mainText uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
        >
          <HelpCircle className="w-3.5 h-3.5 text-secondary" />
          <span>{t('form.subject')}</span>
        </label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl shadow-xs transition-all focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none cursor-pointer"
        >
          <option value="admission">{t('form.subjectOptions.admission')}</option>
          <option value="academic">{t('form.subjectOptions.academic')}</option>
          <option value="clubs">{t('form.subjectOptions.clubs')}</option>
          <option value="reception">{t('form.subjectOptions.reception')}</option>
          <option value="general">{t('form.subjectOptions.general')}</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold text-mainText uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5 text-secondary" />
          <span>{t('form.message')}</span>
          <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
          }}
          placeholder={t('form.messagePlaceholder')}
          className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-xl shadow-xs transition-all focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none resize-none ${
            errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
          }`}
          required
        />
        {errors.message && (
          <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 shrink-0" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Privacy note */}
      <p className="text-[11px] text-mutedText leading-relaxed">
        {t('form.consent')}
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3 px-5 bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow hover:shadow-md flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-60 cursor-pointer"
      >
        {status === 'submitting' ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>{t('common.sending')}</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-accent" />
            <span>{t('form.submitButton')}</span>
          </>
        )}
      </button>
    </form>
  );
};
