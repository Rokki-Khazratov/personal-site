// Site data. Admin-facing constants live in db/siteSettings.js; project entries live in db/projects.js.
import { siteSettings } from './db/siteSettings.js';

export { projectRecords as projects } from './db/projects.js';
export { siteConstantsTable } from './db/siteSettings.js';

export const { personal, nowPlaying } = siteSettings;

export const experience = [
  {
    company: 'Agro-Industry Development Agency',
    role: 'Software Engineer',
    type: 'Remote',
    period: 'Oct 2024 — Apr 2026',
    bullets: [
      'Built backend for GeoAgro — a national platform used by 300 Ministry staff across 13 regions to manage 40,000 orchards',
      'Developed REST APIs, RBAC, moderation flows, analytics, and background jobs with Django, PostgreSQL, Redis, Celery',
      'Maintained API contracts for web, React Native, and Flutter clients; managed Docker, Nginx, Gunicorn deployments',
    ],
  },
  {
    company: 'Tender ERP',
    role: 'Software Engineer',
    type: 'Contract',
    period: 'Dec 2025 — Mar 2026',
    bullets: [
      'Built backend modules for tender and deal management: lots, suppliers, payments, approvals, deadlines',
      'Designed role-based workflows for managers, finance, logistics, and operations teams',
      'Implemented deal creation, procurement flows, and internal reporting screens',
    ],
  },
  {
    company: 'GLOBAL EXPO Group',
    role: 'Software Engineer',
    type: 'Contract',
    period: 'May 2023 — Aug 2024',
    bullets: [
      'Built modules for visitor registration, QR check-in, access control, and exhibition administration',
      'Developed backend APIs and frontend flows for live events and internal admin',
      'Refactored legacy modules to improve responsiveness and maintainability',
    ],
  },
  {
    company: 'Kiwy.uz · Wheels.uz',
    role: 'Backend Developer',
    type: 'Short-term contracts',
    period: 'Oct 2023 — Apr 2024',
    bullets: [
      'Kiwy.uz: backend for a footwear marketplace — product, order, delivery, and pickup-point workflows',
      'Wheels.uz: APIs for an installment-based tire sales startup; query optimisation and partner integrations',
    ],
  },
  {
    company: 'Uzcharmsanoat',
    role: 'Frontend Developer',
    type: 'Hybrid',
    period: 'Aug 2022 — Aug 2023',
    bullets: [
      'Built and maintained e-commerce websites for member companies of the association',
      'Covered catalog, order, payment, and basic analytics flows',
    ],
  },
];

export const stack = {
  'Languages & Backend': [
    { name: 'Python',     icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Django',     icon: 'https://cdn.simpleicons.org/django/092E20' },
    { name: 'FastAPI',    icon: 'https://cdn.simpleicons.org/fastapi/009688' },
    { name: 'Celery',     icon: 'https://cdn.simpleicons.org/celery/37814A' },
    { name: 'NestJS',     icon: 'https://cdn.simpleicons.org/nestjs/E0234E' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  ],
  'Frontend': [
    { name: 'React',      icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next.js',    icon: 'https://cdn.simpleicons.org/nextdotjs/111110' },
    { name: 'Tailwind',   icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Vue.js',     icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
  ],
  'Data': [
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Redis',      icon: 'https://cdn.simpleicons.org/redis/FF4438' },
    { name: 'MongoDB',    icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'Pandas',     icon: 'https://cdn.simpleicons.org/pandas/150458' },
  ],
  'Infra': [
    { name: 'Docker',     icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Nginx',      icon: 'https://cdn.simpleicons.org/nginx/009639' },
    { name: 'Linux',      icon: 'https://cdn.simpleicons.org/linux/FCC624' },
    { name: 'Git',        icon: 'https://cdn.simpleicons.org/git/F05032' },
  ],
};
