import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DirectorPage } from './pages/DirectorPage';
import { TeachersPage } from './pages/TeachersPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { EducationPage } from './pages/EducationPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { ParentsPage } from './pages/ParentsPage';
import { ContactPage } from './pages/ContactPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { GalleryPage } from './pages/GalleryPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Helper component to scroll to top or anchor on every route transition
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 64;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth',
          });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-schoolBg text-mainText selection:bg-accent/30 selection:text-primary">
          <Navbar />
          <main className="flex-1 w-full">
            <Routes>
              {/* Main Landing & Dedicated Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/director" element={<DirectorPage />} />
              <Route path="/leadership" element={<DirectorPage />} />

              {/* Sequential Sub-pages & Direct Links */}
              <Route path="/teachers" element={<TeachersPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsDetailPage />} />
              <Route path="/parents" element={<ParentsPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Transparency & Gallery */}
              <Route path="/documents" element={<DocumentsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />

              {/* Catch-all 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
