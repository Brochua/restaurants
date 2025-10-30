import type { QueryInterface } from "sequelize";

export async function up(queryInterface: QueryInterface) {
  // First, insert restaurants
  const restaurantsData = [
    {
      name: "Le Marquis Sans Gluten",
      description: "100% gluten-free bakery known for croissants, bagels, breads, tarts, and pastries, with online ordering available.",
      notes: "100% gluten-free bakery known for croissants, bagels, breads, tarts, and pastries, with online ordering available.",
      mapsPlaceId: "ChIJ_0aq8NMbyUwRHUmq-o2yVa4",
      address: "194 Rue Saint-Paul O, Montréal, QC H2Y 1Z9, Canada",
      area: "Ville-Marie",
      phoneNumber: "(514) 543-4377",
      longitude: -73.5550322,
      latitude: 45.5028655,
      mapsRating: null,
      rating: 4.6,
      mapsUrl: "https://maps.google.com/?cid=12562143058485463325",
      hours: "Monday: 9:00 AM – 6:00 PM;Tuesday: 9:00 AM – 6:00 PM;Wednesday: 9:00 AM – 6:00 PM;Thursday: 9:00 AM – 6:00 PM;Friday: 9:00 AM – 6:00 PM;Saturday: 9:00 AM – 6:00 PM;Sunday: 9:00 AM – 6:00 PM",
      website: "http://www.boulangerielemarquis.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Cantine Panella Sans Gluten",
      description: "Fully gluten-free bakery and restaurant in Petite-Patrie offering lasagna, noodle dishes, sandwiches, cakes, pastries, and more. Certified safe for celiacs.",
      notes: "Fully gluten-free bakery and restaurant in Petite-Patrie offering lasagna, noodle dishes, sandwiches, cakes, pastries, and more. Certified safe for celiacs.",
      mapsPlaceId: "ChIJi1KJOcQZyUwRkyKm_sLpCxs",
      address: "515 R. Saint-Zotique, Montreal, QC H2S 1M2, Canada",
      area: "Rosemont-La Petite-Patrie",
      phoneNumber: "(514) 380-8064",
      longitude: -73.60769359999999,
      latitude: 45.5366322,
      mapsRating: null,
      rating: 4.9,
      mapsUrl: "https://maps.google.com/?cid=1948908287473099411",
      hours: "Monday: Closed;Tuesday: 11:00 AM – 8:00 PM;Wednesday: 11:00 AM – 8:00 PM;Thursday: 11:00 AM – 8:00 PM;Friday: 11:00 AM – 9:00 PM;Saturday: 11:00 AM – 9:00 PM;Sunday: Closed",
      website: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "L'Artisan Délices Sans Gluten et Sans Lait",
      description: "100% gluten-free and dairy-free bakery with pastries, patisserie, quiches, turnovers, pizzas, and breads. Frozen products available.",
      notes: "100% gluten-free and dairy-free bakery with pastries, patisserie, quiches, turnovers, pizzas, and breads. Frozen products available.",
      mapsPlaceId: "ChIJ0RH-Mz0ZyUwRj6ymyKIBM5o",
      address: "7700 Rue St-Hubert, Montréal, QC H2R 2N8, Canada",
      area: "Villeray—Saint-Michel—Parc-Extension",
      phoneNumber: "(514) 439-8388",
      longitude: -73.6211342,
      latitude: 45.5442207,
      mapsRating: null,
      rating: 4.6,
      mapsUrl: "https://maps.google.com/?cid=11111226504315841679",
      hours: "Monday: Closed;Tuesday: Closed;Wednesday: 8:00 AM – 5:00 PM;Thursday: 8:00 AM – 5:00 PM;Friday: 8:00 AM – 5:00 PM;Saturday: 8:00 AM – 5:00 PM;Sunday: 8:00 AM – 5:00 PM",
      website: "https://lartisandelices.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Parc Sans Gluten",
      description: "100% gluten-free bakery near Parc Lafontaine offering tarts, eclairs, croissants, and bread.",
      notes: "100% gluten-free bakery near Parc Lafontaine offering tarts, eclairs, croissants, and bread.",
      mapsPlaceId: "ChIJS33xGicbyUwRlkPVO5UO5UI",
      address: "4050 Av. du Parc-La Fontaine Plateaux, Montréal, QC H2L 3M8, Canada",
      area: "Le Plateau-Mont-Royal",
      phoneNumber: "(438) 476-0648",
      longitude: -73.57271519999999,
      latitude: 45.5244131,
      mapsRating: null,
      rating: 4,
      mapsUrl: "https://maps.google.com/?cid=4820275010286732182",
      hours: "Monday: 9:00 AM – 5:00 PM;Tuesday: Closed;Wednesday: 9:00 AM – 5:00 PM;Thursday: 9:00 AM – 5:00 PM;Friday: 9:00 AM – 5:00 PM;Saturday: 9:00 AM – 5:30 PM;Sunday: 9:30 AM – 4:00 PM",
      website: "https://www.parcsansgluten.ca/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Cookie Stephanie",
      description: "Gluten-free bakery specializing in breads, cupcakes, and cookies.",
      notes: "Gluten-free bakery specializing in breads, cupcakes, and cookies.",
      mapsPlaceId: "ChIJGZAJIVoayUwRaqF-io_z9dM",
      address: "272 Saint-Jacques Ouest, Montréal, QC H2Y 1N3, Canada",
      area: "Ville-Marie",
      phoneNumber: "(438) 380-1560",
      longitude: -73.55889359999999,
      latitude: 45.5029821,
      mapsRating: null,
      rating: 4.5,
      mapsUrl: "https://maps.google.com/?cid=15273381509126332778",
      hours: "Monday: 7:30 AM – 5:00 PM;Tuesday: 7:30 AM – 5:00 PM;Wednesday: 7:30 AM – 5:00 PM;Thursday: 7:30 AM – 5:00 PM;Friday: 7:30 AM – 5:00 PM;Saturday: 10:00 AM – 4:00 PM;Sunday: 10:00 AM – 4:00 PM",
      website: "http://www.cookiestefanie.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Doughnats",
      description: "Gluten-free donuts confirmed safe for celiacs.",
      notes: "Gluten-free donuts confirmed safe for celiacs.",
      mapsPlaceId: "ChIJxZrWiVgXyUwRmAOL77gqlSw",
      address: "5325 Bd Décarie, Montréal, QC H3W 3C4, Canada",
      area: "Côte-des-Neiges - Notre-Dame-de-Grâce",
      phoneNumber: "(514) 660-2699",
      longitude: -73.6327634,
      latitude: 45.48562629999999,
      mapsRating: null,
      rating: 4.6,
      mapsUrl: "https://maps.google.com/?cid=3212520882979931032",
      hours: "Monday: Closed;Tuesday: 9:00 AM – 5:00 PM;Wednesday: 9:00 AM – 5:00 PM;Thursday: 9:00 AM – 5:00 PM;Friday: 9:00 AM – 5:00 PM;Saturday: 9:00 AM – 5:00 PM;Sunday: 9:00 AM – 5:00 PM",
      website: "https://doughnats.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "La Brunelle",
      description: "BYOB restaurant willing to adjust meals for celiac needs.",
      notes: "BYOB restaurant willing to adjust meals for celiac needs.",
      mapsPlaceId: "ChIJWaRLbMwbyUwRMWiHV1eaAE4",
      address: "327 Av. Duluth E, Montréal, QC H2W 1J1, Canada",
      area: "Le Plateau-Mont-Royal",
      phoneNumber: "(514) 849-8403",
      longitude: -73.5766065,
      latitude: 45.5201265,
      mapsRating: null,
      rating: 4.1,
      mapsUrl: "https://maps.google.com/?cid=5620662034879703089",
      hours: "Monday: 5:30 – 10:00 PM;Tuesday: 5:30 – 10:00 PM;Wednesday: 5:30 – 10:00 PM;Thursday: 5:30 – 10:30 PM;Friday: 5:30 – 10:30 PM;Saturday: 5:30 – 10:30 PM;Sunday: 5:30 – 10:00 PM",
      website: "https://www.restaurantlaprunelle.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Audacieuse Vanille",
      description: "Gluten-free bakery in Verdun, temporarily closed but planning to reopen.",
      notes: "Gluten-free bakery in Verdun, temporarily closed but planning to reopen.",
      mapsPlaceId: "ChIJtynVvjkRyUwRZcJYn-9OKug",
      address: "3910 Rue Wellington, Montréal, QC H4G 1V3, Canada",
      area: "Verdun",
      phoneNumber: "(438) 490-7769",
      longitude: -73.56672360000002,
      latitude: 45.4647693,
      mapsRating: null,
      rating: 4.8,
      mapsUrl: "https://maps.google.com/?cid=16729270556898673253",
      hours: null,
      website: "https://patisseriebeline.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Vegateau",
      description: "100% vegan and gluten-free bakery with cupcakes, cakes, tarts, cookies, and ice cream.",
      notes: "100% vegan and gluten-free bakery with cupcakes, cakes, tarts, cookies, and ice cream.",
      mapsPlaceId: "ChIJI9EdziIbyUwRk5YzvUtExcQ",
      address: "1215 Avenue du Mont-Royal E, Montréal, QC H2J 1Y2, Canada",
      area: "Le Plateau-Mont-Royal",
      phoneNumber: "(438) 868-0338",
      longitude: -73.5784896,
      latitude: 45.529027,
      mapsRating: null,
      rating: 4.7,
      mapsUrl: "https://maps.google.com/?cid=14178814093933385363",
      hours: "Monday: 10:00 AM – 7:00 PM;Tuesday: 10:00 AM – 7:00 PM;Wednesday: 10:00 AM – 7:00 PM;Thursday: 10:00 AM – 7:00 PM;Friday: 10:00 AM – 7:00 PM;Saturday: 10:00 AM – 7:00 PM;Sunday: 10:00 AM – 7:00 PM",
      website: "http://www.vegateau.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Susie Sans Gluten",
      description: "West Island gluten-free bakery with cakes and packaged gluten-free products, including pastas and crackers.",
      notes: "West Island gluten-free bakery with cakes and packaged gluten-free products, including pastas and crackers.",
      mapsPlaceId: "ChIJHy0EhFMlyUwRyMw1DFfUe4w",
      address: "3055 Rue Joseph-A.-Bombardier, Laval, QC H7P 6C5, Canada",
      area: null,
      phoneNumber: "(579) 640-7312",
      longitude: -73.7871711,
      latitude: 45.5648808,
      mapsRating: null,
      rating: 4.7,
      mapsUrl: "https://maps.google.com/?cid=10122918057777417416",
      hours: "Monday: 10:00 AM – 5:00 PM;Tuesday: 10:00 AM – 5:00 PM;Wednesday: 10:00 AM – 5:00 PM;Thursday: 9:00 AM – 6:00 PM;Friday: 9:00 AM – 7:00 PM;Saturday: 9:00 AM – 5:00 PM;Sunday: 9:00 AM – 5:00 PM",
      website: "http://www.susiesansgluten.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Delicious Without",
      description: "West Island bakery free of gluten, nuts, dairy, soy, and sesame; kosher and allergen-free facility.",
      notes: "West Island bakery free of gluten, nuts, dairy, soy, and sesame; kosher and allergen-free facility.",
      mapsPlaceId: "ChIJ1WwlVYo8yUwRGs3R1O_OF3g",
      address: "90E Bd Brunswick, Dollard-des-Ormeaux, QC H9B 2C5, Canada",
      area: null,
      phoneNumber: "(514) 542-3943",
      longitude: -73.8118472,
      latitude: 45.4761755,
      mapsRating: null,
      rating: 4.3,
      mapsUrl: "https://maps.google.com/?cid=8653612738478722330",
      hours: "Monday: 8:00 AM – 3:00 PM;Tuesday: 8:00 AM – 3:00 PM;Wednesday: 8:00 AM – 3:00 PM;Thursday: 8:00 AM – 3:00 PM;Friday: 8:00 AM – 3:00 PM;Saturday: Closed;Sunday: Closed",
      website: "http://deliciouswithout.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Cote-St-Luc BBQ",
      description: "Fries fried in separate oil, and gravy made with corn starch instead of wheat flour—consistently gluten-free poutine. West Island location also has gluten-free chicken wings.",
      notes: "Fries fried in separate oil, and gravy made with corn starch instead of wheat flour—consistently gluten-free poutine. West Island location also has gluten-free chicken wings.",
      mapsPlaceId: "ChIJ3ZMgk1MXyUwR_qbPeH03BHw",
      address: "5403 Chem. de la Côte St Luc, Montréal, QC H3X 2C3, Canada",
      area: "Côte-des-Neiges - Notre-Dame-de-Grâce",
      phoneNumber: "(514) 488-4011",
      longitude: -73.624371,
      latitude: 45.479516,
      mapsRating: null,
      rating: 4.1,
      mapsUrl: "https://maps.google.com/?cid=8936328572647220990",
      hours: "Monday: 11:30 AM – 8:30 PM;Tuesday: 11:30 AM – 8:30 PM;Wednesday: 11:30 AM – 8:30 PM;Thursday: 11:30 AM – 9:30 PM;Friday: 11:30 AM – 9:30 PM;Saturday: 11:30 AM – 9:30 PM;Sunday: 11:30 AM – 8:30 PM",
      website: "http://www.cotestlucbbq.com/?lang=fr",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Modavie",
      description: "Downtown restaurant offering gluten-free poutine with a dedicated fryer and celiac-safe gravy.",
      notes: "Downtown restaurant offering gluten-free poutine with a dedicated fryer and celiac-safe gravy.",
      mapsPlaceId: "ChIJF47_p1cayUwR1uC4VBovwI0",
      address: "1 Rue Saint-Paul O, Montréal, QC H2Y 1Y6, Canada",
      area: "Ville-Marie",
      phoneNumber: "(514) 287-9582",
      longitude: -73.553962,
      latitude: 45.5054645,
      mapsRating: null,
      rating: 4.4,
      mapsUrl: "https://maps.google.com/?cid=10214215745013342422",
      hours: "Monday: 11:30 AM – 11:00 PM;Tuesday: 11:30 AM – 11:00 PM;Wednesday: 11:30 AM – 11:00 PM;Thursday: 11:30 AM – 11:00 PM;Friday: 11:30 AM – 11:00 PM;Saturday: 10:30 AM – 11:00 PM;Sunday: 10:30 AM – 11:00 PM",
      website: "http://modavie.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Hero Burgers",
      description: "Downtown near Musée des Beaux Arts, casual spot with gluten-free poutine, buns, dedicated fryers, and a gluten-free menu.",
      notes: "Downtown near Musée des Beaux Arts, casual spot with gluten-free poutine, buns, dedicated fryers, and a gluten-free menu.",
      mapsPlaceId: "ChIJkxBueGoayUwREfIHG4Z_Quw",
      address: "1388 Blvd. De Maisonneuve Ouest, Montreal, QC H3G 1M6, Canada",
      area: "Ville-Marie",
      phoneNumber: "(514) 286-0110",
      longitude: -73.5776532,
      latitude: 45.4976025,
      mapsRating: null,
      rating: 4.3,
      mapsUrl: "https://maps.google.com/?cid=17024309755369746961",
      hours: "Monday: 11:00 AM – 11:00 PM;Tuesday: 11:00 AM – 11:00 PM;Wednesday: 11:00 AM – 11:00 PM;Thursday: 11:00 AM – 12:00 AM;Friday: 11:00 AM – 12:00 AM;Saturday: 10:00 AM – 12:00 AM;Sunday: 10:00 AM – 10:00 PM",
      website: "http://www.notreboeufdegrace.ca/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Ottavio's",
      description: "Gluten-free pizza with cross-contamination precautions. Also offers truffle and Parmesan fries.",
      notes: "Gluten-free pizza with cross-contamination precautions. Also offers truffle and Parmesan fries.",
      mapsPlaceId: "ChIJ9e-XHC0iyUwRz85vxSty3S8",
      address: "1459 Blvd. Saint-Martin O, Laval, QC H7S 1N1, Canada",
      area: null,
      phoneNumber: "(450) 663-7966",
      longitude: -73.72460269999999,
      latitude: 45.5702514,
      mapsRating: null,
      rating: 4.2,
      mapsUrl: "https://maps.google.com/?cid=3449038421957267151",
      hours: "Monday: 11:00 AM – 9:00 PM;Tuesday: 11:00 AM – 9:00 PM;Wednesday: 11:00 AM – 9:00 PM;Thursday: 11:00 AM – 9:00 PM;Friday: 11:00 AM – 10:00 PM;Saturday: 12:00 – 10:00 PM;Sunday: 12:00 – 9:00 PM",
      website: "https://ottavio.ca/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pizza No. 900 (Monkland)",
      description: "Neapolitan-style gluten-free pizza, with strict celiac-friendly preparation.",
      notes: "Neapolitan-style gluten-free pizza, with strict celiac-friendly preparation.",
      mapsPlaceId: "ChIJZ8ompFIXyUwRB58I8zPfWhU",
      address: "5611 Av de Monkland, Montréal, QC H4A 1E2, Canada",
      area: "Côte-des-Neiges - Notre-Dame-de-Grâce",
      phoneNumber: "(514) 504-9009",
      longitude: -73.6230587,
      latitude: 45.4755675,
      mapsRating: null,
      rating: 4.3,
      mapsUrl: "https://maps.google.com/?cid=1538787636914200327",
      hours: "Monday: 11:30 AM – 10:00 PM;Tuesday: 11:30 AM – 10:00 PM;Wednesday: 11:30 AM – 10:00 PM;Thursday: 11:30 AM – 10:00 PM;Friday: 11:30 AM – 11:00 PM;Saturday: 11:30 AM – 11:00 PM;Sunday: 11:30 AM – 10:00 PM",
      website: "https://no900.com/pages/monkland-no-900-pizzeria-napolitaine",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "TapiGo!",
      description: "100% gluten-free tapioca crepe shop with savoury and sweet options, plus açaí bowls and pao de queijo.",
      notes: "100% gluten-free tapioca crepe shop with savoury and sweet options, plus açaí bowls and pao de queijo.",
      mapsPlaceId: "ChIJYRk_0IUbyUwRUtFBjX0Cwy8",
      address: "4057 Boul. Saint-Laurent, Montréal, QC H2W 1Y7, Canada",
      area: "Le Plateau-Mont-Royal",
      phoneNumber: "(514) 842-7676",
      longitude: -73.5794478,
      latitude: 45.51712939999999,
      mapsRating: null,
      rating: 4.8,
      mapsUrl: "https://maps.google.com/?cid=3441597278505259346",
      hours: "Monday: 11:00 AM – 9:00 PM;Tuesday: 11:00 AM – 9:00 PM;Wednesday: 11:00 AM – 9:00 PM;Thursday: 11:00 AM – 9:00 PM;Friday: 11:00 AM – 9:00 PM;Saturday: 10:00 AM – 9:00 PM;Sunday: 11:00 AM – 7:00 PM",
      website: "http://www.tapigotapioca.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Arepera du Plateau",
      description: "Fully gluten-free facility serving corn arepas with various fillings and fried plantains.",
      notes: "Fully gluten-free facility serving corn arepas with various fillings and fried plantains.",
      mapsPlaceId: "ChIJBf4s6swbyUwRyQHr-7doD9k",
      address: "73 Rue Prince-Arthur E, Montréal, QC H2X 1B4, Canada",
      area: "Le Plateau-Mont-Royal",
      phoneNumber: "(514) 508-7267",
      longitude: -73.5720161,
      latitude: 45.5147776,
      mapsRating: null,
      rating: 4.6,
      mapsUrl: "https://maps.google.com/?cid=15640835170295808457",
      hours: "Monday: Closed;Tuesday: 11:30 AM – 9:00 PM;Wednesday: 11:30 AM – 9:00 PM;Thursday: 11:30 AM – 9:00 PM;Friday: 11:30 AM – 9:00 PM;Saturday: 11:30 AM – 9:00 PM;Sunday: Closed",
      website: "http://www.arepera.ca/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "D'maïs",
      description: "Gluten-free corn empanadas.",
      notes: "Gluten-free corn empanadas.",
      mapsPlaceId: "ChIJs7fMCYkRyUwRA_dtkwdMD3Y",
      address: "900 Rue Saint-Philippe Unit 101, Montreal, QC H4C 2W3, Canada",
      area: "Southwest",
      phoneNumber: "(438) 366-7083",
      longitude: -73.590109,
      latitude: 45.4777682,
      mapsRating: null,
      rating: 4.9,
      mapsUrl: "https://maps.google.com/?cid=8507101816548095747",
      hours: null,
      website: "https://www.instagram.com/dmais_mtl/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Venice",
      description: "Gluten-free menu options including poke bowls, tacos, and soups.",
      notes: "Gluten-free menu options including poke bowls, tacos, and soups.",
      mapsPlaceId: null,
      address: "440 Saint Francois Xavier St, Montreal, Quebec H2Y 2T3",
      area: null,
      phoneNumber: null,
      longitude: -73.5589553,
      latitude: 45.5032017,
      mapsRating: null,
      rating: 4.4,
      mapsUrl: null,
      hours: "Monday: 11:30 AM – 11:00 PM;Tuesday: 11:30 AM – 11:00 PM;Wednesday: 11:30 AM – 11:00 PM;Thursday: 11:30 AM – 11:00 PM;Friday: 11:30 AM – 11:00 PM;Saturday: 10:00 AM – 11:00 PM;Sunday: 10:00 AM – 11:00 PM",
      website: "https://www.venicemtl.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Crêperie Du Marché",
      description: "Dedicated gluten-free buckwheat crepes in Marché Jean-Talon.",
      notes: "Dedicated gluten-free buckwheat crepes in Marché Jean-Talon.",
      mapsPlaceId: "ChIJ-RNTZhMZyUwRFDfMCIphMLI",
      address: "7070 Av. Henri-Julien, Montréal, QC H2S 2V5, Canada",
      area: "Rosemont - La Petite-Patrie",
      phoneNumber: "(514) 238-0998",
      longitude: -73.6151502,
      latitude: 45.5364744,
      mapsRating: null,
      rating: 4.6,
      mapsUrl: "https://maps.google.com/?cid=12839869783114266388",
      hours: "Monday: 9:00 AM – 5:00 PM;Tuesday: 9:00 AM – 5:00 PM;Wednesday: 9:00 AM – 5:00 PM;Thursday: 9:00 AM – 5:00 PM;Friday: 9:00 AM – 5:00 PM;Saturday: 8:30 AM – 5:00 PM;Sunday: 9:00 AM – 5:00 PM",
      website: "http://www.creperiedumarche.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mucca",
      description: "Little Italy newcomer with a separate gluten-free prep station for pasta, bread, and meals.",
      notes: "Little Italy newcomer with a separate gluten-free prep station for pasta, bread, and meals.",
      mapsPlaceId: "ChIJS4Sb4OIZyUwRf9rr7BdhkAQ",
      address: "236 R. Saint-Zotique, Montreal, QC H2S 1L1, Canada",
      area: "Rosemont-La Petite-Patrie",
      phoneNumber: "(438) 375-3033",
      longitude: -73.6098032,
      latitude: 45.5338047,
      mapsRating: null,
      rating: 4.8,
      mapsUrl: "https://maps.google.com/?cid=328869528185068159",
      hours: "Monday: Closed;Tuesday: Closed;Wednesday: 5:00 – 11:00 PM;Thursday: 5:00 – 11:00 PM;Friday: 5:00 – 11:00 PM;Saturday: 5:00 – 11:00 PM;Sunday: Closed",
      website: "https://mucca.ca/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Abe & Mary's",
      description: "Offers gluten-free soups, salads, and separately toasted bread; staff knowledgeable about celiac.",
      notes: "Offers gluten-free soups, salads, and separately toasted bread; staff knowledgeable about celiac.",
      mapsPlaceId: "ChIJkSvlS0AayUwRzIeai6vaLMM",
      address: "2125 Rue de la Montagne, Montréal, QC H3G 1Z8, Canada",
      area: "Ville-Marie",
      phoneNumber: "(514) 908-4088",
      longitude: -73.57753009999999,
      latitude: 45.4993124,
      mapsRating: null,
      rating: 3.5,
      mapsUrl: "https://maps.google.com/?cid=14063856166687639500",
      hours: "Monday: 11:00 AM – 6:00 PM;Tuesday: 11:00 AM – 6:00 PM;Wednesday: 11:00 AM – 6:00 PM;Thursday: 11:00 AM – 6:00 PM;Friday: 11:00 AM – 6:00 PM;Saturday: Closed;Sunday: Closed",
      website: "https://www.abeandmarys.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Restaurant Melisse",
      description: "80% of the menu is gluten-free, with knowledgeable staff.",
      notes: "80% of the menu is gluten-free, with knowledgeable staff.",
      mapsPlaceId: "ChIJFwGmIV8ayUwRsiaVqvgx_Vc",
      address: "719 Rue William, Montréal, QC H3C 1N9, Canada",
      area: "Ville-Marie",
      phoneNumber: "(514) 379-3794",
      longitude: -73.5579925,
      latitude: 45.4982278,
      mapsRating: null,
      rating: 4.6,
      mapsUrl: "https://maps.google.com/?cid=6340278794491078322",
      hours: "Monday: Closed;Tuesday: 11:30 AM – 2:30 PM;Wednesday: 11:30 AM – 2:30 PM, 6:00 – 10:00 PM;Thursday: 11:30 AM – 2:30 PM, 6:00 – 10:00 PM;Friday: 11:30 AM – 2:30 PM, 6:00 – 10:00 PM;Saturday: 10:00 AM – 2:30 PM;Sunday: 10:00 AM – 2:30 PM",
      website: "https://www.restaurantmelisse.com/#contact-section",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Ristorante Quattro",
      description: "Gluten-free options available with menu notes about modifications.",
      notes: "Gluten-free options available with menu notes about modifications.",
      mapsPlaceId: "ChIJMwAgO1cayUwRh_ZEkfEy02Q",
      address: "17 R. Notre Dame O, Montréal, QC H2Y 1S5, Canada",
      area: "Ville-Marie",
      phoneNumber: "(514) 903-2909",
      longitude: -73.5560493,
      latitude: 45.50586819999999,
      mapsRating: null,
      rating: 4.4,
      mapsUrl: "https://maps.google.com/?cid=7265206636984465031",
      hours: "Monday: 11:30 AM – 2:30 PM, 5:00 – 10:00 PM;Tuesday: 11:30 AM – 2:30 PM, 5:00 – 10:00 PM;Wednesday: 11:30 AM – 2:30 PM, 5:00 – 10:00 PM;Thursday: 11:30 AM – 2:30 PM, 5:00 – 10:00 PM;Friday: 11:30 AM – 2:30 PM, 5:00 – 10:00 PM;Saturday: 5:00 – 10:00 PM;Sunday: Closed",
      website: "https://www.ristorantequattro.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Breizh Café Montreal",
      description: "Authentic buckwheat crepes, 100% gluten-free, with sweet and savoury choices.",
      notes: "Authentic buckwheat crepes, 100% gluten-free, with sweet and savoury choices.",
      mapsPlaceId: "ChIJM53eTjMayUwRqxLK1Kbw4VM",
      address: "3991 Boul. Saint-Laurent, Montréal, QC H2W 1Y4, Canada",
      area: "Le Plateau-Mont-Royal",
      phoneNumber: "(514) 419-5634",
      longitude: -73.578721,
      latitude: 45.516789,
      mapsRating: null,
      rating: 4.6,
      mapsUrl: "https://maps.google.com/?cid=6044376774233166507",
      hours: "Monday: Closed;Tuesday: 11:00 AM – 9:00 PM;Wednesday: 11:00 AM – 9:00 PM;Thursday: 11:00 AM – 9:00 PM;Friday: 11:00 AM – 9:30 PM;Saturday: 10:00 AM – 9:30 PM;Sunday: 10:00 AM – 3:00 PM",
      website: "http://www.lebreizhcafe.com/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Satu Lagi",
      description: "100% gluten-free Indo-Malay tapas bar with satays and rice dishes.",
      notes: "100% gluten-free Indo-Malay tapas bar with satays and rice dishes.",
      mapsPlaceId: "ChIJD6kQ-YkbyUwRowgTjyj78iA",
      address: "1361 Avenue du Mont-Royal E, Montréal, QC H2J 1Y8, Canada",
      area: "Le Plateau-Mont-Royal",
      phoneNumber: "(514) 528-0888",
      longitude: -73.5770355,
      latitude: 45.5305176,
      mapsRating: null,
      rating: 4.6,
      mapsUrl: "https://maps.google.com/?cid=2374236105195325603",
      hours: "Monday: Closed;Tuesday: 5:00 – 10:30 PM;Wednesday: 5:00 – 10:30 PM;Thursday: 5:00 – 10:30 PM;Friday: 5:00 – 11:30 PM;Saturday: 5:00 – 11:30 PM;Sunday: 5:00 – 10:00 PM",
      website: "http://www.satulagi.ca/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Krapow",
      description: "Dedicated gluten-free Southeast Asian restaurant in Mont-Royal with a small but flavorful menu.",
      notes: "Dedicated gluten-free Southeast Asian restaurant in Mont-Royal with a small but flavorful menu.",
      mapsPlaceId: "ChIJmZStoMIbyUwR7_NNNYj6oCE",
      address: "4449 Rue de Mentana, Montréal, QC H2J 3B4, Canada",
      area: "Le Plateau-Mont-Royal",
      phoneNumber: "(514) 719-9888",
      longitude: -73.5795218,
      latitude: 45.5268842,
      mapsRating: null,
      rating: 4.6,
      mapsUrl: "https://maps.google.com/?cid=2423212062442124271",
      hours: "Monday: 11:30 AM – 9:00 PM;Tuesday: 11:30 AM – 9:00 PM;Wednesday: 11:30 AM – 9:00 PM;Thursday: 11:30 AM – 9:00 PM;Friday: 11:30 AM – 9:00 PM;Saturday: 11:30 AM – 9:00 PM;Sunday: 11:30 AM – 9:00 PM",
      website: "http://www.krapow.ca/",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "La Bolo à Lolo",
      description: "Dedicated gluten-free grocery store in Mont-Royal with a small rotating lunch counter menu.",
      notes: "Dedicated gluten-free grocery store in Mont-Royal with a small rotating lunch counter menu.",
      mapsPlaceId: "ChIJKfPHziobyUwRsW1TkLX6eeQ",
      address: "167 Ave des Pins E, Montréal, QC H2W 1N9, Canada",
      area: "Le Plateau-Mont-Royal",
      phoneNumber: "(438) 383-8848",
      longitude: -73.5738722,
      latitude: 45.5166968,
      mapsRating: null,
      rating: 5,
      mapsUrl: "https://maps.google.com/?cid=16463465570546970033",
      hours: "Monday: 9:00 AM – 8:00 PM;Tuesday: 9:00 AM – 8:00 PM;Wednesday: 9:00 AM – 8:00 PM;Thursday: 9:00 AM – 8:00 PM;Friday: 9:00 AM – 8:00 PM;Saturday: 10:00 AM – 5:00 PM;Sunday: 10:00 AM – 5:00 PM",
      website: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  const cuisinesData = [
    { id: 'french' },
    { id: 'italian' },
    { id: 'desserts' },
    { id: 'bbq' },
    { id: 'burgers' },
    { id: 'brazilian' },
    { id: 'venezuelan' },
    { id: 'latin-american' },
    { id: 'california-fusion' },
    { id: 'cafe-deli' },
    { id: 'breton' },
    { id: 'indonesian-malaysian' },
    { id: 'thai' },
    { id: 'varied' }
  ];

  // Then, create restaurant-cuisine associations
  const RestaurantCuisinesData = [
    // Le Marquis Sans Gluten
    { restaurantId: 1, cuisineId: 'french' },
    
    // Cantine Panella Sans Gluten
    { restaurantId: 2, cuisineId: 'italian' },
    
    // L'Artisan Délices Sans Gluten et Sans Lait
    { restaurantId: 3, cuisineId: 'french' },
    
    // Parc Sans Gluten
    { restaurantId: 4, cuisineId: 'french' },
    
    // Cookie Stephanie
    { restaurantId: 5, cuisineId: 'desserts' },
    
    // Doughnats
    { restaurantId: 6, cuisineId: 'desserts' },
    
    // La Brunelle
    { restaurantId: 7, cuisineId: 'french' },
    
    // Audacieuse Vanille
    { restaurantId: 8, cuisineId: 'desserts' },
    
    // Vegateau
    { restaurantId: 9, cuisineId: 'desserts' },
    
    // Susie Sans Gluten
    { restaurantId: 10, cuisineId: 'varied' },
    
    // Delicious Without
    { restaurantId: 11, cuisineId: 'varied' },
    
    // Cote-St-Luc BBQ
    { restaurantId: 12, cuisineId: 'bbq' },
    
    // Modavie
    { restaurantId: 13, cuisineId: 'french' },
    
    // Hero Burgers
    { restaurantId: 14, cuisineId: 'burgers' },
    
    // Ottavio's
    { restaurantId: 15, cuisineId: 'italian' },
    
    // Pizza No. 900 (Monkland)
    { restaurantId: 16, cuisineId: 'italian' },
    
    // TapiGo!
    { restaurantId: 17, cuisineId: 'brazilian' },
    
    // Arepera du Plateau
    { restaurantId: 18, cuisineId: 'venezuelan' },
    
    // D'maïs
    { restaurantId: 19, cuisineId: 'latin-american' },
    
    // Venice
    { restaurantId: 20, cuisineId: 'california-fusion' },
    
    // Crêperie Du Marché
    { restaurantId: 21, cuisineId: 'french' },
    
    // Mucca
    { restaurantId: 22, cuisineId: 'italian' },
    
    // Abe & Mary's
    { restaurantId: 23, cuisineId: 'cafe-deli' },
    
    // Restaurant Melisse
    { restaurantId: 24, cuisineId: 'french' },
    
    // Ristorante Quattro
    { restaurantId: 25, cuisineId: 'italian' },
    
    // Breizh Café Montreal
    { restaurantId: 26, cuisineId: 'breton' },
    
    // Satu Lagi
    { restaurantId: 27, cuisineId: 'indonesian-malaysian' },
    
    // Krapow
    { restaurantId: 28, cuisineId: 'thai' },
    
    // La Bolo à Lolo
    { restaurantId: 29, cuisineId: 'varied' }
  ];

  const categoriesData = [
    { id: 'bakery' },
    { id: 'restaurant' },
    { id: 'grocery' }
  ];

  // Then, create restaurant-category associations
  const restaurantCategoriesData = [
    // Le Marquis Sans Gluten
    { restaurantId: 1, categoryId: 'bakery' },
    
    // Cantine Panella Sans Gluten
    { restaurantId: 2, categoryId: 'bakery' },
    { restaurantId: 2, categoryId: 'restaurant' },
    
    // L'Artisan Délices Sans Gluten et Sans Lait
    { restaurantId: 3, categoryId: 'bakery' },
    
    // Parc Sans Gluten
    { restaurantId: 4, categoryId: 'bakery' },
    
    // Cookie Stephanie
    { restaurantId: 5, categoryId: 'bakery' },
    
    // Doughnats
    { restaurantId: 6, categoryId: 'bakery' },
    
    // La Brunelle
    { restaurantId: 7, categoryId: 'restaurant' },
    
    // Audacieuse Vanille
    { restaurantId: 8, categoryId: 'bakery' },
    
    // Vegateau
    { restaurantId: 9, categoryId: 'bakery' },
    
    // Susie Sans Gluten
    { restaurantId: 10, categoryId: 'bakery' },
    
    // Delicious Without
    { restaurantId: 11, categoryId: 'bakery' },
    
    // Cote-St-Luc BBQ
    { restaurantId: 12, categoryId: 'restaurant' },
    
    // Modavie
    { restaurantId: 13, categoryId: 'restaurant' },
    
    // Hero Burgers
    { restaurantId: 14, categoryId: 'restaurant' },
    
    // Ottavio's
    { restaurantId: 15, categoryId: 'restaurant' },
    
    // Pizza No. 900 (Monkland)
    { restaurantId: 16, categoryId: 'restaurant' },
    
    // TapiGo!
    { restaurantId: 17, categoryId: 'bakery' },
    { restaurantId: 17, categoryId: 'restaurant' },
    
    // Arepera du Plateau
    { restaurantId: 18, categoryId: 'restaurant' },
    
    // D'maïs
    { restaurantId: 19, categoryId: 'restaurant' },
    
    // Venice
    { restaurantId: 20, categoryId: 'restaurant' },
    
    // Crêperie Du Marché
    { restaurantId: 21, categoryId: 'bakery' },
    { restaurantId: 21, categoryId: 'restaurant' },
    
    // Mucca
    { restaurantId: 22, categoryId: 'restaurant' },
    
    // Abe & Mary's
    { restaurantId: 23, categoryId: 'restaurant' },
    
    // Restaurant Melisse
    { restaurantId: 24, categoryId: 'restaurant' },
    
    // Ristorante Quattro
    { restaurantId: 25, categoryId: 'restaurant' },
    
    // Breizh Café Montreal
    { restaurantId: 26, categoryId: 'bakery' },
    { restaurantId: 26, categoryId: 'restaurant' },
    
    // Satu Lagi
    { restaurantId: 27, categoryId: 'restaurant' },
    
    // Krapow
    { restaurantId: 28, categoryId: 'restaurant' },
    
    // La Bolo à Lolo
    { restaurantId: 29, categoryId: 'bakery' },
    { restaurantId: 29, categoryId: 'restaurant' },
    { restaurantId: 29, categoryId: 'grocery' }
  ];

  
  await queryInterface.bulkInsert('Restaurants', restaurantsData),
  await queryInterface.bulkInsert('Categories', categoriesData),
  await queryInterface.bulkInsert('RestaurantCategories', restaurantCategoriesData),
  await queryInterface.bulkInsert('Cuisines', cuisinesData),
  await queryInterface.bulkInsert('RestaurantCuisines', RestaurantCuisinesData)
}

export function down(queryInterface: QueryInterface) {
  return Promise.all([
    queryInterface.bulkDelete('Restaurants', [], {}),
    queryInterface.bulkDelete('Categories', [], {}),
    queryInterface.bulkDelete('RestaurantCategories', [], {}),
    queryInterface.bulkDelete('Cuisines', [], {}),
    queryInterface.bulkDelete('RestaurantCuisines', [], {})
  ])
} 
