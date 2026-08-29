export interface GalleryImage {
  url: string;
  title: string;
  category: "Landmark" | "Lifestyle" | "Coast" | "Architecture" | "Real Estate" | "Culture";
  caption: string;
}

export const countryGalleries: Record<string, GalleryImage[]> = {
  "South Korea": [
    {
      "url": "/assets/imgs/programs/korea-hero.jpg",
      "title": "Seoul Namsan Skyline by Hoyoung Choi",
      "category": "Landmark",
      "caption": "Dynamic global metropolis blending hypermodern infrastructure with rich cultural heritage."
    },
    {
      "url": "https://static.wixstatic.com/media/f32770_ac933ab1424944f894335ebc1e8c7083~mv2.png/v1/fill/w_1000,h_650,al_c,q_85,enc_avif,quality_auto/Jeju%20Shinhwa%20World%20Resorts.png",
      "title": "Jeju Shinhwa World Resorts",
      "category": "Real Estate",
      "caption": "Government-designated immigrant investor luxury resort complex in Jeju International City."
    },
    {
      "url": "https://static.wixstatic.com/media/2df78b_7ccc87e009e944d0bc1695cb8bdd7705~mv2.png/v1/fill/w_1000,h_650,al_c,q_85,enc_avif,quality_auto/image.png",
      "title": "Kylin Resort Jeju Island",
      "category": "Coast",
      "caption": "Pristine coastal luxury resort villas eligible under the Tourism & Leisure Facility Investment System."
    },
    {
      "url": "https://static.wixstatic.com/media/nsplsh_90ca9ecae77c49acb35f4e3eef64e774~mv2.jpg/v1/fill/w_1000,h_650,al_c,q_85,enc_avif,quality_auto/Image%20by%20JUNGIL%20PARK.jpg",
      "title": "South Korea Lifestyle by JUNGIL PARK",
      "category": "Culture",
      "caption": "Leading educational academies, top-tier healthcare, and premier global living standards."
    }
  ],
  "Japan": [
    {
      "url": "/assets/imgs/programs/japan-hero.png",
      "title": "Tokyo Tower & Metropolitan Skyline",
      "category": "Landmark",
      "caption": "World-class financial and technological capital offering unparalleled safety and enterprise opportunities."
    },
    {
      "url": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85",
      "title": "Kyoto Heritage & Imperial Architecture",
      "category": "Culture",
      "caption": "Centuries of preserved cultural heritage, tranquil Zen gardens, and traditional architecture."
    },
    {
      "url": "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1400&q=85",
      "title": "Osaka Commercial & Culinary Center",
      "category": "Landmark",
      "caption": "Dynamic commercial gateway known for business innovation, enterprise growth, and vibrant urban living."
    },
    {
      "url": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1400&q=85",
      "title": "Shinjuku & Shibuya Modern Districts",
      "category": "Architecture",
      "caption": "High-density transit networks, international corporate headquarters, and premier residential neighborhoods."
    }
  ],
  "St. Kitts & Nevis": [
    {
      "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85",
      "title": "Christophe Harbour & South Peninsula",
      "category": "Coast",
      "caption": "Superyacht marina and dramatic twin-coast views between the Atlantic Ocean and Caribbean Sea."
    },
    {
      "url": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=85",
      "title": "Frigate Bay Beachfront",
      "category": "Lifestyle",
      "caption": "Crystal turquoise waters and private beachfront villas with direct Caribbean access."
    },
    {
      "url": "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1400&q=85",
      "title": "Brimstone Hill & Historic Fortress",
      "category": "Landmark",
      "caption": "UNESCO World Heritage panoramic vistas across neighboring Caribbean islands."
    },
    {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "title": "Luxury Island Living",
      "category": "Real Estate",
      "caption": "Government-approved five-star resort residences and hillside freehold estates."
    }
  ],
  "Antigua & Barbuda": [
    {
      "url": "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=85",
      "title": "English Harbour & Nelson's Dockyard",
      "category": "Landmark",
      "caption": "World-renowned sailing capital with historic Georgian naval heritage."
    },
    {
      "url": "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1400&q=85",
      "title": "365 White Sand Beaches (Dickenson Bay)",
      "category": "Coast",
      "caption": "Pristine secluded coves and calm turquoise bays across Antigua and Barbuda."
    },
    {
      "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85",
      "title": "Jumby Bay & Luxury Island Estates",
      "category": "Real Estate",
      "caption": "Ultra-exclusive private island beachfront villas with deep-water yacht moorings."
    },
    {
      "url": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=85",
      "title": "Shirley Heights Sunset Viewpoint",
      "category": "Culture",
      "caption": "Iconic clifftop viewpoint overlooking Falmouth Harbour and the Caribbean coastline."
    }
  ],
  "Dominica": [
    {
      "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85",
      "title": "The Nature Island Rainforest & Waterfalls",
      "category": "Landmark",
      "caption": "Lush tropical rainforests, volcanic thermal springs, and cascading mountain waterfalls."
    },
    {
      "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85",
      "title": "Secret Bay Eco-Villas",
      "category": "Coast",
      "caption": "Award-winning eco-luxury cliffside villas with private beach access."
    },
    {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85",
      "title": "Champagne Reef & Coastal Waters",
      "category": "Lifestyle",
      "caption": "Geothermal bubbling underwater springs and protected marine reserve diving."
    },
    {
      "url": "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=1400&q=85",
      "title": "Dominica Nature Trails & Morne Trois Pitons",
      "category": "Real Estate",
      "caption": "Approved CBI resort developments surrounded by untouched natural Caribbean beauty."
    }
  ],
  "Grenada": [
    {
      "url": "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1400&q=85",
      "title": "St. George's Horseshoe Harbour",
      "category": "Landmark",
      "caption": "The Caribbean's most picturesque Georgian harbour capital framed by lush volcanic hills."
    },
    {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
      "title": "Grand Anse Beach",
      "category": "Coast",
      "caption": "Two miles of soft golden sand, warm calm surf, and luxury beachfront hotels."
    },
    {
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
      "title": "Silversands & Luxury Living",
      "category": "Real Estate",
      "caption": "Contemporary luxury architecture and qualifying freehold real estate with US E-2 Treaty access."
    },
    {
      "url": "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=85",
      "title": "Spice Isle Coastal Sailing",
      "category": "Lifestyle",
      "caption": "Idyllic Caribbean lifestyle, world-class culinary heritage, and welcoming sovereign community."
    }
  ],
  "Saint Lucia": [
    {
      "url": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=85",
      "title": "Majestic Gros & Petit Pitons",
      "category": "Landmark",
      "caption": "UNESCO World Heritage volcanic spires rising dramatically from the Caribbean Sea."
    },
    {
      "url": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1400&q=85",
      "title": "Marigot Bay & Rodney Bay Marina",
      "category": "Coast",
      "caption": "Sheltered yacht havens, beach clubs, and five-star waterfront dining."
    },
    {
      "url": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
      "title": "Sugar Beach Residences",
      "category": "Real Estate",
      "caption": "Secluded hillside villas nestled directly between the iconic Pitons with private plunge pools."
    }
  ],
  "Vanuatu": [
    {
      "url": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=85",
      "title": "Port Vila Bay & South Pacific Ocean",
      "category": "Landmark",
      "caption": "Pristine archipelago in the South Pacific offering pure sovereign peace and untouched nature."
    },
    {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85",
      "title": "Espiritu Santo Blue Holes",
      "category": "Coast",
      "caption": "World-famous deep freshwater limestone springs surrounded by lush tropical rainforest."
    },
    {
      "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
      "title": "Havannah Harbour Private Villas",
      "category": "Real Estate",
      "caption": "Exclusive oceanfront sanctuaries with private yacht moorings and zero income tax status."
    }
  ],
  "Nauru": [
    {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
      "title": "Anibare Bay & Pacific Coast",
      "category": "Coast",
      "caption": "White coral sand beaches and sparkling turquoise South Pacific waters."
    },
    {
      "url": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=85",
      "title": "Command Ridge Panoramic Vista",
      "category": "Landmark",
      "caption": "Highest elevation on the island with 360-degree views across the Pacific Ocean horizon."
    }
  ],
  "Portugal": [
    {
      "url": "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1400&q=85",
      "title": "Lisbon Praça do Comércio & Tagus River",
      "category": "Landmark",
      "caption": "Historic sunlit capital combining historic charm with Europe's fastest-growing tech and fund ecosystem."
    },
    {
      "url": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1400&q=85",
      "title": "Algarve Golden Cliffs & Benagil Caves",
      "category": "Coast",
      "caption": "300+ days of annual sunshine, world-class championship golf, and golden Atlantic beaches."
    },
    {
      "url": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1400&q=85",
      "title": "Cascais & Estoril Portuguese Riviera",
      "category": "Real Estate",
      "caption": "Prestigious coastal villas, international schools, and Michelin-starred dining 25 mins from Lisbon."
    },
    {
      "url": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=85",
      "title": "Porto Douro Valley Heritage",
      "category": "Culture",
      "caption": "Terraced vineyards, historic quintas, and timeless European architectural heritage."
    }
  ],
  "Greece": [
    {
      "url": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85",
      "title": "Santorini Oia Caldera & Aegean Sea",
      "category": "Landmark",
      "caption": "Iconic whitewashed cliffside villages and world-famous Aegean sunsets."
    },
    {
      "url": "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1400&q=85",
      "title": "The Acropolis & Historic Athens",
      "category": "Culture",
      "caption": "Cradle of Western civilization, vibrant modern culture, and dynamic European commerce."
    },
    {
      "url": "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1400&q=85",
      "title": "Mykonos & Cycladic Island Coastlines",
      "category": "Coast",
      "caption": "Crystal turquoise waters, private beach clubs, and cosmopolitan Mediterranean island life."
    },
    {
      "url": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
      "title": "Athens Riviera Prime Residences",
      "category": "Real Estate",
      "caption": "Luxury seafront penthouses and luxury freehold villas with permanent 5-year renewable PR."
    }
  ],
  "Italy": [
    {
      "url": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=85",
      "title": "Rome Colosseum & Imperial Heritage",
      "category": "Landmark",
      "caption": "The Eternal City with thousands of years of world history, fine arts, and statutory flat-tax regimes."
    },
    {
      "url": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85",
      "title": "Positano & The Amalfi Coast",
      "category": "Coast",
      "caption": "Picturesque cliffside pastel residences, Mediterranean citrus groves, and turquoise waters."
    },
    {
      "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1400&q=85",
      "title": "Lake Como Historic Palazzos",
      "category": "Real Estate",
      "caption": "Historic waterfront estates, Alpine panoramas, and world-class Italian craftsmanship."
    },
    {
      "url": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1400&q=85",
      "title": "Florence Duomo & Tuscany Hills",
      "category": "Culture",
      "caption": "Renaissance masterpieces, rolling olive groves, and the iconic Italian Dolce Vita lifestyle."
    }
  ],
  "Spain": [
    {
      "url": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1400&q=85",
      "title": "Barcelona Sagrada Família & Cityscape",
      "category": "Landmark",
      "caption": "Gaudí's iconic architectural masterpieces and world-class Mediterranean urban vitality."
    },
    {
      "url": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=85",
      "title": "Madrid Gran Vía & Royal Capital",
      "category": "Architecture",
      "caption": "Stately neoclassical avenues, world-class art institutions, and high quality of family life."
    },
    {
      "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85",
      "title": "Marbella Golden Mile Luxury Villas",
      "category": "Real Estate",
      "caption": "Prestigious gated villas, private golf clubs, and prime freehold investments."
    }
  ],
  "Malta": [
    {
      "url": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85",
      "title": "Valletta Grand Harbour & Fortresses",
      "category": "Landmark",
      "caption": "UNESCO-protected baroque capital fortress overlooking deep Mediterranean blue waters."
    },
    {
      "url": "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1400&q=85",
      "title": "Blue Lagoon & Comino Coast",
      "category": "Coast",
      "caption": "Crystal transparent turquoise lagoons and world-renowned Mediterranean sailing."
    },
    {
      "url": "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1400&q=85",
      "title": "Mdina Silent City Citadel",
      "category": "Culture",
      "caption": "Ancient walled city with medieval architecture and timeless panoramic countryside views."
    }
  ],
  "Cyprus": [
    {
      "url": "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1400&q=85",
      "title": "Limassol Superyacht Marina",
      "category": "Landmark",
      "caption": "State-of-the-art superyacht harbour, luxury shopping, and prime commercial center."
    },
    {
      "url": "https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=1400&q=85",
      "title": "Cape Greco & Ayia Napa Coastal Caves",
      "category": "Coast",
      "caption": "Pristine sea caves, transparent sapphire water, and year-round Mediterranean sunshine."
    },
    {
      "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
      "title": "Paphos Luxury Coastal Villas",
      "category": "Real Estate",
      "caption": "Modern freehold architectural masterpieces with private pools and direct sea views."
    }
  ],
  "United Arab Emirates": [
    {
      "url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85",
      "title": "Downtown Dubai & Burj Khalifa",
      "category": "Landmark",
      "caption": "The world's highest skyscraper surrounded by luxury avenues, dining, and global financial firms."
    },
    {
      "url": "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1400&q=85",
      "title": "Dubai Marina & JBR Skyline",
      "category": "Coast",
      "caption": "Spectacular canal waterway lined with skyscrapers, mega-yachts, and pristine sandy beaches."
    },
    {
      "url": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
      "title": "Palm Jumeirah & Emirates Hills Villas",
      "category": "Real Estate",
      "caption": "World-famous island fronds offering direct private beaches and 100% tax-free capital growth."
    },
    {
      "url": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1400&q=85",
      "title": "Abu Dhabi Sheikh Zayed Grand Mosque",
      "category": "Culture",
      "caption": "Exquisite Islamic architecture, tranquil marble courtyards, and sovereign cultural prestige."
    }
  ],
  "United Kingdom": [
    {
      "url": "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1400&q=85",
      "title": "Tower Bridge & The River Thames",
      "category": "Landmark",
      "caption": "The heart of London's historic and financial skyline with global commercial dominance."
    },
    {
      "url": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
      "title": "Big Ben & Westminster Palace",
      "category": "Architecture",
      "caption": "The mother of parliaments, historic legal institutions, and premier academic prestige."
    },
    {
      "url": "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1400&q=85",
      "title": "Canary Wharf Financial District",
      "category": "Lifestyle",
      "caption": "Global capital markets, venture capital hubs, and high-growth corporate headquarters."
    },
    {
      "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85",
      "title": "Mayfair & Prime Central London",
      "category": "Real Estate",
      "caption": "Prestigious Georgian and Victorian townhouses in the world's most sought-after prime property enclave."
    }
  ],
  "Canada": [
    {
      "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=85",
      "title": "Vancouver Coastal Mountains & English Bay",
      "category": "Landmark",
      "caption": "Pacific coastline meets snowcapped peaks, offering an unmatched outdoor lifestyle and tech corridor."
    },
    {
      "url": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1400&q=85",
      "title": "Toronto Downtown Skyline & CN Tower",
      "category": "Architecture",
      "caption": "Canada's financial powerhouse, multicultural culinary scene, and high-tech incubator hub."
    },
    {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
      "title": "Banff & Lake Louise Canadian Rockies",
      "category": "Coast",
      "caption": "Pristine glacial lakes, world-class ski resorts, and breathtaking natural national parks."
    },
    {
      "url": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85",
      "title": "Coal Harbour Luxury Residences",
      "category": "Real Estate",
      "caption": "Modern glass architectural penthouses with panoramic harbor and mountain vistas."
    }
  ],
  "United States": [
    {
      "url": "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1400&q=85",
      "title": "New York Manhattan & Central Park Skyline",
      "category": "Landmark",
      "caption": "The financial and cultural capital of the world, unmatched investment opportunities and dynamism."
    },
    {
      "url": "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1400&q=85",
      "title": "Miami Biscayne Bay & South Beach",
      "category": "Coast",
      "caption": "Sun-drenched coastal luxury, zero state income tax, and premier Latin American gateway."
    },
    {
      "url": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=85",
      "title": "San Francisco Golden Gate & Silicon Valley",
      "category": "Architecture",
      "caption": "The global epicenter of technology, venture capital, and world-changing innovation."
    },
    {
      "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
      "title": "Luxury Palm Beach & Beverly Hills Estates",
      "category": "Real Estate",
      "caption": "World-renowned luxury estates with manicured grounds and permanent green card security."
    }
  ],
  "Australia": [
    {
      "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=85",
      "title": "Sydney Opera House & Harbour Bridge",
      "category": "Landmark",
      "caption": "Iconic world-famous harbour, sunny climate, and strong transparent rule of law."
    },
    {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
      "title": "Bondi Beach & Coastal Cliffs",
      "category": "Coast",
      "caption": "Legendary golden sands, crystal Pacific waves, and vibrant beachside lifestyle."
    },
    {
      "url": "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1400&q=85",
      "title": "Melbourne Yarra River & Culture Hub",
      "category": "Culture",
      "caption": "Consistently ranked among the world's most liveable cities for education, dining, and healthcare."
    },
    {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "title": "Gold Coast Luxury Oceanfront Living",
      "category": "Real Estate",
      "caption": "Spectacular beachfront high-rises and private canal villas with private boat docks."
    }
  ],
  "Singapore": [
    {
      "url": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=85",
      "title": "Marina Bay Sands & Modern Skyline",
      "category": "Landmark",
      "caption": "Asia's premier wealth management hub, ultra-safe environment, and forward-thinking governance."
    },
    {
      "url": "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1400&q=85",
      "title": "Gardens by the Bay & Supertree Grove",
      "category": "Architecture",
      "caption": "Futuristic garden city harmonizing lush nature with cutting-edge engineering."
    },
    {
      "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
      "title": "Sentosa Cove Luxury Waterfront Living",
      "category": "Real Estate",
      "caption": "Exclusive gated oceanfront community where foreign buyers can acquire landed luxury villas."
    }
  ],
  "Thailand": [
    {
      "url": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1400&q=85",
      "title": "Bangkok Wat Arun & Chao Phraya River",
      "category": "Landmark",
      "caption": "Ancient golden temples juxtaposed with modern sky bars and world-class culinary scene."
    },
    {
      "url": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1400&q=85",
      "title": "Phuket & Andaman Sea Limestone Islands",
      "category": "Coast",
      "caption": "Tropical islands, turquoise lagoons, and year-round luxury catamaran sailing."
    },
    {
      "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85",
      "title": "Koh Samui Hillside Sea-View Villas",
      "category": "Real Estate",
      "caption": "Five-star resort developments with private infinity pools overlooking the Gulf of Thailand."
    }
  ],
  "France": [
    {
      "url": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85",
      "title": "Eiffel Tower & Paris River Seine",
      "category": "Landmark",
      "caption": "The City of Light, world-renowned luxury brands, fine dining, and rich cultural heritage."
    },
    {
      "url": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85",
      "title": "Nice & The French Riviera (Côte d'Azur)",
      "category": "Coast",
      "caption": "Sun-drenched Mediterranean beaches, palm-lined promenades, and timeless glamour."
    },
    {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "title": "Cannes Luxury Seafront Estates",
      "category": "Real Estate",
      "caption": "Prestigious Mediterranean beachfront villas overlooking the Bay of Cannes."
    },
    {
      "url": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1400&q=85",
      "title": "Paris Haussmannian Luxury Residences",
      "category": "Architecture",
      "caption": "High-ceilinged historic apartments in Paris 8th and 16th arrondissements."
    }
  ],
  "Switzerland": [
    {
      "url": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1400&q=85",
      "title": "Lake Geneva & Swiss Alpine Vistas",
      "category": "Landmark",
      "caption": "Pristine mountain air, crystal clear lakes, and absolute global financial security."
    },
    {
      "url": "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=1400&q=85",
      "title": "Zurich Limmat River & Old Town",
      "category": "Architecture",
      "caption": "Switzerland's financial capital, world-leading private banking, and prestigious universities."
    },
    {
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
      "title": "St. Moritz & Alpine Luxury Chalets",
      "category": "Real Estate",
      "caption": "Ultra-luxury ski-in ski-out timber chalets with panoramic snowcapped mountain views."
    }
  ],
  "Monaco": [
    {
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=85",
      "title": "Port Hercules Superyacht Marina",
      "category": "Landmark",
      "caption": "The world's most prestigious yachting capital with 0% personal income tax and 0% capital gains tax."
    },
    {
      "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=85",
      "title": "Monte Carlo Casino Square",
      "category": "Culture",
      "caption": "Historic Belle Époque architecture, high luxury shopping, and Michelin-starred dining."
    },
    {
      "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
      "title": "Luxury Seafront Penthouses",
      "category": "Real Estate",
      "caption": "High-security waterfront towers overlooking the Mediterranean coastline."
    }
  ],
  "Hungary": [
    {
      "url": "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=1400&q=85",
      "title": "Budapest Parliament on the Danube",
      "category": "Landmark",
      "caption": "Gothic revival masterpiece on the Danube River in Central Europe's grandest historical capital."
    },
    {
      "url": "https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?auto=format&fit=crop&w=1400&q=85",
      "title": "Buda Castle & Fisherman's Bastion",
      "category": "Culture",
      "caption": "Panoramic vistas over the Danube, historic thermal baths, and vibrant cafe culture."
    },
    {
      "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
      "title": "Budapest Prime Freehold Real Estate",
      "category": "Real Estate",
      "caption": "Renovated classical buildings in Districts V, VI, and VII offering 10-year Golden Visa residency."
    }
  ],
  "Netherlands": [
    {
      "url": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1400&q=85",
      "title": "Amsterdam UNESCO Canal Ring",
      "category": "Landmark",
      "caption": "17th-century canal houses, historic bridges, and Europe's premier English-friendly logistics hub."
    },
    {
      "url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
      "title": "Rotterdam Modern Architecture",
      "category": "Architecture",
      "caption": "Europe's largest seaport, striking futuristic skyscrapers, and international trade gateways."
    },
    {
      "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
      "title": "Historic Canal-Side Residences",
      "category": "Real Estate",
      "caption": "Restored merchant townhouses with private canal moorings and modern European interiors."
    }
  ],
  "Türkiye": [
    {
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=85",
      "title": "Istanbul Bosphorus Strait & Bridges",
      "category": "Landmark",
      "caption": "The only metropolis spanning two continents, linking Europe and Asia across sparkling waters."
    },
    {
      "url": "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1400&q=85",
      "title": "Hagia Sophia & Sultanahmet",
      "category": "Culture",
      "caption": "Iconic dome architecture and 1,500 years of imperial Byzantine and Ottoman history."
    },
    {
      "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1400&q=85",
      "title": "Bodrum Turquoise Riviera & Marina",
      "category": "Coast",
      "caption": "Government-approved USD 400,000 freehold property developments granting fast-track citizenship."
    }
  ],
  "Egypt": [
    {
      "url": "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1400&q=85",
      "title": "Cairo Nile Riverfront Skyline",
      "category": "Landmark",
      "caption": "Modern Nile-front metropolis connecting North Africa, the Mediterranean, and the Middle East."
    },
    {
      "url": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1400&q=85",
      "title": "Great Pyramids of Giza",
      "category": "Culture",
      "caption": "The ultimate ancient wonder of the world and testament to eternal human achievement."
    },
    {
      "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85",
      "title": "Red Sea El Gouna Luxury Villas",
      "category": "Real Estate",
      "caption": "Self-contained luxury resort town with lagoons, championship golf, and qualifying CBI real estate."
    }
  ],
  "Panama": [
    {
      "url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85",
      "title": "Panama City Pacific Bay Skyline",
      "category": "Landmark",
      "caption": "The Dubai of the Americas, boasting Latin America's most modern financial skyscraper district."
    },
    {
      "url": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1400&q=85",
      "title": "Casco Viejo Historic Quarter",
      "category": "Culture",
      "caption": "UNESCO-listed Spanish colonial quarter with rooftop lounges, art galleries, and boutique hotels."
    },
    {
      "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
      "title": "Oceanfront Luxury Developments",
      "category": "Real Estate",
      "caption": "USD 300,000 qualifying freehold real estate routes granting permanent residency in 30 days."
    }
  ],
  "Costa Rica": [
    {
      "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85",
      "title": "Manuel Antonio Rainforest & Pacific Coast",
      "category": "Coast",
      "caption": "Lush tropical jungles meeting white sand Pacific beaches in a peaceful democracy."
    },
    {
      "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
      "title": "Papagayo Peninsula Luxury Eco-Living",
      "category": "Real Estate",
      "caption": "Private luxury resorts and sustainable hillside estates offering Pura Vida lifestyle."
    }
  ],
  "Mauritius": [
    {
      "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85",
      "title": "Le Morne Brabant Mountain Peninsula",
      "category": "Landmark",
      "caption": "UNESCO-listed mountain peninsula surrounded by turquoise coral lagoons in the Indian Ocean."
    },
    {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
      "title": "Grand Baie & Northern Coast",
      "category": "Coast",
      "caption": "Vibrant beachside village, world-class yacht marinas, and luxury waterfront dining."
    },
    {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "title": "IRS & PDS Luxury Freehold Villas",
      "category": "Real Estate",
      "caption": "Government-approved USD 375,000 property investments granting immediate permanent residence."
    }
  ],
  "South Africa": [
    {
      "url": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "title": "Cape Town Table Mountain & Camps Bay",
      "category": "Landmark",
      "caption": "One of the world's most spectacular natural backdrops meeting the Atlantic Ocean."
    },
    {
      "url": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
      "title": "Clifton & Bantry Bay Oceanfront Villas",
      "category": "Real Estate",
      "caption": "Architectural mansions carved into the cliffs overlooking pristine Atlantic beaches."
    }
  ],
  "Malaysia": [
    {
      "url": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=85",
      "title": "Kuala Lumpur Petronas Twin Towers",
      "category": "Landmark",
      "caption": "Iconic twin 88-story towers illuminating Southeast Asia's most cost-effective capital."
    },
    {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85",
      "title": "Penang & Langkawi Andaman Coast",
      "category": "Coast",
      "caption": "UNESCO heritage colonial architecture, world-famous street food, and duty-free island living."
    },
    {
      "url": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85",
      "title": "KLCC & Mont Kiara Luxury Condominiums",
      "category": "Real Estate",
      "caption": "High-spec freehold residences qualifying for the 10-year MM2H and 20-year PVIP residency."
    }
  ],
  "Indonesia": [
    {
      "url": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85",
      "title": "Bali Seminyak & Uluwatu Coast",
      "category": "Coast",
      "caption": "Dramatic cliffside beach clubs, surf breaks, and world-class tropical wellness resorts."
    },
    {
      "url": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
      "title": "Nusa Dua & Canggu Luxury Freehold Villas",
      "category": "Real Estate",
      "caption": "Contemporary Balinese villas qualifying for Indonesia's 5 and 10-year Golden Visa."
    }
  ],
  "New Zealand": [
    {
      "url": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1400&q=85",
      "title": "Queenstown Lake Wakatipu & Southern Alps",
      "category": "Landmark",
      "caption": "Crystal glacial waters framed by dramatic alpine peaks in the adventure capital of the world."
    },
    {
      "url": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=85",
      "title": "Auckland Waitematā Harbour & City of Sails",
      "category": "Coast",
      "caption": "World-class sailing harbour, safe prosperous society, and direct Active Investor PR track."
    },
    {
      "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
      "title": "Luxury New Zealand Alpine Lodges",
      "category": "Real Estate",
      "caption": "Exclusive private architectural estates nestled within untouched natural landscapes."
    }
  ],
  "Cambodia": [
    {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "title": "Phnom Penh Tonle Sap & Mekong Riverfront",
      "category": "Landmark",
      "caption": "Rapidly growing Southeast Asian capital with 100% US Dollar-based banking and high rental yields."
    },
    {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
      "title": "Koh Rong & Sihanoukville Coast",
      "category": "Coast",
      "caption": "Pristine white sand beaches and tropical island resorts in the Gulf of Thailand."
    }
  ],
  "Hong Kong": [
    {
      "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=85",
      "title": "Victoria Harbour & Central Financial Skyline",
      "category": "Landmark",
      "caption": "One of the world's most iconic maritime skylines, leading international financial center."
    },
    {
      "url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
      "title": "The Peak & Hong Kong Island Panoramas",
      "category": "Architecture",
      "caption": "Prestigious ultra-high-net-worth enclave overlooking the South China Sea."
    }
  ],
  "Vietnam": [
    {
      "url": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1400&q=85",
      "title": "Ho Chi Minh City Saigon Riverfront",
      "category": "Landmark",
      "caption": "Dynamic Southeast Asian manufacturing and technology powerhouse with booming real estate."
    },
    {
      "url": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=85",
      "title": "Da Nang Coastal Dragon Bridge & Beaches",
      "category": "Coast",
      "caption": "Miles of coastal beaches, luxury beachfront resorts, and vibrant lifestyle."
    }
  ]
};

export function getCountryGallery(country: string): GalleryImage[] | undefined {
  if (countryGalleries[country]) return countryGalleries[country];
  
  // Fuzzy match
  const key = Object.keys(countryGalleries).find(
    (k) =>
      country.toLowerCase().includes(k.toLowerCase()) ||
      k.toLowerCase().includes(country.toLowerCase())
  );
  return key ? countryGalleries[key] : undefined;
}
