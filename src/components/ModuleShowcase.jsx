import { useEffect, useId, useMemo, useRef, useState } from 'react';
import {
  Activity, Award, BedDouble, BellRing, BookOpen, Boxes, Building2, Bus, Calculator,
  CalendarCheck, CalendarClock, CalendarDays, ChartColumnIncreasing, ChartNoAxesCombined, ClipboardList, Clock3,
  FileCheck2, FileText, Filter, Gauge, Globe, GraduationCap, Handshake, HeartHandshake,
  House, KeyRound, LayoutDashboard, LibraryBig, LockKeyhole, Percent, Play, ReceiptText,
  Repeat2, School, Settings2, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Table2,
  HeartPulse, ScanLine, Stethoscope, Tag, TicketCheck, Truck, Utensils, UserRound,
  UserRoundCheck, UsersRound, WalletCards, Wrench, Coins,
} from 'lucide-react';
import './ModuleShowcase.css';

const pad = (value) => String(value).padStart(2, '0');

function WarrantyPosterIcon({ size = 38 }) {
  return <span className="jp-cons__poster-combo" style={{ width: size, height: size }}>
    <TicketCheck className="jp-cons__poster-combo-main" size={size} strokeWidth={1.7} />
    <ShieldCheck className="jp-cons__poster-combo-accent" size={size * .56} strokeWidth={2} />
  </span>;
}

function InventoryPosterIcon({ size = 38 }) {
  return <span className="jp-cons__poster-combo" style={{ width: size, height: size }}>
    <Boxes className="jp-cons__poster-combo-main" size={size} strokeWidth={1.7} />
    <Truck className="jp-cons__poster-combo-accent" size={size * .56} strokeWidth={2} />
  </span>;
}

function HotelComboIcon({ main: MainIcon, accent: AccentIcon, size = 38 }) {
  return <span className="jp-cons__poster-combo" style={{ width: size, height: size }}>
    <MainIcon className="jp-cons__poster-combo-main" size={size} strokeWidth={1.7} />
    <AccentIcon className="jp-cons__poster-combo-accent" size={size * .54} strokeWidth={2} />
  </span>;
}

function HotelConfigurationIcon(props) {
  return <HotelComboIcon {...props} main={Settings2} accent={BedDouble} />;
}

function HotelBookingIcon(props) {
  return <HotelComboIcon {...props} main={Globe} accent={CalendarDays} />;
}

function HotelReservationIcon(props) {
  return <HotelComboIcon {...props} main={KeyRound} accent={CalendarDays} />;
}

function HotelHousekeepingIcon(props) {
  return <HotelComboIcon {...props} main={Sparkles} accent={Wrench} />;
}

function LoanComboIcon({ main: MainIcon, accent: AccentIcon, size = 38 }) {
  return <HotelComboIcon size={size} main={MainIcon} accent={AccentIcon} />;
}

function LoanSystemIcon(props) { return <LoanComboIcon {...props} main={Settings2} accent={FileText} />; }
function LoanProductsIcon(props) { return <LoanComboIcon {...props} main={House} accent={Tag} />; }
function LoanCreateIcon(props) { return <LoanComboIcon {...props} main={CalendarDays} accent={Coins} />; }
function LoanLedgerIcon(props) { return <LoanComboIcon {...props} main={FileText} accent={ChartNoAxesCombined} />; }
function LoanPortalIcon(props) { return <LoanComboIcon {...props} main={UserRound} accent={ClipboardList} />; }
function LoanAgreementIcon(props) { return <LoanComboIcon {...props} main={Handshake} accent={Coins} />; }

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
  'service-access': KeyRound,
  'service-warranty': WarrantyPosterIcon,
  'service-repair': Wrench,
  'service-orders': ShoppingCart,
  'service-picking': ClipboardList,
  'service-inventory': InventoryPosterIcon,
  'service-actions': BellRing,
  'hotel-configuration': HotelConfigurationIcon,
  'hotel-booking': HotelBookingIcon,
  'hotel-reservation': HotelReservationIcon,
  'hotel-housekeeping': HotelHousekeepingIcon,
  'hotel-restaurant': Utensils,
  'hotel-reports': ChartNoAxesCombined,
  'loan-system': LoanSystemIcon,
  'loan-dashboard': Gauge,
  'loan-products': LoanProductsIcon,
  'loan-create': LoanCreateIcon,
  'loan-validation': FileCheck2,
  'loan-interest': Percent,
  'loan-payments': Clock3,
  'loan-summary': Table2,
  'loan-close': LockKeyhole,
  'loan-accounting': LoanLedgerIcon,
  'loan-portal': LoanPortalIcon,
  'loan-approval': ShieldCheck,
  'loan-agreement': LoanAgreementIcon,
  'loan-mobile': Smartphone,
  building: Building2,
  doctor: Stethoscope,
  records: ClipboardList,
  surgery: CalendarClock,
  imaging: ScanLine,
  nursing: HeartPulse,
  insurance: ShieldCheck,
  portal: CalendarCheck,
  patient: UserRoundCheck,
  mobile: Smartphone,
  'pms-dashboard': LayoutDashboard,
  'pms-portfolio': Building2,
  'pms-crm-pipeline': Filter,
  'pms-sales-invoice': ReceiptText,
  'pms-rental-contract': Repeat2,
  'pms-cashflow': ChartColumnIncreasing,
  'pms-emi-calculator': Calculator,
  'pms-reports': ChartNoAxesCombined,
};

function VideoFrame({ videoId, title }) {
  return <iframe className="jp-cons__iframe" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen title={title} />;
}

function ModuleCard({ module, active, playing, onPlay }) {
  const [expanded, setExpanded] = useState(false);
  const descriptionId = useId();
  const bulletsId = useId();
  const PosterIcon = posterIcons[module.icon] || BookOpen;

  const handleKeyDown = (event) => {
    if (module.videoId && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onPlay();
    }
  };

  return (
    <article className={`jp-cons__step${active ? ' is-active' : ''}`}>
      <div className={`jp-cons__thumbnail${playing ? ' jp-cons__playing' : ''}`} role="button" tabIndex={0} aria-disabled={!module.videoId} aria-label={`Play module ${pad(module.number)}: ${module.title} video`} onClick={module.videoId ? onPlay : undefined} onKeyDown={handleKeyDown}>
        {playing ? <><VideoFrame videoId={module.videoId} title={`${module.title} video`} /><span className="jp-cons__now-playing">Now playing</span></> : (
          <>
            <div className="jp-cons__thumbnail-poster" aria-hidden="true">
              <span className="jp-cons__poster-grid" />
              <span className="jp-cons__poster-watermark">{pad(module.number)}</span>
              <span className="jp-cons__poster-icon"><PosterIcon size={38} strokeWidth={1.7} /></span>
            </div>
            <span className="jp-cons__number">{pad(module.number)}</span>
            <span className="jp-cons__play-pill" aria-hidden="true"><Play size={19} fill="currentColor" /></span>
            <span className="jp-cons__watch-video">Watch video</span>
          </>
        )}
      </div>
      <div className="jp-cons__step-content">
        <h3>{module.title}</h3>
        <p id={descriptionId} className={expanded ? 'is-expanded' : undefined}>{module.desc}</p>
        {module.bullets?.length > 0 && <ul className="jp-cons__step-bullets" id={bulletsId} hidden={!expanded}>{module.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        <button className="jp-cons__read-more" type="button" aria-expanded={expanded} aria-controls={module.bullets?.length ? `${descriptionId} ${bulletsId}` : descriptionId} onClick={() => setExpanded((value) => !value)}>{expanded ? 'Read less' : 'Read more'}</button>
      </div>
    </article>
  );
}

export default function ModuleShowcase({ id, title, subtitle, playerTitle, playerSubtitle, mainVideoId, modules, labelPrefix = 'Floor', warnOnVideoCheckError = false, playerAfterHeading = false, className = '' }) {
  const sectionRef = useRef(null);
  const [playingKey, setPlayingKey] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const numberedModules = useMemo(() => modules.map((module, index) => ({ ...module, number: module.number ?? index + 1 })), [modules]);
  const towerHeight = 31 + numberedModules.length * 23;
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
        if (!response.ok) {
          if (warnOnVideoCheckError && !controller.signal.aborted) {
            console.warn(`Video check failed: module ${module.number}, video ID ${module.videoId} (HTTP ${response.status})`);
          }
          return;
        }
        const { title: videoTitle } = await response.json();
        const match = String(videoTitle || '').match(/^\s*(\d+)\s*[.:)\-]/);
        if (!match || Number(match[1]) !== module.number) {
          console.warn(`Video mismatch: module ${module.number} plays video titled ${videoTitle}`);
        }
      } catch {
        if (warnOnVideoCheckError && !controller.signal.aborted) {
          console.warn(`Video check failed: module ${module.number}, video ID ${module.videoId}`);
        }
      }
    });

    return () => controller.abort();
  }, [modules, numberedModules, warnOnVideoCheckError]);

  const onPlayKey = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setPlayingKey('main');
    }
  };

  const mainPlayer = mainVideoId && <section className="jp-cons__video-section jp-cons__wrap">
    <h2>{playerTitle}</h2><p className="jp-cons__caption">{playerSubtitle}</p>
    {playingKey === 'main' ? <div className="jp-cons__player jp-cons__playing"><VideoFrame videoId={mainVideoId} title={playerTitle} /><span className="jp-cons__now-playing">Now playing</span></div> : (
      <div className="jp-cons__player" role="button" tabIndex={0} aria-label={`Play ${playerTitle} video`} onClick={() => setPlayingKey('main')} onKeyDown={onPlayKey}>
        <div className="jp-cons__player-content"><span className="jp-cons__big-play" aria-hidden="true">▶</span><h3>{playerTitle}</h3><p>{playerSubtitle}</p></div>
      </div>
    )}
  </section>;

  return (
    <>
      {!playerAfterHeading && mainPlayer}
      <section className={`jp-cons__wrap jp-cons__module-section${className ? ` ${className}` : ''}`} id={id} ref={sectionRef}>
        <h2 className="jp-cons__sequence-title">{title}</h2><p className="jp-cons__sequence-intro">{subtitle}</p>
        {playerAfterHeading && mainPlayer}
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
              return <ModuleCard key={module.number} module={module} active={activeIndex === index} playing={playingKey === module.number} onPlay={() => setPlayingKey(module.number)} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
