
const arama = document.getElementById("arama");
const kartlar = document.querySelectorAll(".kart");
const sonuc = document.getElementById("sonuc");

arama.addEventListener("input", function() {

    let aranan = arama.value.trim().toLocaleLowerCase("tr-TR");
    let bulunan = 0;

    kartlar.forEach(function(kart) {

        let metin = kart.textContent.toLocaleLowerCase("tr-TR");

        if (metin.includes(aranan)) {

            kart.style.display = "block";
            bulunan++;

        } else {

            kart.style.display = "none";

        }

    });

    if (bulunan === 0) {

        sonuc.textContent = "Aradığınız yer bulunamadı.";

    } else {

        sonuc.textContent = bulunan + " sonuç bulundu.";

    }

});
