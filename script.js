
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
    infos: ""
  },
  {
    name: "THIRSTY",
    klasse: "DEMON",
    gefahrenstufe: "Considerable",
    infos: ""
  },
  {
    name: "DOLPHINMAN",
    klasse: "CRYPTID",
    gefahrenstufe: "Considerable",
    infos: `
      <ul>
        <li>Schnelles Fortbewegen im Wasser</li>
        <li>Reagiert empfindlich auf Geräusche</li>
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
    infos: ""
  },
  {
    name: "PRINCESS",
    klasse: "DEMON",
    gefahrenstufe: "Considerable",
    infos: `
      <ul>
        <li>Reagiert auf Puppen</li>
        <li>Besitzt Beißattacke</li>
        <li>Kann in der Nähe von Bierfässern betäubt werden</li>
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
        <p><strong>- Infos:</strong><br>${s.infos}</p>
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
        <p><strong>- Infos:</strong><br>${s.infos}</p>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderSlasherListe("slasherListe");
  openTab("slasher");
});
