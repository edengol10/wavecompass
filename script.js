const destinations = [
  {
    name: "Taghazout",
    area: "Morocco",
    months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "low",
    tropical: false,
    directions: ["right"],
    wave: "Long right points, mellow beach breaks nearby",
    season: "October to April",
    vibe: "Mint tea, rooftop sunsets, and point-break road trips",
    tagline: "Best low-budget winter escape",
    description:
      "Taghazout is a compact surf town with easy access to Anchor Point, Panoramas, Hash Point, and gentler beginner beaches. It is a strong choice when you want warm-ish winter sun, affordable stays, and a real surf-town rhythm.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=86",
    caption: "Atlantic lines, warm light, and point-break energy.",
    query: "Taghazout Morocco surf",
    map: "Taghazout Morocco",
  },
  {
    name: "Ericeira",
    area: "Portugal",
    months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "medium",
    tropical: false,
    directions: ["left", "right"],
    wave: "Reef breaks, beach breaks, and powerful Atlantic setups",
    season: "September to May",
    vibe: "Cobblestone town, seafood dinners, serious surf culture",
    tagline: "Best European all-rounder",
    description:
      "Ericeira gives you a dense cluster of waves in a small area, from forgiving beach breaks to heavy reefs. It suits surfers who want quality waves, a beautiful town, and quick access to different conditions.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
    caption: "Clean Atlantic water and a polished coastal-town base.",
    query: "Ericeira Portugal surf",
    map: "Ericeira Portugal",
  },
  {
    name: "Uluwatu",
    area: "Bali",
    months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left"],
    wave: "Iconic left-hand reef breaks with long walls",
    season: "May to October",
    vibe: "Cliff views, scooter missions, warm water, late sunsets",
    tagline: "Best tropical performance wave",
    description:
      "Uluwatu is one of the classic surf areas: powerful lefts, blue water, and a cliffside scene built around the tide. It is best for confident surfers who are comfortable over reef and want serious wave quality.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=86",
    caption: "A warm-water left with drama, cliffs, and consequence.",
    query: "Uluwatu Bali surf",
    map: "Uluwatu Bali",
  },
  {
    name: "Nosara",
    area: "Costa Rica",
    months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    levels: ["beginner", "intermediate"],
    budget: "high",
    tropical: true,
    directions: ["left", "right"],
    wave: "Consistent beach break with friendly peaks",
    season: "November to August",
    vibe: "Jungle mornings, yoga studios, barefoot cafes",
    tagline: "Best tropical progression trip",
    description:
      "Nosara, especially Playa Guiones, is ideal when you want tropical consistency without a heavy reef learning curve. It is polished, beautiful, and very comfortable for beginners and intermediates building wave count.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
    caption: "Soft sand, jungle edges, and steady tropical peaks.",
    query: "Nosara Costa Rica surf",
    map: "Nosara Costa Rica",
  },
  {
    name: "Weligama",
    area: "Sri Lanka",
    months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    levels: ["beginner", "intermediate"],
    budget: "low",
    tropical: true,
    directions: ["left", "right"],
    wave: "Beginner-friendly bay with reefs nearby",
    season: "November to April",
    vibe: "Warm water, rice and curry, easy scooter exploration",
    tagline: "Best warm-water beginner base",
    description:
      "Weligama is a forgiving tropical base with a wide bay for lessons and nearby reef options as you improve. It is a practical choice for low-budget warm water, lots of surf schools, and relaxed evenings.",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=86",
    caption: "A gentle bay, warm water, and an easy first surf trip.",
    query: "Weligama Sri Lanka surf",
    map: "Weligama Sri Lanka",
  },
  {
    name: "Sayulita",
    area: "Mexico",
    months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    levels: ["beginner", "intermediate"],
    budget: "medium",
    tropical: true,
    directions: ["right"],
    wave: "Soft point and beach waves close to town",
    season: "November to April",
    vibe: "Colorful streets, taco stops, mellow longboard sessions",
    tagline: "Best playful town wave",
    description:
      "Sayulita is a colorful surf town where the wave sits right by the action. It works well for mellow sessions, longboards, and travelers who want surf, food, music, and town energy in one place.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=86",
    caption: "Playful tropical water with town life right behind it.",
    query: "Sayulita Mexico surf",
    map: "Sayulita Mexico",
  },
  {
    name: "Hossegor",
    area: "France",
    months: ["Sep", "Oct", "Nov"],
    levels: ["intermediate", "advanced"],
    budget: "high",
    tropical: false,
    directions: ["left", "right"],
    wave: "Fast, hollow beach breaks with serious power",
    season: "September to November",
    vibe: "Pine forests, French bakeries, contest-level sandbars",
    tagline: "Best high-performance beach break",
    description:
      "Hossegor is for surfers who want speed, power, and the chance of excellent sandbars. Autumn is the prime window, with heavier waves and a polished surf culture around town.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=86",
    caption: "Autumn Atlantic punch with a stylish land base.",
    query: "Hossegor France surf",
    map: "Hossegor France",
  },
  {
    name: "Byron Bay",
    area: "Australia",
    months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "high",
    tropical: false,
    directions: ["right"],
    wave: "Long points, beach breaks, and protected corners",
    season: "February to September",
    vibe: "Longboard lines, good coffee, lighthouse walks",
    tagline: "Best stylish point-break base",
    description:
      "Byron Bay mixes friendly learning waves, classic point-break days, and a very polished surf-town lifestyle. It is not the cheapest option, but it is easy to love if you want scenery and variety.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
    caption: "Long rides, green headlands, and easy coastal living.",
    query: "Byron Bay Australia surf",
    map: "Byron Bay Australia",
  },
];

const state = {
  selected: 0,
};

const elements = {
  heroMedia: document.querySelector("#heroMedia"),
  form: document.querySelector("#filters"),
  month: document.querySelector("#month"),
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
if ([...elements.month.options].some((option) => option.value === currentMonth)) {
  elements.month.value = currentMonth;
}

render();
