export type Language = 'pl' | 'en';

export interface Translations {
  topBar: {
    logoText: string;
    hero: string;
    projects: string;
    impact: string;
    skills: string;
    about: string;
    contact: string;
  };
  hero: {
    headline: string;
    description: string;
    scheduleCall: string;
  };
  projects: {
    title: string;
    viewLive: string;
    viewCode: string;
    technologies: string;
    achievements: string;
    myRole: string;
  };
  common: {
    language: string;
  };
}

export const translations: Record<Language, Translations> = {
  pl: {
    topBar: {
      logoText: 'Przemysław Leksa',
      hero: 'Start',
      projects: 'Projekty',
      impact: 'Wpływ',
      skills: 'Umiejętności',
      about: 'O mnie',
      contact: 'Kontakt',
    },
    hero: {
      headline: 'End‑to‑end Frontend. Płatności. Skalowalność.',
      description:
        'Frontend developer budujący end‑to‑end produkty web i mobile: od architektury i UX, przez integracje płatności (Apple/Google Pay, Checkout, MoneyHash), po testy E2E i skalowanie; współtwórca Kitopay (55k+ MAU, ~1M USD/rok), RightBite Flex (unikat w UAE, driver akwizycji) i Kitopi App (lojalność + zamówienia)',
      scheduleCall: 'Umów Rozmowę',
    },
    projects: {
      title: 'Projekty',
      viewLive: 'Zobacz Live',
      viewCode: 'Zobacz Kod',
      technologies: 'Technologie:',
      achievements: 'Osiągnięcia:',
      myRole: 'Moja rola:',
    },
    common: {
      language: 'Język',
    },
  },
  en: {
    topBar: {
      logoText: 'Przemysław Leksa',
      hero: 'Home',
      projects: 'Projects',
      impact: 'Impact',
      skills: 'Skills',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      headline: 'End‑to‑end Frontend. Payments. Scale.',
      description:
        'Frontend developer building end‑to‑end web and mobile products: from architecture and UX, through payment integrations (Apple/Google Pay, Checkout, MoneyHash), to E2E testing and scaling; co‑creator of Kitopay (55k+ MAU, ~1M USD/year), RightBite Flex (unique in the UAE, acquisition driver), and Kitopi App (loyalty + ordering)',
      scheduleCall: 'Schedule A Call',
    },
    projects: {
      title: 'Projects',
      viewLive: 'View Live',
      viewCode: 'View Code',
      technologies: 'Technologies:',
      achievements: 'Achievements:',
      myRole: 'My Role:',
    },
    common: {
      language: 'Language',
    },
  },
};
