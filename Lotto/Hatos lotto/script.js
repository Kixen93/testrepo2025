document.getElementById("szamform").addEventListener("submit", function (e) {
    e.preventDefault(); //ne töltse újra az oldalt

    var szam = document.getElementById("szam").value;
    var min = 1;
    var max = 45;
    var rndszam;
    console.log(szam);
    let osszes = [];
    const eredmenyDiv = document.getElementById("eredmenyek");
    eredmenyDiv.innerHTML = ""; // töröljük az előző eredményeket


    for (let i = 0; i < szam; i++) {
        let egyjatek = [];
        while (egyjatek.length < 6) {
            rndszam = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!egyjatek.includes(rndszam)) {
                egyjatek.push(rndszam);
            }

        }
        egyjatek.sort((a, b) => a - b);
        osszes[i] = egyjatek;

        const sor = document.createElement("div");
        sor.classList.add("jatek");
        egyjatek.forEach(szam => {
            const gomb = document.createElement("span");
            gomb.classList.add("szamgomb");
            gomb.textContent = szam;
            sor.appendChild(gomb);
        });
        eredmenyDiv.appendChild(sor);
    }
    console.log(osszes);
    
});

