import { useState } from 'react';

export function getYoutubeId(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '').toLowerCase();
    if (host === 'youtu.be') return parsed.pathname.split('/').filter(Boolean)[0] || '';
    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      if (parsed.pathname === '/watch') return parsed.searchParams.get('v') || '';
      const match = parsed.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/);
      return match ? match[1] : '';
    }
  } catch {
    return '';
  }
  return '';
}

export default function VideoPlayer({ videoUrl, illustration, number, title }) {
  const [playing, setPlaying] = useState(false);
  const videoId = getYoutubeId(videoUrl);

  return (
    <div className="hp-media">
      <span className="hp-number">{number}</span>
      {playing && videoId ? (
        <iframe
          className="hp-video-frame"
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <>
          {illustration}
          <button className="hp-play" type="button" onClick={() => setPlaying(true)} aria-label={`Play ${title} video`}>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.8c0-1.1 1.2-1.8 2.2-1.2l9 5.4a2.3 2.3 0 0 1 0 4l-9 5.4C9.2 20 8 19.3 8 18.2z" /></svg>
          </button>
        </>
      )}
    </div>
  );
}
