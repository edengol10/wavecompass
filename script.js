const destinations = [
  {
    name: "Puerto Escondido",
    area: "Oaxaca, Mexico",
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    levels: ["beginner", "intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left", "right"],
    quality: 5,
    bottom: ["sand"],
    wave: "Heavy beach-break barrels with mellower points nearby",
    season: "April to October",
    vibe: "Powerful beach town, mezcal evenings, warm Pacific energy",
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
    levels: ["beginner", "intermediate"],
    budget: "low",
    tropical: true,
    directions: ["right"],
    quality: 4,
    bottom: ["sand", "rock"],
    wave: "Long right points with easy sections and faster walls",
    season: "May to September",
    vibe: "Warm-water points, beach cafes, tuk-tuks, and sunrise paddles",
    tagline: "Sri Lanka right point season",
    description:
      "Arugam Bay is Sri Lanka's east-coast classic, with Main Point as the center and a chain of softer or more remote rights nearby. It is better treated as a beginner-to-intermediate warm-water trip than a true advanced-only mission.",
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
    levels: ["beginner", "intermediate", "advanced"],
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
    levels: ["beginner", "intermediate", "advanced"],
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
      "Popoyo is a compact surf zone with different setups close together, from softer beach and bay options to heavier reef days. It is best for surfers who want consistency, warm water, and a quieter trip focused on sessions.",
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
    wave: "Powerful cold-water left point with long walls",
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
    months: ["Dec", "Jan", "Feb", "Mar", "Apr"],
    levels: ["intermediate", "advanced"],
    budget: "medium",
    tropical: true,
    directions: ["left", "right"],
    quality: 3,
    bottom: ["reef", "sand"],
    wave: "Caribbean reef breaks and punchy tropical setups",
    season: "December to April",
    vibe: "Island hopping, warm water, reef setups, crowds in the main windows, and tropical nightlife",
    tagline: "Panama island reef season",
    description:
      "Bocas del Toro is a tropical reef playground with short seasonal windows and high upside. It is not a reliable July top match here; July can get pulses and crowds, but the cleaner planning window is winter into early spring.",
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
      wave: "Powerful west-side right with long walls",
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
      crowdFactor: "Very high when firing",
      waterTemp: "Warm, usually 26-29C",
      consistencyBase: 62,
      wave: "Long, hollow left reef with high consequence",
      season: "May to October",
      vibe: "Remote Lombok mission, shallow reef, and barrel obsession",
      tagline: "Best Lombok barrel",
      description:
        "Desert Point is one of Indonesia's most famous left barrels. It can be fickle, very crowded, and shallow, but when it works the quality is elite.",
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
  ],
);

const additionalSurfAreas = [
  { name: "Cabo Ledo", area: "Angola", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left"], quality: 4, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "Low to medium", waterTemp: "Warm, usually 22-26C", wave: "Long left point with workable walls and forgiving shoulders", vibe: "Angola road-trip energy, warm water, cliffs, and long lefts", spots: ["Cabo Ledo Point", "Miradouro", "Barra do Kwanza"] },
  { name: "Barra do Kwanza", area: "Angola", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "decent", crowdFactor: "Low", waterTemp: "Warm, usually 22-26C", wave: "Rivermouth sandbars with shifting peaks", vibe: "Quiet river-mouth missions, open beaches, and mellow exploration", spots: ["Barra do Kwanza", "Kwanza Rivermouth", "Mussulo"] },
  { name: "Dakar Peninsula", area: "Senegal", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["reef", "sand", "rock"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Mild, usually 19-25C", wave: "Reefs and beach breaks around a swell-exposed peninsula", vibe: "City surf, West African music, reef corners, and warm hospitality", spots: ["Ngor Right", "Ouakam", "Yoff", "Virage"] },
  { name: "Busua", area: "Ghana", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "low", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Low", waterTemp: "Warm, usually 25-29C", wave: "Friendly beach break with softer tropical peaks", vibe: "Low-key village surf, warm water, and easygoing lessons", spots: ["Busua Beach", "Black Star", "Dixcove"] },
  { name: "Robertsport", area: "Liberia", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left"], quality: 3, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "Low", waterTemp: "Warm, usually 26-29C", wave: "Long softer left points and beach sections", vibe: "Palm-lined lefts, quiet lineups, and simple tropical travel", spots: ["Cotton Trees", "Cassava Point", "Fisherman's Point"] },
  { name: "Cape Town Peninsula", area: "South Africa", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["reef", "sand", "rock"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cold, usually 10-16C", wave: "Cold-water beach breaks, reefs, and scenic points", vibe: "Mountain views, cold water, coffee, and many wind options", spots: ["Muizenberg", "Long Beach", "Dungeons inside days", "Llandudno"] },
  { name: "Elands Bay", area: "South Africa", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left"], quality: 4, bottom: ["rock"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cold, usually 11-15C", wave: "Long cold-water left point with fast walls", vibe: "West Coast road trip, quiet town, and classic left-point rhythm", spots: ["Elands Bay Point", "Yo-yos", "Lamberts Bay"] },
  { name: "Victoria Bay", area: "South Africa", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["right"], quality: 4, bottom: ["rock"], wavePower: "decent", crowdFactor: "High when good", waterTemp: "Cool, usually 16-21C", wave: "Compact right point with punch and walls", vibe: "Garden Route beauty, tight takeoffs, and small-bay focus", spots: ["Victoria Bay", "Herolds Bay", "Wilderness"] },
  { name: "Port Alfred", area: "South Africa", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["right"], quality: 4, bottom: ["sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cool, usually 17-22C", wave: "Rivermouth right with quality sandbar potential", vibe: "Eastern Cape points, river mouths, and raw coastline", spots: ["East Beach", "Kelly's Beach", "Kowie Rivermouth"] },
  { name: "Coffee Bay", area: "South Africa", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"], levels: ["intermediate"], budget: "low", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand", "rock"], wavePower: "decent", crowdFactor: "Low", waterTemp: "Mild, usually 18-22C", wave: "Wild Coast beach and point-style options", vibe: "Rural coastline, cliffs, backpacker energy, and open-space sessions", spots: ["Coffee Bay", "Mdumbi", "Hole in the Wall"] },
  { name: "Tamraght", area: "Morocco", months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate", "advanced"], budget: "low", tropical: false, directions: ["right"], quality: 4, bottom: ["sand", "rock"], wavePower: "decent", crowdFactor: "High in winter", waterTemp: "Cool to mild, usually 17-22C", wave: "Right points and beginner beaches beside Taghazout", vibe: "Surf camps, rooftops, tagines, and easy point checks", spots: ["Banana Point", "Devil's Rock", "Cro-Cro", "Panoramas"] },
  { name: "Sidi Ifni", area: "Morocco", months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["intermediate", "advanced"], budget: "low", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand", "rock"], wavePower: "decent", crowdFactor: "Low to medium", waterTemp: "Cool to mild, usually 17-21C", wave: "Remote Atlantic points and beaches with room to move", vibe: "Southern Morocco quiet, desert light, and less polished lineups", spots: ["Sidi Ifni", "Legzira", "Mirleft"] },
  { name: "Essaouira", area: "Morocco", months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "low", tropical: false, directions: ["left", "right"], quality: 2, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cool to mild, usually 17-22C", wave: "Windy beach breaks and mellow Atlantic peaks", vibe: "Old medina, wind, seafood, and forgiving surf days", spots: ["Essaouira Beach", "Sidi Kaouki", "Moulay"] },
  { name: "El Palmar", area: "Andalucia, Spain", months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cool to mild, usually 16-21C", wave: "Open beach break with softer Atlantic peaks", vibe: "Spanish beach town, tapas, sunsets, and easy progression", spots: ["El Palmar", "Canos de Meca", "Yerbabuna"] },
  { name: "Somo / Loredo", area: "Cantabria, Spain", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cool, usually 13-20C", wave: "Wide beginner-friendly beach with consistent Atlantic peaks", vibe: "Green coast, surf schools, pintxos, and relaxed practice", spots: ["Somo", "Loredo", "Langre"] },
  { name: "Zarautz", area: "Basque Country, Spain", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "decent", crowdFactor: "High", waterTemp: "Cool, usually 13-20C", wave: "Consistent town beach break with many peaks", vibe: "Basque food, walkable town, and daily beach-break checks", spots: ["Zarautz", "Getaria", "Orio"] },
  { name: "San Vicente de la Barquera", area: "Cantabria, Spain", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cool, usually 13-20C", wave: "Scenic estuary beach peaks with beginner-friendly days", vibe: "Mountain views, green coast, seafood, and calm progression", spots: ["Meron", "Oyambre", "Gerra"] },
  { name: "Tapia de Casariego", area: "Asturias, Spain", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["reef", "sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cool, usually 13-19C", wave: "Reef and beach options on a rugged coast", vibe: "Cliffs, cider, quiet villages, and colder Atlantic energy", spots: ["Tapia", "Penarronda", "Serantes"] },
  { name: "Gijon / Rodiles", area: "Asturias, Spain", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["sand"], wavePower: "decent", crowdFactor: "High at Rodiles", waterTemp: "Cool, usually 13-19C", wave: "Powerful beach breaks and a famous rivermouth left", vibe: "Asturian surf culture, city comfort, and serious sandbars", spots: ["Rodiles", "San Lorenzo", "Xago"] },
  { name: "Costa da Caparica", area: "Lisbon, Portugal", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium to high", waterTemp: "Cool to mild, usually 15-20C", wave: "Long beach-break coast with many jetties and peaks", vibe: "Lisbon access, cafes, sunsets, and daily surf-school options", spots: ["CDS", "Fonte da Telha", "Sao Joao"] },
  { name: "Cascais / Guincho", area: "Portugal", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["reef", "sand"], wavePower: "decent", crowdFactor: "Medium to high", waterTemp: "Cool to mild, usually 15-20C", wave: "Exposed beach breaks and town reefs near Lisbon", vibe: "City comfort, Atlantic wind, cliffs, and polished trip logistics", spots: ["Guincho", "Carcavelos", "Praia Grande"] },
  { name: "Porto / Matosinhos", area: "Portugal", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cool, usually 14-19C", wave: "Urban beach break with easy access and steady swell", vibe: "Port wine, city stays, and practical beginner/intermediate sessions", spots: ["Matosinhos", "Leca", "Aterro"] },
  { name: "Espinho", area: "Portugal", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cool, usually 14-19C", wave: "Powerful sandbar peaks near Porto", vibe: "Northern Portugal grit, beach-town simplicity, and punchy peaks", spots: ["Casino", "Baia", "Paramos"] },
  { name: "Figueira da Foz", area: "Portugal", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["right"], quality: 4, bottom: ["sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cool, usually 14-19C", wave: "Long right-hand sandbar with powerful sections", vibe: "Wide beaches, river-mouth energy, and classic Portuguese rights", spots: ["Cabedelo", "Buarcos", "Murtinheira"] },
  { name: "Algarve West Coast", area: "Portugal", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["sand", "reef"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cool to mild, usually 15-21C", wave: "Cliff-backed beaches and reef corners with wind options", vibe: "Van routes, golden cliffs, seafood, and flexible daily checks", spots: ["Arrifana", "Amado", "Beliche", "Tonel"] },
  { name: "Lacanau", area: "France", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cool, usually 12-21C", wave: "Open Atlantic beach break with powerful sandbars", vibe: "Pine forests, beach-town summers, and shifting peaks", spots: ["Lacanau Ocean", "Carcans", "Le Porge"] },
  { name: "La Torche", area: "Brittany, France", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cold to cool, usually 10-17C", wave: "Wind-exposed beach and point-style sand setups", vibe: "Brittany weather, crepes, open beaches, and forgiving peaks", spots: ["La Torche", "Pors Carn", "Penhors"] },
  { name: "Capbreton", area: "France", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["intermediate", "advanced"], budget: "high", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["sand"], wavePower: "decent", crowdFactor: "High", waterTemp: "Cool, usually 12-21C", wave: "Powerful beach breaks beside Hossegor's sandbars", vibe: "French surf-town polish, cafes, and punchy Atlantic sessions", spots: ["Santocha", "La Piste", "VVF"] },
  { name: "Guethary", area: "France", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["advanced"], budget: "high", tropical: false, directions: ["right"], quality: 4, bottom: ["reef", "rock"], wavePower: "chargers only", crowdFactor: "High", waterTemp: "Cool, usually 12-21C", wave: "Powerful reef rights with size and local knowledge required", vibe: "Basque elegance, reef etiquette, and serious winter lines", spots: ["Parlementia", "Avalanche", "Cenitz"] },
  { name: "Vendee Coast", area: "France", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cool, usually 11-20C", wave: "Friendly beach breaks with lots of room", vibe: "Family beach towns, bike paths, and mellow Atlantic surf", spots: ["Les Sables", "Bud Bud", "La Tranche"] },
  { name: "Cornwall / Newquay", area: "United Kingdom", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand", "reef"], wavePower: "decent", crowdFactor: "Medium to high", waterTemp: "Cold, usually 9-16C", wave: "Cold-water beaches and reefs with consistent Atlantic swell", vibe: "Pub evenings, surf schools, cliffs, and classic UK surf culture", spots: ["Fistral", "Watergate Bay", "Porthleven", "Gwithian"] },
  { name: "Croyde", area: "Devon, United Kingdom", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "decent", crowdFactor: "High on good days", waterTemp: "Cold, usually 9-16C", wave: "Punchy beach break with fast low-tide peaks", vibe: "Village pubs, green hills, and powerful short-period sessions", spots: ["Croyde Bay", "Saunton", "Putsborough"] },
  { name: "Gower Peninsula", area: "Wales, United Kingdom", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand", "reef"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cold, usually 8-15C", wave: "Scenic beaches with reefs and beginner-friendly options", vibe: "Wild dunes, cold water, and quiet coastal villages", spots: ["Llangennith", "Langland", "Rhossili"] },
  { name: "Scarborough / Cayton Bay", area: "England, United Kingdom", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["reef", "sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cold, usually 7-14C", wave: "North Sea reefs and beaches with cold, punchy swell", vibe: "Yorkshire grit, winter suits, and compact reef checks", spots: ["Cayton Bay", "North Bay", "South Bay"] },
  { name: "Lahinch", area: "Ireland", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand", "reef"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cold, usually 8-14C", wave: "Beginner-friendly beach with reefs nearby", vibe: "Irish pubs, cliffs, green fields, and cold-water progression", spots: ["Lahinch Beach", "Spanish Point", "Doolin"] },
  { name: "Sligo / Strandhill", area: "Ireland", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["reef", "sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cold, usually 8-14C", wave: "Powerful reefs and beach breaks on a scenic Atlantic coast", vibe: "Cold water, music nights, mountains, and real swell exposure", spots: ["Strandhill", "Easkey", "Enniscrone"] },
  { name: "Portrush", area: "Northern Ireland", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand", "reef"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cold, usually 8-14C", wave: "Cold-water beaches and reefs with North Atlantic swell", vibe: "Causeway coast scenery, pubs, and practical surf-town logistics", spots: ["East Strand", "West Strand", "Whiterocks"] },
  { name: "Hoddevik", area: "Norway", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["beginner", "intermediate"], budget: "high", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Low to medium", waterTemp: "Cold, usually 5-13C", wave: "Protected cold-water beach break beneath steep mountains", vibe: "Nordic scenery, cabins, saunas, and gentle cold-water peaks", spots: ["Hoddevik Beach", "Ervik", "Stadlandet"] },
  { name: "Lofoten", area: "Norway", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["intermediate"], budget: "high", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["reef", "sand"], wavePower: "decent", crowdFactor: "Low", waterTemp: "Cold, usually 4-11C", wave: "Arctic beach and reef waves in dramatic scenery", vibe: "Northern lights, cold-water adventure, and remote beauty", spots: ["Unstad", "Flakstad", "Eggum"] },
  { name: "Reykjanes Peninsula", area: "Iceland", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["intermediate", "advanced"], budget: "high", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["reef", "rock"], wavePower: "decent", crowdFactor: "Low", waterTemp: "Cold, usually 3-8C", wave: "Raw North Atlantic reefs with cold water and fast weather changes", vibe: "Volcanic coast, hot springs after surfing, and serious weather calls", spots: ["Sandvik", "Thorli", "Grindavik"] },
  { name: "Sardinia West Coast", area: "Italy", months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand", "reef"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Mild, usually 14-21C", wave: "Mediterranean beach and reef waves during swell windows", vibe: "Clear water, Italian villages, and weather-window chasing", spots: ["Capo Mannu", "Bugerru", "Porto Ferro"] },
  { name: "Sicily South Coast", area: "Italy", months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 2, bottom: ["sand", "reef"], wavePower: "mellow", crowdFactor: "Low to medium", waterTemp: "Mild, usually 15-21C", wave: "Mediterranean wind-swell peaks and reefs", vibe: "Food, history, warm-ish winters, and opportunistic surf windows", spots: ["Isola delle Correnti", "Marina di Ragusa", "Mondello"] },
  { name: "Canggu", area: "Bali, Indonesia", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["reef", "sand"], wavePower: "decent", crowdFactor: "Very high", waterTemp: "Warm, usually 27-29C", wave: "Busy reef and beach peaks with many ability levels", vibe: "Cafes, scooters, sunsets, and crowded but convenient Bali sessions", spots: ["Batu Bolong", "Echo Beach", "Berawa", "Pererenan"] },
  { name: "Keramas", area: "Bali, Indonesia", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["right"], quality: 4, bottom: ["reef"], wavePower: "decent", crowdFactor: "High", waterTemp: "Warm, usually 27-29C", wave: "Fast black-sand right reef with barrels and airs", vibe: "East Bali dawn sessions, resort comforts, and high-performance rights", spots: ["Keramas", "Cucukan", "Pabean"] },
  { name: "Kuta Bali", area: "Bali, Indonesia", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Very high", waterTemp: "Warm, usually 27-29C", wave: "Beginner-friendly beach break with endless surf schools", vibe: "Easy logistics, nightlife, lessons, and forgiving sand-bottom waves", spots: ["Kuta Beach", "Legian", "Seminyak"] },
  { name: "Batu Karas", area: "Java, Indonesia", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "low", tropical: true, directions: ["right"], quality: 3, bottom: ["sand", "reef"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Warm, usually 27-29C", wave: "Long mellow right point and beach options", vibe: "Quiet village, longboard energy, and friendly Java progression", spots: ["Batu Karas Point", "Reef", "Legok Pari"] },
  { name: "Pacitan", area: "Java, Indonesia", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "low", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["reef", "sand"], wavePower: "decent", crowdFactor: "Low to medium", waterTemp: "Warm, usually 27-29C", wave: "Reef slabs, points, and beaches in a quieter Java zone", vibe: "Cave coast scenery, scooters, and less-developed surf exploration", spots: ["Watu Karung", "Srau", "Pancer Door"] },
  { name: "Krui", area: "Sumatra, Indonesia", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["reef"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Warm, usually 27-30C", wave: "Consistent reef breaks with both lefts and rights", vibe: "South Sumatra reefs, guesthouses, and focused surf days", spots: ["Ujung Bocur", "Mandiri", "Way Jambu", "Krui Left"] },
  { name: "Cimaja", area: "Java, Indonesia", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate"], budget: "low", tropical: true, directions: ["right"], quality: 3, bottom: ["rock"], wavePower: "decent", crowdFactor: "Medium to high", waterTemp: "Warm, usually 27-29C", wave: "Cobblestone right with workable walls", vibe: "Weekend surf town, simple stays, and reliable Java swell", spots: ["Cimaja Point", "Sunset Beach", "Karang Hawu"] },
  { name: "West Sumbawa", area: "Indonesia", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["reef"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Warm, usually 27-29C", wave: "Reef barrels and playful peaks across several bays", vibe: "Remote island roads, blue water, and compact surf camps", spots: ["Yo-Yo's", "Tropical", "Super Sucks", "Scar Reef"] },
  { name: "Telo Islands", area: "Indonesia", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "high", tropical: true, directions: ["left", "right"], quality: 5, bottom: ["reef"], wavePower: "decent", crowdFactor: "Low to medium", waterTemp: "Warm, usually 27-30C", wave: "High-quality reef setups with boat or resort access", vibe: "Dream-trip reefs, fewer boats, and clear-water island rhythm", spots: ["Pinnacles", "Le Ba", "Max's Left", "GT's"] },
  { name: "Banyak Islands", area: "Indonesia", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "high", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["reef"], wavePower: "decent", crowdFactor: "Low to medium", waterTemp: "Warm, usually 27-30C", wave: "Remote reef breaks with boat-trip logistics", vibe: "Island camps, quiet lineups, and Indian Ocean swell windows", spots: ["Treasure Island", "Bay of Plenty", "Lolok Point"] },
  { name: "Rote / Boa", area: "Indonesia", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left"], quality: 4, bottom: ["reef"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Warm, usually 26-29C", wave: "Long left reef with wind and tide sensitivity", vibe: "Dry island landscapes, mellow villages, and left-point focus", spots: ["T-Land", "Boa", "Sucky Mamas"] },
  { name: "East Timor", area: "Timor-Leste", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["reef"], wavePower: "decent", crowdFactor: "Low", waterTemp: "Warm, usually 27-30C", wave: "Remote reef setups with exploration-heavy logistics", vibe: "Quiet coast, warm water, and proper adventure planning", spots: ["Dili Reefs", "Com", "Atauro"] },
  { name: "Baler", area: "Philippines", months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["beginner", "intermediate"], budget: "low", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand", "reef"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Warm, usually 27-29C", wave: "Beginner-friendly bay with reef points nearby", vibe: "Philippine surf history, warm water, and forgiving practice days", spots: ["Sabang Beach", "Cobra Reef", "Cemento"] },
  { name: "La Union", area: "Philippines", months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["beginner", "intermediate"], budget: "low", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "High", waterTemp: "Warm, usually 27-29C", wave: "Social beach-break zone with mellow town waves", vibe: "Weekend scene, cafes, lessons, and warm-water fun", spots: ["Urbiztondo", "Carille", "Monaliza"] },
  { name: "Guiuan / Samar", area: "Philippines", months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["reef"], wavePower: "decent", crowdFactor: "Low", waterTemp: "Warm, usually 27-29C", wave: "Pacific-facing reefs with typhoon-season energy", vibe: "Quiet islands, raw reefs, and more exploration than polish", spots: ["Calicoan", "ABCD Beach", "Divinubo"] },
  { name: "Da Nang", area: "Vietnam", months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["beginner", "intermediate"], budget: "low", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Low to medium", waterTemp: "Warm, usually 24-29C", wave: "Wind-swell beach breaks with forgiving sand bottom", vibe: "City food, beach hotels, and easy warm-water practice", spots: ["My Khe", "Non Nuoc", "China Beach"] },
  { name: "Cherating", area: "Malaysia", months: ["Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["beginner", "intermediate"], budget: "low", tropical: true, directions: ["left"], quality: 2, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Warm, usually 27-30C", wave: "Monsoon-season soft lefts and beach peaks", vibe: "Short-season novelty, longboards, local food, and easy waves", spots: ["Cherating Point", "Club Med", "Kuantan"] },
  { name: "Phuket West Coast", area: "Thailand", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Warm, usually 28-30C", wave: "Monsoon beach breaks with mellow, accessible peaks", vibe: "Thailand food, resorts, rain-season windows, and friendly surf", spots: ["Kata Beach", "Kalim", "Surin", "Nai Harn"] },
  { name: "Taitung / Jinzun", area: "Taiwan", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["rock", "sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Mild to warm, usually 22-28C", wave: "Pacific reefs and cobblestone breaks with consistent swell", vibe: "Green mountains, hot springs, and quality East Coast waves", spots: ["Jinzun Harbor", "Donghe", "Dulan"] },
  { name: "Yilan / Wushi", area: "Taiwan", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "mellow", crowdFactor: "High on weekends", waterTemp: "Mild to warm, usually 21-28C", wave: "Accessible beach breaks close to Taipei", vibe: "Train access, night markets, and forgiving northeast-coast peaks", spots: ["Wushi Harbor", "Toucheng", "Waiao"] },
  { name: "Chiba / Ichinomiya", area: "Japan", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"], levels: ["beginner", "intermediate", "advanced"], budget: "high", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["sand"], wavePower: "decent", crowdFactor: "High", waterTemp: "Cool to warm, usually 15-25C", wave: "Consistent Pacific beach breaks with contest-quality peaks", vibe: "Tokyo access, clean towns, ramen, and daily sandbar checks", spots: ["Shida Shita", "Ichinomiya", "Hebara"] },
  { name: "Shonan", area: "Japan", months: ["Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "high", tropical: false, directions: ["left", "right"], quality: 2, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Very high", waterTemp: "Mild to warm, usually 18-26C", wave: "Small, crowded beach breaks near Tokyo", vibe: "Easy trains, city beach culture, and mellow longboard days", spots: ["Kugenuma", "Enoshima", "Chigasaki"] },
  { name: "Miyazaki", area: "Japan", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"], levels: ["beginner", "intermediate", "advanced"], budget: "high", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["sand", "reef"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Mild to warm, usually 18-27C", wave: "Warm-ish Japanese beach breaks and reef points", vibe: "Friendly south Japan surf culture, good food, and reliable Pacific swell", spots: ["Kisakihama", "Okuragahama", "Aoshima"] },
  { name: "Shikoku / Kochi", area: "Japan", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"], levels: ["intermediate", "advanced"], budget: "high", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["reef", "sand", "rock"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Mild to warm, usually 17-26C", wave: "River mouths, reefs, and typhoon-season quality", vibe: "Rural Japan, clear rivers, and powerful Pacific setups", spots: ["Ikumi", "Kaifu", "Niyodo"] },
  { name: "Yangyang", area: "South Korea", months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 2, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cold to mild, usually 6-20C", wave: "East Sea beach breaks with growing surf-town energy", vibe: "Korean cafes, cold winters, and mellow beach-break sessions", spots: ["Jukdo Beach", "Surfyy Beach", "Ingu"] },
  { name: "Riyue Bay", area: "Hainan, China", months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand", "reef"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Warm, usually 23-28C", wave: "Warm-water beach and point-style waves", vibe: "Tropical China, resorts, and approachable winter surf", spots: ["Riyue Bay", "Shimei Bay", "Houhai"] },
  { name: "Varkala", area: "Kerala, India", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "low", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Low to medium", waterTemp: "Warm, usually 27-30C", wave: "Monsoon beach breaks under red cliffs", vibe: "Yoga, cliff cafes, warm water, and mellow surf windows", spots: ["Varkala Beach", "Edava", "Kappil"] },
  { name: "Kovalam", area: "Kerala, India", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "low", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Warm, usually 27-30C", wave: "Warm-water beach peaks and small points", vibe: "South India food, palm beaches, and casual monsoon sessions", spots: ["Lighthouse Beach", "Kovalam Point", "Hawa Beach"] },
  { name: "Mulki / Mantra", area: "Karnataka, India", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner"], budget: "low", tropical: true, directions: ["left", "right"], quality: 1, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Low", waterTemp: "Warm, usually 27-30C", wave: "Soft beach-break waves for learning", vibe: "Surf-school retreat, rivers, palm trees, and easy beginner days", spots: ["Mulki", "Sasihithlu", "Tannirbhavi"] },
  { name: "Southern Atolls", area: "Maldives", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "high", tropical: true, directions: ["left", "right"], quality: 5, bottom: ["reef"], wavePower: "decent", crowdFactor: "Low to medium", waterTemp: "Tropical, usually 27-30C", wave: "High-quality tropical reef passes with boat access", vibe: "Remote atolls, blue water, and less crowded Maldives surf", spots: ["Beacons", "Tiger Stripes", "Antiques", "Love Charms"] },
  { name: "Laamu Atoll", area: "Maldives", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "high", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["reef"], wavePower: "decent", crowdFactor: "Low to medium", waterTemp: "Tropical, usually 27-30C", wave: "Resort and boat-access reef setups with clean walls", vibe: "Luxury lagoon base, warm water, and polished reef logistics", spots: ["Ying Yang", "Machine", "Refugee's"] },
  { name: "Huvadhoo Atoll", area: "Maldives", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "high", tropical: true, directions: ["left", "right"], quality: 5, bottom: ["reef"], wavePower: "decent", crowdFactor: "Low", waterTemp: "Tropical, usually 27-30C", wave: "Remote, consistent reef passes with many setups", vibe: "Boat-trip focus, fewer people, and high-quality tropical options", spots: ["Blue Bowls", "Five Islands", "Castaways", "Beacons"] },
  { name: "Samoa South Coast", area: "Samoa", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["advanced"], budget: "high", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["reef"], wavePower: "chargers only", crowdFactor: "Low to medium", waterTemp: "Tropical, usually 27-30C", wave: "Powerful reef passes with shallow consequence", vibe: "Polynesian villages, reef passes, and advanced-only respect", spots: ["Boulders", "Coconuts", "Salani", "Aganoa"] },
  { name: "Tonga Ha'apai", area: "Tonga", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["advanced"], budget: "high", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["reef"], wavePower: "chargers only", crowdFactor: "Low", waterTemp: "Tropical, usually 25-28C", wave: "Remote reef breaks with serious logistics", vibe: "Open-ocean islands, whales in season, and uncrowded reef missions", spots: ["Ha'atafu", "Eua", "Ha'apai Reefs"] },
  { name: "Vanuatu Efate", area: "Vanuatu", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "high", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["reef"], wavePower: "decent", crowdFactor: "Low", waterTemp: "Tropical, usually 26-29C", wave: "Tropical reefs with swell-window sensitivity", vibe: "Island culture, reef checks, and quiet South Pacific exploration", spots: ["Pango Point", "Erakor", "Forari"] },
  { name: "New Caledonia", area: "South Pacific", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "high", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["reef"], wavePower: "decent", crowdFactor: "Low", waterTemp: "Warm, usually 23-27C", wave: "Barrier-reef passes with boat access and clear water", vibe: "French-Pacific food, lagoons, and remote reef logistics", spots: ["Dumbea", "Tenia", "Ouano"] },
  { name: "Byron Bay", area: "Australia", months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"], levels: ["beginner", "intermediate"], budget: "high", tropical: false, directions: ["right"], quality: 4, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "Very high", waterTemp: "Mild to warm, usually 20-26C", wave: "Long right points and beginner beaches", vibe: "Wellness town, longboards, cafes, and crowded beautiful points", spots: ["The Pass", "Wategos", "Tallows", "Broken Head"] },
  { name: "Sydney Northern Beaches", area: "Australia", months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"], levels: ["beginner", "intermediate", "advanced"], budget: "high", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["sand", "reef"], wavePower: "decent", crowdFactor: "Very high", waterTemp: "Mild to warm, usually 18-24C", wave: "Urban beaches, reefs, and point corners with many moods", vibe: "City surf, good coffee, high crowds, and constant options", spots: ["Manly", "Freshwater", "Dee Why", "Narrabeen"] },
  { name: "Newcastle", area: "Australia", months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["sand", "reef"], wavePower: "decent", crowdFactor: "Medium to high", waterTemp: "Mild to warm, usually 18-24C", wave: "Consistent beaches and reef corners with city access", vibe: "Working surf city, ocean baths, and quality everyday waves", spots: ["Merewether", "Dixon Park", "Bar Beach"] },
  { name: "South Coast NSW", area: "Australia", months: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["reef", "sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Mild, usually 17-23C", wave: "Reefs, beaches, and points through national-park coastline", vibe: "Road-trip bays, forested headlands, and flexible swell windows", spots: ["Ulladulla", "Mollymook", "Bendalong", "Aussie Pipe"] },
  { name: "Torquay / Surf Coast", area: "Victoria, Australia", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate", "advanced"], budget: "high", tropical: false, directions: ["right"], quality: 5, bottom: ["reef", "sand"], wavePower: "decent", crowdFactor: "High", waterTemp: "Cool, usually 13-19C", wave: "Right reefs and beaches with deep surf culture", vibe: "Classic Australian surf history, cold water, and powerful points", spots: ["Bells Beach", "Winki Pop", "Jan Juc", "Point Addis"] },
  { name: "Mornington Peninsula", area: "Victoria, Australia", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "high", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["reef", "sand"], wavePower: "decent", crowdFactor: "Medium to high", waterTemp: "Cool, usually 13-19C", wave: "Powerful back-beach peaks and reef corners", vibe: "Melbourne weekend missions, wineries, and raw Southern Ocean surf", spots: ["Gunnamatta", "Rye", "Portsea"] },
  { name: "Fleurieu Peninsula", area: "South Australia", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["reef", "sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cool, usually 13-19C", wave: "Cold-water reefs and beaches with wind-sensitive windows", vibe: "South Australian coast, wine country, and mixed-level surf checks", spots: ["Middleton", "Waitpinga", "Parsons", "Boomer"] },
  { name: "Perth / Trigg", area: "Western Australia", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "high", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand", "reef"], wavePower: "mellow", crowdFactor: "High", waterTemp: "Cool to mild, usually 17-22C", wave: "Urban beach breaks and small reef peaks", vibe: "City beach lifestyle, sunsets, and easy logistics", spots: ["Trigg", "Scarborough", "Cottesloe"] },
  { name: "Rottnest Island", area: "Western Australia", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "high", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["reef"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cool to mild, usually 17-22C", wave: "Island reefs with cleaner swell exposure than Perth", vibe: "Bike paths, clear water, and weekend island reef checks", spots: ["Strickland Bay", "Cathedrals", "Riceys"] },
  { name: "Tasmania East Coast", area: "Australia", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["reef", "sand"], wavePower: "decent", crowdFactor: "Low", waterTemp: "Cold, usually 11-16C", wave: "Cold-water reefs and beaches in remote scenery", vibe: "Empty beaches, wild weather, and rugged island exploration", spots: ["Eaglehawk Neck", "Bicheno", "Friendly Beaches"] },
  { name: "Whangamata", area: "New Zealand", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"], levels: ["intermediate", "advanced"], budget: "high", tropical: false, directions: ["left"], quality: 4, bottom: ["sand"], wavePower: "decent", crowdFactor: "High when on", waterTemp: "Cool, usually 14-21C", wave: "Famous left bar with long walls when sand lines up", vibe: "Kiwi beach town, long lefts, and timing-dependent sandbars", spots: ["Whangamata Bar", "Onemana", "Pauanui"] },
  { name: "Bay of Islands", area: "New Zealand", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"], levels: ["beginner", "intermediate"], budget: "high", tropical: false, directions: ["left", "right"], quality: 2, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Low to medium", waterTemp: "Mild, usually 15-22C", wave: "Scenic beach breaks that need swell direction", vibe: "Island scenery, sailing towns, and softer Northland surf", spots: ["Ahipara", "Taupo Bay", "Tokerau"] },
  { name: "Sumner / Christchurch", area: "New Zealand", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"], levels: ["beginner", "intermediate"], budget: "high", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cold, usually 10-16C", wave: "City beach breaks and nearby reefs", vibe: "South Island city comfort, cold water, and easy daily paddles", spots: ["Sumner", "New Brighton", "Taylors Mistake"] },
  { name: "Wairarapa Coast", area: "New Zealand", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"], levels: ["intermediate", "advanced"], budget: "high", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["reef", "rock"], wavePower: "decent", crowdFactor: "Low", waterTemp: "Cold, usually 11-17C", wave: "Remote reefs and points with raw swell exposure", vibe: "Windy farm roads, empty lineups, and committed cold-water exploration", spots: ["Castlepoint", "Riversdale", "Ngawi"] },
  { name: "Huanchaco", area: "Peru", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "low", tropical: false, directions: ["left"], quality: 3, bottom: ["rock", "sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cool, usually 16-21C", wave: "Long lefts and mellow point-style sections near town", vibe: "Ancient reed boats, seafood, and relaxed northern Peru surf", spots: ["Huanchaco", "El Elio", "Huanchaquito"] },
  { name: "Cerro Azul", area: "Peru", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "low", tropical: false, directions: ["left"], quality: 3, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Cool, usually 16-21C", wave: "Long mellow left near Lima with pier sections", vibe: "Easy Lima escape, longboard walls, and simple coastal food", spots: ["Cerro Azul", "Puerto Viejo", "Asia"] },
  { name: "Arica", area: "Chile", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"], levels: ["advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["reef", "rock"], wavePower: "chargers only", crowdFactor: "Medium to high", waterTemp: "Cool, usually 15-20C", wave: "Powerful desert reefs with barrels and shallow consequence", vibe: "Desert city, heavy reefs, and expert-level commitment", spots: ["El Gringo", "El Buey", "Las Machas"] },
  { name: "Matanzas", area: "Chile", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left"], quality: 3, bottom: ["sand", "rock"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cold, usually 11-16C", wave: "Windy lefts and cold-water point-style setups", vibe: "Kites, cliffs, seafood, and wind-aware surf windows", spots: ["Matanzas", "Puertecillo", "Topocalma"] },
  { name: "La Paloma", area: "Uruguay", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "Low to medium", waterTemp: "Cool, usually 12-22C", wave: "South Atlantic beaches and points with mellow-to-punchy peaks", vibe: "Quiet towns, mate, open beaches, and low-key surf culture", spots: ["La Aguada", "La Pedrera", "Santa Teresa"] },
  { name: "Mar del Plata", area: "Argentina", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand", "reef"], wavePower: "decent", crowdFactor: "High", waterTemp: "Cool, usually 10-20C", wave: "Urban Atlantic beach breaks and reef corners", vibe: "Argentine city surf, cafes, and cold winter consistency", spots: ["Biologia", "Waikiki", "Playa Grande"] },
  { name: "Florianopolis", area: "Brazil", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["sand", "rock"], wavePower: "decent", crowdFactor: "High", waterTemp: "Mild, usually 17-25C", wave: "Island beach breaks, points, and powerful sandbars", vibe: "Brazilian island life, nightlife, food, and many surf checks", spots: ["Joaquina", "Mole", "Campeche", "Santinho"] },
  { name: "Ubatuba", area: "Brazil", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "Medium to high", waterTemp: "Warm, usually 21-26C", wave: "Rainforest-backed beach breaks and mellow points", vibe: "Green coast, acai, family beaches, and many small coves", spots: ["Itamambuca", "Felix", "Vermelha", "Toninhas"] },
  { name: "Mompiche / Esmeraldas", area: "Ecuador", months: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["intermediate", "advanced"], budget: "low", tropical: true, directions: ["left"], quality: 4, bottom: ["sand", "rock"], wavePower: "decent", crowdFactor: "Low to medium", waterTemp: "Warm, usually 24-28C", wave: "Long left points and rivermouth sand with tropical rain-forest backing", vibe: "Quiet fishing towns, jungle coast, seafood, and left-point patience", spots: ["Mompiche Point", "Portete", "Same"] },
  { name: "Canoa / Manabi", area: "Ecuador", months: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["beginner", "intermediate"], budget: "low", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Low to medium", waterTemp: "Warm, usually 23-28C", wave: "Open beach-break peaks with forgiving sand-bottom days", vibe: "Backpacker beach town, warm water, Spanish schools, and easy practice", spots: ["Canoa Beach", "San Vicente", "Bahia"] },
  { name: "San Mateo / Manta", area: "Ecuador", months: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["intermediate", "advanced"], budget: "low", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["reef", "sand", "rock"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Warm, usually 23-28C", wave: "Point-style rights, reef corners, and punchy beach options", vibe: "Port-city comfort, dry-coast sunsets, and focused local lineups", spots: ["San Mateo", "Murcielago", "Santa Marianita"] },
  { name: "Nuqui / Choco", area: "Colombia", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand", "rock"], wavePower: "decent", crowdFactor: "Low", waterTemp: "Warm, usually 26-29C", wave: "Remote Pacific beach breaks and points with raw jungle energy", vibe: "Boat access, rain forest, whales in season, and uncrowded adventure", spots: ["Terco", "Pico de Loro", "Termales"] },
  { name: "Santa Marta / Caribbean Colombia", area: "Colombia", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "low", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["sand", "reef"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Warm, usually 26-29C", wave: "Short-period Caribbean peaks with scenic mountain backdrops", vibe: "Hostels, Tayrona hikes, warm evenings, and casual wave windows", spots: ["Buritaca", "Los Naranjos", "Mendihuaca"] },
  { name: "Cabarete / Encuentro", area: "Dominican Republic", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["reef", "sand"], wavePower: "mellow", crowdFactor: "Medium to high", waterTemp: "Tropical, usually 26-29C", wave: "Warm-water reef and beach peaks with a broad skill range", vibe: "Kitesurf afternoons, beach cafes, music, and easy surf-school logistics", spots: ["Encuentro", "Destroyer", "Playa Grande"] },
  { name: "Boston Bay / Port Antonio", area: "Jamaica", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["reef", "sand"], wavePower: "mellow", crowdFactor: "Low to medium", waterTemp: "Tropical, usually 26-29C", wave: "Caribbean reef and beach waves with soft-to-punchy trade-swell peaks", vibe: "Jerk shacks, green hills, warm water, and relaxed island timing", spots: ["Boston Bay", "Long Bay", "Makafresh"] },
  { name: "Eleuthera North", area: "Bahamas", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate", "advanced"], budget: "high", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["reef", "sand"], wavePower: "decent", crowdFactor: "Low", waterTemp: "Warm, usually 23-27C", wave: "Clear-water reef and beach setups that need winter swell windows", vibe: "Pink sand, quiet roads, expensive logistics, and beautiful blue-water checks", spots: ["Surfer's Beach", "Gregory Town", "Hatchet Bay"] },
  { name: "Abaco / Elbow Cay", area: "Bahamas", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate"], budget: "high", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["reef", "sand"], wavePower: "mellow", crowdFactor: "Low", waterTemp: "Warm, usually 23-27C", wave: "Small-window reefs and beach peaks in clear island water", vibe: "Boat days, pastel towns, reef snorkeling, and low-key surf hunting", spots: ["Elbow Cay", "Tilloo Cut", "Great Guana"] },
  { name: "Nassau / New Providence", area: "Bahamas", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "high", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["reef", "sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Warm, usually 23-27C", wave: "Short-window warm-water peaks when winter swell wraps in", vibe: "Resort comfort, restaurants, family activities, and occasional surf windows", spots: ["Goodman's Bay", "Love Beach", "Saunders"] },
  { name: "Long Island Bahamas", area: "Bahamas", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate"], budget: "high", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["reef", "sand"], wavePower: "mellow", crowdFactor: "Low", waterTemp: "Warm, usually 23-27C", wave: "Remote reef and beach waves with beautiful water and inconsistent swell", vibe: "Quiet island driving, blue holes, beaches, and patient forecast watching", spots: ["Cape Santa Maria", "Deadman's Cay", "Dean's Blue Hole Coast"] },
  { name: "San Juan / Pinones", area: "Puerto Rico", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["reef", "sand"], wavePower: "mellow", crowdFactor: "Medium to high", waterTemp: "Tropical, usually 26-29C", wave: "Urban reef and beach peaks with easy access and warm water", vibe: "Old San Juan nights, food kiosks, music, and quick dawn sessions", spots: ["La Ocho", "Pine Grove", "Aviones"] },
  { name: "Aguadilla / Isabela", area: "Puerto Rico", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["reef", "sand", "rock"], wavePower: "decent", crowdFactor: "High when good", waterTemp: "Tropical, usually 26-29C", wave: "Consistent northwest-coast reefs, beaches, and point-style corners", vibe: "Warm-water surf towns, local lineups, food trucks, and winter pulse hunting", spots: ["Jobos", "Wilderness", "Surfer's Beach", "Middles"] },
  { name: "Guadeloupe Le Moule", area: "Guadeloupe", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate", "advanced"], budget: "high", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["reef"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Tropical, usually 26-29C", wave: "Trade-swell reef waves with clear water and French-Caribbean flavor", vibe: "Creole food, reef passes, island roads, and stylish warm-water sessions", spots: ["Le Moule", "Anse Bertrand", "Port Louis"] },
  { name: "Martinique North Coast", area: "Martinique", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate"], budget: "high", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["reef", "rock"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Tropical, usually 26-29C", wave: "Reef and point-style setups beneath volcanic green hills", vibe: "French-Caribbean food, rum, winding roads, and warm reef checks", spots: ["Tartane", "Anse Bonneville", "Basse Pointe"] },
  { name: "Trinidad North Coast", area: "Trinidad and Tobago", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "Low to medium", waterTemp: "Tropical, usually 26-29C", wave: "Lush-coast beach breaks and points with trade-swell windows", vibe: "Rainforest roads, food stops, calypso energy, and quiet warm-water surf", spots: ["Toco", "Sans Souci", "Maracas"] },
  { name: "Tobago East Coast", area: "Trinidad and Tobago", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["reef", "sand"], wavePower: "mellow", crowdFactor: "Low", waterTemp: "Tropical, usually 26-29C", wave: "Soft reef and beach waves with calm island logistics", vibe: "Snorkeling, small beaches, relaxed guesthouses, and easy non-surf days", spots: ["Mount Irvine", "Bacolet", "Little Rockly Bay"] },
  { name: "Cayman Brac / East End", area: "Cayman Islands", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate"], budget: "high", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["reef"], wavePower: "mellow", crowdFactor: "Low", waterTemp: "Tropical, usually 26-29C", wave: "Short-window reef waves in very clear water", vibe: "Diving, caves, quiet resorts, and forecast-dependent surf checks", spots: ["Cayman Brac Reefs", "East End", "South Sound"] },
  { name: "Turks and Caicos North Shore", area: "Turks and Caicos", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate"], budget: "high", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["reef", "sand"], wavePower: "mellow", crowdFactor: "Low", waterTemp: "Tropical, usually 25-29C", wave: "Clear-water reef waves that need winter swell and local knowledge", vibe: "Luxury beaches, snorkeling, quiet coves, and occasional blue-water peaks", spots: ["Grace Bay Reefs", "Long Bay", "Northwest Point"] },
  { name: "Santa Catalina", area: "Panama", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["right"], quality: 4, bottom: ["reef", "rock"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Warm, usually 26-29C", wave: "Powerful right reef with long walls and a serious takeoff when bigger", vibe: "Diving trips, jungle coast, simple town life, and focused right-hand sessions", spots: ["La Punta", "Punta Brava", "Estero"] },
  { name: "Venao / Azuero", area: "Panama", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Warm, usually 26-29C", wave: "User-friendly bay peaks with enough push for progression", vibe: "Social beach town, surf schools, jungle hills, and easy partner-friendly days", spots: ["Playa Venao", "Cambutal", "Guanico"] },
  { name: "Dominical / Uvita", area: "Costa Rica", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Tropical, usually 27-29C", wave: "Consistent Pacific beach breaks with punch and size", vibe: "Jungle waterfalls, wildlife, yoga, and stronger sand-bottom surf", spots: ["Dominical", "Dominicalito", "Uvita"] },
  { name: "Tamarindo / Avellanas", area: "Costa Rica", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand", "reef"], wavePower: "mellow", crowdFactor: "High", waterTemp: "Tropical, usually 27-29C", wave: "Accessible beach breaks, reefs, and longboard-friendly peaks", vibe: "Restaurants, surf schools, sunset bars, and easy group-trip logistics", spots: ["Tamarindo", "Avellanas", "Langosta", "Grande"] },
  { name: "Jaco / Central Pacific", area: "Costa Rica", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "decent", crowdFactor: "Medium to high", waterTemp: "Tropical, usually 27-29C", wave: "Busy town beaches plus heavier nearby sandbars", vibe: "Easy nightlife, restaurants, tours, and a wide spread of surf intensity", spots: ["Jaco Beach", "Roca Loca", "Hermosa"] },
  { name: "El Paredon", area: "Guatemala", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "low", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Warm, usually 27-30C", wave: "Consistent black-sand beach breaks with powerful tropical peaks", vibe: "Volcanic sand, hostels, turtle releases, and strong warm-water sessions", spots: ["El Paredon", "La Choza", "Sipacate"] },
  { name: "Sipacate / Pacific Guatemala", area: "Guatemala", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate"], budget: "low", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["sand"], wavePower: "decent", crowdFactor: "Low to medium", waterTemp: "Warm, usually 27-30C", wave: "Raw Pacific beach breaks with open coastline and shifting peaks", vibe: "Simple lodges, mangroves, volcanic sunsets, and uncrowded checks", spots: ["Sipacate", "Paredon", "Iztapa"] },
  { name: "Las Flores / El Cuco", area: "El Salvador", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["right"], quality: 4, bottom: ["rock", "sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Warm, usually 27-30C", wave: "Long tropical right points with sections and playful walls", vibe: "Point-to-point boat checks, pupusas, warm water, and right-hand rhythm", spots: ["Las Flores", "Punta Mango", "El Cuco"] },
  { name: "Mizata / K59 Coast", area: "El Salvador", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["right"], quality: 4, bottom: ["rock", "sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Warm, usually 27-30C", wave: "Right points and rocky coves across a compact surf coast", vibe: "Clifftop stays, surf camps, warm evenings, and steady right-hand options", spots: ["Mizata", "K59", "K61", "El Zonte"] },
  { name: "San Juan del Sur", area: "Nicaragua", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "low", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Warm, usually 27-30C", wave: "Beach breaks and nearby points with offshore-wind reliability", vibe: "Backpacker town, boats, sunsets, restaurants, and beginner-friendly day trips", spots: ["Maderas", "Remanso", "Yankee"] },
  { name: "Playa Colorado / Tola", area: "Nicaragua", months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["sand", "reef"], wavePower: "decent", crowdFactor: "Medium to high", waterTemp: "Warm, usually 27-30C", wave: "Punchy beach breaks and reef corners with reliable offshore wind", vibe: "Resort gates, surf lodges, strong peaks, and serious early sessions", spots: ["Playa Colorado", "Panga Drops", "Popoyo Outer", "Santana"] },
  { name: "Baja Norte / Ensenada", area: "Mexico", months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["right"], quality: 4, bottom: ["reef", "rock"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cool, usually 14-20C", wave: "Cold Pacific reefs, points, and winter swell with road-trip access", vibe: "Tacos, desert cliffs, wineries, and powerful right-hand reef checks", spots: ["San Miguel", "Baja Malibu", "Salsipuedes"] },
  { name: "Todos Santos / Cerritos", area: "Baja California Sur, Mexico", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Mild to warm, usually 20-25C", wave: "Desert beach breaks and softer point-style corners", vibe: "Art town, desert sunsets, family beaches, and mellow Baja progression", spots: ["Cerritos", "San Pedrito", "La Pastora"] },
  { name: "San Blas / Nayarit", area: "Mexico", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "low", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "Low to medium", waterTemp: "Warm, usually 25-30C", wave: "Long tropical points and softer beach peaks during south swells", vibe: "Sleepy coast, seafood, mangroves, and longboard-friendly warm water", spots: ["Stoner's Point", "Las Islitas", "Matanchen"] },
  { name: "Pascuales / Colima", area: "Mexico", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["advanced"], budget: "low", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["sand"], wavePower: "chargers only", crowdFactor: "Medium", waterTemp: "Warm, usually 25-30C", wave: "Heavy black-sand beach-break barrels with strong currents", vibe: "Raw surf lodges, powerful waves, hot weather, and advanced-only respect", spots: ["Pascuales", "Cuyutlan", "Boca de Apiza"] },
  { name: "Ixtapa / Troncones", area: "Mexico", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Warm, usually 25-30C", wave: "Warm-water points and beaches with softer shoulders than Oaxaca", vibe: "Beach restaurants, relaxed villages, resorts nearby, and sunny point checks", spots: ["Troncones", "La Saladita", "Playa Linda"] },
  { name: "Barra de la Cruz", area: "Oaxaca, Mexico", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["right"], quality: 5, bottom: ["sand", "rock"], wavePower: "decent", crowdFactor: "Medium to high", waterTemp: "Warm, usually 25-30C", wave: "World-class right point with long walls and barrel sections", vibe: "Small village rhythm, organized access, warm water, and serious right-point timing", spots: ["Barra de la Cruz", "Chipehua", "Salina Cruz Coast"] },
  { name: "Acapulco / Revolcadero", area: "Mexico", months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Warm, usually 25-30C", wave: "Powerful Pacific beach breaks with tropical punch", vibe: "Classic resort-city energy, hot nights, and strong shorebreak sessions", spots: ["Revolcadero", "Bonfil", "Pie de la Cuesta"] },
  { name: "San Pancho / Nayarit", area: "Mexico", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["sand", "rock"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Warm, usually 24-29C", wave: "Friendly beach peaks and nearby reef/point options", vibe: "Artisan village, jungle hills, restaurants, and mellow partner-friendly surf days", spots: ["San Pancho", "Sayulita North", "Lo de Marcos"] },
  { name: "Lima City Beaches", area: "Peru", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["rock", "sand"], wavePower: "mellow", crowdFactor: "High", waterTemp: "Cool, usually 16-21C", wave: "Urban reefs and points with long lefts and year-round consistency", vibe: "Restaurants, city energy, grey-sky winter sessions, and easy logistics", spots: ["Makaha", "La Herradura", "Punta Roquitas", "Waikiki"] },
  { name: "Puemape / Pacasmayo Coast", area: "Peru", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "low", tropical: false, directions: ["left"], quality: 4, bottom: ["sand", "rock"], wavePower: "decent", crowdFactor: "Low to medium", waterTemp: "Cool, usually 16-21C", wave: "Long desert left points and wind-sensitive walls", vibe: "Northern Peru quiet, long lines, seafood, and patient left-point missions", spots: ["Puemape", "Pacasmayo", "El Faro"] },
  { name: "Iquique", area: "Chile", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 4, bottom: ["reef", "rock"], wavePower: "chargers only", crowdFactor: "Medium", waterTemp: "Cool, usually 15-20C", wave: "Desert-city reefs with punch, barrels, and serious local lineups", vibe: "Atacama cliffs, city convenience, heavy reefs, and committed paddles", spots: ["El Colegio", "La Punta", "Playa Cavancha"] },
  { name: "Buchupureo / Curanipe", area: "Chile", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left"], quality: 4, bottom: ["rock", "sand"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Cold, usually 11-16C", wave: "Cold-water left points and beach breaks under forested cliffs", vibe: "Cabins, fireplaces, seafood, and moody Chilean left-point days", spots: ["Buchupureo", "Pullay", "Curanipe"] },
  { name: "Pichilemu Town", area: "Chile", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left"], quality: 4, bottom: ["rock", "sand"], wavePower: "decent", crowdFactor: "Medium to high", waterTemp: "Cold, usually 11-16C", wave: "Long left points plus town beaches for different levels", vibe: "Cold-water surf capital, empanadas, cliffs, and flexible progression zones", spots: ["Punta de Lobos", "Infiernillo", "La Puntilla"] },
  { name: "Garopaba / Rosa", area: "Brazil", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand", "rock"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Mild, usually 17-25C", wave: "Southern Brazil beach breaks and protected bays with many options", vibe: "Lagoons, seafood, nightlife pockets, and pretty beach-town hopping", spots: ["Praia do Rosa", "Silveira", "Ferrugem"] },
  { name: "Saquarema / Itauna", area: "Brazil", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["sand", "rock"], wavePower: "decent", crowdFactor: "High", waterTemp: "Warm, usually 21-26C", wave: "Powerful competition-grade beach and point-style peaks", vibe: "Brazilian surf-town intensity, beach kiosks, and consistent Atlantic energy", spots: ["Itauna", "Vila", "Barrinha"] },
  { name: "Maresias / Sao Sebastiao", area: "Brazil", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["sand", "rock"], wavePower: "decent", crowdFactor: "High", waterTemp: "Warm, usually 21-26C", wave: "Punchy beach breaks and points along a green coastal highway", vibe: "Rainforest slopes, beach clubs, restaurants, and high-energy Brazilian surf", spots: ["Maresias", "Camburi", "Boicucanga"] },
  { name: "Fernando de Noronha", area: "Brazil", months: ["Nov", "Dec", "Jan", "Feb", "Mar"], levels: ["intermediate", "advanced"], budget: "high", tropical: true, directions: ["left", "right"], quality: 4, bottom: ["reef", "sand", "rock"], wavePower: "decent", crowdFactor: "Medium", waterTemp: "Tropical, usually 26-29C", wave: "Volcanic-island barrels and clear-water beach peaks", vibe: "Protected island scenery, diving, expensive logistics, and special-season surf", spots: ["Cacimba do Padre", "Boldro", "Conceicao"] },
  { name: "Guarda do Embau", area: "Brazil", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate"], budget: "medium", tropical: false, directions: ["left", "right"], quality: 3, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Mild, usually 17-25C", wave: "Rivermouth and beach-break peaks in a scenic village setting", vibe: "River crossing, relaxed bars, green hills, and mellow southern Brazil charm", spots: ["Guarda do Embau", "Prainha", "Pinheira"] },
  { name: "Rio de Janeiro Beaches", area: "Brazil", months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], levels: ["beginner", "intermediate", "advanced"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["sand", "rock"], wavePower: "decent", crowdFactor: "Very high", waterTemp: "Warm, usually 21-26C", wave: "Urban beach breaks and points under famous city scenery", vibe: "Restaurants, nightlife, mountains, beach culture, and crowded dawn sessions", spots: ["Arpoador", "Barra da Tijuca", "Prainha", "Macumba"] },
  { name: "Jericoacoara / Ceara", area: "Brazil", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Tropical, usually 26-29C", wave: "Windy tropical beach peaks and sand-bottom novelty windows", vibe: "Dunes, lagoons, kites, sunsets, and very strong non-surf appeal", spots: ["Jericoacoara", "Prea", "Paracuru"] },
  { name: "Natal / Genipabu", area: "Brazil", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["sand", "reef"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Tropical, usually 26-29C", wave: "Warm-water beach and reef peaks with consistent wind influence", vibe: "Dunes, buggy trips, seafood, and sunny partner-friendly beach days", spots: ["Ponta Negra", "Genipabu", "Pipa North"] },
  { name: "Joao Pessoa / Paraiba", area: "Brazil", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["reef", "sand"], wavePower: "mellow", crowdFactor: "Low to medium", waterTemp: "Tropical, usually 26-29C", wave: "Northeast Brazil reef and beach peaks with warm-water consistency", vibe: "Calmer city base, beaches, seafood, and soft tropical surf windows", spots: ["Intermares", "Jacare", "Tambau"] },
  { name: "Recife / Porto de Galinhas", area: "Brazil", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 2, bottom: ["reef", "sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Tropical, usually 26-29C", wave: "Warm reef and beach peaks with tide-sensitive windows", vibe: "Natural pools, restaurants, city access, and family-friendly non-surf days", spots: ["Maracaipe", "Cupe", "Boa Viagem"] },
  { name: "Salvador / Stella Maris", area: "Brazil", months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"], levels: ["beginner", "intermediate"], budget: "medium", tropical: true, directions: ["left", "right"], quality: 3, bottom: ["reef", "sand"], wavePower: "mellow", crowdFactor: "Medium", waterTemp: "Tropical, usually 25-29C", wave: "Warm-water beach and reef peaks beside a culture-heavy city", vibe: "Bahian food, music, beaches, history, and easy warm-water surf mornings", spots: ["Stella Maris", "Jaguaribe", "Praia do Flamengo"] },
];

destinations.push(...additionalSurfAreas.map(createAdditionalDestination));

function createAdditionalDestination(entry) {
  return {
    season: readableSeason(entry.months),
    tagline: entry.tagline || areaTagline(entry),
    description:
      entry.description ||
      `${entry.name} is a surf area in ${entry.area} with ${entry.wave.toLowerCase()}. It fits ${levelRangeLabel(
        entry.levels,
      ).toLowerCase()} surfers when the season and local conditions line up.`,
    image: `https://source.unsplash.com/1800x1200/?${encodeURIComponent(`${entry.name} ${entry.area} surf waves`)}`,
    caption: `${entry.name} surf area.`,
    query: `${entry.name} ${entry.area} surf waves`,
    map: `${entry.name} ${entry.area}`,
    ...entry,
  };
}

function readableSeason(seasonMonths) {
  if (!seasonMonths.length) return "Season varies";
  return `${seasonMonths[0]} to ${seasonMonths[seasonMonths.length - 1]}`;
}

function areaTagline(entry) {
  const level = entry.levels.includes("beginner")
    ? "progression"
    : entry.wavePower === "chargers only"
      ? "serious surf"
      : "surf-trip";

  return `${titleCase(level)} area`;
}

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
    wavePower: "decent",
    crowdFactor: "Medium, heavier at Outer Reef",
    waterTemp: "Warm, usually 26-29C",
    consistencyBase: 82,
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
    crowdFactor: "High in season and on July pulses",
    waterTemp: "Warm, usually 27-29C",
    consistencyBase: 58,
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

destinations.forEach((destination, index) => {
  Object.assign(
    destination,
    {
      index,
      wavePower: "decent",
      crowdFactor: "Medium",
      waterTemp: "Seasonal",
    },
    destination,
    surfDetailsByName[destination.name] || {},
  );
  destination.waveLevel = destination.waveLevel || waveLevelFromProfile(destination);
});

const state = {
  selected: 0,
  currentPage: 1,
  moreInfoOpen: false,
  monthMetric: "consistency",
  renderVersion: 0,
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
  moreInfo: document.querySelector("#moreInfo"),
  spotGuide: document.querySelector("#spotGuide"),
  facts: document.querySelector("#destinationFacts"),
  partnerGuide: document.querySelector("#partnerGuide"),
  monthGuide: document.querySelector("#monthGuide"),
  reviews: document.querySelector("#areaReviews"),
  actions: document.querySelector("#destinationActions"),
  image: document.querySelector("#destinationImage"),
  caption: document.querySelector("#destinationCaption"),
  photoDots: document.querySelector("#photoDots"),
  featureVisual: document.querySelector(".feature-visual"),
  resultsCount: document.querySelector("#resultsCount"),
  cardStrip: document.querySelector("#cardStrip"),
  pagination: document.querySelector("#pagination"),
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const resultsPerPage = 20;
const originCoordinates = {
  tlv: [32.0853, 34.7818],
  "tel aviv": [32.0853, 34.7818],
  israel: [31.0461, 34.8516],
  london: [51.5072, -0.1276],
  paris: [48.8566, 2.3522],
  lisbon: [38.7223, -9.1393],
  madrid: [40.4168, -3.7038],
  "new york": [40.7128, -74.006],
  "los angeles": [34.0522, -118.2437],
  miami: [25.7617, -80.1918],
  sydney: [-33.8688, 151.2093],
  melbourne: [-37.8136, 144.9631],
  auckland: [-36.8509, 174.7645],
  bali: [-8.3405, 115.092],
};

const spotCatalog = {
  "Puerto Escondido": ["Zicatela", "La Punta", "Carrizalillo", "Playa Marinero"],
  "La Saladita": ["La Saladita Point", "The Ranch", "Troncones", "Playa Linda"],
  Peniche: ["Supertubos", "Baleal", "Cantinho da Baia", "Lagide", "Molhe Leste", "Consolacao"],
  "Arugam Bay": ["Main Point", "Baby Point", "Whiskey Point", "Peanut Farm", "Elephant Rock", "Okanda"],
  Hikkaduwa: ["Main Reef", "Benny's", "North Jetty", "Beach Break", "Owakanda"],
  "Midigama / Weligama": ["Weligama Bay", "Lazy Left", "Lazy Right", "Ram's", "Plantations", "Coconuts"],
  Itacare: ["Tiririca", "Resende", "Ribeira", "Engenhoca", "Itacarezinho"],
  Pipa: ["Praia do Amor", "Madeiro", "Cacimbinhas", "Lajao", "Curral"],
  "El Tunco / La Libertad": ["Punta Roca", "Sunzal", "La Bocana", "K59", "El Zonte", "Mizata"],
  Popoyo: ["Main Reef", "Outer Reef", "Beginner Bay", "Santana", "Lance's Left"],
  "Northwest Australia": ["Red Bluff", "Gnaraloo", "Tombstones", "The Bluff", "Turtles"],
  Mentawai: ["HT's / Lance's Right", "Rifles", "Macaronis", "Bankvaults", "Telescopes", "Greenbush"],
  "G-Land": ["Speedies", "Money Trees", "Launching Pads", "Kongs", "Tiger Tracks"],
  Uluwatu: ["Temples", "The Peak", "Racetracks", "Outside Corner", "Padang Padang", "Bingin", "Impossibles"],
  Lombok: ["Desert Point", "Mawi", "Gerupuk Inside", "Gerupuk Outside", "Ekas", "Selong Belanak"],
  "Tofo / Tofinho": ["Tofinho Point", "Tofo Beach", "Barra", "Guinjata Bay", "Paindane"],
  "Ponta do Ouro": ["Ponta Point", "Malongane", "Techobanine", "Frederico's"],
  "Ponta Preta / Sal": ["Ponta Preta", "Kite Beach", "Alibaba", "Santa Maria", "Canoa"],
  "Fuerteventura North": ["North Shore", "El Hierro", "Majanicho", "Rocky Point", "Lobos"],
  "Famara / Lanzarote": ["Famara", "San Juan", "La Santa", "El Quemao", "Orzola"],
  "Playa de las Americas": ["Spanish Left", "La Derecha del Cartel", "El Conquistador", "Fitenia", "Las Palmeras"],
  Taghazout: ["Anchor Point", "Killer Point", "Hash Point", "Panorama", "Banana Point", "Boilers"],
  Imsouane: ["The Bay", "Cathedral Point", "Magic Bay", "Tildi"],
  Safi: ["Safi Point", "Ras Lafaa", "Lalla Fatna"],
  "Razo / Pantin": ["Razo", "Pantin", "Doninos", "Valdovino", "Sabon"],
  Hossegor: ["La Graviere", "La Nord", "Les Culs Nus", "La Sud", "Estagnots", "Capbreton"],
  Biarritz: ["Cote des Basques", "Grande Plage", "Marbella", "Milady", "Anglet"],
  Mundaka: ["Mundaka Left", "Laida", "Bakio", "Laga", "Sopelana"],
  Ericeira: ["Ribeira d'Ilhas", "Coxos", "Crazy Left", "Pedra Branca", "Foz do Lizandro", "Sao Juliao"],
  Bundoran: ["The Peak", "Tullan Strand", "Rossnowlagh", "Streedagh"],
  Thurso: ["Thurso East", "Brims Ness", "The Bowl", "Sandside Bay", "Strathy"],
  "Jeffreys Bay": ["Supertubes", "Boneyards", "Impossibles", "Point", "Albatross"],
  Durban: ["New Pier", "North Beach", "Dairy Beach", "Snake Park", "Cave Rock", "Umhlanga"],
  Nosara: ["Playa Guiones", "Playa Pelada", "Ostional", "Garza", "Playa Nosara"],
  "Santa Teresa": ["Playa Santa Teresa", "Suck Rock", "Playa Carmen", "Hermosa", "Mal Pais"],
  Pavones: ["Pavones Point", "Punta Banco", "Rio Claro", "Pilon"],
  Montanita: ["Montanita Point", "La Punta", "Olon", "Manglaralto", "Ayampe"],
  Chicama: ["El Cape", "The Point", "El Hombre", "El Malpaso", "Huanchaco"],
  "Punta de Lobos": ["El Mirador", "Los Morros", "Pichilemu", "Infiernillo", "La Puntilla"],
  Rincon: ["Domes", "Maria's", "Tres Palmas", "Sandy Beach", "Pools"],
  "Soup Bowl": ["Soup Bowl", "Parlour", "Brandons", "South Point", "Freights"],
  "Bocas del Toro": ["Paunch", "Bluff", "Carenero", "Silverbacks", "Wizard Beach"],
  Raglan: ["Manu Bay", "Whale Bay", "Indicators", "Ngarunui Beach", "Ruapuke"],
  "Gold Coast": ["Snapper Rocks", "Rainbow Bay", "Greenmount", "Kirra", "Burleigh Heads", "Duranbah"],
  "Margaret River": ["Main Break", "The Box", "North Point", "Gracetown", "Injidup", "Yallingup"],
  Cloudbreak: ["Cloudbreak", "Restaurants", "Namotu Lefts", "Wilkes", "Swimming Pools"],
  Teahupoo: ["Teahupoo", "Papara", "Taapuna", "Papenoo", "Vairao"],
  Siargao: ["Cloud 9", "Jacking Horse", "Quicksilver", "Stimpy's", "Rock Island", "Daku"],
  "North Shore Oahu": ["Pipeline", "Backdoor", "Sunset Beach", "Haleiwa", "Rocky Point"],
  Waikiki: ["Canoes", "Queens", "Publics", "Pops", "Ala Moana Bowls"],
  Makaha: ["Makaha Point", "Makaha Bowl", "Lahilahi", "Yokohama"],
  "Ala Moana Bowls": ["Bowls", "Kaisers", "Rockpiles", "Courts", "Concessions"],
  "Honolua Bay": ["Honolua Bay", "Honokohau", "Flemings", "S-Turns"],
  Hookipa: ["Pavilions", "Middles", "H-Poko", "Lanes", "Mama's"],
  "Hanalei Bay": ["Hanalei Pier", "Pine Trees", "Tunnels", "Cannons", "Hideaways"],
  Banyans: ["Banyans", "Lyman's", "Kahaluu", "Pine Trees", "Honolii"],
  Papara: ["Papara", "Taharuu", "Papenoo", "Sapinus"],
  Taapuna: ["Taapuna", "Sapinus", "Maraa", "Vairao"],
  Haapiti: ["Haapiti", "Temae", "Atiha", "Cook's Bay"],
  Restaurants: ["Restaurants", "Cloudbreak", "Namotu Lefts", "Wilkes"],
  "Frigates Passage": ["Frigates", "Yanuca", "Beqa Passage", "Serua"],
  "Namotu Lefts": ["Namotu Lefts", "Wilkes", "Swimming Pools", "Tavarua Rights"],
  Natadola: ["Natadola Beach", "Hideaway", "Sigatoka Sand Dunes"],
  Sigatoka: ["Sigatoka Rivermouth", "Natadola", "Hideaway", "Beachhouse"],
  Piha: ["Lion Rock", "South Piha", "North Piha", "Karekare", "Muriwai"],
  "Taranaki Surf Highway": ["Stent Road", "Kumara Patch", "Fitzroy Beach", "Back Beach", "Oakura"],
  Gisborne: ["Wainui Beach", "Makorori", "Roberts Road", "Sponge Bay", "Midway"],
  Kaikoura: ["Mangamaunu", "Meatworks", "Kahutara", "Oaro"],
  "St Clair / Dunedin": ["St Clair", "St Kilda", "Blackhead", "Aramoana", "Karitane"],
  "Mount Maunganui": ["Main Beach", "Tay Street", "Omanu", "Matakana Island", "Papamoa"],
  Lobitos: ["Lobitos", "Piscinas", "El Hueco", "Baterias", "Muelles"],
  Mancora: ["Mancora Point", "Organos", "Punta Ballenas", "Vichayito"],
  "Cabo Blanco": ["Cabo Blanco", "Panic Point", "Lobitos", "Organos"],
  "Punta Hermosa": ["Senoritas", "Caballeros", "La Isla", "Punta Rocas"],
  Pacasmayo: ["El Faro", "Pacasmayo Point", "Puemape", "Chicama"],
  "Tamarin Bay": ["Tamarin Bay", "Dal", "Black Stone", "Le Morne"],
  "One Eye / Le Morne": ["One Eye", "Manawa", "Chameau", "Little Reef"],
  "Black Rocks": ["Black Rocks", "Tamarin", "La Gaulette", "Poste Lafayette"],
  "Bells Beach": ["Bells Bowl", "Winki Pop", "Rincon", "Jan Juc", "Point Addis"],
  Noosa: ["First Point", "Tea Tree", "Granite Bay", "National Park", "Sunshine Beach"],
  "Cactus Beach": ["Cactus", "Castles", "Caves", "Cunns"],
  Nias: ["Lagundri Bay", "Indicators", "Kiddies Corner", "The Machine"],
  "Desert Point": ["Desert Point", "Bangko-Bangko", "Seger", "Mawi"],
  "Lakey Peak": ["Lakey Peak", "Lakey Pipe", "Periscopes", "Nungas", "Cobblestones"],
  Nemberala: ["T-Land", "Sucky Mamas", "Boa", "Do'o Island"],
  "Nihiwatu / Sumba": ["Occy's Left", "Miller's Right", "Pero", "Marosi"],
  Simeulue: ["Dylan's Right", "Tea Bags", "Thailands", "The Peak", "Mahi Mahi"],
  "Male Atolls": ["Cokes", "Chickens", "Sultans", "Honky's", "Jailbreaks", "Ninjas"],
  "Central Atolls": ["Mikado", "Machines", "Refugee's Left", "Finnimas", "Bedhuge"],
  "Playa Hermosa": ["Playa Hermosa", "Terrazas", "Backyard", "Tulin"],
  "Witches Rock / Ollies": ["Witch's Rock", "Ollie's Point", "Playa Naranjo", "Playa Grande"],
  Sayulita: ["Sayulita Left", "Sayulita Right", "La Lancha", "Burros"],
  "Salina Cruz": ["Punta Conejo", "Chipehua", "Barra de la Cruz", "La Bocana"],
  "Punta Mita": ["La Lancha", "Burros", "El Anclote", "Stinky's", "Punta Burros"],
  "Scorpion Bay": ["First Point", "Second Point", "Third Point", "Fourth Point"],
  Tofino: ["Cox Bay", "Chesterman Beach", "Long Beach", "Wickaninnish", "Florencia Bay"],
};

function getFilters() {
  const formData = new FormData(elements.form);
  return {
    month: formData.get("month"),
    level: formData.get("level"),
    budget: formData.get("budget"),
    direction: directionFromValue(formData.get("direction")),
    tropical: elements.tropical.checked,
    minConsistency: Number(formData.get("minConsistency") || 0),
    maxCrowd: Number(formData.get("maxCrowd") || 0),
    nonSurfPartner: formData.get("nonSurfPartner") === "on",
    origin: String(formData.get("origin") || "").trim(),
  };
}

function getSortMode() {
  return [...elements.sortInputs].find((input) => input.checked)?.value || "match";
}

function scoreDestination(destination, filters) {
  let score = 0;

  if (destination.months.includes(filters.month)) score += 4;
  if (destination.levels.includes(filters.level)) score += 4;
  if (filters.budget === "any" || destination.budget === filters.budget) score += 3;
  if (!filters.tropical || destination.tropical) score += 3;
  if (filters.tropical && !destination.tropical) score -= 4;
  if (filters.direction === "any") score += 1;
  if (filters.direction !== "any" && destination.directions.includes(filters.direction)) score += 3;
  if (filters.direction !== "any" && !destination.directions.includes(filters.direction)) score -= 2;

  const budgetOrder = ["low", "medium", "high"];
  const budgetGap = Math.abs(
    budgetOrder.indexOf(destination.budget) - budgetOrder.indexOf(filters.budget),
  );

  return filters.budget === "any" ? score : score - budgetGap;
}

function getRankedDestinations() {
  const filters = getFilters();

  return destinations
    .filter((destination) => destinationMatchesCore(destination, filters))
    .map((destination, index) => ({
      ...destination,
      index: destination.index,
      score: scoreDestination(destination, filters),
      matchPercent: matchPercentage(destination, filters),
    }))
    .sort((a, b) => b.matchPercent - a.matchPercent || b.score - a.score || a.name.localeCompare(b.name));
}

function matchPercentage(destination, filters) {
  const budgetOrder = ["low", "medium", "high"];
  const budgetGap =
    filters.budget === "any"
      ? 0
      : Math.abs(budgetOrder.indexOf(destination.budget) - budgetOrder.indexOf(filters.budget));
  const conditions = monthlyConditionMetrics(destination, filters.month);
  let score = 0;
  let total = filters.budget === "any" ? 80 : 100;

  if (destination.months.includes(filters.month)) score += 25;
  if (destination.levels.includes(filters.level)) score += 25;
  if (filters.budget !== "any") score += Math.max(0, 20 - budgetGap * 10);
  if (filters.direction === "any" || destination.directions.includes(filters.direction)) score += 15;
  if (!filters.tropical || destination.tropical) score += 15;

  if (filters.minConsistency > 0) {
    total += 15;
    score += thresholdScore(conditions.consistencyPercent, filters.minConsistency, 15, 0.45);
  }

  if (filters.maxCrowd > 0) {
    total += 10;
    score += Math.max(0, 10 - Math.max(0, conditions.crowdLevel - filters.maxCrowd) * 4);
  }

  if (filters.nonSurfPartner) {
    total += 35;
    score += partnerFitScore(destination) * 0.35;
  }

  return Math.round((score / total) * 100);
}

function destinationMatchesCore(destination, filters) {
  const directionMatches =
    filters.direction === "any" || destination.directions.includes(filters.direction);

  return (
    destinationMatchesSearch(destination, filters) &&
    destination.months.includes(filters.month) &&
    directionMatches
  );
}

function destinationMatchesSearch(destination, filters) {
  return destination.levels.includes(filters.level) && (!filters.tropical || destination.tropical);
}

function destinationMatchesFilters(destination, filters) {
  return (
    destinationMatchesCore(destination, filters) &&
    (filters.budget === "any" || destination.budget === filters.budget)
  );
}

function hasOptionalConditionFilters(filters) {
  return filters.minConsistency > 0 || filters.maxCrowd > 0 || filters.nonSurfPartner;
}

function thresholdScore(value, minimum, weight, missPenalty) {
  if (value >= minimum) return weight;

  return Math.max(0, weight - (minimum - value) * missPenalty);
}

function rangeOverlapScore(rangeMin, rangeMax, preferredMin, preferredMax, weight) {
  const low = Math.min(preferredMin, preferredMax);
  const high = Math.max(preferredMin, preferredMax);
  const overlap = Math.max(0, Math.min(rangeMax, high) - Math.max(rangeMin, low));
  const rangesTouch = Math.min(rangeMax, high) >= Math.max(rangeMin, low);

  if (rangesTouch) {
    return Math.min(weight, Math.max(weight * 0.35, weight * (overlap / Math.max(1, high - low))));
  }

  const distance = rangeMax < low ? low - rangeMax : rangeMin - high;

  return Math.max(0, Math.min(weight, weight - Math.max(0, distance) * 4));
}

function setBackground(destination, renderVersion = state.renderVersion) {
  elements.heroMedia.classList.add("is-changing");

  window.setTimeout(() => {
    if (renderVersion !== state.renderVersion) return;

    elements.heroMedia.style.backgroundImage = `url("${placePhotoUrl(destination, 1)}"), url("${destination.image}")`;
    elements.heroMedia.classList.remove("is-changing");
  }, 180);
}

function renderFeature(destination, filters, renderVersion = state.renderVersion) {
  elements.feature.classList.add("is-changing");
  stopPhotoCarousel();

  window.setTimeout(() => {
    if (renderVersion !== state.renderVersion) return;

    const photos = destinationPhotos(destination);

    elements.matchTitle.textContent = `${destination.name}, ${destination.area}`;
    elements.matchReason.textContent = buildReason(destination, filters);
    elements.tagline.textContent = displayTagline(destination.tagline);
    elements.name.textContent = destination.name;
    elements.description.textContent = destination.description;
    elements.waveDescription.textContent = waveDescription(destination);
    elements.spotDescription.textContent = spotDescription(destination);
    startPhotoCarousel(destination, photos);
    elements.moreInfo.hidden = !state.moreInfoOpen;
    elements.moreInfo.classList.toggle("is-open", state.moreInfoOpen);
    elements.spotGuide.innerHTML = spotGuide(destination);
    elements.monthGuide.innerHTML = monthlyGuide(destination, filters.month);
    elements.reviews.innerHTML = areaReviews(destination);

    elements.facts.innerHTML = [
      ["Wave quality", qualityRating(destination.quality)],
      ["Wave level", destination.waveLevel],
      ["Wave power", powerRating(destination.wavePower)],
      ["Crowd factor", destination.crowdFactor],
      ["Water temp", destination.waterTemp],
      ["Bottom", bottomLabel(destination.bottom)],
      ["Season", destination.season],
      ["Consistency", consistencyFact(destination, filters.month)],
      ["Surfer level", levelRangeLabel(destination.levels)],
      ["Wave type", destination.wave],
      ["Wave length", waveLengthLabel(destination)],
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

    elements.partnerGuide.hidden = !filters.nonSurfPartner;
    elements.partnerGuide.innerHTML = filters.nonSurfPartner ? partnerGuide(destination) : "";

    elements.actions.innerHTML = `
      <button class="action-link info-toggle" type="button" data-action="toggle-more">
        ${state.moreInfoOpen ? "Hide details" : "Show more"}
      </button>
      <a class="action-link" href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
        destination.query,
      )}" target="_blank" rel="noreferrer">Surf photos</a>
      <a class="action-link secondary" href="https://www.youtube.com/results?search_query=${encodeURIComponent(
        `${destination.query} waves`,
      )}" target="_blank" rel="noreferrer">Watch waves</a>
    `;

    elements.feature.classList.remove("is-changing");
  }, 170);
}

function renderEmptyFeature(filters, renderVersion = state.renderVersion) {
  if (renderVersion !== state.renderVersion) return;

  stopPhotoCarousel();
  elements.feature.classList.remove("is-changing");
  elements.matchTitle.textContent = "No matching area yet";
  elements.matchReason.textContent =
    "The results now only show areas that match month, level, tropical choice, and wave direction.";
  elements.tagline.textContent = "Try relaxing one core filter";
  elements.name.textContent = "No match";
  elements.description.textContent =
    "There are no surf areas in the database that fit this exact core setup. Budget, consistency, crowds, and partner fit are softer preferences, but month, level, tropical water, and wave direction are strict.";
  elements.waveDescription.textContent = "";
  elements.spotDescription.textContent = "";
  elements.facts.innerHTML = "";
  elements.partnerGuide.hidden = true;
  elements.partnerGuide.innerHTML = "";
  elements.actions.innerHTML = "";
  elements.moreInfo.hidden = true;
  elements.spotGuide.innerHTML = "";
  elements.monthGuide.innerHTML = "";
  elements.reviews.innerHTML = "";
  elements.image.src = "https://source.unsplash.com/1600x1200/?surfing,ocean,waves";
  elements.image.alt = "Ocean waves";
  elements.caption.textContent = "";
  elements.photoDots.innerHTML = "";
  elements.heroMedia.style.backgroundImage =
    'linear-gradient(135deg, rgba(6, 50, 58, 0.9), rgba(0, 125, 143, 0.62)), url("https://source.unsplash.com/1800x1200/?surfing,ocean,waves")';

  if (filters.budget !== "any") {
    elements.matchReason.textContent += " Budget is still used in the match percentage, but it will not hide otherwise good areas.";
  }
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
  if (!ranked.length) {
    elements.resultsCount.textContent =
      "No surf areas match that month, level, tropical choice, and wave direction. Change one core filter and try again.";
    elements.cardStrip.innerHTML = "";
    renderPagination(0);
    return;
  }

  const exactMatches = ranked.filter((destination) => destinationMatchesFilters(destination, filters));
  const sortedDestinations = sortDestinations(ranked, getSortMode(), filters);
  const pageCount = Math.max(1, Math.ceil(sortedDestinations.length / resultsPerPage));
  state.currentPage = Math.min(Math.max(1, state.currentPage), pageCount);
  const pageStart = (state.currentPage - 1) * resultsPerPage;
  const visibleDestinations = sortedDestinations.slice(pageStart, pageStart + resultsPerPage);
  const optionalConditionsActive = hasOptionalConditionFilters(filters);
  const distanceSortNeedsOrigin = getSortMode() === "distance" && !originCoordinate(filters.origin);

  elements.resultsCount.textContent = distanceSortNeedsOrigin
    ? "Enter a known city in Arriving from, like Tel Aviv, London, New York, or Sydney, to sort by distance."
    : exactMatches.length
    ? optionalConditionsActive
      ? `${exactMatches.length} core ${exactMatches.length === 1 ? "match" : "matches"} found. Optional condition choices are reflected in the percentages.`
      : `${exactMatches.length} exact ${exactMatches.length === 1 ? "match" : "matches"} found. Showing matching areas with percentages.`
    : optionalConditionsActive
      ? `No exact budget matches yet. Showing core matches ranked by your optional condition choices.`
      : `No exact budget matches yet. Showing core matches with match percentages.`;

  const strictFilterText = filters.tropical
    ? " Surfer level and tropical water are strict filters."
    : " Surfer level is a strict filter.";

  elements.resultsCount.textContent += `${strictFilterText} Page ${state.currentPage} of ${pageCount}, showing ${visibleDestinations.length} of ${ranked.length} areas.`;

  elements.cardStrip.innerHTML = visibleDestinations
    .map(
      (destination) => `
        <button class="spot-card" type="button" data-index="${destination.index}" aria-label="Choose ${destination.name} surf area">
          <span class="match-badge">${destination.matchPercent}% match</span>
          <img src="${placePhotoUrl(destination)}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${destination.image}'" />
          <span class="spot-card-content">
            <strong>${destination.name}</strong>
            <span>${destination.area} / ${destination.season}</span>
            <small>${cardWaveDescription(destination)}${distanceLabel(destination, filters)}</small>
          </span>
        </button>
      `,
    )
    .join("");

  renderPagination(pageCount);
}

function renderPagination(pageCount) {
  if (pageCount < 2) {
    elements.pagination.innerHTML = "";
    return;
  }

  elements.pagination.innerHTML = Array.from({ length: pageCount }, (_, index) => {
    const page = index + 1;
    const activeClass = page === state.currentPage ? " is-active" : "";

    return `<button class="${activeClass}" type="button" data-page="${page}" aria-label="Go to results page ${page}">${page}</button>`;
  }).join("");
}

function sortDestinations(destinationsToSort, sortMode, filters) {
  const sorted = [...destinationsToSort];

  sorted.sort((a, b) => {
    if (sortMode === "quality") return b.quality - a.quality || b.matchPercent - a.matchPercent;
    if (sortMode === "crowds") return monthlyCrowdSortScore(a, filters) - monthlyCrowdSortScore(b, filters) || b.matchPercent - a.matchPercent;
    if (sortMode === "consistency") return monthlyConsistencySortScore(b, filters) - monthlyConsistencySortScore(a, filters) || b.quality - a.quality;
    if (sortMode === "budget") return budgetScore(a) - budgetScore(b) || b.matchPercent - a.matchPercent;
    if (sortMode === "powerFit") return powerFitScore(b, filters.level) - powerFitScore(a, filters.level) || b.matchPercent - a.matchPercent;
    if (sortMode === "partner") return partnerFitScore(b) - partnerFitScore(a) || b.matchPercent - a.matchPercent;
    if (sortMode === "distance") return distanceScore(a) - distanceScore(b) || b.matchPercent - a.matchPercent;

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

function monthlyConsistencySortScore(destination, filters) {
  return monthlyConditionMetrics(destination, filters.month).consistencyPercent;
}

function monthlyCrowdSortScore(destination, filters) {
  return monthlyConditionMetrics(destination, filters.month).crowdLevel;
}

function budgetScore(destination) {
  return { low: 1, medium: 2, high: 3 }[destination.budget] || 2;
}

function powerScore(destination) {
  return { mellow: 1, decent: 2, "chargers only": 3 }[destination.wavePower] || 2;
}

function powerFitScore(destination, level) {
  const scores = {
    beginner: { mellow: 3, decent: 2, "chargers only": 0 },
    intermediate: { mellow: 2, decent: 3, "chargers only": 1 },
    advanced: { mellow: 1, decent: 2, "chargers only": 3 },
  };

  return (scores[level] || scores.intermediate)[destination.wavePower] || 1;
}

function distanceScore(destination) {
  const origin = originCoordinate(getFilters().origin);
  const target = destinationCoordinate(destination);

  if (!origin || !target) return Number.POSITIVE_INFINITY;

  return haversineDistance(origin, target);
}

function partnerFitScore(destination) {
  const text = `${destination.vibe} ${destination.description} ${destination.area}`.toLowerCase();
  let score = 38;

  if (destination.tropical) score += 14;
  if (destination.levels.includes("beginner")) score += 12;
  if (destination.budget !== "high") score += 8;
  if (crowdScore(destination) <= 3) score += 8;
  if (destination.wavePower !== "chargers only") score += 12;
  if (/town|cafe|food|seafood|beach bars|city|culture|sunset|scenic|easy|relaxed|guesthouses|restaurants|resort|island|warm/.test(text)) {
    score += 18;
  }
  if (/remote|isolation|camping|sharks|cold water|elite|slab|serious|logistics|commitment|expert-only/.test(text)) {
    score -= 24;
  }

  return Math.max(0, Math.min(100, score));
}

function partnerFriendlyRating(destination) {
  return Math.max(1, Math.min(5, Math.round(partnerFitScore(destination) / 20)));
}

function partnerGuide(destination) {
  const rating = partnerFriendlyRating(destination);
  const activityText = partnerActivities(destination, rating);
  const tripadvisorUrl = `https://www.tripadvisor.com/Search?q=${encodeURIComponent(
    `${destination.name} ${destination.area} things to do restaurants`,
  )}`;

  return `
    <div class="partner-guide-head">
      <span class="control-title">Girlfriend-friendly</span>
      <strong>${rating}/5</strong>
    </div>
    <div class="partner-bar" aria-label="Girlfriend-friendly rating ${rating} out of 5">
      ${Array.from({ length: 5 }, (_, index) => `<span class="${index < rating ? "is-filled" : ""}"></span>`).join("")}
    </div>
    <p>${escapeHtml(activityText)}</p>
    <a href="${tripadvisorUrl}" target="_blank" rel="noreferrer">Check current activities and restaurants on Tripadvisor</a>
  `;
}

function partnerActivities(destination, rating) {
  const text = `${destination.name} ${destination.area} ${destination.vibe} ${destination.description}`.toLowerCase();
  const ideas = [];

  if (/city|lisbon|porto|sydney|cape town|dakar|mar del plata|newcastle|da nang|tokyo|japan|taiwan|bali|canggu|waikiki|biarritz|san sebastian|zarautz|cascais|peniche|ericeira|florianopolis/.test(text)) {
    ideas.push("restaurants, cafes, markets, galleries, shopping, and easy town walks");
  }

  if (/island|tropical|lagoon|maldives|fiji|tahiti|samoa|tonga|vanuatu|siargao|philippines|bocas|barbados|puerto rico|mauritius|hainan|phuket|sri lanka|bali/.test(text)) {
    ideas.push("beach time, snorkeling or boat trips, sunset drinks, spas, and island day tours");
  }

  if (/green|rainforest|mountain|cliff|wild|national|forest|scenic|garden route|new zealand|norway|iceland|canada|tofino|galicia|asturias|cornwall|ireland|wales/.test(text)) {
    ideas.push("hikes, viewpoints, nature drives, photography stops, and slower scenic days");
  }

  if (/food|seafood|tagine|cafes|coffee|wine|restaurants|nightlife|bars|old town|medina|culture|music/.test(text)) {
    ideas.push("food spots, local culture, casual nightlife, and relaxed non-surf afternoons");
  }

  if (/remote|boat|camp|camping|logistics|reef focus|expert|serious|shallow|desert|long drives|adventure/.test(text)) {
    ideas.push("simple beach downtime and nature, but fewer polished restaurants or easy non-surf plans");
  }

  const fallback =
    rating >= 4
      ? "Good for a non-surfing travel partner: there should be enough restaurants, beach time, walks, and easy day activities between your sessions."
      : rating === 3
        ? "Works if she likes beach towns and slower travel: plan restaurants, short tours, and scenic breaks so the trip is not only surf checks."
        : "More surf-mission than couple holiday: check restaurant options and non-surf activities carefully before booking.";

  if (!ideas.length) return fallback;

  return `${fallback} Expect ${[...new Set(ideas)].slice(0, 3).join("; ")}.`;
}

function originCoordinate(origin) {
  const normalized = origin.toLowerCase();
  if (!normalized) return null;

  const match = Object.entries(originCoordinates).find(([name]) => normalized.includes(name));

  return match ? match[1] : null;
}

function destinationCoordinate(destination) {
  const value = `${destination.name} ${destination.area} ${destination.map}`.toLowerCase();
  const regions = [
    [/sri lanka|arugam|hikkaduwa|weligama|midigama/, [7.8731, 80.7718]],
    [/portugal|peniche|ericeira|nazare/, [39.3999, -8.2245]],
    [/france|hossegor|biarritz/, [43.6108, -1.4366]],
    [/spain|galicia|mundaka/, [42.8, -8.2]],
    [/canary|fuerteventura|lanzarote|tenerife/, [28.2916, -16.6291]],
    [/morocco|taghazout|imsouane|safi/, [31.7917, -7.0926]],
    [/mexico|oaxaca|guerrero|sayulita|salina|punta mita|scorpion/, [23.6345, -102.5528]],
    [/el salvador|nicaragua|costa rica|panama/, [10.5, -84.5]],
    [/brazil|bahia|pipa/, [-14.235, -51.9253]],
    [/peru|lobitos|mancora|cabo blanco|punta hermosa|pacasmayo|chicama/, [-9.19, -75.0152]],
    [/chile|punta de lobos/, [-35.6751, -71.543]],
    [/hawaii|oahu|maui|kauai|banyans|honolua|hookipa|waikiki|makaha|hanalei/, [20.7984, -156.3319]],
    [/indonesia|mentawai|g-land|uluwatu|lombok|nias|sumbawa|sumba|simeulue|rote|nemberala|lakey|desert point/, [-2.5, 118]],
    [/fiji|cloudbreak|restaurants|namotu|frigates|natadola|sigatoka/, [-17.7134, 178.065]],
    [/tahiti|teahupoo|papara|taapuna|moorea|haapiti/, [-17.6509, -149.426]],
    [/new zealand|raglan|piha|taranaki|gisborne|kaikoura|dunedin|maunganui/, [-40.9006, 174.886]],
    [/australia|gold coast|margaret|bells|noosa|cactus|northwest/, [-25.2744, 133.7751]],
    [/south africa|jeffreys|durban/, [-30.5595, 22.9375]],
    [/angola|cabo ledo|kwanza/, [-11.2027, 17.8739]],
    [/senegal|dakar/, [14.4974, -14.4524]],
    [/ghana|busua/, [7.9465, -1.0232]],
    [/liberia|robertsport/, [6.4281, -9.4295]],
    [/mozambique|tofo|ponta/, [-18.6657, 35.5296]],
    [/cape verde|sal/, [16.5388, -23.0418]],
    [/mauritius|tamarin|le morne|black rocks/, [-20.3484, 57.5522]],
    [/maldives|male atolls|central atolls/, [3.2028, 73.2207]],
    [/samoa/, [-13.759, -172.1046]],
    [/tonga/, [-21.1789, -175.1982]],
    [/vanuatu/, [-15.3767, 166.9592]],
    [/new caledonia/, [-20.9043, 165.618]],
    [/philippines|siargao|baler|la union|samar|guiuan/, [12.8797, 121.774]],
    [/vietnam|da nang/, [14.0583, 108.2772]],
    [/malaysia|cherating/, [4.2105, 101.9758]],
    [/thailand|phuket/, [15.87, 100.9925]],
    [/taiwan|taitung|yilan|wushi|jinzun/, [23.6978, 120.9605]],
    [/japan|chiba|shonan|miyazaki|shikoku/, [36.2048, 138.2529]],
    [/korea|yangyang/, [35.9078, 127.7669]],
    [/china|hainan|riyue/, [35.8617, 104.1954]],
    [/india|varkala|kovalam|mulki/, [20.5937, 78.9629]],
    [/ireland|bundoran/, [53.1424, -7.6921]],
    [/scotland|thurso/, [56.4907, -4.2026]],
    [/barbados|soup bowl/, [13.1939, -59.5432]],
    [/puerto rico|rincon/, [18.2208, -66.5901]],
    [/canada|tofino/, [56.1304, -106.3468]],
    [/united kingdom|cornwall|croyde|gower|scarborough|wales|england/, [55.3781, -3.436]],
    [/norway|hoddevik|lofoten/, [60.472, 8.4689]],
    [/iceland|reykjanes/, [64.9631, -19.0208]],
    [/italy|sardinia|sicily/, [41.8719, 12.5674]],
    [/uruguay|la paloma/, [-32.5228, -55.7658]],
    [/argentina|mar del plata/, [-38.4161, -63.6167]],
  ];
  const match = regions.find(([pattern]) => pattern.test(value));

  return match ? match[1] : null;
}

function haversineDistance(origin, target) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const earthKm = 6371;
  const dLat = toRadians(target[0] - origin[0]);
  const dLon = toRadians(target[1] - origin[1]);
  const lat1 = toRadians(origin[0]);
  const lat2 = toRadians(target[0]);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

  return earthKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function buildReason(destination, filters) {
  const seasonPhrase = destination.months.includes(filters.month)
    ? `${seasonMood(filters.month)} surf window`
    : `close-match season for ${filters.month}`;
  const levelPhrase = destination.levels.includes(filters.level)
    ? `${levelVibe(filters.level)} wave choice`
    : "a stretch option if conditions line up";
  const budgetPhrase =
    filters.budget === "any"
      ? "budget-flexible planning"
      : destination.budget === filters.budget
      ? `${budgetVibe(filters.budget)} trip feel`
      : `${titleCase(destination.budget)}-budget area with a different spend than your filter`;
  const extras = [];

  if (filters.direction !== "any") {
    extras.push(
      destination.directions.includes(filters.direction)
        ? `${filters.direction}-hand walls in the mix`
        : "less exact on wave direction",
    );
  }

  if (filters.tropical) {
    extras.push(destination.tropical ? "warm-water mornings" : "not a tropical pick, but still worth comparing");
  }

  if (filters.minConsistency > 0) {
    extras.push(`a preference for ${filters.minConsistency}%+ consistency`);
  }

  if (filters.maxCrowd > 0) {
    extras.push(`crowds around ${crowdChoiceLabel(filters.maxCrowd).toLowerCase()} or calmer`);
  }

  if (filters.nonSurfPartner) {
    extras.push(`${Math.round(partnerFitScore(destination))}% non-surfing partner fit`);
  }

  if (filters.origin && Number.isFinite(distanceScore(destination))) {
    extras.push(`${Math.round(distanceScore(destination)).toLocaleString("en-US")} km from ${filters.origin}`);
  }

  const extraSentence = extras.length ? ` You also get ${extras.join(" and ")}.` : "";

  return `${seasonPhrase} with ${levelPhrase}, ${budgetPhrase}, and a ${destination.vibe.toLowerCase()} vibe.${extraSentence}`;
}

function seasonMood(month) {
  const moods = {
    Jan: "winter",
    Feb: "winter",
    Mar: "early spring",
    Apr: "spring",
    May: "late spring",
    Jun: "early summer",
    Jul: "summer",
    Aug: "summer",
    Sep: "fall",
    Oct: "fall",
    Nov: "late fall",
    Dec: "winter",
  };

  return moods[month] || month;
}

function levelVibe(level) {
  const labels = {
    beginner: "friendly progression",
    intermediate: "room-to-improve",
    advanced: "more serious",
  };

  return labels[level] || level;
}

function budgetVibe(budget) {
  const labels = {
    low: "simple and affordable",
    medium: "comfortable but not crazy",
    high: "premium",
  };

  return labels[budget] || budget;
}

function crowdChoiceLabel(level) {
  const labels = {
    1: "Very low",
    2: "Low",
    3: "Medium",
    4: "Busy",
    5: "Very busy",
  };

  return labels[level] || "Any";
}

function displayTagline(tagline) {
  return tagline.replace(/^Best\s+/i, "");
}

function waveDescription(destination) {
  const direction = directionLabel(destination.directions).toLowerCase();
  const quality = qualityLabel(destination.quality).toLowerCase();
  const bottom = bottomLabel(destination.bottom).toLowerCase();
  const power = powerDescription(destination.wavePower);
  const length = waveLengthDescription(destination);

  return `${destination.name} is a ${quality} ${direction} setup with ${power} over ${bottom}. ${destination.wave}. ${length}`;
}

function spotDescription(destination) {
  const accessNote = accessDescription(destination);

  return `Area notes: use the ${destination.name} area as your base and check nearby breaks around ${destination.map}. ${accessNote} Expect ${destination.crowdFactor.toLowerCase()} crowds, ${bottomLabel(destination.bottom).toLowerCase()} bottom, and ${destination.waterTemp.toLowerCase()} water.`;
}

function spotGuide(destination) {
  const spots = knownSpots(destination);
  const firstSpot = spots[0];

  return `
    <h4>Known breaks and map</h4>
    <div class="spot-guide-grid">
      <div class="spot-list">
        ${spots
          .map(
            (spot, index) => `
              <button
                class="spot-item${index === 0 ? " is-active" : ""}"
                type="button"
                data-map-query="${escapeHtml(spot.mapQuery)}"
                data-spot-title="${escapeHtml(spot.name)}"
                aria-label="Show ${escapeHtml(spot.name)} on the map"
              >
                <strong>${escapeHtml(spot.name)}</strong>
                <span>${escapeHtml(spot.description)}</span>
              </button>
            `,
          )
          .join("")}
      </div>
      <div class="spot-map">
        <iframe
          class="spot-map-frame"
          title="${escapeHtml(firstSpot.name)} map"
          src="${escapeHtml(mapEmbedUrl(firstSpot.mapQuery))}"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <a class="map-link" href="${escapeHtml(mapSearchUrl(firstSpot.mapQuery))}" target="_blank" rel="noreferrer">Open map</a>
      </div>
    </div>
  `;
}

function knownSpots(destination) {
  const spotNames = destination.spots || spotCatalog[destination.name] || inferSpotNames(destination);

  return spotNames.map((name, index) => ({
    name,
    description: spotGuideDescription(name, destination, index),
    mapQuery: `${name} ${destination.map}`,
  }));
}

function inferSpotNames(destination) {
  const names = destination.name
    .split("/")
    .map((name) => name.trim())
    .filter(Boolean);

  return [...new Set([...names, `${destination.name} main surf break`, `${destination.name} beach breaks`])];
}

function spotGuideDescription(spotName, destination, index) {
  const name = spotName.toLowerCase();
  const base = `${bottomLabel(destination.bottom).toLowerCase()} bottom, ${powerDescription(
    destination.wavePower,
  )}, and ${directionLabel(destination.directions).toLowerCase()}.`;

  if (name.includes("desert point")) {
    return `${spotName} is a famous left reef barrel that gets very crowded when it is properly on. Expect ${base}`;
  }

  if (/(outer|box|jaws|peahi|silverbacks|pico alto|shipstern|teahupoo|skeleton|mullaghmore|greenbush|speedies)/i.test(name)) {
    return `${spotName} is one of the serious options in this area. Expect ${base} Treat it as advanced-only when swell is up.`;
  }

  if (/(bay|first point|canoes|queens|weligama|baby|beginner|selong|guiones|famara|natadola|sayulita)/i.test(name)) {
    return `${spotName} is usually the softer or more approachable part of the area. Expect ${base}`;
  }

  if (/(point|ponta|punta|anchor|sunzal|chicama|manu|snapper|kirra|honolua|pavones|lobitos|raglan|saladita)/i.test(name)) {
    return `${spotName} is a point-style setup to check for longer lines. Expect ${base}`;
  }

  if (/(reef|bowls|cloudbreak|restaurants|uluwatu|padang|bingin|coxos|rifles|macaronis|nias|desert|lakey|cokes|sultans)/i.test(name)) {
    return `${spotName} is a reef-focused spot where tide, size, and lineup awareness matter. Expect ${base}`;
  }

  if (/(beach|strand|playa|praia|graviere|zicatela|hermosa|piha|cox bay|chesterman)/i.test(name)) {
    return `${spotName} is a beach-break option with shifting peaks. Expect ${base}`;
  }

  return `${spotName} is a known option around ${destination.name}. Expect ${base} It is worth checking when wind, tide, and swell direction line up.`;
}

function mapEmbedUrl(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

function mapSearchUrl(query) {
  return `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
}

function monthlyGuide(destination, selectedMonth) {
  const rows = months.map((month) => monthlyConditions(destination, month));
  const metric = monthMetricConfig(state.monthMetric);
  const bars = rows
    .map((row) => {
      const details = monthMetricDetails(row, metric.key);
      const selectedClass = row.month === selectedMonth ? " is-selected" : "";
      const seasonClass = row.inSeason ? "" : " is-offseason";
      const height = Math.max(8, Math.round((details.value / metric.max) * 100));

      return `
        <span class="plot-bar${selectedClass}${seasonClass}">
          <i style="--bar-height: ${height}%"></i>
          <b>${row.month}</b>
          <small>${escapeHtml(details.label)}</small>
        </span>
      `;
    })
    .join("");

  return `
    <div class="month-panel-head">
      <h4>Month-by-month conditions</h4>
      <label>
        <span>Show</span>
        <select class="month-metric-select" aria-label="Choose monthly metric">
          ${["consistency", "wave", "water", "air", "crowds"]
            .map((key) => {
              const option = monthMetricConfig(key);
              return `<option value="${key}"${metric.key === key ? " selected" : ""}>${option.label}</option>`;
            })
            .join("")}
        </select>
      </label>
    </div>
    <div class="month-plot" role="img" aria-label="${escapeHtml(metric.label)} by month">
      <div class="plot-scale">
        <span>${escapeHtml(metric.topLabel)}</span>
        <span>${escapeHtml(metric.bottomLabel)}</span>
      </div>
      <div class="plot-bars">${bars}</div>
    </div>
    <p class="month-note">Planning estimates for the wider area, calibrated from season windows, wave exposure, power, and crowd notes. Check a live forecast before booking or paddling out.</p>
  `;
}

function monthMetricConfig(key) {
  const configs = {
    consistency: { key: "consistency", label: "Consistency", max: 100, topLabel: "100%", bottomLabel: "0%" },
    wave: { key: "wave", label: "Wave size", max: 12, topLabel: "12 ft", bottomLabel: "0 ft" },
    water: { key: "water", label: "Water temp", max: 32, topLabel: "32C", bottomLabel: "0C" },
    air: { key: "air", label: "Air temp", max: 36, topLabel: "36C", bottomLabel: "0C" },
    crowds: { key: "crowds", label: "Crowds", max: 5, topLabel: "Busy", bottomLabel: "Empty" },
  };

  return configs[key] || configs.consistency;
}

function monthMetricDetails(row, key) {
  if (key === "wave") {
    return { value: (row.waveMin + row.waveMax) / 2, label: row.waveSize };
  }

  if (key === "water") {
    return { value: averageRange(row.waterTemp), label: row.waterTemp };
  }

  if (key === "air") {
    return { value: averageRange(row.airTemp), label: row.airTemp };
  }

  if (key === "crowds") {
    return { value: row.crowdLevel, label: row.crowds };
  }

  return { value: row.consistencyPercent, label: row.consistency };
}

function monthlyConditions(destination, month) {
  const metrics = monthlyConditionMetrics(destination, month);

  return {
    month,
    inSeason: metrics.inSeason,
    crowdLevel: metrics.crowdLevel,
    waveMin: metrics.waveMin,
    waveMax: metrics.waveMax,
    consistencyPercent: metrics.consistencyPercent,
    waterTemp: monthlyWaterTemp(destination, month),
    crowds: monthlyCrowds(destination, metrics.inSeason, metrics.nearSeason),
    waveSize: monthlyWaveSize(destination, metrics.inSeason, metrics.nearSeason),
    airTemp: monthlyAirTemp(destination, month),
    consistency: monthlyConsistency(destination, metrics.inSeason, metrics.nearSeason),
  };
}

function monthlyConditionMetrics(destination, month) {
  const inSeason = destination.months.includes(month);
  const nearSeason = !inSeason && monthDistanceToSeason(destination.months, month) <= 1;
  const [waveMin, waveMax] = monthlyWaveRange(destination, inSeason, nearSeason);

  return {
    inSeason,
    nearSeason,
    crowdLevel: monthlyCrowdLevel(destination, inSeason, nearSeason),
    waveMin,
    waveMax,
    consistencyPercent: monthlyConsistencyPercent(destination, inSeason, nearSeason),
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
  const score = monthlyCrowdLevel(destination, inSeason, nearSeason);

  return ["Very low", "Low", "Medium", "Busy", "Very busy"][score - 1];
}

function monthlyCrowdLevel(destination, inSeason, nearSeason) {
  const base = crowdScore(destination);

  return Math.max(1, Math.min(5, base + (inSeason ? 1 : nearSeason ? 0 : -1)));
}

function monthlyWaveSize(destination, inSeason, nearSeason) {
  const [low, high] = monthlyWaveRange(destination, inSeason, nearSeason);

  return `${low}-${high} ft`;
}

function monthlyWaveRange(destination, inSeason, nearSeason) {
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

  return [low, high];
}

function monthlyConsistency(destination, inSeason, nearSeason) {
  const percent = monthlyConsistencyPercent(destination, inSeason, nearSeason);
  const label = percent >= 78 ? "High" : percent >= 58 ? "Good" : percent >= 40 ? "Possible" : "Low";

  return `${label} (${percent}%)`;
}

function monthlyConsistencyPercent(destination, inSeason, nearSeason) {
  const base = destination.consistencyBase || destinationReliability(destination);
  if (inSeason) return Math.max(35, Math.min(94, base));
  if (nearSeason) return Math.max(25, Math.min(74, base - 18));
  return Math.max(12, Math.min(52, base - 38));
}

function destinationReliability(destination) {
  const powerAdjustment = { mellow: 6, decent: 3, "chargers only": -4 }[destination.wavePower] || 0;
  const seasonWindowAdjustment = Math.min(destination.months.length, 8) * 1.4;
  const crowdPenalty = crowdScore(destination) >= 4 ? -3 : 0;

  return Math.round(46 + destination.quality * 7 + seasonWindowAdjustment + powerAdjustment + crowdPenalty);
}

function tempRange(value, fallback) {
  const matches = value.match(/-?\d+/g);
  if (!matches || matches.length < 2) return fallback;

  return [Number(matches[0]), Number(matches[1])];
}

function averageRange(value) {
  const matches = String(value).match(/-?\d+/g);
  if (!matches || matches.length < 2) return Number(matches?.[0] || 0);

  return (Number(matches[0]) + Number(matches[1])) / 2;
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
  const reviews = storedReviews(destination.name);

  return `
    <h4>Traveler reviews</h4>
    <form class="review-form" data-destination="${escapeHtml(destination.name)}">
      <label>
        <span>Name</span>
        <input name="reviewer" type="text" maxlength="40" placeholder="Optional" />
      </label>
      <label>
        <span>Rating</span>
        <select name="rating" aria-label="Trip rating">
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 star</option>
        </select>
      </label>
      <label class="review-text">
        <span>Your note</span>
        <textarea name="text" rows="3" maxlength="280" placeholder="How was the area for the trip?"></textarea>
      </label>
      <button type="submit">Add review</button>
      <small>Reviews are saved on this device for now. There is no public backend yet.</small>
    </form>
    ${
      reviews.length
        ? `<div class="review-grid">${reviews
            .map(
              (review) => `
                <article class="review-card">
                  <span class="review-score">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span>
                  <strong>${escapeHtml(review.reviewer || "Surf traveler")}</strong>
                  <p>${escapeHtml(review.text)}</p>
                </article>
              `,
            )
            .join("")}</div>`
        : `<p class="empty-reviews">No traveler reviews yet. Add one after you have been there.</p>`
    }
  `;
}

function storedReviews(destinationName) {
  try {
    const allReviews = JSON.parse(localStorage.getItem("wavecompassAreaReviews") || "{}");
    return Array.isArray(allReviews[destinationName]) ? allReviews[destinationName] : [];
  } catch {
    return [];
  }
}

function saveReview(destinationName, review) {
  try {
    const allReviews = JSON.parse(localStorage.getItem("wavecompassAreaReviews") || "{}");
    const existing = Array.isArray(allReviews[destinationName]) ? allReviews[destinationName] : [];
    allReviews[destinationName] = [review, ...existing].slice(0, 8);
    localStorage.setItem("wavecompassAreaReviews", JSON.stringify(allReviews));
  } catch {
    localStorage.setItem(
      "wavecompassAreaReviews",
      JSON.stringify({ [destinationName]: [review] }),
    );
  }
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
  return `${destination.waveLevel} / ${qualityLabel(destination.quality)} / ${bottomLabel(destination.bottom)}`;
}

function consistencyFact(destination, selectedMonth) {
  const metrics = monthlyConditionMetrics(destination, selectedMonth);
  const label =
    metrics.consistencyPercent >= 78
      ? "High"
      : metrics.consistencyPercent >= 58
        ? "Good"
        : metrics.consistencyPercent >= 40
          ? "Possible"
          : "Low";

  return `${label} in ${selectedMonth} (${metrics.consistencyPercent}% estimate)`;
}

function waveLengthLabel(destination) {
  const text = `${destination.name} ${destination.wave} ${destination.description}`.toLowerCase();

  if (/chicama|scorpion|pavones|raglan|saladita|imsouane|longest|very long|long lefts|long right|long walls|long rides|point/.test(text)) {
    return "Long rides";
  }

  if (/bay|beginner|soft|mellow|friendly|forgiving|longboard/.test(text)) {
    return "Long mellow sections";
  }

  if (/barrel|slab|fast|heavy|powerful|zicatela|padang|desert point|super|reef/.test(text)) {
    return "Short to medium, intense";
  }

  if (/beach|peaks|shifting|coves/.test(text)) {
    return "Short to medium peaks";
  }

  return "Medium-length rides";
}

function waveLengthDescription(destination) {
  const label = waveLengthLabel(destination);
  const descriptions = {
    "Long rides": "Expect longer rides when the swell lines up, with enough wall for flow, turns, and time to settle into the wave.",
    "Long mellow sections":
      "The rides can run for a while on softer days, making it friendly for trimming, practice, and relaxed sessions.",
    "Short to medium, intense":
      "The rides are usually shorter and more intense, so positioning and commitment matter more than cruising distance.",
    "Short to medium peaks":
      "Most rides are punchy short-to-medium peaks, with length changing a lot by sandbar, tide, and swell angle.",
    "Medium-length rides":
      "Most rides are medium length: enough room for a few good sections without feeling like a marathon point wave.",
  };

  return descriptions[label] || descriptions["Medium-length rides"];
}

function distanceLabel(destination, filters) {
  const origin = originCoordinate(filters.origin);
  const target = destinationCoordinate(destination);
  if (!origin || !target) return "";

  return ` / ${Math.round(haversineDistance(origin, target)).toLocaleString("en-US")} km`;
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

function powerRating(power) {
  const levels = {
    mellow: { label: "Mellow", width: "34%" },
    decent: { label: "Decent", width: "66%" },
    "chargers only": { label: "Heavy", width: "100%" },
  };
  const level = levels[power] || levels.decent;

  return `
    <span class="power-meter">
      <span class="power-track" aria-label="${level.label} wave power">
        <span class="power-fill" style="--power-width: ${level.width}"></span>
      </span>
      <small>${level.label}</small>
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

function levelRangeLabel(levels) {
  return levels.map(titleCase).join(" / ");
}

function waveLevelFromProfile(destination) {
  const hasBeginner = destination.levels.includes("beginner");
  const hasIntermediate = destination.levels.includes("intermediate");
  const hasAdvanced = destination.levels.includes("advanced");

  if (destination.wavePower === "chargers only") return "Expert / chargers only";
  if (hasAdvanced && !hasBeginner && destination.quality >= 4) return "Advanced";
  if (hasAdvanced && hasIntermediate && !hasBeginner) return "Intermediate to advanced";
  if (hasBeginner && hasAdvanced) return "Mixed levels";
  if (hasBeginner && hasIntermediate) return "Beginner to intermediate";
  if (hasBeginner) return "Beginner friendly";
  if (hasIntermediate) return "Intermediate";

  return "Conditions dependent";
}

function destinationPhotos(destination) {
  const queries = [
    { query: `${destination.query} surfer riding wave`, spot: `${destination.name} waves` },
    { query: `${destination.query} surfing barrel wave`, spot: `${destination.name} surf` },
    { query: `${destination.name} ${destination.area} surfer on wave`, spot: `${destination.name} lineup` },
    { query: `${destination.query} surf break ocean wave`, spot: `${destination.name} break` },
    { query: `${destination.name} ${destination.area} coastline beach scenery`, spot: `${destination.name} scenery` },
  ];

  return queries.map((photo, index) => ({
    src: sourcePhotoUrl(photo.query, destination.index, index),
    spot: photo.spot,
    source: index === 4 ? "Unsplash scenery search" : "Unsplash surf photo search",
  }));
}

function placePhotoUrl(destination, photoIndex = 0) {
  return sourcePhotoUrl(`${destination.query} surfer riding wave`, destination.index, photoIndex);
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

function autoFillOrigin() {
  const input = elements.form.querySelector('input[name="origin"]');
  if (!input || input.value) return;

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timezoneOrigins = {
    "Asia/Jerusalem": "Tel Aviv",
    "Europe/London": "London",
    "Europe/Paris": "Paris",
    "Europe/Madrid": "Madrid",
    "Europe/Lisbon": "Lisbon",
    "America/New_York": "New York",
    "America/Los_Angeles": "Los Angeles",
    "America/Miami": "Miami",
    "Australia/Sydney": "Sydney",
    "Australia/Melbourne": "Melbourne",
    "Pacific/Auckland": "Auckland",
  };

  input.value = timezoneOrigins[timezone] || "";
}

function render(preferredIndex = null) {
  updateDirectionControl();
  const filters = getFilters();
  const ranked = getRankedDestinations();
  state.renderVersion += 1;
  const renderVersion = state.renderVersion;

  if (!ranked.length) {
    renderEmptyFeature(filters, renderVersion);
    renderCards(ranked, filters);
    return;
  }

  const selected =
    preferredIndex === null
      ? ranked[0]
      : ranked.find((item) => item.index === preferredIndex) || ranked[0];

  state.selected = selected.index;
  setBackground(selected, renderVersion);
  renderFeature(selected, filters, renderVersion);
  renderCards(ranked, filters);
}

elements.form.addEventListener("change", () => {
  state.currentPage = 1;
  state.moreInfoOpen = false;
  render();
});

elements.form.addEventListener("input", (event) => {
  if (event.target.name !== "origin") return;

  state.currentPage = 1;
  state.moreInfoOpen = false;
  render(state.selected);
});

elements.sortInputs.forEach((input) =>
  input.addEventListener("change", () => {
    state.currentPage = 1;
    render(state.selected);
  }),
);

elements.direction.addEventListener("input", () => {
  state.currentPage = 1;
  state.moreInfoOpen = false;
  render();
});

elements.cardStrip.addEventListener("click", (event) => {
  const card = event.target.closest(".spot-card");
  if (!card) return;

  state.moreInfoOpen = false;
  render(Number(card.dataset.index));
  document.querySelector(".results-band").scrollIntoView({ behavior: "smooth", block: "start" });
});

elements.actions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action='toggle-more']");
  if (!button) return;

  state.moreInfoOpen = !state.moreInfoOpen;
  render(state.selected);
});

elements.monthGuide.addEventListener("change", (event) => {
  if (!event.target.classList.contains("month-metric-select")) return;

  state.monthMetric = event.target.value;
  render(state.selected);
});

elements.reviews.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target.closest(".review-form");
  if (!form) return;

  const formData = new FormData(form);
  const text = String(formData.get("text") || "").trim();
  if (!text) return;

  saveReview(form.dataset.destination, {
    reviewer: String(formData.get("reviewer") || "").trim(),
    rating: Number(formData.get("rating") || 5),
    text,
    createdAt: new Date().toISOString(),
  });

  state.moreInfoOpen = true;
  render(state.selected);
});

elements.pagination.addEventListener("click", (event) => {
  const pageButton = event.target.closest("button[data-page]");
  if (!pageButton) return;

  state.currentPage = Number(pageButton.dataset.page);
  render(state.selected);
  elements.cardStrip.scrollIntoView({ behavior: "smooth", block: "start" });
});

elements.spotGuide.addEventListener("click", (event) => {
  const spotButton = event.target.closest(".spot-item");
  if (!spotButton) return;

  const mapFrame = elements.spotGuide.querySelector(".spot-map-frame");
  const mapLink = elements.spotGuide.querySelector(".map-link");
  elements.spotGuide.querySelectorAll(".spot-item").forEach((button) => {
    button.classList.toggle("is-active", button === spotButton);
  });

  mapFrame.src = mapEmbedUrl(spotButton.dataset.mapQuery);
  mapFrame.title = `${spotButton.dataset.spotTitle} map`;
  mapLink.href = mapSearchUrl(spotButton.dataset.mapQuery);
});

const currentMonth = new Date().toLocaleString("en-US", { month: "short" });
const currentMonthInput = [...elements.monthInputs].find((input) => input.value === currentMonth);
if (currentMonthInput) currentMonthInput.checked = true;

autoFillOrigin();
render();
