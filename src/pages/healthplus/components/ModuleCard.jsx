import VideoPlayer from "./VideoPlayer";

export default function ModuleCard({ module, url, cardRef }) {
  return (
    <article className="hp-module-card" ref={cardRef}>
      <div className="hp-module-heading">
        <span className="hp-number">{module.n}</span>
        <h3>{module.n}. {module.title}</h3>
      </div>
      <p className="hp-module-text">{module.text}</p>
      <ul className="hp-module-bullets">
        {module.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <VideoPlayer variant="card" url={url} label={`${module.n} – ${module.title}`} title={module.title} />
    </article>
  );
}
