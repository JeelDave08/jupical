import { useState } from "react";
import { ytId } from "../data/videos";

export default function VideoPlayer({ url, title, variant = "card", label = "" }) {
  const [playing, setPlaying] = useState(false);
  const id = ytId(url);

  if (playing && id) {
    return (
      <div className={`hp-video hp-video-${variant}`}>
        <iframe
          className="hp-video-frame"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title={title}
          loading="lazy"
        />
      </div>
    );
  }

  const image = id
    ? `linear-gradient(120deg, rgba(11,42,122,.48), rgba(29,78,216,.22), rgba(56,189,248,.35)), url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`
    : undefined;

  return (
    <div
      className={`hp-video hp-video-${variant} ${id ? "hp-video-has-image" : ""}`}
      style={image ? { backgroundImage: image } : undefined}
    >
      {variant === "main" ? (
        <>
          <div className="hp-video-grid-overlay" aria-hidden="true" />
          <span className="hp-video-title">{title}</span>
          <button className="hp-play hp-play-main" type="button" aria-label={`Play ${title}`} disabled={!id} onClick={() => id && setPlaying(true)}>
            <span aria-hidden="true">▶</span>
          </button>
        </>
      ) : (
        <>
          <div className="hp-video-topbar"><span>{label}</span><strong>JUPICAL</strong></div>
          <div className="hp-video-skeleton" aria-hidden="true"><i /><i /><i /><b /><i /></div>
          <button className="hp-play hp-play-card" type="button" aria-label={`Play ${title}`} disabled={!id} onClick={() => id && setPlaying(true)}>
            <span aria-hidden="true">▶</span>
          </button>
        </>
      )}
    </div>
  );
}
