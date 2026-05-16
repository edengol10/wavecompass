const destinations = [
  {
    name: "Puerto Escondido",
    area: "Oaxaca, Mexico",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left", "right"],
    quality: 5,
    bottom: ["sand"],
    wave: "Heavy beach-break barrels with mellower points nearby",
    season: "April to October",
    vibe: "Big-wave beach town, mezcal evenings, warm Pacific energy",
    tagline: "Best Mexican barrel town",
    description:
      "Puerto Escondido is the Oaxaca coast's famous power zone. Zicatela is serious and best for confident surfers, while nearby points and bays give the area more range when the main beach is too heavy.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=86",
    caption: "Warm Pacific sand, heavy lines, and a surf-town pulse.",
    query: "Puerto Escondido Oaxaca surf",
    map: "Puerto Escondido Oaxaca Mexico",
  },
  {
    name: "La Saladita",
    area: "Guerrero, Mexico",
    months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    levels: ["beginner", "intermediate"],
    budget: "medium",
    tropical: true,
    directions: ["left"],
    quality: 3,
    bottom: ["sand", "rock"],
    wave: "Long, soft left point ideal for trimming and turns",
    season: "November to July",
    vibe: "Longboard laps, quiet stays, sunsets over a sleepy point",
    tagline: "Best mellow left point",
    description:
      "La Saladita is built around one beautiful left point. It is not the place for nightlife or heavy barrels; it is the place for long rides, easy repetition, and learning how to read a point wave.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=86",
    caption: "A warm, playful point wave with time to breathe.",
    query: "La Saladita Mexico surf",
    map: "La Saladita Guerrero Mexico",
  },
  {
    name: "Peniche",
    area: "Portugal",
    months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "medium",
    tropical: false,
    directions: ["left", "right"],
    quality: 4,
    bottom: ["sand", "reef"],
    wave: "Beach breaks, reef corners, and wind-protected options",
    season: "September to May",
    vibe: "Atlantic mornings, surf camps, seafood, and quick spot checks",
    tagline: "Best flexible Europe base",
    description:
      "Peniche is one of Portugal's easiest places to find something surfable because the coastline bends around the peninsula. It can suit first surf trips and serious sessions in the same week.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
    caption: "Atlantic texture, shifting peaks, and a practical surf base.",
    query: "Peniche Portugal surf",
    map: "Peniche Portugal",
  },
  {
    name: "Arugam Bay",
    area: "Sri Lanka",
    months: ["May", "Jun", "Jul", "Aug", "Sep"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "low",
    tropical: true,
    directions: ["right"],
    quality: 4,
    bottom: ["sand", "rock"],
    wave: "Long right points with easy sections and faster walls",
    season: "May to September",
    vibe: "Warm-water points, beach cafes, tuk-tuks, and sunrise paddles",
    tagline: "Best Sri Lanka right point",
    description:
      "Arugam Bay is Sri Lanka's east-coast classic, with Main Point as the center and a chain of softer or more remote rights nearby. It is a great pick when you want warm water and a social surf town.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=86",
    caption: "Right-hand walls, warm water, and a relaxed island rhythm.",
    query: "Arugam Bay Sri Lanka surf",
    map: "Arugam Bay Sri Lanka",
  },
  {
    name: "Hikkaduwa",
    area: "Sri Lanka",
    months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    levels: ["beginner", "intermediate"],
    budget: "low",
    tropical: true,
    directions: ["left", "right"],
    quality: 3,
    bottom: ["reef", "sand"],
    wave: "Reef and beach options close to a busy beach town",
    season: "November to April",
    vibe: "Easy guesthouses, warm water, turtles, and lively evenings",
    tagline: "Best easy southwest Sri Lanka base",
    description:
      "Hikkaduwa is a convenient southwest-coast base with multiple waves close together. It works well if you want affordable tropical surf, simple logistics, and town energy after the session.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
    caption: "Warm-water reefs and beach-town movement.",
    query: "Hikkaduwa Sri Lanka surf",
    map: "Hikkaduwa Sri Lanka",
  },
  {
    name: "Midigama / Weligama",
    area: "Sri Lanka",
    months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    levels: ["beginner", "intermediate"],
    budget: "low",
    tropical: true,
    directions: ["left", "right"],
    quality: 3,
    bottom: ["sand", "reef", "rock"],
    wave: "Beginner-friendly bay with reefs nearby",
    season: "November to April",
    vibe: "Warm water, curry stops, scooter missions, and steady reps",
    tagline: "Best progression zone",
    description:
      "Weligama gives beginners a forgiving bay, while nearby Midigama adds reef setups for intermediates. Together they make a strong progression zone where you can move spots as your surfing improves.",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=86",
    caption: "A gentle bay, nearby reefs, and easy tropical logistics.",
    query: "Midigama Weligama Sri Lanka surf",
    map: "Midigama Weligama Sri Lanka",
  },
  {
    name: "Itacare",
    area: "Bahia, Brazil",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left", "right"],
    quality: 3,
    bottom: ["sand", "rock"],
    wave: "Tropical beach breaks with punchy peaks and coves",
    season: "April to September",
    vibe: "Rainforest beaches, acai, capoeira nights, and compact surf checks",
    tagline: "Best Brazil jungle surf town",
    description:
      "Itacare mixes a real Brazilian beach-town feel with short walks to different coves and peaks. It is a strong choice if you want tropical scenery, culture, and manageable waves without feeling isolated.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=86",
    caption: "Rainforest-backed beaches and punchy tropical peaks.",
    query: "Itacare Brazil surf",
    map: "Itacare Bahia Brazil",
  },
  {
    name: "Pipa",
    area: "Brazil",
    months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    levels: ["beginner", "intermediate"],
    budget: "medium",
    tropical: true,
    directions: ["left", "right"],
    quality: 2,
    bottom: ["sand", "reef"],
    wave: "Playful beach and reef waves near dramatic cliffs",
    season: "November to May",
    vibe: "Clifftop views, beach bars, dolphins, and warm-water cruising",
    tagline: "Best playful Brazil escape",
    description:
      "Pipa is not the heaviest surf zone on the list, and that is part of the appeal. It suits surfers who want warm water, scenic beaches, fun waves, and an easygoing town.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
    caption: "Warm water, cliff-backed beaches, and relaxed sessions.",
    query: "Pipa Brazil surf",
    map: "Pipa Brazil",
  },
  {
    name: "El Tunco / La Libertad",
    area: "El Salvador",
    months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["right"],
    quality: 4,
    bottom: ["rock"],
    wave: "Long cobblestone right points with power and open faces",
    season: "March to October",
    vibe: "Compact surf towns, volcano backdrops, and point-break mornings",
    tagline: "Best Central America right points",
    description:
      "The La Libertad coast around El Tunco is loaded with right points. It is a strong match for intermediate and advanced surfers who want warm water, consistent swell, and point-break rhythm.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=86",
    caption: "Warm right points and black-sand Central America coastline.",
    query: "El Tunco La Libertad El Salvador surf",
    map: "El Tunco La Libertad El Salvador",
  },
  {
    name: "Popoyo",
    area: "Nicaragua",
    months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    levels: ["intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left", "right"],
    quality: 4,
    bottom: ["reef", "sand", "rock"],
    wave: "Reefs, slabs, beach breaks, and consistent offshore winds",
    season: "March to November",
    vibe: "Remote coastline, dawn winds, simple stays, and lots of wave variety",
    tagline: "Best wave-variety camp zone",
    description:
      "Popoyo is a compact but serious surf zone with different setups close together. It is best for surfers who want consistency, warm water, and a quieter trip focused on sessions.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
    caption: "Reef corners, beach peaks, and reliable tropical winds.",
    query: "Popoyo Nicaragua surf",
    map: "Popoyo Nicaragua",
  },
  {
    name: "Northwest Australia",
    area: "Western Australia",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["advanced"],
    budget: "high",
    tropical: true,
    directions: ["left", "right"],
    quality: 5,
    bottom: ["reef", "rock"],
    wave: "Remote reef waves, ledges, and powerful desert-coast setups",
    season: "April to October",
    vibe: "Long drives, empty horizons, camping logistics, and serious waves",
    tagline: "Best remote adventure",
    description:
      "Northwest Australia is not a casual surf trip. It rewards experienced surfers who can handle remoteness, reef, wind, tides, and self-sufficient travel planning.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
    caption: "Desert coast, reef energy, and proper adventure logistics.",
    query: "Northwest Australia surf Gnaraloo Exmouth",
    map: "Gnaraloo Western Australia",
  },
  {
    name: "Mentawai",
    area: "Indonesia",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["intermediate", "advanced"],
    budget: "high",
    tropical: true,
    directions: ["left", "right"],
    quality: 5,
    bottom: ["reef"],
    wave: "World-class reef breaks with machine-like consistency",
    season: "April to October",
    vibe: "Boat trips, island camps, blue water, and bucket-list waves",
    tagline: "Best dream reef trip",
    description:
      "The Mentawai Islands are one of surfing's dream destinations: high-quality reefs, warm water, and a huge range of waves. It is expensive compared with most picks, but the wave quality is the point.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=86",
    caption: "Blue-water reef lines and boat-trip energy.",
    query: "Mentawai Islands surf",
    map: "Mentawai Islands Indonesia",
  },
  {
    name: "G-Land",
    area: "Java, Indonesia",
    months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["advanced"],
    budget: "high",
    tropical: true,
    directions: ["left"],
    quality: 5,
    bottom: ["reef"],
    wave: "Long, powerful left reef with multiple sections",
    season: "May to October",
    vibe: "Jungle camp, reef focus, and a legendary left-hand wall",
    tagline: "Best legendary left",
    description:
      "G-Land is a classic Indonesian left that asks for experience and respect. It is remote, reefy, and powerful, with long sections when the swell and tide line up.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
    caption: "Jungle-backed reef, long lefts, and real consequence.",
    query: "G-Land Java Indonesia surf",
    map: "G-Land Java Indonesia",
  },
  {
    name: "Uluwatu",
    area: "Bali, Indonesia",
    months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left"],
    quality: 5,
    bottom: ["reef"],
    wave: "Iconic left-hand reef breaks with long walls",
    season: "May to October",
    vibe: "Cliff views, scooter missions, warm water, and late sunsets",
    tagline: "Best tropical performance wave",
    description:
      "Uluwatu is one of the classic surf areas: powerful lefts, blue water, and a cliffside scene built around the tide. It is best for confident surfers comfortable over reef.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=86",
    caption: "A warm-water left with drama, cliffs, and consequence.",
    query: "Uluwatu Bali surf",
    map: "Uluwatu Bali Indonesia",
  },
  {
    name: "Lombok",
    area: "Indonesia",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left", "right"],
    quality: 4,
    bottom: ["reef", "sand"],
    wave: "Bays, reefs, and point-style setups for different levels",
    season: "April to November",
    vibe: "Scooter routes, quieter villages, warm water, and varied reef sessions",
    tagline: "Best Indonesia progression island",
    description:
      "Lombok gives you more breathing room than Bali and a wide range of waves around Kuta Lombok and beyond. It can work for progression trips or heavier reef missions depending on where you go.",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=86",
    caption: "Warm bays, reef setups, and a slower island rhythm.",
    query: "Lombok Indonesia surf",
    map: "Kuta Lombok Indonesia",
  },
];

const state = {
  selected: 0,
};

const elements = {
  heroMedia: document.querySelector("#heroMedia"),
  form: document.querySelector("#filters"),
  monthInputs: document.querySelectorAll('input[name="month"]'),
  direction: document.querySelector("#direction"),
  directionValue: document.querySelector("#directionValue"),
  tropical: document.querySelector("#tropical"),
  matchTitle: document.querySelector("#matchTitle"),
  matchReason: document.querySelector("#matchReason"),
  feature: document.querySelector("#destinationFeature"),
  tagline: document.querySelector("#destinationTagline"),
  name: document.querySelector("#destinationName"),
  description: document.querySelector("#destinationDescription"),
  facts: document.querySelector("#destinationFacts"),
  actions: document.querySelector("#destinationActions"),
  image: document.querySelector("#destinationImage"),
  caption: document.querySelector("#destinationCaption"),
  cardStrip: document.querySelector("#cardStrip"),
};

function getFilters() {
  const formData = new FormData(elements.form);
  return {
    month: formData.get("month"),
    level: formData.get("level"),
    budget: formData.get("budget"),
    direction: directionFromValue(formData.get("direction")),
    tropical: elements.tropical.checked,
  };
}

function scoreDestination(destination, filters) {
  let score = 0;

  if (destination.months.includes(filters.month)) score += 4;
  if (destination.levels.includes(filters.level)) score += 4;
  if (destination.budget === filters.budget) score += 3;
  if (!filters.tropical || destination.tropical) score += 3;
  if (filters.tropical && !destination.tropical) score -= 4;
  if (filters.direction === "any") score += 1;
  if (filters.direction !== "any" && destination.directions.includes(filters.direction)) score += 3;
  if (filters.direction !== "any" && !destination.directions.includes(filters.direction)) score -= 2;

  const budgetOrder = ["low", "medium", "high"];
  const budgetGap = Math.abs(
    budgetOrder.indexOf(destination.budget) - budgetOrder.indexOf(filters.budget),
  );

  return score - budgetGap;
}

function getRankedDestinations() {
  const filters = getFilters();

  return destinations
    .map((destination, index) => ({
      ...destination,
      index,
      score: scoreDestination(destination, filters),
    }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}

function setBackground(destination) {
  elements.heroMedia.classList.add("is-changing");

  window.setTimeout(() => {
    elements.heroMedia.style.backgroundImage = `url("${destination.image}")`;
    elements.heroMedia.classList.remove("is-changing");
  }, 180);
}

function renderFeature(destination, filters) {
  elements.feature.classList.add("is-changing");

  window.setTimeout(() => {
    elements.matchTitle.textContent = `${destination.name}, ${destination.area}`;
    elements.matchReason.textContent = buildReason(destination, filters);
    elements.tagline.textContent = destination.tagline;
    elements.name.textContent = destination.name;
    elements.description.textContent = destination.description;
    elements.image.src = destination.image;
    elements.image.alt = `${destination.name} surf destination`;
    elements.caption.textContent = destination.caption;

    elements.facts.innerHTML = [
      ["Wave quality", qualityRating(destination.quality)],
      ["Bottom", bottomLabel(destination.bottom)],
      ["Best season", destination.season],
      ["Wave type", destination.wave],
      ["Direction", directionLabel(destination.directions)],
      ["Budget", titleCase(destination.budget)],
      ["Vibe", destination.vibe],
    ]
      .map(
        ([label, value]) => `
          <div>
            <dt>${label}</dt>
            <dd>${value}</dd>
          </div>
        `,
      )
      .join("");

    elements.actions.innerHTML = `
      <a class="action-link" href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
        destination.query,
      )}" target="_blank" rel="noreferrer">Surf photos</a>
      <a class="action-link secondary" href="https://www.google.com/maps/search/${encodeURIComponent(
        destination.map,
      )}" target="_blank" rel="noreferrer">Open map</a>
      <a class="action-link secondary" href="https://www.youtube.com/results?search_query=${encodeURIComponent(
        `${destination.query} waves`,
      )}" target="_blank" rel="noreferrer">Watch waves</a>
    `;

    elements.feature.classList.remove("is-changing");
  }, 170);
}

function renderCards(ranked) {
  elements.cardStrip.innerHTML = ranked
    .slice(0, 4)
    .map(
      (destination) => `
        <button class="spot-card" type="button" data-index="${destination.index}" aria-label="Choose ${destination.name}">
          <img src="${destination.image}" alt="" loading="lazy" />
          <span class="spot-card-content">
            <strong>${destination.name}</strong>
            <span>${destination.area} / ${destination.season}</span>
          </span>
        </button>
      `,
    )
    .join("");
}

function buildReason(destination, filters) {
  const parts = [];

  if (destination.months.includes(filters.month)) {
    parts.push(`${filters.month} is in season`);
  }

  if (destination.levels.includes(filters.level)) {
    parts.push(`good for ${filters.level} surfers`);
  }

  if (destination.budget === filters.budget) {
    parts.push(`${filters.budget} budget fit`);
  }

  if (filters.direction !== "any" && destination.directions.includes(filters.direction)) {
    parts.push(`${filters.direction}s available`);
  }

  if (filters.tropical && destination.tropical) {
    parts.push("tropical water");
  }

  return parts.length
    ? `Matched because it has ${parts.join(", ")}.`
    : "Closest overall match from the current destination set.";
}

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function qualityRating(quality) {
  return `
    <span class="quality-rating">
      <span class="stars" aria-label="${quality} out of 5 stars">${"★".repeat(quality)}${"☆".repeat(5 - quality)}</span>
      <span>${quality}/5 · ${qualityLabel(quality)}</span>
    </span>
  `;
}

function qualityLabel(quality) {
  const labels = {
    0: "No rating",
    1: "Fun",
    2: "Fair",
    3: "Good",
    4: "Epic",
    5: "World class",
  };

  return labels[quality] || "No rating";
}

function bottomLabel(bottom) {
  return bottom.map(titleCase).join(" / ");
}

function directionFromValue(value) {
  if (value === "-1") return "left";
  if (value === "1") return "right";
  return "any";
}

function directionLabel(directions) {
  if (directions.includes("left") && directions.includes("right")) return "Lefts and rights";
  if (directions.includes("left")) return "Mostly lefts";
  return "Mostly rights";
}

function directionChoiceLabel(direction) {
  if (direction === "left") return "Lefts";
  if (direction === "right") return "Rights";
  return "Any wave";
}

function updateDirectionControl() {
  const direction = directionFromValue(elements.direction.value);
  const fill = `${(Number(elements.direction.value) + 1) * 50}%`;

  elements.directionValue.textContent = directionChoiceLabel(direction);
  elements.direction.setAttribute("aria-valuetext", directionChoiceLabel(direction));
  elements.direction.style.setProperty("--direction-fill", fill);
}

function render(preferredIndex = null) {
  updateDirectionControl();
  const filters = getFilters();
  const ranked = getRankedDestinations();
  const selected =
    preferredIndex === null ? ranked[0] : ranked.find((item) => item.index === preferredIndex) || ranked[0];

  state.selected = selected.index;
  setBackground(selected);
  renderFeature(selected, filters);
  renderCards(ranked);
}

elements.form.addEventListener("change", () => render());
elements.direction.addEventListener("input", () => render());

elements.cardStrip.addEventListener("click", (event) => {
  const card = event.target.closest(".spot-card");
  if (!card) return;

  render(Number(card.dataset.index));
  document.querySelector(".results-band").scrollIntoView({ behavior: "smooth", block: "start" });
});

const currentMonth = new Date().toLocaleString("en-US", { month: "short" });
const currentMonthInput = [...elements.monthInputs].find((input) => input.value === currentMonth);
if (currentMonthInput) currentMonthInput.checked = true;

render();
