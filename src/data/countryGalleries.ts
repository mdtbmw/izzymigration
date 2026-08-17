export interface GalleryImage {
  url: string;
  title: string;
  category: "Landmark" | "Lifestyle" | "Coast" | "Architecture" | "Real Estate" | "Culture";
  caption: string;
}

export const countryGalleries: Record<string, GalleryImage[]> = {
  "St. Kitts & Nevis": [
    {
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85",
      title: "Christophe Harbour & South Peninsula",
      category: "Coast",
      caption: "Superyacht marina and dramatic twin-coast views between the Atlantic and Caribbean Sea.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_caribbean_beach.jpg",
      title: "Frigate Bay Beachfront",
      category: "Lifestyle",
      caption: "Crystal turquoise waters and private beachfront villas with direct Caribbean access.",
    },
    {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
      title: "Brimstone Hill & Historic Fortress",
      category: "Landmark",
      caption: "UNESCO World Heritage panoramic vistas across neighboring Caribbean islands.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_modern_residence.jpg",
      title: "Luxury Island Living",
      category: "Real Estate",
      caption: "Government-approved five-star resort residences and hillside freehold estates.",
    },
  ],
  "Antigua & Barbuda": [
    {
      url: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=85",
      title: "English Harbour & Nelson's Dockyard",
      category: "Landmark",
      caption: "World-renowned sailing capital with historic Georgian naval heritage.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_tropical_peninsula.jpg",
      title: "365 White Sand Beaches",
      category: "Coast",
      caption: "Pristine secluded coves and calm turquoise bays across Antigua and Barbuda.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_modern_residence.jpg",
      title: "Jumby Bay & Luxury Estates",
      category: "Real Estate",
      caption: "Ultra-exclusive private island villas with deep-water yacht moorings.",
    },
    {
      url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=85",
      title: "Shirley Heights Sunset",
      category: "Culture",
      caption: "Iconic clifftop viewpoint overlooking Falmouth Harbour and the Caribbean coastline.",
    },
  ],
  "Dominica": [
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85",
      title: "The Nature Island",
      category: "Landmark",
      caption: "Lush tropical rainforests, volcanic thermal springs, and cascading mountain waterfalls.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_caribbean_beach.jpg",
      title: "Secret Bay & Cabrits National Park",
      category: "Coast",
      caption: "Award-winning eco-luxury cliffside villas with private beach access.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_modern_residence.jpg",
      title: "Kempinski & Luxury Resorts",
      category: "Real Estate",
      caption: "Approved CBI resort developments surrounded by untouched natural beauty.",
    },
  ],
  "Grenada": [
    {
      url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85",
      title: "St. George's Horseshoe Harbour",
      category: "Landmark",
      caption: "The Caribbean's most picturesque Georgian harbour capital framed by volcanic hills.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_tropical_peninsula.jpg",
      title: "Grand Anse Beach",
      category: "Coast",
      caption: "Two miles of soft golden sand, warm calm surf, and luxury beachfront hotels.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_modern_residence.jpg",
      title: "Silversands & Beachfront Living",
      category: "Real Estate",
      caption: "Contemporary luxury architecture and US E-2 Treaty access opportunity.",
    },
  ],
  "Saint Lucia": [
    {
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85",
      title: "Majestic Gros & Petit Pitons",
      category: "Landmark",
      caption: "UNESCO World Heritage volcanic spires rising dramatically from the Caribbean Sea.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_caribbean_beach.jpg",
      title: "Marigot Bay & Rodney Bay",
      category: "Coast",
      caption: "Sheltered yacht havens, beach clubs, and five-star waterfront dining.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_luxury_waterfront.jpg",
      title: "Sugar Beach Residences",
      category: "Real Estate",
      caption: "Secluded hillside villas nestled directly between the iconic Pitons.",
    },
  ],
  "Portugal": [
    {
      url: "https://images.unsplash.com/photo-1509067149028-eb6e55959085?auto=format&fit=crop&w=1400&q=85",
      title: "Lisbon Historic Alfama & Tagus River",
      category: "Culture",
      caption: "Sun-drenched cobblestone alleys, vibrant culture, and world-class culinary scene.",
    },
    {
      url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1400&q=85",
      title: "Porto & Douro Wine Valley",
      category: "Landmark",
      caption: "Historic riverside architecture, terraced vineyards, and dynamic tech hubs.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_mediterranean_coast.jpg",
      title: "Cascais & Estoril Coastline",
      category: "Coast",
      caption: "The Portuguese Riviera with championship golf, marinas, and palatial villas.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_european_architecture.jpg",
      title: "Algarve Golden Clifftops",
      category: "Lifestyle",
      caption: "300+ days of annual sunshine, Michelin dining, and golden ocean cliffs.",
    },
  ],
  "Greece": [
    {
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85",
      title: "Athens Acropolis & Cityscape",
      category: "Landmark",
      caption: "The cradle of Western civilization with vibrant modern metropolitan life.",
    },
    {
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85",
      title: "Santorini Caldera & Oia",
      category: "Coast",
      caption: "Iconic whitewashed architecture overlooking breathtaking Aegean Sea sunsets.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_mediterranean_coast.jpg",
      title: "Athens Riviera & Glyfada",
      category: "Real Estate",
      caption: "Prime coastal residential developments, luxury beach clubs, and yacht marinas.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_european_architecture.jpg",
      title: "Crete & Mykonos Island Living",
      category: "Lifestyle",
      caption: "Idyllic Mediterranean lifestyle with seamless Schengen travel access.",
    },
  ],
  "Spain": [
    {
      url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1400&q=85",
      title: "Madrid Royal Palaces & Plazas",
      category: "Landmark",
      caption: "Cosmopolitan capital with grand boulevards, cultural institutions, and commerce.",
    },
    {
      url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=85",
      title: "Barcelona & Mediterranean Coast",
      category: "Culture",
      caption: "Gothic Quarter, modernist architecture, and vibrant seaside promenades.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_luxury_waterfront.jpg",
      title: "Marbella & Costa del Sol",
      category: "Real Estate",
      caption: "Luxury Mediterranean villas, private beach clubs, and international schools.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_mediterranean_coast.jpg",
      title: "Balearic Islands (Mallorca & Ibiza)",
      category: "Coast",
      caption: "Crystal turquoise coves and peaceful inland country fincas.",
    },
  ],
  "Italy": [
    {
      url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1400&q=85",
      title: "Rome Eternal City & Coliseum",
      category: "Landmark",
      caption: "Unrivalled architectural heritage, timeless art, and European political seat.",
    },
    {
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85",
      title: "Amalfi Coast & Positano",
      category: "Coast",
      caption: "Cliffside coastal villages overlooking the sparkling Tyrrhenian Sea.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_european_architecture.jpg",
      title: "Milan Fashion & Financial District",
      category: "Culture",
      caption: "Italy's economic engine with lucrative lump-sum 100k flat-tax regime.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_modern_residence.jpg",
      title: "Lake Como & Tuscany Country Estates",
      category: "Real Estate",
      caption: "Historic lakeside palazzos and rolling vineyard estates.",
    },
  ],
  "Malta": [
    {
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85",
      title: "Valletta Grand Harbour",
      category: "Landmark",
      caption: "UNESCO fortified capital and strategic Mediterranean maritime hub.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_mediterranean_coast.jpg",
      title: "Blue Lagoon & Comino",
      category: "Coast",
      caption: "Crystal clear Mediterranean waters and year-round yachting conditions.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_luxury_waterfront.jpg",
      title: "Sliema & St. Julian's Waterfront",
      category: "Real Estate",
      caption: "Modern seafront luxury towers and vibrant cosmopolitan nightlife.",
    },
  ],
  "Cyprus": [
    {
      url: "/assets/imgs/globevisa/globevisa_luxury_waterfront.jpg",
      title: "Limassol Marina & Coastal Towers",
      category: "Real Estate",
      caption: "Eastern Mediterranean's leading financial and luxury residential hub.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_mediterranean_coast.jpg",
      title: "Paphos Coastline & Ancient Ruins",
      category: "Landmark",
      caption: "UNESCO archaeological treasures and serene Mediterranean coastal living.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_tropical_peninsula.jpg",
      title: "Ayia Napa & Cape Greco",
      category: "Coast",
      caption: "Turquoise lagoons, sea caves, and premier European golf resorts.",
    },
  ],
  "United Arab Emirates": [
    {
      url: "/assets/imgs/globevisa/globevisa_hero_skyline.jpg",
      title: "Dubai Downtown & Burj Khalifa",
      category: "Landmark",
      caption: "Global metropolis of the future with unmatched security, luxury, and 0% tax.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_city_sunset.jpg",
      title: "Palm Jumeirah Waterfront Mansions",
      category: "Real Estate",
      caption: "World-famous man-made island with private beach mansions and superyacht berths.",
    },
    {
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=85",
      title: "Abu Dhabi Saadiyat Cultural District",
      category: "Culture",
      caption: "Louvre Abu Dhabi, pristine white sand beaches, and peaceful capital lifestyle.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_metropolis_downtown.jpg",
      title: "Dubai Marina & JBR Skyline",
      category: "Lifestyle",
      caption: "Vibrant waterfront promenades, Michelin-starred dining, and international commerce.",
    },
  ],
  "Turkey": [
    {
      url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=85",
      title: "Istanbul Bosphorus & Hagia Sophia",
      category: "Landmark",
      caption: "Where East meets West across the majestic Bosphorus Strait.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_mediterranean_coast.jpg",
      title: "Bodrum Peninsula & Turkish Riviera",
      category: "Coast",
      caption: "The St. Tropez of Turkey with luxury marinas, beach clubs, and ancient castles.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_luxury_waterfront.jpg",
      title: "Bebek & Bosphorus Waterfront Mansions",
      category: "Real Estate",
      caption: "Historic Yalı mansions and modern luxury residential developments.",
    },
  ],
  "United States": [
    {
      url: "/assets/imgs/globevisa/globevisa_hero_skyline.jpg",
      title: "New York Manhattan Skyline",
      category: "Landmark",
      caption: "The financial and cultural capital of the world with limitless opportunity.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_city_sunset.jpg",
      title: "Miami South Beach & Brickell",
      category: "Lifestyle",
      caption: "Tropical gateway with no state income tax and thriving financial ecosystem.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_modern_residence.jpg",
      title: "California Coastal Living",
      category: "Real Estate",
      caption: "Silicon Valley innovation, Beverly Hills luxury, and Pacific coastline.",
    },
  ],
  "United Kingdom": [
    {
      url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
      title: "London River Thames & Westminster",
      category: "Landmark",
      caption: "Global financial hub, world-class education, and rich constitutional heritage.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_european_architecture.jpg",
      title: "Mayfair & Kensington Prime Mansions",
      category: "Real Estate",
      caption: "World's most coveted prime central London residential addresses.",
    },
    {
      url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=85",
      title: "The English Countryside & Oxford",
      category: "Culture",
      caption: "Historic estates, premier boarding schools, and tranquil rural beauty.",
    },
  ],
  "Canada": [
    {
      url: "/assets/imgs/globevisa/globevisa_hero_skyline.jpg",
      title: "Vancouver Waterfront & Mountains",
      category: "Coast",
      caption: "Pacific rim metropolis where modern skyscrapers meet snow-capped peaks.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_metropolis_downtown.jpg",
      title: "Toronto Skyline & Lake Ontario",
      category: "Landmark",
      caption: "Canada's commercial engine and one of the most multicultural cities globally.",
    },
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85",
      title: "Banff & The Canadian Rockies",
      category: "Lifestyle",
      caption: "Pure wilderness, world-class ski resorts, and clean sovereign living.",
    },
  ],
  "Switzerland": [
    {
      url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1400&q=85",
      title: "Lake Geneva & Swiss Alps",
      category: "Landmark",
      caption: "The pinnacle of European wealth security, private banking, and serenity.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_european_architecture.jpg",
      title: "Zurich & Lucerne Waterfront",
      category: "Lifestyle",
      caption: "Unmatched quality of life, highest safety indices, and global connectivity.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_modern_residence.jpg",
      title: "Alpine Luxury Chalets",
      category: "Real Estate",
      caption: "Private ski estates in Zermatt and St. Moritz with lump-sum tax privileges.",
    },
  ],
  "Monaco": [
    {
      url: "/assets/imgs/globevisa/globevisa_luxury_waterfront.jpg",
      title: "Port Hercules Superyacht Marina",
      category: "Landmark",
      caption: "The world capital of yachting and luxury, nestled along the French Riviera.",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_european_architecture.jpg",
      title: "Monte Carlo Casino & Palaces",
      category: "Culture",
      caption: "0% personal income tax, 0% capital gains, and unmatched sovereign prestige.",
    },
  ],
  "Vanuatu": [
    {
      url: "/assets/imgs/globevisa/globevisa_tropical_peninsula.jpg",
      title: "Port Vila & South Pacific Lagoons",
      category: "Coast",
      caption: "Fastest direct citizenship by investment in the world (30-60 days approval).",
    },
    {
      url: "/assets/imgs/globevisa/globevisa_caribbean_beach.jpg",
      title: "Espiritu Santo Blue Holes",
      category: "Landmark",
      caption: "Untouched tropical South Pacific paradise with zero corporate or personal tax.",
    },
  ],
};

export function getCountryGallery(countryName: string): GalleryImage[] {
  // Normalize match
  for (const key of Object.keys(countryGalleries)) {
    if (countryName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(countryName.toLowerCase())) {
      return countryGalleries[key];
    }
  }

  // High quality default collection using Globevisa photography
  return [
    {
      url: "/assets/imgs/globevisa/globevisa_mediterranean_coast.jpg",
      title: `${countryName} Coastal Splendour`,
      category: "Coast",
      caption: `Discover the pristine coastlines, climate, and luxury maritime lifestyle in ${countryName}.`,
    },
    {
      url: "/assets/imgs/globevisa/globevisa_hero_skyline.jpg",
      title: `${countryName} Sovereign Capital`,
      category: "Landmark",
      caption: `Experience the institutional stability, security, and vibrant city lifestyle in ${countryName}.`,
    },
    {
      url: "/assets/imgs/globevisa/globevisa_modern_residence.jpg",
      title: `${countryName} Prime Real Estate`,
      category: "Real Estate",
      caption: `High-value residential acquisitions, tax optimization, and family wealth preservation in ${countryName}.`,
    },
  ];
}
