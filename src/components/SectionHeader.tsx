import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  className = '',
  action,
}) => {
  return (
    <div
      className={`mb-8 sm:mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'flex flex-col md:flex-row md:items-end md:justify-between gap-4'} ${className}`}
    >
      <div className={centered ? 'space-y-3' : 'max-w-3xl space-y-2'}>
        {badge && (
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-secondary/10 text-secondary border border-secondary/20 ${centered ? 'mx-auto' : ''}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span>{badge}</span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-mutedText leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
