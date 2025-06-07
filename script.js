const slasherData = [
  { name: "The Skin Thief", difficulty: "Mittel", description: "Verkleidet sich als Überlebender." },
  { name: "Bobby", difficulty: "Leicht", description: "Klassischer Verfolger." },
  { name: "Shadow Man", difficulty: "Schwer", description: "Kann sich teleportieren." }
];

const itemData = [
  { name: "Taschenlampe", description: "Leuchtet dunkle Bereiche aus." },
  { name: "Medkit", description: "Heilt dich." }
];

function openTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.style.display = tab.id === tabId ? "block" : "none";
  });
}

function renderList(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  data.forEach(entry => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${entry.name}</strong><br>${entry.description}`;
    container.appendChild(div);
  });
}

function filterSlasher() {
  const selected = document.getElementById("difficulty").value;
  const filtered = slasherData.filter(s => !selected || s.difficulty === selected);
  renderList(filtered, "filter-results");
}

// Initial render
renderList(slasherData, "slasher-list");
renderList(itemData, "item-list");
filterSlasher(); // optional für Startansicht
