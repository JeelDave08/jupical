import { useMemo, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { VIDEO_ICONS, VIDEOS } from './videoData';
import './VideoGallery.css';

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
      <rect width="18" height="14" rx="4" fill="#ff1f1f" />
      <path d="M7 4l5 3-5 3z" fill="#fff" />
    </svg>
  );
}

function VideoPoster({ video, className = '' }) {
  const Icon = VIDEO_ICONS[video.ic];
  return (
    <div className={`vg-poster ${className}`} style={{ background: `linear-gradient(135deg, ${video.c[0]}, ${video.c[1]})` }}>
      <Icon className="vg-ic" style={{ color: video.c[0] }} />
      <div className="vg-big">{video.title}</div>
      <div className="vg-by">{video.by}</div>
    </div>
  );
}

export default function VideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [playing, setPlaying] = useState(false);

  const filteredVideos = useMemo(() => VIDEOS
    .map((video, index) => ({ video, index }))
    .filter(({ video }) => filter === 'all' || video.k === filter), [filter]);

  const currentVideo = VIDEOS[currentIndex];
  const selectVideo = (index, shouldPlay) => {
    setCurrentIndex(index);
    setPlaying(shouldPlay);
  };
  const changeFilter = (nextFilter) => {
    const nextList = VIDEOS
      .map((video, index) => ({ video, index }))
      .filter(({ video }) => nextFilter === 'all' || video.k === nextFilter);
    if (nextList.length && !nextList.some(({ index }) => index === currentIndex)) {
      setCurrentIndex(nextList[0].index);
      setPlaying(false);
    }
    setFilter(nextFilter);
  };

  return (
    <div className="vg-page">
      <Navbar />
      <main className="vg">
        <section className="vg-sec">
        <div className="vg-head">
          <div>
            <h1>See how teams run on Odoo with Jupical</h1>
            <p className="vg-sub">Customer stories and industry walkthroughs. Pick a video, press play, and watch it right here.</p>
          </div>
          <div className="vg-chips" role="group" aria-label="Filter videos">
            {[
              ['all', 'All videos'],
              ['story', 'Success stories'],
              ['erp', 'Industry ERPs'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={`vg-chip${filter === value ? ' vg-chip-active' : ''}`}
                aria-pressed={filter === value}
                onClick={() => changeFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="vg-grid">
          <section className="vg-stage" aria-label="Selected video">
            <div className="vg-frame">
              {playing && currentVideo.id ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${currentVideo.id}?autoplay=1&rel=0`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <VideoPoster video={currentVideo} />
                  {!currentVideo.id && <span className="vg-note">Add this video&apos;s YouTube ID to play it</span>}
                  <button
                    className="vg-play"
                    type="button"
                    aria-label={`Play ${currentVideo.title}`}
                    disabled={!currentVideo.id}
                    onClick={() => currentVideo.id && setPlaying(true)}
                  >
                    <PlayIcon />
                  </button>
                </>
              )}
            </div>
            <div className="vg-meta">
              <div>
                <h2>{currentVideo.title}</h2>
                <p>{currentVideo.by} · {currentVideo.tag}</p>
              </div>
              <a className="vg-yt" href={currentVideo.id ? `https://www.youtube.com/watch?v=${currentVideo.id}` : 'https://www.youtube.com/'} target="_blank" rel="noopener noreferrer">
                <YoutubeIcon />
                Watch on YouTube
              </a>
            </div>
          </section>

          <div className="vg-rail" role="list" aria-label="Videos">
            {filteredVideos.length ? filteredVideos.map(({ video, index }) => (
              <div className="vg-list-item" role="listitem" key={video.id || video.title}>
                <button
                  className="vg-item"
                  type="button"
                  aria-current={currentIndex === index ? 'true' : undefined}
                  aria-label={`Play ${video.title}`}
                  onClick={() => selectVideo(index, Boolean(video.id))}
                >
                  <span className="vg-th" style={{ background: `linear-gradient(135deg, ${video.c[0]}, ${video.c[1]})` }}>
                    {(() => {
                      const Icon = VIDEO_ICONS[video.ic];
                      return <Icon className="vg-thumb-icon" style={{ color: video.c[0] }} />;
                    })()}
                    <i aria-hidden="true" />
                  </span>
                  <span className="vg-item-copy">
                    <b>{video.title}</b>
                    <span className="vg-tag">{video.tag}</span>
                  </span>
                </button>
              </div>
            )) : <div className="vg-empty">No videos in this group yet.</div>}
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
