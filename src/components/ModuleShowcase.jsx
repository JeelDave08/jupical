import { useEffect, useId, useRef, useState } from 'react';
import {
  Activity, Award, BookOpen, Bus, CalendarDays, ClipboardList, GraduationCap,
  HeartHandshake, LibraryBig, Play, School, Settings2, Smartphone, UserRound,
  UsersRound, WalletCards,
} from 'lucide-react';
import './ModuleShowcase.css';

const pad = (value) => String(value).padStart(2, '0');
const posterIcons = {
  activity: Activity,
  award: Award,
  book: BookOpen,
  bus: Bus,
  calendar: CalendarDays,
  clipboard: ClipboardList,
  graduation: GraduationCap,
  counseling: HeartHandshake,
  library: LibraryBig,
  school: School,
  settings: Settings2,
  smartphone: Smartphone,
  user: UserRound,
  users: UsersRound,
  wallet: WalletCards,
};

function VideoFrame({ videoId, title }) {
  return <iframe className="jp-cons__iframe" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen title={title} />;
}

function ModuleCard({ module, index, active, playing, onPlay }) {
  const [expanded, setExpanded] = useState(false);
  const descriptionId = useId();
  const PosterIcon = posterIcons[module.icon] || BookOpen;

  const handleKeyDown = (event) => {
    if (module.videoId && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onPlay();
    }
  };

  return (
    <article className={`jp-cons__step${active ? ' is-active' : ''}`}>
      <div className={`jp-cons__thumbnail${playing ? ' jp-cons__playing' : ''}`} role="button" tabIndex={0} aria-disabled={!module.videoId} aria-label={`Play module ${pad(index + 1)}: ${module.title} video`} onClick={module.videoId ? onPlay : undefined} onKeyDown={handleKeyDown}>
        {playing ? <><VideoFrame videoId={module.videoId} title={`${module.title} video`} /><span className="jp-cons__now-playing">Now playing</span></> : (
          <>
            <div className="jp-cons__thumbnail-poster" aria-hidden="true">
              <span className="jp-cons__poster-grid" />
              <span className="jp-cons__poster-watermark">{pad(index + 1)}</span>
              <span className="jp-cons__poster-icon"><PosterIcon size={38} strokeWidth={1.7} /></span>
            </div>
            <span className="jp-cons__number">{pad(index + 1)}</span>
            <span className="jp-cons__play-pill" aria-hidden="true"><Play size={19} fill="currentColor" /></span>
            <span className="jp-cons__watch-video">Watch video</span>
          </>
        )}
      </div>
      <div className="jp-cons__step-content">
        <h3>{module.title}</h3>
        <p id={descriptionId} className={expanded ? 'is-expanded' : undefined}>{module.desc}</p>
        <button className="jp-cons__read-more" type="button" aria-expanded={expanded} aria-controls={descriptionId} onClick={() => setExpanded((value) => !value)}>{expanded ? 'Read less' : 'Read more'}</button>
      </div>
    </article>
  );
}

export default function ModuleShowcase({ id, title, subtitle, playerTitle, playerSubtitle, mainVideoId, modules, labelPrefix = 'Floor' }) {
  const sectionRef = useRef(null);
  const [playingKey, setPlayingKey] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const numberedModules = modules.map((module, index) => ({ ...module, number: module.number ?? index + 1 }));
  const towerHeight = 330 + Math.max(0, numberedModules.length - 13) * 23;
  const baseline = towerHeight - 14;

  useEffect(() => {
    const section = sectionRef.current;
    const cards = section?.querySelectorAll('.jp-cons__step');
    if (!section || !cards?.length) return undefined;

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      const screenCenter = window.innerHeight / 2;
      let nearestIndex = -1;
      let nearestDistance = Infinity;
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs((rect.top + rect.bottom) / 2 - screenCenter);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });
      setActiveIndex((previous) => previous === nearestIndex ? previous : nearestIndex);
    }, { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 });

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [numberedModules.length]);

  useEffect(() => {
    if (!import.meta.env.DEV || !modules.length || !modules.every((module) => Number.isInteger(module.number))) return undefined;

    const controller = new AbortController();
    numberedModules.filter((module) => module.videoId).forEach(async (module) => {
      const watchUrl = `https://www.youtube.com/watch?v=${encodeURIComponent(module.videoId)}`;
      try {
        const response = await fetch(`https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(watchUrl)}`, { signal: controller.signal });
        if (!response.ok) return;
        const { title: videoTitle } = await response.json();
        const match = String(videoTitle || '').match(/^\s*(\d+)\s*[.:)\-]/);
        if (match && Number(match[1]) !== module.number) {
          console.warn(`Video mismatch: module ${module.number} plays video titled ${videoTitle}`);
        }
      } catch {
        // Network and oEmbed errors are advisory only.
      }
    });

    return () => controller.abort();
  }, [modules]);

  const onPlayKey = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setPlayingKey('main');
    }
  };

  return (
    <>
      <section className="jp-cons__video-section jp-cons__wrap">
        <h2>{playerTitle}</h2><p className="jp-cons__caption">{playerSubtitle}</p>
        {playingKey === 'main' ? <div className="jp-cons__player jp-cons__playing"><VideoFrame videoId={mainVideoId} title={playerTitle} /></div> : (
          <div className="jp-cons__player" role="button" tabIndex={0} aria-disabled={!mainVideoId} aria-label={`Play ${playerTitle} video`} onClick={mainVideoId ? () => setPlayingKey('main') : undefined} onKeyDown={mainVideoId ? onPlayKey : undefined}>
            <div className="jp-cons__player-content"><span className="jp-cons__big-play" aria-hidden="true">▶</span><h3>{playerTitle}</h3><p>{playerSubtitle}</p></div>
          </div>
        )}
      </section>
      <section className="jp-cons__wrap jp-cons__module-section" id={id} ref={sectionRef}>
        <h2 className="jp-cons__sequence-title">{title}</h2><p className="jp-cons__sequence-intro">{subtitle}</p>
        <div className="jp-cons__sequence">
          <aside className="jp-cons__tower">
            <svg viewBox={`0 0 160 ${towerHeight}`} aria-hidden="true">
              <rect x="0" y={baseline + 2} width="160" height="6" fill="#1d4ed8" /><path d="M80 12V34M80 12l-40 6M80 12l40 6" stroke="#1d4ed8" strokeWidth="2" />
              {numberedModules.map((module, index) => {
                const y = baseline - (index + 1) * 23;
                const filled = index <= activeIndex;
                const active = index === activeIndex;
                return <g key={module.number}><rect className={`jp-cons__tower-floor${filled ? ' on' : ''}${active ? ' active' : ''}`} x="24" y={y} width="112" height="22" rx="2" /><text className={filled ? 'on' : ''} x="80" y={y + 15}>{pad(module.number)}</text></g>;
              })}
            </svg>
            <div className="jp-cons__floor-label">{activeIndex >= 0 ? `${labelPrefix} ${pad(numberedModules[activeIndex].number)} of ${numberedModules.length}: ${numberedModules[activeIndex].title}` : 'Foundation'}</div>
          </aside>
          <div className="jp-cons__module-grid">
            {numberedModules.map((module, index) => {
              return <ModuleCard key={module.number} module={module} index={index} active={activeIndex === index} playing={playingKey === module.number} onPlay={() => setPlayingKey(module.number)} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
