export const siteConstantsTable = [
  { key: 'name.first', label: 'First name', value: 'Bek', type: 'text', group: 'profile' },
  { key: 'name.last', label: 'Last name', value: 'Khazratov', type: 'text', group: 'profile' },
  { key: 'title', label: 'Title', value: 'Python Backend Engineer', type: 'text', group: 'profile' },
  {
    key: 'bio',
    label: 'About text',
    value: 'Python Backend Engineer with 3+ years building APIs, workflow-heavy business systems, and data-driven services. Available for part-time working-student roles in Vienna or remote within Austria.',
    type: 'textarea',
    group: 'profile',
  },
  { key: 'location', label: 'Location', value: 'Vienna, Austria', type: 'text', group: 'profile' },
  { key: 'email', label: 'Email', value: 'khazratovz@gmail.com', type: 'email', group: 'contacts' },
  { key: 'phone', label: 'Phone', value: '+43 688 64454147', type: 'tel', group: 'contacts' },
  { key: 'github.url', label: 'GitHub URL', value: 'https://github.com/Rokki-Khazratov/', type: 'url', group: 'links' },
  { key: 'github.handle', label: 'GitHub handle', value: 'Rokki-Khazratov', type: 'text', group: 'links' },
  {
    key: 'linkedin.url',
    label: 'LinkedIn URL',
    value: 'https://www.linkedin.com/in/bek-khazratov-751954225/',
    type: 'url',
    group: 'links',
  },
  { key: 'linkedin.handle', label: 'LinkedIn handle', value: 'bek-khazratov-751954225', type: 'text', group: 'links' },
  { key: 'spotify.title', label: 'Spotify track', value: 'Fuel', type: 'text', group: 'music' },
  { key: 'spotify.artist', label: 'Spotify artist', value: 'Metallica', type: 'text', group: 'music' },
  {
    key: 'spotify.url',
    label: 'Spotify URL',
    value: 'https://open.spotify.com/track/6FUwPb4mGlUDbx42uspXaZ',
    type: 'url',
    group: 'music',
  },
];

function readConstant(key) {
  return siteConstantsTable.find(item => item.key === key)?.value || '';
}

export const siteSettings = {
  personal: {
    name: {
      first: readConstant('name.first'),
      last: readConstant('name.last'),
    },
    title: readConstant('title'),
    bio: readConstant('bio'),
    location: readConstant('location'),
    email: readConstant('email'),
    phone: readConstant('phone'),
    github: readConstant('github.url'),
    githubHandle: readConstant('github.handle'),
    linkedin: readConstant('linkedin.url'),
    linkedinHandle: readConstant('linkedin.handle'),
  },
  nowPlaying: {
    title: readConstant('spotify.title'),
    artist: readConstant('spotify.artist'),
    url: readConstant('spotify.url'),
  },
};
