export const projectRecords = [
  {
    slug: 'geoagro',
    title: 'GeoAgro',
    tag: 'Gov · Agro · Backend',
    year: '2024',
    desc: 'National agricultural monitoring platform for the Agro-Industry Development Agency. Used by 300 Ministry staff across 13 regions to manage 40,000 orchards. Django, PostgreSQL, Redis, Celery, Docker.',
    stack: ['Django', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    highlights: [
      'Role-based access for ministry teams across 13 regions',
      'Moderation flows, analytics, and background jobs',
      'Stable API contracts for web and mobile clients',
    ],
    contentBlocks: [
      {
        type: 'text',
        paragraphs: [
          'GeoAgro centralizes orchard inventory, moderation, and analytics workflows for regional ministry teams.',
          'The backend focused on reliable permissions, clear API contracts, and background processing for data-heavy operations.',
        ],
      },
      {
        type: 'gallery',
        items: [
          {
            src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80',
            alt: 'Agricultural fields from above',
          },
          {
            src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80',
            alt: 'Farm rows in daylight',
          },
        ],
      },
      {
        type: 'video',
        title: 'Platform media placeholder',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
      {
        type: 'pdf',
        title: 'Case study PDF',
        src: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
    ],
    url: 'https://github.com/Rokki-Khazratov/',
  },
  {
    slug: 'tender-erp',
    title: 'Tender ERP',
    tag: 'ERP · Procurement',
    year: '2025',
    desc: 'Tender and deal management platform for tracking lots, suppliers, payments, and approval workflows across finance, logistics, and operations teams.',
    stack: ['Django', 'PostgreSQL', 'REST APIs', 'Admin workflows'],
    highlights: [
      'Deal lifecycle screens for tender operations',
      'Supplier, payment, and deadline tracking',
      'Role-based approval paths for internal teams',
    ],
    contentBlocks: [
      {
        type: 'text',
        paragraphs: [
          'Tender ERP organizes procurement work around lots, suppliers, approvals, payments, and internal reporting.',
          'The main goal was to make operational state visible and keep managers, finance, logistics, and operations aligned.',
        ],
      },
      {
        type: 'gallery',
        items: [
          {
            src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
            alt: 'Business workflow desk',
          },
          {
            src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80',
            alt: 'Financial documents and calculator',
          },
        ],
      },
      {
        type: 'video',
        title: 'ERP workflow media placeholder',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
      {
        type: 'pdf',
        title: 'Workflow PDF',
        src: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
    ],
    url: 'https://github.com/Rokki-Khazratov/',
  },
  {
    slug: 'global-expo-platform',
    title: 'GLOBAL EXPO Platform',
    tag: 'Events · Full-stack',
    year: '2023',
    desc: 'Event management system with QR-based visitor registration, access control, and exhibition administration for live industrial expositions.',
    stack: ['JavaScript', 'REST APIs', 'QR check-in', 'Admin tools'],
    highlights: [
      'Visitor registration and QR-based access flow',
      'Live event administration tooling',
      'Legacy module cleanup for faster operator workflows',
    ],
    contentBlocks: [
      {
        type: 'text',
        paragraphs: [
          'GLOBAL EXPO Platform supported live visitor registration, QR check-in, access control, and administration flows.',
          'The work balanced public-facing registration screens with internal tools that needed to stay fast during live events.',
        ],
      },
      {
        type: 'gallery',
        items: [
          {
            src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=80',
            alt: 'Conference hall with audience',
          },
          {
            src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
            alt: 'Live event venue',
          },
        ],
      },
      {
        type: 'video',
        title: 'Event media placeholder',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
      {
        type: 'pdf',
        title: 'Event flow PDF',
        src: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      },
    ],
    url: 'https://github.com/Rokki-Khazratov/',
  },
];

export function listProjects() {
  return projectRecords;
}

export function getProjectBySlug(slug) {
  return projectRecords.find(project => project.slug === slug) || projectRecords[0];
}
