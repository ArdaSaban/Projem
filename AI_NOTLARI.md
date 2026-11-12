
# AI NOTLARI

### Prompt 1
"İçerik sayfasına bir arama kutusu ekle. Kullanıcı şehir ismi yazdığında ilgili kartlar gösterilsin, diğerleri gizlensin."

**Amacı:**
JavaScript kullanarak kartlar arasında arama ve filtreleme özelliği oluşturmak.

## 1. Kabul Ettiğim veya Değiştirdiğim Öneri

Yapay zekânın önerdiği kart tasarımında fotoğrafların farklı yüksekliklerde görünmesi sorun oluşturdu.

Bu öneriyi olduğu gibi bırakmak yerine CSS kodlarını değiştirdim.

Özellikle `object-fit: cover` özelliğini kullanarak fotoğrafların belirlenen alana düzgün şekilde yerleşmesini sağladım.

Ayrıca `display: grid` ve `grid-template-columns: repeat(3, 1fr)` özellikleriyle bilgisayarda kartların üçlü şekilde yan yana görünmesini sağladım.

Bu değişikliği kabul etmemin nedeni sitenin daha düzenli ve kullanışlı görünmesini istememdir.

---

## 3. Event Listener Ne İşe Yarar?

JavaScript içerisinde event listener, kullanıcıların yaptığı işlemleri takip etmek için kullanılır.

Projemde şu kod bulunmaktadır:

```javascript
arama.addEventListener("input", function() {
    // Arama işlemleri
});
```

Burada `input` olayı, kullanıcı arama kutusuna yazı yazdığında veya yazıyı sildiğinde çalışır.

Böylece kullanıcı her harf girdiğinde arama işlemi yeniden gerçekleştirilir.

---

## 4. Filtreleme Koşulu Ne İşe Yarar?

Projemde şu filtreleme koşulu bulunmaktadır:

```javascript
if (metin.includes(aranan)) {
    kart.style.display = "block";
} else {
    kart.style.display = "none";
}
```

Bu koşul, kartın içerisindeki metnin kullanıcının aradığı kelimeyi içerip içermediğini kontrol eder.

Eğer içeriyorsa kart ekranda gösterilir.

Eğer içermiyorsa kart gizlenir.

Örneğin kullanıcı arama kutusuna "İstanbul" yazarsa İstanbul kartı gösterilir, diğer şehir kartları gizlenir.

---

## 5. Sonuç

Bu proje sırasında HTML ile sayfaların yapısını, CSS ile tasarımını ve JavaScript ile arama ve filtreleme işlemlerini öğrendim.

Yapay zekâ önerilerinden yararlanarak projemi geliştirdim. Ancak gelen önerileri doğrudan kullanmak yerine ihtiyaçlarıma göre bazı CSS ve JavaScript kodlarını değiştirdim.
