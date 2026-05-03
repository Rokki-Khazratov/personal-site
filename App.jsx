import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Stack from './components/Stack.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem('theme') || 'dark';
  });
  const [weather, setWeather] = useState('Loading...');
  const [weatherTemp, setWeatherTemp] = useState('—');

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

    return () => controller.abort();
  }, []);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero weather={weather} />

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
