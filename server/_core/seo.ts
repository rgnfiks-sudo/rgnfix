import { findSeoPage, getSeoMeta, normalizeSeoPath, SEO_META, SEO_PAGES, SITE_URL, type SeoPage } from "../../shared/seoCatalog";

const BUSINESS = {
  name: "RGNFIX",
  legalName: "Ferhat Ergan",
  phone: "+905300288903",
  email: "rgnfiks@gmail.com",
  address: {
    streetAddress: "Akkent Mahallesi, 134016 Nolu Cadde, No: 2E/E",
    addressLocality: "Şahinbey",
    addressRegion: "Gaziantep",
    addressCountry: "TR",
  },
};

const APP_PATHS = new Set([
  "/",
  "/ai-danismani",
  "/olcu-asistani",
  "/gorsel-olcu-rehberi",
  "/olcu-fotografi",
  "/fiyat-hesapla",
  "/kumas-karsilastirma",
  "/sineklik",
  "/renk-danismani",
  "/montaj-rehberi",
  "/siparis",
  "/siparis-sorgula",
  "/bayi-haritasi",
  "/gizlilik-politikasi",
  "/kullanim-kosullari",
  "/kvkk-aydinlatma",
  "/on-bilgilendirme",
  "/mesafeli-satis-sozlesmesi",
  "/destek",
  "/hesap-silme",
  "/giris",
  "/sifremi-unuttum",
  "/sifre-yenile",
  "/eposta-dogrula",
  "/hesabim",
  "/hesap-ayarlari",
  "/yonetici",
  "/yonetici/fiyatlar",
  ...SEO_PAGES.map(page => page.path),
]);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function jsonLdForPage(pathname: string, page?: SeoPage) {
  const canonical = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/rgnfix-mark.svg`,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    address: { "@type": "PostalAddress", ...BUSINESS.address },
    areaServed: { "@type": "Country", name: "Türkiye" },
  };
  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "RGNFIX",
    inLanguage: "tr-TR",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
  const graph: Array<Record<string, unknown>> = [organization, website];

  if (page) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: page.h1, item: canonical },
      ],
    });
    graph.push({
      "@type": page.schemaType === "FAQPage" ? "WebPage" : page.schemaType,
      "@id": `${canonical}#content`,
      url: canonical,
      name: page.h1,
      headline: page.h1,
      description: page.description,
      inLanguage: "tr-TR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    });
    if (page.faqs.length) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: page.faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      });
    }
    if (page.intent === "ticari") {
      graph.push({
        "@type": "ProductGroup",
        "@id": `${canonical}#product`,
        name: page.h1,
        description: page.intro,
        brand: { "@type": "Brand", name: "RGNFIX" },
        category: page.primaryKeyword.includes("sineklik") ? "Plise Sineklik" : "Plise Perde",
        material: page.primaryKeyword.includes("sineklik") ? "Alüminyum profil ve fiber tül" : "Alüminyum profil ve plise kumaş",
        variesBy: ["https://schema.org/size", "https://schema.org/color", "https://schema.org/material"],
      });
    }
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function renderStaticContent(pathname: string, page?: SeoPage) {
  if (pathname === "/") {
    return `<main class="seo-prerender">
      <p class="seo-eyebrow">ÖLÇÜYE ÖZEL • TÜRKİYE GENELİ</p>
      <h1>Ölçüye Özel Plise Perde ve Plise Sineklik</h1>
      <p>Cam balkon, PVC pencere, alüminyum doğrama ve kapılar için ölçünüzü adım adım alın; kumaşı seçin, fiyatı anında görün ve Türkiye’nin 81 iline sipariş verin.</p>
      <nav><a href="/olcu-asistani">Akıllı ölçü asistanı</a><a href="/fiyat-hesapla">Fiyat hesapla</a><a href="/plise-perde">Plise perde</a><a href="/plise-sineklik">Plise sineklik</a></nav>
    </main>`;
  }
  if (!page) return `<main class="seo-prerender"><h1>${escapeHtml(getSeoMeta(pathname).title)}</h1><p>${escapeHtml(getSeoMeta(pathname).description)}</p></main>`;
  return `<main class="seo-prerender">
    <p class="seo-eyebrow">${escapeHtml(page.eyebrow)}</p>
    <h1>${escapeHtml(page.h1)}</h1>
    <p>${escapeHtml(page.intro)}</p>
    <ul>${page.highlights.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    ${page.sections.map(section => `<section><h2>${escapeHtml(section.title)}</h2><p>${escapeHtml(section.body)}</p></section>`).join("")}
    <section><h2>Sıkça sorulan sorular</h2>${page.faqs.map(faq => `<h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p>`).join("")}</section>
    <p><a href="${escapeHtml(page.primaryCta.href)}">${escapeHtml(page.primaryCta.label)}</a></p>
  </main>`;
}

const preloadStyles = `<style id="seo-prerender-style">
  .seo-prerender{max-width:1180px;margin:0 auto;padding:72px 24px;font-family:Inter,system-ui,sans-serif;color:#0d1b2a}
  .seo-prerender h1{max-width:900px;font-size:clamp(2.2rem,6vw,4.8rem);line-height:1.05;margin:12px 0 24px}
  .seo-prerender h2{font-size:1.5rem;margin:32px 0 8px}.seo-prerender h3{font-size:1rem;margin:20px 0 6px}
  .seo-prerender p,.seo-prerender li{max-width:820px;line-height:1.75;color:#52606d}.seo-prerender ul{padding-left:22px;margin:24px 0}
  .seo-prerender nav{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}.seo-prerender a{color:#006b8f;font-weight:700}
  .seo-eyebrow{font-size:.75rem;font-weight:800;letter-spacing:.18em;color:#007f8b!important}
  @media(prefers-color-scheme:dark){.seo-prerender{color:#f8fafc}.seo-prerender p,.seo-prerender li{color:#a9b4c0}}
</style>`;

export function isKnownAppPath(pathname: string) {
  const normalized = normalizeSeoPath(pathname);
  if (APP_PATHS.has(normalized)) return true;
  return /^\/yonetici\/siparis\/[^/]+\/duzenle$/.test(normalized);
}

export function renderSeoDocument(template: string, rawPath: string, options?: { notFound?: boolean }) {
  const pathname = normalizeSeoPath(rawPath);
  const page = findSeoPage(pathname);
  const fallbackMeta = getSeoMeta(pathname);
  const title = options?.notFound ? "Sayfa Bulunamadı | RGNFIX" : page?.title ?? fallbackMeta.title;
  const description = options?.notFound ? "Aradığınız sayfa bulunamadı. Plise perde, sineklik, ölçü ve fiyat araçlarına ana sayfadan ulaşın." : page?.description ?? fallbackMeta.description;
  const noindex = options?.notFound || fallbackMeta.noindex;
  const canonicalPath = options?.notFound ? "/" : pathname;
  const canonical = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
  const socialImage = `${SITE_URL}/brand/rgn-social-card.svg`;
  const staticContent = options?.notFound
    ? `<main class="seo-prerender"><p class="seo-eyebrow">404</p><h1>Aradığınız sayfa bulunamadı</h1><p>Plise perde, sineklik, ölçü ve fiyat araçlarına ana sayfadan ulaşabilirsiniz.</p><p><a href="/">Ana sayfaya dön</a></p></main>`
    : renderStaticContent(pathname, page);
  const structuredData = JSON.stringify(jsonLdForPage(pathname, page)).replaceAll("<", "\\u003c");

  let html = template
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace('<div id="root"></div>', `<div id="root">${staticContent}</div>`);

  const seoTags = `
    <link rel="canonical" href="${canonical}" />
    <meta name="robots" content="${noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}" />
    <meta property="og:locale" content="tr_TR" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="RGNFIX" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${socialImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${socialImage}" />
    <script type="application/ld+json">${structuredData}</script>
    ${preloadStyles}`;
  html = html.replace("</head>", `${seoTags}\n  </head>`);
  return html;
}

export function buildSitemapXml() {
  const corePaths = ["/", "/olcu-asistani", "/fiyat-hesapla", "/kumas-karsilastirma", "/sineklik", "/renk-danismani", "/montaj-rehberi", "/siparis", "/destek"];
  const legalPaths = ["/gizlilik-politikasi", "/kullanim-kosullari", "/kvkk-aydinlatma", "/on-bilgilendirme", "/mesafeli-satis-sozlesmesi"];
  const urls = Array.from(new Set([...corePaths, ...SEO_PAGES.map(page => page.path), ...legalPaths]));
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(path => `  <url><loc>${SITE_URL}${path === "/" ? "/" : `${path}/`}</loc><changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq><priority>${path === "/" ? "1.0" : path.includes("fiyat") || path.includes("olcu") ? "0.9" : "0.8"}</priority></url>`).join("\n")}
</urlset>`;
}

export const robotsTxt = `User-agent: *
Allow: /
Disallow: /yonetici
Disallow: /hesabim
Disallow: /hesap-ayarlari
Disallow: /giris
Disallow: /sifre-yenile
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`;
