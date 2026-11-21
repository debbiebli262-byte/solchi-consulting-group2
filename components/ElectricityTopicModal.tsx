import React, { useEffect, useRef, useState } from "react";
import { useAccessibleDialog } from "./useAccessibleDialog";
import { useI18n } from "../i18n";

export const electricityTopics = [
  {
    title: "מערכות עתירות אנרגיה",
    subtitle: "תכנון שמתחיל בהבנת הצריכה",
    paragraphs: [
      "מפעלי תעשייה, אזורי תעסוקה ומרכזי נתונים צריכים תכנון חשמלי שמותאם לעומסים גבוהים, לרציפות אספקה ולהתרחבות עתידית.",
      "משרד התכנון שלנו פועל מאז 2023, וצוות המהנדסים שלנו מביא איתו עשרות שנות ניסיון בתכנון ובליווי פרויקטים עתירי אנרגיה. כבר בשלב הקונספט אנחנו בוחנים חלופות טכנו־כלכליות ובונים פתרון שיתחבר לרשת בצורה בטוחה ויעילה. התכנון נעשה בתיאום מלא מול חברת החשמל ו״נגה״."
    ],
    bullets: [
      "תכנון עקרוני ובחינת חלופות לחיבור צרכנים גדולים לרשת",
      "תכנון מפורט של המתקן החשמלי, מהחיבור לרשת ועד הלוחות והצרכנים",
      "תכנון שמתחשב מראש בתפעול, בתחזוקה ובגידול העתידי בעומסים"
    ]
  },
  {
    title: "תחנות השנאה",
    subtitle: "לאחרונה הופעלה תחנת משנה בתכנוננו: 161 ק״ו, 360 מו״א",
    paragraphs: [
      "תכנון תחנות השנאה הוא התחום המרכזי שלנו.",
      "אנחנו מתכננים תחנות פתוחות (AIS) ותחנות מבודדות גז (GIS) במתחי על, עליון, גבוה ובינוני, מהתכנון העקרוני ועד תיק תכנון מפורט ומוכן לביצוע.",
      "הפרויקט האחרון שלנו, תחנת השנאה של 161 ק״ו בהספק 360 מו״א, כבר פועל ומחובר לרשת. זו הוכחה לכך שהתכנון שלנו מחזיק מהשרטוט ועד ההפעלה. הניסיון שלנו בתפעול מתקני חשמל, כולל ניסיון כ״מורשה בכיר״ בחברת החשמל, מאפשר לנו לתכנן תחנות שנוח ובטוח לתפעל ולתחזק."
    ],
    bullets: [
      "תכנון מפורט מלא: חישובים, שרטוטים, מפרטים ומסמכי מכרז",
      "חישובי קצר, הארקה, עומסים וסלקטיביות לפי תקני IEC ו־IEEE",
      "ליווי הנדסי בבדיקות FAT/SAT וב־Commissioning, עד הפעלת התחנה"
    ]
  },
  {
    title: "GIS – מסדרים מבודדי גז",
    subtitle: "תכנון שמנצל את היתרונות של GIS עד הסוף",
    paragraphs: [
      "כשהשטח מוגבל, כשהסביבה צפופה או כשנדרשת אמינות גבוהה במיוחד, מסדר GIS הוא בדרך כלל הבחירה הנכונה. כדי שהבחירה הזו תשתלם צריך לתכנן אותה נכון. יש לנו ניסיון מעשי במסדרים של יצרנים שונים, ולכן אנחנו מאפיינים את הציוד ומשווים בין הצעות בצורה אובייקטיבית.",
      "אנחנו משלבים את המסדר בתכנון הכולל של התחנה: החיבורים, הכבילה, ההגנות, הבקרה והממשק עם המבנה."
    ],
    bullets: [
      "אפיון טכני של מסדרי GIS והשוואה בין יצרנים",
      "תכנון ההשתלבות של המסדר בתחנה ובמבנה, כולל דרישות שטח, הארקה וכבילה",
      "ליווי תכנוני מול היצרן לאורך הייצור, הבדיקות וההתקנה"
    ]
  }
];

const translatedTopics = {
  en: [
    {
      title: "High-Energy Systems",
      subtitle: "Design that starts with understanding demand",
      paragraphs: [
        "Industrial facilities, business parks and data centers require electrical design tailored to high loads, continuity of supply and future expansion.",
        "Our design office has been operating since 2023, and our engineering team brings decades of experience in designing and supporting high-energy projects. From the concept stage, we assess techno-economic alternatives and develop a solution that connects to the grid safely and efficiently. Design is fully coordinated with the Israel Electric Corporation and Noga."
      ],
      bullets: [
        "Concept design and assessment of grid connection alternatives for large consumers",
        "Detailed electrical design, from grid connection to distribution boards and end users",
        "Planning for operation, maintenance and future load growth from the outset"
      ]
    },
    {
      title: "Substations",
      subtitle: "A substation we designed has recently been commissioned: 161 kV, 360 MVA",
      paragraphs: [
        "Substation design is our core area of expertise.",
        "We design air-insulated (AIS) and gas-insulated (GIS) substations at extra-high, high and medium voltage levels, from concept design through a detailed, construction-ready design package.",
        "Our latest project, a 161 kV, 360 MVA substation, is already operating and connected to the grid. It demonstrates how our designs deliver from drawings through commissioning. Our experience operating electrical facilities, including service as a senior authorized professional at the Israel Electric Corporation, enables us to design substations that are safe and practical to operate and maintain."
      ],
      bullets: [
        "Complete detailed design: calculations, drawings, specifications and tender documents",
        "Short-circuit, grounding, load and protection selectivity calculations to IEC and IEEE standards",
        "Engineering support for FAT/SAT testing and commissioning through energization"
      ]
    },
    {
      title: "GIS – Gas-Insulated Switchgear",
      subtitle: "Design that makes the most of GIS advantages",
      paragraphs: [
        "Where space is limited, the environment is congested or especially high reliability is required, GIS is often the right choice. Realizing these benefits requires sound design. We have practical experience with GIS from different manufacturers, allowing us to specify equipment and compare proposals objectively.",
        "We integrate the switchgear into the overall substation design, including connections, cabling, protection, control and interfaces with the building."
      ],
      bullets: [
        "Technical specification of GIS and objective comparison of manufacturers",
        "Integration of switchgear into the substation and building, including space, grounding and cabling requirements",
        "Design coordination with the manufacturer throughout production, testing and installation"
      ]
    }
  ],
  ja: [
    {
      title: "大電力システム",
      subtitle: "電力需要の理解から始まる設計",
      paragraphs: [
        "工場、事業拠点、データセンターでは、大きな電力負荷、供給の継続性、将来の設備拡張に対応した電気設備設計が求められます。",
        "当社の設計部門は2023年に活動を開始し、エンジニアチームは大電力プロジェクトの設計・支援において数十年にわたる経験を有しています。構想段階から技術面・経済面の代替案を検討し、電力網に安全かつ効率的に接続するためのソリューションを構築します。設計はイスラエル電力公社およびNogaと十分に連携して進めます。"
      ],
      bullets: [
        "大口需要家の系統接続に向けた基本設計と代替案の検討",
        "系統接続から配電盤・需要設備までの詳細な電気設計",
        "運用・保守および将来の負荷増大を見据えた設計"
      ]
    },
    {
      title: "変電所",
      subtitle: "当社設計の161 kV・360 MVA変電所が最近運転を開始",
      paragraphs: [
        "変電所の設計は、当社の中核事業です。",
        "当社は超高圧・高圧・中圧の空気絶縁変電所（AIS）およびガス絶縁変電所（GIS）について、基本構想から施工可能な詳細設計図書の作成まで対応しています。",
        "当社が直近に設計した161 kV・360 MVAの変電所は、すでに稼働し、電力系統に接続されています。これは設計図面から運転開始まで、当社の設計が確実に機能することを示しています。イスラエル電力公社での上級認定担当者としての経験を含め、電気設備の運用経験を生かし、安全で運転・保守しやすい変電所を設計します。"
      ],
      bullets: [
        "計算書・図面・仕様書・入札書類を含む詳細設計一式",
        "IEC・IEEE規格に基づく短絡、接地、負荷、保護協調の計算",
        "FAT/SAT試験から試運転・送電開始までの技術支援"
      ]
    },
    {
      title: "GIS – ガス絶縁開閉装置",
      subtitle: "GISの利点を最大限に生かす設計",
      paragraphs: [
        "設置スペースが限られる場合、周辺環境が過密な場合、または特に高い信頼性が求められる場合、GISは多くの場合に適した選択肢です。その利点を生かすには適切な設計が欠かせません。当社は複数メーカーのGISに関する実務経験を持ち、装置の仕様策定と提案の客観的な比較を行います。",
        "接続、ケーブル、保護、制御、建屋とのインターフェースを含め、GISを変電所全体の設計に統合します。"
      ],
      bullets: [
        "GISの技術仕様策定とメーカー間の客観的な比較",
        "スペース・接地・ケーブル要件を含む、変電所と建屋へのGIS統合設計",
        "製造・試験・据付の各段階におけるメーカーとの設計調整"
      ]
    }
  ]
};

const modalLabels = {
  he: { division: "חטיבת החשמל", services: "תחומי השירות", gallery: "גלריית פרויקטים", close: "סגירת חלון", previous: "תמונה קודמת", next: "תמונה הבאה", image: "מערכות GIS — תמונה", contact: "דברו איתי" },
  en: { division: "Electricity Division", services: "Our Services", gallery: "Project Gallery", close: "Close dialog", previous: "Previous image", next: "Next image", image: "GIS systems — image", contact: "Contact me" },
  ja: { division: "電力部門", services: "サービス内容", gallery: "プロジェクトギャラリー", close: "閉じる", previous: "前の画像", next: "次の画像", image: "GIS設備 — 画像", contact: "お問い合わせ" }
} as const;

const energyPhotos = [
  "/future-images/substation_01_web.jpg",
  "/future-images/substation_02_web.jpg",
  "/future-images/substation_03_web.jpg",
  "/future-images/substation_04_web.jpg",
  "/future-images/substation_05_web.png"
];

const gisPhotos = [
  "/future-images/Galvanized%20Substation%20Workshop%20with%20Overhead%20Crane.png",
  "/future-images/Industrial%20Switchgear%20and%20Safety%20Lift.png",
  "/future-images/Polished%20High-Voltage%20Equipment%20Hall.png",
  "/future-images/Bird%E2%80%99s-Eye%20View%20of%20Industrial%20Electrical%20Room.png"
];

export const ElectricityTopicModal: React.FC<{ topic: number | null; close: () => void }> = ({ topic, close }) => {
  const { lang } = useI18n();
  const labels = modalLabels[lang];
  const topics = lang === "he" ? electricityTopics : translatedTopics[lang];
  const [photo, setPhoto] = useState(0);
  const [photoUnavailable, setPhotoUnavailable] = useState(false);
  const dialogRef = useAccessibleDialog(topic !== null, close);
  const preloadedPhotosRef = useRef<Record<string, HTMLImageElement>>({});
  const preloadNextPhoto = () => {
    const gallery = topic === 0 ? energyPhotos : gisPhotos;
    const nextPhoto = gallery[(photo + 1) % gallery.length];
    if (!preloadedPhotosRef.current[nextPhoto]) {
      const image = new Image();
      image.decoding = "async";
      image.src = nextPhoto;
      preloadedPhotosRef.current[nextPhoto] = image;
    }
  };
  useEffect(() => {
    if (topic === null) return;
    setPhoto(0);
    setPhotoUnavailable(false);
  }, [topic]);
  if (topic === null) return null;
  const item = topics[topic];
  const photos = topic === 0 ? energyPhotos : gisPhotos;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-sm sm:p-6" onMouseDown={e => { if (e.target === e.currentTarget) close(); }}>
      <div ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="electricity-topic-title" aria-describedby="electricity-topic-description" dir={lang === "he" ? "rtl" : "ltr"} className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[2rem] border border-blue-400/30 bg-[#111d35] p-6 text-start text-white shadow-[0_0_70px_rgba(37,99,235,0.3)] sm:p-10">
        <button type="button" onClick={close} aria-label={labels.close} className={`absolute top-5 ${lang === "he" ? "left-5" : "right-5"} rounded-full border border-blue-400/30 bg-white/10 px-3 py-1 text-2xl leading-none text-blue-100 hover:bg-blue-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300`}>×</button>
        <span className="mb-5 inline-block rounded-md bg-blue-600 px-3 py-1 text-xs font-bold tracking-wider">SOLCHI | {labels.division}</span>
        <h2 id="electricity-topic-title" className={`mb-3 text-2xl font-extrabold sm:text-4xl ${lang === "he" ? "pl-8" : "pr-8"}`}>{item.title}</h2>
        <h3 id="electricity-topic-description" className="mb-7 text-base font-bold text-blue-300 sm:text-lg">{item.subtitle}</h3>
        <div className="space-y-4 text-sm leading-8 text-slate-200 sm:text-base">{item.paragraphs.map((p,i) => <p key={i}>{p}</p>)}</div>
        <div className="my-7 h-px bg-blue-400/25"/>
        <h4 className="mb-4 text-lg font-bold">{labels.services}</h4>
        <ul className="space-y-3">{item.bullets.map((b,i) => <li key={i} className="flex gap-3 text-sm leading-7 text-slate-200 sm:text-base"><span aria-hidden="true" className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"/>{b}</li>)}</ul>
        {(topic === 0 || topic === 2) && <div className="mt-8 border-t border-blue-400/25 pt-7">
          <h4 className="mb-4 text-lg font-bold">{labels.gallery}</h4>
          <div className="overflow-hidden rounded-2xl border border-blue-400/20 bg-slate-950/30">
            {photoUnavailable
              ? <div className="flex aspect-video items-center justify-center p-6 text-center text-sm text-blue-200">{lang === "he" ? "התמונה עדיין לא הועלתה לאתר" : lang === "ja" ? "画像はまだサイトにアップロードされていません" : "Image not yet uploaded to the website"}</div>
              : <img key={photos[photo]} src={photos[photo]} onError={() => setPhotoUnavailable(true)} alt={`${topic === 0 ? (lang === "he" ? "מתקן מערכות עתירות אנרגיה" : lang === "ja" ? "大電力設備" : "High-energy electrical installation") : labels.image} ${photo+1} / ${photos.length}`} className={`aspect-video w-full ${topic === 0 && photo === 4 ? "object-cover" : "object-contain"}`} loading="eager" decoding="async" onLoad={preloadNextPhoto}/>}
          </div>
          <div className="mt-4 flex items-center justify-center gap-4">
            <button type="button" aria-label={labels.previous} onClick={() => { setPhotoUnavailable(false); setPhoto(n => (n+photos.length-1)%photos.length); }} className="rounded-lg border border-blue-400/40 px-4 py-2 hover:bg-blue-500/30">‹</button>
            <span className="text-sm text-blue-200">{photo+1} / {photos.length}</span>
            <button type="button" aria-label={labels.next} onClick={() => { setPhotoUnavailable(false); setPhoto(n => (n+1)%photos.length); }} className="rounded-lg border border-blue-400/40 px-4 py-2 hover:bg-blue-500/30">›</button>
          </div>
        </div>}
        <div className="mt-8 flex justify-center">
          <a href="#/contact?division=electrical" className="inline-flex min-w-[190px] items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
            {labels.contact}
          </a>
        </div>
      </div>
    </div>
  );
};
