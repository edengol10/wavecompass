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
  {
    name: "Tofo / Tofinho",
    area: "Mozambique",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    levels: ["intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left", "right"],
    quality: 4,
    bottom: ["sand", "reef"],
    wave: "Warm-water beach breaks and punchy point-style reefs",
    season: "April to September",
    vibe: "Manta rays, warm water, sandy tracks, and uncrowded sessions",
    tagline: "Best Mozambique surf town",
    description:
      "Tofo and nearby Tofinho are Mozambique's best-known surf base, mixing tropical travel with real wave potential. It suits surfers who want warm water, fewer crowds, and a bit of adventure around the edges.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
    caption: "Warm Indian Ocean water and a laid-back Mozambique base.",
    query: "Tofo Tofinho Mozambique surf",
    map: "Tofo Mozambique",
  },
  {
    name: "Ponta do Ouro",
    area: "Mozambique",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    levels: ["beginner", "intermediate"],
    budget: "medium",
    tropical: true,
    directions: ["right"],
    quality: 3,
    bottom: ["sand"],
    wave: "Long warm-water right with friendly sections",
    season: "April to September",
    vibe: "Beach town, dolphins, road-trip energy, and softer points",
    tagline: "Best gentle Mozambique right",
    description:
      "Ponta do Ouro is a practical southern Mozambique option with warmer water, a friendly town, and point-style waves that can be easier than the heavier reefs farther north.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
    caption: "A warm right point and a simple beach-town rhythm.",
    query: "Ponta do Ouro Mozambique surf",
    map: "Ponta do Ouro Mozambique",
  },
  {
    name: "Ponta Preta / Sal",
    area: "Cape Verde",
    months: ["Nov", "Dec", "Jan", "Feb", "Mar"],
    levels: ["advanced"],
    budget: "medium",
    tropical: false,
    directions: ["right"],
    quality: 5,
    bottom: ["reef", "rock"],
    wave: "Fast volcanic right reef with serious power",
    season: "November to March",
    vibe: "Desert island wind, blue water, and a proper Atlantic right",
    tagline: "Best Cape Verde reef",
    description:
      "Sal's Ponta Preta is the Cape Verde headline wave: a powerful right over volcanic reef. It is best for advanced surfers and confident travelers who understand wind, reef, and consequence.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=86",
    caption: "Volcanic reef, Atlantic swell, and desert-island light.",
    query: "Ponta Preta Sal Cape Verde surf",
    map: "Ponta Preta Sal Cape Verde",
  },
  {
    name: "Fuerteventura North",
    area: "Canary Islands",
    months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "medium",
    tropical: false,
    directions: ["left", "right"],
    quality: 4,
    bottom: ["reef", "sand", "rock"],
    wave: "Volcanic reefs, beach breaks, and consistent winter swell",
    season: "October to March",
    vibe: "Desert roads, surf camps, reef shoes, and many daily options",
    tagline: "Best Canary Islands all-rounder",
    description:
      "North Fuerteventura is a flexible Canary Islands base with lots of setups around Corralejo, El Cotillo, and the north shore. It works for mixed-level trips if you choose spots carefully.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=86",
    caption: "Volcanic coast, winter swell, and lots of spot options.",
    query: "Fuerteventura north shore surf",
    map: "Corralejo Fuerteventura",
  },
  {
    name: "Famara / Lanzarote",
    area: "Canary Islands",
    months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "medium",
    tropical: false,
    directions: ["left", "right"],
    quality: 4,
    bottom: ["sand", "reef"],
    wave: "Long beach break with serious reefs nearby",
    season: "October to March",
    vibe: "Cliff-backed beach, surf schools, volcanic landscape, and winter energy",
    tagline: "Best Lanzarote surf base",
    description:
      "Famara is Lanzarote's most convenient surf base, with a long beach for progression and heavier reef options nearby for experienced surfers when conditions line up.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=86",
    caption: "A dramatic beach under cliffs with reef options nearby.",
    query: "Famara Lanzarote surf",
    map: "Caleta de Famara Lanzarote",
  },
  {
    name: "Playa de las Americas",
    area: "Tenerife, Canary Islands",
    months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    levels: ["intermediate", "advanced"],
    budget: "medium",
    tropical: false,
    directions: ["left", "right"],
    quality: 4,
    bottom: ["reef", "rock"],
    wave: "Consistent volcanic reefs close to town",
    season: "October to April",
    vibe: "Easy logistics, volcanic reef, nightlife, and quick paddles",
    tagline: "Best Tenerife reef base",
    description:
      "Playa de las Americas is Tenerife's most convenient surf zone, with consistent reef waves and plenty of infrastructure. It is not remote, but it is very easy to surf daily.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
    caption: "Volcanic reef waves with town logistics right behind them.",
    query: "Playa de las Americas Tenerife surf",
    map: "Playa de las Americas Tenerife",
  },
  {
    name: "Taghazout",
    area: "Morocco",
    months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "low",
    tropical: false,
    directions: ["right"],
    quality: 4,
    bottom: ["rock", "sand"],
    wave: "Long right points, beach breaks, and winter Atlantic swell",
    season: "October to April",
    vibe: "Surf camps, tagine dinners, rooftops, and point-break road trips",
    tagline: "Best Morocco hub",
    description:
      "Taghazout is Morocco's classic surf hub, with Anchor Point and a cluster of nearby waves. It is affordable, social, and one of the easiest winter surf trips from Europe.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=86",
    caption: "Atlantic points, desert light, and a real surf-town base.",
    query: "Taghazout Morocco surf",
    map: "Taghazout Morocco",
  },
  {
    name: "Imsouane",
    area: "Morocco",
    months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    levels: ["beginner", "intermediate"],
    budget: "low",
    tropical: false,
    directions: ["right"],
    quality: 4,
    bottom: ["sand", "rock"],
    wave: "Very long mellow right-hand bay wave",
    season: "October to April",
    vibe: "Small fishing village, long rides, and slower evenings",
    tagline: "Best long right for progression",
    description:
      "Imsouane is loved for long right-hand rides in the bay. It is less intense than Morocco's heavier points and a strong pick for learning flow, trim, and positioning.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
    caption: "Long Moroccan right-hand walls and a slow village pace.",
    query: "Imsouane Morocco surf",
    map: "Imsouane Morocco",
  },
  {
    name: "Safi",
    area: "Morocco",
    months: ["Nov", "Dec", "Jan", "Feb", "Mar"],
    levels: ["advanced"],
    budget: "low",
    tropical: false,
    directions: ["right"],
    quality: 5,
    bottom: ["rock"],
    wave: "Powerful right-hand barrel over rock",
    season: "November to March",
    vibe: "Heavy Moroccan tube mission, not a casual holiday wave",
    tagline: "Best Morocco barrel",
    description:
      "Safi is one of Morocco's most serious waves, a fast right barrel that needs swell, skill, and respect. It is a destination for advanced surfers, not a beginner surf camp base.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=86",
    caption: "A powerful Moroccan right for experienced barrel hunters.",
    query: "Safi Morocco surf",
    map: "Safi Morocco",
  },
  {
    name: "Razo / Pantin",
    area: "Galicia, Spain",
    months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "medium",
    tropical: false,
    directions: ["left", "right"],
    quality: 3,
    bottom: ["sand"],
    wave: "Consistent Atlantic beach breaks with room to spread out",
    season: "September to May",
    vibe: "Green coast, seafood, quiet towns, and raw Atlantic weather",
    tagline: "Best green Spain escape",
    description:
      "Galicia is a colder, wilder alternative to the classic Portugal and France route. Razo and Pantin give consistent beach-break options with a lower-key feel.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
    caption: "Green cliffs, open beaches, and raw Atlantic lines.",
    query: "Razo Pantin Galicia surf",
    map: "Praia de Razo Galicia Spain",
  },
  {
    name: "Hossegor",
    area: "France",
    months: ["Sep", "Oct", "Nov"],
    levels: ["intermediate", "advanced"],
    budget: "high",
    tropical: false,
    directions: ["left", "right"],
    quality: 5,
    bottom: ["sand"],
    wave: "Fast, hollow, world-class beach-break barrels",
    season: "September to November",
    vibe: "Pine forest, French bakeries, surf industry, and serious sandbars",
    tagline: "Best Europe barrel beach",
    description:
      "Hossegor is one of Europe's iconic surf zones, famous for La Graviere, La Nord, and shifting sandbars that can turn world class in autumn.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=86",
    caption: "Autumn sandbars and heavy Atlantic beach-break energy.",
    query: "Hossegor France surf",
    map: "Hossegor France",
  },
  {
    name: "Biarritz",
    area: "France",
    months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["beginner", "intermediate"],
    budget: "high",
    tropical: false,
    directions: ["left", "right"],
    quality: 3,
    bottom: ["sand", "rock"],
    wave: "Classic beach-town waves with sheltered options",
    season: "May to October",
    vibe: "Historic surf culture, cafes, style, and Basque coast day trips",
    tagline: "Best stylish France base",
    description:
      "Biarritz is less about maximum wave quality and more about a beautiful surf-town experience. It is excellent for mixed trips with surf, food, beaches, and Basque Coast exploring.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
    caption: "Classic European surf culture with city comforts.",
    query: "Biarritz France surf",
    map: "Biarritz France",
  },
  {
    name: "Mundaka",
    area: "Basque Country, Spain",
    months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    levels: ["advanced"],
    budget: "medium",
    tropical: false,
    directions: ["left"],
    quality: 5,
    bottom: ["sand"],
    wave: "Legendary river-mouth left barrel",
    season: "October to March",
    vibe: "Basque village, tidal windows, and one of Europe's best lefts",
    tagline: "Best Europe left barrel",
    description:
      "Mundaka is a legendary left that can be world class when the sand, tide, and swell align. It is not a forgiving everyday wave, but its ceiling is extremely high.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=86",
    caption: "A tidal left barrel in a Basque river-mouth setting.",
    query: "Mundaka Basque Country surf",
    map: "Mundaka Spain",
  },
  {
    name: "Ericeira",
    area: "Portugal",
    months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "medium",
    tropical: false,
    directions: ["left", "right"],
    quality: 4,
    bottom: ["reef", "sand", "rock"],
    wave: "Dense cluster of reefs, points, and beach breaks",
    season: "September to May",
    vibe: "Cobblestone town, seafood, surf culture, and quick spot changes",
    tagline: "Best Portugal surf town",
    description:
      "Ericeira is one of Portugal's most complete surf bases, with quality waves packed into a small area and enough variety for different levels and conditions.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
    caption: "A polished Atlantic town with lots of waves nearby.",
    query: "Ericeira Portugal surf",
    map: "Ericeira Portugal",
  },
  {
    name: "Nazare",
    area: "Portugal",
    months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    levels: ["advanced"],
    budget: "medium",
    tropical: false,
    directions: ["left", "right"],
    quality: 5,
    bottom: ["sand", "rock"],
    wave: "Big-wave canyon energy and powerful beach breaks",
    season: "October to March",
    vibe: "Big-wave watching, dramatic cliffs, and expert-only conditions",
    tagline: "Best big-wave spectacle",
    description:
      "Nazare is famous for giant waves, but it is mostly a watch-and-respect destination unless you are in the expert big-wave world. It belongs on the map because its ocean energy is unmatched.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
    caption: "Huge Atlantic energy and dramatic cliffside viewing.",
    query: "Nazare Portugal surf",
    map: "Nazare Portugal",
  },
  {
    name: "Bundoran",
    area: "Ireland",
    months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    levels: ["intermediate", "advanced"],
    budget: "medium",
    tropical: false,
    directions: ["left", "right"],
    quality: 4,
    bottom: ["reef", "rock", "sand"],
    wave: "Cold-water reefs and beach breaks with Atlantic power",
    season: "September to April",
    vibe: "Cold water, pubs, green cliffs, and proper North Atlantic grit",
    tagline: "Best Ireland surf town",
    description:
      "Bundoran is Ireland's best-known surf base, with heavy reefs, friendlier beaches nearby, and a full cold-water surf culture around it.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
    caption: "Cold Atlantic lines and a real surf-town scene.",
    query: "Bundoran Ireland surf",
    map: "Bundoran Ireland",
  },
  {
    name: "Thurso",
    area: "Scotland",
    months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    levels: ["advanced"],
    budget: "medium",
    tropical: false,
    directions: ["right"],
    quality: 5,
    bottom: ["reef", "rock"],
    wave: "Cold-water right reef with power and precision",
    season: "September to April",
    vibe: "Remote north coast, thick wetsuits, and serious reef energy",
    tagline: "Best cold-water right",
    description:
      "Thurso East is one of Europe's great cold-water rights. It is a committed surf trip for experienced surfers who are happy with heavy water, cold weather, and remote logistics.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
    caption: "A cold-water right with North Sea consequence.",
    query: "Thurso Scotland surf",
    map: "Thurso Scotland",
  },
  {
    name: "Jeffreys Bay",
    area: "South Africa",
    months: ["May", "Jun", "Jul", "Aug", "Sep"],
    levels: ["intermediate", "advanced"],
    budget: "medium",
    tropical: false,
    directions: ["right"],
    quality: 5,
    bottom: ["reef", "sand"],
    wave: "Long, fast, world-class right point",
    season: "May to September",
    vibe: "Supertubes, long walls, road trips, and South African winter swell",
    tagline: "Best right point in the world",
    description:
      "Jeffreys Bay is one of surfing's defining right-hand points. When it is on, it offers speed, length, and quality that few waves can match.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=86",
    caption: "Long right-hand walls and classic South African surf energy.",
    query: "Jeffreys Bay South Africa surf",
    map: "Jeffreys Bay South Africa",
  },
  {
    name: "Durban",
    area: "South Africa",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left", "right"],
    quality: 3,
    bottom: ["sand"],
    wave: "Warm-water beach breaks and piers with consistent swell",
    season: "April to September",
    vibe: "City surf, warm water, curry, and easy beach logistics",
    tagline: "Best warm South Africa city surf",
    description:
      "Durban is a warm-water city surf base with consistent beach breaks and lots of infrastructure. It is practical, lively, and less remote than South Africa's point-break missions.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=86",
    caption: "Warm city beach breaks with easy daily access.",
    query: "Durban South Africa surf",
    map: "Durban South Africa",
  },
  {
    name: "Skeleton Bay",
    area: "Namibia",
    months: ["May", "Jun", "Jul", "Aug", "Sep"],
    levels: ["advanced"],
    budget: "high",
    tropical: false,
    directions: ["left"],
    quality: 5,
    bottom: ["sand"],
    wave: "Extremely long, fast desert left barrel",
    season: "May to September",
    vibe: "Desert mission, logistics, speed, and serious commitment",
    tagline: "Best desert left barrel",
    description:
      "Skeleton Bay is one of the longest and fastest left barrels on Earth. It is a specialist mission for advanced surfers with the right boards, crew, and timing.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
    caption: "Desert sand, speed, and one of surfing's longest lefts.",
    query: "Skeleton Bay Namibia surf",
    map: "Skeleton Bay Namibia",
  },
  {
    name: "Nosara",
    area: "Costa Rica",
    months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    levels: ["beginner", "intermediate"],
    budget: "high",
    tropical: true,
    directions: ["left", "right"],
    quality: 3,
    bottom: ["sand"],
    wave: "Consistent beach break with friendly peaks",
    season: "November to August",
    vibe: "Jungle mornings, yoga studios, barefoot cafes, and steady reps",
    tagline: "Best tropical progression trip",
    description:
      "Nosara, especially Playa Guiones, is ideal when you want tropical consistency without a heavy reef learning curve. It is polished, comfortable, and very wave-count friendly.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
    caption: "Soft sand, jungle edges, and steady tropical peaks.",
    query: "Nosara Costa Rica surf",
    map: "Nosara Costa Rica",
  },
  {
    name: "Santa Teresa",
    area: "Costa Rica",
    months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "high",
    tropical: true,
    directions: ["left", "right"],
    quality: 4,
    bottom: ["sand", "rock"],
    wave: "Powerful tropical beach breaks with lots of peaks",
    season: "November to August",
    vibe: "Jungle roads, sunset sessions, cafes, and polished surf-town life",
    tagline: "Best stylish Costa Rica base",
    description:
      "Santa Teresa is a high-energy surf town with consistent beach-break peaks and a polished travel scene. It is great if you want surf, food, nightlife, and warm water together.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=86",
    caption: "Tropical beach peaks and a lively jungle-town base.",
    query: "Santa Teresa Costa Rica surf",
    map: "Santa Teresa Costa Rica",
  },
  {
    name: "Pavones",
    area: "Costa Rica",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left"],
    quality: 5,
    bottom: ["rock", "sand"],
    wave: "Very long tropical left point",
    season: "April to October",
    vibe: "Remote jungle, patience, long rides, and southern Costa Rica quiet",
    tagline: "Best Costa Rica left",
    description:
      "Pavones is a legendary long left that rewards timing and patience. It is more remote than the northern surf towns, but the payoff can be huge when swell lines up.",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=86",
    caption: "Long tropical lefts and a remote jungle feeling.",
    query: "Pavones Costa Rica surf",
    map: "Pavones Costa Rica",
  },
  {
    name: "Montanita",
    area: "Ecuador",
    months: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "low",
    tropical: true,
    directions: ["right"],
    quality: 3,
    bottom: ["sand", "rock"],
    wave: "Warm-water point and beach waves close to town",
    season: "December to May",
    vibe: "Backpacker town, nightlife, warm water, and low-budget surf",
    tagline: "Best Ecuador surf town",
    description:
      "Montanita is Ecuador's best-known surf town, combining warm water, a party scene, and a right point that can be very fun when the swell is right.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
    caption: "A social warm-water point with low-budget travel energy.",
    query: "Montanita Ecuador surf",
    map: "Montanita Ecuador",
  },
  {
    name: "Chicama",
    area: "Peru",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "medium",
    tropical: false,
    directions: ["left"],
    quality: 5,
    bottom: ["sand", "rock"],
    wave: "Extremely long left point with multiple sections",
    season: "April to October",
    vibe: "Desert coast, leg-burning rides, and point-break repetition",
    tagline: "Best longest left",
    description:
      "Chicama is famous for very long lefts that can connect for absurd distances. It is not the punchiest wave, but it is one of the best places to work on line and flow.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
    caption: "Desert coast and lefts long enough to reset your legs.",
    query: "Chicama Peru surf",
    map: "Chicama Peru",
  },
  {
    name: "Punta de Lobos",
    area: "Chile",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    levels: ["intermediate", "advanced"],
    budget: "medium",
    tropical: false,
    directions: ["left"],
    quality: 5,
    bottom: ["rock", "sand"],
    wave: "Powerful cold-water left point with big-wave potential",
    season: "April to September",
    vibe: "Cold Pacific cliffs, dramatic sunsets, and serious Chilean lines",
    tagline: "Best Chilean left",
    description:
      "Punta de Lobos is Chile's defining surf zone, a powerful left point with scale, beauty, and consistency. It is best for experienced surfers comfortable in cold, powerful water.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=86",
    caption: "Cold-water lefts under dramatic Chilean cliffs.",
    query: "Punta de Lobos Chile surf",
    map: "Punta de Lobos Chile",
  },
  {
    name: "Rincon",
    area: "Puerto Rico",
    months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left", "right"],
    quality: 4,
    bottom: ["reef", "sand"],
    wave: "Warm-water reefs and points with winter swell",
    season: "November to April",
    vibe: "Caribbean water, easy logistics, sunsets, and reef variety",
    tagline: "Best Caribbean surf base",
    description:
      "Rincon is one of the Caribbean's classic surf towns, with winter swell, warm water, and enough variety for different levels when conditions are chosen carefully.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=86",
    caption: "Caribbean reef waves and easy sunset sessions.",
    query: "Rincon Puerto Rico surf",
    map: "Rincon Puerto Rico",
  },
  {
    name: "Soup Bowl",
    area: "Barbados",
    months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    levels: ["intermediate", "advanced"],
    budget: "high",
    tropical: true,
    directions: ["right"],
    quality: 5,
    bottom: ["reef"],
    wave: "Powerful right reef with Caribbean punch",
    season: "November to April",
    vibe: "Warm water, island rhythm, and one of the Atlantic's best rights",
    tagline: "Best Caribbean right",
    description:
      "Soup Bowl is Barbados' marquee wave, a powerful right reef that can get serious. It is a high-quality warm-water option for confident surfers.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=86",
    caption: "A punchy Caribbean right with warm-water appeal.",
    query: "Soup Bowl Barbados surf",
    map: "Bathsheba Barbados",
  },
  {
    name: "Bocas del Toro",
    area: "Panama",
    months: ["Dec", "Jan", "Feb", "Mar", "Jun", "Jul"],
    levels: ["intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left", "right"],
    quality: 4,
    bottom: ["reef", "sand"],
    wave: "Caribbean reef breaks and punchy tropical setups",
    season: "December to March and June to July",
    vibe: "Island hopping, warm water, reef setups, and tropical nightlife",
    tagline: "Best Panama island surf",
    description:
      "Bocas del Toro is a tropical reef playground with short seasonal windows and high upside. It works best for surfers who can handle reef and want a social island base.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=86",
    caption: "Island-hopping logistics and punchy Caribbean reefs.",
    query: "Bocas del Toro Panama surf",
    map: "Bocas del Toro Panama",
  },
  {
    name: "Raglan",
    area: "New Zealand",
    months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "high",
    tropical: false,
    directions: ["left"],
    quality: 5,
    bottom: ["rock", "sand"],
    wave: "Long left points with multiple sections",
    season: "March to September",
    vibe: "Green hills, long lefts, coffee, and classic Kiwi surf culture",
    tagline: "Best New Zealand left",
    description:
      "Raglan is New Zealand's iconic left-point zone, with long rides and multiple setups. It is beautiful, consistent enough, and one of the best regular-foot training grounds anywhere.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
    caption: "Green hills and long lefts with classic Kiwi character.",
    query: "Raglan New Zealand surf",
    map: "Raglan New Zealand",
  },
  {
    name: "Gold Coast",
    area: "Australia",
    months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "high",
    tropical: false,
    directions: ["right"],
    quality: 5,
    bottom: ["sand", "rock"],
    wave: "World-class right points and beach breaks",
    season: "February to August",
    vibe: "Point-break culture, high performance surfing, and easy city logistics",
    tagline: "Best Australia point cluster",
    description:
      "The Gold Coast has some of Australia's most famous right-hand points, including Snapper Rocks and Kirra. It is crowded, but the wave quality can be exceptional.",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
    caption: "Right points, sand flow, and high-performance surf culture.",
    query: "Gold Coast Australia surf Snapper Kirra",
    map: "Snapper Rocks Gold Coast Australia",
  },
  {
    name: "Margaret River",
    area: "Western Australia",
    months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["intermediate", "advanced"],
    budget: "high",
    tropical: false,
    directions: ["left", "right"],
    quality: 5,
    bottom: ["reef", "rock"],
    wave: "Powerful Indian Ocean reefs with serious size",
    season: "March to October",
    vibe: "Wine country, raw reefs, big water, and heavy-weather surf checks",
    tagline: "Best powerful WA base",
    description:
      "Margaret River is a world-class cold-ish water power zone with heavy reefs and huge swell exposure. It is best for surfers who like size, power, and rugged coastline.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
    caption: "Raw reef power and a rugged Western Australia coastline.",
    query: "Margaret River Australia surf",
    map: "Margaret River Western Australia",
  },
  {
    name: "Cloudbreak",
    area: "Fiji",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["advanced"],
    budget: "high",
    tropical: true,
    directions: ["left"],
    quality: 5,
    bottom: ["reef"],
    wave: "World-class left reef with power, tubes, and open faces",
    season: "April to October",
    vibe: "Boat access, blue water, reef focus, and dream-trip stakes",
    tagline: "Best South Pacific reef",
    description:
      "Cloudbreak is one of the world's benchmark left reefs. It is expensive and serious, but for advanced surfers it belongs near the top of any dream surf-trip list.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=86",
    caption: "Blue-water reef power and South Pacific perfection.",
    query: "Cloudbreak Fiji surf",
    map: "Cloudbreak Fiji",
  },
  {
    name: "Teahupoo",
    area: "Tahiti",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["advanced"],
    budget: "high",
    tropical: true,
    directions: ["left"],
    quality: 5,
    bottom: ["reef"],
    wave: "Heavy left reef barrel with extreme consequence",
    season: "April to October",
    vibe: "Lagoon beauty, heavy water, and one of surfing's most serious waves",
    tagline: "Best heavy left reef",
    description:
      "Teahupoo is one of the most famous and dangerous waves on Earth. It is included for completeness, but it is only for elite-level surfers when it has real size.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=86",
    caption: "A beautiful lagoon setting with extremely serious reef power.",
    query: "Teahupoo Tahiti surf",
    map: "Teahupoo Tahiti",
  },
  {
    name: "Siargao",
    area: "Philippines",
    months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left", "right"],
    quality: 4,
    bottom: ["reef", "sand"],
    wave: "Tropical reefs, Cloud 9 barrels, and beginner-friendly islands nearby",
    season: "September to March",
    vibe: "Island scooters, lagoons, warm water, and a social surf scene",
    tagline: "Best Philippines surf island",
    description:
      "Siargao blends a lively island scene with real reef quality, especially around Cloud 9. It also has softer options nearby, making it one of Asia's best mixed-level surf trips.",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=86",
    caption: "Warm reefs, island roads, and a social tropical surf scene.",
    query: "Siargao Philippines surf",
    map: "Siargao Philippines",
  },
];

destinations.push(
  ...[
    {
      name: "North Shore Oahu",
      area: "Hawaii",
      months: ["Nov", "Dec", "Jan", "Feb", "Mar"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left", "right"],
      quality: 5,
      bottom: ["reef", "sand"],
      wavePower: "chargers only",
      crowdFactor: "Very high",
      waterTemp: "Warm, usually 24-27C",
      wave: "Pipeline, Sunset, Waimea, and world-class winter reefs",
      season: "November to March",
      vibe: "Heavy-water culture, legendary lineups, and serious winter energy",
      tagline: "Best proving ground",
      description:
        "The North Shore of Oahu is surfing's most famous winter arena. It has world-class waves, real danger, and crowds that make respect and patience part of the trip.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=86",
      caption: "Legendary Hawaiian winter reefs with serious consequence.",
      query: "North Shore Oahu Hawaii surf waves",
      map: "North Shore Oahu Hawaii",
    },
    {
      name: "Waikiki",
      area: "Oahu, Hawaii",
      months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["beginner", "intermediate"],
      budget: "high",
      tropical: true,
      directions: ["left", "right"],
      quality: 3,
      bottom: ["reef", "sand"],
      wavePower: "mellow",
      crowdFactor: "Very high",
      waterTemp: "Warm, usually 24-27C",
      wave: "Soft longboard waves and classic beginner-friendly rollers",
      season: "May to October",
      vibe: "Longboards, city beach energy, warm water, and history",
      tagline: "Best classic beginner wave",
      description:
        "Waikiki is crowded and urban, but it is one of the most iconic places to learn or longboard. It is mellow, warm, and deeply connected to surfing history.",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
      caption: "Soft Hawaiian rollers with city lights behind them.",
      query: "Waikiki Hawaii surf waves",
      map: "Waikiki Beach Hawaii",
    },
    {
      name: "Makaha",
      area: "Oahu, Hawaii",
      months: ["Nov", "Dec", "Jan", "Feb", "Mar"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["right"],
      quality: 4,
      bottom: ["reef", "sand"],
      wavePower: "chargers only",
      crowdFactor: "Medium to high",
      waterTemp: "Warm, usually 24-27C",
      wave: "Powerful west-side right with long walls and big-wave days",
      season: "November to March",
      vibe: "Old-school Hawaiian surf culture and powerful winter swell",
      tagline: "Best west-side Oahu classic",
      description:
        "Makaha is a historic Hawaiian right with scale and power. It can be beautiful on manageable days and very serious when winter swell fills in.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
      caption: "A powerful Hawaiian right with deep local history.",
      query: "Makaha Oahu Hawaii surf waves",
      map: "Makaha Oahu Hawaii",
    },
    {
      name: "Ala Moana Bowls",
      area: "Oahu, Hawaii",
      months: ["May", "Jun", "Jul", "Aug", "Sep"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left"],
      quality: 4,
      bottom: ["reef"],
      wavePower: "decent",
      crowdFactor: "Very high",
      waterTemp: "Warm, usually 24-27C",
      wave: "Fast south-shore left reef with barrel sections",
      season: "May to September",
      vibe: "Town surf, sharp reef, strong locals, and summer south swell",
      tagline: "Best Honolulu left",
      description:
        "Ala Moana Bowls is one of Honolulu's best summer waves. It is high-quality and convenient, but the crowd and reef mean it is not a casual beginner spot.",
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=86",
      caption: "A fast town left over reef on south swell.",
      query: "Ala Moana Bowls Hawaii surf waves",
      map: "Ala Moana Bowls Hawaii",
    },
    {
      name: "Honolua Bay",
      area: "Maui, Hawaii",
      months: ["Nov", "Dec", "Jan", "Feb", "Mar"],
      levels: ["advanced"],
      budget: "high",
      tropical: true,
      directions: ["right"],
      quality: 5,
      bottom: ["reef", "rock"],
      wavePower: "chargers only",
      crowdFactor: "Very high when good",
      waterTemp: "Warm, usually 24-27C",
      wave: "World-class right reef with tubes and long walls",
      season: "November to March",
      vibe: "Beautiful bay, winter swell, expert crowd, and reef precision",
      tagline: "Best Maui right",
      description:
        "Honolua Bay is Maui's marquee wave, a beautiful right reef that can be world class. It is crowded and advanced, but the quality ceiling is enormous.",
      image:
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=86",
      caption: "A flawless Maui right wrapping through a clear-water bay.",
      query: "Honolua Bay Maui surf waves",
      map: "Honolua Bay Maui Hawaii",
    },
    {
      name: "Hookipa",
      area: "Maui, Hawaii",
      months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left", "right"],
      quality: 4,
      bottom: ["reef", "rock"],
      wavePower: "decent",
      crowdFactor: "High",
      waterTemp: "Warm, usually 24-27C",
      wave: "Wind-exposed reef peaks with strong surf and wind sport culture",
      season: "October to April",
      vibe: "Trade winds, reef peaks, turtles, and North Shore Maui energy",
      tagline: "Best Maui daily driver",
      description:
        "Hookipa is a consistent Maui north-shore zone with multiple peaks and plenty of wind. It is less perfect than Honolua but much more frequent.",
      image:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=86",
      caption: "Windy Maui reef peaks with constant ocean energy.",
      query: "Hookipa Maui surf waves",
      map: "Hookipa Maui Hawaii",
    },
    {
      name: "Hanalei Bay",
      area: "Kauai, Hawaii",
      months: ["Nov", "Dec", "Jan", "Feb", "Mar"],
      levels: ["beginner", "intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left", "right"],
      quality: 4,
      bottom: ["sand", "reef"],
      wavePower: "decent",
      crowdFactor: "Medium to high",
      waterTemp: "Warm, usually 24-27C",
      wave: "Beautiful bay with beginner inside waves and serious outer reef days",
      season: "November to March",
      vibe: "Green mountains, rainbows, warm water, and Kauai calm",
      tagline: "Best scenic Hawaii bay",
      description:
        "Hanalei Bay is one of Hawaii's most beautiful surf settings, with mellow inside options and serious surf on bigger winter days.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
      caption: "Kauai mountains, warm water, and a bay full of options.",
      query: "Hanalei Bay Kauai surf waves",
      map: "Hanalei Bay Kauai Hawaii",
    },
    {
      name: "Banyans",
      area: "Big Island, Hawaii",
      months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left", "right"],
      quality: 3,
      bottom: ["reef", "rock"],
      wavePower: "decent",
      crowdFactor: "Medium",
      waterTemp: "Warm, usually 24-27C",
      wave: "Consistent reef peaks on the Kona side",
      season: "November to April",
      vibe: "Lava coastline, local lineups, warm water, and Kona sunsets",
      tagline: "Best Big Island base",
      description:
        "Banyans is one of the Big Island's better-known surf spots, offering consistent reef waves and a more local, less resort-heavy Hawaiian surf feel.",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=86",
      caption: "Lava-rock coastline and warm Kona reef peaks.",
      query: "Banyans Big Island Hawaii surf waves",
      map: "Banyans Big Island Hawaii",
    },
    {
      name: "Papara",
      area: "Tahiti",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["beginner", "intermediate"],
      budget: "high",
      tropical: true,
      directions: ["left", "right"],
      quality: 3,
      bottom: ["sand"],
      wavePower: "mellow",
      crowdFactor: "Medium",
      waterTemp: "Tropical, usually 26-29C",
      wave: "Black-sand beach break with more forgiving Tahiti energy",
      season: "April to October",
      vibe: "Tahiti scenery, black sand, warm water, and easier sessions",
      tagline: "Best mellow Tahiti option",
      description:
        "Papara is a much more approachable Tahiti surf option than the island's famous heavy reefs. It works for surfers who want the island without the Teahupoo consequence.",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
      caption: "Black sand and warm Tahitian beach-break energy.",
      query: "Papara Tahiti surf waves",
      map: "Papara Tahiti",
    },
    {
      name: "Taapuna",
      area: "Tahiti",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left"],
      quality: 4,
      bottom: ["reef"],
      wavePower: "decent",
      crowdFactor: "Medium to high",
      waterTemp: "Tropical, usually 26-29C",
      wave: "Left reef near Papeete with quality walls and tubes",
      season: "April to October",
      vibe: "Town access, clear lagoon water, and reef-line precision",
      tagline: "Best Tahiti town reef",
      description:
        "Taapuna is a high-quality Tahiti left that is more accessible than the far-end heavy reefs but still demands reef confidence and line-up awareness.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
      caption: "Clear-water Tahiti reef with left-hand walls.",
      query: "Taapuna Tahiti surf waves",
      map: "Taapuna Tahiti",
    },
    {
      name: "Haapiti",
      area: "Moorea, French Polynesia",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left"],
      quality: 4,
      bottom: ["reef"],
      wavePower: "decent",
      crowdFactor: "Medium",
      waterTemp: "Tropical, usually 26-29C",
      wave: "Beautiful left reef accessed by boat",
      season: "April to October",
      vibe: "Moorea mountains, lagoon colors, boat rides, and reef walls",
      tagline: "Best Moorea reef",
      description:
        "Haapiti is a scenic Moorea left with serious beauty and real reef quality. It is a strong French Polynesia pick for experienced surfers who want a softer pace than Tahiti.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=86",
      caption: "Moorea lagoon colors and a clean left reef line.",
      query: "Haapiti Moorea surf waves",
      map: "Haapiti Moorea French Polynesia",
    },
    {
      name: "Restaurants",
      area: "Tavarua, Fiji",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["advanced"],
      budget: "high",
      tropical: true,
      directions: ["left"],
      quality: 5,
      bottom: ["reef"],
      wavePower: "chargers only",
      crowdFactor: "Medium, boat-access crowd",
      waterTemp: "Tropical, usually 26-29C",
      wave: "Perfect left reef with tube sections beside Tavarua",
      season: "April to October",
      vibe: "Resort boats, reef passes, blue water, and dream-trip quality",
      tagline: "Best Fiji perfection",
      description:
        "Restaurants is one of Fiji's most perfect lefts when conditions line up. It is reefy, expensive to access, and very high quality.",
      image:
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=86",
      caption: "Blue-water Fiji reef with near-perfect left sections.",
      query: "Restaurants Tavarua Fiji surf waves",
      map: "Restaurants Tavarua Fiji",
    },
    {
      name: "Frigates Passage",
      area: "Fiji",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left"],
      quality: 5,
      bottom: ["reef"],
      wavePower: "chargers only",
      crowdFactor: "Low to medium",
      waterTemp: "Tropical, usually 26-29C",
      wave: "Open-ocean left reef with size and room to move",
      season: "April to October",
      vibe: "Long boat rides, open ocean, and powerful South Pacific swell",
      tagline: "Best remote Fiji reef",
      description:
        "Frigates is a powerful Fiji left that catches serious swell and sits farther offshore. It is less convenient than Cloudbreak but can be incredible.",
      image:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=86",
      caption: "Open-ocean Fiji reef with power and space.",
      query: "Frigates Passage Fiji surf waves",
      map: "Frigates Passage Fiji",
    },
    {
      name: "Namotu Lefts",
      area: "Fiji",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left"],
      quality: 4,
      bottom: ["reef"],
      wavePower: "decent",
      crowdFactor: "Medium",
      waterTemp: "Tropical, usually 26-29C",
      wave: "Fun left reef near Namotu with high-quality walls",
      season: "April to October",
      vibe: "Island resort logistics, warm water, and playful reef lines",
      tagline: "Best playful Fiji left",
      description:
        "Namotu Lefts is often more approachable than Fiji's heaviest reefs while still offering excellent quality. It is a strong intermediate-advanced reef trip wave.",
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=86",
      caption: "A warm-water Fiji left with playful reef sections.",
      query: "Namotu Lefts Fiji surf waves",
      map: "Namotu Fiji",
    },
    {
      name: "Natadola",
      area: "Fiji",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["beginner", "intermediate"],
      budget: "high",
      tropical: true,
      directions: ["left", "right"],
      quality: 2,
      bottom: ["sand", "reef"],
      wavePower: "mellow",
      crowdFactor: "Low to medium",
      waterTemp: "Tropical, usually 26-29C",
      wave: "Beach and reef options with a more forgiving feel",
      season: "April to October",
      vibe: "Resort beach, warm water, and softer Fiji sessions",
      tagline: "Best gentle Fiji option",
      description:
        "Natadola is not Fiji's dream reef, but it is a useful easier option for travelers who want warm water and less intimidating waves.",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
      caption: "A gentler Fiji beach setup with warm water.",
      query: "Natadola Fiji surf waves",
      map: "Natadola Fiji",
    },
    {
      name: "Sigatoka",
      area: "Fiji",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["beginner", "intermediate"],
      budget: "medium",
      tropical: true,
      directions: ["left", "right"],
      quality: 2,
      bottom: ["sand"],
      wavePower: "mellow",
      crowdFactor: "Low",
      waterTemp: "Tropical, usually 26-29C",
      wave: "River-mouth and beach-break options with softer access",
      season: "April to October",
      vibe: "Local town, sandy setups, and a lower-key Fiji surf option",
      tagline: "Best budget Fiji base",
      description:
        "Sigatoka is a simpler Fiji option with sandy waves and easier access than the famous offshore reefs. It is best for relaxed or budget-conscious surf travelers.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
      caption: "Sandy Fiji options away from the resort-reef circuit.",
      query: "Sigatoka Fiji surf waves",
      map: "Sigatoka Fiji",
    },
    {
      name: "Piha",
      area: "New Zealand",
      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: false,
      directions: ["left", "right"],
      quality: 4,
      bottom: ["sand", "rock"],
      wavePower: "decent",
      crowdFactor: "Medium",
      waterTemp: "Cool, usually 13-19C",
      wave: "Powerful black-sand beach break with dramatic cliffs",
      season: "March to September",
      vibe: "Wild west coast, black sand, Auckland access, and heavy peaks",
      tagline: "Best Auckland power beach",
      description:
        "Piha is New Zealand's most famous west-coast beach break, close to Auckland but raw and powerful. It suits surfers comfortable in shifting, punchy beach-break surf.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
      caption: "Black sand, cliffs, and powerful west-coast peaks.",
      query: "Piha New Zealand surf waves",
      map: "Piha New Zealand",
    },
    {
      name: "Taranaki Surf Highway",
      area: "New Zealand",
      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      levels: ["beginner", "intermediate", "advanced"],
      budget: "high",
      tropical: false,
      directions: ["left", "right"],
      quality: 4,
      bottom: ["rock", "sand"],
      wavePower: "decent",
      crowdFactor: "Low to medium",
      waterTemp: "Cool, usually 12-18C",
      wave: "Point breaks, reefs, and beaches around a volcanic coastline",
      season: "March to September",
      vibe: "Road-trip surf checks, Mount Taranaki views, and wave variety",
      tagline: "Best NZ road trip",
      description:
        "Taranaki's Surf Highway wraps around a wave-rich coastline with points, reefs, and beaches. It is one of New Zealand's best areas for a surf road trip.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=86",
      caption: "Volcanic coastline and a road full of surf checks.",
      query: "Taranaki Surf Highway New Zealand waves",
      map: "Surf Highway Taranaki New Zealand",
    },
    {
      name: "Gisborne",
      area: "New Zealand",
      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["beginner", "intermediate", "advanced"],
      budget: "medium",
      tropical: false,
      directions: ["left", "right"],
      quality: 3,
      bottom: ["sand", "reef"],
      wavePower: "decent",
      crowdFactor: "Low to medium",
      waterTemp: "Cool to mild, usually 14-20C",
      wave: "Beach breaks and reef setups with lots of exposure",
      season: "March to October",
      vibe: "East-coast sun, mellow town energy, and varied surf options",
      tagline: "Best NZ east coast",
      description:
        "Gisborne has a relaxed east-coast feel and a range of beaches and reefs. It is a good New Zealand choice for variety without the intensity of the west coast.",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=86",
      caption: "Sunny east-coast New Zealand with mellow surf variety.",
      query: "Gisborne New Zealand surf waves",
      map: "Gisborne New Zealand",
    },
    {
      name: "Kaikoura",
      area: "New Zealand",
      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: false,
      directions: ["left", "right"],
      quality: 4,
      bottom: ["rock", "reef"],
      wavePower: "decent",
      crowdFactor: "Low to medium",
      waterTemp: "Cold to cool, usually 10-16C",
      wave: "Cold-water points and reef waves below mountain scenery",
      season: "March to September",
      vibe: "Mountains, wildlife, cold water, and dramatic point-break sessions",
      tagline: "Best scenic NZ points",
      description:
        "Kaikoura offers some of New Zealand's most dramatic surf scenery, with rocky points, cold water, and mountain backdrops. It is beautiful and rugged.",
      image:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=86",
      caption: "Cold-water points under a mountain coastline.",
      query: "Kaikoura New Zealand surf waves",
      map: "Kaikoura New Zealand",
    },
    {
      name: "St Clair / Dunedin",
      area: "New Zealand",
      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      levels: ["beginner", "intermediate", "advanced"],
      budget: "medium",
      tropical: false,
      directions: ["left", "right"],
      quality: 3,
      bottom: ["sand"],
      wavePower: "decent",
      crowdFactor: "Medium",
      waterTemp: "Cold, usually 8-14C",
      wave: "Cold-water beach breaks with city access",
      season: "March to September",
      vibe: "Student city, cold water, seals, and southern-ocean surf",
      tagline: "Best southern NZ base",
      description:
        "St Clair gives Dunedin a practical surf base with cold-water consistency and city comforts. It is not tropical, and that is exactly the character.",
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=86",
      caption: "Cold southern beach-break surf with city access.",
      query: "St Clair Dunedin New Zealand surf waves",
      map: "St Clair Dunedin New Zealand",
    },
    {
      name: "Mount Maunganui",
      area: "New Zealand",
      months: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
      levels: ["beginner", "intermediate"],
      budget: "high",
      tropical: false,
      directions: ["left", "right"],
      quality: 2,
      bottom: ["sand"],
      wavePower: "mellow",
      crowdFactor: "High in summer",
      waterTemp: "Mild, usually 16-21C",
      wave: "Friendly beach breaks near a polished beach town",
      season: "December to May",
      vibe: "Summer town, cafes, easy beach days, and gentle progression surf",
      tagline: "Best relaxed NZ beach town",
      description:
        "Mount Maunganui is more lifestyle than hardcore surf mission, but it works well for relaxed trips, beginner-friendly beach breaks, and a polished town base.",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
      caption: "A polished beach town with soft New Zealand peaks.",
      query: "Mount Maunganui New Zealand surf waves",
      map: "Mount Maunganui New Zealand",
    },
    {
      name: "Lobitos",
      area: "Peru",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "medium",
      tropical: false,
      directions: ["left"],
      quality: 4,
      bottom: ["sand", "rock"],
      wavePower: "decent",
      crowdFactor: "Medium",
      waterTemp: "Cool, usually 17-22C",
      wave: "Long left points and desert-coast wind texture",
      season: "April to October",
      vibe: "Desert oil-town ruins, left points, and low-key surf camps",
      tagline: "Best Peru left-point base",
      description:
        "Lobitos is a northern Peru left-point base with several waves nearby. It has a desert feel, consistent swell, and lots of room for turns when the wind behaves.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
      caption: "Desert coast and long left points in northern Peru.",
      query: "Lobitos Peru surf waves",
      map: "Lobitos Peru",
    },
    {
      name: "Mancora",
      area: "Peru",
      months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      levels: ["beginner", "intermediate"],
      budget: "low",
      tropical: false,
      directions: ["left"],
      quality: 3,
      bottom: ["sand", "rock"],
      wavePower: "mellow",
      crowdFactor: "Medium to high",
      waterTemp: "Mild to warm, usually 20-25C",
      wave: "Warm-ish left point and beach town waves",
      season: "November to April",
      vibe: "Backpacker town, warm north Peru water, and easy lefts",
      tagline: "Best easy north Peru base",
      description:
        "Mancora is one of Peru's easiest surf-town bases, with warmer water than the south and a friendly left point when swell lines up.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
      caption: "North Peru warmth and a relaxed left-point town.",
      query: "Mancora Peru surf waves",
      map: "Mancora Peru",
    },
    {
      name: "Cabo Blanco",
      area: "Peru",
      months: ["Nov", "Dec", "Jan", "Feb", "Mar"],
      levels: ["advanced"],
      budget: "medium",
      tropical: false,
      directions: ["left"],
      quality: 5,
      bottom: ["reef", "rock"],
      wavePower: "chargers only",
      crowdFactor: "High when good",
      waterTemp: "Mild to warm, usually 20-25C",
      wave: "Fast, hollow left point over reef and rock",
      season: "November to March",
      vibe: "Northern Peru barrel mission, desert heat, and serious lineups",
      tagline: "Best Peru barrel",
      description:
        "Cabo Blanco is one of Peru's best and most serious waves: a fast left barrel that needs swell and skill. It is not a casual stop for beginners.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=86",
      caption: "A fast northern Peru left with barrel potential.",
      query: "Cabo Blanco Peru surf waves",
      map: "Cabo Blanco Peru",
    },
    {
      name: "Punta Hermosa",
      area: "Peru",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["beginner", "intermediate", "advanced"],
      budget: "medium",
      tropical: false,
      directions: ["left", "right"],
      quality: 4,
      bottom: ["reef", "rock", "sand"],
      wavePower: "decent",
      crowdFactor: "Medium to high",
      waterTemp: "Cool, usually 15-20C",
      wave: "Cluster of reef and point waves near Lima",
      season: "April to October",
      vibe: "Lima weekend surf town, consistent swell, and many breaks nearby",
      tagline: "Best Lima surf base",
      description:
        "Punta Hermosa is the most practical surf base near Lima, with lots of waves clustered close together and enough variety for different levels.",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=86",
      caption: "Peruvian reef and point setups close to Lima.",
      query: "Punta Hermosa Peru surf waves",
      map: "Punta Hermosa Peru",
    },
    {
      name: "Pacasmayo",
      area: "Peru",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "medium",
      tropical: false,
      directions: ["left"],
      quality: 4,
      bottom: ["sand", "rock"],
      wavePower: "decent",
      crowdFactor: "Low to medium",
      waterTemp: "Cool, usually 16-21C",
      wave: "Very long left point with wind and distance",
      season: "April to October",
      vibe: "Long rides, desert coast, and less-crowded northern Peru missions",
      tagline: "Best uncrowded long left",
      description:
        "Pacasmayo is another Peru left with huge length potential, often less crowded than the marquee names. It suits surfers who value long walls over tropical water.",
      image:
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=86",
      caption: "Long Peruvian lefts and desert-coast distance.",
      query: "Pacasmayo Peru surf waves",
      map: "Pacasmayo Peru",
    },
    {
      name: "Tamarin Bay",
      area: "Mauritius",
      months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left"],
      quality: 4,
      bottom: ["reef"],
      wavePower: "decent",
      crowdFactor: "Medium to high",
      waterTemp: "Warm, usually 23-28C",
      wave: "Classic left reef in a scenic bay",
      season: "May to October",
      vibe: "Mauritian bay, reef etiquette, warm water, and island travel",
      tagline: "Best classic Mauritius left",
      description:
        "Tamarin Bay is Mauritius' historic surf wave, a left reef with beautiful scenery and strong local character. It is quality, but respect is essential.",
      image:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=86",
      caption: "A classic Mauritian left in a scenic bay.",
      query: "Tamarin Bay Mauritius surf waves",
      map: "Tamarin Bay Mauritius",
    },
    {
      name: "One Eye / Le Morne",
      area: "Mauritius",
      months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["advanced"],
      budget: "high",
      tropical: true,
      directions: ["left"],
      quality: 5,
      bottom: ["reef"],
      wavePower: "chargers only",
      crowdFactor: "High when good",
      waterTemp: "Warm, usually 23-28C",
      wave: "Fast, hollow left reef with serious consequence",
      season: "May to October",
      vibe: "Lagoon beauty, sharp reef, wind, and expert-level lefts",
      tagline: "Best Mauritius barrel",
      description:
        "One Eye is Mauritius' heavy left reef, famous for speed and consequence. It is a world-class wave for advanced surfers, not a casual island session.",
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=86",
      caption: "A fast Mauritian left over shallow reef.",
      query: "One Eye Le Morne Mauritius surf waves",
      map: "Le Morne Mauritius",
    },
    {
      name: "Black Rocks",
      area: "Mauritius",
      months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left", "right"],
      quality: 3,
      bottom: ["reef", "rock"],
      wavePower: "decent",
      crowdFactor: "Medium",
      waterTemp: "Warm, usually 23-28C",
      wave: "Reef waves with a less famous but useful Mauritius setup",
      season: "May to October",
      vibe: "Island reef checks, warm water, and alternatives to marquee waves",
      tagline: "Best Mauritius backup",
      description:
        "Black Rocks gives Mauritius another reef option when the famous waves are too crowded or not quite right. It is still reef surfing, so experience matters.",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
      caption: "Warm-water reef alternatives on Mauritius.",
      query: "Black Rocks Mauritius surf waves",
      map: "Black Rocks Mauritius",
    },
    {
      name: "Bells Beach",
      area: "Victoria, Australia",
      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: false,
      directions: ["right"],
      quality: 5,
      bottom: ["reef", "rock"],
      wavePower: "decent",
      crowdFactor: "High",
      waterTemp: "Cold to cool, usually 12-18C",
      wave: "Iconic right reef with long carve sections",
      season: "March to September",
      vibe: "Australian surf history, cold water, cliffs, and open-face turns",
      tagline: "Best classic Aussie right",
      description:
        "Bells Beach is one of Australia's most iconic waves, more about power carves and history than tropical perfection. It is cold, exposed, and deeply classic.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
      caption: "Cold-water Australian right walls under ochre cliffs.",
      query: "Bells Beach Australia surf waves",
      map: "Bells Beach Victoria Australia",
    },
    {
      name: "Noosa",
      area: "Queensland, Australia",
      months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      levels: ["beginner", "intermediate"],
      budget: "high",
      tropical: false,
      directions: ["right"],
      quality: 4,
      bottom: ["sand", "rock"],
      wavePower: "mellow",
      crowdFactor: "Very high",
      waterTemp: "Warm, usually 21-27C",
      wave: "Long, gentle right points perfect for logs and flow",
      season: "February to July",
      vibe: "National park points, longboards, warm water, and polished town life",
      tagline: "Best longboard point cluster",
      description:
        "Noosa is crowded, but the quality of its gentle right points makes it one of the world's best longboard and progression destinations.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
      caption: "Long right-hand runners through a polished beach town.",
      query: "Noosa Australia surf waves",
      map: "Noosa Heads Queensland Australia",
    },
    {
      name: "Cactus Beach",
      area: "South Australia",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["advanced"],
      budget: "medium",
      tropical: false,
      directions: ["left", "right"],
      quality: 5,
      bottom: ["reef", "rock"],
      wavePower: "chargers only",
      crowdFactor: "Low to medium",
      waterTemp: "Cold to cool, usually 13-19C",
      wave: "Remote desert reefs with serious power",
      season: "April to October",
      vibe: "Camping, isolation, sharks, cold water, and raw reef energy",
      tagline: "Best desert reef mission",
      description:
        "Cactus is a remote South Australian surf zone with powerful reef waves and minimal comforts. It is a true mission, not a resort surf trip.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=86",
      caption: "Remote southern desert reefs with raw power.",
      query: "Cactus Beach South Australia surf waves",
      map: "Cactus Beach South Australia",
    },
    {
      name: "Shipstern Bluff",
      area: "Tasmania, Australia",
      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      levels: ["advanced"],
      budget: "high",
      tropical: false,
      directions: ["right"],
      quality: 5,
      bottom: ["reef", "rock"],
      wavePower: "chargers only",
      crowdFactor: "Low in water, expert-only",
      waterTemp: "Cold, usually 10-15C",
      wave: "Mutant cold-water slab with extreme consequence",
      season: "March to September",
      vibe: "Boats, cliffs, cold water, slabs, and elite-level commitment",
      tagline: "Best slab spectacle",
      description:
        "Shipstern Bluff is one of the world's most intimidating waves. It is included as a world-class surf area, but realistically it is for elite slab surfers only.",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=86",
      caption: "A cold-water slab below wild Tasmanian cliffs.",
      query: "Shipstern Bluff Tasmania surf waves",
      map: "Shipstern Bluff Tasmania",
    },
    {
      name: "Nias",
      area: "Indonesia",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "medium",
      tropical: true,
      directions: ["right"],
      quality: 5,
      bottom: ["reef"],
      wavePower: "chargers only",
      crowdFactor: "Medium to high",
      waterTemp: "Tropical, usually 27-30C",
      wave: "World-class right reef with barrels and long walls",
      season: "April to October",
      vibe: "Lagundri Bay, warm water, reef focus, and classic Indonesia quality",
      tagline: "Best Indonesian right",
      description:
        "Nias is one of Indonesia's great right-hand reefs, offering barrels, walls, and reliable Indian Ocean swell in a focused surf village setting.",
      image:
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=86",
      caption: "A classic Indonesian right over tropical reef.",
      query: "Nias Lagundri Bay Indonesia surf waves",
      map: "Lagundri Bay Nias Indonesia",
    },
    {
      name: "Desert Point",
      area: "Lombok, Indonesia",
      months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["advanced"],
      budget: "medium",
      tropical: true,
      directions: ["left"],
      quality: 5,
      bottom: ["reef"],
      wavePower: "chargers only",
      crowdFactor: "High when good",
      waterTemp: "Warm, usually 26-29C",
      wave: "Long, hollow left reef with high consequence",
      season: "May to October",
      vibe: "Remote Lombok mission, shallow reef, and barrel obsession",
      tagline: "Best Lombok barrel",
      description:
        "Desert Point is one of Indonesia's most famous left barrels. It can be fickle, crowded, and shallow, but when it works the quality is elite.",
      image:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=86",
      caption: "A long Indonesian left barrel over shallow reef.",
      query: "Desert Point Lombok surf waves",
      map: "Desert Point Lombok Indonesia",
    },
    {
      name: "Lakey Peak",
      area: "Sumbawa, Indonesia",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "medium",
      tropical: true,
      directions: ["left", "right"],
      quality: 4,
      bottom: ["reef"],
      wavePower: "decent",
      crowdFactor: "Medium to high",
      waterTemp: "Warm, usually 26-29C",
      wave: "A-frame reef with lefts, rights, and air sections",
      season: "April to October",
      vibe: "Sumbawa surf village, reef variety, and consistent wind patterns",
      tagline: "Best Sumbawa A-frame",
      description:
        "Lakey Peak is a classic Sumbawa setup with both lefts and rights, plus nearby options. It is a strong choice for surfers wanting Indonesian variety.",
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=86",
      caption: "A tropical reef A-frame with left and right options.",
      query: "Lakey Peak Sumbawa surf waves",
      map: "Lakey Peak Sumbawa Indonesia",
    },
    {
      name: "Nemberala",
      area: "Rote, Indonesia",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "medium",
      tropical: true,
      directions: ["left"],
      quality: 4,
      bottom: ["reef"],
      wavePower: "decent",
      crowdFactor: "Low to medium",
      waterTemp: "Warm, usually 26-29C",
      wave: "Long left reef with trade-wind texture and island quiet",
      season: "April to October",
      vibe: "Remote Indonesia, slower pace, reef passes, and long lefts",
      tagline: "Best quiet Indonesia left",
      description:
        "Nemberala on Rote is a quieter Indonesian left reef option with long rides and fewer distractions than Bali or the Mentawai.",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
      caption: "A remote Indonesian left with warm water and slower days.",
      query: "Nemberala Rote Indonesia surf waves",
      map: "Nemberala Rote Indonesia",
    },
    {
      name: "Nihiwatu / Sumba",
      area: "Indonesia",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left"],
      quality: 5,
      bottom: ["reef"],
      wavePower: "decent",
      crowdFactor: "Low, access-limited",
      waterTemp: "Warm, usually 26-29C",
      wave: "High-quality left reef in a remote luxury setting",
      season: "April to October",
      vibe: "Remote island beauty, limited access, and premium surf logistics",
      tagline: "Best luxury Indonesia reef",
      description:
        "Nihiwatu is famous for a high-quality left and tightly controlled access. It is not budget-friendly, but it delivers a rare uncrowded Indonesia experience.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
      caption: "Remote Sumba reef quality with premium logistics.",
      query: "Nihiwatu Sumba Indonesia surf waves",
      map: "Nihiwatu Sumba Indonesia",
    },
    {
      name: "Simeulue",
      area: "Indonesia",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "medium",
      tropical: true,
      directions: ["left", "right"],
      quality: 4,
      bottom: ["reef"],
      wavePower: "decent",
      crowdFactor: "Low to medium",
      waterTemp: "Tropical, usually 27-30C",
      wave: "Remote reef variety with lefts, rights, and fewer crowds",
      season: "April to October",
      vibe: "North Sumatra remoteness, motorbike checks, and uncrowded reefs",
      tagline: "Best Sumatra variety",
      description:
        "Simeulue is a more remote Indonesian surf island with multiple reefs and fewer crowds than the marquee zones. It is a strong adventure choice.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
      caption: "Remote Sumatran reefs and warm-water variety.",
      query: "Simeulue Indonesia surf waves",
      map: "Simeulue Indonesia",
    },
    {
      name: "Male Atolls",
      area: "Maldives",
      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left", "right"],
      quality: 4,
      bottom: ["reef"],
      wavePower: "decent",
      crowdFactor: "Medium",
      waterTemp: "Tropical, usually 27-30C",
      wave: "Warm-water reef passes with playful high-quality walls",
      season: "March to October",
      vibe: "Boat trips, clear water, reef passes, and resort logistics",
      tagline: "Best accessible Maldives",
      description:
        "The Male Atolls are the Maldives' most accessible surf zone, with famous reef passes and warm, playful waves that suit intermediate and advanced surfers.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=86",
      caption: "Clear-water reef passes and warm Maldives walls.",
      query: "Male Atolls Maldives surf waves",
      map: "Male Atolls Maldives",
    },
    {
      name: "Central Atolls",
      area: "Maldives",
      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "high",
      tropical: true,
      directions: ["left", "right"],
      quality: 4,
      bottom: ["reef"],
      wavePower: "decent",
      crowdFactor: "Low to medium",
      waterTemp: "Tropical, usually 27-30C",
      wave: "Less-crowded reef passes with boat-trip access",
      season: "March to October",
      vibe: "Boat missions, empty reef passes, and high-quality tropical rhythm",
      tagline: "Best quieter Maldives",
      description:
        "The Central Atolls are a strong Maldives choice when you want fewer boats than the Male area and are willing to commit to a more focused boat trip.",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=86",
      caption: "Quieter Maldives reef passes and boat-trip pacing.",
      query: "Central Atolls Maldives surf waves",
      map: "Central Atolls Maldives",
    },
    {
      name: "Playa Hermosa",
      area: "Costa Rica",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["intermediate", "advanced"],
      budget: "medium",
      tropical: true,
      directions: ["left", "right"],
      quality: 4,
      bottom: ["sand"],
      wavePower: "chargers only",
      crowdFactor: "Medium",
      waterTemp: "Warm, usually 27-30C",
      wave: "Powerful black-sand beach break with consistent swell",
      season: "April to October",
      vibe: "Jaco access, heavy beach-break peaks, and warm-water power",
      tagline: "Best Costa Rica power beach",
      description:
        "Playa Hermosa near Jaco is one of Costa Rica's most consistent and powerful beach breaks. It is not beginner-friendly when there is swell, but it is very surf-focused.",
      image:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=86",
      caption: "Warm black-sand beach-break power near Jaco.",
      query: "Playa Hermosa Costa Rica surf waves",
      map: "Playa Hermosa Puntarenas Costa Rica",
    },
    {
      name: "Witches Rock / Ollies",
      area: "Costa Rica",
      months: ["Dec", "Jan", "Feb", "Mar", "Apr"],
      levels: ["intermediate", "advanced"],
      budget: "medium",
      tropical: true,
      directions: ["right"],
      quality: 4,
      bottom: ["sand", "rock"],
      wavePower: "decent",
      crowdFactor: "Medium",
      waterTemp: "Warm, usually 27-30C",
      wave: "Boat-access beach and right point setups in Guanacaste",
      season: "December to April",
      vibe: "Boat rides, offshore winds, dry forest, and classic Costa Rica missions",
      tagline: "Best Guanacaste boat trip",
      description:
        "Witches Rock and Ollie's Point are classic Guanacaste surf missions, offering offshore-season waves and a more adventurous feel than town-based Costa Rica surf.",
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=86",
      caption: "Boat-access Costa Rica waves with dry-season winds.",
      query: "Witches Rock Ollies Point Costa Rica surf waves",
      map: "Witches Rock Costa Rica",
    },
    {
      name: "Sayulita",
      area: "Mexico",
      months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      levels: ["beginner", "intermediate"],
      budget: "medium",
      tropical: true,
      directions: ["right"],
      quality: 2,
      bottom: ["sand", "rock"],
      wavePower: "mellow",
      crowdFactor: "Very high",
      waterTemp: "Warm, usually 24-29C",
      wave: "Soft point and beach waves close to town",
      season: "November to April",
      vibe: "Colorful streets, tacos, mellow longboards, and lots of people",
      tagline: "Best playful town wave",
      description:
        "Sayulita is crowded and not the highest-performance wave, but it is fun, warm, easy, and social. It is a good beginner-intermediate surf vacation town.",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1800&q=86",
      caption: "A playful Mexican town wave with social surf energy.",
      query: "Sayulita Mexico surf waves",
      map: "Sayulita Mexico",
    },
    {
      name: "Salina Cruz",
      area: "Oaxaca, Mexico",
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      levels: ["intermediate", "advanced"],
      budget: "medium",
      tropical: true,
      directions: ["right"],
      quality: 5,
      bottom: ["sand", "rock"],
      wavePower: "decent",
      crowdFactor: "Medium, guide-controlled",
      waterTemp: "Warm, usually 26-30C",
      wave: "World-class sand-bottom right points with long walls",
      season: "April to September",
      vibe: "Guided point missions, warm water, and Oaxaca coast perfection",
      tagline: "Best Mexican right points",
      description:
        "Salina Cruz is famous for a chain of high-quality right points. Access is often guided, but the wave quality can be exceptional.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=86",
      caption: "Long warm-water right points on the Oaxaca coast.",
      query: "Salina Cruz Oaxaca surf waves",
      map: "Salina Cruz Oaxaca Mexico",
    },
    {
      name: "Punta Mita",
      area: "Mexico",
      months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      levels: ["beginner", "intermediate"],
      budget: "high",
      tropical: true,
      directions: ["left", "right"],
      quality: 3,
      bottom: ["reef", "sand"],
      wavePower: "mellow",
      crowdFactor: "Medium to high",
      waterTemp: "Warm, usually 24-29C",
      wave: "Soft reef and point waves near resort towns",
      season: "November to June",
      vibe: "Resort comfort, boat options, warm water, and playful waves",
      tagline: "Best polished Mexico option",
      description:
        "Punta Mita is a comfortable Mexico surf base with softer reefs and point-style waves. It suits relaxed trips more than heavy surf missions.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
      caption: "Warm resort-zone waves with softer reef options.",
      query: "Punta Mita Mexico surf waves",
      map: "Punta Mita Mexico",
    },
    {
      name: "Scorpion Bay",
      area: "Baja California Sur, Mexico",
      months: ["Jun", "Jul", "Aug", "Sep", "Oct"],
      levels: ["beginner", "intermediate", "advanced"],
      budget: "medium",
      tropical: false,
      directions: ["right"],
      quality: 5,
      bottom: ["sand", "rock"],
      wavePower: "mellow",
      crowdFactor: "Medium when good",
      waterTemp: "Mild to warm, usually 19-25C",
      wave: "Extremely long right points in a remote desert bay",
      season: "June to October",
      vibe: "Desert camping, long rights, patience, and Baja road-trip logistics",
      tagline: "Best Baja long right",
      description:
        "Scorpion Bay is a legendary long right-point setup with remote Baja logistics. It can be mellow and magical when southern swells line up.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=86",
      caption: "Remote Baja rights running through a desert bay.",
      query: "Scorpion Bay Baja surf waves",
      map: "Scorpion Bay Baja California Sur Mexico",
    },
    {
      name: "Tofino",
      area: "Canada",
      months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      levels: ["beginner", "intermediate"],
      budget: "high",
      tropical: false,
      directions: ["left", "right"],
      quality: 3,
      bottom: ["sand"],
      wavePower: "mellow",
      crowdFactor: "Medium",
      waterTemp: "Cold, usually 8-13C",
      wave: "Cold-water beach breaks in rainforest scenery",
      season: "September to April",
      vibe: "Rainforest, mist, cold water, cafes, and beginner-friendly beach breaks",
      tagline: "Best cold-water beginner trip",
      description:
        "Tofino is Canada's most approachable surf town, with beautiful cold-water beach breaks and a polished small-town travel scene.",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=86",
      caption: "Rainforest-backed cold-water beach breaks.",
      query: "Tofino Canada surf waves",
      map: "Tofino Canada",
    },
    {
      name: "Peahi / Jaws",
      area: "Maui, Hawaii",
      months: ["Nov", "Dec", "Jan", "Feb", "Mar"],
      levels: ["advanced"],
      budget: "high",
      tropical: true,
      directions: ["right"],
      quality: 5,
      bottom: ["reef", "rock"],
      wavePower: "chargers only",
      crowdFactor: "Low in water, expert-only",
      waterTemp: "Warm, usually 24-27C",
      wave: "Elite big-wave right reef with tow and paddle days",
      season: "November to March",
      vibe: "Maui cliffs, huge winter swell, safety teams, and elite commitment",
      tagline: "Best Maui big-wave arena",
      description:
        "Peahi, better known as Jaws, is one of the world's most famous big-wave spots. It is included as a world-class surf area, but it is only for elite big-wave surfers.",
      image:
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=86",
      caption: "Huge Maui winter swell breaking over a serious reef.",
      query: "Peahi Jaws Maui Hawaii surf waves",
      map: "Peahi Maui Hawaii",
    },
  ],
);

const surfDetailsByName = {
  "Puerto Escondido": {
    wavePower: "chargers only",
    crowdFactor: "High at Zicatela, medium nearby",
    waterTemp: "Warm, usually 26-30C",
  },
  "La Saladita": {
    wavePower: "mellow",
    crowdFactor: "Medium on good longboard days",
    waterTemp: "Warm, usually 26-29C",
  },
  Peniche: {
    wavePower: "decent",
    crowdFactor: "Medium to high",
    waterTemp: "Cool, usually 14-19C",
  },
  "Arugam Bay": {
    wavePower: "decent",
    crowdFactor: "High in peak season",
    waterTemp: "Tropical, usually 27-30C",
  },
  Hikkaduwa: {
    wavePower: "decent",
    crowdFactor: "Medium",
    waterTemp: "Tropical, usually 27-30C",
  },
  "Midigama / Weligama": {
    wavePower: "mellow",
    crowdFactor: "Medium to high in Weligama",
    waterTemp: "Tropical, usually 27-30C",
  },
  Itacare: {
    wavePower: "decent",
    crowdFactor: "Medium",
    waterTemp: "Warm, usually 25-28C",
  },
  Pipa: {
    wavePower: "mellow",
    crowdFactor: "Medium",
    waterTemp: "Warm, usually 26-29C",
  },
  "El Tunco / La Libertad": {
    wavePower: "decent",
    crowdFactor: "Medium to high at main points",
    waterTemp: "Warm, usually 27-30C",
  },
  Popoyo: {
    wavePower: "chargers only",
    crowdFactor: "Medium",
    waterTemp: "Warm, usually 26-29C",
  },
  "Northwest Australia": {
    wavePower: "chargers only",
    crowdFactor: "Low, but remote and exposed",
    waterTemp: "Warm, usually 24-28C",
  },
  Mentawai: {
    wavePower: "chargers only",
    crowdFactor: "Medium at famous reefs",
    waterTemp: "Tropical, usually 27-30C",
  },
  "G-Land": {
    wavePower: "chargers only",
    crowdFactor: "Medium",
    waterTemp: "Warm, usually 26-29C",
  },
  Uluwatu: {
    wavePower: "chargers only",
    crowdFactor: "Very high",
    waterTemp: "Warm, usually 26-29C",
  },
  Lombok: {
    wavePower: "decent",
    crowdFactor: "Medium",
    waterTemp: "Warm, usually 26-29C",
  },
  "Tofo / Tofinho": {
    wavePower: "decent",
    crowdFactor: "Low to medium",
    waterTemp: "Warm, usually 24-28C",
  },
  "Ponta do Ouro": {
    wavePower: "mellow",
    crowdFactor: "Low to medium",
    waterTemp: "Warm, usually 23-27C",
  },
  "Ponta Preta / Sal": {
    wavePower: "chargers only",
    crowdFactor: "Medium when it breaks",
    waterTemp: "Warm, usually 22-25C",
  },
  "Fuerteventura North": {
    wavePower: "decent",
    crowdFactor: "Medium to high",
    waterTemp: "Mild, usually 18-23C",
  },
  "Famara / Lanzarote": {
    wavePower: "decent",
    crowdFactor: "Medium",
    waterTemp: "Mild, usually 18-23C",
  },
  "Playa de las Americas": {
    wavePower: "decent",
    crowdFactor: "High at main reefs",
    waterTemp: "Mild, usually 19-24C",
  },
  Taghazout: {
    wavePower: "decent",
    crowdFactor: "High in winter",
    waterTemp: "Cool to mild, usually 17-22C",
  },
  Imsouane: {
    wavePower: "mellow",
    crowdFactor: "High on clean small days",
    waterTemp: "Cool to mild, usually 17-22C",
  },
  Safi: {
    wavePower: "chargers only",
    crowdFactor: "Medium, expert crowd",
    waterTemp: "Cool to mild, usually 17-22C",
  },
  "Razo / Pantin": {
    wavePower: "decent",
    crowdFactor: "Low to medium",
    waterTemp: "Cool, usually 13-19C",
  },
  Hossegor: {
    wavePower: "chargers only",
    crowdFactor: "Very high when good",
    waterTemp: "Cool to mild, usually 12-22C",
  },
  Biarritz: {
    wavePower: "mellow",
    crowdFactor: "High in summer",
    waterTemp: "Cool to mild, usually 13-22C",
  },
  Mundaka: {
    wavePower: "chargers only",
    crowdFactor: "High when it works",
    waterTemp: "Cool, usually 12-20C",
  },
  Ericeira: {
    wavePower: "decent",
    crowdFactor: "Medium to high",
    waterTemp: "Cool, usually 14-19C",
  },
  Nazare: {
    wavePower: "chargers only",
    crowdFactor: "Low in the water, huge on the cliff",
    waterTemp: "Cool, usually 14-18C",
  },
  Bundoran: {
    wavePower: "chargers only",
    crowdFactor: "Medium",
    waterTemp: "Cold, usually 8-15C",
  },
  Thurso: {
    wavePower: "chargers only",
    crowdFactor: "Low to medium",
    waterTemp: "Cold, usually 7-13C",
  },
  "Jeffreys Bay": {
    wavePower: "chargers only",
    crowdFactor: "High when firing",
    waterTemp: "Cool to mild, usually 15-22C",
  },
  Durban: {
    wavePower: "decent",
    crowdFactor: "Medium",
    waterTemp: "Warm, usually 21-26C",
  },
  "Skeleton Bay": {
    wavePower: "chargers only",
    crowdFactor: "Low, but expert-only",
    waterTemp: "Cold to cool, usually 12-18C",
  },
  Nosara: {
    wavePower: "mellow",
    crowdFactor: "High in dry season",
    waterTemp: "Warm, usually 27-30C",
  },
  "Santa Teresa": {
    wavePower: "decent",
    crowdFactor: "High",
    waterTemp: "Warm, usually 27-30C",
  },
  Pavones: {
    wavePower: "decent",
    crowdFactor: "High when south swell hits",
    waterTemp: "Warm, usually 27-30C",
  },
  Montanita: {
    wavePower: "decent",
    crowdFactor: "Medium to high",
    waterTemp: "Warm, usually 23-27C",
  },
  Chicama: {
    wavePower: "mellow",
    crowdFactor: "Medium",
    waterTemp: "Cool, usually 16-21C",
  },
  "Punta de Lobos": {
    wavePower: "chargers only",
    crowdFactor: "Medium to high",
    waterTemp: "Cold, usually 11-16C",
  },
  Rincon: {
    wavePower: "decent",
    crowdFactor: "Medium to high",
    waterTemp: "Warm, usually 26-28C",
  },
  "Soup Bowl": {
    wavePower: "chargers only",
    crowdFactor: "Medium to high",
    waterTemp: "Warm, usually 26-28C",
  },
  "Bocas del Toro": {
    wavePower: "decent",
    crowdFactor: "Medium",
    waterTemp: "Warm, usually 27-29C",
  },
  Raglan: {
    wavePower: "decent",
    crowdFactor: "Medium to high",
    waterTemp: "Cool, usually 13-19C",
  },
  "Gold Coast": {
    wavePower: "decent",
    crowdFactor: "Very high",
    waterTemp: "Mild to warm, usually 20-26C",
  },
  "Margaret River": {
    wavePower: "chargers only",
    crowdFactor: "Medium",
    waterTemp: "Cool to mild, usually 16-22C",
  },
  Cloudbreak: {
    wavePower: "chargers only",
    crowdFactor: "Medium, boat-access crowd",
    waterTemp: "Tropical, usually 26-29C",
  },
  Teahupoo: {
    wavePower: "chargers only",
    crowdFactor: "Medium, expert-only",
    waterTemp: "Tropical, usually 26-29C",
  },
  Siargao: {
    wavePower: "decent",
    crowdFactor: "High around Cloud 9",
    waterTemp: "Tropical, usually 27-30C",
  },
};

destinations.forEach((destination) => {
  Object.assign(
    destination,
    {
      wavePower: "decent",
      crowdFactor: "Medium",
      waterTemp: "Seasonal",
    },
    destination,
    surfDetailsByName[destination.name] || {},
  );
});

const state = {
  selected: 0,
  carouselTimer: null,
  carouselPhotoIndex: 0,
  carouselPhotos: [],
};

const elements = {
  heroMedia: document.querySelector("#heroMedia"),
  form: document.querySelector("#filters"),
  monthInputs: document.querySelectorAll('input[name="month"]'),
  sortInputs: document.querySelectorAll('input[name="sort"]'),
  direction: document.querySelector("#direction"),
  directionValue: document.querySelector("#directionValue"),
  tropical: document.querySelector("#tropical"),
  matchTitle: document.querySelector("#matchTitle"),
  matchReason: document.querySelector("#matchReason"),
  feature: document.querySelector("#destinationFeature"),
  tagline: document.querySelector("#destinationTagline"),
  name: document.querySelector("#destinationName"),
  description: document.querySelector("#destinationDescription"),
  waveDescription: document.querySelector("#waveDescription"),
  spotDescription: document.querySelector("#spotDescription"),
  facts: document.querySelector("#destinationFacts"),
  monthGuide: document.querySelector("#monthGuide"),
  reviews: document.querySelector("#areaReviews"),
  actions: document.querySelector("#destinationActions"),
  image: document.querySelector("#destinationImage"),
  caption: document.querySelector("#destinationCaption"),
  photoDots: document.querySelector("#photoDots"),
  featureVisual: document.querySelector(".feature-visual"),
  resultsCount: document.querySelector("#resultsCount"),
  cardStrip: document.querySelector("#cardStrip"),
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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

function getSortMode() {
  return [...elements.sortInputs].find((input) => input.checked)?.value || "match";
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
      matchPercent: matchPercentage(destination, filters),
    }))
    .sort((a, b) => b.matchPercent - a.matchPercent || b.score - a.score || a.name.localeCompare(b.name));
}

function matchPercentage(destination, filters) {
  const budgetOrder = ["low", "medium", "high"];
  const budgetGap = Math.abs(
    budgetOrder.indexOf(destination.budget) - budgetOrder.indexOf(filters.budget),
  );
  let percent = 0;

  if (destination.months.includes(filters.month)) percent += 25;
  if (destination.levels.includes(filters.level)) percent += 25;
  percent += Math.max(0, 20 - budgetGap * 10);
  if (filters.direction === "any" || destination.directions.includes(filters.direction)) percent += 15;
  if (!filters.tropical || destination.tropical) percent += 15;

  return percent;
}

function destinationMatchesFilters(destination, filters) {
  const directionMatches =
    filters.direction === "any" || destination.directions.includes(filters.direction);

  return (
    destination.months.includes(filters.month) &&
    destination.levels.includes(filters.level) &&
    destination.budget === filters.budget &&
    (!filters.tropical || destination.tropical) &&
    directionMatches
  );
}

function setBackground(destination) {
  elements.heroMedia.classList.add("is-changing");

  window.setTimeout(() => {
    elements.heroMedia.style.backgroundImage = `url("${placePhotoUrl(destination, 1)}"), url("${destination.image}")`;
    elements.heroMedia.classList.remove("is-changing");
  }, 180);
}

function renderFeature(destination, filters) {
  elements.feature.classList.add("is-changing");
  stopPhotoCarousel();

  window.setTimeout(() => {
    const photos = destinationPhotos(destination);

    elements.matchTitle.textContent = `${destination.name}, ${destination.area}`;
    elements.matchReason.textContent = buildReason(destination, filters);
    elements.tagline.textContent = destination.tagline;
    elements.name.textContent = destination.name;
    elements.description.textContent = destination.description;
    elements.waveDescription.textContent = waveDescription(destination);
    elements.spotDescription.textContent = spotDescription(destination);
    startPhotoCarousel(destination, photos);
    elements.monthGuide.innerHTML = monthlyGuide(destination, filters.month);
    elements.reviews.innerHTML = areaReviews(destination);

    elements.facts.innerHTML = [
      ["Wave quality", qualityRating(destination.quality)],
      ["Wave power", titleCase(destination.wavePower)],
      ["Crowd factor", destination.crowdFactor],
      ["Water temp", destination.waterTemp],
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

function startPhotoCarousel(destination, photos) {
  state.carouselPhotos = photos;
  state.carouselPhotoIndex = 0;
  showCarouselPhoto(destination, 0, false);

  if (prefersReducedMotion || photos.length < 2) return;

  state.carouselTimer = window.setInterval(() => {
    const nextIndex = (state.carouselPhotoIndex + 1) % state.carouselPhotos.length;
    showCarouselPhoto(destination, nextIndex);
  }, 4200);
}

function stopPhotoCarousel() {
  if (!state.carouselTimer) return;

  window.clearInterval(state.carouselTimer);
  state.carouselTimer = null;
}

function showCarouselPhoto(destination, photoIndex, animate = true) {
  const photo = state.carouselPhotos[photoIndex];
  if (!photo) return;

  const updatePhoto = () => {
    state.carouselPhotoIndex = photoIndex;
    elements.image.onerror = () => {
      elements.image.onerror = null;
      elements.image.src = destination.image;
    };
    elements.image.src = photo.src;
    elements.image.alt = `${photo.spot} surfing waves`;
    elements.caption.innerHTML = `
      <strong>${escapeHtml(photo.spot)}</strong>
      <small>Source: ${escapeHtml(photo.source)}</small>
    `;
    renderPhotoDots(state.carouselPhotos.length, photoIndex);
    elements.featureVisual.classList.remove("is-photo-changing");
  };

  if (!animate || prefersReducedMotion) {
    updatePhoto();
    return;
  }

  elements.featureVisual.classList.add("is-photo-changing");
  window.setTimeout(updatePhoto, 220);
}

function renderPhotoDots(total, activeIndex) {
  elements.photoDots.innerHTML = Array.from({ length: total }, (_, index) => {
    const className = index === activeIndex ? ' class="is-active"' : "";
    return `<span${className}></span>`;
  }).join("");
}

function renderCards(ranked, filters) {
  const exactMatches = ranked.filter((destination) => destinationMatchesFilters(destination, filters));
  const visibleDestinations = sortDestinations(ranked, getSortMode());

  elements.resultsCount.textContent = exactMatches.length
    ? `${exactMatches.length} exact ${exactMatches.length === 1 ? "match" : "matches"} found. Showing all ${ranked.length} areas with match percentages.`
    : `No exact matches yet. Showing all ${ranked.length} areas with match percentages.`;

  elements.cardStrip.innerHTML = visibleDestinations
    .map(
      (destination) => `
        <button class="spot-card" type="button" data-index="${destination.index}" aria-label="Choose ${destination.name}">
          <span class="match-badge">${destination.matchPercent}% match</span>
          <img src="${placePhotoUrl(destination)}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${destination.image}'" />
          <span class="spot-card-content">
            <strong>${destination.name}</strong>
            <span>${destination.area} / ${destination.season}</span>
            <small>${cardWaveDescription(destination)}</small>
          </span>
        </button>
      `,
    )
    .join("");
}

function sortDestinations(destinationsToSort, sortMode) {
  const sorted = [...destinationsToSort];

  sorted.sort((a, b) => {
    if (sortMode === "quality") return b.quality - a.quality || b.matchPercent - a.matchPercent;
    if (sortMode === "crowds") return crowdScore(a) - crowdScore(b) || b.matchPercent - a.matchPercent;
    if (sortMode === "consistency") return consistencyScore(b) - consistencyScore(a) || b.quality - a.quality;
    if (sortMode === "budget") return budgetScore(a) - budgetScore(b) || b.matchPercent - a.matchPercent;
    if (sortMode === "power") return powerScore(b) - powerScore(a) || b.quality - a.quality;
    if (sortMode === "reviews") return reviewScore(b) - reviewScore(a) || b.matchPercent - a.matchPercent;

    return b.matchPercent - a.matchPercent || b.score - a.score || a.name.localeCompare(b.name);
  });

  return sorted;
}

function crowdScore(destination) {
  const crowd = destination.crowdFactor.toLowerCase();

  if (crowd.includes("very high")) return 5;
  if (crowd.includes("high")) return 4;
  if (crowd.includes("medium")) return 3;
  if (crowd.includes("low")) return 1;
  return 2;
}

function consistencyScore(destination) {
  return destination.months.length * 10 + destination.quality;
}

function budgetScore(destination) {
  return { low: 1, medium: 2, high: 3 }[destination.budget] || 2;
}

function powerScore(destination) {
  return { mellow: 1, decent: 2, "chargers only": 3 }[destination.wavePower] || 2;
}

function reviewScore(destination) {
  return destination.quality * 2 + consistencyScore(destination) / 12 + (6 - crowdScore(destination));
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

function waveDescription(destination) {
  const direction = directionLabel(destination.directions).toLowerCase();
  const quality = qualityLabel(destination.quality).toLowerCase();
  const bottom = bottomLabel(destination.bottom).toLowerCase();
  const power = powerDescription(destination.wavePower);

  return `${destination.name} is a ${quality} ${direction} setup with ${power} over ${bottom}. ${destination.wave}.`;
}

function spotDescription(destination) {
  const spotNames = destination.name
    .split("/")
    .map((spot) => spot.trim())
    .filter(Boolean);
  const primarySpot = spotNames.length > 1 ? spotNames.join(" and ") : destination.name;
  const accessNote = accessDescription(destination);

  return `Spot notes: focus on ${primarySpot} and nearby breaks around ${destination.map}. ${accessNote} Expect ${destination.crowdFactor.toLowerCase()} crowds, ${bottomLabel(destination.bottom).toLowerCase()} bottom, and ${destination.waterTemp.toLowerCase()} water.`;
}

function monthlyGuide(destination, selectedMonth) {
  const rows = months.map((month) => monthlyConditions(destination, month));
  const cells = rows
    .map((row) => {
      const selectedClass = row.month === selectedMonth ? " is-selected" : "";
      const seasonClass = row.inSeason ? "" : " is-offseason";

      return `
        <span class="month-name${selectedClass}${seasonClass}">${row.month}</span>
        <span class="${selectedClass}${seasonClass}">${escapeHtml(row.waterTemp)}</span>
        <span class="${selectedClass}${seasonClass}">${escapeHtml(row.crowds)}</span>
        <span class="${selectedClass}${seasonClass}">${escapeHtml(row.waveSize)}</span>
        <span class="${selectedClass}${seasonClass}">${escapeHtml(row.airTemp)}</span>
        <span class="${selectedClass}${seasonClass}">${escapeHtml(row.consistency)}</span>
      `;
    })
    .join("");

  return `
    <h4>Month-by-month conditions</h4>
    <div class="month-scroller">
      <div class="month-table">
        <span class="month-head">Month</span>
        <span class="month-head">Water</span>
        <span class="month-head">Crowds</span>
        <span class="month-head">Waves</span>
        <span class="month-head">Air</span>
        <span class="month-head">Consistency</span>
        ${cells}
      </div>
    </div>
    <p class="month-note">Planning estimates for the wider area. Check a live forecast before booking or paddling out.</p>
  `;
}

function monthlyConditions(destination, month) {
  const inSeason = destination.months.includes(month);
  const nearSeason = !inSeason && monthDistanceToSeason(destination.months, month) <= 1;

  return {
    month,
    inSeason,
    waterTemp: monthlyWaterTemp(destination, month),
    crowds: monthlyCrowds(destination, inSeason, nearSeason),
    waveSize: monthlyWaveSize(destination, inSeason, nearSeason),
    airTemp: monthlyAirTemp(destination, month),
    consistency: monthlyConsistency(destination, inSeason, nearSeason),
  };
}

function monthDistanceToSeason(seasonMonths, month) {
  const monthIndex = months.indexOf(month);

  return Math.min(
    ...seasonMonths.map((seasonMonth) => {
      const seasonIndex = months.indexOf(seasonMonth);
      const distance = Math.abs(monthIndex - seasonIndex);
      return Math.min(distance, 12 - distance);
    }),
  );
}

function monthlyWaterTemp(destination, month) {
  const [low, high] = tempRange(destination.waterTemp, destination.tropical ? [26, 29] : [14, 21]);
  const offset = seasonalTempOffset(destination, month, destination.tropical ? 1 : 2);

  return `${Math.round(low + offset)}-${Math.round(high + offset)}C`;
}

function monthlyAirTemp(destination, month) {
  const [low, high] = airTempRange(destination);
  const offset = seasonalTempOffset(destination, month, destination.tropical ? 1 : 4);

  return `${Math.round(low + offset)}-${Math.round(high + offset)}C`;
}

function monthlyCrowds(destination, inSeason, nearSeason) {
  const base = crowdScore(destination);
  const score = Math.max(1, Math.min(5, base + (inSeason ? 1 : nearSeason ? 0 : -1)));

  return ["Very low", "Low", "Medium", "Busy", "Very busy"][score - 1];
}

function monthlyWaveSize(destination, inSeason, nearSeason) {
  const powerRanges = {
    mellow: [2, 4],
    decent: [3, 6],
    "chargers only": [5, 10],
  };
  const [baseLow, baseHigh] = powerRanges[destination.wavePower] || powerRanges.decent;
  const qualityBoost = Math.max(0, destination.quality - 3);
  const seasonBoost = inSeason ? 1 : nearSeason ? 0 : -1;
  const low = Math.max(1, baseLow + seasonBoost + Math.floor(qualityBoost / 2));
  const high = Math.max(low + 1, baseHigh + seasonBoost + qualityBoost);

  return `${low}-${high} ft`;
}

function monthlyConsistency(destination, inSeason, nearSeason) {
  const percent = inSeason
    ? Math.min(96, 62 + destination.quality * 6)
    : nearSeason
      ? Math.min(72, 42 + destination.quality * 5)
      : Math.min(48, 18 + destination.quality * 5);
  const label = percent >= 78 ? "High" : percent >= 58 ? "Good" : percent >= 40 ? "Possible" : "Low";

  return `${label} (${percent}%)`;
}

function tempRange(value, fallback) {
  const matches = value.match(/-?\d+/g);
  if (!matches || matches.length < 2) return fallback;

  return [Number(matches[0]), Number(matches[1])];
}

function airTempRange(destination) {
  const area = `${destination.name} ${destination.area}`.toLowerCase();

  if (destination.tropical) return [25, 31];
  if (area.includes("ireland") || area.includes("thurso") || area.includes("tofin")) return [8, 17];
  if (area.includes("new zealand") || area.includes("chile") || area.includes("galicia")) return [11, 20];
  if (area.includes("morocco") || area.includes("canary") || area.includes("portugal")) return [17, 25];
  if (area.includes("australia") || area.includes("south africa")) return [16, 26];

  return [14, 24];
}

function seasonalTempOffset(destination, month, amplitude) {
  if (destination.tropical) return month === "Jan" || month === "Feb" || month === "Aug" ? 0.5 : 0;

  const southern =
    /australia|new zealand|chile|peru|brazil|south africa|mauritius|tahiti|fiji|mozambique/i.test(
      `${destination.area} ${destination.name}`,
    );
  const warmestMonth = southern ? "Feb" : "Aug";
  const distance = monthDistanceToSeason([warmestMonth], month);

  return Math.cos((distance / 6) * Math.PI) * amplitude;
}

function areaReviews(destination) {
  const crowd = crowdScore(destination);
  const cost = budgetScore(destination);
  const consistency = consistencyScore(destination);
  const tripRating = Math.min(5, Math.max(3, Math.round((destination.quality + (6 - cost)) / 2)));
  const crowdRating = Math.max(1, 6 - crowd);
  const consistencyRating = Math.min(5, Math.max(2, Math.round(consistency / 18)));
  const travelNote =
    destination.budget === "low"
      ? "Easy to keep costs down if you choose simple rooms and local food."
      : destination.budget === "medium"
        ? "Good balance between comfort, food, rentals, and surf access."
        : "Best with a bigger trip budget, especially for boats, guides, or premium stays.";
  const crowdNote =
    crowd >= 4
      ? "The area can get busy, so dawn sessions and flexible spot checks matter."
      : crowd <= 2
        ? "Usually more breathing room than the famous lineups, though the best days still pull people in."
        : "Expect a normal surf-trip crowd: manageable if you move with the tide and wind.";

  const reviews = [
    {
      title: "Trip fit",
      rating: tripRating,
      text: `${destination.name} is strongest for ${destination.vibe.toLowerCase()}. ${travelNote}`,
    },
    {
      title: "Crowd reality",
      rating: crowdRating,
      text: crowdNote,
    },
    {
      title: "Season confidence",
      rating: consistencyRating,
      text: `${destination.season} is the main window. The wider the month range, the easier it is to plan without chasing a perfect forecast.`,
    },
  ];

  return `
    <h4>Area reviews</h4>
    <div class="review-grid">
      ${reviews
        .map(
          (review) => `
            <article class="review-card">
              <span class="review-score">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span>
              <strong>${escapeHtml(review.title)}</strong>
              <p>${escapeHtml(review.text)}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function accessDescription(destination) {
  if (destination.wavePower === "chargers only") {
    return "Treat the main spots as advanced lineups and check local rules before paddling out.";
  }

  if (destination.levels.includes("beginner")) {
    return "The area has at least one more forgiving spot, but conditions can still change quickly.";
  }

  return "The main spots suit surfers with solid positioning, board control, and lineup awareness.";
}

function cardWaveDescription(destination) {
  return `${qualityLabel(destination.quality)} / ${titleCase(destination.wavePower)} / ${bottomLabel(destination.bottom)}`;
}

function powerDescription(power) {
  const descriptions = {
    mellow: "mellow, forgiving power",
    decent: "decent push and workable sections",
    "chargers only": "serious power for confident surfers",
  };

  return descriptions[power] || power;
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

function destinationPhotos(destination) {
  const queries = [
    `${destination.query} surfing waves`,
    `${destination.query} surfer on wave`,
    `${destination.name} surf break waves`,
    `${destination.query} lineup ocean wave`,
  ];

  return queries.map((query, index) => ({
    src: sourcePhotoUrl(query, destination.index, index),
    spot: destination.name,
    source: "Unsplash surf photo search",
  }));
}

function placePhotoUrl(destination, photoIndex = 0) {
  return sourcePhotoUrl(`${destination.query} surfing waves`, destination.index, photoIndex);
}

function sourcePhotoUrl(query, destinationIndex = 0, photoIndex = 0) {
  const terms = encodeURIComponent(query);
  const signature = (destinationIndex + 1) * 17 + photoIndex * 101;

  return `https://source.unsplash.com/1800x1200/?${terms}&sig=${signature}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
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
  const exactMatches = ranked.filter((destination) => destinationMatchesFilters(destination, filters));
  const selected =
    preferredIndex === null
      ? exactMatches[0] || ranked[0]
      : ranked.find((item) => item.index === preferredIndex) || exactMatches[0] || ranked[0];

  state.selected = selected.index;
  setBackground(selected);
  renderFeature(selected, filters);
  renderCards(ranked, filters);
}

elements.form.addEventListener("change", () => render());
elements.sortInputs.forEach((input) => input.addEventListener("change", () => render(state.selected)));
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
