import React from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ProgramsSection } from './components/sections/ProgramsSection';
import { AboutAmitSir } from './components/sections/AboutAmitSir';
import { FacilitiesSection } from './components/sections/FacilitiesSection';
import { FacultySection } from './components/sections/FacultySection';
import { GallerySection } from './components/sections/GallerySection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { BranchesSection } from './components/sections/BranchesSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { siteConfig } from './config/site-config';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flexGrow: 1 }}>
          {siteConfig.sectionVisibility.hero && <HeroSection />}
          {siteConfig.sectionVisibility.programs && <ProgramsSection />}
          {siteConfig.sectionVisibility.aboutOwner && <AboutAmitSir />}
          {siteConfig.sectionVisibility.facilities && <FacilitiesSection />}
          {siteConfig.sectionVisibility.faculty && <FacultySection />}
          {siteConfig.sectionVisibility.gallery && <GallerySection />}
          {siteConfig.sectionVisibility.parentReviews && <ReviewsSection />}
          {siteConfig.sectionVisibility.branches && <BranchesSection />}
          {siteConfig.sectionVisibility.enquiryForm && <ContactSection />}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
