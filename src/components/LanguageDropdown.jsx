import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe2 } from 'lucide-react';
import { languages, useLanguage } from '../context/LanguageContext';
import './LanguageDropdown.css';

export default function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const selected = languages.find((item) => item.code === language) ?? languages[4];

  useEffect(() => {
    const onPointerDown = (event) => { if (!rootRef.current?.contains(event.target)) setOpen(false); };
    const onKeyDown = (event) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => { document.removeEventListener('pointerdown', onPointerDown); document.removeEventListener('keydown', onKeyDown); };
  }, []);

  return <div className="language-selector" ref={rootRef}>
    <button className="language-selector__trigger" type="button" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
      <Globe2 size={17} aria-hidden="true" />
      <span>{selected.nativeLabel}</span>
      <ChevronDown className="language-selector__chevron" size={15} aria-hidden="true" />
    </button>
    <div className={`language-selector__panel${open ? ' is-open' : ''}`} role="listbox" aria-label="Select language" aria-hidden={!open}>
      {languages.map((item) => <button key={item.code} type="button" role="option" aria-selected={language === item.code} tabIndex={open ? 0 : -1} className={`language-selector__option${language === item.code ? ' is-selected' : ''}`} onClick={() => { setLanguage(item.code); setOpen(false); }}>
        <span className="language-selector__flag" aria-hidden="true">{item.flag}</span>
        <span className="language-selector__name">{item.label}</span>
        <span className="language-selector__code">{item.countryCode}</span>
        {language === item.code && <Check className="language-selector__check" size={16} aria-label="Selected" />}
      </button>)}
    </div>
  </div>;
}
