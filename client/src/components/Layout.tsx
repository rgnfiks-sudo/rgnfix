import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Sun, Moon, User, LogOut, Ruler, Calculator, Palette, Bot, Layers, Wrench, ShoppingCart, LayoutDashboard, Settings, Grid2X2, Search, WalletCards, Truck, ShieldCheck, CreditCard, MessageCircle } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import { BUSINESS } from "@/config/business";
import { getSeoMeta, normalizeSeoPath, SITE_URL } from "@shared/seoCatalog";
import { trackEvent } from "@/lib/analytics";

const navItems = [
  { href: "/plise-perde", label: "Plise Perde", icon: Layers },
  { href: "/plise-sineklik", label: "Plise Sineklik", icon: Grid2X2 },
  { href: "/olcu-asistani", label: "Ölçü Asistanı", icon: Ruler },
  { href: "/fiyat-hesapla", label: "Fiyat Hesapla", icon: Calculator },
  { href: "/kumas-karsilastirma", label: "Kumaşlar", icon: Palette },
  { href: "/montaj-rehberi", label: "Montaj", icon: Wrench },
  { href: "/blog", label: "Rehberler", icon: Bot },
  { href: "/siparis", label: "Sipariş", icon: ShoppingCart },
  { href: "/siparis-sorgula", label: "Sipariş Sorgula", icon: Search },
];

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const accountHref = user?.role === "admin" ? "/yonetici" : "/hesabim";
  const accountLabel = user?.role === "admin" ? "Yönetim" : user?.name || "Hesabım";
  const AccountIcon = user?.role === "admin" ? LayoutDashboard : User;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const path = normalizeSeoPath(location);
    const seo = getSeoMeta(path);
    const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
    document.title = seo.title;
    setMeta('meta[name="description"]', "name", "description", seo.description);
    setMeta('meta[name="robots"]', "name", "robots", seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    setMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    setMeta('meta[property="og:description"]', "property", "og:description", seo.description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="bg-primary text-primary-foreground">
        <div className="container flex flex-wrap items-center justify-center gap-x-5 gap-y-1 py-2 text-center text-xs sm:text-sm">
          <span className="inline-flex items-center gap-1.5 font-bold"><Truck className="h-4 w-4" /> 3.000 TL ve üzeri ÜCRETSİZ KARGO</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> 2 yıl garanti</span>
          <span className="inline-flex items-center gap-1.5"><CreditCard className="h-4 w-4" /> Kapıda ödeme</span>
          <span className="inline-flex items-center gap-1.5"><Truck className="h-4 w-4" /> Tahmini teslim: 7 iş günü</span>
          <Link href="/fiyat-hesapla"><span className="cursor-pointer rounded-full bg-white/15 px-3 py-1 font-semibold hover:bg-white/25">Anlık fiyat al →</span></Link>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="group h-11 transition-transform duration-200 hover:scale-[1.02]"><BrandLogo className="h-11" /></Link>
          <nav aria-label="Ana menü" className="hidden lg:flex items-center gap-1">{navItems.slice(0, 6).map(item => <Link key={item.href} href={item.href}><span className={`px-3 py-2 rounded-lg text-sm font-medium cursor-pointer ${location === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}>{item.label}</span></Link>)}</nav>
          <div className="flex items-center gap-2">
            <div className="hidden xl:flex items-center gap-2 rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1.5 text-[10px] font-semibold text-primary"><span className="h-1.5 w-1.5 rounded-full bg-secondary" />DİJİTAL PLATFORM</div>
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Tema değiştir">{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</Button>
            {isAuthenticated ? <div className="hidden sm:flex items-center gap-2"><Link href={accountHref}><Button variant="ghost" size="sm" className="gap-2"><AccountIcon className="h-4 w-4" />{accountLabel}</Button></Link>{user?.role === "admin" && <Link href="/yonetici/fiyatlar"><Button variant="ghost" size="icon"><WalletCards className="h-4 w-4" /></Button></Link>}{user?.role === "user" && <Link href="/hesap-ayarlari"><Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button></Link>}<Button variant="ghost" size="icon" onClick={() => logout()}><LogOut className="h-4 w-4" /></Button></div> : <Button size="sm" onClick={() => startLogin()} className="hidden sm:flex">Giriş Yap</Button>}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}><SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden"><Menu className="h-5 w-5" /></Button></SheetTrigger><SheetContent side="right" className="w-80 p-0"><div className="flex h-full flex-col"><div className="flex items-center justify-between border-b p-4"><BrandLogo className="h-10" /><Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}><X className="h-4 w-4" /></Button></div><nav className="flex-1 space-y-1 overflow-y-auto p-4">{navItems.map(item => { const Icon = item.icon; return <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}><span className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${location === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent"}`}><Icon className="h-4 w-4" />{item.label}</span></Link>; })}</nav><div className="space-y-2 border-t p-4">{isAuthenticated ? <><Link href={accountHref}><Button variant="outline" className="w-full justify-start gap-2"><AccountIcon className="h-4 w-4" />{accountLabel}</Button></Link>{user?.role === "admin" && <Link href="/yonetici/fiyatlar"><Button variant="outline" className="w-full justify-start gap-2"><WalletCards className="h-4 w-4" />Fiyat Yönetimi</Button></Link>}<Button variant="ghost" className="w-full justify-start gap-2" onClick={() => logout()}><LogOut className="h-4 w-4" />Çıkış Yap</Button></> : <Button className="w-full" onClick={() => startLogin()}>Giriş Yap / Kayıt Ol</Button>}</div></div></SheetContent></Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <a
        href="https://wa.me/905300288903?text=Merhaba%20RGNFIX%2C%20%C3%B6l%C3%A7%C3%BCye%20%C3%B6zel%20plise%20%C3%BCr%C3%BCnler%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { page_path: location })}
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 items-center gap-2 rounded-full bg-[#16a34a] px-5 font-semibold text-white shadow-2xl transition hover:-translate-y-0.5 hover:bg-[#15803d]"
        aria-label="WhatsApp üzerinden RGNFIX ile iletişime geç"
      >
        <MessageCircle className="h-5 w-5" /><span className="hidden sm:inline">Ölçü desteği</span>
      </a>
      <footer className="border-t border-border/50 bg-muted/30"><div className="container py-12"><div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5"><div className="space-y-3"><BrandLogo className="h-12" /><p className="text-sm text-muted-foreground">Ölçüye özel plise perde ve sineklik için ölçü, fiyat ve online sipariş platformu.</p><p className="text-xs leading-5 text-muted-foreground">{BUSINESS.tradeName}<br/>{BUSINESS.address}</p></div><div><h4 className="mb-3 font-semibold text-sm">Ölçü ve fiyat</h4><div className="space-y-2 text-sm text-muted-foreground"><Link href="/olcu-asistani">Akıllı Ölçü Asistanı</Link><br/><Link href="/plise-perde-olcu-alma">Perde Ölçü Rehberi</Link><br/><Link href="/plise-sineklik-olcu-alma">Sineklik Ölçü Rehberi</Link><br/><Link href="/fiyat-hesapla">Fiyat Hesaplama</Link></div></div><div><h4 className="mb-3 font-semibold text-sm">Ürünler</h4><div className="space-y-2 text-sm text-muted-foreground"><Link href="/plise-perde">Plise Perde</Link><br/><Link href="/cam-balkon-plise-perde">Cam Balkon Perdesi</Link><br/><Link href="/plise-sineklik">Plise Sineklik</Link><br/><Link href="/kumas-karsilastirma">Kumaş Karşılaştırma</Link><br/><Link href="/sikca-sorulan-sorular">Sık Sorulan Sorular</Link></div></div><div><h4 className="mb-3 font-semibold text-sm">Yasal</h4><div className="space-y-2 text-sm text-muted-foreground"><Link href="/on-bilgilendirme">Ön Bilgilendirme</Link><br/><Link href="/mesafeli-satis-sozlesmesi">Mesafeli Satış Sözleşmesi</Link><br/><Link href="/gizlilik-politikasi">Gizlilik Politikası</Link><br/><Link href="/kullanim-kosullari">Kullanım Koşulları</Link><br/><Link href="/kvkk-aydinlatma">KVKK</Link></div></div><div><h4 className="mb-3 font-semibold text-sm">İletişim</h4><div className="space-y-2 text-sm text-muted-foreground"><a href={BUSINESS.phoneHref} onClick={() => trackEvent("phone_click", { page_path: location })}>{BUSINESS.phoneDisplay}</a><br/><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a><p>{BUSINESS.paymentMethod}</p><p>Tahmini teslim: {BUSINESS.deliveryTime}</p><p>Türkiye’nin 81 iline gönderim</p></div></div></div><div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} RGNFIX. Tüm hakları saklıdır.</div></div></footer>
    </div>
  );
}
