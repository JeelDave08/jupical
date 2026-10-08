import { useEffect, useRef } from 'react';

const hotelLevels = [166, 242, 318];
const housekeepingRooms = ['Room 301', 'Room 204', 'Room 102'];

export default function HotelHeroScene() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => {
      if (!scene) return;
      if (preference.matches) scene.pauseAnimations();
      else scene.unpauseAnimations();
    };

    syncMotion();
    preference.addEventListener('change', syncMotion);
    return () => preference.removeEventListener('change', syncMotion);
  }, []);

  return (
    <div className="jp-cons__hotel-stage">
      <svg
        ref={sceneRef}
        className="jp-cons__hotel-scene"
        viewBox="0 0 640 440"
        role="img"
        aria-label="Animated cutaway hotel: a guest checks in, an elevator carries a bellboy, housekeeping cleans a room, the restaurant serves a dish and live status cards update"
      >
        <defs>
          <g id="jp-hotel-person">
            <rect x="-5" y="-12" width="4" height="12" fill="#1e3a8a" />
            <rect x="1" y="-12" width="4" height="12" fill="#1e3a8a" />
            <rect x="-6" y="-31" width="12" height="20" rx="3" fill="currentColor" />
            <circle cy="-36" r="5" fill="#fcd5b0" />
          </g>
          <g id="jp-hotel-bed">
            <rect x="2" y="-4" width="4" height="4" fill="#1d4ed8" />
            <rect x="58" y="-4" width="4" height="4" fill="#1d4ed8" />
            <rect x="0" y="-14" width="66" height="11" rx="2" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.4" />
            <rect x="0" y="-30" width="7" height="27" rx="2" fill="#1d4ed8" />
            <rect x="9" y="-22" width="17" height="8" rx="4" fill="#fff" stroke="#1d4ed8" />
            <rect x="29" y="-20" width="35" height="6" rx="3" fill="#38bdf8" />
          </g>
          <path id="jp-hotel-spark" d="M0-8Q1-1 8 0Q1 1 0 8Q-1 1-8 0Q-1-1 0-8z" fill="#38bdf8" />
          <clipPath id="jp-hotel-elevator-clip"><rect x="470" y="90" width="40" height="304" /></clipPath>
        </defs>

        <g className="jp-cons__hotel-cloud" fill="#e8f0fb">
          <ellipse cx="80" cy="64" rx="34" ry="10" />
          <ellipse cx="102" cy="56" rx="22" ry="9" />
        </g>
        <circle cx="590" cy="52" r="22" fill="#fff3c4" />
        <rect y="394" width="640" height="46" fill="#f4f8ff" />
        <rect y="394" width="640" height="4" fill="#1d4ed8" />

        <polygon points="140,90 330,44 520,90" fill="#fff" stroke="#1d4ed8" strokeWidth="3" strokeLinejoin="round" />
        <rect x="282" y="54" width="96" height="24" rx="7" fill="#1d4ed8" />
        <text x="330" y="71" textAnchor="middle" fontFamily="DM Sans" fontWeight="800" fontSize="14" fill="#fff" letterSpacing="1">HOTEL</text>
        <g id="jp-hotel-stars" fontSize="13" fill="#f59e0b" textAnchor="middle" fontFamily="DM Sans">
          {Array.from({ length: 5 }, (_, index) => (
            <text key={`star-${index}`} x={296 + index * 17} y="38">
              ★
              <animate attributeName="opacity" values=".25;1;.25" dur="2.5s" begin={`${index * 0.3}s`} repeatCount="indefinite" />
            </text>
          ))}
        </g>

        <rect x="150" y="90" width="360" height="304" fill="#fff" />
        <rect x="470" y="90" width="40" height="304" fill="#eaf2ff" />
        <g>
          {hotelLevels.flatMap((baseY, level) => Array.from({ length: 3 }, (_, room) => {
            const x = 150 + room * 106.7;
            const topY = baseY - 76;
            const roomNumber = (3 - level) * 100 + room + 1;
            const roomKey = `${level}-${room}`;
            return (
              <g key={roomKey}>
                <rect x={x} y={topY} width="106.7" height="76" fill="#f8fbff" />
                {room > 0 && <path d={`M${x} ${topY}V${baseY}`} stroke="#1d4ed8" strokeOpacity=".35" strokeWidth="2" />}
                <rect x={x + 38} y={topY + 16} width="30" height="22" rx="2" fill="#e6f3ff" stroke="#1d4ed8" strokeWidth="1.4" />
                <path d={`M${x + 53} ${topY + 16}v22M${x + 38} ${topY + 27}h30`} stroke="#1d4ed8" />
                <use href="#jp-hotel-bed" x={x + 10} y={baseY - 2} />
                <circle cx={x + 90} cy={baseY - 24} r="17" fill="#fbbf24" opacity=".3">
                  <animate attributeName="opacity" values=".1;.45;.1" dur={`${3 + (level * 3 + room) % 3}s`} begin={`${-(level * 3 + room)}s`} repeatCount="indefinite" />
                </circle>
                <rect x={x + 84} y={baseY - 14} width="12" height="12" fill="#1d4ed8" />
                <polygon points={`${x + 82},${baseY - 28} ${x + 98},${baseY - 28} ${x + 94},${baseY - 17} ${x + 86},${baseY - 17}`} fill="#fde68a" />
                <text x={x + 9} y={topY + 14} fontFamily="DM Sans" fontWeight="700" fontSize="9" fill="#4a5f82">{roomNumber}</text>
                <circle cx={x + 95} cy={topY + 11} r="4.5" fill="#f59e0b">
                  <animate attributeName="fill" values="#f59e0b;#1d4ed8;#38bdf8;#10b981;#f59e0b" dur="12s" begin={`${-((level * 3 + room) * 3 % 12)}s`} repeatCount="indefinite" />
                </circle>
              </g>
            );
          }))}
        </g>

        <rect x="150" y="318" width="320" height="76" fill="#f8fbff" />
        <text x="250" y="334" textAnchor="middle" fontFamily="DM Sans" fontWeight="700" fontSize="8.5" fill="#4a5f82">RECEPTION</text>
        <text x="400" y="334" textAnchor="middle" fontFamily="DM Sans" fontWeight="700" fontSize="8.5" fill="#4a5f82">RESTAURANT</text>
        <rect x="160" y="380" width="14" height="14" rx="2" fill="#1d4ed8" />
        <ellipse cx="167" cy="372" rx="6" ry="11" fill="#38bdf8" />
        <ellipse cx="160" cy="376" rx="4" ry="8" fill="#7dd3fc" />
        <use href="#jp-hotel-person" x="270" y="394" style={{ color: '#1d4ed8' }} />
        <rect x="230" y="368" width="72" height="26" rx="3" fill="#1d4ed8" />
        <rect x="230" y="366" width="72" height="4" fill="#38bdf8" />
        <path d="M248 366a6 6 0 0 1 12 0z" fill="#fff" stroke="#f59e0b" strokeWidth="1.5" />
        {[0, 1].map((ring) => (
          <circle key={`reception-ring-${ring}`} cx="254" cy="366" r="3" fill="none" stroke="#f59e0b" strokeWidth="1.4">
            <animate attributeName="r" values="3;3;16;16" keyTimes={ring === 0 ? '0;.34;.5;1' : '0;.37;.53;1'} dur="14s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;.8;0;0" keyTimes={ring === 0 ? '0;.34;.5;1' : '0;.37;.53;1'} dur="14s" repeatCount="indefinite" />
          </circle>
        ))}

        <path d="M400 318v26" stroke="#1d4ed8" strokeWidth="1.5" />
        <polygon points="388,344 412,344 407,334 393,334" fill="#fbbf24" />
        <rect x="372" y="374" width="56" height="5" rx="2" fill="#1d4ed8" />
        <rect x="398" y="379" width="4" height="15" fill="#1d4ed8" />
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 -11;0 -11;0 0;0 0" keyTimes="0;.74;.8;.92;.97;1" dur="14s" repeatCount="indefinite" />
          <path d="M388 374a12 12 0 0 1 24 0z" fill="#fff" stroke="#1d4ed8" strokeWidth="1.6" />
          <circle cx="400" cy="360" r="2.2" fill="#1d4ed8" />
        </g>
        <g fill="none" stroke="#7dd3fc" strokeWidth="1.6" strokeLinecap="round">
          <path d="M394 356q-4-6 0-11"><animate attributeName="opacity" values="0;.9;0" dur="2.4s" repeatCount="indefinite" /></path>
          <path d="M400 354q-4-6 0-11"><animate attributeName="opacity" values="0;.9;0" begin="-.8s" dur="2.4s" repeatCount="indefinite" /></path>
          <path d="M406 356q-4-6 0-11"><animate attributeName="opacity" values="0;.9;0" begin="-1.6s" dur="2.4s" repeatCount="indefinite" /></path>
        </g>

        <g>
          <animateTransform attributeName="transform" type="translate" values="20 394;205 394;205 394;395 394;395 394" keyTimes="0;.3;.5;.8;1" dur="14s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;1;1;0" keyTimes="0;.03;.5;.9;.97;1" dur="14s" repeatCount="indefinite" />
          <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -2;0 0" dur=".5s" repeatCount="indefinite" />
            <use href="#jp-hotel-person" style={{ color: '#38bdf8' }} />
            <rect x="6" y="-14" width="13" height="11" rx="2" fill="#f59e0b" />
            <path d="M9-14v-3h7v3" stroke="#92400e" fill="none" />
          </g>
        </g>

        <g>
          <animateTransform attributeName="transform" type="translate" values="165 318;405 318;405 318;165 318;165 318" keyTimes="0;.4;.5;.9;1" dur="16s" repeatCount="indefinite" />
          <g><animateTransform attributeName="transform" type="scale" values="1 1;-1 1;1 1" keyTimes="0;.45;.95" calcMode="discrete" dur="16s" repeatCount="indefinite" />
            <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -1.5;0 0" dur=".45s" repeatCount="indefinite" />
              <use href="#jp-hotel-person" style={{ color: '#7dd3fc' }} />
              <ellipse cy="-41" rx="6" ry="2.6" fill="#fff" stroke="#1d4ed8" strokeWidth=".8" />
              <rect x="9" y="-24" width="24" height="14" rx="2" fill="#fff" stroke="#1d4ed8" strokeWidth="1.4" />
              <rect x="11" y="-31" width="20" height="7" rx="1.5" fill="#38bdf8" />
              <circle cx="15" cy="-6" r="3" fill="#1d4ed8" /><circle cx="29" cy="-6" r="3" fill="#1d4ed8" />
            </g>
          </g>
        </g>
        {[0, 1].map((spark) => (
          <g key={`housekeeping-spark-${spark}`} transform={spark === 0 ? 'translate(436 292)' : 'translate(452 276)'}>
            <use href="#jp-hotel-spark"><animateTransform attributeName="transform" type="scale" values={spark === 0 ? '0;0;1.3;.8;0;0' : '0;0;0;1;.6;0;0'} keyTimes={spark === 0 ? '0;.4;.46;.52;.58;1' : '0;.4;.44;.5;.55;.6;1'} dur="16s" repeatCount="indefinite" /></use>
          </g>
        ))}

        <g fill="#1d4ed8"><rect x="150" y="164" width="360" height="4" /><rect x="150" y="240" width="360" height="4" /><rect x="150" y="316" width="360" height="4" /></g>
        <rect x="150" y="90" width="360" height="304" fill="none" stroke="#1d4ed8" strokeWidth="3" />

        <g clipPath="url(#jp-hotel-elevator-clip)">
          <g>
            <animateTransform attributeName="transform" type="translate" values="0 350;0 350;0 198;0 198;0 122;0 122;0 274;0 274;0 350" keyTimes="0;.1;.25;.35;.5;.6;.75;.85;1" calcMode="spline" keySplines=".5 0 .5 1;.5 0 .5 1;.5 0 .5 1;.5 0 .5 1;.5 0 .5 1;.5 0 .5 1;.5 0 .5 1;.5 0 .5 1" dur="16s" repeatCount="indefinite" />
            <path d="M490-400V0" stroke="#0a1f44" strokeWidth="1.4" /><rect x="474" y="0" width="32" height="44" rx="3" fill="#fff" stroke="#1d4ed8" strokeWidth="2" />
            <use href="#jp-hotel-person" transform="translate(487 43) scale(.62)" style={{ color: '#0a1f44' }} />
            <rect x="495" y="27" width="8" height="12" rx="1.5" fill="#f59e0b" /><path d="M490 0v44" stroke="#1d4ed8" strokeOpacity=".3" />
          </g>
        </g>

        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="5s" repeatCount="indefinite" />
          <rect x="12" y="110" width="124" height="66" rx="12" fill="#fff" stroke="#d3e3fb" />
          <text x="24" y="130" fontFamily="DM Sans" fontSize="9.5" fill="#4a5f82">Arrivals today</text>
          <text x="24" y="154" fontFamily="Bricolage Grotesque" fontWeight="800" fontSize="19" fill="#0a1f44">18 / 24</text>
          <rect x="24" y="161" width="100" height="5" rx="2.5" fill="#e6efff" />
          <rect x="24" y="161" width="0" height="5" rx="2.5" fill="#1d4ed8"><animate attributeName="width" values="0;75;75;0" keyTimes="0;.5;.9;1" dur="14s" repeatCount="indefinite" /></rect>
        </g>
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="6s" begin="-2s" repeatCount="indefinite" />
          <rect x="524" y="108" width="108" height="72" rx="12" fill="#fff" stroke="#d3e3fb" />
          <text x="536" y="126" fontFamily="DM Sans" fontSize="9.5" fill="#4a5f82">Occupancy</text>
          <circle cx="556" cy="153" r="18" fill="none" stroke="#e6efff" strokeWidth="6" />
          <circle cx="556" cy="153" r="18" fill="none" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" transform="rotate(-90 556 153)"><animate attributeName="stroke-dasharray" values="78 113.1;97 113.1;78 113.1" dur="8s" repeatCount="indefinite" /></circle>
          {[{ value: '86%', opacity: '0;1;0' }, { value: '69%', opacity: '1;0;1' }].map((metric) => (
            <text key={metric.value} x="582" y="158" fontFamily="Bricolage Grotesque" fontWeight="800" fontSize="16" fill="#0a1f44">{metric.value}<animate attributeName="opacity" values={metric.opacity} keyTimes="0;.5;1" dur="8s" repeatCount="indefinite" /></text>
          ))}
        </g>
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="5.5s" begin="-1s" repeatCount="indefinite" />
          <rect x="524" y="196" width="108" height="78" rx="12" fill="#fff" stroke="#d3e3fb" />
          <text x="536" y="214" fontFamily="DM Sans" fontSize="9.5" fill="#4a5f82">Housekeeping</text>
          <g fontFamily="DM Sans" fontSize="9" fill="#0a1f44">
            {housekeepingRooms.map((room, index) => {
              const y = 230 + index * 17;
              return (
                <g key={room}>
                  <rect x="536" y={y - 8} width="10" height="10" rx="2.5" fill="none" stroke="#1d4ed8" strokeWidth="1.3" />
                  <path d={`M538 ${y - 3}l2.6 2.6 4.4-5.4`} fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="14" strokeDashoffset="14">
                    <animate attributeName="stroke-dashoffset" values="14;0;0;14" keyTimes="0;.15;.85;1" dur="9s" begin={`${-(index * 2.6)}s`} repeatCount="indefinite" />
                  </path>
                  <text x="552" y={y}>{room}</text>
                </g>
              );
            })}
          </g>
        </g>
      </svg>
      <div className="jp-cons__hotel-legend" aria-label="Room status legend">
        <span><i style={{ background: '#f59e0b' }} />Booked</span>
        <span><i style={{ background: '#1d4ed8' }} />Occupied</span>
        <span><i style={{ background: '#38bdf8' }} />Cleaning</span>
        <span><i style={{ background: '#10b981' }} />Ready</span>
      </div>
    </div>
  );
}
