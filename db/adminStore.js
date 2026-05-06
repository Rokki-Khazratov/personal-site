import { projectRecords } from './projects.js';
import { siteConstantsTable } from './siteSettings.js';

const STORAGE_KEY = 'personal-site-admin-data';

export function createDefaultAdminData() {
  return {
    constants: structuredClone(siteConstantsTable),
    projects: structuredClone(projectRecords),
  };
}

export function buildSiteSettings(constants) {
  const read = key => constants.find(item => item.key === key)?.value || '';

  return {
    personal: {
      name: {
        first: read('name.first'),
        last: read('name.last'),
      },
      title: read('title'),
      bio: read('bio'),
      location: read('location'),
      email: read('email'),
      phone: read('phone'),
      github: read('github.url'),
      githubHandle: read('github.handle'),
      linkedin: read('linkedin.url'),
      linkedinHandle: read('linkedin.handle'),
    },
    nowPlaying: {
      title: read('spotify.title'),
      artist: read('spotify.artist'),
      url: read('spotify.url'),
    },
  };
}

export function loadAdminData() {
  if (typeof window === 'undefined') return createDefaultAdminData();

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return createDefaultAdminData();

    const parsed = JSON.parse(stored);

    return {
      constants: Array.isArray(parsed.constants) ? parsed.constants : structuredClone(siteConstantsTable),
      projects: Array.isArray(parsed.projects) ? parsed.projects : structuredClone(projectRecords),
    };
  } catch (e) {
    return createDefaultAdminData();
  }
}

export function saveAdminData(data) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetAdminData() {
  window.localStorage.removeItem(STORAGE_KEY);
  return createDefaultAdminData();
}
