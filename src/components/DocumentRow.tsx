import React, { useState } from 'react';
import { FileText, Download, Calendar, CheckCircle2 } from 'lucide-react';
import { SchoolDocument } from '../data/documentsData';
import { useLanguage } from '../context/LanguageContext';

interface DocumentRowProps {
  doc: SchoolDocument;
}

export const DocumentRow: React.FC<DocumentRowProps> = ({ doc }) => {
  const { language, t } = useLanguage();
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      // Simulate accessible document download
      const element = document.createElement('a');
      const file = new Blob([
        `NAMANGAN SHAHAR 36-SONLI UMUMTA'LIM MAKTABI\n\nRASMIY HUJJAT: ${doc.title.uz}\nHujjat raqami: ${doc.fileNumber}\nSana: ${doc.publishDate}\n\nUshbu hujjat maktabning rasmiy portalidan yuklab olindi.`
      ], { type: 'text/plain;charset=utf-8' });
      element.href = URL.createObjectURL(file);
      element.download = `${doc.id}-${doc.fileNumber.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 600);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 p-4 sm:p-5 hover:border-slate-300 transition-all shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-start gap-3.5 min-w-0">
        <div className="p-3 bg-primary/5 text-primary rounded-xl shrink-0 mt-0.5">
          <FileText className="w-5 h-5 text-primary" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-[10px] font-bold font-mono text-secondary bg-secondary/10 px-2 py-0.5 rounded">
              {doc.fileNumber}
            </span>
            <span className="text-[10px] font-semibold text-mutedText flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              <span>{doc.publishDate}</span>
            </span>
            <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>{t('common.officialStatus')}</span>
            </span>
          </div>

          <h3 className="font-bold text-mainText text-sm sm:text-base leading-snug line-clamp-2">
            {doc.title[language]}
          </h3>

          <div className="flex items-center gap-3 mt-1 text-[11px] text-mutedText">
            <span className="font-semibold text-slate-700">{doc.fileType}</span>
            <span>•</span>
            <span>{doc.fileSize}</span>
          </div>
        </div>
      </div>

      <div className="shrink-0 flex items-center gap-2 self-end sm:self-center">
        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary/5 hover:bg-primary hover:text-white text-primary text-xs font-bold rounded-lg transition-all border border-primary/20 hover:border-transparent active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{downloading ? 'Yuklanmoqda...' : t('common.download')}</span>
        </button>
      </div>
    </div>
  );
};
