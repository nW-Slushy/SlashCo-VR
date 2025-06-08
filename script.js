
function openTab(tabName) {
  const tabs = document.getElementsByClassName("tabcontent");
  for (let tab of tabs) tab.style.display = "none";
  document.getElementById(tabName).style.display = "block";
}

const slasherDaten = 
[
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
      </ul>`,
    taktik: `xxx`
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
      </ul>`,
    taktik: `xxx`
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
      </ul>`,
    taktik: `xxx`
  },
  {
    name: "BORGMIRE",
    klasse: "CRYPTID",
    gefahrenstufe: "Considerable",
    infos: `
      <ul>
        <li>Gigantischer humanoider Mech mit stählernen Händen, leuchtenden Roten Brillengläsern und einem sichtbaren, schlagenden Herz</li>
        <li>Sehr schlechtes Sehvermögen (Eyesight 45), aber gute Ausdauer und hält viel aus</li>
        <li>Angst‑Meter (Wut) steigt zügig; während der Verfolgung sinkt es</li>
        <li>Bei hoher Wut kann er sehr schnell sprinten (Chase Speed 4.5 m/s +0.2 m/s; >50 Wut → Sprint 6 m/s (+1 m/s bei 100 Wut))</li>
        <li>Bewegungsgeschwindigkeit: Walk 1.25 m/s, Patient Walk 0.5 m/s, Sneak 0.7 m/s</li>
        <li>Attribute: Patience 90, Hearing 60, Eyesight 45, Intuition 20, FOV 65 °</li>
        <li>Stun-Dauer: 4 s; Wut‑Gain: Passive 0.8×, Chase –3.5×, Increase 2× bei Objektinteraktion</li>
        <li>Angriff: Schläge, Haken und Tritte – Hook- und Down-Punch besonders stark mit großem Knockback</li>
        <li>Ist laut unterwegs – eignet sich gut zur Spielerortung</li>
        <li>Hintergrund: Experiment aus Area 51 & Berlin 1990 – metallischer, unaufhaltsamer Automa</li>
      </ul>`,
    taktik: `xxx`
  },
  {
    name: "THE BEAST",
    klasse: "UMBRA",
    gefahrenstufe: "Considerable",
    infos: `
      <ul>
        <li>Fledermaus-ähnliches, nachtmarisches Wesen mit leuchtenden Augen und großen Flügeln</li>
        <li>“Frisst” Lichtquellen – lässt Taschenlampenenergie schwinden</li>
        <li>Flieht bei niedrig bis mittlerem Wutlevel, wenn starkes Licht ihn trifft (>0.5 Power)</li>
        <li>Bei hoher Wut kann er mit lautem Schrei Spieler orten und Geschwindigkeit sowie FOV erhöhen</li>
        <li>Wut steigt normal passiv (0.5×), schneller im Chase (1.25×)</li>
        <li>Attribute: Hearing 60→75 (bei Wut >60), Eyesight 40, Intuition 70, Walk 1.25 m/s, Sneak 0.85 m/s, Chase 3.9 m/s (+0.3 m/s)</li>
        <li>Wird bei Lichtauslöschung und Wutausbruch extrem aggressiv und unnachgiebig</li>
      </ul>`,
    taktik: `xxx`
  },
  {
    name: "PRINCESS",
    klasse: "DEMON",
    gefahrenstufe: "Considerable",
    infos: `
      <ul>
        <li>Großes, pitbull-artiges Wesen mit leuchtend grünen Augen</li>
        <li>Gewinnt sehr schnell Wut (passiver Gain 2,25×, Chase‑Gain 1,25×)</li>
        <li>Kann mit einem Baby beruhigt werden – reduziert Wut & pacifiziert kurzzeitig</li>
        <li>Beim Angriff „mault“ er Spieler: zieht sie weg & verursacht ansteigenden Tick‑Schaden</li>
        <li>Werte: Hearing 65, Eyesight 50, Walk 1 m/s, Sneak 0,4 m/s, Chase 4 m/s (+0,75 m/s)</li>
        <li>Stun-Dauer: 2,2 s / Benadryl‑Stun 20‑30 s</li>
      </ul>`,
    taktik: `xxx`
  },
  {
    name: "THE GROUCH",
    klasse: "DEMON",
    gefahrenstufe: "Moderate",
    infos: `
      <ul>
        <li>Form: verdrecktes, abgenutztes Oscar The Grouch‑Kostüm</li>
        <li>Verhält sich wie ein obdachloser, stark drogenabhängiger Charakter</li>
        <li>Bewegt sich langsam (Walk 0,7 m/s, Sneak 0,7 m/s), jagt schnell (Chase 5 m/s +0,25 m/s)</li>
        <li>Hearing 50, Eyesight 30, Intuition 100, FOV 120°</li>
        <li>Wut steigt schnell (Passive Gain 1,75×, Increase 1,25×), kann Items konsumieren</li>
        <li>Kann pacifiziert oder zum TWEAKING gebracht werden durch bestimmte Items (z. B. Menthols, Cookie, Benadryl)</li>
        <li>Wird aktiv (TWEAKING) und tödlich, wenn Wut hoch und er Störungen erlebt</li>
        <li>Kann sich in Schränken verstecken und Spieler dort blockieren</li>
      </ul>`,
    taktik: `xxx`
  },
  {
    name: "FATHER ELMER",
    klasse: "CRYPTID",
    gefahrenstufe: "Moderate",
    infos: `
      <ul>
        <li>Tritt als billiger Elmo-Maskottchen-Kostüm auf und trägt eine überdimensionale 4‑Gauge-Schrotflinte</li>
        <li>Relativ ruhig, aber erbarmungslos – gewinnt Wut langsam, aber bei Provokationen deutlich schneller</li>
        <li>Wachsende Wut erhöht Bewegungs- und Nachladegeschwindigkeit</li>
        <li>Walk 1,9 m/s, Sneak 0,7 m/s, Chase 4 m/s (+0,2 m/s)</li>
        <li>Hearing 60, Eyesight 30, FOV 120°</li>
        <li>Stun-Dauer: 24 s, anger passive Gain 0.05×, chase Gain 0.2×; kann erst bei ≥60 Wut sprinten</li>
        <li>Brand Story: Ehemals Mr. Brengston, durch Kult-Besessenheit zu „Father Elmer“ geworden</li>
      </ul>`,
    taktik: `xxx`
  },
  {
    name: "BABABOOEY",
    klasse: "CRYPTID",
    gefahrenstufe: "Moderate",
    infos: `
      <ul>
        <li>Schwarze, rußartige humanoide Gestalt mit breitem Grinsen</li>
        <li>Wirkt verspielt und neckend, nicht sofort aggressiv</li>
        <li>Ab 50 Wut wird er unsichtbar und spielt ein lautes Geräusch ab</li>
        <li>Hinterlässt harmlose Klone während der Unsichtbarkeit</li>
        <li>Wird durch das Erschrecken von Spielern wieder sichtbar</li>
        <li>Werte: Hearing 75, Eyesight 25, Walk 2 m/s, Sneak 1,5 m/s, Chase 3,96 m/s</li>
      </ul>`,
    taktik: `xxx`
  },
  {
    name: "ABOMIGNAT",
    klasse: "CRYPTID",
    gefahrenstufe: "Moderate",
    infos: `
      <ul>
        <li>Fügt im Vergleich zu anderen Slashern geringen Schaden zu, greift jedoch schnell an</li>
        <li>Spezial: Sprung‑Attacke (Lunge), die schwer auszuweichen ist</li>
        <li>Sehr schlechtes Hörvermögen (Hearing 25), aber exzellentes Sehvermögen und Sichtfeld (Eyesight 30, FOV 200°)</li>
        <li>Intuition‑Fähigkeit: spürt Spieler im ~40 m‑Radius auf; Radius schrumpft mit steigender Wut; deaktiviert bei ≤2 Spielern</li>
        <li>Bewegungsgeschwindigkeiten: Walk 2 m/s, Patient Walk 1 m/s, Sneak 0.9 m/s, Chase 4 m/s (+0.32 m/s)</li>
        <li>Stun‑Dauer: 12 s</li>
        <li>Wut‑Mechanik: Passive Gain 0.2×, Gain beim Chase 0.4×, Gain Increase 0.5×</li>
        <li>Gelegentliches Crawlen bei ~3.5 m/s mit eingeschränktem FOV (45°)</li>
        <li>Hintergrund: inspiriert vom Demogorgon aus »Stranger Things«</li>
      </ul>`,
    taktik: `xxx`
  },
  {
    name: "IGOR",
    klasse: "DEMON",
    gefahrenstufe: "Devastating",
    infos: `
      <ul>
        <li>Eine transzendente, körperlose Entität, die die Form von Tyler, The Creator annimmt</li>
        <li>In passivem Zustand: tanzt und erzeugt Items aus dem Nichts (Fuel Cans)</li>
        <li>Fuel-Spawns reduziert: nur zwei statt üblicher 10–12 pro Runde</li>
        <li>Timer-Mechanik: erscheint an zufälligen Orten, Spieler nähern → erzeugt Fuel, verschwindet, Timer sinkt</li>
        <li>Wut steigt bei Item-Erzeugung (+16), max. 99</li>
        <li>Bei Timer ≥75 verwandelt sich in “Tyler, The Destroyer”; kann Items/Spieler zerstören → Timer zurückgesetzt</li>
        <li>Bei 100 Wut erscheint er als Destroyer dauerhaft und spielt „WHAT’S GOOD“</li>
        <li>Extrem gutes Gehör (200), Sehsinn (Eyesight 300), FOV 160°, Chase-Speed 6 m/s</li>
      </ul>`,
    taktik: `xxx`
  },
  {
    name: "THE WATCHER",
    klasse: "UMBRA",
    gefahrenstufe: "Devastating",
    infos: `
      <ul>
        <li>Gestalt eines extrem großen alten Mannes mit Mantel, Hut & runden Gläsern</li>
        <li>Bewegt sich unbeholfen und beobachtet Spieler meist geduldig im Dunkeln</li>
        <li>Gewinnt **keine passive Wut**, aber extrem schnell Wut beim Beobachten von Spieler:innen</li>
        <li>Attribute: Hearing 55, Eyesight 55, FOV 100°, Intuition 100, Intelligence 100, Patience 80</li>
        <li>Bewegung: Walk 1,4 m/s, Patient Walk 0,5 m/s, Sneak 1 m/s, Chase 3,9 m/s (+0,2 m/s)</li>
        <li>Stun-Dauer: 2,25 s; [ANGER] Passive Gain 0×, Increase 0,5×, Chase Gain 1×</li>
        <li>Bevorzugt Einzeljagd, kann aber in Gruppen extrem tödlich sein</li>
      </ul>`,
    taktik: `xxx`
  },
  {
    name: "TROLLGE",
    klasse: "UMBRA",
    gefahrenstufe: "Devastating",
    infos: `
      <ul>
        <li>Geringes Sehvermögen (Eyesight 20) – reagiert nur auf Bewegung</li>
        <li>Extrem empfindlich auf Bewegung und Geräusche (Hearing 110)</li>
        <li>Läuft sehr langsam außerhalb der Jagd (Walk 0,8 m/s; Sneak 0,7 m/s)</li>
        <li>Patient Walk: 0,5 m/s; Chase Speed: 5 m/s (+0,2 m/s Upgrade)</li>
        <li>Stun-Dauer: 20 s</li>
        <li>Wut-Mechanik: passive Gain 1×, Increase 0,8×, Chase Gain 3×</li>
        <li>Spürt Spieler:innen nur bei Bewegung auf – bei Stillstand ignoriert er dich</li>
        <li>Verliert Fokus auf Spieler:innen, wenn sie länger als ~3 s still stehen</li>
        <li>Ab 60 Wut steigt Wahrscheinlichkeit, bei Geräusch sofort in Chase zu wechseln</li>
      </ul>`,
    taktik: `xxx`
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
      </ul>`,
    taktik: `xxx`
  }
]
;

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
        <p><strong>Infos:</strong><br>${s.infos || "<em>Keine weiteren Informationen.</em>"}</p>
        ${s.taktik ? `<p><strong>Taktik:</strong><br>${s.taktik}</p>` : `<p><strong>Taktik:</strong><br><em>Keine Taktik bekannt.</em></p>`}
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
        <p><strong>Infos:</strong><br>${s.infos || "<em>Keine weiteren Informationen.</em>"}</p>
        ${s.taktik ? `<p><strong>Taktik:</strong><br>${s.taktik}</p>` : `<p><strong>Taktik:</strong><br><em>Keine Taktik bekannt.</em></p>`}
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderSlasherListe("slasherListe");
  openTab("slasher");
});
