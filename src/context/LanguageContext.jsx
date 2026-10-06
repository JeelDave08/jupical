import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export const languages = [
  ['ar', 'Arabic (UAE)', 'العربية', 'AE', '🇦🇪'], ['cs', 'Czech', 'Čeština', 'CZ', '🇨🇿'], ['da', 'Danish', 'Dansk', 'DK', '🇩🇰'],
  ['nl', 'Dutch', 'Nederlands', 'NL', '🇳🇱'], ['en-IN', 'English (IN)', 'English (IN)', 'IN', '🇮🇳'], ['en-US', 'English (US)', 'English (US)', 'US', '🇺🇸'],
  ['fr', 'French', 'Français', 'FR', '🇫🇷'], ['de', 'German', 'Deutsch', 'DE', '🇩🇪'], ['el', 'Greek', 'Ελληνικά', 'GR', '🇬🇷'],
  ['hu', 'Hungarian', 'Magyar', 'HU', '🇭🇺'], ['it', 'Italian', 'Italiano', 'IT', '🇮🇹'], ['ja', 'Japanese', '日本語', 'JP', '🇯🇵'],
  ['ko', 'Korean', '한국어', 'KR', '🇰🇷'], ['nb', 'Norwegian', 'Norsk', 'NO', '🇳🇴'], ['ro', 'Romanian', 'Română', 'RO', '🇷🇴'], ['sv', 'Swedish', 'Svenska', 'SE', '🇸🇪'],
].map(([code, label, nativeLabel, countryCode, flag]) => ({ code, label, nativeLabel, countryCode, flag }));

// Keys are English source phrases so content stays centralized and easy to audit.
const en = {
  'CERTIFIED ODOO ERP PARTNER':'CERTIFIED ODOO ERP PARTNER', 'Building Smarter':'Building Smarter',
  'Operations.':'Operations.', 'Driving':'Driving', 'Real Growth.':'Real Growth.',
  'Jupical helps manufacturers, construction, and finance businesses automate, integrate, and scale with expert Odoo ERP implementation and custom development.':'Jupical helps manufacturers, construction, and finance businesses automate, integrate, and scale with expert Odoo ERP implementation and custom development.',
  'Explore Solutions':'Explore Solutions', 'Contact Us':'Contact Us', 'Trusted by':'Trusted by',
  '5000+ Businesses':'5000+ Businesses', 'across':'across', '32+ Countries.':'32+ Countries.',
  'Countries Served':'Countries Served', 'Happy Clients':'Happy Clients', 'Successful Implementations':'Successful Implementations', 'Client Retention Rate':'Client Retention Rate',
  'OUR CLIENTS':'OUR CLIENTS', 'Trusted by Leading Brands Worldwide':'Trusted by Leading Brands Worldwide',
  'We are proud to partner with innovative companies delivering excellence across the globe.':'We are proud to partner with innovative companies delivering excellence across the globe.',
  'WHAT WE DO':'WHAT WE DO', 'Our Services':'Our Services',
  'Innovative Web, Mobile, ERP, AI, and Custom Software Solutions built to scale your business.':'Innovative Web, Mobile, ERP, AI, and Custom Software Solutions built to scale your business.',
  'Web Development':'Web Development', 'Mobile App Development':'Mobile App Development', 'ERP Solutions':'ERP Solutions', 'AI Solutions':'AI Solutions', 'Custom Software Development':'Custom Software Development',
  'Explore Service':'Explore Service', 'Certified Tech Experts':'Certified Tech Experts', 'Proven Methodologies':'Proven Methodologies', 'On-Time Delivery':'On-Time Delivery', 'Long-Term Support':'Long-Term Support',
  'EXPLORE JUPICAL':'EXPLORE JUPICAL', 'Built Around Your Business.':'Built Around Your Business.',
  'Discover the people, principles, partnerships and ideas behind Jupical.':'Discover the people, principles, partnerships and ideas behind Jupical.',
  'The Transformation':'The Transformation', 'Before Odoo → After Odoo':'Before Odoo → After Odoo',
  'Real pain points from real manufacturers — and exactly how Odoo with Jupical fixed them.':'Real pain points from real manufacturers — and exactly how Odoo with Jupical fixed them.',
  'BEFORE — What Failed':'BEFORE — What Failed', 'AFTER — What Held':'AFTER — What Held', 'BEFORE':'BEFORE','AFTER':'AFTER',
  'Start Your Transformation':'Start Your Transformation','Explore Our Global Presence':'Explore Our Global Presence',
  'Global ERP Reach & Localization':'Global ERP Reach & Localization',
  'Choose your language and discover our experience around the world. Serving multi-site enterprises across 16+ localized regions.':'Choose your language and discover our experience around the world. Serving multi-site enterprises across 16+ localized regions.',
  'About Us':'About Us','Why Jupical':'Why Jupical','Our Clients':'Our Clients','Our Philosophy':'Our Philosophy','Blog':'Blog',
  'Company':'Company','Odoo ERPs':'Odoo ERPs','Odoo ERP Solutions':'Odoo ERP Solutions','Odoo Connectors':'Odoo Connectors','Resources':'Resources',
  'Manufacturing ERP':'Manufacturing ERP','Construction ERP':'Construction ERP','Healthcare ERP':'Healthcare ERP','Education ERP':'Education ERP','Inventory ERP':'Inventory ERP','Finance ERP':'Finance ERP','Hotel ERP':'Hotel ERP','Loan Management':'Loan Management',
  'Coming Soon':'Coming Soon','View All Resources':'View All Resources','Stay informed. Stay ahead.':'Stay informed. Stay ahead.',
  'Click to explore in':'Click to explore in','Explore':'Explore','Website':'Website',
};

const common = {
  fr: ['PARTENAIRE ODOO ERP CERTIFIÉ','Des opérations plus intelligentes','Opérations.','Stimuler','Une vraie croissance.','Explorer les solutions','Contactez-nous','Au service de','Entreprises','dans','Pays.','Pays desservis','Clients satisfaits','Implémentations réussies','Fidélisation client','NOS CLIENTS','La confiance des grandes marques du monde entier','Nous sommes fiers de collaborer avec des entreprises innovantes qui excellent dans le monde entier.','CE QUE NOUS FAISONS','Nos services','Des solutions innovantes pour le Web, le mobile, l’ERP, l’IA et les logiciels sur mesure, conçues pour développer votre activité.','Développement Web','Développement d’applications mobiles','Solutions ERP','Solutions d’IA','Développement logiciel sur mesure','Découvrir le service','Experts techniques certifiés','Méthodes éprouvées','Livraison dans les délais','Assistance à long terme','DÉCOUVRIR JUPICAL','Conçu autour de votre activité.','Découvrez les personnes, principes, partenariats et idées qui font Jupical.','La transformation','Avant Odoo → Après Odoo','Les vrais défis des fabricants et la façon dont Odoo avec Jupical les a résolus.','AVANT — Les problèmes','APRÈS — Les résultats','AVANT','APRÈS','Lancez votre transformation','Notre présence mondiale','Portée mondiale et localisation ERP','Choisissez votre langue et découvrez notre expérience dans le monde entier. Au service d’entreprises multisites dans plus de 16 régions localisées.'],
  de: ['ZERTIFIZIERTER ODOO-ERP-PARTNER','Intelligentere Abläufe','Abläufe.','Fördert','Echtes Wachstum.','Lösungen entdecken','Kontakt','Vertrauen von','Unternehmen','in','Ländern.','Länder im Einsatz','Zufriedene Kunden','Erfolgreiche Implementierungen','Kundenbindung','UNSERE KUNDEN','Weltweit führende Marken vertrauen uns','Wir sind stolz darauf, mit innovativen Unternehmen weltweit zusammenzuarbeiten.','WAS WIR TUN','Unsere Leistungen','Innovative Web-, Mobil-, ERP-, KI- und individuelle Softwarelösungen für das Wachstum Ihres Unternehmens.','Webentwicklung','Entwicklung mobiler Apps','ERP-Lösungen','KI-Lösungen','Individuelle Softwareentwicklung','Leistung entdecken','Zertifizierte Tech-Experten','Bewährte Methoden','Pünktliche Lieferung','Langfristiger Support','JUPICAL ENTDECKEN','Für Ihr Unternehmen entwickelt.','Entdecken Sie die Menschen, Prinzipien, Partnerschaften und Ideen hinter Jupical.','Die Transformation','Vor Odoo → Nach Odoo','Echte Herausforderungen von Herstellern und wie Odoo mit Jupical sie gelöst hat.','VORHER — Was schiefging','NACHHER — Was funktionierte','VORHER','NACHHER','Starten Sie Ihre Transformation','Unsere globale Präsenz','Globale ERP-Reichweite und Lokalisierung','Wählen Sie Ihre Sprache und entdecken Sie unsere weltweite Erfahrung. Wir betreuen Unternehmen an mehreren Standorten in über 16 Regionen.'],
  es: [],
};
// Locale phrase tables share the same source keys; English regional variants retain English copy.
const translatedPhrases = {
  ar: ['شريك معتمد لـ Odoo ERP','عمليات أكثر ذكاءً','العمليات.','نحقق','نمو حقيقي.','استكشف الحلول','اتصل بنا','موثوق به من','شركة','في','دولة.','دولة نخدمها','عملاء سعداء','تنفيذ ناجح','الاحتفاظ بالعملاء','عملاؤنا','موثوق به من علامات تجارية رائدة حول العالم','نفخر بالشراكة مع شركات مبتكرة تقدم التميز في جميع أنحاء العالم.','ماذا نقدم','خدماتنا','حلول مبتكرة للويب والهواتف المحمولة وERP والذكاء الاصطناعي والبرمجيات المخصصة لتنمية أعمالك.','تطوير الويب','تطوير تطبيقات الهاتف','حلول ERP','حلول الذكاء الاصطناعي','تطوير برمجيات مخصصة','استكشف الخدمة','خبراء تقنيون معتمدون','منهجيات مثبتة','التسليم في الوقت المحدد','دعم طويل الأمد','استكشف Jupical','مصمم حول أعمالك.','اكتشف الأشخاص والمبادئ والشراكات والأفكار وراء Jupical.','التحول','قبل Odoo ← بعد Odoo','تحديات حقيقية للمصنعين وكيف عالجها Odoo مع Jupical.','قبل — ما تعطل','بعد — ما نجح','قبل','بعد','ابدأ التحول','اكتشف حضورنا العالمي','انتشار ERP عالمي وتوطين','اختر لغتك واكتشف خبرتنا حول العالم. نخدم شركات متعددة المواقع في أكثر من 16 منطقة.'],
  cs: ['CERTIFIKOVANÝ PARTNER ODOO ERP','Chytřejší provoz','Provoz.','Podporujeme','Skutečný růst.','Prozkoumat řešení','Kontaktujte nás','Důvěřují nám','firem','v','zemích.','Obsluhované země','Spokojení klienti','Úspěšné implementace','Udržení klientů','NAŠI KLIENTI','Důvěřují nám přední značky po celém světě','Jsme hrdí na spolupráci s inovativními společnostmi po celém světě.','CO DĚLÁME','Naše služby','Inovativní webová, mobilní, ERP, AI a zakázková softwarová řešení pro růst vašeho podnikání.','Vývoj webu','Vývoj mobilních aplikací','ERP řešení','AI řešení','Vývoj softwaru na míru','Prozkoumat službu','Certifikovaní techničtí odborníci','Ověřené postupy','Dodání včas','Dlouhodobá podpora','PROZKOUMAT JUPICAL','Postaveno kolem vašeho podnikání.','Poznejte lidi, principy, partnerství a myšlenky stojící za Jupical.','Proměna','Před Odoo → Po Odoo','Skutečné problémy výrobců a jak je Odoo s Jupical vyřešilo.','PŘED — Co selhalo','PO — Co fungovalo','PŘED','PO','Začněte svou proměnu','Poznejte naši globální působnost','Globální dosah ERP a lokalizace','Zvolte jazyk a objevte naše zkušenosti z celého světa. Podporujeme firmy ve více než 16 regionech.'],
  da: ['CERTIFICERET ODOO ERP-PARTNER','Smartere drift','Drift.','Skaber','Vækst i virkeligheden.','Udforsk løsninger','Kontakt os','Betroet af','virksomheder','i','lande.','Lande betjent','Tilfredse kunder','Succesfulde implementeringer','Kundefastholdelse','VORES KUNDER','Betroet af førende brands verden over','Vi er stolte af at samarbejde med innovative virksomheder verden over.','DET GØR VI','Vores tjenester','Innovative web-, mobil-, ERP-, AI- og specialudviklede softwareløsninger, der skalerer din virksomhed.','Webudvikling','Udvikling af mobilapps','ERP-løsninger','AI-løsninger','Specialudvikling af software','Udforsk tjenesten','Certificerede teknologieksperter','Dokumenterede metoder','Levering til tiden','Langsigtet support','UDFORSK JUPICAL','Bygget omkring din virksomhed.','Mød menneskene, principperne, partnerskaberne og idéerne bag Jupical.','Forvandlingen','Før Odoo → Efter Odoo','Virkelige udfordringer fra producenter og hvordan Odoo med Jupical løste dem.','FØR — Det der fejlede','EFTER — Det der virkede','FØR','EFTER','Start din forvandling','Udforsk vores globale tilstedeværelse','Global ERP-rækkevidde og lokalisering','Vælg sprog, og oplev vores erfaring verden over. Vi betjener virksomheder i over 16 regioner.'],
  nl: ['GECERTIFICEERDE ODOO ERP-PARTNER','Slimmere bedrijfsvoering','Bedrijfsvoering.','Stimuleert','Echte groei.','Ontdek oplossingen','Contact opnemen','Vertrouwd door','bedrijven','in','landen.','Landen bediend','Tevreden klanten','Succesvolle implementaties','Klantbehoud','ONZE KLANTEN','Vertrouwd door toonaangevende merken wereldwijd','We zijn trots op onze samenwerking met innovatieve bedrijven over de hele wereld.','WAT WE DOEN','Onze diensten','Innovatieve web-, mobiele, ERP-, AI- en maatwerksoftwareoplossingen voor groei van uw bedrijf.','Webontwikkeling','Mobiele appontwikkeling','ERP-oplossingen','AI-oplossingen','Maatwerksoftwareontwikkeling','Dienst verkennen','Gecertificeerde technologie-experts','Bewezen methoden','Tijdige levering','Langdurige ondersteuning','ONTDEK JUPICAL','Gebouwd rond uw bedrijf.','Ontdek de mensen, principes, partnerschappen en ideeën achter Jupical.','De transformatie','Voor Odoo → Na Odoo','Echte uitdagingen van fabrikanten en hoe Odoo met Jupical ze oploste.','VOOR — Wat misging','NA — Wat werkte','VOOR','NA','Start uw transformatie','Ontdek onze wereldwijde aanwezigheid','Wereldwijd ERP-bereik en lokalisatie','Kies uw taal en ontdek onze ervaring wereldwijd. We ondersteunen bedrijven op meerdere locaties in meer dan 16 regio’s.'],
  el: ['ΠΙΣΤΟΠΟΙΗΜΕΝΟΣ ΣΥΝΕΡΓΑΤΗΣ ODOO ERP','Εξυπνότερες λειτουργίες','Λειτουργίες.','Προωθούμε','Πραγματική ανάπτυξη.','Εξερευνήστε λύσεις','Επικοινωνήστε μαζί μας','Μας εμπιστεύονται','επιχειρήσεις','σε','χώρες.','Χώρες εξυπηρέτησης','Ευχαριστημένοι πελάτες','Επιτυχημένες υλοποιήσεις','Διατήρηση πελατών','ΟΙ ΠΕΛΑΤΕΣ ΜΑΣ','Μας εμπιστεύονται κορυφαίες επωνυμίες παγκοσμίως','Είμαστε περήφανοι που συνεργαζόμαστε με καινοτόμες εταιρείες σε όλο τον κόσμο.','ΤΙ ΚΑΝΟΥΜΕ','Οι υπηρεσίες μας','Καινοτόμες λύσεις web, κινητών, ERP, AI και προσαρμοσμένου λογισμικού για την ανάπτυξη της επιχείρησής σας.','Ανάπτυξη ιστοσελίδων','Ανάπτυξη εφαρμογών κινητών','Λύσεις ERP','Λύσεις AI','Ανάπτυξη προσαρμοσμένου λογισμικού','Εξερευνήστε την υπηρεσία','Πιστοποιημένοι τεχνικοί ειδικοί','Αποδεδειγμένες μεθοδολογίες','Παράδοση στην ώρα της','Μακροχρόνια υποστήριξη','ΕΞΕΡΕΥΝΗΣΤΕ ΤΗ JUPICAL','Σχεδιασμένο γύρω από την επιχείρησή σας.','Γνωρίστε τους ανθρώπους, τις αρχές, τις συνεργασίες και τις ιδέες πίσω από τη Jupical.','Ο μετασχηματισμός','Πριν από το Odoo → Μετά το Odoo','Πραγματικά προβλήματα κατασκευαστών και πώς τα έλυσε το Odoo με τη Jupical.','ΠΡΙΝ — Τι απέτυχε','ΜΕΤΑ — Τι λειτούργησε','ΠΡΙΝ','ΜΕΤΑ','Ξεκινήστε τον μετασχηματισμό σας','Εξερευνήστε την παγκόσμια παρουσία μας','Παγκόσμια εμβέλεια ERP και τοπικοποίηση','Επιλέξτε γλώσσα και ανακαλύψτε την εμπειρία μας σε όλο τον κόσμο. Εξυπηρετούμε επιχειρήσεις σε περισσότερες από 16 περιοχές.'],
};
translatedPhrases.fr = common.fr;
translatedPhrases.de = common.de;

// Additional high-visibility copy, keyed by the English source phrases.
// Keeping these beside the phrase tables prevents the remaining locales from
// silently falling back to English for the header and primary landing sections.
const localeExtras = {
  hu: {
    'Company':'Cégünk','Odoo ERP Solutions':'Odoo ERP-megoldások','Odoo Connectors':'Odoo-integrációk','Resources':'Források','Contact Us':'Kapcsolat','About Us':'Rólunk','Why Jupical':'Miért a Jupical?','Our Clients':'Ügyfeleink','Our Philosophy':'Filozófiánk','Blog':'Blog','Building Smarter':'Okosabb','Operations.':'működés.','Driving':'Valódi','Real Growth.':'növekedést érünk el.','Explore Solutions':'Megoldások felfedezése','Our Services':'Szolgáltatásaink','Web Development':'Webfejlesztés','Mobile App Development':'Mobilalkalmazás-fejlesztés','ERP Solutions':'ERP-megoldások','AI Solutions':'MI-megoldások','Custom Software Development':'Egyedi szoftverfejlesztés','Explore Service':'Szolgáltatás megtekintése','Built Around Your Business.':'Az Ön vállalkozására szabva.','Discover the people, principles, partnerships and ideas behind Jupical.':'Ismerje meg a Jupical mögött álló embereket, elveket, partnerségeket és ötleteket.','The Transformation':'Az átalakulás','Before Odoo → After Odoo':'Odoo előtt → Odoo után','Start Your Transformation':'Indítsa el az átalakulást','Global ERP Reach & Localization':'Globális ERP-jelenlét és lokalizáció','Explore Our Global Presence':'Ismerje meg globális jelenlétünket'
  },
  it: {
    'Company':'Azienda','Odoo ERP Solutions':'Soluzioni ERP Odoo','Odoo Connectors':'Connettori Odoo','Resources':'Risorse','Contact Us':'Contattaci','About Us':'Chi siamo','Why Jupical':'Perché Jupical','Our Clients':'I nostri clienti','Our Philosophy':'La nostra filosofia','Blog':'Blog','Building Smarter':'Costruiamo','Operations.':'operazioni più efficienti.','Driving':'Promuoviamo','Real Growth.':'una crescita concreta.','Explore Solutions':'Scopri le soluzioni','Our Services':'I nostri servizi','Web Development':'Sviluppo web','Mobile App Development':'Sviluppo di app mobile','ERP Solutions':'Soluzioni ERP','AI Solutions':'Soluzioni AI','Custom Software Development':'Sviluppo software personalizzato','Explore Service':'Scopri il servizio','Built Around Your Business.':'Progettato intorno alla tua attività.','Discover the people, principles, partnerships and ideas behind Jupical.':'Scopri le persone, i principi, le partnership e le idee alla base di Jupical.','The Transformation':'La trasformazione','Before Odoo → After Odoo':'Prima di Odoo → Dopo Odoo','Start Your Transformation':'Avvia la trasformazione','Global ERP Reach & Localization':'Presenza ERP globale e localizzazione','Explore Our Global Presence':'Scopri la nostra presenza globale'
  },
  ja: {
    'Company':'会社情報','Odoo ERP Solutions':'Odoo ERPソリューション','Odoo Connectors':'Odooコネクター','Resources':'リソース','Contact Us':'お問い合わせ','About Us':'会社概要','Why Jupical':'Jupicalが選ばれる理由','Our Clients':'お客様','Our Philosophy':'理念','Blog':'ブログ','Building Smarter':'業務をよりスマートに。','Operations.':'効率的な運用を実現し、','Driving':'確かな','Real Growth.':'成長を支援します。','Explore Solutions':'ソリューションを見る','Our Services':'サービス','Web Development':'ウェブ開発','Mobile App Development':'モバイルアプリ開発','ERP Solutions':'ERPソリューション','AI Solutions':'AIソリューション','Custom Software Development':'カスタムソフトウェア開発','Explore Service':'サービスを見る','Built Around Your Business.':'お客様のビジネスに合わせて。','Discover the people, principles, partnerships and ideas behind Jupical.':'Jupicalを支える人々、理念、パートナーシップ、アイデアをご紹介します。','The Transformation':'変革','Before Odoo → After Odoo':'Odoo導入前 → 導入後','Start Your Transformation':'変革を始める','Global ERP Reach & Localization':'グローバルERP展開とローカライズ','Explore Our Global Presence':'世界各地での展開を見る'
  },
  ko: {
    'Company':'회사','Odoo ERP Solutions':'Odoo ERP 솔루션','Odoo Connectors':'Odoo 커넥터','Resources':'자료','Contact Us':'문의하기','About Us':'회사 소개','Why Jupical':'Jupical을 선택하는 이유','Our Clients':'고객사','Our Philosophy':'철학','Blog':'블로그','Building Smarter':'더 스마트한','Operations.':'업무 운영.','Driving':'실질적인','Real Growth.':'성장을 이끕니다.','Explore Solutions':'솔루션 살펴보기','Our Services':'서비스','Web Development':'웹 개발','Mobile App Development':'모바일 앱 개발','ERP Solutions':'ERP 솔루션','AI Solutions':'AI 솔루션','Custom Software Development':'맞춤형 소프트웨어 개발','Explore Service':'서비스 살펴보기','Built Around Your Business.':'비즈니스에 꼭 맞게 설계합니다.','Discover the people, principles, partnerships and ideas behind Jupical.':'Jupical을 만들어 가는 사람과 원칙, 파트너십, 아이디어를 만나보세요.','The Transformation':'변화','Before Odoo → After Odoo':'Odoo 도입 전 → 도입 후','Start Your Transformation':'변화를 시작하세요','Global ERP Reach & Localization':'글로벌 ERP 범위 및 현지화','Explore Our Global Presence':'글로벌 진출 현황 보기'
  },
  nb: {
    'Company':'Selskap','Odoo ERP Solutions':'Odoo ERP-løsninger','Odoo Connectors':'Odoo-koblinger','Resources':'Ressurser','Contact Us':'Kontakt oss','About Us':'Om oss','Why Jupical':'Hvorfor Jupical','Our Clients':'Kundene våre','Our Philosophy':'Vår filosofi','Blog':'Blogg','Building Smarter':'Vi skaper smartere','Operations.':'drift.','Driving':'og driver','Real Growth.':'reell vekst.','Explore Solutions':'Utforsk løsninger','Our Services':'Tjenestene våre','Web Development':'Webutvikling','Mobile App Development':'Utvikling av mobilapper','ERP Solutions':'ERP-løsninger','AI Solutions':'KI-løsninger','Custom Software Development':'Skreddersydd programvareutvikling','Explore Service':'Utforsk tjenesten','Built Around Your Business.':'Utformet rundt virksomheten din.','Discover the people, principles, partnerships and ideas behind Jupical.':'Bli kjent med menneskene, prinsippene, partnerskapene og ideene bak Jupical.','The Transformation':'Omstillingen','Before Odoo → After Odoo':'Før Odoo → Etter Odoo','Start Your Transformation':'Start omstillingen','Global ERP Reach & Localization':'Global ERP-dekning og lokalisering','Explore Our Global Presence':'Utforsk vår globale tilstedeværelse'
  },
  ro: {
    'Company':'Companie','Odoo ERP Solutions':'Soluții ERP Odoo','Odoo Connectors':'Conectori Odoo','Resources':'Resurse','Contact Us':'Contactați-ne','About Us':'Despre noi','Why Jupical':'De ce Jupical','Our Clients':'Clienții noștri','Our Philosophy':'Filosofia noastră','Blog':'Blog','Building Smarter':'Construim operațiuni','Operations.':'mai inteligente și','Driving':'susținem o','Real Growth.':'creștere reală.','Explore Solutions':'Descoperiți soluțiile','Our Services':'Serviciile noastre','Web Development':'Dezvoltare web','Mobile App Development':'Dezvoltare de aplicații mobile','ERP Solutions':'Soluții ERP','AI Solutions':'Soluții AI','Custom Software Development':'Dezvoltare software personalizat','Explore Service':'Descoperiți serviciul','Built Around Your Business.':'Creat în jurul afacerii dumneavoastră.','Discover the people, principles, partnerships and ideas behind Jupical.':'Descoperiți oamenii, principiile, parteneriatele și ideile din spatele Jupical.','The Transformation':'Transformarea','Before Odoo → After Odoo':'Înainte de Odoo → După Odoo','Start Your Transformation':'Începeți transformarea','Global ERP Reach & Localization':'Acoperire ERP globală și localizare','Explore Our Global Presence':'Descoperiți prezența noastră globală'
  },
  sv: {
    'Company':'Företaget','Odoo ERP Solutions':'Odoo ERP-lösningar','Odoo Connectors':'Odoo-kopplingar','Resources':'Resurser','Contact Us':'Kontakta oss','About Us':'Om oss','Why Jupical':'Varför Jupical','Our Clients':'Våra kunder','Our Philosophy':'Vår filosofi','Blog':'Blogg','Building Smarter':'Vi skapar smartare','Operations.':'verksamheter.','Driving':'och driver','Real Growth.':'verklig tillväxt.','Explore Solutions':'Utforska lösningar','Our Services':'Våra tjänster','Web Development':'Webbutveckling','Mobile App Development':'Utveckling av mobilappar','ERP Solutions':'ERP-lösningar','AI Solutions':'AI-lösningar','Custom Software Development':'Skräddarsydd mjukvaruutveckling','Explore Service':'Utforska tjänsten','Built Around Your Business.':'Utformat för din verksamhet.','Discover the people, principles, partnerships and ideas behind Jupical.':'Lär känna människorna, principerna, partnerskapen och idéerna bakom Jupical.','The Transformation':'Omställningen','Before Odoo → After Odoo':'Före Odoo → Efter Odoo','Start Your Transformation':'Påbörja omställningen','Global ERP Reach & Localization':'Global ERP-räckvidd och lokalisering','Explore Our Global Presence':'Utforska vår globala närvaro'
  }
};
for (const [code, translations] of Object.entries({
  ar: { 'Company':'الشركة','Odoo ERPs':'حلول Odoo ERP','Odoo Connectors':'موصلات Odoo','Resources':'الموارد','Contact Us':'اتصل بنا' },
  cs: { 'Company':'Společnost','Odoo ERPs':'Odoo ERP','Odoo Connectors':'Konektory Odoo','Resources':'Zdroje','Contact Us':'Kontaktujte nás' },
  da: { 'Company':'Virksomhed','Odoo ERPs':'Odoo ERP','Odoo Connectors':'Odoo-forbindelser','Resources':'Ressourcer','Contact Us':'Kontakt os' },
  nl: { 'Company':'Bedrijf','Odoo ERPs':'Odoo ERP','Odoo Connectors':'Odoo-koppelingen','Resources':'Bronnen','Contact Us':'Contact opnemen' },
  fr: { 'Company':'Entreprise','Odoo ERPs':'ERP Odoo','Odoo Connectors':'Connecteurs Odoo','Resources':'Ressources','Contact Us':'Contactez-nous' },
  de: { 'Company':'Unternehmen','Odoo ERPs':'Odoo-ERP','Odoo Connectors':'Odoo-Konnektoren','Resources':'Ressourcen','Contact Us':'Kontakt' },
  el: { 'Company':'Εταιρεία','Odoo ERPs':'Odoo ERP','Odoo Connectors':'Συνδέσεις Odoo','Resources':'Πόροι','Contact Us':'Επικοινωνία' },
  hu: { 'Odoo ERPs':'Odoo ERP-k','Certified Tech Experts':'Minősített technológiai szakértők','Proven Methodologies':'Bevált módszertanok','On-Time Delivery':'Pontos teljesítés','Long-Term Support':'Hosszú távú támogatás' },
  it: { 'Odoo ERPs':'ERP Odoo','Certified Tech Experts':'Esperti tecnologici certificati','Proven Methodologies':'Metodologie collaudate','On-Time Delivery':'Consegna puntuale','Long-Term Support':'Assistenza a lungo termine' },
  ja: { 'Odoo ERPs':'Odoo ERP','Certified Tech Experts':'認定技術エキスパート','Proven Methodologies':'実績ある方法論','On-Time Delivery':'納期厳守','Long-Term Support':'長期サポート' },
  ko: { 'Odoo ERPs':'Odoo ERP','Certified Tech Experts':'인증된 기술 전문가','Proven Methodologies':'검증된 방법론','On-Time Delivery':'정시 납품','Long-Term Support':'장기 지원' },
  nb: { 'Odoo ERPs':'Odoo ERP','Certified Tech Experts':'Sertifiserte teknologieksperter','Proven Methodologies':'Velprøvde metoder','On-Time Delivery':'Levering til avtalt tid','Long-Term Support':'Langsiktig støtte' },
  ro: { 'Odoo ERPs':'ERP-uri Odoo','Certified Tech Experts':'Experți tehnici certificați','Proven Methodologies':'Metodologii verificate','On-Time Delivery':'Livrare la timp','Long-Term Support':'Asistență pe termen lung' },
  sv: { 'Odoo ERPs':'Odoo ERP','Certified Tech Experts':'Certifierade teknikexperter','Proven Methodologies':'Beprövade metoder','On-Time Delivery':'Leverans i tid','Long-Term Support':'Långsiktig support' },
})) localeExtras[code] = { ...localeExtras[code], ...translations };

const localeCodes = languages.map(({ code }) => code);
const phrases = Object.keys(en);
const languageTables = Object.fromEntries(localeCodes.map((code) => {
  if (code === 'en-IN' || code === 'en-US') return [code, en];
  const values = translatedPhrases[code];
  const table = { ...Object.fromEntries(phrases.map((phrase, i) => [phrase, values?.[i] || phrase])), ...(localeExtras[code] ?? {}) };
  return [code, table];
}));

export function validateTranslations() {
  const expected = new Set(phrases);
  return Object.fromEntries(Object.entries(languageTables).map(([code, table]) => [code, {
    missing: [...expected].filter((key) => !(key in table)),
    extra: Object.keys(table).filter((key) => !expected.has(key)),
    empty: Object.entries(table).filter(([, value]) => !String(value).trim()).map(([key]) => key),
  }]));
}

const LanguageContext = createContext(null);
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('jupical_language') ?? localStorage.getItem('jupical-language');
      return localeCodes.includes(saved) ? saved : 'en-IN';
    }
    catch { return 'en-IN'; }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('jupical_language', language);
      localStorage.setItem('jupical-language', language);
    } catch { /* storage can be disabled */ }
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: (phrase) => languageTables[language]?.[phrase] ?? phrase }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
