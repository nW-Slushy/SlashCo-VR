
function openTab(tabName) {
  const tabs = document.getElementsByClassName("tabcontent");
  for (let tab of tabs) tab.style.display = "none";
  document.getElementById(tabName).style.display = "block";
}

const slasherDaten = [
  {
    name: "SID",
    klasse: "DEMON",
    gefahrenstufe: "Considerable",
    infos: `
      <ul>
        <li>Cookie Monster-Maskottchen mit großkalibriger, nachladefreier .50 BMG</li>
        <li>Wut steigt sehr schnell; <80: isst Cookies → ruht ca. 50‑80 s ab, beruhigt sich (-8 bis -16 Wut)</li>
        <li>Bei >60 Wut zieht er seine Waffe; bei 100 mit Waffe: kann sprinten (Chase Speed 3.9 m/s)</li>
        <li>Sehr geduldig? Niedrigster Geduldswert → wird schnell aggressiv (Patience 25)</li>
        <li>Lautloser Patient Walk (Sneak Speed 1 m/s), leiser und zäher Jäger</li>
      </ul>`
  },
  {
    name: "THIRSTY",
    klasse: "DEMON",
    gefahrenstufe: "Considerable",
    infos: `
      <ul>
        <li>humanoid, schwarzer Anzug, weiße Maske mit Rissen</li>
        <li>Sehr leises Umherlaufen; reagiert hauptsächlich auf Geräusche</li>
        <li>Trinkt Milch, wenn [ANGER] niedrig; dadurch passiv + Wut reduziert</li>
        <li>Wut steigt schnell bei Provokation oder Nähe</li>
        <li>Ab >70 Wut wird Thirsty aggressiv – jagt und tötet Spieler:innen</li>
        <li>Milch beruhigt: 40–70 s bei 0 Wut, weniger bei höherem Wutlevel</li>
        <li>Attribute: Hearing 75, Eyesight 30, Walk 1.5 m/s, Chase 4 m/s</li>
      </ul>`
  },
  {
    name: "DOLPHINMAN",
    klasse: "CRYPTID",
    gefahrenstufe: "Considerable",
    infos: `
      <ul>
        <li>Humanoid mit Delphinmerkmalen, schleimige Haut</li>
        <li>Sehr schlechtes Sehvermögen (Eyesight 2), exzellentes Gehör (Hearing 90)</li>
        <li>Nutzt Echolocation und lautes Wail, sobald Geräusche ihn reizen</li>
        <li>Beim Jagen: Sehfähigkeit steigt auf 100</li>
        <li>Speed: Walk 1,4 m/s, Sneak 0,8 m/s, Chase 4 m/s (+0,4 m/s bei 100 Wut)</li>
        <li>Wut-Gewinn: angeregt durch Geräusche, passive Wutgain 1,25×, Chase-Gain 1,5×</li>
      </ul>`
  },
  {
    name: "BORGMIRE",
    klasse: "CRYPTID",
    gefahrenstufe: "Considerable",
    infos: `
      <ul>
        <li>Lautes mechanisches Auftreten</li>
        <li>Wutakkumulation sinkt während der Jagd</li>
      </ul>`
  },
  {
    name: "THE BEAST",
    klasse: "UMBRA",
    gefahrenstufe: "Considerable",
    infos: `
      <ul>
        <li>Besitzt Beißattacke</li>
        <li>Kann von Bierfässern betäubt werden</li>
      </ul>`
  },
  {
    name: "PRINCESS",
    klasse: "DEMON",
    gefahrenstufe: "Considerable",
    infos: `
      <ul>
        <li>Besitzt Beißattacke</li>
        <li>Kann von Bierfässern betäubt werden</li>
      </ul>`
  },
  {
    name: "THE GROUCH",
    klasse: "DEMON",
    gefahrenstufe: "Moderate",
    infos: `
      <ul>
        <li>Reagiert kaum auf Items</li>
        <li>Setzt auf verzögerte Bewegungen und Überraschungen</li>
      </ul>`
  },
  {
    name: "FATHER ELMER",
    klasse: "CRYPTID",
    gefahrenstufe: "Moderate",
    infos: ""
  },
  {
    name: "BABABOOEY",
    klasse: "CRYPTID",
    gefahrenstufe: "Moderate",
    infos: ""
  },
  {
    name: "ABOMIGNAT",
    klasse: "CRYPTID",
    gefahrenstufe: "Moderate",
    infos: ""
  },
  {
    name: "IGOR",
    klasse: "DEMON",
    gefahrenstufe: "Devastating",
    infos: `
      <ul>
        <li>Extrem hohe Chase-Speed (~6 m/s)</li>
        <li>Reagiert sehr stark auf Geräusche</li>
      </ul>`
  },
  {
    name: "THE WATCHER",
    klasse: "UMBRA",
    gefahrenstufe: "Devastating",
    infos: ""
  },
  {
    name: "TROLLGE",
    klasse: "UMBRA",
    gefahrenstufe: "Devastating",
    infos: ""
  },
  {
    name: "SPEEDRUNNER",
    klasse: "CRYPTID",
    gefahrenstufe: "Devastating",
    infos: `
      <ul>
        <li>Startet sehr langsam, Geschwindigkeit steigt mit seiner Wut</li>
        <li>Wut wird sehr schnell passiv erhöht</li>
        <li>Extrem empfindliches Gehör</li>
        <li>Schlechtere Sichtweite</li>
      </ul>`
  }
];

function toggleInfo(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "none" ? "block" : "none";
}

function renderSlasherListe(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = slasherDaten.map((s, i) => `
    <div class="slasher-card">
      <button class="slasher-button" onclick="toggleInfo('info-${containerId}-${i}')">${s.name}</button>
      <div id="info-${containerId}-${i}" class="slasher-info" style="display: none;">
        <p><strong>Klasse:</strong> ${s.klasse}</p>
        <p><strong>Gefahrenstufe:</strong> ${s.gefahrenstufe}</p>
        <p><strong>Infos:</strong><br>${s.infos}</p>
      </div>
    </div>
  `).join("");
}

function filterBy(type, value) {
  const gefiltert = slasherDaten.filter(s => s[type] === value);
  const container = document.getElementById("filterErgebnis");
  if (gefiltert.length === 0) {
    container.innerHTML = "<p>Keine Slasher gefunden.</p>";
    return;
  }
  container.innerHTML = gefiltert.map((s, i) => `
    <div class="slasher-card">
      <button class="slasher-button" onclick="toggleInfo('info-filter-${i}')">${s.name}</button>
      <div id="info-filter-${i}" class="slasher-info" style="display: none;">
        <p><strong>Klasse:</strong> ${s.klasse}</p>
        <p><strong>Gefahrenstufe:</strong> ${s.gefahrenstufe}</p>
        <p><strong>Infos:</strong><br>${s.infos}</p>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderSlasherListe("slasherListe");
  openTab("slasher");
});
