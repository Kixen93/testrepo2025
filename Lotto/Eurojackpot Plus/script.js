document.getElementById("szamform").addEventListener("submit", function (e) {
  e.preventDefault();

  const szam = parseInt(document.getElementById("szam").value);
  const eredmenyDiv = document.getElementById("eredmenyek");
  eredmenyDiv.innerHTML = "";

  const minnagy = 1;
  const maxnagy = 50;
  const minkis = 1;
  const maxkis = 12;

  for (let i = 0; i < szam; i++) {
    const egyjateknagy = [];
    const egyjatekkicsi = [];

    while (egyjateknagy.length < 5) {
      const rnd = Math.floor(Math.random() * (maxnagy - minnagy + 1)) + minnagy;
      if (!egyjateknagy.includes(rnd)) egyjateknagy.push(rnd);
    }

    while (egyjatekkicsi.length < 2) {
      const rnd = Math.floor(Math.random() * (maxkis - minkis + 1)) + minkis;
      if (!egyjatekkicsi.includes(rnd)) egyjatekkicsi.push(rnd);
    }

    egyjateknagy.sort((a, b) => a - b);
    egyjatekkicsi.sort((a, b) => a - b);

    // 🕰️ Időzítés minden játék indítására
    const jatekDelay = i * (7 * 500 + 1000); // 7 gömb x 500ms + 1000ms extra a címre

    setTimeout(() => {
      // 📣 Cím: "n. Játék"
      const felirat = document.createElement("div");
      felirat.classList.add("jatek-cim");
      eredmenyDiv.appendChild(felirat);

      const jatekSzoveg = `${i + 1}. Játék`;
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex < jatekSzoveg.length) {
          felirat.textContent += jatekSzoveg.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typeInterval);
          // 🎱 Gömbök megjelenítése a gépelés után
          inditGombokat(egyjateknagy, egyjatekkicsi);
        }
      }, 50); // gépelési sebesség

    }, jatekDelay);

    function inditGombokat(nagyok, kicsik) {
      const sor = document.createElement("div");
      sor.classList.add("jatek");
      eredmenyDiv.appendChild(sor);

      [...nagyok].forEach((szam, index) => {
        setTimeout(() => {
          const gomb = document.createElement("span");
          gomb.classList.add("szamgomb");
          gomb.textContent = szam;
          sor.appendChild(gomb);
          setTimeout(() => gomb.classList.add("felfed"), 100);
        }, index * 500);
      });

      setTimeout(() => {
        const elvalaszto = document.createElement("span");
        elvalaszto.style.display = "inline-block";
        elvalaszto.style.width = "30px";
        sor.appendChild(elvalaszto);
      }, 5 * 500);

      kicsik.forEach((szam, index) => {
        setTimeout(() => {
          const gomb = document.createElement("span");
          gomb.classList.add("szamgomb", "kis");
          gomb.textContent = szam;
          sor.appendChild(gomb);
          setTimeout(() => gomb.classList.add("felfed"), 100);
        }, (5 + index) * 500);
      });
    }
  }
});

