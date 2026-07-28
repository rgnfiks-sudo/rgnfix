import { useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Camera,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileImage,
  HardHat,
  ImagePlus,
  Info,
  Layers3,
  PencilRuler,
  Ruler,
  ShieldAlert,
  Upload,
  Wrench,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trackEvent } from "@/lib/analytics";

type Product = "cam-balkon" | "pvc" | "aluminyum";
type Stage = "guide" | "form" | "summary";
type MeasureKey = "g1" | "g2" | "g3" | "y1" | "y2" | "y3" | "depth";

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  district: string;
  product: Product;
  system: string;
  openingCount: string;
  g1: string;
  g2: string;
  g3: string;
  y1: string;
  y2: string;
  y3: string;
  depth: string;
  direction: string;
  surfaces: string;
  railing: string;
  color: string;
  glass: string;
  obstacles: string;
  notes: string;
};

const PRODUCT_DATA = {
  "cam-balkon": {
    label: "Cam Balkon",
    card: "Cam Balkon Ölçü Rehberi",
    image: "/measurement-guide/cam-balkon-on-kesif.jpg",
    imageAlt: "Cam balkon cephelerinde genişlik ve yükseklik ölçü yönlerini gösteren güvenli teknik çizim",
    systems: ["Katlanır cam balkon", "Sürme cam balkon", "Giyotin cam sistemi", "Sistem türünü bilmiyorum"],
    description: "Her yön değişimini ayrı cephe kabul edin; genişliği üç, yüksekliği üç noktadan ölçün.",
  },
  pvc: {
    label: "PVC Pencere ve Kapı",
    card: "PVC Pencere ve Kapı Ölçü Rehberi",
    image: "/measurement-guide/pvc-pencere-kapi-olcu.jpg",
    imageAlt: "PVC pencere ve kapı boşluğunda üç genişlik, üç yükseklik ve duvar derinliğini gösteren teknik çizim",
    systems: ["Mevcut pencere değişimi", "Yeni duvar açıklığı", "Balkon kapısı", "Oda kapısı", "Dış kapı"],
    description: "Duvar boşluğu ile mevcut doğrama ölçüsünü karıştırmayın; ölçü türünü notunuza ekleyin.",
  },
  aluminyum: {
    label: "Alüminyum Sistem",
    card: "Alüminyum Pencere ve Kapı Ölçü Rehberi",
    image: "/measurement-guide/aluminyum-sistem-olcu.jpg",
    imageAlt: "Alüminyum sürme sistemde açıklık, ray, profil derinliği ve hareket alanını gösteren teknik çizim",
    systems: [
      "Isı yalıtımlı alüminyum",
      "Isı yalıtımsız alüminyum",
      "Sürme sistem",
      "Katlanır sistem",
      "Sabit vitrin",
      "Ofis bölme sistemi",
      "Alüminyum giriş kapısı",
      "Geniş açıklıklı kaldır-sür",
      "Sistem türünü bilmiyorum",
    ],
    description: "Ray alanını, profil derinliğini, hareket mesafesini ve taşıyıcı yüzeyleri ayrıca kaydedin.",
  },
} as const;

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  district: "",
  product: "cam-balkon",
  system: "",
  openingCount: "1",
  g1: "",
  g2: "",
  g3: "",
  y1: "",
  y2: "",
  y3: "",
  depth: "",
  direction: "",
  surfaces: "",
  railing: "",
  color: "",
  glass: "",
  obstacles: "",
  notes: "",
};

const tools = [
  ["Şerit veya lazer metre", Ruler],
  ["Kâğıt ve kalem", PencilRuler],
  ["Su terazisi", Wrench],
  ["Telefon / fotoğraf", Camera],
  ["Güvenli merdiven", HardHat],
  ["Ölçü kayıt formu", ClipboardCheck],
] as const;

const preparation = [
  "Ölçüleri santimetre yerine milimetre olarak kaydedin.",
  "Metreyi eğmeden, düz bir hat üzerinde tutun.",
  "Her alanı en az iki kez ölçün.",
  "Sıva, mermer, denizlik ve kaplama durumunu not edin.",
  "Ölçünün içten mi dıştan mı alındığını belirtin.",
  "Alanın karşıdan ve iki yandan fotoğrafını çekin.",
  "Kolon, tesisat, korkuluk ve elektrik hattı gibi engelleri işaretleyin.",
];

const safety = [
  "Balkonun dışına sarkmayın.",
  "Sağlam olmayan korkuluklara yük vermeyin.",
  "Ağır pencere veya kapı kanadını tek başınıza sökmeyin.",
  "Elektrik hatlarına yakın ölçüm yapmayın.",
  "Yüksek ve dış cepheye açık alanlarda profesyonel destek alın.",
  "Bu rehber profesyonel teknik keşfin yerine geçmez.",
];

const photoList = [
  "Alanın tam karşıdan görünüşü",
  "Sağ ve sol köşeler",
  "Tavan bağlantısı",
  "Zemin veya korkuluk bağlantısı",
  "Denizlik ve mermer detayı",
  "Kolon, boru ve diğer engeller",
];

function MeasurementDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      viewBox="0 0 640 360"
      role="img"
      aria-labelledby="measure-diagram-title measure-diagram-description"
      className={`w-full rounded-2xl bg-slate-50 ${compact ? "max-h-64" : ""}`}
    >
      <title id="measure-diagram-title">Üç noktadan genişlik ve yükseklik ölçümü</title>
      <desc id="measure-diagram-description">
        Dikdörtgen açıklığın üst, orta ve alt genişlikleri G1, G2, G3; sol, orta ve sağ yükseklikleri Y1, Y2, Y3 olarak işaretlenmiştir.
      </desc>
      <defs>
        <marker id="arrow-orange" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 Z" fill="#f97316" />
        </marker>
      </defs>
      <rect x="125" y="55" width="390" height="250" rx="10" fill="#fff" stroke="#1e293b" strokeWidth="10" />
      {[85, 180, 275].map((y, i) => (
        <g key={`g-${y}`}>
          <line x1="145" y1={y} x2="495" y2={y} stroke="#f97316" strokeWidth="4" markerStart="url(#arrow-orange)" markerEnd="url(#arrow-orange)" />
          <rect x="290" y={y - 18} width="60" height="28" rx="14" fill="#fff7ed" />
          <text x="320" y={y + 2} textAnchor="middle" fontSize="18" fontWeight="700" fill="#c2410c">G{i + 1}</text>
        </g>
      ))}
      {[165, 320, 475].map((x, i) => (
        <g key={`y-${x}`}>
          <line x1={x} y1="70" x2={x} y2="290" stroke="#0f766e" strokeWidth="3" markerStart="url(#arrow-orange)" markerEnd="url(#arrow-orange)" />
          <rect x={x - 28} y="167" width="56" height="28" rx="14" fill="#ecfeff" />
          <text x={x} y="187" textAnchor="middle" fontSize="17" fontWeight="700" fill="#0f766e">Y{i + 1}</text>
        </g>
      ))}
      <text x="320" y="338" textAnchor="middle" fontSize="17" fill="#475569">Her ölçüyü iki kez kontrol edin • Birim: mm</text>
    </svg>
  );
}

function GuideStep({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-orange-500 font-black text-white">{number}</span>
        <div>
          <h3 className="text-lg font-bold text-slate-950">{title}</h3>
          <div className="mt-2 text-base leading-7 text-slate-600">{children}</div>
        </div>
      </div>
    </article>
  );
}

function MillimeterInput({
  field,
  label,
  value,
  onChange,
}: {
  field: MeasureKey;
  label: string;
  value: string;
  onChange: (field: MeasureKey, value: string) => void;
}) {
  const number = Number(value);
  const looksLikeCm = value !== "" && number >= 50 && number < 300;
  const unusual = value !== "" && (number < 100 || number > 10000);
  return (
    <div>
      <Label htmlFor={field}>{label}</Label>
      <div className="relative mt-2">
        <Input
          id={field}
          inputMode="numeric"
          min="1"
          step="1"
          value={value}
          onChange={event => onChange(field, event.target.value.replace(/\D/g, ""))}
          className="h-12 pr-14 text-base"
          aria-describedby={`${field}-help`}
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-500">mm</span>
      </div>
      {(looksLikeCm || unusual) && (
        <p id={`${field}-help`} className="mt-1.5 flex gap-1.5 text-sm text-orange-700">
          <AlertTriangle className="mt-0.5 size-4 shrink-0" />
          {looksLikeCm ? "Ölçünüzü milimetre girin. Örnek: 120 cm yerine 1200 mm." : "Bu ölçüyü tekrar kontrol etmenizi öneririz."}
        </p>
      )}
    </div>
  );
}

export default function MeasurementAssistant() {
  const formRef = useRef<HTMLDivElement>(null);
  const [product, setProduct] = useState<Product>("cam-balkon");
  const [stage, setStage] = useState<Stage>("guide");
  const [form, setForm] = useState<FormState>(initialForm);
  const [photos, setPhotos] = useState<string[]>([]);
  const [sketch, setSketch] = useState("");
  const [error, setError] = useState("");

  const data = PRODUCT_DATA[product];
  const measurements = useMemo(
    () => [form.g1, form.g2, form.g3, form.y1, form.y2, form.y3, form.depth].map(Number).filter(value => value > 0),
    [form],
  );
  const smallestWidth = useMemo(() => Math.min(...[form.g1, form.g2, form.g3].map(Number).filter(Boolean)), [form.g1, form.g2, form.g3]);
  const smallestHeight = useMemo(() => Math.min(...[form.y1, form.y2, form.y3].map(Number).filter(Boolean)), [form.y1, form.y2, form.y3]);

  const update = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm(current => ({ ...current, [field]: value }));
    setError("");
  };

  const chooseProduct = (next: Product) => {
    setProduct(next);
    setForm(current => ({ ...current, product: next, system: "" }));
    setStage("guide");
    setError("");
    window.setTimeout(() => document.getElementById("urun-rehberi")?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const beginForm = () => {
    setStage("form");
    trackEvent("measurement_start", { product });
    window.setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const validateAndSummarize = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.city.trim() || !form.system) {
      setError("Ad soyad, telefon, il ve sistem tercihini doldurun.");
      return;
    }
    if (measurements.length < 7 || measurements.some(value => value <= 0)) {
      setError("Üç genişlik, üç yükseklik ve derinlik ölçüsünü pozitif sayı olarak girin.");
      return;
    }
    setStage("summary");
    trackEvent("olcu_asistani_tamamlama", { product, system: form.system });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFiles = (files: FileList | null, kind: "photo" | "sketch") => {
    if (!files?.length) return;
    const names = Array.from(files).slice(0, kind === "photo" ? 8 : 1).map(file => file.name);
    if (kind === "photo") setPhotos(names);
    else setSketch(names[0] ?? "");
  };

  const printSummary = () => {
    trackEvent("measurement_pdf", { product });
    window.print();
  };

  const requestOffer = () => {
    const text = [
      "Merhaba RGNFIX, ön keşif için yaklaşık ölçülerimi iletiyorum.",
      `Ürün: ${data.label}`,
      `Sistem: ${form.system}`,
      `Konum: ${form.city} / ${form.district}`,
      `Genişlikler: ${form.g1}, ${form.g2}, ${form.g3} mm`,
      `Yükseklikler: ${form.y1}, ${form.y2}, ${form.y3} mm`,
      `Derinlik: ${form.depth} mm`,
      "Bu ölçülerin yaklaşık olduğunu ve uzman doğrulaması gerektiğini biliyorum.",
    ].join("\n");
    trackEvent("whatsapp_click", { source: "measurement_summary", product });
    window.open(`https://wa.me/905300288903?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  if (stage === "summary") {
    return (
      <div className="measurement-print-document min-h-screen bg-slate-50 py-10 print:bg-white print:py-0">
        <main className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
            <Button variant="outline" onClick={() => setStage("form")}>Bilgileri düzenle</Button>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" onClick={printSummary}><Download className="mr-2 size-4" />PDF İndir</Button>
              <Button onClick={requestOffer} className="bg-orange-500 text-white hover:bg-orange-600">Ön Teklif İste</Button>
            </div>
          </div>
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 print:border-0 print:p-0 print:shadow-none">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <p className="font-bold uppercase tracking-[0.2em] text-cyan-700">RGNFIX ön keşif belgesi</p>
                <h1 className="mt-2 text-3xl font-black text-slate-950">Ölçü Özeti</h1>
                <p className="mt-2 text-slate-600">Belge tarihi: {new Intl.DateTimeFormat("tr-TR").format(new Date())}</p>
              </div>
              <ClipboardCheck className="size-12 text-orange-500" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Müşteri", form.name],
                ["İletişim", `${form.phone}${form.email ? ` • ${form.email}` : ""}`],
                ["Konum", `${form.city} / ${form.district}`],
                ["Ürün", data.label],
                ["Sistem", form.system],
                ["Cephe / açıklık sayısı", form.openingCount],
                ["Genişlikler", `G1 ${form.g1} • G2 ${form.g2} • G3 ${form.g3} mm`],
                ["Yükseklikler", `Y1 ${form.y1} • Y2 ${form.y2} • Y3 ${form.y3} mm`],
                ["Derinlik", `${form.depth} mm`],
                ["Açılım / toplanma", form.direction || "Belirtilmedi"],
                ["Yapısal engeller", form.obstacles || "Belirtilmedi"],
                ["Fotoğraflar", photos.length ? photos.join(", ") : "Yüklenmedi"],
                ["Kroki", sketch || "Yüklenmedi"],
                ["Notlar", form.notes || "Belirtilmedi"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-bold text-slate-500">{label}</p>
                  <p className="mt-1 break-words font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border-2 border-orange-300 bg-orange-50 p-5 text-sm font-semibold leading-6 text-orange-950">
              Bu belgede bulunan ölçüler müşteri tarafından yaklaşık olarak alınmıştır. Üretim ve montaj için kesin ölçü niteliği taşımaz. Sipariş öncesinde profesyonel keşif ve teknik kontrol gereklidir.
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <section className="bg-[#071321] px-4 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="font-bold uppercase tracking-[0.24em] text-cyan-300">Online ön keşif merkezi</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">Doğru Ölçü Alın, Hızlı Ön Fiyat Teklifi Alın</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Cam balkon, PVC ve alüminyum doğrama sistemleri için yaklaşık ölçülerinizi görsel adımları izleyerek kolayca iletin.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {(Object.keys(PRODUCT_DATA) as Product[]).map(key => {
              const item = PRODUCT_DATA[key];
              const active = key === product;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => chooseProduct(key)}
                  className={`min-h-36 rounded-2xl border p-5 text-left transition focus:outline-none focus:ring-4 focus:ring-cyan-300/40 ${
                    active ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-white/20 bg-white/5 hover:border-white/50 hover:bg-white/10"
                  }`}
                  aria-pressed={active}
                >
                  <Ruler className="size-7" />
                  <span className="mt-5 block text-xl font-black">{item.card}</span>
                  <span className={`mt-2 block text-sm ${active ? "text-slate-700" : "text-slate-300"}`}>Rehberi aç <ArrowRight className="ml-1 inline size-4" /></span>
                </button>
              );
            })}
          </div>
          <div className="mt-7 flex gap-3 rounded-2xl border border-orange-400/60 bg-orange-400/10 p-5 text-orange-50">
            <Info className="mt-0.5 size-6 shrink-0 text-orange-300" />
            <p><strong>Önemli:</strong> Bu rehber yalnızca ön fiyatlandırma içindir. Kesin üretim ölçüsü sipariş öncesinde uzman ekibimiz tarafından yerinde doğrulanmalıdır.</p>
          </div>
        </div>
      </section>

      <main id="urun-rehberi" className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <Wrench className="size-7 text-orange-500" />
            <h2 className="text-3xl font-black">Ölçü almadan önce hazırlık</h2>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {tools.map(([label, Icon]) => (
              <div key={label} className="rounded-2xl bg-slate-50 p-4 text-center">
                <Icon className="mx-auto size-7 text-cyan-700" />
                <p className="mt-3 text-sm font-bold">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_0.7fr]">
            <ul className="grid gap-3 sm:grid-cols-2">
              {preparation.map(item => <li key={item} className="flex gap-2 text-base leading-6 text-slate-700"><Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />{item}</li>)}
            </ul>
            <aside className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="flex items-center gap-2 font-black text-red-900"><X className="size-5" />Kullanmayın</h3>
              <ul className="mt-3 space-y-2 text-red-900">
                <li>Esnek terzi mezurası</li>
                <li>Tek noktadan alınmış ölçü</li>
                <li>Tahmini veya eski proje ölçüsü</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <button
              type="button"
              className="group relative min-h-72 overflow-hidden bg-slate-100 text-left focus:outline-none focus:ring-4 focus:ring-inset focus:ring-orange-400"
              onClick={() => window.open(data.image, "_blank", "noopener,noreferrer")}
              aria-label={`${data.imageAlt}. Görseli büyüt`}
            >
              <img src={data.image} alt={data.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
              <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-slate-900 shadow">Büyüt</span>
            </button>
            <div className="p-6 sm:p-9">
              <p className="font-bold uppercase tracking-[0.2em] text-orange-600">Seçili rehber</p>
              <h2 className="mt-2 text-3xl font-black">{data.card}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">{data.description}</p>
              <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="font-bold">Çizim işaretleri</p>
                <p className="mt-2 text-slate-300"><strong className="text-orange-400">G</strong> genişlik, <strong className="text-cyan-300">Y</strong> yükseklik, <strong className="text-emerald-300">D</strong> derinliktir. Tüm değerleri mm girin.</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 p-6 sm:p-9">
            <MeasurementDiagram />
          </div>
        </section>

        {product === "cam-balkon" && (
          <section>
            <h2 className="mb-5 text-3xl font-black">Cam balkon: 7 güvenli adım</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              <GuideStep number={1} title="Cepheleri belirleyin">Düz, L veya U balkonlarda yön değiştiren her kenarı Cephe A, B, C olarak ayrı kaydedin. Köşeleri krokinizde işaretleyin.</GuideStep>
              <GuideStep number={2} title="Üç genişlik alın">Her cephede alt G1, orta G2 ve üst G3 ölçüsünü alın. Duvarlar tam dik olmayabilir.</GuideStep>
              <GuideStep number={3} title="Üç yükseklik alın">Alt taşıyıcı yüzey ile tavan/kiriş arasını solda Y1, ortada Y2, sağda Y3 olarak ölçün.</GuideStep>
              <GuideStep number={4} title="Korkuluk ve parapeti kaydedin">Beton, metal veya cam korkuluk türünü; yüksekliği, sağlamlığı, mermer çıkıntısını ve kurulum yüzeyini belirtin.</GuideStep>
              <GuideStep number={5} title="Tavan ve zemini kontrol edin">Beton, metal, asma tavan, kaplama, seramik, mermer, eğim ve su tahliye kanalı durumunu not edin.</GuideStep>
              <GuideStep number={6} title="Köşe ve engelleri ölçün">Kolon, kiriş, boru, klima, musluk, kablo, aydınlatma ve panjur kutusunun duvara uzaklık, genişlik ve derinliğini yazın.</GuideStep>
              <GuideStep number={7} title="Toplanma yönünü seçin">Sola, sağa, iki tarafa veya ortadan iki yana toplanma tercihinizi içeriden bakışa göre belirtin.</GuideStep>
            </div>
          </section>
        )}

        {product === "pvc" && (
          <section>
            <h2 className="mb-5 text-3xl font-black">PVC pencere ve kapı: doğru açıklığı tanımlayın</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              <GuideStep number={1} title="Ölçü türünü seçin">Mevcut doğrama dıştan dışa ölçüsü ile boş duvar açıklığı farklıdır. Hangisini ölçtüğünüzü notlara yazın.</GuideStep>
              <GuideStep number={2} title="Genişliği üç noktadan alın">Üst G1, orta G2, alt G3. Sistem en küçük değeri gösterir; üretim veya montaj payı düşmez.</GuideStep>
              <GuideStep number={3} title="Yüksekliği üç noktadan alın">Sol Y1, orta Y2, sağ Y3 değerlerini aynı referans yüzeyler arasında ölçün.</GuideStep>
              <GuideStep number={4} title="Duvar ve kasa derinliğini alın">Duvar kalınlığı, kasa derinliği, iç/dış sıva, yalıtım ve denizlik durumunu kaydedin.</GuideStep>
              <GuideStep number={5} title="Açılım yönünü içeriden belirleyin">Sağ, sol, çift açılım, vasistas, sabit, sürme veya çift kanat seçin. Menteşe ve kol tarafını not edin.</GuideStep>
              <GuideStep number={6} title="Kapı eşik ve kotunu kontrol edin">Kapı için eşik yüksekliğini, iç-dış zemin farkını, sabit yan/üst cam ve panjur durumunu ekleyin.</GuideStep>
            </div>
          </section>
        )}

        {product === "aluminyum" && (
          <section>
            <h2 className="mb-5 text-3xl font-black">Alüminyum sistem: ray ve hareket alanını ekleyin</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              <GuideStep number={1} title="Temel açıklığı ölçün">Üç genişlik, üç yükseklik ve profil için kullanılabilir derinliği mm olarak kaydedin.</GuideStep>
              <GuideStep number={2} title="Taşıyıcı yüzeyleri tanımlayın">Alt ve üst yüzeyin beton, metal veya kaplama olup olmadığını belirtin.</GuideStep>
              <GuideStep number={3} title="Ray ve hareket alanını ölçün">Ray için zemin genişliğini, eşik yüksekliğini ve kanatların güvenli hareket alanını yazın.</GuideStep>
              <GuideStep number={4} title="Drenajı kontrol edin">Su tahliye kanalı ve dışa doğru eğim durumunu fotoğraflayın.</GuideStep>
              <GuideStep number={5} title="Sabit ve hareketli bölümleri çizin">Sabit panelleri, açılan kanatları, kolon ve kirişlerin konumunu krokinizde işaretleyin.</GuideStep>
              <GuideStep number={6} title="Geniş açıklıkta uzman çağırın">Büyük ve ağır sistemleri tek başınıza ölçmeyin. Taşıyıcı uygunluğu için uzman keşfi gerekir.</GuideStep>
            </div>
          </section>
        )}

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="flex items-center gap-3 text-2xl font-black"><Camera className="text-cyan-700" />Fotoğraf çekme rehberi</h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-4">
                <CheckCircle2 className="size-7 text-emerald-700" />
                <h3 className="mt-3 font-black text-emerald-950">Doğru</h3>
                <p className="mt-2 text-sm leading-6 text-emerald-900">Alan tamamen kadrajda, ışık yeterli ve ölçü noktaları görünüyor.</p>
              </div>
              <div className="rounded-2xl border-2 border-red-300 bg-red-50 p-4">
                <X className="size-7 text-red-700" />
                <h3 className="mt-3 font-black text-red-950">Yanlış</h3>
                <p className="mt-2 text-sm leading-6 text-red-900">Alan kesilmiş, karanlık, aşırı yakın veya ölçü noktaları görünmüyor.</p>
              </div>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {photoList.map(item => <li key={item} className="flex gap-2 text-slate-700"><FileImage className="mt-0.5 size-5 shrink-0 text-orange-500" />{item}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl border border-red-200 bg-red-50 p-6 sm:p-8">
            <h2 className="flex items-center gap-3 text-2xl font-black text-red-950"><ShieldAlert />Güvenlik uyarıları</h2>
            <ul className="mt-6 space-y-3">
              {safety.map(item => <li key={item} className="flex gap-2 font-semibold leading-6 text-red-900"><AlertTriangle className="mt-0.5 size-5 shrink-0" />{item}</li>)}
            </ul>
          </div>
        </section>

        {stage === "guide" && (
          <section className="rounded-3xl bg-[#071321] p-7 text-white sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-black">Yaklaşık ölçülerinizi kaydetmeye hazır mısınız?</h2>
                <p className="mt-3 max-w-2xl text-slate-300">Form, ölçülerinizi mm cinsinden kontrol eder ve düzenli bir ön keşif özeti oluşturur.</p>
              </div>
              <Button onClick={beginForm} size="lg" className="h-14 bg-orange-500 px-7 text-base text-white hover:bg-orange-600">Ölçü Almaya Başla <ArrowRight className="ml-2 size-5" /></Button>
            </div>
          </section>
        )}

        {stage === "form" && (
          <section ref={formRef} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
            <div className="max-w-3xl">
              <p className="font-bold uppercase tracking-[0.2em] text-cyan-700">İnteraktif ölçü formu</p>
              <h2 className="mt-2 text-3xl font-black">Yaklaşık ön keşif bilgileri</h2>
              <p className="mt-3 text-slate-600">Yıldızlı alanlar zorunludur. Ölçülerin tümü milimetre (mm) olmalıdır.</p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div><Label htmlFor="name">Ad ve soyad *</Label><Input id="name" value={form.name} onChange={e => update("name", e.target.value)} className="mt-2 h-12" autoComplete="name" /></div>
              <div><Label htmlFor="phone">Telefon *</Label><Input id="phone" value={form.phone} onChange={e => update("phone", e.target.value)} className="mt-2 h-12" inputMode="tel" autoComplete="tel" /></div>
              <div><Label htmlFor="email">E-posta</Label><Input id="email" type="email" value={form.email} onChange={e => update("email", e.target.value)} className="mt-2 h-12" autoComplete="email" /></div>
              <div><Label htmlFor="city">İl *</Label><Input id="city" value={form.city} onChange={e => update("city", e.target.value)} className="mt-2 h-12" autoComplete="address-level1" /></div>
              <div><Label htmlFor="district">İlçe</Label><Input id="district" value={form.district} onChange={e => update("district", e.target.value)} className="mt-2 h-12" autoComplete="address-level2" /></div>
              <div>
                <Label htmlFor="openingCount">Cephe / açıklık sayısı</Label>
                <Input id="openingCount" type="number" min="1" max="30" value={form.openingCount} onChange={e => update("openingCount", e.target.value)} className="mt-2 h-12" />
              </div>
              <div className="sm:col-span-2 lg:col-span-3">
                <Label htmlFor="system">Sistem tercihi *</Label>
                <select id="system" value={form.system} onChange={e => update("system", e.target.value)} className="mt-2 h-12 w-full rounded-md border border-input bg-background px-3 text-base">
                  <option value="">Seçiniz</option>
                  {data.systems.map(item => <option key={item}>{item}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-black">Açıklık ölçüleri</h3>
              <p className="mt-2 text-slate-600">Üst, orta, alt genişlik ile sol, orta, sağ yüksekliği ayrı girin. Montaj payı otomatik düşülmez.</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {([
                  ["g1", "G1 • Üst genişlik"],
                  ["g2", "G2 • Orta genişlik"],
                  ["g3", "G3 • Alt genişlik"],
                  ["y1", "Y1 • Sol yükseklik"],
                  ["y2", "Y2 • Orta yükseklik"],
                  ["y3", "Y3 • Sağ yükseklik"],
                  ["depth", "D • Derinlik"],
                ] as [MeasureKey, string][]).map(([field, label]) => (
                  <MillimeterInput key={field} field={field} label={label} value={form[field]} onChange={update} />
                ))}
              </div>
              {Number.isFinite(smallestWidth) && Number.isFinite(smallestHeight) && (
                <div className="mt-5 rounded-2xl border border-cyan-200 bg-cyan-50 p-4 text-cyan-950">
                  <strong>Kontrol amaçlı en küçük değerler:</strong> Genişlik {smallestWidth} mm, yükseklik {smallestHeight} mm. Bu değerlerden üretim veya montaj payı çıkarılmamıştır.
                </div>
              )}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div><Label htmlFor="direction">Açılım / toplanma yönü</Label><Input id="direction" value={form.direction} onChange={e => update("direction", e.target.value)} className="mt-2 h-12" placeholder="Örn. içeriden bakınca sola" /></div>
              <div><Label htmlFor="surfaces">Duvar, tavan ve zemin</Label><Input id="surfaces" value={form.surfaces} onChange={e => update("surfaces", e.target.value)} className="mt-2 h-12" placeholder="Örn. beton tavan, mermer zemin" /></div>
              <div><Label htmlFor="railing">Korkuluk / denizlik</Label><Input id="railing" value={form.railing} onChange={e => update("railing", e.target.value)} className="mt-2 h-12" placeholder="Tür, sağlamlık, çıkıntı" /></div>
              <div><Label htmlFor="obstacles">Yapısal engeller</Label><Input id="obstacles" value={form.obstacles} onChange={e => update("obstacles", e.target.value)} className="mt-2 h-12" placeholder="Kolon, boru, klima, kablo…" /></div>
              <div><Label htmlFor="color">Renk tercihi</Label><Input id="color" value={form.color} onChange={e => update("color", e.target.value)} className="mt-2 h-12" /></div>
              <div><Label htmlFor="glass">Cam tercihi</Label><Input id="glass" value={form.glass} onChange={e => update("glass", e.target.value)} className="mt-2 h-12" /></div>
              <div className="sm:col-span-2"><Label htmlFor="notes">Ek açıklamalar</Label><textarea id="notes" value={form.notes} onChange={e => update("notes", e.target.value)} className="mt-2 min-h-28 w-full rounded-md border border-input bg-background p-3 text-base" /></div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="flex min-h-32 cursor-pointer items-center gap-4 rounded-2xl border-2 border-dashed border-slate-300 p-5 hover:border-cyan-600">
                <ImagePlus className="size-8 text-cyan-700" />
                <span><strong className="block">Fotoğraf Yükle</strong><span className="text-sm text-slate-500">{photos.length ? `${photos.length} dosya seçildi` : "En fazla 8 fotoğraf"}</span></span>
                <input type="file" accept="image/*" multiple className="sr-only" onChange={e => handleFiles(e.target.files, "photo")} />
              </label>
              <label className="flex min-h-32 cursor-pointer items-center gap-4 rounded-2xl border-2 border-dashed border-slate-300 p-5 hover:border-orange-500">
                <Upload className="size-8 text-orange-500" />
                <span><strong className="block">Kroki Yükle</strong><span className="text-sm text-slate-500">{sketch || "JPG, PNG veya PDF"}</span></span>
                <input type="file" accept="image/*,.pdf" className="sr-only" onChange={e => handleFiles(e.target.files, "sketch")} />
              </label>
            </div>

            {error && <div role="alert" className="mt-6 flex gap-2 rounded-xl bg-red-50 p-4 font-semibold text-red-800"><AlertTriangle className="size-5 shrink-0" />{error}</div>}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={validateAndSummarize} size="lg" className="h-14 bg-orange-500 px-7 text-white hover:bg-orange-600">Ölçüleri Kontrol Et <ArrowRight className="ml-2 size-5" /></Button>
              <Button variant="outline" size="lg" className="h-14" onClick={() => setStage("guide")}>Rehbere dön</Button>
            </div>
          </section>
        )}

        <section className="rounded-3xl bg-gradient-to-br from-cyan-700 to-slate-950 p-7 text-white sm:p-10">
          <Layers3 className="size-10 text-cyan-200" />
          <h2 className="mt-5 text-3xl font-black">Ölçünüzden emin değil misiniz?</h2>
          <p className="mt-3 max-w-2xl text-lg text-cyan-50">Fotoğraflarınızı ve yaklaşık ölçülerinizi gönderin. Ekibimiz sizi yönlendirsin.</p>
          <Button onClick={requestOffer} size="lg" className="mt-7 h-14 bg-white px-7 text-slate-950 hover:bg-slate-100">Uzman Keşfi Talep Et</Button>
        </section>
      </main>
    </div>
  );
}
