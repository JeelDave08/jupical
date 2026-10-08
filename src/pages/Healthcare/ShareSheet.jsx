import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function ShareSheet({ feature, onClose }) {
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const videoId = feature?.videoUrl ? new URL(feature.videoUrl).hostname.includes('youtu.be')
    ? new URL(feature.videoUrl).pathname.split('/').filter(Boolean)[0]
    : new URL(feature.videoUrl).searchParams.get('v') || new URL(feature.videoUrl).pathname.split('/').pop()
    : '';
  const cleanUrl = `https://youtu.be/${videoId}`;
  const title = `${feature?.title || ''} – HealthPlus by Jupical`;
  const urlParam = encodeURIComponent(cleanUrl);
  const titleParam = encodeURIComponent(title);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(timerRef.current);
    };
  }, [onClose]);

  async function copyLink() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(cleanUrl);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = cleanUrl;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
    setCopied(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopied(false), 1500);
  }

  if (!feature || typeof document === 'undefined') return null;
  return createPortal(
    <div className="hp-share-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="hp-share-sheet" role="dialog" aria-modal="true" aria-labelledby="hp-share-title">
        <div className="hp-share-head"><h2 id="hp-share-title">Share</h2><button className="hp-close" type="button" onClick={onClose} aria-label="Close share sheet">×</button></div>
        <div className="hp-copy-row">
          <input ref={inputRef} className="hp-share-input" aria-label="Video link" readOnly value={cleanUrl} onFocus={(event) => event.target.select()} />
          <button className="hp-copy-button" type="button" onClick={copyLink}>{copied ? 'Copied' : 'Copy link'}</button>
        </div>
        <div className="hp-share-options">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${urlParam}`} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={`https://wa.me/?text=${titleParam}%20${urlParam}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={`https://twitter.com/intent/tweet?url=${urlParam}&text=${titleParam}`} target="_blank" rel="noopener noreferrer">X</a>
          <a href={`https://www.reddit.com/submit?url=${urlParam}&title=${titleParam}`} target="_blank" rel="noopener noreferrer">Reddit</a>
        </div>
      </section>
    </div>,
    document.body,
  );
}
