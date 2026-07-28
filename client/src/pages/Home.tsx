import { Link } from "wouter";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  CreditCard,
  Grid2X2,
  Layers3,
  MessageCircle,
  PackageCheck,
  Palette,
  PlayCircle,
  Ruler,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";

const productCards = [
  {
    title: "Ölçüye Özel Plise Perde",
    description: "Cam balkon, PVC pencere, alüminyum doğrama ve kapılar için kumaş, profil ve montaj seçiminize göre hazırlanır.",
    href: "/plise-perde",
    cta: "Plise perdeleri incele",
    image: "/fabrics/catalog/urun-nova-vidali.png",
    alt: "Ölçüye özel Nova plise perde örneği",
    badge: "Perde",
  },
  {
    title: "Kapı ve Pencere Plise Sineklik",
    description: "Balkon kapısı ve pencereler için ölçüye göre üretilen, katlanır yapılı plise sineklik seçenekleri.",
    href: "/plise-sineklik",
    cta: "Plise sineklik seç",
    image: "/sineklik/kapi-antrasit.svg",
    alt: "Antrasit kapı plise sineklik çizimi",
    badge: "Sineklik",
  },
];

const processSteps = [
  { icon: Ruler, title: "Uygulama alanını seçin", text: "Cam balkon, PVC, alüminyum, kapı veya pencere tipini belirleyin." },
  { icon: Grid2X2, title: "Her parçayı ölçün", text: "En ve boy değerlerini ayrı kaydedin; sistem her ölçüyü size tekrar onaylatır." },
  { icon: Palette, title: "Ürünü yapılandırın", text: "Kumaş serisi, renk, profil, kasa ve montaj tipini karşılaştırın." },
  { icon: Calculator, title: "Fiyatı anında görün", text: "Güncel m² fiyatı ve seçim farklarıyla toplam tutarı siparişten önce görün." },
  { icon: PackageCheck, title: "Sipariş ve kurulum", text: "Ölçüye özel üretim, güvenli paketleme ve montaj rehberiyle teslim alın." },
];

const measurementTools = [
  { icon: Ruler, title: "Akıllı Ölçü Asistanı", text: "Kanat ve parçaları sırayla ölçün, sesli teyitle yanlış giriş riskini azaltın.", href: "/olcu-asistani", cta: "Ölçüyü başlat" },
  { icon: PlayCircle, title: "Görsel Ölçü Rehberi", text: "Pencere, kapı ve cam balkon için mezuranın yerleşeceği noktaları görün.", href: "/gorsel-olcu-rehberi", cta: "Görsel rehberi aç" },
  { icon: MessageCircle, title: "Fotoğraflı Ölçü Desteği", text: "Kararsız kaldığınız uygulama alanı için fotoğrafla destek talebi oluşturun.", href: "/olcu-fotografi", cta: "Fotoğraf gönder" },
];

const faq = [
  { q: "Plise perde ve sineklik ölçüye özel mi üretiliyor?", a: "Evet. Ürünler siparişte onayladığınız uygulama, en, boy, adet ve varyant bilgilerine göre hazırlanır." },
  { q: "Fiyatı sipariş vermeden görebilir miyim?", a: "Evet. Ölçü, kumaş, kasa ve montaj seçimini yaptıktan sonra güncel toplam fiyatı görebilirsiniz." },
  { q: "Türkiye’nin her yerine gönderim var mı?", a: "Evet. Ölçüye özel hazırlanan demonte ürünler Türkiye’nin 81 iline kargo ile gönderilir." },
  { q: "Ürünü kendim monte edebilir miyim?", a: "Uygun montaj tipi seçildiğinde kurulum rehberinden yararlanabilirsiniz. Kararsız kaldığınız noktada destek ekibine ulaşabilirsiniz." },
  { q: "Teslimat ve ödeme seçenekleri nedir?", a: "Tahmini teslim süresi 7 iş günüdür. Kapıda ödeme mevcuttur; 3.000 TL ve üzeri siparişlerde kargo ücretsizdir." },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_80%_20%,#00b4b0_0,transparent_34%),radial-gradient(circle_at_20%_90%,#0096d6_0,transparent_32%)]" />
        <div className="absolute inset-0 future-grid opacity-20" />
        <div className="container relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-wide text-cyan-200">
              <Sparkles className="h-4 w-4" /> ÖLÇÜYE ÖZEL ÜRETİM • TÜRKİYE GENELİ
            </div>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Ölçüye Özel Plise Perde ve <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">Plise Sineklik</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Cam balkon, PVC pencere, alüminyum doğrama ve kapılar için ölçünüzü adım adım alın. Kumaşı seçin, fiyatı anında görün ve ölçüye özel ürününüzü Türkiye’nin 81 iline sipariş verin.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/olcu-asistani"><Button size="lg" className="h-13 bg-cyan-500 px-7 text-base font-bold text-slate-950 hover:bg-cyan-400"><Ruler className="mr-2 h-5 w-5" />Ölçü Almaya Başla</Button></Link>
              <Link href="/fiyat-hesapla"><Button size="lg" variant="outline" className="h-13 border-white/25 bg-white/5 px-7 text-base text-white hover:bg-white/10"><Calculator className="mr-2 h-5 w-5" />Fiyat Hesapla</Button></Link>
            </div>
            <div className="mt-9 grid max-w-2xl gap-3 text-sm sm:grid-cols-3">
              <p className="flex items-center gap-2 text-white/75"><Truck className="h-4 w-4 text-cyan-300" /> 81 ile gönderim</p>
              <p className="flex items-center gap-2 text-white/75"><CreditCard className="h-4 w-4 text-cyan-300" /> Kapıda ödeme</p>
              <p className="flex items-center gap-2 text-white/75"><ShieldCheck className="h-4 w-4 text-cyan-300" /> 2 yıl garanti</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
              <div className="mb-5 flex items-center justify-between">
                <div><p className="text-xs font-bold tracking-[.18em] text-cyan-300">RGNFIX ÖLÇÜ MERKEZİ</p><h2 className="mt-1 text-2xl font-bold">Ölçüden siparişe tek akış</h2></div>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400/15"><Ruler className="h-5 w-5 text-cyan-300" /></span>
              </div>
              <div className="rounded-2xl bg-slate-900/80 p-5">
                <div className="mb-5 flex items-center justify-between text-xs text-white/55"><span>ÖLÇÜ İLERLEMESİ</span><span>3 adımda hazır</span></div>
                <div className="space-y-3">
                  {[
                    ["1", "Alanı seç", "Cam balkon • PVC • Kapı"],
                    ["2", "Ölçüleri doğrula", "En • Boy • Adet"],
                    ["3", "Fiyata aktar", "Kumaş • Profil • Montaj"],
                  ].map(([number, title, text], index) => (
                    <div key={number} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[.04] p-4">
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-black ${index === 0 ? "bg-cyan-400 text-slate-950" : "bg-white/10 text-white"}`}>{number}</span>
                      <div><p className="font-semibold">{title}</p><p className="mt-0.5 text-xs text-white/50">{text}</p></div>
                      <ChevronRight className="ml-auto h-4 w-4 text-white/30" />
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/olcu-asistani"><Button className="mt-5 h-12 w-full bg-white font-bold text-slate-950 hover:bg-cyan-50">Akıllı ölçüyü aç <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-background">
        <div className="container grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Clock3, "7 iş günü", "Tahmini üretim ve teslim"],
            [Truck, "Ücretsiz kargo", "3.000 TL ve üzeri"],
            [ShieldCheck, "2 yıl garanti", "Ürün ve destek güvencesi"],
            [Wrench, "Montaj desteği", "Adım adım kurulum rehberi"],
          ].map(([Icon, title, text]) => {
            const ItemIcon = Icon as typeof Clock3;
            return <div key={String(title)} className="flex items-center gap-3 rounded-2xl border bg-card p-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-500/10"><ItemIcon className="h-5 w-5 text-cyan-700 dark:text-cyan-300" /></span><div><p className="font-bold">{String(title)}</p><p className="text-xs text-muted-foreground">{String(text)}</p></div></div>;
          })}
        </div>
      </section>

      <section className="container py-16 sm:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-700 dark:text-cyan-300">Ürünler</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Alanınıza göre doğru plise çözümü</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">Standart ölçü aramak yerine uygulama alanınızı seçin; ürününüz verdiğiniz ölçü ve tercihlere göre hazırlansın.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {productCards.map(product => (
            <Card key={product.href} className="group overflow-hidden border-border/70">
              <div className="grid min-h-[24rem] sm:grid-cols-[1fr_.9fr]">
                <CardContent className="flex flex-col p-7 sm:p-8">
                  <span className="w-fit rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-700 dark:text-cyan-300">{product.badge}</span>
                  <h3 className="mt-6 text-3xl font-bold leading-tight">{product.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{product.description}</p>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> Ölçüye özel üretim</li>
                    <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> Online seçim ve sipariş</li>
                    <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> Türkiye geneli gönderim</li>
                  </ul>
                  <Link href={product.href}><Button variant="outline" className="mt-auto w-fit gap-2">{product.cta}<ArrowRight className="h-4 w-4" /></Button></Link>
                </CardContent>
                <div className="relative min-h-72 overflow-hidden bg-gradient-to-br from-cyan-50 to-slate-200 p-7 dark:from-slate-800 dark:to-slate-900">
                  <img src={product.image} alt={product.alt} loading="lazy" decoding="async" className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.04]" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y bg-slate-950 text-white">
        <div className="container py-16 sm:py-20">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Nasıl çalışır?</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Ölçüden kuruluma kontrollü süreç</h2>
          </div>
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return <li key={step.title} className="rounded-2xl border border-white/10 bg-white/[.04] p-5"><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/15"><Icon className="h-5 w-5 text-cyan-300" /></span><span className="text-3xl font-black text-white/10">{String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-5 font-bold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{step.text}</p></li>;
            })}
          </ol>
        </div>
      </section>

      <section className="container py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-700 dark:text-cyan-300">Üst düzey ölçü platformu</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Ölçü alırken yalnız değilsiniz</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">Uygulama alanına göre değişen ölçü noktalarını tek bir genel anlatıma sıkıştırmıyoruz. Cam balkon kanatları, PVC, alüminyum, kapı ve pencereler için ayrı yönlendirmeler sunuyoruz.</p>
            <Link href="/plise-perde-olcu-alma"><Button variant="link" className="mt-4 h-auto p-0 text-base">Ölçü alma rehberini okuyun <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
          <div className="grid gap-4">
            {measurementTools.map(tool => {
              const Icon = tool.icon;
              return <Link key={tool.href} href={tool.href}><div className="group flex cursor-pointer items-start gap-5 rounded-2xl border bg-card p-5 transition hover:border-cyan-500/50 hover:shadow-lg"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-500/10"><Icon className="h-6 w-6 text-cyan-700 dark:text-cyan-300" /></span><div><h3 className="text-lg font-bold">{tool.title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{tool.text}</p><span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-cyan-700 dark:text-cyan-300">{tool.cta}<ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span></div></div></Link>;
            })}
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/40">
        <div className="container grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-700 dark:text-cyan-300">Kumaş ve renk</p>
            <h2 className="mt-3 text-3xl font-bold">Işık, mahremiyet ve görünümü birlikte seçin</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">Nova, Neo Fashion, Nano Clean, Nano Insulation ve Nano Pro serilerini kullanım ihtiyacınıza göre karşılaştırın. Kumaş kodunu, rengini ve profil seçimini sipariş özetinde yeniden görün.</p>
            <div className="mt-7 flex flex-wrap gap-3"><Link href="/kumas-karsilastirma"><Button>Kumaşları karşılaştır</Button></Link><Link href="/renk-secimi"><Button variant="outline">Renk rehberini aç</Button></Link></div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              ["/fabrics/catalog/nova-krem.png", "Krem plise perde kumaşı"],
              ["/fabrics/catalog/nova-acik-gri.png", "Açık gri plise perde kumaşı"],
              ["/fabrics/catalog/nova-antrasit.png", "Antrasit plise perde kumaşı"],
            ].map(([src, alt]) => <div key={src} className="overflow-hidden rounded-2xl border bg-card p-2"><img src={src} alt={alt} loading="lazy" decoding="async" className="aspect-[3/4] h-full w-full rounded-xl object-cover" /></div>)}
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center"><CircleHelp className="mx-auto h-8 w-8 text-cyan-600" /><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Siparişten önce merak edilenler</h2></div>
          <div className="divide-y rounded-3xl border bg-card">
            {faq.map(item => <details key={item.q} className="group p-5 sm:p-6"><summary className="cursor-pointer list-none pr-8 font-bold">{item.q}</summary><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.a}</p></details>)}
          </div>
          <div className="mt-7 text-center"><Link href="/sikca-sorulan-sorular"><Button variant="outline">Tüm soruları incele</Button></Link></div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-24">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-600 via-teal-700 to-slate-950 p-8 text-white sm:p-12 lg:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div><p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-100">İlk adımı doğru ölçüyle atın</p><h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-5xl">Ölçünüzü kaydedin, fiyatı görün, siparişe geçin.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">Hesap oluşturmak zorunda kalmadan ölçü asistanını deneyebilir ve ürün seçeneklerini inceleyebilirsiniz.</p></div>
            <div className="flex flex-col gap-3">
              <Link href="/olcu-asistani"><Button size="lg" className="h-13 bg-white px-7 font-bold text-slate-950 hover:bg-cyan-50" onClick={() => trackEvent("measurement_start", { source: "home_final_cta" })}><Ruler className="mr-2 h-5 w-5" />Ölçü asistanını başlat</Button></Link>
              <Link href="/siparis"><Button size="lg" variant="outline" className="h-13 border-white/25 bg-white/5 px-7 text-white hover:bg-white/10"><ShoppingCart className="mr-2 h-5 w-5" />Sipariş ekranına git</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
