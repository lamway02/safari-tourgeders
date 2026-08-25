import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ChevronDown, ChevronRight, Compass, Mail, Menu, Play, ShieldCheck, Sparkles, TreePine, Users, X } from 'lucide-react';
import './styles.css';

const images = {
  safariVehicle: '/Images/ashim-d-silva-h8b1T39sm2w-unsplash.jpg',
  elephants: '/Images/erwin-gerber-o9_hNU0ywgU-unsplash.jpg',
  savannah: '/Images/hu-chen-3yd8oXGoLqM-unsplash.jpg',
  lion: '/Images/magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg',
  leopard: '/Images/denice-alex-HrcPumKuhfM-unsplash.jpg',
  migration: '/Images/redcharlie-nf7W_hn6DKQ-unsplash.jpg',
  mountainClimbers: '/Images/crispin-jones-DDEBAl7ULAo-unsplash.jpg',
  mountainWide: '/Images/hu-chen-BRXn1JtdXtc-unsplash.jpg',
  highCountry: '/Images/dawn-westveld-FmUx8z_Tz4A-unsplash.jpg',
  zanzibar: '/Images/dmitry-limonov-tey68pExQKM-unsplash.jpg',
  zanzibarBeach: '/Images/med-j-ePeTsqcyUiI-unsplash.jpg'
};

const safaris = [
  { days: '03 DAYS', title: 'The Great North', places: 'Tarangire · Ngorongoro', price: '$1,280', image: images.elephants, tag: 'BESTSELLER' },
  { days: '05 DAYS', title: 'Serengeti in Full', places: 'Serengeti · Ngorongoro · Tarangire', price: '$2,460', image: images.lion, tag: 'WILDLIFE' },
  { days: '07 DAYS', title: 'Migration & Crater', places: 'Serengeti · Central · Ngorongoro', price: '$3,180', image: images.migration, tag: 'SEASONAL' }
];

const routes = [
  { days: '7 DAYS', title: 'Machame Route', meta: 'Challenging · 62 km', image: images.mountainClimbers },
  { days: '8 DAYS', title: 'Lemosho Route', meta: 'Exceptional scenery · 70 km', image: images.mountainWide },
  { days: '6 DAYS', title: 'Marangu Route', meta: 'Mountain huts · 72 km', image: images.highCountry }
];

const heroSlides = [
  { image: images.safariVehicle, label: 'THE WILD NORTH', phrase: 'Wildlife stories.' }
];

const translations = {
  en: {
    home: 'Home', safaris: 'Safaris', kilimanjaro: 'Kilimanjaro', experiences: 'Experiences', story: 'Our story', journal: 'Journal',
    plan: 'Plan my trip', welcome: 'WELCOME TO TANZANIA', title: 'Wild at heart.', phrase: 'Wildlife stories.',
    description: 'From the wildlife-filled plains of the Serengeti to the summit of Mount Kilimanjaro, experience Tanzania with people who know this land by heart.',
    explore: 'Explore safaris', climb: 'Climb Kilimanjaro', local: 'Local expertise', groups: 'Small groups', thoughtful: 'Thoughtful travel'
  },
  ru: {
    home: 'Главная', safaris: 'Сафари', kilimanjaro: 'Килиманджаро', experiences: 'Впечатления', story: 'О нас', journal: 'Журнал',
    plan: 'Спланировать поездку', welcome: 'ДОБРО ПОЖАЛОВАТЬ В ТАНЗАНИЮ', title: 'Сердцем к дикой природе.', phrase: 'Истории дикой природы.',
    description: 'От богатых дикой природой равнин Серенгети до вершины Килиманджаро: откройте Танзанию вместе с людьми, которые знают эту землю всем сердцем.',
    explore: 'Исследовать сафари', climb: 'Восхождение на Килиманджаро', local: 'Местные эксперты', groups: 'Небольшие группы', thoughtful: 'Осознанные путешествия'
  }
};

const russianCopy = {
  Tanzania: 'Танзания', 'East Africa': 'Восточная Африка', 'THE WILD NORTH': 'ДИКИЙ СЕВЕР', Explore: 'Исследовать', Gallery: 'Галерея', 'Moments from the field': 'Моменты с места', 'Real moments from our journeys across Tanzania.': 'Настоящие моменты наших путешествий по Танзании.', PHOTO: 'ФОТО', VIDEO: 'ВИДЕО', 'Safari sunset': 'Закат на сафари', 'Tanzania in the wild': 'Танзания в дикой природе', 'Safari moments': 'Моменты сафари', 'Wild Tanzania': 'Дикая Танзания', 'Travel stories': 'Истории путешествий', 'Coming soon': 'Скоро', 'We are preparing something special.': 'Мы готовим нечто особенное.', 'Our trip planning page is coming soon.': 'Наша страница планирования поездки скоро будет доступна.', 'Chat with us on WhatsApp': 'Напишите нам в WhatsApp', 'Back to home': 'На главную',
  'Your Tanzania, your way': 'Ваша Танзания, ваш путь', 'Two worlds.': 'Два мира.', 'One extraordinary': 'Одно удивительное', ' journey.': ' путешествие.',
  'We create unhurried adventures for curious people: days spent tracking elephants, nights beneath enormous skies, and mornings that begin above the clouds. Always local. Always personal.': 'Мы создаём неспешные приключения для любознательных людей: дни среди слонов, ночи под бескрайним небом и утра над облаками. Всегда местные. Всегда личные.',
  'Choose your rhythm': 'Выберите свой ритм', 'What brings you': 'Что привело вас', 'to Tanzania?': 'в Танзанию?', 'Whether you come for the untamed or the uphill, we will take you deeper into it.': 'Будь то дикая природа или горные вершины, мы поможем вам познать их глубже.',
  'Wildlife safaris': 'Сафари в дикой природе', 'Follow the pulse of the plains, from the big five to the little-known corners in between.': 'Следуйте ритму равнин: от большой пятёрки до малоизвестных уголков.', 'Mountain climbing': 'Восхождение в горы', 'Find your altitude on Africa\'s highest peak, with a team that puts your safety first.': 'Покорите высочайшую вершину Африки с командой, которая превыше всего ставит вашу безопасность.', 'Local experiences': 'Местные впечатления', 'Slow down for coffee, waterfalls, village walks and the stories beyond the guidebook.': 'Остановитесь ради кофе, водопадов, прогулок по деревням и историй за пределами путеводителей.',
  'From our field notes': 'Из наших полевых заметок', 'See Tanzania': 'Увидьте Танзанию', 'your way.': 'по-своему.', Safaris: 'Сафари', 'Mountain climbs': 'Горные маршруты', 'Tanzania coast': 'Побережье Танзании', SAFARI: 'САФАРИ', KILIMANJARO: 'КИЛИМАНДЖАРО', ZANZIBAR: 'ЗАНЗИБАР', 'Safari in the wild': 'Сафари в дикой природе', 'Elephant country': 'Земля слонов', 'Open horizons': 'Открытые горизонты', 'Wildlife up close': 'Дикая природа рядом', 'Safari tracks': 'Следы сафари', 'Migration season': 'Сезон миграции', 'On the trail': 'На маршруте', 'Above the clouds': 'Над облаками', 'The high country': 'Высокогорье', 'Summit air': 'Воздух вершины', 'Zanzibar from above': 'Занзибар с высоты', 'Blue water, slow days': 'Синяя вода, неспешные дни',
  'Local experts. Real Tanzania.': 'Местные эксперты. Настоящая Танзания.', 'Arusha, Tanzania': 'Аруша, Танзания', 'Our home base': 'Наш дом', 'Come as a guest.': 'Приезжайте гостем.', 'Leave with a story.': 'Уезжайте с историей.', 'Simonov Trekking & Safaris is a locally operated team that lives between two horizons: the open savannah and the high mountain sky.': 'Simonov Trekking & Safaris — местная команда, живущая между двумя горизонтами: открытой саванной и высокогорным небом.', 'We are a small, locally operated team of guides, planners and hosts. We know the routes, the seasons, the quiet places and the people who make Tanzania unforgettable.': 'Мы небольшая местная команда гидов, организаторов и хозяев. Мы знаем маршруты, сезоны, тихие места и людей, делающих Танзанию незабываемой.', 'years on the ground': 'лет на месте', 'locally operated': 'местная команда', 'Meet our team': 'Познакомиться с командой',
  'Into the wild': 'В дикую природу', 'Journeys worth': 'Путешествия, ради которых', 'getting lost in.': 'стоит потеряться.', 'View all safaris': 'Все сафари', 'BESTSELLER': 'ХИТ ПРОДАЖ', WILDLIFE: 'ДИКАЯ ПРИРОДА', SEASONAL: 'СЕЗОННОЕ', 'PRIVATE SAFARI': 'ЧАСТНОЕ САФАРИ', 'FROM': 'ОТ', 'The Great North': 'Великий Север', 'Tarangire · Ngorongoro': 'Тарангире · Нгоронгоро', 'Serengeti in Full': 'Серенгети полностью', 'Serengeti · Ngorongoro · Tarangire': 'Серенгети · Нгоронгоро · Тарангире', 'Migration & Crater': 'Миграция и кратер', 'Serengeti · Central · Ngorongoro': 'Серенгети · Центр · Нгоронгоро',
  'The roof of Africa': 'Крыша Африки', 'Go higher.': 'Поднимитесь выше.', 'See further.': 'Увидьте больше.', 'At 5,895 metres, Kilimanjaro is more than a summit. It is a slow passage through five climate zones, shaped by patience, preparation and the people beside you.': 'На высоте 5 895 метров Килиманджаро — это больше, чем вершина. Это неспешный путь через пять климатических зон, требующий терпения, подготовки и надёжных людей рядом.', 'METRES HIGH': 'МЕТРОВ ВЫСОТА', 'ROUTES TO CHOOSE': 'МАРШРУТОВ НА ВЫБОР', 'CLIMATE ZONES': 'КЛИМАТИЧЕСКИХ ЗОН', 'Explore the routes': 'Исследовать маршруты',
  'Choose your path': 'Выберите свой путь', 'The mountain is': 'Гора', 'calling.': 'зовёт.', 'Every route has its own character. We will help you find the one that fits yours.': 'У каждого маршрута свой характер. Мы поможем найти тот, который подходит именно вам.', 'View route': 'Посмотреть маршрут', '7 DAYS': '7 ДНЕЙ', '8 DAYS': '8 ДНЕЙ', '6 DAYS': '6 ДНЕЙ', 'Machame Route': 'Маршрут Мачаме', 'Lemosho Route': 'Маршрут Лемошо', 'Marangu Route': 'Маршрут Марангу', 'Challenging · 62 km': 'Сложный · 62 км', 'Exceptional scenery · 70 km': 'Потрясающие виды · 70 км', 'Mountain huts · 72 km': 'Горные хижины · 72 км',
  'Why Simonov': 'Почему Simonov', 'Travel with': 'Путешествуйте с', 'intention.': 'намерением.', 'Good adventures leave you changed, not the places you visit.': 'Хорошие приключения меняют вас, а не места, которые вы посещаете.', 'Local by design': 'Местные по сути', 'Your trip is shaped by people who live here, not a distant booking desk.': 'Вашу поездку создают люди, которые живут здесь, а не удалённый офис бронирования.', 'Safety, always': 'Безопасность прежде всего', 'From health checks on the mountain to our trusted safari vehicles.': 'От проверки здоровья в горах до надёжных сафари-машин.', 'Small, considered': 'Небольшие и продуманные', 'Thoughtful itineraries, unhurried days and no cookie-cutter groups.': 'Продуманные маршруты, неспешные дни и никаких стандартных групп.', 'Leave a lighter trace': 'Оставляйте лёгкий след', 'We partner with communities and protect the landscapes we love.': 'Мы сотрудничаем с местными общинами и защищаем любимые пейзажи.',
  'Before you': 'Перед тем как', 'set off.': 'отправиться.', 'Read the journal': 'Читать журнал', 'TRAVEL GUIDE / 06 MIN READ': 'ПУТЕВОДИТЕЛЬ / 6 МИН ЧТЕНИЯ', 'When is the best time to visit Tanzania?': 'Когда лучше всего посетить Танзанию?', 'KILIMANJARO / 08 MIN READ': 'КИЛИМАНДЖАРО / 8 МИН ЧТЕНИЯ', 'Machame or Lemosho: finding your route': 'Мачаме или Лемошо: выбираем маршрут', 'Read story': 'Читать историю',
  'Start a conversation': 'Начать разговор', 'Your next chapter': 'Ваша следующая глава', 'starts here.': 'начинается здесь.', 'Tell us what you are dreaming about. A real person in Tanzania will get back to you within one working day.': 'Расскажите о своих мечтах. Реальный человек в Танзании ответит вам в течение одного рабочего дня.', 'I\'m interested in': 'Меня интересует', Safari: 'Сафари', Kilimanjaro: 'Килиманджаро', Both: 'Оба варианта', 'Your name': 'Ваше имя', 'First and last name': 'Имя и фамилия', 'Email address': 'Электронная почта', 'you@example.com': 'you@example.com', 'Tell us a little about your plans': 'Расскажите о своих планах', 'When are you thinking of travelling? Who is coming? What would make this trip yours?': 'Когда вы планируете поездку? Кто едет? Что сделает это путешествие вашим?', 'Message received': 'Сообщение получено', 'Send inquiry': 'Отправить запрос', 'We respect your inbox. No automated itineraries, ever.': 'Мы уважаем вашу почту. Никаких автоматических маршрутов.', 'Find us in the wild': 'Ищите нас в дикой природе', Connect: 'Связаться', 'Safaris and mountain adventures, made personal.': 'Сафари и горные приключения, созданные лично для вас.', 'Built with care, from here.': 'Создано с заботой здесь, в Танзании.'
};

const imageLibrary = {
  Safaris: [
    { image: images.safariVehicle, title: 'Safari in the wild', alt: 'Safari vehicle on the Tanzanian plains' },
    { image: images.elephants, title: 'Elephant country', alt: 'Elephants near a safari vehicle' },
    { image: images.savannah, title: 'Open horizons', alt: 'Tanzanian savannah landscape' },
    { image: images.lion, title: 'Wildlife up close', alt: 'Lion beside a safari vehicle' },
    { image: '/Images/stephan-bechert-1ZfMAnL4ubE-unsplash.jpg', title: 'Safari tracks', alt: 'Safari landscape and wildlife' },
    { image: '/Images/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg', title: 'Migration season', alt: 'Wildlife moving across the savannah' }
  ],
  'Mountain climbs': [
    { image: images.mountainClimbers, title: 'On the trail', alt: 'Climbers hiking toward Mount Kilimanjaro' },
    { image: images.mountainWide, title: 'Above the clouds', alt: 'Mountain landscape above the clouds' },
    { image: images.highCountry, title: 'The high country', alt: 'High altitude landscape on Mount Kilimanjaro' },
    { image: '/Images/marcel-kovacic-dhd2lxJcPrM-unsplash.jpg', title: 'Summit air', alt: 'High altitude mountain adventure' }
  ],
  'Tanzania coast': [
    { image: images.zanzibar, title: 'Zanzibar from above', alt: 'Aerial view of the Zanzibar coast' },
    { image: images.zanzibarBeach, title: 'Blue water, slow days', alt: 'Zanzibar beach and turquoise ocean' }
  ]
};

const galleryMedia = [
  { type: 'image', src: '/Gallary/WhatsApp Image 2026-08-23 at 18.39.43.jpeg', title: 'Safari sunset' },
  { type: 'image', src: '/Gallary/WhatsApp Image 2026-08-23 at 18.45.11.jpeg', title: 'Tanzania in the wild' },
  { type: 'video', src: '/Gallary/WhatsApp Video 2026-08-23 at 17.17.46.mp4', title: 'Safari moments' },
  { type: 'video', src: '/Gallary/WhatsApp Video 2026-08-23 at 18.43.20.mp4', title: 'Into the wild' },
  { type: 'video', src: '/Gallary/WhatsApp Video 2026-08-23 at 18.43.54.mp4', title: 'Wild Tanzania' },
  { type: 'video', src: '/Gallary/WhatsApp Video 2026-08-23 at 18.44.56.mp4', title: 'Travel stories' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeType, setActiveType] = useState('Safari');
  const [submitted, setSubmitted] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [typedPhrase, setTypedPhrase] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState('Safaris');
  const [language, setLanguage] = useState('en');
  const [showComingSoon, setShowComingSoon] = useState(false);
  const copy = translations[language];
  const t = (text) => language === 'ru' ? (russianCopy[text] || text) : text;

  useEffect(() => {
    const phrase = copy.phrase;
    const finishedTyping = typedPhrase === phrase;
    const finishedDeleting = typedPhrase === '' && isDeleting;
    const delay = finishedTyping ? 1700 : finishedDeleting ? 350 : isDeleting ? 45 : 90;
    const timer = window.setTimeout(() => {
      if (finishedTyping) setIsDeleting(true);
      else if (finishedDeleting) {
        setIsDeleting(false);
        setTypedPhrase('');
        setHeroSlide((current) => (current + 1) % heroSlides.length);
      } else {
        setTypedPhrase(isDeleting ? phrase.slice(0, typedPhrase.length - 1) : phrase.slice(0, typedPhrase.length + 1));
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [heroSlide, typedPhrase, isDeleting, language, copy.phrase]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  if (showComingSoon) return <ComingSoon language={language} setLanguage={setLanguage} translate={t} />;

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner"><span>{t('Tanzania')} <i>•</i> {t('East Africa')}</span><div className="top-links"><span>0714547111</span><label className="language-picker"><select value={language} onChange={(event) => { setLanguage(event.target.value); setTypedPhrase(''); setIsDeleting(false); }} aria-label="Choose language"><option value="en">EN</option><option value="ru">RU</option></select><ChevronDown size={12} /></label></div></div>
      </div>
      <header className="nav-wrap">
        <nav className="container nav">
          <button className="brand" onClick={() => scrollTo('top')} aria-label="Simonov Trekking & Safaris home"><span className="brand-mark">S</span><span><b>SIMONOV</b><small>TREKKING & SAFARIS</small></span></button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <button onClick={() => scrollTo('top')}>{copy.home}</button><button onClick={() => scrollTo('safaris')}>{copy.safaris} <ChevronDown size={13} /></button><button onClick={() => scrollTo('climb')}>{copy.kilimanjaro} <ChevronDown size={13} /></button><button onClick={() => scrollTo('experiences')}>{copy.experiences}</button><button onClick={() => scrollTo('story')}>{copy.story}</button><button onClick={() => scrollTo('journal')}>{copy.journal}</button>
          </div>
          <button className="nav-cta" onClick={() => setShowComingSoon(true)}>{copy.plan} <ArrowUpRight size={16} /></button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <img className="hero-slide-image" src={heroSlides[heroSlide].image} alt="Tanzania safari and mountain adventure" /><div className="hero-shade" /><div className="container hero-content">
            <div className="hero-kicker"><span className="line" /> {copy.welcome}</div>
            <h1>{copy.title}<br /><em>{typedPhrase}<span className="typing-cursor" aria-hidden="true">|</span></em></h1>
            <p>{copy.description}</p>
            <div className="hero-actions"><button className="button button-gold" onClick={() => scrollTo('safaris')}>{copy.explore} <ArrowUpRight size={17} /></button><button className="button button-ghost" onClick={() => scrollTo('climb')}>{copy.climb} <ArrowUpRight size={17} /></button></div>
            <div className="hero-proof"><span><ShieldCheck size={17} /> {copy.local}</span><span><Users size={17} /> {copy.groups}</span><span><TreePine size={17} /> {copy.thoughtful}</span></div>
          </div>
          <div className="hero-caption"><span>01 / 01</span><span className="caption-line" /><span>{t(heroSlides[heroSlide].label)}</span></div>
          <button className="play-button" aria-label="Play film"><Play size={17} fill="currentColor" /></button>
        </section>

        <section className="intro-band"><div className="container intro-grid"><div><span className="eyebrow">{t('Your Tanzania, your way')}</span><h2>{t('Two worlds.')}<br /><em>{t('One extraordinary')}</em>{t(' journey.')}</h2></div><p>{t('We create unhurried adventures for curious people: days spent tracking elephants, nights beneath enormous skies, and mornings that begin above the clouds. Always local. Always personal.')}</p></div></section>

        <section className="adventure-section" id="experiences"><div className="container"><div className="section-heading"><div><span className="eyebrow">{t('Choose your rhythm')}</span><h2>{t('What brings you')}<br /><em>{t('to Tanzania?')}</em></h2></div><p>{t('Whether you come for the untamed or the uphill, we will take you deeper into it.')}</p></div><div className="adventure-grid"><AdventureCard number="01" title={t('Wildlife safaris')} text={t('Follow the pulse of the plains, from the big five to the little-known corners in between.')} image={images.lion} onClick={() => scrollTo('safaris')} translate={t} /><AdventureCard number="02" title={t('Mountain climbing')} text={t("Find your altitude on Africa's highest peak, with a team that puts your safety first.")} image={images.mountainClimbers} onClick={() => scrollTo('climb')} translate={t} /><AdventureCard number="03" title={t('Local experiences')} text={t('Slow down for coffee, waterfalls, village walks and the stories beyond the guidebook.')} image={images.savannah} onClick={() => scrollTo('inquiry')} translate={t} /></div></div></section>

        <section className="image-library" id="gallery"><div className="container"><div className="section-heading"><div><span className="eyebrow">{t('From our field notes')}</span><h2>{t('See Tanzania')}<br /><em>{t('your way.')}</em></h2></div><div className="gallery-switcher" role="tablist" aria-label="Image categories">{Object.keys(imageLibrary).map((category) => <button key={category} role="tab" aria-selected={galleryCategory === category} className={galleryCategory === category ? 'gallery-tab active' : 'gallery-tab'} onClick={() => setGalleryCategory(category)}>{t(category)}</button>)}</div></div><div className="gallery-grid">{imageLibrary[galleryCategory].map((item) => <figure key={item.title} className="gallery-item"><img src={item.image} alt={item.alt} /><figcaption><span>{galleryCategory === 'Safaris' ? t('SAFARI') : galleryCategory === 'Mountain climbs' ? t('KILIMANJARO') : t('ZANZIBAR')}</span><b>{t(item.title)}</b></figcaption></figure>)}</div></div></section>

        <section className="media-gallery" id="new-gallery"><div className="container"><div className="section-heading"><div><span className="eyebrow">{t('Gallery')}</span><h2>{t('Moments from the field')}</h2></div><p>{t('Real moments from our journeys across Tanzania.')}</p></div><div className="media-gallery-grid">{galleryMedia.map((item) => <figure className="media-gallery-item" key={item.src}>{item.type === 'video' ? <video src={item.src} controls playsInline preload="metadata" /> : <img src={item.src} alt={t(item.title)} />}<figcaption><span>{item.type === 'video' ? t('VIDEO') : t('PHOTO')}</span><b>{t(item.title)}</b></figcaption></figure>)}</div></div></section>

        <section className="story-section" id="story"><div className="container story-grid"><div className="story-image"><img src={images.savannah} alt="Tanzanian savannah landscape" /><span className="image-note">{t('Arusha, Tanzania')}<br /><b>{t('Our home base')}</b></span></div><div className="story-copy"><span className="eyebrow">{t('Local experts. Real Tanzania.')}</span><h2>{t('Come as a guest.')}<br /><em>{t('Leave with a story.')}</em></h2><p>{t('Simonov Trekking & Safaris is a locally operated team that lives between two horizons: the open savannah and the high mountain sky.')}</p><p>{t('We are a small, locally operated team of guides, planners and hosts. We know the routes, the seasons, the quiet places and the people who make Tanzania unforgettable.')}</p><div className="detail-list"><span><b>12+</b> {t('years on the ground')}</span><span><b>100%</b> {t('locally operated')}</span></div><button className="text-link">{t('Meet our team')} <ArrowUpRight size={16} /></button></div></div></section>

        <section className="safari-section" id="safaris"><div className="container"><div className="section-heading light"><div><span className="eyebrow">{t('Into the wild')}</span><h2>{t('Journeys worth')}<br /><em>{t('getting lost in.')}</em></h2></div><button className="text-link light-link">{t('View all safaris')} <ArrowUpRight size={16} /></button></div><div className="package-grid">{safaris.map((safari) => <PackageCard key={safari.title} {...safari} translate={t} />)}</div></div></section>

        <section className="climb-section" id="climb"><div className="container climb-grid"><div className="climb-copy"><span className="eyebrow">{t('The roof of Africa')}</span><h2>{t('Go higher.')}<br /><em>{t('See further.')}</em></h2><p>{t('At 5,895 metres, Kilimanjaro is more than a summit. It is a slow passage through five climate zones, shaped by patience, preparation and the people beside you.')}</p><div className="stats"><span><b>5,895</b><small>{t('METRES HIGH')}</small></span><span><b>7+</b><small>{t('ROUTES TO CHOOSE')}</small></span><span><b>4</b><small>{t('CLIMATE ZONES')}</small></span></div><button className="button button-gold" onClick={() => scrollTo('routes')}>{t('Explore the routes')} <ArrowUpRight size={17} /></button></div><div className="climb-image"><img src={images.mountainClimbers} alt="Climber approaching Mount Kilimanjaro summit" /><span className="vertical-label">KILIMANJARO / 03°04′S 37°21′E</span></div></div></section>

        <section className="routes-section" id="routes"><div className="container"><div className="section-heading"><div><span className="eyebrow">{t('Choose your path')}</span><h2>{t('The mountain is')}<br /><em>{t('calling.')}</em></h2></div><p>{t('Every route has its own character. We will help you find the one that fits yours.')}</p></div><div className="route-grid">{routes.map((route) => <RouteCard key={route.title} {...route} translate={t} />)}</div></div></section>

        <section className="why-section"><div className="container why-grid"><div><span className="eyebrow">{t('Why Simonov')}</span><h2>{t('Travel with')}<br /><em>{t('intention.')}</em></h2><p>{t('Good adventures leave you changed, not the places you visit.')}</p></div><div className="why-items"><WhyItem icon={<Compass />} title={t('Local by design')} text={t('Your trip is shaped by people who live here, not a distant booking desk.')} /><WhyItem icon={<ShieldCheck />} title={t('Safety, always')} text={t('From health checks on the mountain to our trusted safari vehicles.')} /><WhyItem icon={<Sparkles />} title={t('Small, considered')} text={t('Thoughtful itineraries, unhurried days and no cookie-cutter groups.')} /><WhyItem icon={<TreePine />} title={t('Leave a lighter trace')} text={t('We partner with communities and protect the landscapes we love.')} /></div></div></section>

        <section className="journal-section" id="journal"><div className="container"><div className="section-heading"><div><span className="eyebrow">{t('From the field notes')}</span><h2>{t('Before you')}<br /><em>{t('set off.')}</em></h2></div><button className="text-link">{t('Read the journal')} <ArrowUpRight size={16} /></button></div><div className="journal-grid"><article><img src={images.savannah} alt="Tanzanian savannah landscape" /><span>{t('TRAVEL GUIDE / 06 MIN READ')}</span><h3>{t('When is the best time to visit Tanzania?')}</h3><button className="text-link">{t('Read story')} <ChevronRight size={16} /></button></article><article><img src={images.highCountry} alt="Tanzanian mountain landscape" /><span>{t('KILIMANJARO / 08 MIN READ')}</span><h3>{t('Machame or Lemosho: finding your route')}</h3><button className="text-link">{t('Read story')} <ChevronRight size={16} /></button></article></div></div></section>

        <section className="inquiry-section" id="inquiry"><div className="container inquiry-grid"><div className="inquiry-copy"><span className="eyebrow">{t('Start a conversation')}</span><h2>{t('Your next chapter')}<br /><em>{t('starts here.')}</em></h2><p>{t('Tell us what you are dreaming about. A real person in Tanzania will get back to you within one working day.')}</p><div className="contact-note"><Mail size={18} /><span>0714547111</span></div></div><form className="inquiry-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><label>{t("I'm interested in")} <span>*</span></label><div className="choice-grid">{['Safari', 'Kilimanjaro', 'Both'].map((type) => <button type="button" className={activeType === type ? 'choice active' : 'choice'} key={type} onClick={() => setActiveType(type)}>{t(type)}</button>)}</div><div className="form-row"><label>{t('Your name')} <span>*</span><input required placeholder={t('First and last name')} /></label><label>{t('Email address')} <span>*</span><input required type="email" placeholder={t('you@example.com')} /></label></div><label>{t('Tell us a little about your plans')}<textarea placeholder={t('When are you thinking of travelling? Who is coming? What would make this trip yours?')} /></label><button className="button button-gold" type="submit">{t(submitted ? 'Message received' : 'Send inquiry')} <ArrowUpRight size={17} /></button><small>{t('We respect your inbox. No automated itineraries, ever.')}</small></form></div></section>
      </main>

      <footer><div className="container footer-top"><div className="footer-brand"><span className="brand-mark">S</span><span><b>SIMONOV</b><small>TREKKING & SAFARIS</small></span><p>{t('Safaris and mountain adventures, made personal.')}</p></div><div className="footer-col"><b>{t('Explore')}</b><button onClick={() => scrollTo('safaris')}>{t('Safaris')}</button><button onClick={() => scrollTo('climb')}>{t('Kilimanjaro')}</button><button onClick={() => scrollTo('experiences')}>{t('Experiences')}</button></div><div className="footer-col"><b>{t('Connect')}</b><button>Instagram</button><button>WhatsApp</button><button>{t('Journal')}</button></div><div className="footer-social"><span>{t('Find us in the wild')}</span><div><a href="#top">Instagram</a><a href="#top">Facebook</a></div></div></div><div className="container footer-bottom"><span>© 2026 Simonov Trekking & Safaris</span><span>Arusha · Tanzania</span><span>{t('Built with care, from here.')}</span></div></footer><a className="whatsapp" href="https://wa.me/255714547111" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7c1.7.9 3.5 1.3 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.1-3.5-8.3ZM12.2 21.5h-.1c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.8 1 1-3.7-.2-.3a9.7 9.7 0 1 1 8.2 4.5Zm5.3-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.8.6.8.3 1.5.2 2.1.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.6-.5Z" /></svg></a>
    </div>
  );
}

function ComingSoon({ language, setLanguage, translate }) {
  return <div className="coming-soon-page"><div className="coming-soon-top"><button className="brand" onClick={() => window.location.reload()} aria-label="Simonov Trekking & Safaris home"><span className="brand-mark">S</span><span><b>SIMONOV</b><small>TREKKING & SAFARIS</small></span></button><label className="language-picker"><select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Choose language"><option value="en">EN</option><option value="ru">RU</option></select><ChevronDown size={12} /></label></div><main className="coming-soon-content"><span className="eyebrow">{translate('Coming soon')}</span><h1>{translate('We are preparing something special.')}</h1><p>{translate('Our trip planning page is coming soon.')}</p><a className="button button-gold" href="https://wa.me/255714547111" target="_blank" rel="noreferrer">{translate('Chat with us on WhatsApp')} <ArrowUpRight size={17} /></a><button className="coming-soon-back" onClick={() => window.location.reload()}>{translate('Back to home')}</button></main></div>;
}

function AdventureCard({ number, title, text, image, onClick, translate }) { return <button className="adventure-card" onClick={onClick}><img src={image} alt="" /><span className="card-overlay" /><span className="card-number">{number}</span><span className="card-content"><b>{title}</b><span>{text}</span><i>{translate('Explore')} <ArrowUpRight size={16} /></i></span></button>; }
function PackageCard({ days, title, places, price, image, tag, translate }) { return <article className="package-card"><div className="package-image"><img src={image} alt={title} /><span>{translate(tag)}</span></div><div className="package-content"><small>{translate(days)} · {translate('PRIVATE SAFARI')}</small><h3>{translate(title)}</h3><p>{translate(places)}</p><div><b>{translate('FROM')} {price}</b><button className="round-arrow" aria-label={`View ${translate(title)}`}><ArrowUpRight size={17} /></button></div></div></article>; }
function RouteCard({ days, title, meta, image, translate }) { return <article className="route-card"><img src={image} alt={title} /><div className="route-content"><span>{translate(days)}</span><h3>{translate(title)}</h3><p>{translate(meta)}</p><button className="text-link light-link">{translate('View route')} <ArrowUpRight size={15} /></button></div></article>; }
function WhyItem({ icon, title, text }) { return <div className="why-item"><span className="why-icon">{icon}</span><div><h3>{title}</h3><p>{text}</p></div></div>; }

createRoot(document.getElementById('root')).render(<App />);
