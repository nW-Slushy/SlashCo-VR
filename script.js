function openTab(tabName) {
  const tabContents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

// Liste aller Slasher
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

// Filterfunktion für Finder
function filterBy(type, value) {
  const gefiltert = slasherDaten.filter(s => s[type] === value);
  const ergebnisContainer = document.getElementById("filterErgebnis");

  if (gefiltert.length === 0) {
    ergebnisContainer.innerHTML = "<p>Keine Slasher gefunden.</p>";
    return;
  }

  ergebnisContainer.innerHTML = gefiltert.map(s =>
    `<div class="slasher-card">
      <h3>${s.name}</h3>
      <p>Klasse: ${s.klasse}</p>
      <p>Gefahrenstufe: ${s.gefahrenstufe}</p>
    </div>`
  ).join("");
}
