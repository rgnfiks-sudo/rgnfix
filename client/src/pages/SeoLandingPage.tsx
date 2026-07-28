import { Link, useLocation } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, CircleHelp, Ruler, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { findSeoPage } from "@shared/seoCatalog";

export default function SeoLandingPage() {
  const [location] = useLocation();
  const page = findSeoPage(location);

  if (!page) return null;

  return (
    <article>
      <header className="border-b bg-gradient-to-br from-slate-950 via-primary to-cyan-950 text-white">
        <div className="container py-14 sm:py-20">
          <nav aria-label="İçerik yolu" className="mb-7 flex items-center gap-2 text-xs text-white/60">
            <Link href="/">Ana sayfa</Link><ChevronRight className="h-3.5 w-3.5" /><span>{page.h1}</span>
          </nav>
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_22rem]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{page.eyebrow}</p>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{page.h1}</h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">{page.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={page.primaryCta.href}><Button size="lg" className="h-12 bg-cyan-500 px-6 text-slate-950 hover:bg-cyan-400">{page.primaryCta.label}<ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                {page.secondaryCta && <Link href={page.secondaryCta.href}><Button size="lg" variant="outline" className="h-12 border-white/25 bg-white/5 px-6 text-white hover:bg-white/10">{page.secondaryCta.label}</Button></Link>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {page.highlights.map((highlight, index) => (
                <div key={highlight} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <CheckCircle2 className={`mb-3 h-5 w-5 ${index % 2 ? "text-emerald-300" : "text-cyan-300"}`} />
                  <p className="text-sm font-semibold leading-snug">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="container py-14 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {page.sections.map((section, index) => (
            <Card key={section.title} className="border-border/70 bg-card/80">
              <CardContent className="p-6">
                <span className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/10 text-sm font-bold text-cyan-700 dark:text-cyan-300">0{index + 1}</span>
                <h2 className="text-xl font-bold">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {page.steps && (
        <section className="border-y bg-muted/40">
          <div className="container py-14 sm:py-16">
            <div className="mb-9 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">Adım adım</p>
              <h2 className="mt-3 text-3xl font-bold">Doğru sonuç için kontrollü ilerleyin</h2>
            </div>
            <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {page.steps.map((step, index) => (
                <li key={step} className="relative rounded-2xl border bg-background p-5">
                  <span className="text-3xl font-black text-cyan-500/25">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-sm font-semibold leading-6">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="container grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_20rem]">
        <div>
          <div className="mb-8 flex items-center gap-3"><CircleHelp className="h-6 w-6 text-cyan-600" /><h2 className="text-3xl font-bold">Sıkça sorulan sorular</h2></div>
          <div className="divide-y rounded-2xl border bg-card">
            {page.faqs.map(faq => (
              <details key={faq.question} className="group p-5 open:bg-muted/20">
                <summary className="cursor-pointer list-none pr-6 font-semibold">{faq.question}</summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-3xl bg-primary p-6 text-primary-foreground lg:sticky lg:top-24">
          <Ruler className="h-8 w-8 text-cyan-300" />
          <h2 className="mt-5 text-2xl font-bold">Ölçünüz hazır mı?</h2>
          <p className="mt-3 text-sm leading-6 text-primary-foreground/70">Ölçüyü kontrol edin, fiyatı anında görün ve siparişe aynı bilgilerle devam edin.</p>
          <Link href={page.primaryCta.href}><Button className="mt-6 w-full bg-cyan-500 text-slate-950 hover:bg-cyan-400">{page.primaryCta.label}</Button></Link>
          <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-xs text-white/70">
            <p className="flex items-center gap-2"><Truck className="h-4 w-4 text-cyan-300" /> Türkiye’nin 81 iline gönderim</p>
            <p className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-cyan-300" /> 2 yıl garanti ve montaj desteği</p>
          </div>
        </aside>
      </section>

      <section className="border-t bg-slate-950 text-white">
        <div className="container py-12">
          <h2 className="text-xl font-bold">İlgili ürün ve rehberler</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {page.related.map(path => {
              const related = findSeoPage(path);
              return <Link key={path} href={path}><span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/75 transition hover:border-cyan-400 hover:text-white">{related?.h1 ?? path}<ArrowRight className="h-3.5 w-3.5" /></span></Link>;
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
