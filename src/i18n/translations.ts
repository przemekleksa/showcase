export type Language = 'pl' | 'en';

export interface Translations {
  topBar: {
    logoText: string;
    pricing: string;
    newsletter: string;
    scheduleCall: string;
  };
  hero: {
    headline: string;
    description: string;
    scheduleCall: string;
  };
  common: {
    language: string;
  };
}

export const translations: Record<Language, Translations> = {
  pl: {
    topBar: {
      logoText: 'Przemysław Leksa',
      pricing: 'Cennik',
      newsletter: 'Newsletter',
      scheduleCall: 'Umów Rozmowę',
    },
    hero: {
      headline: 'End‑to‑end Frontend. Płatności. Skalowalność.',
      description:
        'Frontend developer budujący end‑to‑end produkty web i mobile: od architektury i UX, przez integracje płatności (Apple/Google Pay, Checkout, MoneyHash), po testy E2E i skalowanie; współtwórca Kitopay (55k+ MAU, ~1M USD/rok), RightBite Flex (unikat w UAE, driver akwizycji) i Kitopi App (lojalność + zamówienia)',
      scheduleCall: 'Umów Rozmowę',
    },
    common: {
      language: 'Język',
    },
  },
  en: {
    topBar: {
      logoText: 'Przemysław Leksa',
      pricing: 'Pricing',
      newsletter: 'Newsletter',
      scheduleCall: 'Schedule A Call',
    },
    hero: {
      headline: 'End‑to‑end Frontend. Payments. Scale.',
      description:
        'Frontend developer building end‑to‑end web and mobile products: from architecture and UX, through payment integrations (Apple/Google Pay, Checkout, MoneyHash), to E2E testing and scaling; co‑creator of Kitopay (55k+ MAU, ~1M USD/year), RightBite Flex (unique in the UAE, acquisition driver), and Kitopi App (loyalty + ordering)',
      scheduleCall: 'Schedule A Call',
    },
    common: {
      language: 'Language',
    },
  },
};
