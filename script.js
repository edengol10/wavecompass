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
    surfDetailsByName[destination.name] || {},
  );
});

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
    elements.heroMedia.style.backgroundImage = `url("${placePhotoUrl(destination)}"), url("${destination.image}")`;
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
    elements.image.onerror = () => {
      elements.image.onerror = null;
      elements.image.src = destination.image;
    };
    elements.image.src = placePhotoUrl(destination);
    elements.image.alt = `${destination.name} surf destination`;
    elements.caption.textContent = destination.caption;

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

function renderCards(ranked) {
  elements.cardStrip.innerHTML = ranked
    .slice(0, 4)
    .map(
      (destination) => `
        <button class="spot-card" type="button" data-index="${destination.index}" aria-label="Choose ${destination.name}">
          <img src="${placePhotoUrl(destination)}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${destination.image}'" />
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

function placePhotoUrl(destination) {
  const terms = encodeURIComponent(`${destination.query} waves surf spot`);

  return `https://source.unsplash.com/1800x1200/?${terms}`;
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
