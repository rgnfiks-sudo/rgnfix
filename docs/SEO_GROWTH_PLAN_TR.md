# RGNFIX SEO ve Dönüşüm Büyüme Planı

## 1. Yönetici özeti

RGNFIX’in öncelikli organik büyüme alanı; marka aramalarından önce “ölçüye özel plise perde”, “plise perde fiyatları”, “cam balkon plise perde”, “plise sineklik fiyatları” ve ölçü alma sorgularıdır. Site mimarisi, her sayfanın tek bir arama niyetine hizmet edeceği biçimde düzenlenmiştir. Şehir adı değiştirilmiş kopya sayfalar yerine Türkiye geneli teslimat, ölçü doğrulama ve kolay kurulum avantajı öne çıkarılmıştır.

## 2. Doğrulanan kritik problemler ve uygulanan çözümler

| Öncelik | Sorun | SEO etkisi | Uygulanan çözüm | Kabul kriteri |
|---|---|---|---|---|
| Kritik | `/robots.txt` HTML döndürüyordu | Tarama direktifleri okunamıyordu | Gerçek `text/plain` robots yanıtı eklendi | HTTP 200 ve `text/plain` |
| Kritik | `/sitemap.xml` HTML döndürüyordu | URL keşfi ve dizine ekleme zayıftı | 30 ticari/rehber URL içeren XML sitemap eklendi | HTTP 200 ve `application/xml` |
| Kritik | Her bilinmeyen URL 200 dönüyordu | Soft-404 ve tarama bütçesi sorunu | Sunucu tarafında gerçek 404 yanıtı eklendi | Bilinmeyen URL HTTP 404 |
| Kritik | İlk HTML’de ürün içeriği yoktu | JS çalışmadan ürün niyeti görünmüyordu | Rota bazlı taranabilir ilk HTML üretildi | İlk yanıtta H1, açıklama ve iç bağlantılar |
| Yüksek | Başlık ve açıklama geneldi | Ticari sorgularla zayıf eşleşme | Ana sayfa ve tüm ticari rotalar için benzersiz title/meta | Sitemap URL’lerinde benzersiz title |
| Yüksek | Canonical ve sosyal etiketler yoktu | Yinelenen URL ve paylaşım kalitesi sorunu | Canonical, OG ve Twitter etiketleri eklendi | Her indekslenebilir sayfada canonical |
| Yüksek | www ve kök alan adı ayrı 200 dönüyordu | Yinelenen sayfa sinyali | `www.rgnfix.com` → `rgnfix.com` 301 | Tüm www URL’leri 301 |
| Yüksek | Üretim HTML’si geliştirme çalışma zamanı içeriyordu | HTML boyutu ve yükleme maliyeti yüksekti | Manus/JSX geliştirme eklentileri üretimden çıkarıldı | Ham index yaklaşık 2 KB |
| Orta | Ana paket 500 KB üzerindeydi | İlk etkileşim gecikebilirdi | React, veri, UI ve rota paketleri bölündü | Uygulama giriş paketi yaklaşık 90 KB |
| Orta | Yasal sayfalar ana sayfa başlığını kullanıyordu | Başlık çakışması | Her yasal sayfaya benzersiz title/meta | Yinelenen title yok |

## 3. İlk 30 günlük acil işler

| Öncelik | Görev | Beklenen etki | Zorluk | Sorumlu | Kabul kriteri |
|---|---|---|---|---|---|
| Kritik | Sitemap’i Google Search Console’a gönder | URL keşfi | Düşük | SEO | Sitemap “Başarılı” |
| Kritik | GA4 ölçüm kimliğini `VITE_GA_MEASUREMENT_ID` olarak ekle | Dönüşüm ölçümü | Düşük | Yazılımcı | Gerçek zamanlı olaylar görünür |
| Yüksek | Search Console alan adı doğrulaması | Sorgu/sıralama takibi | Düşük | SEO | Alan adı mülkü doğrulandı |
| Yüksek | Gerçek ürün fotoğraflarını ürün sayfalarına ekle | Güven ve dönüşüm | Orta | Tasarım/İçerik | Her ürün tipinde en az 4 gerçek fotoğraf |
| Yüksek | Ölçü asistanı tamamlama hunisini raporla | Ölçü kaybını azaltma | Orta | Yazılımcı/SEO | Başlatma→tamamlama oranı görünür |
| Orta | Merchant Center hesap ve feed hazırlığı | Ücretsiz ürün listelemeleri | Orta | SEO/Yazılımcı | Fiyat, stok, kargo ve iade bilgileri eşleşir |

## 4. 31–90 günlük büyüme planı

1. Search Console sorgularını ticari, fiyat, ölçü ve montaj kümelerine ayır.
2. Gösterim alan ancak tıklama oranı düşük sayfalarda title/meta testleri yap.
3. Gerçek müşteri sorularından yeni SSS maddeleri üret; sahte yorum veya puan ekleme.
4. Ölçü asistanında en çok terk edilen adımı GA4 hunisinden belirleyip sadeleştir.
5. Ürün fotoğrafı, paket içeriği ve kurulum videosu alanlarını ürün sayfalarında genişlet.
6. Product/Offer verisini yalnızca ekranda gösterilen, güncel fiyat ve stok bilgisi feed ile senkron olduğunda etkinleştir.

## 5. Altı aylık içerik takvimi

| Ay | İçerik | Hedef kelime | Niyet | Bağlantı/CTA |
|---|---|---|---|---|
| 1 | Plise perde ölçüsü nasıl alınır? | plise perde ölçüsü nasıl alınır | Rehber | `/olcu-asistani` |
| 1 | Plise perde fiyatları neye göre değişir? | plise perde fiyatları | Ticari | `/fiyat-hesapla` |
| 1 | Cam balkon için plise perde seçimi | cam balkon plise perde | Ticari | `/cam-balkon-plise-perde` |
| 1 | Yanlış ölçüyü önleyen kontrol listesi | plise perde ölçü hataları | Sorun/çözüm | `/plise-perde-olcu-alma` |
| 2 | Plise sineklik ölçüsü nasıl alınır? | plise sineklik ölçüsü | Rehber | `/plise-sineklik-olcu-alma` |
| 2 | Kapı ve pencere sinekliği farkları | kapı pencere sineklik farkı | Karşılaştırma | `/plise-sineklik` |
| 2 | Kapı plise sineklik seçimi | kapı plise sineklik | Ticari | `/kapi-plise-sineklik` |
| 2 | Sineklik fiyatını etkileyen unsurlar | plise sineklik fiyatları | Ticari | `/plise-sineklik-fiyatlari` |
| 3 | Plise perde kumaşları arasındaki farklar | plise perde kumaşları | Karşılaştırma | `/kumas-karsilastirma` |
| 3 | Güneş alan odada perde seçimi | güneş geçirmeyen plise perde | Ticari | `/kumas-karsilastirma` |
| 3 | Plise perde renk seçimi | plise perde renkleri | Karşılaştırma | `/renk-secimi` |
| 3 | Beyaz ve antrasit profil karşılaştırması | plise perde profil rengi | Karşılaştırma | `/renk-danismani` |
| 4 | Plise perde montajı | plise perde montajı | Rehber | `/montaj-rehberi` |
| 4 | Plise sineklik montajı | plise sineklik montajı | Rehber | `/montaj-rehberi` |
| 4 | Yapıştırma mı vidalama mı? | plise perde montaj tipi | Karşılaştırma | `/plise-perde-montaji` |
| 4 | Demonte ürün paketinden ne çıkar? | plise perde paket içeriği | Güven | `/siparis` |
| 5 | Plise perde temizliği | plise perde temizliği | Rehber | `/plise-perde` |
| 5 | Plise sineklik tülü nasıl temizlenir? | sineklik temizliği | Rehber | `/plise-sineklik` |
| 5 | Perde zor açılıyorsa kontroller | plise perde zor açılıyor | Sorun/çözüm | `/destek` |
| 5 | Sineklik zor açılıyorsa kontroller | plise sineklik zor açılıyor | Sorun/çözüm | `/destek` |
| 6 | Plise perde mi stor perde mi? | plise perde mi stor perde mi | Karşılaştırma | `/plise-perde` |
| 6 | Plise mi sürgülü sineklik mi? | plise mi sürgülü sineklik mi | Karşılaştırma | `/plise-sineklik` |
| 6 | PVC pencere için montaj seçimi | pvc pencere plise perde | Ticari | `/pvc-pencere-plise-perde` |
| 6 | Türkiye geneli ölçüye özel sipariş rehberi | online plise perde siparişi | Ticari | `/siparis` |

## 6. Anahtar kelime–sayfa eşleştirmesi

| Küme | Birincil kelime | Hedef sayfa | Ticari değer | Rekabet | Öncelik |
|---|---|---|---|---|---|
| Ürün | plise perde | `/plise-perde` | Çok yüksek | Yüksek | 1 |
| Fiyat | plise perde fiyatları | `/plise-perde-fiyatlari` | Çok yüksek | Yüksek | 1 |
| Ölçüye özel | ölçüye özel plise perde | `/olcuye-ozel-plise-perde` | Çok yüksek | Orta | 1 |
| Cam balkon | cam balkon plise perde | `/cam-balkon-plise-perde` | Çok yüksek | Orta | 1 |
| PVC | PVC pencere plise perde | `/pvc-pencere-plise-perde` | Yüksek | Orta | 2 |
| Ürün | plise sineklik | `/plise-sineklik` | Çok yüksek | Yüksek | 1 |
| Kapı | kapı plise sineklik | `/kapi-plise-sineklik` | Çok yüksek | Orta | 1 |
| Pencere | pencere plise sineklik | `/pencere-plise-sineklik` | Yüksek | Orta | 2 |
| Fiyat | plise sineklik fiyatları | `/plise-sineklik-fiyatlari` | Çok yüksek | Yüksek | 1 |
| Ölçü | plise perde ölçüsü nasıl alınır | `/plise-perde-olcu-alma` | Yüksek | Orta | 1 |
| Ölçü | plise sineklik ölçüsü nasıl alınır | `/plise-sineklik-olcu-alma` | Yüksek | Orta | 1 |
| Montaj | plise perde montajı | `/plise-perde-montaji` | Orta | Orta | 2 |
| Montaj | plise sineklik montajı | `/plise-sineklik-montaji` | Orta | Orta | 2 |
| Karşılaştırma | plise perde kumaşları | `/kumas-karsilastirma` | Yüksek | Orta | 2 |
| Renk | plise perde renkleri | `/renk-secimi` | Orta | Düşük | 3 |

## 7. Yapısal veri kapsamı

- Tüm indekslenebilir sayfalarda `Organization`, `WebSite` ve canonical.
- Ticari sayfalarda `ProductGroup`; fiyat veya stok uydurulmaz.
- Rehber sayfalarında `Article`.
- Kullanıcıya gösterilen sorulardan `FAQPage`.
- Alt sayfalarda `BreadcrumbList`.
- Gerçek ürün fiyatı ve stok senkronizasyonu tamamlandığında `Product`, `Offer`, `OfferShippingDetails` ve `MerchantReturnPolicy` eklenmeli.

## 8. Ölçüm ve raporlama planı

Kodda hazır olaylar:

- `measurement_start`
- `olcu_asistani_tamamlama`
- `fiyat_hesaplama`
- `begin_checkout`
- `whatsapp_click`
- `phone_click`

Eklenmesi gereken e-ticaret olayları:

- `view_item`, `select_item`, `add_to_cart`, `purchase`
- `montaj_videosu_izleme`
- `siparis_sorgulama`

Aylık KPI’lar:

- Organik tıklama, gösterim ve ortalama sıralama
- Marka dışı sorgulardan trafik
- Organik dönüşüm ve organik gelir
- Ürün sayfası dönüşüm oranı
- Ölçü asistanı başlatma/tamamlama oranı
- Fiyat hesaplama→sipariş oranı
- WhatsApp ve telefon tıklamaları
- İndekslenen sayfa sayısı
- Core Web Vitals “İyi” URL oranı
