export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoSection = {
  title: string;
  body: string;
};

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  intent: "ticari" | "bilgilendirici" | "karsilastirma";
  primaryKeyword: string;
  highlights: string[];
  sections: SeoSection[];
  steps?: string[];
  faqs: SeoFaq[];
  related: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  schemaType: "CollectionPage" | "Article" | "FAQPage";
};

export const SITE_URL = "https://rgnfix.com";

export const SEO_PAGES: SeoPage[] = [
  {
    path: "/plise-perde",
    title: "Ölçüye Özel Plise Perde Modelleri | RGNFIX",
    description: "Cam balkon, PVC ve alüminyum pencereler için ölçüye özel plise perde. Kumaşı seçin, ölçünüzü girin, fiyatı anında görün.",
    h1: "Ölçüye Özel Plise Perde",
    eyebrow: "Evinize göre üretilir",
    intro: "RGNFIX plise perdeleri cam balkon, pencere ve kapı ölçünüze göre hazırlanır. Ölçü asistanıyla ölçünüzü kontrol edin, kumaş ve profil rengini seçin, fiyatı siparişten önce görün.",
    intent: "ticari",
    primaryKeyword: "plise perde",
    highlights: ["Ölçüye özel üretim", "Anlık fiyat hesaplama", "Türkiye’nin 81 iline gönderim", "Demonte ve kolay kurulum"],
    sections: [
      { title: "Hangi alanlarda kullanılır?", body: "Cam balkon kanatları, PVC pencereler, alüminyum doğramalar, balkon kapıları ve sürgülü sistemler için uygun montaj seçenekleri bulunur." },
      { title: "Kumaş ve profil seçenekleri", body: "Nova, Neo Fashion, Nano Clean, Nano Insulation ve Nano Pro serilerini; ışık geçirgenliği, temizlik ve ısı kontrolü ihtiyacınıza göre karşılaştırabilirsiniz." },
      { title: "Fiyat nasıl belirlenir?", body: "Fiyat; en, boy, adet, kumaş serisi, kasa tipi ve montaj seçimine göre hesaplanır. Ölçünüzü girdiğinizde güncel toplamı görürsünüz." },
    ],
    faqs: [
      { question: "Plise perde ölçüye özel mi hazırlanır?", answer: "Evet. Ürün, siparişte verdiğiniz net en ve boy ölçülerine göre üretilir." },
      { question: "Plise perdeyi kendim takabilir miyim?", answer: "Uygun montaj tipini seçtiğinizde demonte ürünle birlikte kurulum adımlarından yararlanabilirsiniz." },
      { question: "Türkiye geneli gönderim var mı?", answer: "Evet. Siparişler Türkiye’nin 81 iline kargo ile gönderilir." },
    ],
    related: ["/plise-perde-fiyatlari", "/plise-perde-olcu-alma", "/kumas-karsilastirma"],
    primaryCta: { label: "Ölçü almaya başla", href: "/olcu-asistani" },
    secondaryCta: { label: "Fiyat hesapla", href: "/fiyat-hesapla" },
    schemaType: "CollectionPage",
  },
  {
    path: "/plise-perde-fiyatlari",
    title: "Plise Perde Fiyatları ve Anlık Hesaplama | RGNFIX",
    description: "Plise perde fiyatını ölçü, kumaş, kasa ve montaj seçiminize göre anında hesaplayın. Şeffaf fiyatlandırma ve Türkiye geneli gönderim.",
    h1: "Plise Perde Fiyatları Nasıl Hesaplanır?",
    eyebrow: "Ölçünü gir, fiyatı gör",
    intro: "Tek bir sabit plise perde fiyatı yoktur. RGNFIX hesaplayıcısı ürünün gerçek ölçüsünü, seçilen kumaşı, montaj yöntemini ve kasa tipini birlikte değerlendirir.",
    intent: "ticari",
    primaryKeyword: "plise perde fiyatları",
    highlights: ["Güncel m² fiyatları", "Siparişten önce toplam tutar", "Birden fazla ölçü ekleme", "3.000 TL üzeri ücretsiz kargo"],
    sections: [
      { title: "Ölçü fiyatı nasıl etkiler?", body: "En ve boy santimetre olarak girilir; fiyatlandırmada minimum 1 m² kuralı uygulanır. Birden fazla pencere için her ölçüyü ayrı satırda hesaplayabilirsiniz." },
      { title: "Kumaş ve kasa farkları", body: "Serilerin teknik özellikleri ve m² fiyatları farklıdır. Slim kasa seçimi m² başına ilave ücret oluşturur; hesaplama ekranı farkı ayrı gösterir." },
      { title: "Kargo maliyeti", body: "3.000 TL ve üzerindeki siparişlerde kargo ücretsizdir. Daha düşük tutarlarda kargo bilgisi sipariş sürecinde açıklanır." },
    ],
    steps: ["Pencere veya cam balkon ölçüsünü alın", "Kumaş serisi ve varyantını seçin", "Montaj ve kasa tipini belirleyin", "Toplam fiyatı görün ve siparişe geçin"],
    faqs: [
      { question: "Plise perde m² fiyatı neden değişir?", answer: "Kumaş serisi, montaj tipi ve kasa seçimi ürünün m² fiyatını değiştirebilir." },
      { question: "Fiyat hesaplamak ücretli mi?", answer: "Hayır. Hesaplayıcıyı ücretsiz kullanabilir ve sipariş vermeden toplamı görebilirsiniz." },
    ],
    related: ["/plise-perde", "/kumas-karsilastirma", "/plise-perde-olcu-alma"],
    primaryCta: { label: "Anlık fiyat hesapla", href: "/fiyat-hesapla" },
    secondaryCta: { label: "Ölçü rehberini aç", href: "/plise-perde-olcu-alma" },
    schemaType: "FAQPage",
  },
  {
    path: "/olcuye-ozel-plise-perde",
    title: "Ölçüye Özel Plise Perde Siparişi | RGNFIX",
    description: "Standart ölçüye bağlı kalmayın. Pencere, kapı ve cam balkonunuza göre üretilen plise perdeyi online tasarlayın ve sipariş verin.",
    h1: "Pencerenize Tam Uyan Ölçüye Özel Plise Perde",
    eyebrow: "Standart değil, size özel",
    intro: "Her doğrama ve cam açıklığı aynı değildir. RGNFIX ölçü akışı, uygulama alanına göre doğru noktaları ölçmenizi ve siparişe aktarılacak net üretim ölçüsünü oluşturmanızı sağlar.",
    intent: "ticari",
    primaryKeyword: "ölçüye özel plise perde",
    highlights: ["Cam balkon kanatlarına özel", "PVC ve alüminyum doğramaya uygun", "Ölçü kontrol adımları", "Online sipariş"],
    sections: [
      { title: "Neden ölçüye özel?", body: "Doğru ölçü; düzgün açılıp kapanma, dengeli görünüm ve uygun montaj için gereklidir. Üretim siparişte onaylanan ölçülere göre yapılır." },
      { title: "Ölçüyü nasıl doğrularım?", body: "Akıllı ölçü asistanı uygulama alanını, montaj tipini ve her kanadın en-boy değerini ayrı ayrı kontrol eder." },
      { title: "Siparişe aktarım", body: "Tamamlanan ölçüler fiyat hesaplayıcıya aktarılır; aynı bilgileri yeniden yazmadan kumaş ve renk seçimine geçebilirsiniz." },
    ],
    faqs: [
      { question: "Yanlış ölçü riskini nasıl azaltabilirim?", answer: "Her kanadı ayrı ölçün, ölçüyü iki kez tekrarlayın ve ölçü asistanındaki onay adımını tamamlayın." },
      { question: "Birden fazla pencereyi tek siparişte ekleyebilir miyim?", answer: "Evet. Her pencere veya kanat için ayrı ölçü ekleyebilirsiniz." },
    ],
    related: ["/plise-perde-olcu-alma", "/cam-balkon-plise-perde", "/pvc-pencere-plise-perde"],
    primaryCta: { label: "Akıllı ölçüyü başlat", href: "/olcu-asistani" },
    secondaryCta: { label: "Ürünleri incele", href: "/plise-perde" },
    schemaType: "CollectionPage",
  },
  {
    path: "/cam-balkon-plise-perde",
    title: "Cam Balkon Plise Perde | Ölçüye Özel RGNFIX",
    description: "Cam balkon kanatları için ölçüye özel plise perde. Her camı ayrı ölçün, açılır kanadı belirtin, kumaşı seçip online sipariş verin.",
    h1: "Cam Balkon İçin Ölçüye Özel Plise Perde",
    eyebrow: "Her kanada ayrı uyum",
    intro: "Cam balkon sistemlerinde kanat ölçüleri ve açılır cam bilgisi doğru ürün için önemlidir. RGNFIX, her kanadı sırasıyla kaydetmenizi ve ölçüleri fiyat hesabına aktarmanızı sağlar.",
    intent: "ticari",
    primaryKeyword: "cam balkon plise perde",
    highlights: ["Kanat bazlı ölçüm", "Açılır kanat kontrolü", "Yapıştırma ve uygun montaj seçenekleri", "Işık ve mahremiyet kumaşları"],
    sections: [
      { title: "Cam balkon ölçüsü", body: "Her cam kanadının net eni ve boyu ayrı alınır. Açılır kanat işaretlenir ve tüm değerler sipariş öncesinde tek tek onaylanır." },
      { title: "Kumaş seçimi", body: "Güneş alan balkonlarda ısı ve ışık kontrolü yüksek seriler; daha aydınlık kullanımda ışığı yumuşatan seçenekler değerlendirilebilir." },
      { title: "Demonte gönderim ve kurulum", body: "Ürünler ölçüye göre hazırlanır, güvenli paketlenir ve kurulum rehberiyle Türkiye geneline gönderilir." },
    ],
    faqs: [
      { question: "Her cam kanadını ayrı ölçmek gerekir mi?", answer: "Evet. Kanatlar benzer görünse bile küçük ölçü farkları olabileceği için her biri ayrı ölçülmelidir." },
      { question: "Açılır kanat neden belirtilir?", answer: "Açılır kanat bilgisi, kullanım ve montaj yönlendirmesinin doğru yapılmasına yardımcı olur." },
    ],
    related: ["/plise-perde-olcu-alma", "/plise-perde-fiyatlari", "/kumas-karsilastirma"],
    primaryCta: { label: "Cam balkon ölçüsü al", href: "/olcu-asistani" },
    secondaryCta: { label: "Kumaşları karşılaştır", href: "/kumas-karsilastirma" },
    schemaType: "CollectionPage",
  },
  {
    path: "/pvc-pencere-plise-perde",
    title: "PVC Pencere Plise Perde | Ölçüye Özel RGNFIX",
    description: "PVC pencere ve kapılar için ölçüye özel plise perde. Doğru montaj tipini seçin, ölçüyü girin ve fiyatı anında hesaplayın.",
    h1: "PVC Pencere ve Kapılar İçin Plise Perde",
    eyebrow: "Doğramaya uygun montaj",
    intro: "PVC doğramalarda cam ölçüsü, conta yapısı ve seçilen montaj yöntemi birlikte değerlendirilmelidir. Ölçü asistanı doğru seçim için adım adım yönlendirir.",
    intent: "ticari",
    primaryKeyword: "PVC pencere plise perde",
    highlights: ["PVC pencereye uygun seçenekler", "Kancalı montaj kısıt kontrolü", "Profil rengi seçimi", "Anlık fiyat"],
    sections: [
      { title: "PVC için doğru montaj", body: "Uygulama alanı seçildiğinde sistem uygun montaj tiplerini gösterir ve uyumsuz seçenekleri sınırlar." },
      { title: "Ölçü noktaları", body: "Camın net en ve boy değerleri santimetre olarak alınır. Ölçüm sırasında mezuranın düz tutulması ve değerlerin tekrar edilmesi önerilir." },
      { title: "Renk uyumu", body: "Beyaz, antrasit ve uygun profil seçenekleriyle doğrama rengine yakın bir görünüm oluşturabilirsiniz." },
    ],
    faqs: [
      { question: "PVC pencereye delmeden plise perde takılır mı?", answer: "Uygun yüzey ve ürün seçeneğinde yapıştırma montajı değerlendirilebilir; seçim ekranındaki uyumluluk yönlendirmesini izleyin." },
      { question: "Ölçü camdan mı alınır?", answer: "Seçilen montaj tipine göre ölçü noktaları değişebilir. Bu nedenle önce uygulama ve montaj tipini seçin." },
    ],
    related: ["/plise-perde-olcu-alma", "/renk-secimi", "/plise-perde-fiyatlari"],
    primaryCta: { label: "PVC pencere ölçüsü al", href: "/olcu-asistani" },
    secondaryCta: { label: "Fiyat hesapla", href: "/fiyat-hesapla" },
    schemaType: "CollectionPage",
  },
  {
    path: "/plise-sineklik",
    title: "Ölçüye Özel Plise Sineklik | Kapı ve Pencere",
    description: "Kapı ve pencere için ölçüye özel plise sineklik. Ölçünüzü girin, profil rengini seçin; Türkiye geneli online sipariş verin.",
    h1: "Kapı ve Pencere İçin Plise Sineklik",
    eyebrow: "Havayı içeri, sineği dışarı",
    intro: "RGNFIX plise sineklik çözümleri pencere, balkon kapısı ve uygun açıklıklara göre ölçülendirilir. Kullanım alanını seçin, ölçünüzü kontrol edin ve profil rengini belirleyin.",
    intent: "ticari",
    primaryKeyword: "plise sineklik",
    highlights: ["Ölçüye özel üretim", "Kapı ve pencere seçenekleri", "Fiber tül", "Türkiye geneli gönderim"],
    sections: [
      { title: "Plise sineklik nerede kullanılır?", body: "PVC ve alüminyum pencere, balkon kapısı ve sık kullanılan geçiş alanlarında yer tasarrufu sağlayan katlanır yapı sunar." },
      { title: "Kapı ve pencere farkı", body: "Kapılarda geçiş sıklığı ve açıklık ölçüsü; pencerelerde ise doğrama yapısı ve montaj boşluğu önceliklidir." },
      { title: "Ölçü ve fiyat", body: "Net en-boy ölçüsü, ürün tipi ve profil seçimi fiyatı belirler. Ölçü rehberinden sonra sineklik sipariş ekranına geçebilirsiniz." },
    ],
    faqs: [
      { question: "Plise sineklik ölçüye özel mi üretilir?", answer: "Evet. Kapı veya pencerenin uygulama ölçüsüne göre hazırlanır." },
      { question: "Plise sineklik Türkiye geneline gönderilir mi?", answer: "Evet. Ölçüye göre hazırlanan ürünler Türkiye’nin 81 iline kargolanır." },
    ],
    related: ["/pencere-plise-sineklik", "/kapi-plise-sineklik", "/plise-sineklik-olcu-alma"],
    primaryCta: { label: "Sineklik seçeneklerini aç", href: "/sineklik" },
    secondaryCta: { label: "Ölçü rehberine git", href: "/plise-sineklik-olcu-alma" },
    schemaType: "CollectionPage",
  },
  {
    path: "/pencere-plise-sineklik",
    title: "Pencere Plise Sineklik | Ölçüye Özel RGNFIX",
    description: "PVC ve alüminyum pencereler için ölçüye özel plise sineklik. Ölçü rehberi, renk seçenekleri ve Türkiye geneli sipariş.",
    h1: "Pencere İçin Ölçüye Özel Plise Sineklik",
    eyebrow: "Pencerenize uygun çözüm",
    intro: "Pencere plise sinekliği, doğrama yapısı ve montaj boşluğu dikkate alınarak ölçülür. Doğru ölçüyle tülün dengeli çalışması ve çerçevenin uyumu hedeflenir.",
    intent: "ticari",
    primaryKeyword: "pencere plise sineklik",
    highlights: ["PVC ve alüminyum pencere", "Kompakt katlanır yapı", "Beyaz ve antrasit seçenekleri", "Kolay kullanım"],
    sections: [
      { title: "Pencere tipini belirleyin", body: "Ölçü almadan önce doğrama malzemesini, açılım yönünü ve montaj yapılacak yüzeyi kontrol edin." },
      { title: "Net ölçü alın", body: "En ve boyu birden fazla noktadan ölçün; farklılık varsa rehberde belirtilen güvenli değeri kullanın." },
      { title: "Sipariş öncesi kontrol", body: "Ölçü, profil rengi, adet ve iletişim bilgilerini üretime göndermeden önce özet ekranda yeniden kontrol edin." },
    ],
    faqs: [
      { question: "Pencere sinekliği için kaç ölçü almalıyım?", answer: "En ve boyu en az iki farklı noktadan ölçmek, doğramadaki olası farkları görmenize yardımcı olur." },
      { question: "Profil renkleri nelerdir?", answer: "Ürün ekranında mevcut beyaz ve antrasit seçeneklerini görebilirsiniz." },
    ],
    related: ["/plise-sineklik-olcu-alma", "/plise-sineklik-fiyatlari", "/plise-sineklik-montaji"],
    primaryCta: { label: "Pencere sinekliği seç", href: "/sineklik" },
    secondaryCta: { label: "Ölçü al", href: "/olcu-asistani" },
    schemaType: "CollectionPage",
  },
  {
    path: "/kapi-plise-sineklik",
    title: "Kapı Plise Sineklik | Balkon Kapısına Özel Ölçü",
    description: "Balkon ve teras kapıları için ölçüye özel plise sineklik. Geçiş alanına uygun model, ölçü rehberi ve online sipariş.",
    h1: "Balkon ve Teras Kapıları İçin Plise Sineklik",
    eyebrow: "Sık kullanıma uygun geçiş",
    intro: "Kapı plise sineklik seçiminde açıklık genişliği, geçiş yönü ve montaj yüzeyi önemlidir. RGNFIX ölçü akışı, sipariş için gereken değerleri düzenli biçimde kaydeder.",
    intent: "ticari",
    primaryKeyword: "kapı plise sineklik",
    highlights: ["Balkon ve teras kapıları", "Geçişe uygun katlanır sistem", "Ölçüye özel çerçeve", "Demonte gönderim"],
    sections: [
      { title: "Kapı açıklığını kontrol edin", body: "Süpürgelik, kol, eşik ve açılım yönü gibi montaja engel olabilecek noktaları ölçümden önce inceleyin." },
      { title: "Kullanım yönünü seçin", body: "Geçiş alışkanlığınıza ve uygun boşluğa göre açılım yönünü ürün seçeneklerinde belirleyin." },
      { title: "Kurulum desteği", body: "Demonte gönderilen ürün için montaj adımlarına ve destek kanallarına sipariş sonrasında erişebilirsiniz." },
    ],
    faqs: [
      { question: "Balkon kapısına plise sineklik olur mu?", answer: "Uygun montaj alanı ve doğru ölçü bulunduğunda balkon kapıları için ölçüye özel plise sineklik hazırlanabilir." },
      { question: "Kapı sinekliği kargoyla gelir mi?", answer: "Evet. Ürün güvenli paketlenerek demonte biçimde Türkiye geneline gönderilir." },
    ],
    related: ["/plise-sineklik-olcu-alma", "/plise-sineklik-montaji", "/plise-sineklik-fiyatlari"],
    primaryCta: { label: "Kapı sinekliği seç", href: "/sineklik" },
    secondaryCta: { label: "Ölçü rehberini aç", href: "/plise-sineklik-olcu-alma" },
    schemaType: "CollectionPage",
  },
  {
    path: "/plise-sineklik-fiyatlari",
    title: "Plise Sineklik Fiyatları | Ölçüye Göre Hesaplama",
    description: "Kapı ve pencere plise sineklik fiyatlarını ölçü ve ürün tipine göre hesaplayın. Türkiye geneli ölçüye özel sipariş.",
    h1: "Plise Sineklik Fiyatları",
    eyebrow: "Ölçüye göre şeffaf fiyat",
    intro: "Plise sineklik fiyatı kapı veya pencere tipi, en-boy ölçüsü, profil ve sistem seçimine göre değişir. Doğru fiyat için önce uygulama alanınızı ve net ölçüyü belirleyin.",
    intent: "ticari",
    primaryKeyword: "plise sineklik fiyatları",
    highlights: ["Kapı ve pencere ayrımı", "Ölçüye özel hesap", "Sipariş öncesi özet", "Türkiye geneli kargo"],
    sections: [
      { title: "Fiyatı etkileyen unsurlar", body: "Açıklığın genişliği ve yüksekliği, ürün tipi, profil rengi ve adet toplam fiyatı oluşturur." },
      { title: "Doğru teklif için ölçü", body: "Yaklaşık ölçü yerine montaj yapılacak açıklığın net ölçüsünü kullanın. Kararsız kaldığınızda ölçü asistanını tamamlayın." },
      { title: "Sipariş ve teslimat", body: "Onaylanan ölçü üretime alınır. Tahmini teslim süresi 7 iş günüdür ve kapıda ödeme seçeneği mevcuttur." },
    ],
    faqs: [
      { question: "Kapı ve pencere sineklik fiyatı aynı mı?", answer: "Hayır. Ölçü, sistem ve kullanım tipi değiştiği için fiyatlar farklı olabilir." },
      { question: "Sineklik fiyatını online görebilir miyim?", answer: "Ürün ve ölçü bilgilerini girdikten sonra sipariş akışında güncel fiyatı görebilirsiniz." },
    ],
    related: ["/plise-sineklik", "/plise-sineklik-olcu-alma", "/kapi-plise-sineklik"],
    primaryCta: { label: "Sineklik fiyatını gör", href: "/sineklik" },
    secondaryCta: { label: "Ölçü almaya başla", href: "/olcu-asistani" },
    schemaType: "FAQPage",
  },
  {
    path: "/plise-perde-olcu-alma",
    title: "Plise Perde Ölçüsü Nasıl Alınır? | Akıllı Rehber",
    description: "Cam balkon, PVC ve alüminyum pencere için plise perde ölçüsünü adım adım alın. Kanatları kaydedin ve ölçüyü fiyat hesabına aktarın.",
    h1: "Plise Perde Ölçüsü Nasıl Alınır?",
    eyebrow: "Hatalı ölçüyü önleyen adımlar",
    intro: "Ölçü alma noktası uygulama alanına ve montaj tipine göre değişir. RGNFIX ölçü asistanı önce bu seçimleri yaptırır, ardından her cam veya pencereyi ayrı ayrı kaydeder.",
    intent: "bilgilendirici",
    primaryKeyword: "plise perde ölçüsü nasıl alınır",
    highlights: ["Uygulama alanına özel akış", "En-boy sesli doğrulama", "Çoklu kanat kaydı", "Fiyat hesabına otomatik aktarım"],
    sections: [
      { title: "Ölçüden önce hazırlık", body: "Metal mezura kullanın, montaj yüzeyini temizleyin ve ölçü alınacak açıklığın önünde engel olmadığını kontrol edin." },
      { title: "En ve boy ölçümü", body: "Mezurayı düz tutarak net eni ve boyu santimetre cinsinden ölçün. Sonucu ikinci kez tekrarlayın." },
      { title: "Kanatları ayrı kaydedin", body: "Cam balkonlarda her kanadı ayrı ölçün; aynı göründükleri için tek ölçüyü tüm kanatlara uygulamayın." },
    ],
    steps: ["Uygulama alanını seçin", "Montaj ve kasa tipini belirleyin", "Her kanadın enini ve boyunu girin", "Değerleri sesli/ekran onayıyla doğrulayın", "Ölçüleri fiyat hesabına aktarın"],
    faqs: [
      { question: "Plise perde ölçüsü milimetre mi santimetre mi girilir?", answer: "RGNFIX ölçü ekranına değerler santimetre olarak girilir; ondalıklı değer kullanabilirsiniz." },
      { question: "Tüm camlar aynıysa tek ölçü yeterli mi?", answer: "Hayır. Üretim hatasını azaltmak için her kanadı ayrı ölçmeniz önerilir." },
      { question: "Ölçüyü daha sonra kullanabilir miyim?", answer: "Tamamlanan ölçüler aynı oturumda fiyat hesaplama ekranına aktarılır." },
    ],
    related: ["/cam-balkon-plise-perde", "/pvc-pencere-plise-perde", "/plise-perde-fiyatlari"],
    primaryCta: { label: "Akıllı ölçü asistanını aç", href: "/olcu-asistani" },
    secondaryCta: { label: "Görsel rehberi incele", href: "/gorsel-olcu-rehberi" },
    schemaType: "Article",
  },
  {
    path: "/plise-sineklik-olcu-alma",
    title: "Plise Sineklik Ölçüsü Nasıl Alınır? | RGNFIX",
    description: "Kapı ve pencere plise sineklik ölçüsünü doğru alın. Montaj boşluğu, en-boy kontrolü ve sipariş öncesi ölçü adımları.",
    h1: "Plise Sineklik Ölçüsü Nasıl Alınır?",
    eyebrow: "Kapı ve pencere için doğru ölçü",
    intro: "Sineklik ölçüsünde montaj yapılacak net açıklık ve çevredeki engeller birlikte kontrol edilir. Kapı ve pencere için aynı ölçüm varsayımını kullanmayın.",
    intent: "bilgilendirici",
    primaryKeyword: "plise sineklik ölçüsü nasıl alınır",
    highlights: ["Kapı/pencere ayrımı", "Montaj boşluğu kontrolü", "Çok noktadan ölçüm", "Sipariş öncesi teyit"],
    sections: [
      { title: "Montaj alanını inceleyin", body: "Kulp, eşik, süpürgelik, panjur ve açılım yönü gibi engelleri not edin." },
      { title: "En ve boyu tekrarlayın", body: "Açıklığın enini ve boyunu en az iki farklı noktadan ölçün. Eğrilik veya fark varsa destek alın." },
      { title: "Ürün tipini doğru seçin", body: "Kapı ve pencere sistemleri kullanım sıklığı ve ölçü aralığı bakımından farklıdır." },
    ],
    steps: ["Kapı veya pencere tipini seçin", "Montaj yüzeyini kontrol edin", "Net eni iki noktadan ölçün", "Net boyu iki noktadan ölçün", "Ölçü ve açılım yönünü siparişte teyit edin"],
    faqs: [
      { question: "Sineklik ölçüsünde kasa payı eklemeli miyim?", answer: "Kendiniz ek pay uygulamayın; ürün akışında istenen net ölçüyü ve montaj tipini takip edin." },
      { question: "Eğri doğramada ne yapmalıyım?", answer: "Ölçüler arasında belirgin fark varsa sipariş vermeden önce fotoğraflı destek alın." },
    ],
    related: ["/pencere-plise-sineklik", "/kapi-plise-sineklik", "/plise-sineklik-montaji"],
    primaryCta: { label: "Ölçü asistanını aç", href: "/olcu-asistani" },
    secondaryCta: { label: "Fotoğraflı destek al", href: "/olcu-fotografi" },
    schemaType: "Article",
  },
  {
    path: "/plise-perde-montaji",
    title: "Plise Perde Montajı Nasıl Yapılır? | RGNFIX",
    description: "Yapıştırma, vidalama ve uygun montaj seçenekleri için plise perde kurulum adımları. Demonte ürün montaj rehberi ve destek.",
    h1: "Plise Perde Montajı",
    eyebrow: "Demonte ürünü güvenle kurun",
    intro: "Kurulum adımları seçilen montaj tipine ve doğrama yapısına göre değişir. Siparişinizdeki montaj tipini kontrol ederek ilgili rehberi izleyin.",
    intent: "bilgilendirici",
    primaryKeyword: "plise perde montajı",
    highlights: ["Montaj tipine özel anlatım", "Gerekli araç listesi", "Görsel adımlar", "Destek bağlantısı"],
    sections: [
      { title: "Kurulumdan önce", body: "Paket içeriğini, profil yönünü ve montaj parçalarını kontrol edin. Yüzeyin temiz, kuru ve düz olduğundan emin olun." },
      { title: "Hizalama", body: "Profili sabitlemeden önce üst-alt ve sağ-sol boşluklarını kontrol edin. Mekanizmayı zorlamadan deneme açılışı yapın." },
      { title: "Son kontrol", body: "Perdeyi birkaç kez açıp kapatın; ip gerginliğinde veya profilde sürtme varsa destek ekibine başvurun." },
    ],
    steps: ["Sipariş montaj tipini kontrol edin", "Yüzeyi hazırlayın", "Profilleri ölçüye göre hizalayın", "Bağlantıları sabitleyin", "Açma-kapama testini yapın"],
    faqs: [
      { question: "Plise perde montajı için usta gerekir mi?", answer: "Uygun yüzey ve montaj tipinde rehberi izleyerek kurulum yapılabilir; emin olmadığınız durumda destek alın." },
      { question: "Yapıştırma montajında yüzey nasıl olmalı?", answer: "Yüzey temiz, kuru, yağsız ve mümkün olduğunca düz olmalıdır." },
    ],
    related: ["/plise-perde-olcu-alma", "/plise-perde", "/destek"],
    primaryCta: { label: "Montaj rehberini aç", href: "/montaj-rehberi" },
    secondaryCta: { label: "Destek al", href: "/destek" },
    schemaType: "Article",
  },
  {
    path: "/plise-sineklik-montaji",
    title: "Plise Sineklik Montajı | Kapı ve Pencere Rehberi",
    description: "Kapı ve pencere plise sineklik montajını adım adım inceleyin. Profil hizalama, tül kontrolü ve kurulum desteği.",
    h1: "Plise Sineklik Montaj Rehberi",
    eyebrow: "Kapı ve pencereye göre kurulum",
    intro: "Plise sineklikte doğru profil sırası, düz hizalama ve tül hareketinin kontrolü uzun süreli kullanım için önemlidir.",
    intent: "bilgilendirici",
    primaryKeyword: "plise sineklik montajı",
    highlights: ["Kapı ve pencere adımları", "Profil yönü kontrolü", "Tül hareket testi", "Kurulum desteği"],
    sections: [
      { title: "Paket ve yön kontrolü", body: "Profilleri zemine yerleştirip ürün yönünü sipariş bilgisiyle karşılaştırın; parçaları sabitlemeden önce prova yapın." },
      { title: "Düz montaj", body: "Alt ve üst profillerin paralel olması tülün dengeli hareket etmesini sağlar. Sabitleme öncesi teraziyle kontrol edin." },
      { title: "Kullanım testi", body: "Sinekliği yavaşça açıp kapatın. Takılma veya aşırı gerginlik varsa zorlamadan destek alın." },
    ],
    steps: ["Parçaları ve yönü kontrol edin", "Montaj yüzeyini temizleyin", "Profilleri paralel hizalayın", "Bağlantıları sabitleyin", "Tül hareketini test edin"],
    faqs: [
      { question: "Plise sineklik neden zor açılır?", answer: "Profil hizası, yüzey eğriliği veya tül gerginliği etkili olabilir. Ürünü zorlamadan montajı yeniden kontrol edin." },
      { question: "Montaj desteği alabilir miyim?", answer: "Destek sayfasından sipariş ve fotoğraf bilgisiyle yardım talep edebilirsiniz." },
    ],
    related: ["/plise-sineklik-olcu-alma", "/plise-sineklik", "/destek"],
    primaryCta: { label: "Montaj rehberini aç", href: "/montaj-rehberi" },
    secondaryCta: { label: "Destek al", href: "/destek" },
    schemaType: "Article",
  },
  {
    path: "/renk-secimi",
    title: "Plise Perde Renk Seçimi | Kumaş ve Profil Rehberi",
    description: "Duvar, zemin, mobilya ve doğrama renginize uygun plise perde kumaşı ve profil rengini seçin. Renk danışmanı ve örnekler.",
    h1: "Plise Perde Renk Seçimi",
    eyebrow: "Mekâna uyumlu kumaş ve profil",
    intro: "Renk seçiminde yalnızca kumaş tonu değil, gün ışığı, doğrama rengi, duvar ve zemin bütünlüğü de değerlendirilmelidir.",
    intent: "karsilastirma",
    primaryKeyword: "plise perde renkleri",
    highlights: ["Duvar ve zemin uyumu", "Profil rengi seçimi", "Işık etkisi", "Dijital renk danışmanı"],
    sections: [
      { title: "Açık renkler", body: "Beyaz, krem ve açık gri tonlar ışığı daha yumuşak dağıtır ve küçük alanlarda ferah bir görünüm oluşturabilir." },
      { title: "Koyu renkler", body: "Antrasit, koyu gri ve kahve tonları güçlü kontrast sağlar; doğrama ve mobilya rengiyle birlikte değerlendirilmelidir." },
      { title: "Ekran ve gerçek renk farkı", body: "Ekran ayarları renk algısını değiştirebilir. Siparişten önce seri kodunu ve varyant adını kontrol edin." },
    ],
    faqs: [
      { question: "Beyaz doğramaya hangi profil rengi gider?", answer: "Beyaz profil bütünlük sağlar; kontrast isteniyorsa mekândaki diğer koyu detaylarla uyumlu antrasit değerlendirilebilir." },
      { question: "Güneş alan odada renk değişir mi?", answer: "Yoğun gün ışığı kumaş renginin daha açık algılanmasına neden olabilir; ışık kontrol ihtiyacını da hesaba katın." },
    ],
    related: ["/kumas-karsilastirma", "/plise-perde", "/plise-perde-fiyatlari"],
    primaryCta: { label: "Renk danışmanını aç", href: "/renk-danismani" },
    secondaryCta: { label: "Kumaşları karşılaştır", href: "/kumas-karsilastirma" },
    schemaType: "Article",
  },
  {
    path: "/sikca-sorulan-sorular",
    title: "Plise Perde ve Sineklik Sıkça Sorulan Sorular",
    description: "Ölçü, fiyat, kumaş, sipariş, teslimat, kapıda ödeme, plise perde ve sineklik montajı hakkında sık sorulan sorular.",
    h1: "Sıkça Sorulan Sorular",
    eyebrow: "Siparişten önce bilmeniz gerekenler",
    intro: "Ölçüye özel plise perde ve plise sineklik siparişinde en çok sorulan ölçü, fiyat, üretim, kargo ve montaj sorularını bir araya getirdik.",
    intent: "bilgilendirici",
    primaryKeyword: "plise perde sıkça sorulan sorular",
    highlights: ["Ölçü ve üretim", "Fiyat ve ödeme", "Teslimat", "Montaj ve destek"],
    sections: [
      { title: "Ölçü ve sipariş", body: "Ölçüyü uygulama alanına özel rehberle alın ve üretim öncesinde her parçayı ayrı doğrulayın." },
      { title: "Teslimat ve ödeme", body: "Tahmini teslim süresi 7 iş günüdür. Kapıda ödeme seçeneği mevcuttur; 3.000 TL üzeri siparişlerde kargo ücretsizdir." },
      { title: "Destek", body: "Ölçü, ürün seçimi veya montaj konusunda telefon, WhatsApp ve destek sayfasından yardım alabilirsiniz." },
    ],
    faqs: [
      { question: "Siparişim kaç günde teslim edilir?", answer: "Ölçüye özel üretim için tahmini teslim süresi 7 iş günüdür." },
      { question: "Kapıda ödeme var mı?", answer: "Evet. Sipariş akışında kapıda ödeme seçeneği sunulur." },
      { question: "Kargo ücretsiz mi?", answer: "3.000 TL ve üzerindeki siparişlerde kargo ücretsizdir." },
      { question: "Ölçü konusunda yardım alabilir miyim?", answer: "Akıllı ölçü asistanını kullanabilir veya fotoğraflı destek talebi oluşturabilirsiniz." },
      { question: "Ürünler montajlı mı gelir?", answer: "Ürünler demonte gönderilir; uygun ürünlerde kurulum rehberi ve destek sunulur." },
    ],
    related: ["/plise-perde-olcu-alma", "/plise-sineklik-olcu-alma", "/destek"],
    primaryCta: { label: "Ölçü asistanını aç", href: "/olcu-asistani" },
    secondaryCta: { label: "Destek al", href: "/destek" },
    schemaType: "FAQPage",
  },
  {
    path: "/blog",
    title: "Plise Perde ve Sineklik Rehberleri | RGNFIX Blog",
    description: "Plise perde ve sineklik ölçüsü, fiyatı, kumaş seçimi, montajı ve bakımı hakkında satın alma odaklı uzman rehberleri.",
    h1: "Plise Perde ve Sineklik Rehberleri",
    eyebrow: "Doğru ürün için doğru bilgi",
    intro: "Ölçü almadan siparişe ve montajdan bakıma kadar ihtiyaç duyacağınız pratik rehberleri tek merkezde toplayın.",
    intent: "bilgilendirici",
    primaryKeyword: "plise perde rehberi",
    highlights: ["Ölçü rehberleri", "Fiyat açıklamaları", "Kumaş ve renk karşılaştırmaları", "Montaj adımları"],
    sections: [
      { title: "Ölçü alma rehberleri", body: "Cam balkon, PVC pencere, kapı ve sineklik için ölçü noktalarını uygulama alanına göre öğrenin." },
      { title: "Ürün karşılaştırmaları", body: "Kumaş serilerini, plise perde ve sineklik kullanım alanlarını ihtiyacınıza göre karşılaştırın." },
      { title: "Kurulum ve kullanım", body: "Demonte ürünlerin montajını, bakımını ve sık karşılaşılan sorunların kontrollerini inceleyin." },
    ],
    faqs: [
      { question: "Hangi rehberden başlamalıyım?", answer: "Önce ürün türünü seçin, ardından ilgili ölçü alma rehberini tamamlayın." },
      { question: "Rehberden doğrudan siparişe geçebilir miyim?", answer: "Evet. Rehberlerde ölçü, fiyat ve sipariş ekranlarına yönlendiren bağlantılar bulunur." },
    ],
    related: ["/plise-perde-olcu-alma", "/plise-sineklik-olcu-alma", "/renk-secimi"],
    primaryCta: { label: "Plise perde rehberleri", href: "/plise-perde-olcu-alma" },
    secondaryCta: { label: "Sineklik rehberleri", href: "/plise-sineklik-olcu-alma" },
    schemaType: "CollectionPage",
  },
];

export const SEO_META: Record<string, { title: string; description: string; noindex?: boolean }> = {
  "/": {
    title: "Ölçüye Özel Plise Perde ve Sineklik | RGNFIX",
    description: "Cam balkon, PVC pencere ve kapılar için ölçüye özel plise perde ve plise sineklik. Ölçünüzü girin, fiyatı anında görün; Türkiye geneli sipariş verin.",
  },
  "/olcu-asistani": {
    title: "Online Ölçü Alma Rehberi ve Ön Keşif | RGNFIX",
    description: "Cam balkon, PVC pencere-kapı ve alüminyum sistemler için görsel ölçü rehberi. Yaklaşık ölçülerinizi mm olarak kaydedin, ön keşif özeti oluşturun.",
  },
  "/gorsel-olcu-rehberi": {
    title: "Görsel Plise Perde Ölçü Rehberi | RGNFIX",
    description: "Pencere, kapı ve cam balkon için doğru ölçü noktalarını görsellerle inceleyin.",
  },
  "/fiyat-hesapla": {
    title: "Plise Perde Fiyat Hesaplama | RGNFIX",
    description: "Ölçü, kumaş, kasa ve montaj seçiminize göre plise perde fiyatını anında hesaplayın.",
  },
  "/kumas-karsilastirma": {
    title: "Plise Perde Kumaş Karşılaştırma | RGNFIX",
    description: "Nova, Neo Fashion, Nano Clean, Nano Insulation ve Nano Pro kumaşlarını özellik ve fiyatlarına göre karşılaştırın.",
  },
  "/sineklik": {
    title: "Plise Sineklik Siparişi | Kapı ve Pencere",
    description: "Kapı ve pencere için ölçüye özel plise sineklik seçin; ölçü, renk ve ürün bilgilerinizi girerek sipariş verin.",
  },
  "/renk-danismani": {
    title: "Plise Perde Renk Danışmanı | RGNFIX",
    description: "Duvar, zemin, mobilya ve doğrama renginize uygun plise perde kumaş ve profil seçeneklerini bulun.",
  },
  "/montaj-rehberi": {
    title: "Plise Perde ve Sineklik Montaj Rehberi | RGNFIX",
    description: "Demonte plise perde ve plise sineklik için uygulama tipine özel kurulum adımlarını inceleyin.",
  },
  "/siparis": {
    title: "Online Plise Perde ve Sineklik Siparişi | RGNFIX",
    description: "Ölçünüzü, kumaşı ve montaj tipini seçerek ölçüye özel ürün siparişinizi güvenle oluşturun.",
  },
  "/siparis-sorgula": {
    title: "Sipariş Sorgulama | RGNFIX",
    description: "RGNFIX sipariş numaranızla üretim ve teslimat durumunu sorgulayın.",
  },
  "/destek": {
    title: "Ölçü, Sipariş ve Montaj Desteği | RGNFIX",
    description: "Plise perde ve sineklik ölçüsü, siparişi veya montajı için RGNFIX destek ekibine ulaşın.",
  },
  "/gizlilik-politikasi": {
    title: "Gizlilik Politikası | RGNFIX",
    description: "RGNFIX web sitesi ve sipariş süreçlerinde kişisel verilerin işlenmesine ilişkin gizlilik politikasını inceleyin.",
  },
  "/kullanim-kosullari": {
    title: "Kullanım Koşulları | RGNFIX",
    description: "RGNFIX ölçü, fiyat ve online sipariş platformunun kullanım koşullarını inceleyin.",
  },
  "/kvkk-aydinlatma": {
    title: "KVKK Aydınlatma Metni | RGNFIX",
    description: "RGNFIX kişisel verilerin korunması ve işlenmesine ilişkin KVKK aydınlatma metni.",
  },
  "/on-bilgilendirme": {
    title: "Sipariş Ön Bilgilendirme Formu | RGNFIX",
    description: "Ölçüye özel plise perde ve sineklik siparişi öncesinde satıcı, teslimat, ödeme ve cayma bilgilerini inceleyin.",
  },
  "/mesafeli-satis-sozlesmesi": {
    title: "Mesafeli Satış Sözleşmesi | RGNFIX",
    description: "RGNFIX ölçüye özel ürün siparişlerinde geçerli mesafeli satış sözleşmesini inceleyin.",
  },
  "/giris": { title: "Hesabınıza Giriş Yapın | RGNFIX", description: "RGNFIX müşteri hesabınıza giriş yapın.", noindex: true },
  "/hesabim": { title: "Müşteri Paneli | RGNFIX", description: "Siparişlerinizi ve hesap bilgilerinizi yönetin.", noindex: true },
  "/hesap-ayarlari": { title: "Hesap Ayarları | RGNFIX", description: "RGNFIX hesap ayarlarınızı yönetin.", noindex: true },
  "/yonetici": { title: "Yönetim Paneli | RGNFIX", description: "RGNFIX yönetim paneli.", noindex: true },
};

for (const page of SEO_PAGES) {
  SEO_META[page.path] = { title: page.title, description: page.description };
}

export function normalizeSeoPath(pathname: string) {
  const path = pathname.split("?")[0].split("#")[0] || "/";
  if (path === "/") return path;
  return path.replace(/\/+$/, "");
}

export function findSeoPage(pathname: string) {
  const normalized = normalizeSeoPath(pathname);
  return SEO_PAGES.find(page => page.path === normalized);
}

export function getSeoMeta(pathname: string) {
  const normalized = normalizeSeoPath(pathname);
  return SEO_META[normalized] ?? SEO_META["/"];
}
