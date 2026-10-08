import VideoPlayer from "./VideoPlayer";

export default function MainVideo({ url }) {
  return (
    <section className="hp-main-video" aria-labelledby="hp-main-video-title">
      <h2 id="hp-main-video-title">See HealthPlus in Action</h2>
      <p>HealthPlus by Jupical: a complete, end-to-end healthcare management solution on Odoo.</p>
      <VideoPlayer variant="main" url={url} title="HealthPlus: Complete Overview" />
    </section>
  );
}
