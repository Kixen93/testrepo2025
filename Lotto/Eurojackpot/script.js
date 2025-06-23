document.getElementById("szamform").addEventListener("submit", function (e) {
    e.preventDefault(); //ne töltse újra az oldalt

    var szam = document.getElementById("szam").value;
    var minnagy = 1;
    var maxnagy = 50;
    var minkis = 1;
    var maxkis = 12;
    var rndszam;
    var kisrandom;
    console.log(szam);
    let osszesnagy = [];
    let osszeskis = [];
    const eredmenyDiv = document.getElementById("eredmenyek");
    eredmenyDiv.innerHTML = ""; // töröljük az előző eredményeket


    for (let i = 0; i < szam; i++) {
        let egyjateknagy = [];
        let egyjatekkicsi = [];
        while (egyjateknagy.length < 5) {
            rndszam = Math.floor(Math.random() * (maxnagy - minnagy + 1)) + minnagy;
            if (!egyjateknagy.includes(rndszam)) {
                egyjateknagy.push(rndszam);
            }

        }
        while (egyjatekkicsi.length < 2) {
            kisrandom = Math.floor(Math.random() * (maxkis - minkis + 1)) + minkis;
            if (!egyjatekkicsi.includes(kisrandom)) {
                egyjatekkicsi.push(kisrandom);
            }

        }
        egyjateknagy.sort((a, b) => a - b);
        egyjatekkicsi.sort((a, b) => a - b);

        osszesnagy[i] = egyjateknagy;
        osszeskis[i] = egyjatekkicsi;

        const sor = document.createElement("div");
    sor.classList.add("jatek");

    // nagy számok
    egyjateknagy.forEach(szam => {
        const gomb = document.createElement("span");
        gomb.classList.add("szamgomb");
        gomb.textContent = szam;
        sor.appendChild(gomb);
    });

    // térköz: üres elem vagy egy kis elválasztó
    const koz = document.createElement("span");
    koz.style.display = "inline-block";
    koz.style.width = "30px";
    sor.appendChild(koz);

    // kis számok
    egyjatekkicsi.forEach(szam => {
        const gomb = document.createElement("span");
        gomb.classList.add("szamgomb", "kis");
        gomb.textContent = szam;
        sor.appendChild(gomb);
    });

    eredmenyDiv.appendChild(sor);
}
    console.log(osszesnagy);
    
});

