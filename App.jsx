import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import Stack from './components/Stack.jsx';
import Footer from './components/Footer.jsx';

function getStoredTheme() {
  try {
    return window.localStorage.getItem('theme') || 'dark';
  } catch (e) {
    return 'dark';
  }
}

function formatViennaTime(datetime) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Vienna',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(datetime));
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return getStoredTheme();
  });
  const [weather, setWeather] = useState('Loading...');
  const [weatherTemp, setWeatherTemp] = useState('—');
  const [viennaTime, setViennaTime] = useState('Loading...');
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  useEffect(() => {
    const controller = new AbortController();

    fetch('https://wttr.in/Vienna?format=j1', { signal: controller.signal })
      .then(r => r.json())
      .then(data => {
        const cur = data.current_condition?.[0];
        if (!cur) return;

        const temp = `${cur.temp_C}°C`;
        const desc = cur.weatherDesc?.[0]?.value || 'Vienna';

        setWeather(`${temp} · ${desc}`);
        setWeatherTemp(temp);
      })
      .catch(() => {
        setWeather('Vienna');
        setWeatherTemp('—');
      });

    const fetchTime = () => {
      fetch('https://worldtimeapi.org/api/timezone/Europe/Vienna', { signal: controller.signal })
        .then(r => r.json())
        .then(data => {
          if (!data.datetime) return;
          setViennaTime(formatViennaTime(data.datetime));
        })
        .catch(() => {
          setViennaTime(formatViennaTime(new Date().toISOString()));
        });
    };

    fetchTime();
    const timeInterval = window.setInterval(fetchTime, 60000);

    return () => {
      window.clearInterval(timeInterval);
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const projectSlug = hash.startsWith('#project/') ? hash.replace('#project/', '') : null;

  if (projectSlug) {
    return (
      <>
        <Nav theme={theme} onToggleTheme={toggleTheme} />
        <ProjectDetail slug={projectSlug} />
        <Footer weatherTemp={weatherTemp} />
      </>
    );
  }

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero weather={weather} viennaTime={viennaTime} />

        <div className="section-divider"></div>
        <Experience />

        <div className="section-divider"></div>
        <Projects />

        <div className="section-divider"></div>
        <Stack />
      </main>

      <Footer weatherTemp={weatherTemp} />
    </>
  );
}
