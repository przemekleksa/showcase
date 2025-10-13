export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
  icon: string;
}

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'frontend',
    skills: [
      'React',
      'Next.js',
      'React Query',
      'Redux',
      'TypeScript',
      'Vite',
      'JavaScript',
      'MUI',
      'Tailwind',
    ],
    icon: '⚛️',
  },
  {
    id: 'mobile',
    name: 'mobile',
    skills: ['Flutter', 'Dart', 'Bloc', 'React Native'],
    icon: '📱',
  },
  {
    id: 'backend',
    name: 'backend',
    skills: ['Firebase', 'AWS Lambda', 'REST API', 'Headless CMS'],
    icon: '🔧',
  },
  {
    id: 'testing',
    name: 'testing',
    skills: ['Vitest', 'Jest', 'Playwright', 'Cypress'],
    icon: '🧪',
  },
  {
    id: 'ai',
    name: 'ai',
    skills: [
      'Cursor',
      'Kiro',
      'GitHub Copilot',
      'Gemini CLI',
      'ChatGPT',
      'Perplexity',
      'Granola',
    ],
    icon: '🤖',
  },
  {
    id: 'payments',
    name: 'payments',
    skills: ['Checkout', 'Apple Pay', 'Google Pay', 'MoneyHash'],
    icon: '💳',
  },
  {
    id: 'design',
    name: 'design',
    skills: ['Figma'],
    icon: '🎨',
  },
  {
    id: 'other',
    name: 'other',
    skills: [
      'Git',
      'GitLab',
      'GitHub',
      'CI/CD',
      'Sentry',
      'Jira',
      'Swagger',
      'SEO',
      'BitBucket',
    ],
    icon: '🛠️',
  },
];
