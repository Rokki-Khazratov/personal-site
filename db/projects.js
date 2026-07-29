const CASE_STUDIES = 'https://github.com/Rokki-Khazratov/portfolio-case-studies/tree/main';
const RAW = 'https://raw.githubusercontent.com/Rokki-Khazratov/portfolio-case-studies/main';

export const projectRecords = [
  {
    slug: 'examtwin',
    title: 'ExamTwin',
    tag: 'AI · EdTech · Full-stack',
    year: '2026',
    desc: 'An adaptive exam-preparation workspace that turns a subject and study context into mock exams, focused runs, evidence-aware review, and progress analytics.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL + pgvector', 'Redis', 'Dramatiq'],
    highlights: [
      'Exam configuration, attempt lifecycle, and focused mock-run workflow',
      'Analytics for study progress and review of exam evidence',
      'Background artifact processing with a clear optional grounded-AI boundary',
    ],
    contentBlocks: [
      {
        type: 'text',
        paragraphs: [
          'ExamTwin is designed around the full preparation loop: configure a subject, create an exam, take a focused run, and use the result to guide the next study session.',
          'The public case study documents the product flow and the architecture behind it: a Next.js workspace, a FastAPI domain API, PostgreSQL with pgvector, Redis-backed jobs, Dramatiq workers, private artifact storage, and an optional grounded-AI integration.',
        ],
      },
      {
        type: 'gallery',
        items: [
          {
            src: `${RAW}/examtwin/assets/dashboard.jpg`,
            alt: 'ExamTwin preparation dashboard',
          },
          {
            src: `${RAW}/examtwin/assets/exam-creation.jpg`,
            alt: 'ExamTwin exam creation flow',
          },
          {
            src: `${RAW}/examtwin/assets/analytics.jpg`,
            alt: 'ExamTwin analytics view',
          },
        ],
      },
    ],
    url: `${CASE_STUDIES}/examtwin`,
  },
  {
    slug: 'tender-erp',
    title: 'Tender ERP',
    tag: 'ERP · Procurement · RBAC',
    year: '2025–26',
    desc: 'A role-aware tender operations system for tracking deals, clients, suppliers, finance, deadlines, documents, and approval paths across internal teams.',
    stack: ['React', 'TypeScript', 'Django REST Framework', 'PostgreSQL', 'Celery', 'RBAC'],
    highlights: [
      'Deal lifecycle management spanning commercial, finance, and operations teams',
      'Role-scoped actions, auditability, notifications, and operational reporting',
      'Clear separation of UI, workflow API, business records, background jobs, and integrations',
    ],
    contentBlocks: [
      {
        type: 'text',
        paragraphs: [
          'Tender ERP makes tender work legible across the people who have to move it forward: managers, heads, finance, logistics, and administrators.',
          'The system design focuses on role-aware workflow actions, structured deal data, audit events, deadline-oriented background work, notification boundaries, and reporting. The public case study deliberately contains no customer, deal, financial, or document data.',
        ],
      },
    ],
    url: `${CASE_STUDIES}/tender-erp`,
  },
  {
    slug: 'menumargin-ai',
    title: 'MenuMargin AI',
    tag: 'AI · Forecasting · Product',
    year: '2026',
    desc: 'A restaurant margin decision-support prototype that connects menu risk, forecast signals, external cost context, and price or scenario recommendations.',
    stack: ['Next.js', 'FastAPI', 'Sybilion', 'Eurostat / HICP', 'Scenario analysis'],
    highlights: [
      'Six-month menu-margin outlook with dish-level risk signals',
      'Scenario controls for price, lead time, and demand constraints',
      'Forecast boundary made explicit instead of presenting predictions as certainty',
    ],
    contentBlocks: [
      {
        type: 'text',
        paragraphs: [
          'MenuMargin AI is a prototype for translating uncertain ingredient costs into practical decisions for restaurant operators.',
          'Its decision loop combines a Next.js dashboard, a FastAPI decision service, a Sybilion forecast boundary, and Eurostat/HICP context. The visual story is intentionally labelled as prototype/demo data rather than a production financial system.',
        ],
      },
      {
        type: 'gallery',
        items: [
          {
            src: `${RAW}/menumargin-ai/assets/forecast-dashboard.png`,
            alt: 'MenuMargin AI forecast and margin dashboard',
          },
          {
            src: `${RAW}/menumargin-ai/assets/backtest-demo.png`,
            alt: 'MenuMargin AI backtest demonstration',
          },
        ],
      },
    ],
    url: `${CASE_STUDIES}/menumargin-ai`,
  },
];

export function listProjects() {
  return projectRecords;
}

export function getProjectBySlug(slug) {
  return projectRecords.find(project => project.slug === slug) || projectRecords[0];
}
