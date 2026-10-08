import { useEffect, useRef, useState } from 'react';
import './ModuleShowcase.css';

const pad = (value) => String(value).padStart(2, '0');

function VideoFrame({ videoId, title }) {
  return (
    <iframe
      className="jp-cons__iframe"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowFullScreen
      title={title}
    />
  );
}

function VideoThumbnail({ module, index, onPlay, playing }) {
  const number = module.number || pad(index + 1);
  const lineWidths = [90, 70, 80, 55, 85, 65];
  const widths = lineWidths.map((width, lineIndex) => width - (number * 7 + lineIndex * 3) % 20);

  if (playing && module.videoId) {
    return (
      <div className="jp-cons__thumbnail jp-cons__playing">
        <VideoFrame videoId={module.videoId} title={`${module.title} video`} />
      </div>
    );
  }

  const canPlay = Boolean(module.videoId);
  return (
    <div
      className={`jp-cons__thumbnail${canPlay ? '' : ' jp-cons__thumbnail--static'}`}
      data-video-id={module.videoId || undefined}
      role={canPlay ? 'button' : undefined}
      tabIndex={canPlay ? 0 : undefined}
      aria-label={canPlay ? `Play module ${pad(number)}: ${module.title} video` : undefined}
      onClick={canPlay ? () => onPlay(module) : undefined}
      onKeyDown={canPlay ? (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onPlay(module);
        }
      } : undefined}
    >
      <div className="jp-cons__bar"><span>{pad(number)}. {module.title.slice(0, 26)}</span><span>JUPICAL</span></div>
      <div className="jp-cons__ui">
        <s className="a" style={{ width: `${35 + (number - 1) % 4 * 10}%` }} />
        {widths.map((width, lineIndex) => (
          <s key={lineIndex} className={(lineIndex + number - 1) % 4 === 0 ? 'r' : (lineIndex + number - 1) % 3 === 0 ? 'a' : ''} style={{ width: `${width}%` }} />
        ))}
      </div>
      {canPlay && <span className="jp-cons__play-pill" aria-hidden="true">▶</span>}
    </div>
  );
}

function Tower({ modules, activeFloor, labelPrefix }) {
  const height = Math.max(120, modules.length * 23 + 36);
  const baseline = height - 12;
  return (
    <aside className="jp-cons__tower" aria-label="Module progress">
      <svg viewBox={`0 0 160 ${height}`} role="img" aria-label={`${modules.length}-floor module progress tower`}>
        <rect x="0" y={baseline} width="160" height="6" fill="#1d4ed8" />
        <path d={`M80 12V34M80 12l-40 6M80 12l40 6`} stroke="#1d4ed8" strokeWidth="2" />
        {modules.map((module, index) => {
          const y = baseline - (index + 1) * 23;
          const filled = index < activeFloor;
          return (
            <g key={module.title}>
              <rect className={`jp-cons__tower-floor${filled ? ' on' : ''}`} x="24" y={y} width="112" height="22" rx="2" />
              <text className={filled ? 'on' : ''} x="80" y={y + 15}>{module.number || pad(index + 1)}</text>
            </g>
          );
        })}
      </svg>
      <div className="jp-cons__floor-label" aria-live="polite">
        {labelPrefix} {modules[Math.max(0, activeFloor - 1)]?.number || pad(Math.max(1, activeFloor))} of {modules.length}: {modules[Math.max(0, activeFloor - 1)]?.title}
      </div>
    </aside>
  );
}

export default function ModuleShowcase({
  title,
  subtitle,
  playerTitle,
  playerHeading,
  playerSubtitle,
  mainVideoId = '',
  modules = [],
  labelPrefix = 'Floor',
}) {
  const sectionRef = useRef(null);
  const [playingKey, setPlayingKey] = useState(null);
  const [activeFloor, setActiveFloor] = useState(0);

  useEffect(() => {
    let frame = 0;
    const updateTower = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current = 0;
        sectionRef.current?.querySelectorAll('.jp-cons__step').forEach((element, index) => {
          if (element.getBoundingClientRect().top < window.innerHeight * 0.6) current = index + 1;
        });
        setActiveFloor(Math.min(current, modules.length));
      });
    };
    window.addEventListener('scroll', updateTower, { passive: true });
    window.addEventListener('resize', updateTower);
    updateTower();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateTower);
      window.removeEventListener('resize', updateTower);
    };
  }, [modules.length]);

  const play = (key) => setPlayingKey(key);
  const playModule = (module) => setPlayingKey(String(module.number || module.title));
  return (
    <>
      {mainVideoId && (
        <section className="jp-cons__video-section jp-cons__wrap" aria-labelledby="jp-cons-main-video-title">
          <h2 id="jp-cons-main-video-title">{playerHeading || `See the ${playerTitle} in Action`}</h2>
          {playerSubtitle && <p className="jp-cons__caption">{playerSubtitle}</p>}
          {playingKey === 'main' ? (
            <div className="jp-cons__player jp-cons__playing"><VideoFrame videoId={mainVideoId} title={playerTitle} /></div>
          ) : (
            <button type="button" className="jp-cons__player" aria-label={`Play ${playerTitle} video`} onClick={() => play('main')}>
              <span className="jp-cons__player-content"><span className="jp-cons__big-play" aria-hidden="true">▶</span><span className="jp-cons__player-heading">{playerTitle}</span><span className="jp-cons__player-subtitle">{playerSubtitle}</span></span>
            </button>
          )}
        </section>
      )}

      <section className="jp-cons__wrap jp-cons__showcase" ref={sectionRef}>
        <h2 className="jp-cons__sequence-title">{title}</h2>
        <p className="jp-cons__sequence-intro">{subtitle}</p>
        <div className="jp-cons__sequence">
          <Tower modules={modules} activeFloor={activeFloor} labelPrefix={labelPrefix} />
          <div className="jp-cons__module-grid">
            {modules.map((module, index) => {
                const key = String(module.number || module.title);
                return (
                  <article className="jp-cons__step" key={key}>
                  <VideoThumbnail module={module} index={index} playing={playingKey === key} onPlay={playModule} />
                  <div><span className="jp-cons__number">{module.number || pad(index + 1)}</span><h3>{module.title}</h3><p>{module.desc}</p></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
