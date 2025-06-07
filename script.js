function openTab(tabName) {
  const tabs = document.getElementsByClassName('tabcontent');
  for (let tab of tabs) {
    tab.style.display = 'none';
  }
  document.getElementById(tabName).style.display = 'block';
}

// Beispiel-Daten für Slasher
const slasherDaten = [
  { name: "Bubba", klasse: "jäger", gefahr: "mittel" },
  { name: "Ghostie", klasse: "stalker", gefahr: "schwer" },
  { name: "Zalgo", klasse: "chaotisch", gefahr: "extrem" },
  { name: "Daisy", klasse: "jäger", gefahr: "leicht" },
];

function filterSlasher() {
  const klasse = document.getElementById("klasse").value;
  const gefahr = document.getElementById("gefahrenstufe").value;

  const gefiltert = slasherDaten.filter(s => {
    return (klasse === "" || s.klasse === klasse) &&
           (gefahr === "" || s.gefahr === gefahr);
  });

  const ergebnisDiv = document.getElementById("filterErgebnis");
  if (gefiltert.length === 0) {
    ergebnisDiv.innerHTML = "<p>Kein Slasher gefunden.</p>";
    return;
  }

  ergebnisDiv.innerHTML = gefiltert.map(s =>
    `<div class="slasher-card">
       <h3>${s.name}</h3>
       <p>Klasse: ${s.klasse}</p>
       <p>Gefahrenstufe: ${s.gefahr}</p>
     </div>`
  ).join("");
}
