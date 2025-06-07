function openTab(tabName) {
  const tabContents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

// Alle Slasher-Daten
const slasherDaten = [
  { name: "SID", klasse: "DEMON", gefahrenstufe: "Considerable" },
  { name: "THIRSTY", klasse: "DEMON", gefahrenstufe: "Considerable" },
  { name: "DOLPHINMAN", klasse: "CRYPTID", gefahrenstufe: "Considerable" },
  { name: "BORGMIRE", klasse: "CRYPTID", gefahrenstufe: "Considerable" },
  { name: "THE BEAST", klasse: "UMBRA", gefahrenstufe: "Considerable" },
  { name: "PRINCESS", klasse: "DEMON", gefahrenstufe: "Considerable" },
  { name: "THE GROUCH", klasse: "DEMON", gefahrenstufe: "Moderate" },
  { name: "FATHER ELMER", klasse: "CRYPTID", gefahrenstufe: "Moderate" },
  { name: "BABABOOEY", klasse: "CRYPTID", gefahrenstufe: "Moderate" },
  { name: "ABOMIGNAT", klasse: "CRYPTID", gefahrenstufe: "Moderate" },
  { name: "IGOR", klasse: "DEMON", gefahrenstufe: "Devastating" },
  { name: "THE WATCHER", klasse: "UMBRA", gefahrenstufe: "Devastating" },
  { name: "TROLLGE", klasse: "UMBRA", gefahrenstufe: "Devastating" },
  { name: "SPEEDRUNNER", klasse: "CRYPTID", gefahrenstufe: "Devastating" }
];

// Toggle Info-Feld
function toggleInfo(id) {
  const element = document.getElementById(id);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// Für Haupt-Slasher-Tab
function renderSlasherListe(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = slasherDaten.map((s, i) => `
    <div class="slasher-card">
      <button class="slasher-button" onclick="toggleInfo('info-${containerId}-${i}')">${s.name}</button>
      <div id="info-${containerId}-${i}" class="slasher-info" style="display: none;">
        <p>Klasse: ${s.klasse}</p>
        <p>Gefahrenstufe: ${s.gefahrenstufe}</p>
      </div>
    </div>
  `).join("");
}

// Für Finder
function filterBy(type, value) {
  const gefiltert = slasherDaten.filter(s => s[type] === value);
  const ergebnisContainer = document.getElementById("filterErgebnis");

  if (gefiltert.length === 0) {
    ergebnisContainer.innerHTML = "<p>Keine Slasher gefunden.</p>";
    return;
  }

  ergebnisContainer.innerHTML = gefiltert.map((s, i) =>
    `<div class="slasher-card">
      <button class="slasher-button" onclick="toggleInfo('info-filter-${i}')">${s.name}</button>
      <div id="info-filter-${i}" class="slasher-info" style="display: none;">
        <p>Klasse: ${s.klasse}</p>
        <p>Gefahrenstufe: ${s.gefahrenstufe}</p>
      </div>
    </div>`
  ).join("");
}

// Starte mit Anzeige im Slasher-Tab
document.addEventListener("DOMContentLoaded", () => {
  renderSlasherListe("slasherListe");
  openTab("slasher");
});
