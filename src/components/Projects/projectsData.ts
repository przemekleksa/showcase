export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  role: string;
  screenshots?: string[];
  technologies: string[];
  achievements: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubHidden?: boolean;
}

export const projects: Project[] = [
  {
    id: 'kitopay',
    name: 'Kitopay',
    shortDescription:
      'Dine-in payment app with QR code scanning and instant bill payment.',
    description:
      'Dine-in payment app enabling restaurant customers to scan QR codes, view menus, and pay bills instantly. Features bill splitting and tipping for staff. Integrated with restaurant POS systems for real-time synchronization.',
    role: 'Developed the web app enabling QR code scanning and instant bill payment. Implemented bill splitting and tipping features for waiting staff. Integrated the app with restaurant POS systems for real-time synchronization of orders and payments.',
    screenshots: [
      '/src/assets/images/projects/kitopipay/main.jpg',
      '/src/assets/images/projects/kitopipay/menu.jpg',
      '/src/assets/images/projects/kitopipay/split.jpg',
      '/src/assets/images/projects/kitopipay/split1.jpg',
      '/src/assets/images/projects/kitopipay/customTip.jpg',
      '/src/assets/images/projects/kitopipay/list.jpg',
    ],
    technologies: [
      'React 18',
      'TypeScript',
      'TanStack React Query',
      'Context API',
      'Vite',
      'Playwright',
      'Vitest',
    ],
    achievements: [
      'Successfully launched across all Kitopi physical locations',
      'Processed 200+ transactions during the first weekend',
      'Contributes ~1M USD in yearly profit (1 AED or 1% above 10 AED service fee)',
      'Currently has 200,000+ monthly views and 55,000 active users',
    ],
    liveUrl: 'https://kitopay.com',
    githubUrl: 'https://github.com/kitopay',
    githubHidden: true,
  },
  {
    id: 'rightbite',
    name: 'RightBite',
    shortDescription:
      'Meal plans web app with unique Flex functionality for meal swapping.',
    description:
      'Meal plans responsive web app with unique Flex functionality - customers can replace meals with alternatives from other diet plans or healthy Kitopi restaurants. Includes admin tools for staff management.',
    role: 'Built the storefront web app for meal-plan business, allowing customers to order meal plans, schedule consultations with dietitians, edit delivery days, and swap meals. Worked on the RightBite mobile app, introducing On-Demand/Flex functionality. Developed the RightBite Admin app, providing staff with tools to manage customer settings, adjust meal plans, book consultations, and change delivery addresses.',
    screenshots: [
      '/src/assets/images/projects/rightBite/main.jpg',
      '/src/assets/images/projects/rightBite/secondary.jpg',
      '/src/assets/images/projects/rightBite/meals.jpg',
    ],
    technologies: [
      'Next.js',
      'React 19',
      'TypeScript',
      'Flutter',
      'Dart',
      'Bloc',
      'Firebase',
      'Contentful',
      'Vitest',
      'Cypress',
      'MUI',
      'Playwright',
      'Sentry',
    ],
    achievements: [
      'Introduced Flex functionality in the RightBite mobile app',
      'Unique service in the UAE, major driver of new customer acquisition',
      'Built comprehensive admin tools for staff management',
      'Integrated with multiple diet plans and healthy restaurants',
    ],
    liveUrl: 'https://rightbite.com',
    githubUrl: 'https://github.com/rightbite',
    githubHidden: true,
  },
  {
    id: 'kitopi-app',
    name: 'Kitopi App',
    shortDescription:
      'Cross-brand food ordering and rewards platform for iOS and Android.',
    description:
      'Cross-brand food ordering and rewards platform available on iOS and Android. Features optimized split payments, digital menu for multiple restaurant brands, and scan-to-earn loyalty program for dine-in receipts.',
    role: 'Contributed to the development of the Kitopi mobile app, a cross-brand food ordering and rewards platform. Improved and optimized split payments, enhancing the checkout and bill-splitting experience. Participated in the implementation of the digital menu, enabling customers to seamlessly browse and order from multiple Kitopi restaurant brands. Worked on the scan-to-earn loyalty program for dine-in receipts.',

    technologies: ['Flutter', 'Dart', 'Firebase', 'Bloc'],
    achievements: [
      'Attracted 5000 new users and generated 140,000 AED in additional revenue',
      'Userbase grew and is currently over 200k',
      'Improved and optimized split payments for better checkout experience',
      'Implemented scan-to-earn loyalty program for dine-in receipts',
    ],
    liveUrl: 'https://kitopi.com',
    githubUrl: 'https://github.com/kitopi',
    githubHidden: true,
  },
  {
    id: 'skosweb',
    name: 'SKOSWeb',
    shortDescription:
      'Multi-brand meal aggregator with multi-tenant architecture.',
    description:
      'Multi-brand meal aggregator web app allowing customers to select meals from various brands with single delivery fee. Multi-tenant architecture enabling each tenant to sell products from associated brands. Includes comprehensive CMS for staff management.',
    role: 'Developed a multi-brand meal aggregator web app, allowing customers to select meals from various brands and pay a single delivery fee across them. Designed the app to support multi-tenant architecture, enabling each tenant to sell its own products and/or products from associated brands. Played a key role in building the SKOSWeb CMS app, where staff can create and configure tenants, manage banners, brands, menus, playlists, tags, categories, cashback values, and more.',

    technologies: ['React', 'Redux', 'Jest', 'Cypress', 'Material-UI'],
    achievements: [
      'Built multi-tenant architecture supporting multiple brands',
      'Developed comprehensive CMS for staff management',
      'Integrated systems for consistency across tenant data',
      'Enabled single delivery fee across multiple brands',
    ],
    liveUrl: 'https://skosweb.com',
    githubUrl: 'https://github.com/skosweb',
    githubHidden: true,
  },
  {
    id: 'kitopi-rewards',
    name: 'Kitopi Rewards',
    shortDescription:
      'Landing page for cashback redemption without mobile app.',
    description:
      'Landing page for customers who wanted to claim their cashback but did not have the Kitopi mobile app. Simple, focused design to encourage app downloads and cashback redemption.',
    role: 'Created a landing page displayed to customers who wanted to claim their cashback but did not have the Kitopi mobile app. Designed a simple, focused interface to encourage app downloads and facilitate cashback redemption process.',

    technologies: ['React', 'TypeScript'],
    achievements: [
      'Created focused landing page for cashback redemption',
      'Encouraged app downloads for customers without mobile app',
      'Simple and effective user experience',
      'Integrated with Kitopi rewards system',
    ],
    liveUrl: 'https://kitopi.com/rewards',
    githubUrl: 'https://github.com/kitopi/rewards',
    githubHidden: true,
  },
  {
    id: 'brand-lp',
    name: 'Brand LP',
    shortDescription:
      'Landing page for brand transition from web to mobile app.',
    description:
      'Landing page designed to redirect customers of a brand transitioning from web platform to mobile app. Serves as an advertisement and smooth transition tool for brand migration.',
    role: 'Designed a landing page to redirect customers of a brand transitioning from a web platform to a mobile app, essentially serving as an advertisement. Created a smooth transition experience to encourage mobile app adoption during the platform migration.',

    technologies: ['React', 'TypeScript'],
    achievements: [
      'Created transition landing page for brand migration',
      'Smooth redirect from web to mobile app',
      'Effective advertisement for mobile app adoption',
      'Seamless user experience during platform transition',
    ],
    liveUrl: 'https://brand-lp.com',
    githubUrl: 'https://github.com/brand-lp',
    githubHidden: true,
  },
];
