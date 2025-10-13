export type Language = 'pl' | 'en';

export interface Translations {
  topBar: {
    logoText: string;
    hero: string;
    projects: string;
    skills: string;
    about: string;
    courses: string;
    languages: string;
    contact: string;
  };
  hero: {
    headline: string;
    description: string;
    scheduleCall: string;
    callMe: string;
  };
  projects: {
    title: string;
    viewLive: string;
    viewCode: string;
    technologies: string;
    achievements: string;
    myRole: string;
  };
  skills: {
    title: string;
    frontend: string;
    mobile: string;
    backend: string;
    testing: string;
    ai: string;
    payments: string;
    design: string;
    other: string;
  };
  about: {
    title: string;
    content: string;
  };
  courses: {
    title: string;
    list: string[];
  };
  languages: {
    title: string;
    list: Array<{
      name: string;
      level: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
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
      skills: 'Umiejętności',
      about: 'O mnie',
      courses: 'Kursy',
      languages: 'Języki',
      contact: 'Kontakt',
    },
    hero: {
      headline: 'End‑to‑end Frontend. Płatności. Skalowalność.',
      description:
        'Frontend developer budujący end‑to‑end produkty web i mobile: od architektury i UX, przez integracje płatności, po testy E2E i skalowanie; współtwórca Kitopay (55k+ MAU, ~1M USD/rok), RightBite Flex (unikat w UAE, driver akwizycji) i Kitopi App (lojalność + zamówienia)',
      scheduleCall: 'Umów Rozmowę',
      callMe: 'Zadzwoń',
    },
    projects: {
      title: 'Projekty',
      viewLive: 'Zobacz Live',
      viewCode: 'Zobacz Kod',
      technologies: 'Technologie:',
      achievements: 'Osiągnięcia:',
      myRole: 'Moja rola:',
    },
    skills: {
      title: 'Umiejętności',
      frontend: 'Frontend',
      mobile: 'Mobile',
      backend: 'Backend',
      testing: 'Testowanie',
      ai: 'AI',
      payments: 'Płatności',
      design: 'Design',
      other: 'Inne',
    },
    about: {
      title: 'O mnie',
      content:
        'Frontend Developer z wieloletnim doświadczeniem w budowaniu aplikacji web i mobile. Specjalizuję się w dostarczaniu produktów end-to-end – od architektury i rozwoju po optymalizację i skalowanie.\n\nWspółtworzyłem aplikacje obsługujące dziesiątki tysięcy użytkowników, w tym Kitopay (55k+ aktywnych użytkowników, generując ~1M USD rocznego zysku), system RightBite Flex (unikalny w UAE, przyciągający nowych klientów) oraz Kitopi App (platforma zamówień i lojalności cross-brand). Wykwalifikowany w złożonych integracjach płatności i optymalizacji procesów (obniżyłem koszty Jira o 4k USD/miesiąc, skróciłem czas integracji brandów o 80%). Biegły w wykorzystywaniu narzędzi AI do zwiększania produktywności i jakości kodu.\n\nObecnie poszukuję roli frontend developera (zdalnie lub hybrydowo), idealnie z możliwościami współtworzenia rozwoju mobile (Flutter, React Native) i designu produktu. Moim długoterminowym celem jest rozwój jako M-shape developer poprzez łączenie silnej ekspertyzy frontend z umiejętnościami mobile i design.',
    },
    courses: {
      title: 'Kursy',
      list: [
        "Figma UI UX Design Essentials '25",
        "React Query - React Server State Management '24",
        "NEXT 13 Masters '23",
        "EPAM end Webinar '20",
        "Codebrainers Fullstack Bootcamp '19",
      ],
    },
    languages: {
      title: 'Języki',
      list: [
        { name: 'Angielski', level: 'C2' },
        { name: 'Polski', level: 'Native' },
      ],
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Skontaktuj się ze mną',
      email: 'Email',
      phone: 'Telefon',
      location: 'Lokalizacja',
      linkedin: 'LinkedIn',
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
      skills: 'Skills',
      about: 'About',
      courses: 'Courses',
      languages: 'Languages',
      contact: 'Contact',
    },
    hero: {
      headline: 'End‑to‑end Frontend. Payments. Scale.',
      description:
        'Frontend developer building end‑to‑end web and mobile products: from architecture and UX, through payment integrations, to E2E testing and scaling; co‑creator of Kitopay (55k+ MAU, ~1M USD/year), RightBite Flex (unique in the UAE, acquisition driver), and Kitopi App (loyalty + ordering)',
      scheduleCall: 'Schedule A Call',
      callMe: 'Call Me',
    },
    projects: {
      title: 'Projects',
      viewLive: 'View Live',
      viewCode: 'View Code',
      technologies: 'Technologies:',
      achievements: 'Achievements:',
      myRole: 'My Role:',
    },
    skills: {
      title: 'Skills',
      frontend: 'Frontend',
      mobile: 'Mobile',
      backend: 'Backend',
      testing: 'Testing',
      ai: 'AI',
      payments: 'Payments',
      design: 'Design',
      other: 'Other',
    },
    about: {
      title: 'About Me',
      content:
        'Frontend Developer with years of experience in building web and mobile applications. Specialized in delivering end-to-end products – from architecture and development to optimization and scaling.\n\nI co-created apps serving tens of thousands of users, including Kitopay (55k+ active users, generating ~1M USD yearly profit), the RightBite Flex system (unique in the UAE, attracting new customers), and the Kitopi App (cross-brand food ordering & loyalty platform). Skilled in complex payment integrations and process optimization (cut Jira costs by 4k USD/month, reduced brand integration time by 80%). Proficient in leveraging AI tools to boost productivity and code quality.\n\nI am currently looking for a frontend developer role (remote or hybrid), ideally with opportunities to contribute to mobile development (Flutter, React Native) and product design. My long-term goal is to grow as a M-shape developer by combining strong frontend expertise with mobile and design skills.',
    },
    courses: {
      title: 'Courses',
      list: [
        "Figma UI UX Design Essentials '25",
        "React Query - React Server State Management '24",
        "NEXT 13 Masters '23",
        "EPAM end Webinar '20",
        "Codebrainers Fullstack Bootcamp '19",
      ],
    },
    languages: {
      title: 'Languages',
      list: [
        { name: 'English', level: 'C2' },
        { name: 'Polish', level: 'Native' },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with me',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      linkedin: 'LinkedIn',
    },
    common: {
      language: 'Language',
    },
  },
};
