export type Language = 'pl' | 'en'

export interface Translations {
  topBar: {
    logoText: string
    hero: string
    projects: string
    skills: string
    about: string
    courses: string
    languages: string
    contact: string
  }
  hero: {
    headline: string
    subheadline: string
    description: string
    achievements: Array<{ text: string; details: string }>
    scheduleCall: string
    callMe: string
  }
  projects: {
    title: string
    viewLive: string
    viewCode: string
    technologies: string
    achievements: string
    myRole: string
  }
  skills: {
    title: string
    frontend: string
    mobile: string
    backend: string
    testing: string
    ai: string
    payments: string
    design: string
    other: string
  }
  about: {
    title: string
    content: string
  }
  courses: {
    title: string
    list: string[]
  }
  languages: {
    title: string
    list: Array<{
      name: string
      level: string
    }>
  }
  contact: {
    title: string
    subtitle: string
    email: string
    phone: string
    location: string
    linkedin: string
  }
  common: {
    language: string
  }
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
      headline: 'Ekspert Frontend Developer',
      subheadline: 'Budowanie skalowalnych produktów web i mobile',
      description:
        'Frontend Developer tworzący skalowalne aplikacje webowe w React/TypeScript i funkcjonalności mobilne we Flutterze. Dostarczam produkty obsługujące dziesiątki tysięcy użytkowników i osiągam mierzalne rezultaty biznesowe.',
      achievements: [
        {
          text: '4+ lata doświadczenia',
          details:
            'Ponad 4 lata komercyjnego doświadczenia w budowaniu skalowalnych aplikacji webowych w React/TypeScript oraz dowożeniu funkcji end-to-end (architektura → implementacja → optymalizacja).',
        },
        {
          text: '55k+ aktywnych użytkowników',
          details:
            'Kitopay obsługuje 55k+ aktywnych użytkowników i ~200k odsłon miesięcznie; dowiozłem kluczowe flow: menu z QR → checkout, synchronizacja z POS, dzielenie rachunku i napiwki.',
        },
        {
          text: '1M+ USD rocznego zysku',
          details:
            'Wdrożenie Kitopay we wszystkich lokalizacjach stacjonarnych Kitopi; po wprowadzeniu opłaty serwisowej produkt generuje ok. 1 mln USD rocznie.',
        },
        {
          text: '80% szybsze integracje',
          details:
            'Stworzyłem narzędzie w JavaScript, które skróciło integrację marki o ok. 80% (z ~10 min do ~2 min) i usprawniło onboarding.',
        },
      ],
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
      headline: 'Expert Frontend Developer',
      subheadline: 'Building scalable web & mobile products',
      description:
        'Frontend Developer building scalable web apps in React/TS and mobile features in Flutter. I ship products serving tens of thousands of users and deliver measurable business outcomes',
      achievements: [
        {
          text: '4+ years of experience',
          details:
            '4+ years of commercial experience building scalable web apps in React/TypeScript and shipping end-to-end features (architecture → implementation → optimization).',
        },
        {
          text: '55k+ active users',
          details:
            'Kitopay serves 55k+ active users and ~200k monthly views; I delivered core flows like QR menu → checkout, POS sync, bill splitting, and tipping.',
        },
        {
          text: '1M+ USD yearly profit',
          details:
            'Launched Kitopay across Kitopi physical locations; after introducing a service fee, it contributes ~1M USD in yearly profit.',
        },
        {
          text: '80% faster integrations',
          details:
            'Built JavaScript tooling that cut brand integration time by ~80% (from ~10 min to ~2 min) and improved onboarding efficiency.',
        },
      ],
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
}
