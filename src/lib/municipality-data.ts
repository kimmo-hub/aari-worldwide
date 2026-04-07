import type { Official, OfficialProfile } from "@/types/database";

// ─── Helper ───

function mOfficial(
  id: string,
  slug: string,
  firstName: string,
  lastName: string,
  titleFi: string,
  titleEn: string,
  orgFi: string,
  orgEn: string,
  appointmentDate: string,
  bioFi: string,
  bioEn: string,
  email: string | null = null,
  phone: string | null = null,
  politicalBgFi: string | null = null,
  politicalBgEn: string | null = null
): Official {
  return {
    id,
    slug,
    first_name: firstName,
    last_name: lastName,
    title_fi: titleFi,
    title_en: titleEn,
    organization_fi: orgFi,
    organization_en: orgEn,
    photo_url: null,
    appointment_date: appointmentDate,
    appointed_by_fi: "Kunnanvaltuusto",
    appointed_by_en: "Municipal council",
    bio_fi: bioFi,
    bio_en: bioEn,
    email,
    phone,
    category: "municipal",
    role_type: "staff",
    political_background_fi: politicalBgFi,
    political_background_en: politicalBgEn,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2026-04-01T00:00:00Z",
  };
}

function mCouncil(
  id: string,
  slug: string,
  firstName: string,
  lastName: string,
  titleFi: string,
  titleEn: string,
  orgFi: string,
  orgEn: string,
  party: string,
  email: string | null = null,
): Official {
  return {
    id,
    slug,
    first_name: firstName,
    last_name: lastName,
    title_fi: titleFi,
    title_en: titleEn,
    organization_fi: orgFi,
    organization_en: orgEn,
    photo_url: null,
    appointment_date: "2025-06-01",
    appointed_by_fi: "Kuntavaalit 2025",
    appointed_by_en: "Municipal elections 2025",
    bio_fi: "",
    bio_en: "",
    email,
    phone: null,
    category: "municipal",
    role_type: "council",
    party,
    created_at: "2025-06-01T00:00:00Z",
    updated_at: "2025-06-01T00:00:00Z",
  };
}

function profile(official: Official): OfficialProfile {
  return { official, previous_roles: [], affiliations: [], public_statements: [], feedback: [] };
}

// ─── All 309 Finnish municipalities by region ───

export const MUNICIPALITIES: { region_fi: string; region_en: string; municipalities: { fi: string; en: string }[] }[] = [
  {
    region_fi: "Uusimaa", region_en: "Uusimaa",
    municipalities: [
      { fi: "Helsinki", en: "Helsinki" }, { fi: "Espoo", en: "Espoo" }, { fi: "Vantaa", en: "Vantaa" },
      { fi: "Hyvinkää", en: "Hyvinkää" }, { fi: "Järvenpää", en: "Järvenpää" }, { fi: "Kerava", en: "Kerava" },
      { fi: "Kirkkonummi", en: "Kirkkonummi" }, { fi: "Lohja", en: "Lohja" }, { fi: "Nurmijärvi", en: "Nurmijärvi" },
      { fi: "Porvoo", en: "Porvoo" }, { fi: "Tuusula", en: "Tuusula" }, { fi: "Vihti", en: "Vihti" },
      { fi: "Mäntsälä", en: "Mäntsälä" }, { fi: "Sipoo", en: "Sipoo" }, { fi: "Askola", en: "Askola" },
      { fi: "Hanko", en: "Hanko" }, { fi: "Inkoo", en: "Inkoo" }, { fi: "Karkkila", en: "Karkkila" },
      { fi: "Kauniainen", en: "Kauniainen" }, { fi: "Lapinjärvi", en: "Lapinjärvi" }, { fi: "Loviisa", en: "Loviisa" },
      { fi: "Myrskylä", en: "Myrskylä" }, { fi: "Pornainen", en: "Pornainen" }, { fi: "Pukkila", en: "Pukkila" },
      { fi: "Raasepori", en: "Raseborg" }, { fi: "Siuntio", en: "Siuntio" },
    ],
  },
  {
    region_fi: "Varsinais-Suomi", region_en: "Southwest Finland",
    municipalities: [
      { fi: "Turku", en: "Turku" }, { fi: "Salo", en: "Salo" }, { fi: "Kaarina", en: "Kaarina" },
      { fi: "Raisio", en: "Raisio" }, { fi: "Naantali", en: "Naantali" }, { fi: "Lieto", en: "Lieto" },
      { fi: "Paimio", en: "Paimio" }, { fi: "Parainen", en: "Parainen" }, { fi: "Loimaa", en: "Loimaa" },
      { fi: "Uusikaupunki", en: "Uusikaupunki" }, { fi: "Laitila", en: "Laitila" }, { fi: "Masku", en: "Masku" },
      { fi: "Mynämäki", en: "Mynämäki" }, { fi: "Nousiainen", en: "Nousiainen" }, { fi: "Rusko", en: "Rusko" },
      { fi: "Aura", en: "Aura" }, { fi: "Marttila", en: "Marttila" }, { fi: "Koski Tl", en: "Koski Tl" },
      { fi: "Oripää", en: "Oripää" }, { fi: "Pöytyä", en: "Pöytyä" }, { fi: "Somero", en: "Somero" },
      { fi: "Sauvo", en: "Sauvo" }, { fi: "Kemiönsaari", en: "Kemiönsaari" }, { fi: "Kustavi", en: "Kustavi" },
      { fi: "Taivassalo", en: "Taivassalo" }, { fi: "Vehmaa", en: "Vehmaa" }, { fi: "Pyhäranta", en: "Pyhäranta" },
    ],
  },
  {
    region_fi: "Satakunta", region_en: "Satakunta",
    municipalities: [
      { fi: "Pori", en: "Pori" }, { fi: "Rauma", en: "Rauma" }, { fi: "Ulvila", en: "Ulvila" },
      { fi: "Kankaanpää", en: "Kankaanpää" }, { fi: "Huittinen", en: "Huittinen" }, { fi: "Harjavalta", en: "Harjavalta" },
      { fi: "Kokemäki", en: "Kokemäki" }, { fi: "Eura", en: "Eura" }, { fi: "Eurajoki", en: "Eurajoki" },
      { fi: "Nakkila", en: "Nakkila" }, { fi: "Säkylä", en: "Säkylä" }, { fi: "Pomarkku", en: "Pomarkku" },
      { fi: "Merikarvia", en: "Merikarvia" }, { fi: "Siikainen", en: "Siikainen" }, { fi: "Jämijärvi", en: "Jämijärvi" },
      { fi: "Karvia", en: "Karvia" },
    ],
  },
  {
    region_fi: "Kanta-Häme", region_en: "Tavastia Proper",
    municipalities: [
      { fi: "Hämeenlinna", en: "Hämeenlinna" }, { fi: "Riihimäki", en: "Riihimäki" }, { fi: "Forssa", en: "Forssa" },
      { fi: "Janakkala", en: "Janakkala" }, { fi: "Hattula", en: "Hattula" }, { fi: "Hausjärvi", en: "Hausjärvi" },
      { fi: "Loppi", en: "Loppi" }, { fi: "Tammela", en: "Tammela" }, { fi: "Jokioinen", en: "Jokioinen" },
      { fi: "Humppila", en: "Humppila" }, { fi: "Ypäjä", en: "Ypäjä" },
    ],
  },
  {
    region_fi: "Pirkanmaa", region_en: "Pirkanmaa",
    municipalities: [
      { fi: "Tampere", en: "Tampere" }, { fi: "Nokia", en: "Nokia" }, { fi: "Ylöjärvi", en: "Ylöjärvi" },
      { fi: "Kangasala", en: "Kangasala" }, { fi: "Lempäälä", en: "Lempäälä" }, { fi: "Pirkkala", en: "Pirkkala" },
      { fi: "Valkeakoski", en: "Valkeakoski" }, { fi: "Akaa", en: "Akaa" }, { fi: "Sastamala", en: "Sastamala" },
      { fi: "Mänttä-Vilppula", en: "Mänttä-Vilppula" }, { fi: "Orivesi", en: "Orivesi" }, { fi: "Ikaalinen", en: "Ikaalinen" },
      { fi: "Parkano", en: "Parkano" }, { fi: "Virrat", en: "Virrat" }, { fi: "Ruovesi", en: "Ruovesi" },
      { fi: "Juupajoki", en: "Juupajoki" }, { fi: "Kuhmoinen", en: "Kuhmoinen" }, { fi: "Hämeenkyrö", en: "Hämeenkyrö" },
      { fi: "Pälkäne", en: "Pälkäne" }, { fi: "Urjala", en: "Urjala" }, { fi: "Punkalaidun", en: "Punkalaidun" },
      { fi: "Vesilahti", en: "Vesilahti" }, { fi: "Kihniö", en: "Kihniö" },
    ],
  },
  {
    region_fi: "Päijät-Häme", region_en: "Päijänne Tavastia",
    municipalities: [
      { fi: "Lahti", en: "Lahti" }, { fi: "Heinola", en: "Heinola" }, { fi: "Hollola", en: "Hollola" },
      { fi: "Orimattila", en: "Orimattila" }, { fi: "Asikkala", en: "Asikkala" }, { fi: "Kärkölä", en: "Kärkölä" },
      { fi: "Padasjoki", en: "Padasjoki" }, { fi: "Sysmä", en: "Sysmä" }, { fi: "Hartola", en: "Hartola" },
      { fi: "Iitti", en: "Iitti" },
    ],
  },
  {
    region_fi: "Kymenlaakso", region_en: "Kymenlaakso",
    municipalities: [
      { fi: "Kouvola", en: "Kouvola" }, { fi: "Kotka", en: "Kotka" }, { fi: "Hamina", en: "Hamina" },
      { fi: "Pyhtää", en: "Pyhtää" }, { fi: "Miehikkälä", en: "Miehikkälä" }, { fi: "Virolahti", en: "Virolahti" },
    ],
  },
  {
    region_fi: "Etelä-Karjala", region_en: "South Karelia",
    municipalities: [
      { fi: "Lappeenranta", en: "Lappeenranta" }, { fi: "Imatra", en: "Imatra" }, { fi: "Lemi", en: "Lemi" },
      { fi: "Luumäki", en: "Luumäki" }, { fi: "Parikkala", en: "Parikkala" }, { fi: "Rautjärvi", en: "Rautjärvi" },
      { fi: "Ruokolahti", en: "Ruokolahti" }, { fi: "Savitaipale", en: "Savitaipale" }, { fi: "Taipalsaari", en: "Taipalsaari" },
    ],
  },
  {
    region_fi: "Etelä-Savo", region_en: "South Savo",
    municipalities: [
      { fi: "Mikkeli", en: "Mikkeli" }, { fi: "Savonlinna", en: "Savonlinna" }, { fi: "Pieksämäki", en: "Pieksämäki" },
      { fi: "Kangasniemi", en: "Kangasniemi" }, { fi: "Mäntyharju", en: "Mäntyharju" }, { fi: "Juva", en: "Juva" },
      { fi: "Puumala", en: "Puumala" }, { fi: "Sulkava", en: "Sulkava" }, { fi: "Hirvensalmi", en: "Hirvensalmi" },
      { fi: "Pertunmaa", en: "Pertunmaa" }, { fi: "Rantasalmi", en: "Rantasalmi" }, { fi: "Enonkoski", en: "Enonkoski" },
    ],
  },
  {
    region_fi: "Pohjois-Savo", region_en: "North Savo",
    municipalities: [
      { fi: "Kuopio", en: "Kuopio" }, { fi: "Varkaus", en: "Varkaus" }, { fi: "Iisalmi", en: "Iisalmi" },
      { fi: "Siilinjärvi", en: "Siilinjärvi" }, { fi: "Suonenjoki", en: "Suonenjoki" }, { fi: "Leppävirta", en: "Leppävirta" },
      { fi: "Lapinlahti", en: "Lapinlahti" }, { fi: "Kiuruvesi", en: "Kiuruvesi" }, { fi: "Pielavesi", en: "Pielavesi" },
      { fi: "Sonkajärvi", en: "Sonkajärvi" }, { fi: "Rautalampi", en: "Rautalampi" }, { fi: "Kaavi", en: "Kaavi" },
      { fi: "Tuusniemi", en: "Tuusniemi" }, { fi: "Tervo", en: "Tervo" }, { fi: "Vesanto", en: "Vesanto" },
      { fi: "Keitele", en: "Keitele" }, { fi: "Rautavaara", en: "Rautavaara" }, { fi: "Vieremä", en: "Vieremä" },
      { fi: "Joroinen", en: "Joroinen" },
    ],
  },
  {
    region_fi: "Pohjois-Karjala", region_en: "North Karelia",
    municipalities: [
      { fi: "Joensuu", en: "Joensuu" }, { fi: "Lieksa", en: "Lieksa" }, { fi: "Nurmes", en: "Nurmes" },
      { fi: "Kitee", en: "Kitee" }, { fi: "Outokumpu", en: "Outokumpu" }, { fi: "Kontiolahti", en: "Kontiolahti" },
      { fi: "Liperi", en: "Liperi" }, { fi: "Ilomantsi", en: "Ilomantsi" }, { fi: "Juuka", en: "Juuka" },
      { fi: "Polvijärvi", en: "Polvijärvi" }, { fi: "Rääkkylä", en: "Rääkkylä" }, { fi: "Tohmajärvi", en: "Tohmajärvi" },
      { fi: "Heinävesi", en: "Heinävesi" },
    ],
  },
  {
    region_fi: "Keski-Suomi", region_en: "Central Finland",
    municipalities: [
      { fi: "Jyväskylä", en: "Jyväskylä" }, { fi: "Jämsä", en: "Jämsä" }, { fi: "Äänekoski", en: "Äänekoski" },
      { fi: "Saarijärvi", en: "Saarijärvi" }, { fi: "Keuruu", en: "Keuruu" }, { fi: "Laukaa", en: "Laukaa" },
      { fi: "Muurame", en: "Muurame" }, { fi: "Viitasaari", en: "Viitasaari" }, { fi: "Pihtipudas", en: "Pihtipudas" },
      { fi: "Karstula", en: "Karstula" }, { fi: "Hankasalmi", en: "Hankasalmi" }, { fi: "Joutsa", en: "Joutsa" },
      { fi: "Petäjävesi", en: "Petäjävesi" }, { fi: "Toivakka", en: "Toivakka" }, { fi: "Uurainen", en: "Uurainen" },
      { fi: "Konnevesi", en: "Konnevesi" }, { fi: "Kinnula", en: "Kinnula" }, { fi: "Kivijärvi", en: "Kivijärvi" },
      { fi: "Kyyjärvi", en: "Kyyjärvi" }, { fi: "Kannonkoski", en: "Kannonkoski" }, { fi: "Luhanka", en: "Luhanka" },
      { fi: "Multia", en: "Multia" },
    ],
  },
  {
    region_fi: "Etelä-Pohjanmaa", region_en: "South Ostrobothnia",
    municipalities: [
      { fi: "Seinäjoki", en: "Seinäjoki" }, { fi: "Kauhajoki", en: "Kauhajoki" }, { fi: "Kauhava", en: "Kauhava" },
      { fi: "Lapua", en: "Lapua" }, { fi: "Kurikka", en: "Kurikka" }, { fi: "Alavus", en: "Alavus" },
      { fi: "Alajärvi", en: "Alajärvi" }, { fi: "Ähtäri", en: "Ähtäri" }, { fi: "Ilmajoki", en: "Ilmajoki" },
      { fi: "Kuortane", en: "Kuortane" }, { fi: "Teuva", en: "Teuva" }, { fi: "Isojoki", en: "Isojoki" },
      { fi: "Karijoki", en: "Karijoki" }, { fi: "Lappajärvi", en: "Lappajärvi" }, { fi: "Vimpeli", en: "Vimpeli" },
      { fi: "Evijärvi", en: "Evijärvi" }, { fi: "Soini", en: "Soini" },
    ],
  },
  {
    region_fi: "Pohjanmaa", region_en: "Ostrobothnia",
    municipalities: [
      { fi: "Vaasa", en: "Vaasa" }, { fi: "Pietarsaari", en: "Pietarsaari" }, { fi: "Mustasaari", en: "Mustasaari" },
      { fi: "Pedersöre", en: "Pedersöre" }, { fi: "Närpiö", en: "Närpiö" }, { fi: "Kristiinankaupunki", en: "Kristiinankaupunki" },
      { fi: "Kruunupyy", en: "Kruunupyy" }, { fi: "Uusikaarlepyy", en: "Uusikaarlepyy" }, { fi: "Laihia", en: "Laihia" },
      { fi: "Isokyrö", en: "Isokyrö" }, { fi: "Vöyri", en: "Vöyri" }, { fi: "Korsnäs", en: "Korsnäs" },
      { fi: "Maalahti", en: "Maalahti" }, { fi: "Luoto", en: "Luoto" }, { fi: "Kaskinen", en: "Kaskinen" },
    ],
  },
  {
    region_fi: "Keski-Pohjanmaa", region_en: "Central Ostrobothnia",
    municipalities: [
      { fi: "Kokkola", en: "Kokkola" }, { fi: "Kannus", en: "Kannus" }, { fi: "Kaustinen", en: "Kaustinen" },
      { fi: "Veteli", en: "Veteli" }, { fi: "Halsua", en: "Halsua" }, { fi: "Lestijärvi", en: "Lestijärvi" },
      { fi: "Perho", en: "Perho" }, { fi: "Toholampi", en: "Toholampi" },
    ],
  },
  {
    region_fi: "Pohjois-Pohjanmaa", region_en: "North Ostrobothnia",
    municipalities: [
      { fi: "Oulu", en: "Oulu" }, { fi: "Raahe", en: "Raahe" }, { fi: "Ylivieska", en: "Ylivieska" },
      { fi: "Kalajoki", en: "Kalajoki" }, { fi: "Kuusamo", en: "Kuusamo" }, { fi: "Nivala", en: "Nivala" },
      { fi: "Haapajärvi", en: "Haapajärvi" }, { fi: "Haapavesi", en: "Haapavesi" }, { fi: "Oulainen", en: "Oulainen" },
      { fi: "Kempele", en: "Kempele" }, { fi: "Liminka", en: "Liminka" }, { fi: "Muhos", en: "Muhos" },
      { fi: "Ii", en: "Ii" }, { fi: "Tyrnävä", en: "Tyrnävä" }, { fi: "Pudasjärvi", en: "Pudasjärvi" },
      { fi: "Taivalkoski", en: "Taivalkoski" }, { fi: "Pyhäjoki", en: "Pyhäjoki" }, { fi: "Pyhäjärvi", en: "Pyhäjärvi" },
      { fi: "Kärsämäki", en: "Kärsämäki" }, { fi: "Sievi", en: "Sievi" }, { fi: "Alavieska", en: "Alavieska" },
      { fi: "Merijärvi", en: "Merijärvi" }, { fi: "Pyhäntä", en: "Pyhäntä" }, { fi: "Reisjärvi", en: "Reisjärvi" },
      { fi: "Siikajoki", en: "Siikajoki" }, { fi: "Siikalatva", en: "Siikalatva" }, { fi: "Lumijoki", en: "Lumijoki" },
      { fi: "Utajärvi", en: "Utajärvi" }, { fi: "Vaala", en: "Vaala" }, { fi: "Hailuoto", en: "Hailuoto" },
    ],
  },
  {
    region_fi: "Kainuu", region_en: "Kainuu",
    municipalities: [
      { fi: "Kajaani", en: "Kajaani" }, { fi: "Sotkamo", en: "Sotkamo" }, { fi: "Kuhmo", en: "Kuhmo" },
      { fi: "Suomussalmi", en: "Suomussalmi" }, { fi: "Paltamo", en: "Paltamo" }, { fi: "Puolanka", en: "Puolanka" },
      { fi: "Hyrynsalmi", en: "Hyrynsalmi" }, { fi: "Ristijärvi", en: "Ristijärvi" },
    ],
  },
  {
    region_fi: "Lappi", region_en: "Lapland",
    municipalities: [
      { fi: "Rovaniemi", en: "Rovaniemi" }, { fi: "Tornio", en: "Tornio" }, { fi: "Kemi", en: "Kemi" },
      { fi: "Sodankylä", en: "Sodankylä" }, { fi: "Kittilä", en: "Kittilä" }, { fi: "Inari", en: "Inari" },
      { fi: "Kemijärvi", en: "Kemijärvi" }, { fi: "Kolari", en: "Kolari" }, { fi: "Ranua", en: "Ranua" },
      { fi: "Salla", en: "Salla" }, { fi: "Posio", en: "Posio" }, { fi: "Pelkosenniemi", en: "Pelkosenniemi" },
      { fi: "Savukoski", en: "Savukoski" }, { fi: "Keminmaa", en: "Keminmaa" }, { fi: "Tervola", en: "Tervola" },
      { fi: "Simo", en: "Simo" }, { fi: "Ylitornio", en: "Ylitornio" }, { fi: "Pello", en: "Pello" },
      { fi: "Muonio", en: "Muonio" }, { fi: "Enontekiö", en: "Enontekiö" }, { fi: "Utsjoki", en: "Utsjoki" },
    ],
  },
  {
    region_fi: "Ahvenanmaa", region_en: "Åland",
    municipalities: [
      { fi: "Maarianhamina", en: "Mariehamn" }, { fi: "Jomala", en: "Jomala" }, { fi: "Finström", en: "Finström" },
      { fi: "Lemland", en: "Lemland" }, { fi: "Saltvik", en: "Saltvik" }, { fi: "Hammarland", en: "Hammarland" },
      { fi: "Sund", en: "Sund" }, { fi: "Eckerö", en: "Eckerö" }, { fi: "Föglö", en: "Föglö" },
      { fi: "Geta", en: "Geta" }, { fi: "Brändö", en: "Brändö" }, { fi: "Kumlinge", en: "Kumlinge" },
      { fi: "Kökar", en: "Kökar" }, { fi: "Lumparland", en: "Lumparland" }, { fi: "Sottunga", en: "Sottunga" },
      { fi: "Vårdö", en: "Vårdö" },
    ],
  },
];

// ─── Municipal officials with verified names (top 30 cities) ───

export const municipalProfiles: OfficialProfile[] = [
  // ═══ TOP 10 CITIES ═══

  profile(mOfficial("m-1", "daniel-sazonov", "Daniel", "Sazonov",
    "Pormestari", "Mayor",
    "Helsingin kaupunki", "City of Helsinki",
    "2025-06-01",
    "Daniel Sazonov toimii Helsingin pormestarina kaudella 2025–2029. Valittu Kokoomuksen ehdokkaana.",
    "Daniel Sazonov serves as the Mayor of Helsinki for the 2025–2029 term. Elected as the National Coalition Party candidate."
  )),

  profile(mOfficial("m-2", "kai-mykkanen", "Kai", "Mykkänen",
    "Kaupunginjohtaja", "City Manager",
    "Espoon kaupunki", "City of Espoo",
    "2025-02-01",
    "Kai Mykkänen on toiminut Espoon kaupunginjohtajana helmikuusta 2025. Aiemmin kansanedustaja ja ympäristö- ja ilmastoministeri.",
    "Kai Mykkänen has served as City Manager of Espoo since February 2025. Previously a Member of Parliament and Minister of the Environment and Climate."
  )),

  profile(mOfficial("m-3", "pekka-timonen", "Pekka", "Timonen",
    "Kaupunginjohtaja", "City Manager",
    "Vantaan kaupunki", "City of Vantaa",
    "2023-09-01",
    "Pekka Timonen on toiminut Vantaan kaupunginjohtajana syyskuusta 2023. Aiemmin Lahden kaupunginjohtaja.",
    "Pekka Timonen has served as City Manager of Vantaa since September 2023. Previously City Manager of Lahti."
  )),

  profile(mOfficial("m-4", "ilmari-nurminen", "Ilmari", "Nurminen",
    "Pormestari", "Mayor",
    "Tampereen kaupunki", "City of Tampere",
    "2025-06-01",
    "Ilmari Nurminen toimii Tampereen pormestarina kaudella 2025–2029. Valittu SDP:n ehdokkaana.",
    "Ilmari Nurminen serves as the Mayor of Tampere for the 2025–2029 term. Elected as the SDP candidate."
  )),

  profile(mOfficial("m-5", "ari-alatossava", "Ari", "Alatossava",
    "Kaupunginjohtaja", "City Manager",
    "Oulun kaupunki", "City of Oulu",
    "2024-01-01",
    "Ari Alatossava on toiminut Oulun kaupunginjohtajana vuodesta 2024. Aiemmin Oulun konsernijohtaja ja Iin kunnanjohtaja.",
    "Ari Alatossava has served as City Manager of Oulu since 2024. Previously Oulu's Corporate Director and municipal manager of Ii."
  )),

  profile(mOfficial("m-6", "piia-elo", "Piia", "Elo",
    "Pormestari", "Mayor",
    "Turun kaupunki", "City of Turku",
    "2025-06-01",
    "Piia Elo toimii Turun pormestarina kaudella 2025–2029. Valittu SDP:n ehdokkaana.",
    "Piia Elo serves as the Mayor of Turku for the 2025–2029 term. Elected as the SDP candidate."
  )),

  profile(mOfficial("m-7", "timo-koivisto", "Timo", "Koivisto",
    "Kaupunginjohtaja", "City Manager",
    "Jyväskylän kaupunki", "City of Jyväskylä",
    "2017-09-01",
    "Timo Koivisto on toiminut Jyväskylän kaupunginjohtajana vuodesta 2017. Uudelleenvalittu 2022 kahdeksaksi vuodeksi.",
    "Timo Koivisto has served as City Manager of Jyväskylä since 2017. Re-elected in 2022 for another eight-year term."
  )),

  profile(mOfficial("m-8", "soile-lahti", "Soile", "Lahti",
    "Kaupunginjohtaja", "City Manager",
    "Kuopion kaupunki", "City of Kuopio",
    "2023-01-01",
    "Soile Lahti on toiminut Kuopion kaupunginjohtajana vuodesta 2023. Valittu yksimielisesti valtuustossa.",
    "Soile Lahti has served as City Manager of Kuopio since 2023. Elected unanimously by the city council."
  )),

  profile(mOfficial("m-9", "niko-kyynarainen", "Niko", "Kyynäräinen",
    "Kaupunginjohtaja", "City Manager",
    "Lahden kaupunki", "City of Lahti",
    "2023-10-01",
    "Niko Kyynäräinen on toiminut Lahden kaupunginjohtajana lokakuusta 2023. Aiemmin Turun kehitysjohtaja.",
    "Niko Kyynäräinen has served as City Manager of Lahti since October 2023. Previously development director of Turku."
  )),

  // ─── Rakennusvalvonta (Building Control) heads ───

  profile(mOfficial("m-31", "kai-miller", "Kai", "Miller",
    "Rakennusvalvontapäällikkö", "Head of Building Control",
    "Helsingin kaupunki", "City of Helsinki",
    "2017-03-01",
    "Kai Miller toimii Helsingin rakennusvalvontapäällikkönä vuodesta 2017.",
    "Kai Miller has served as Head of Building Control in Helsinki since 2017."
  )),

  profile(mOfficial("m-32", "jari-saajo", "Jari", "Saajo",
    "Rakennusvalvonnan päällikkö", "Head of Building Control",
    "Espoon kaupunki", "City of Espoo",
    "2020-01-01",
    "Jari Saajo toimii Espoon rakennusvalvonnan päällikkönä.",
    "Jari Saajo serves as Head of Building Control in Espoo."
  )),

  profile(mOfficial("m-33", "juha-henttonen", "Juha", "Henttonen",
    "Rakennusvalvontapäällikkö", "Head of Building Control",
    "Tampereen kaupunki", "City of Tampere",
    "2022-10-01",
    "Juha Henttonen on toiminut Tampereen rakennusvalvontapäällikkönä lokakuusta 2022. Aiemmin Hämeenlinnan rakennusvalvontapäällikkö.",
    "Juha Henttonen has served as Head of Building Control in Tampere since October 2022. Previously Head of Building Control in Hämeenlinna."
  )),

  profile(mOfficial("m-10", "lauri-inna", "Lauri", "Inna",
    "Kaupunginjohtaja", "City Manager",
    "Porin kaupunki", "City of Pori",
    "2019-06-01",
    "Lauri Inna on toiminut Porin kaupunginjohtajana vuodesta 2019.",
    "Lauri Inna has served as City Manager of Pori since 2019."
  )),

  // ═══ CITIES 11-30 ═══

  profile(mOfficial("m-11", "marita-toikka", "Marita", "Toikka",
    "Kaupunginjohtaja", "City Manager",
    "Kouvolan kaupunki", "City of Kouvola",
    "2021-05-01",
    "Marita Toikka on toiminut Kouvolan kaupunginjohtajana vuodesta 2021.",
    "Marita Toikka has served as City Manager of Kouvola since 2021."
  )),

  profile(mOfficial("m-12", "jere-penttila", "Jere", "Penttilä",
    "Kaupunginjohtaja", "City Manager",
    "Joensuun kaupunki", "City of Joensuu",
    "2023-01-01",
    "Jere Penttilä on toiminut Joensuun kaupunginjohtajana vuodesta 2023.",
    "Jere Penttilä has served as City Manager of Joensuu since 2023."
  )),

  profile(mOfficial("m-13", "tuomo-sallinen", "Tuomo", "Sallinen",
    "Kaupunginjohtaja", "City Manager",
    "Lappeenrannan kaupunki", "City of Lappeenranta",
    "2024-01-01",
    "Tuomo Sallinen on toiminut Lappeenrannan kaupunginjohtajana vuodesta 2024.",
    "Tuomo Sallinen has served as City Manager of Lappeenranta since 2024."
  )),

  profile(mOfficial("m-14", "olli-poika-parviainen", "Olli-Poika", "Parviainen",
    "Kaupunginjohtaja", "City Manager",
    "Hämeenlinnan kaupunki", "City of Hämeenlinna",
    "2023-01-01",
    "Olli-Poika Parviainen on toiminut Hämeenlinnan kaupunginjohtajana vuodesta 2023.",
    "Olli-Poika Parviainen has served as City Manager of Hämeenlinna since 2023."
  )),

  profile(mOfficial("m-15", "tomas-hayry", "Tomas", "Häyry",
    "Kaupunginjohtaja", "City Manager",
    "Vaasan kaupunki", "City of Vaasa",
    "2013-11-01",
    "Tomas Häyry on toiminut Vaasan kaupunginjohtajana vuodesta 2013.",
    "Tomas Häyry has served as City Manager of Vaasa since 2013."
  )),

  profile(mOfficial("m-16", "ulla-kirsikka-vainio", "Ulla-Kirsikka", "Vainio",
    "Kaupunginjohtaja", "City Manager",
    "Rovaniemen kaupunki", "City of Rovaniemi",
    "2018-01-01",
    "Ulla-Kirsikka Vainio on toiminut Rovaniemen kaupunginjohtajana vuodesta 2018.",
    "Ulla-Kirsikka Vainio has served as City Manager of Rovaniemi since 2018."
  )),

  profile(mOfficial("m-17", "jaakko-kiiskila", "Jaakko", "Kiiskilä",
    "Kaupunginjohtaja", "City Manager",
    "Seinäjoen kaupunki", "City of Seinäjoki",
    "2017-03-01",
    "Jaakko Kiiskilä on toiminut Seinäjoen kaupunginjohtajana vuodesta 2017.",
    "Jaakko Kiiskilä has served as City Manager of Seinäjoki since 2017."
  )),

  profile(mOfficial("m-18", "janne-kinnunen", "Janne", "Kinnunen",
    "Kaupunginjohtaja", "City Manager",
    "Mikkelin kaupunki", "City of Mikkeli",
    "2021-06-01",
    "Janne Kinnunen on toiminut Mikkelin kaupunginjohtajana vuodesta 2021.",
    "Janne Kinnunen has served as City Manager of Mikkeli since 2021."
  )),

  profile(mOfficial("m-19", "esa-sirvio", "Esa", "Sirviö",
    "Kaupunginjohtaja", "City Manager",
    "Kotkan kaupunki", "City of Kotka",
    "2020-01-01",
    "Esa Sirviö on toiminut Kotkan kaupunginjohtajana vuodesta 2020.",
    "Esa Sirviö has served as City Manager of Kotka since 2020."
  )),

  profile(mOfficial("m-20", "anna-kristiina-korhonen", "Anna-Kristiina", "Korhonen",
    "Kaupunginjohtaja", "City Manager",
    "Salon kaupunki", "City of Salo",
    "2021-04-01",
    "Anna-Kristiina Korhonen on toiminut Salon kaupunginjohtajana vuodesta 2021.",
    "Anna-Kristiina Korhonen has served as City Manager of Salo since 2021."
  )),

  profile(mOfficial("m-21", "jani-pitkaniemi", "Jani", "Pitkäniemi",
    "Kaupunginjohtaja", "City Manager",
    "Porvoon kaupunki", "City of Porvoo",
    "2020-08-01",
    "Jani Pitkäniemi on toiminut Porvoon kaupunginjohtajana vuodesta 2020.",
    "Jani Pitkäniemi has served as City Manager of Porvoo since 2020."
  )),

  profile(mOfficial("m-22", "stina-mattila", "Stina", "Mattila",
    "Kaupunginjohtaja", "City Manager",
    "Kokkolan kaupunki", "City of Kokkola",
    "2019-08-01",
    "Stina Mattila on toiminut Kokkolan kaupunginjohtajana vuodesta 2019.",
    "Stina Mattila has served as City Manager of Kokkola since 2019."
  )),

  profile(mOfficial("m-23", "johanna-luukkonen", "Johanna", "Luukkonen",
    "Kaupunginjohtaja", "City Manager",
    "Hyvinkään kaupunki", "City of Hyvinkää",
    "2021-01-01",
    "Johanna Luukkonen on toiminut Hyvinkään kaupunginjohtajana vuodesta 2021.",
    "Johanna Luukkonen has served as City Manager of Hyvinkää since 2021."
  )),

  profile(mOfficial("m-24", "petra-stahl", "Petra", "Stahl",
    "Kaupunginjohtaja", "City Manager",
    "Lohjan kaupunki", "City of Lohja",
    "2023-01-01",
    "Petra Stahl on toiminut Lohjan kaupunginjohtajana vuodesta 2023.",
    "Petra Stahl has served as City Manager of Lohja since 2023."
  )),

  profile(mOfficial("m-25", "iiris-laukkanen", "Iiris", "Laukkanen",
    "Kaupunginjohtaja", "City Manager",
    "Järvenpään kaupunki", "City of Järvenpää",
    "2022-01-01",
    "Iiris Laukkanen on toiminut Järvenpään kaupunginjohtajana vuodesta 2022.",
    "Iiris Laukkanen has served as City Manager of Järvenpää since 2022."
  )),

  profile(mOfficial("m-26", "esko-poikela", "Esko", "Poikela",
    "Kaupunginjohtaja", "City Manager",
    "Rauman kaupunki", "City of Rauma",
    "2020-01-01",
    "Esko Poikela on toiminut Rauman kaupunginjohtajana vuodesta 2020.",
    "Esko Poikela has served as City Manager of Rauma since 2020."
  )),

  profile(mOfficial("m-27", "jari-tolonen", "Jari", "Tolonen",
    "Kaupunginjohtaja", "City Manager",
    "Kajaanin kaupunki", "City of Kajaani",
    "2015-01-01",
    "Jari Tolonen on toiminut Kajaanin kaupunginjohtajana vuodesta 2009. MMM ja KTM. Aiemmin Siilinjärven ja Sotkamon kunnanjohtaja. Erosi helmikuussa 2026.",
    "Jari Tolonen served as City Manager of Kajaani since 2009. M.Sc. (Agr.) and M.Sc. (Econ.). Previously municipal manager of Siilinjärvi and Sotkamo. Resigned February 2026.",
    null, null,
    "Ei tunnettua puoluetaustaa. Ammattimainen, sitoutumaton viranhaltija pitkällä kuntajohtajan uralla.",
    "No known party affiliation. Professional, non-partisan civil servant with long municipal management career."
  )),

  profile(mOfficial("m-28", "ding-ma", "Ding", "Ma",
    "Kaupunginjohtaja", "City Manager",
    "Savonlinnan kaupunki", "City of Savonlinna",
    "2023-01-01",
    "Ding Ma on toiminut Savonlinnan kaupunginjohtajana vuodesta 2023.",
    "Ding Ma has served as City Manager of Savonlinna since 2023."
  )),

  profile(mOfficial("m-29", "kirsi-rontu", "Kirsi", "Rontu",
    "Kaupunginjohtaja", "City Manager",
    "Keravan kaupunki", "City of Kerava",
    "2020-01-01",
    "Kirsi Rontu on toiminut Keravan kaupunginjohtajana vuodesta 2020.",
    "Kirsi Rontu has served as City Manager of Kerava since 2020."
  )),

  profile(mOfficial("m-30", "eero-vaatainen", "Eero", "Väätäinen",
    "Kaupunginjohtaja", "City Manager",
    "Nokian kaupunki", "City of Nokia",
    "2020-01-01",
    "Eero Väätäinen on toiminut Nokian kaupunginjohtajana vuodesta 2020.",
    "Eero Väätäinen has served as City Manager of Nokia since 2020."
  )),

  // ═══ PARAINEN / PARGAS — FULL MANAGEMENT TEAM (model municipality) ═══

  profile(mOfficial("m-100", "hanna-maria-grandell", "Hanna-Maria", "Grandell",
    "Vs. kaupunginjohtaja / Hallintojohtaja", "Acting City Manager / Administrative Director",
    "Paraisten kaupunki", "City of Parainen",
    "2024-01-01",
    "Hanna-Maria Grandell toimii Paraisten vs. kaupunginjohtajana ja hallintojohtajana.",
    "Hanna-Maria Grandell serves as Acting City Manager and Administrative Director of Parainen.",
    "hanna-maria.grandell@parainen.fi", "+358 2 458 5700"
  )),

  profile(mOfficial("m-101", "petra-palmroos", "Petra", "Palmroos",
    "Talousjohtaja", "Finance Director",
    "Paraisten kaupunki", "City of Parainen",
    "2020-01-01",
    "Petra Palmroos toimii Paraisten kaupungin talousjohtajana.",
    "Petra Palmroos serves as Finance Director of the City of Parainen.",
    "petra.palmroos@parainen.fi", "+358 2 458 5700"
  )),

  profile(mOfficial("m-102", "matias-jensen", "Matias", "Jensén",
    "Tekninen johtaja", "Technical Director",
    "Paraisten kaupunki", "City of Parainen",
    "2020-01-01",
    "Matias Jensén toimii Paraisten kaupungin teknisenä johtajana. Vastaa infrastruktuurista ja teknisistä palveluista.",
    "Matias Jensén serves as Technical Director of the City of Parainen. Responsible for infrastructure and technical services.",
    "matias.jensen@parainen.fi", "+358 50 375 3593"
  )),

  profile(mOfficial("m-103", "ulrika-lundberg", "Ulrika", "Lundberg",
    "Opetusjohtaja", "Education Director",
    "Paraisten kaupunki", "City of Parainen",
    "2018-01-01",
    "Ulrika Lundberg toimii Paraisten kaupungin opetusjohtajana. Vastaa perusopetuksesta ja varhaiskasvatuksesta.",
    "Ulrika Lundberg serves as Education Director of the City of Parainen. Responsible for basic education and early childhood education.",
    "ulrika.lundberg@parainen.fi", "+358 50 596 2601"
  )),

  profile(mOfficial("m-104", "maria-leppakari", "Maria", "Leppäkari",
    "Hyvinvointijohtaja", "Welfare Director",
    "Paraisten kaupunki", "City of Parainen",
    "2022-01-01",
    "Maria Leppäkari toimii Paraisten kaupungin hyvinvointijohtajana.",
    "Maria Leppäkari serves as Welfare Director of the City of Parainen.",
    "maria.leppakari@parainen.fi", "+358 2 458 5700"
  )),

  profile(mOfficial("m-105", "niina-hemming", "Niina", "Hemming",
    "Elinkeinojohtaja", "Business Director",
    "Paraisten kaupunki", "City of Parainen",
    "2020-01-01",
    "Niina Hemming toimii Paraisten kaupungin elinkeinojohtajana. Vastaa elinkeinopolitiikasta ja yrityspalveluista.",
    "Niina Hemming serves as Business Director of the City of Parainen. Responsible for business policy and enterprise services.",
    "niina.hemming@parainen.fi", "+358 40 839 7170"
  )),

  profile(mOfficial("m-106", "linda-baarman", "Linda", "Baarman",
    "Viestintä- ja markkinointijohtaja", "Communications and Marketing Director",
    "Paraisten kaupunki", "City of Parainen",
    "2022-01-01",
    "Linda Baarman toimii Paraisten kaupungin viestintä- ja markkinointijohtajana.",
    "Linda Baarman serves as Communications and Marketing Director of the City of Parainen.",
    "linda.baarman@parainen.fi", "+358 2 458 5700"
  )),

  profile(mOfficial("m-107", "sanna-simonen", "Sanna", "Simonen",
    "Johtava rakennustarkastaja", "Chief Building Inspector",
    "Paraisten kaupunki", "City of Parainen",
    "2019-01-01",
    "Sanna Simonen toimii Paraisten johtavana rakennustarkastajana. Vastaa rakennusvalvonnasta ja rakennuslupapäätöksistä.",
    "Sanna Simonen serves as Chief Building Inspector of the City of Parainen. Responsible for building supervision and building permit decisions.",
    "sanna.simonen@parainen.fi", "+358 50 596 2642"
  )),

  profile(mOfficial("m-108", "kenneth-koskinen", "Kenneth", "Koskinen",
    "Rakennustarkastaja", "Building Inspector",
    "Paraisten kaupunki", "City of Parainen",
    "2018-01-01",
    "Kenneth Koskinen toimii Paraisten rakennustarkastajana. Vastuualueena Nauvo ja Paraisten asemakaavoitetut alueet.",
    "Kenneth Koskinen serves as Building Inspector in Parainen. Responsible for Nauvo and Parainen's zoned areas.",
    "kenneth.koskinen@parainen.fi", "+358 40 488 5700"
  )),

  profile(mOfficial("m-109", "heidi-saaristo-levin", "Heidi", "Saaristo-Levin",
    "Kaavoituspäällikkö", "Planning Director",
    "Paraisten kaupunki", "City of Parainen",
    "2019-01-01",
    "Heidi Saaristo-Levin toimii Paraisten kaavoituspäällikkönä. Vastaa maankäytön suunnittelusta ja kaavoituksesta.",
    "Heidi Saaristo-Levin serves as Planning Director of the City of Parainen. Responsible for land use planning and zoning.",
    "heidi.saaristo-levin@parainen.fi", "+358 40 488 5888"
  )),

  profile(mOfficial("m-110", "paavo-suominen", "Paavo", "Suominen",
    "Ympäristönsuojelutarkastaja", "Environmental Protection Inspector",
    "Paraisten kaupunki", "City of Parainen",
    "2020-01-01",
    "Paavo Suominen toimii Paraisten ympäristönsuojelutarkastajana. Vastaa ympäristöluvista ja ympäristövalvonnasta.",
    "Paavo Suominen serves as Environmental Protection Inspector of the City of Parainen. Responsible for environmental permits and supervision.",
    "paavo.suominen@parainen.fi", "+358 40 631 4882"
  )),

  // ═══ KAINUU REGION — FULL MANAGEMENT TEAMS ═══

  // ─── Kajaani (kaupunginjohtaja Jari Tolonen = m-27 above) ───

  profile(mOfficial("m-200", "paula-halonen", "Paula", "Halonen",
    "Hallintojohtaja", "Administrative Director",
    "Kajaanin kaupunki", "City of Kajaani",
    "2018-01-01",
    "Paula Halonen toimii Kajaanin hallintojohtajana ja kaupunginlakimiehenä aloittaen 1.1.2025. OTK ja KTM. Aiemmin Kainuun liiton hallintojohtaja.",
    "Paula Halonen serves as Administrative Director and City Lawyer of Kajaani starting Jan 1, 2025. Degrees in law and business. Previously administrative director of Kainuu Regional Council.",
    "paula.halonen@kajaani.fi", "040 198 5857",
    "Keskusta (KESK). Ehdolla Keskustan listalta Pohjois-Pohjanmaan aluevaalissa 2022.",
    "Centre Party (KESK). Ran as Centre Party candidate in 2022 North Ostrobothnia regional elections."
  )),

  profile(mOfficial("m-201", "mari-lyyra", "Mari", "Lyyra",
    "Sivistysjohtaja", "Education Director",
    "Kajaanin kaupunki", "City of Kajaani",
    "2020-01-01",
    "Mari Lyyra toimii Kajaanin sivistysjohtajana. Vastaa sivistyspalveluista ja sivistyslautakunnan esittelystä.",
    "Mari Lyyra serves as Education Director of Kajaani. Responsible for education services.",
    "mari.lyyra@kajaani.fi", null
  )),

  profile(mOfficial("m-202", "jussi-heikkinen", "Jussi", "Heikkinen",
    "Tekninen johtaja", "Technical Director",
    "Kajaanin kaupunki", "City of Kajaani",
    "2019-01-01",
    "Jussi Heikkinen toimii Kajaanin teknisenä johtajana ympäristöteknisessä toimialassa.",
    "Jussi Heikkinen serves as Technical Director in Kajaani's Environmental Technical Division.",
    "jussi.heikkinen@kajaani.fi", "040 678 3246"
  )),

  profile(mOfficial("m-203", "kari-huusko", "Kari", "Huusko",
    "Johtava rakennustarkastaja", "Chief Building Inspector",
    "Kajaanin kaupunki", "City of Kajaani",
    "2015-01-01",
    "Kari Huusko toimii Kajaanin johtavana rakennustarkastajana. Vastaa rakennusvalvonnasta ja rakennuslupapäätöksistä.",
    "Kari Huusko serves as Chief Building Inspector of Kajaani. Responsible for building supervision and building permit decisions.",
    null, "044 710 0246"
  )),

  profile(mOfficial("m-204", "juha-moilanen", "Juha", "Moilanen",
    "Rakennustarkastaja", "Building Inspector",
    "Kajaanin kaupunki", "City of Kajaani",
    "2018-01-01",
    "Juha Moilanen toimii Kajaanin rakennustarkastajana.",
    "Juha Moilanen serves as Building Inspector in Kajaani.",
    null, "040 678 3224"
  )),

  profile(mOfficial("m-205", "joni-partanen", "Joni", "Partanen",
    "Talousjohtaja / Vt. kaupunginjohtaja", "Finance Director / Acting City Manager",
    "Kajaanin kaupunki", "City of Kajaani",
    "2017-01-01",
    "Joni Partanen toimii Kajaanin talousjohtajana. Nimitetty vt. kaupunginjohtajaksi tammikuussa 2026.",
    "Joni Partanen serves as Finance Director of Kajaani. Appointed as Acting City Manager in January 2026.",
    "joni.partanen@kajaani.fi", null
  )),

  profile(mOfficial("m-206", "jyrki-komulainen", "Jyrki", "Komulainen",
    "Henkilöstöjohtaja", "HR Director",
    "Kajaanin kaupunki", "City of Kajaani",
    "2018-01-01",
    "Jyrki Komulainen toimii Kajaanin henkilöstöjohtajana.",
    "Jyrki Komulainen serves as HR Director of Kajaani.",
    "jyrki.komulainen@kajaani.fi", "044 714 7551"
  )),

  profile(mOfficial("m-207", "matti-nousiainen", "Matti", "Nousiainen",
    "Kaupungininsinööri", "City Engineer",
    "Kajaanin kaupunki", "City of Kajaani",
    "2015-01-01",
    "Matti Nousiainen toimii Kajaanin kaupungininsinöörinä. Vastaa kaupungin infrastruktuurista.",
    "Matti Nousiainen serves as City Engineer of Kajaani. Responsible for city infrastructure.",
    "matti.nousiainen@kajaani.fi", null
  )),

  profile(mOfficial("m-208", "minna-tuunainen", "Minna", "Tuunainen",
    "Kulttuurijohtaja", "Culture Director",
    "Kajaanin kaupunki", "City of Kajaani",
    "2025-01-01",
    "Minna Tuunainen toimii Kajaanin kulttuurijohtajana. Vastaa kulttuuri- ja nuorisopalveluista.",
    "Minna Tuunainen serves as Culture Director of Kajaani. Responsible for culture and youth services.",
    "minna.tuunainen@kajaani.fi", null
  )),

  profile(mOfficial("m-209", "kalle-komulainen", "Kalle", "Komulainen",
    "Perusopetuksen tulosalueen johtaja", "Head of Basic Education",
    "Kajaanin kaupunki", "City of Kajaani",
    "2025-01-01",
    "Kalle Komulainen toimii Kajaanin perusopetuksen tulosalueen johtajana vuodesta 2025.",
    "Kalle Komulainen serves as Head of Basic Education in Kajaani since 2025.",
    "kalle.komulainen@kajaani.fi", "044 710 0142"
  )),

  // ─── Sotkamo ───

  profile(mOfficial("m-210", "mika-kilpelainen", "Mika", "Kilpeläinen",
    "Kunnanjohtaja", "Municipal Manager",
    "Sotkamon kunta", "Municipality of Sotkamo",
    "2019-01-01",
    "Mika Kilpeläinen toimii Sotkamon kunnanjohtajana huhtikuusta 2016. Entinen pesäpalloilija ja joukkueenjohtaja. Palkittu 'Virea Viranhaltija 2022'.",
    "Mika Kilpeläinen has served as Municipal Manager of Sotkamo since April 2016. Former pesäpallo player and team director. Won 'Active Civil Servant 2022' award.",
    "mika.kilpelainen@sotkamo.fi", "044 750 2111",
    "Ei tunnettua puoluetaustaa. Myös kunnanvaltuuston jäsen (KESK-listalta), mikä on epätavallinen kaksoisrooli.",
    "No confirmed party affiliation. Also serves as council member (from KESK list), which is an unusual dual role."
  )),

  profile(mOfficial("m-211", "riikka-boren", "Riikka", "Borén",
    "Hallinto- ja henkilöstöjohtaja", "Administration and HR Director",
    "Sotkamon kunta", "Municipality of Sotkamo",
    "2018-01-01",
    "Riikka Borén toimii Sotkamon hallinto- ja henkilöstöjohtajana.",
    "Riikka Borén serves as Administration and HR Director of Sotkamo.",
    "riikka.boren@sotkamo.fi", "044 198 6318"
  )),

  profile(mOfficial("m-212", "harri-helenius", "Harri", "Helenius",
    "Tekninen johtaja", "Technical Director",
    "Sotkamon kunta", "Municipality of Sotkamo",
    "2017-01-01",
    "Harri Helenius toimii Sotkamon teknisenä johtajana. Vastaa teknisistä palveluista ja infrastruktuurista.",
    "Harri Helenius serves as Technical Director of Sotkamo. Responsible for technical services and infrastructure.",
    "harri.helenius@sotkamo.fi", "044 750 2491"
  )),

  profile(mOfficial("m-213", "jenna-korhonen", "Jenna", "Korhonen",
    "Rakennustarkastaja", "Building Inspector",
    "Sotkamon kunta", "Municipality of Sotkamo",
    "2020-01-01",
    "Jenna Korhonen toimii Sotkamon rakennustarkastajana. Vastaa rakennusluvista ja rakennusvalvonnasta.",
    "Jenna Korhonen serves as Building Inspector in Sotkamo. Responsible for building permits and building supervision.",
    "jenna.korhonen@sotkamo.fi", "040 354 0586"
  )),

  profile(mOfficial("m-214", "piia-torhonen-sirvio", "Piia", "Törhönen-Sirviö",
    "Talousjohtaja", "Finance Director",
    "Sotkamon kunta", "Municipality of Sotkamo",
    "2019-01-01",
    "Piia Törhönen-Sirviö toimii Sotkamon talousjohtajana.",
    "Piia Törhönen-Sirviö serves as Finance Director of Sotkamo.",
    "piia.torhonen-sirvio@sotkamo.fi", "040 674 0269"
  )),

  profile(mOfficial("m-215", "merja-ojalammi", "Merja", "Ojalammi",
    "Sivistysjohtaja", "Education Director",
    "Sotkamon kunta", "Municipality of Sotkamo",
    "2018-01-01",
    "Merja Ojalammi toimii Sotkamon sivistysjohtajana ja kansalaisopiston rehtorina.",
    "Merja Ojalammi serves as Education Director and adult education principal in Sotkamo.",
    "merja.ojalammi@sotkamo.fi", "044 750 2125"
  )),

  profile(mOfficial("m-216", "antti-harri", "Antti", "Harri",
    "Ympäristötoimen päällikkö / Rakennustarkastaja", "Head of Environmental Services / Building Inspector",
    "Sotkamon kunta", "Municipality of Sotkamo",
    "2020-01-01",
    "Antti Harri toimii Sotkamon ympäristötoimen päällikkönä ja rakennustarkastajana. Vastaa myös Paltamon rakennusvalvonnasta.",
    "Antti Harri serves as Head of Environmental Services and Building Inspector in Sotkamo. Also responsible for Paltamo's building supervision.",
    "antti.harri@sotkamo.fi", "040 354 3525"
  )),

  // ─── Kuhmo ───

  profile(mOfficial("m-220", "juhana-juntunen", "Juhana", "Juntunen",
    "Kaupunginjohtaja", "City Manager",
    "Kuhmon kaupunki", "City of Kuhmo",
    "2019-01-01",
    "Juhana Juntunen toimii Kuhmon kaupunginjohtajana. Valittu toukokuussa 2023 äänin 24/27. Toimi aiemmin Kuhmon hallintojohtajana.",
    "Juhana Juntunen serves as City Manager of Kuhmo. Elected May 2023 by 24/27 council votes. Previously served as Kuhmo's administrative director.",
    "juhana.juntunen@kuhmo.fi", "044 7255 222",
    "Ei tunnettua puoluetaustaa. Valittu lähes yksimielisesti (24/27), mikä viittaa laajaan puolueiden väliseen tukeen.",
    "No known party affiliation. Elected near-unanimously (24/27), suggesting broad cross-party support."
  )),

  profile(mOfficial("m-221", "pinja-kyllonen", "Pinja", "Kyllönen",
    "Hallintojohtaja", "Administrative Director",
    "Kuhmon kaupunki", "City of Kuhmo",
    "2024-01-01",
    "Pinja Kyllönen toimii Kuhmon hallintojohtajana.",
    "Pinja Kyllönen serves as Administrative Director of Kuhmo.",
    "pinja.kyllonen@kuhmo.fi", "044 7255 223"
  )),

  profile(mOfficial("m-222", "marjut-kyllonen", "Marjut", "Kyllönen",
    "Sivistystoimenjohtaja", "Director of Education and Culture",
    "Kuhmon kaupunki", "City of Kuhmo",
    "2020-01-01",
    "Marjut Kyllönen toimii Kuhmon sivistystoimenjohtajana ja yläkoulun rehtorina.",
    "Marjut Kyllönen serves as Director of Education and Culture in Kuhmo, also serving as secondary school principal.",
    "marjut.kyllonen@kuhmo.fi", null,
    "Kokoomus (KOK). Ehdolla Kokoomuksen listalta Suomussalmen kuntavaaleissa 2021 ja Kainuun aluevaalissa 2022.",
    "National Coalition Party (KOK). Ran as Kokoomus candidate in 2021 Suomussalmi municipal elections and 2022 Kainuu regional elections."
  )),

  profile(mOfficial("m-223", "kimmo-lamsa", "Kimmo", "Lämsä",
    "Tekninen johtaja", "Technical Director",
    "Kuhmon kaupunki", "City of Kuhmo",
    "2015-01-01",
    "Kimmo Lämsä toimii Kuhmon teknisenä johtajana.",
    "Kimmo Lämsä serves as Technical Director of Kuhmo.",
    "kimmo.lamsa@kuhmo.fi", "0400 393798"
  )),

  profile(mOfficial("m-224", "harri-piirainen", "Harri", "Piirainen",
    "Rakennustarkastaja / Tilapalvelupäällikkö", "Building Inspector / Facility Services Manager",
    "Kuhmon kaupunki", "City of Kuhmo",
    "2016-01-01",
    "Harri Piirainen toimii Kuhmon rakennustarkastajana ja tilapalvelupäällikkönä.",
    "Harri Piirainen serves as Building Inspector and Facility Services Manager in Kuhmo.",
    "harri.piirainen@kuhmo.fi", "044 7255 257"
  )),

  profile(mOfficial("m-225", "risto-saarinen", "Risto", "Saarinen",
    "Rakennustarkastaja / Ympäristönsuojelusihteeri", "Building Inspector / Environmental Protection Secretary",
    "Kuhmon kaupunki", "City of Kuhmo",
    "2017-01-01",
    "Risto Saarinen toimii Kuhmon rakennustarkastajana ja ympäristönsuojelusihteerinä.",
    "Risto Saarinen serves as Building Inspector and Environmental Protection Secretary in Kuhmo.",
    "risto.saarinen@kuhmo.fi", "044 7255 256"
  )),

  // ─── Suomussalmi ───

  profile(mOfficial("m-230", "erno-heikkinen", "Erno", "Heikkinen",
    "Kunnanjohtaja", "Municipal Manager",
    "Suomussalmen kunta", "Municipality of Suomussalmi",
    "2021-01-01",
    "Erno Heikkinen toimii Suomussalmen kunnanjohtajana vuodesta 2018. Valittiin 26-vuotiaana Suomen nuorimmaksi kunnanjohtajaksi. HT (hallintotieteiden maisteri), kotoisin Suomussalmelta.",
    "Erno Heikkinen has served as Municipal Manager of Suomussalmi since 2018. Elected at age 26 as Finland's youngest municipal manager. M.Sc. (Admin.), originally from Suomussalmi.",
    "erno.heikkinen@suomussalmi.fi", "044 777 3344",
    "Ei tunnettua puoluetaustaa. Nuori ammattilainen, opiskeli kunta- ja aluejohtamista Tampereella.",
    "No known party affiliation. Young professional, studied municipal and regional management in Tampere."
  )),

  profile(mOfficial("m-231", "antton-vuolle", "Antton", "Vuolle",
    "Vs. hallintojohtaja", "Acting Administrative Director",
    "Suomussalmen kunta", "Municipality of Suomussalmi",
    "2024-01-01",
    "Antton Vuolle toimii Suomussalmen vs. hallintojohtajana.",
    "Antton Vuolle serves as Acting Administrative Director of Suomussalmi.",
    "antton.vuolle@suomussalmi.fi", "040 688 4499",
    "Keskusta (KESK). Ehdolla Keskustan listalta Suomussalmen kuntavaaleissa 2025 (ehdokaslistalla 'tekninen johtaja').",
    "Centre Party (KESK). Ran as Centre Party candidate in 2025 Suomussalmi municipal elections (listed as 'technical director' on candidate list)."
  )),

  profile(mOfficial("m-232", "teemu-piirainen", "Teemu", "Piirainen",
    "Sivistysjohtaja", "Education Director",
    "Suomussalmen kunta", "Municipality of Suomussalmi",
    "2020-01-01",
    "Teemu Piirainen toimii Suomussalmen sivistysjohtajana.",
    "Teemu Piirainen serves as Education Director of Suomussalmi.",
    "teemu.piirainen@suomussalmi.fi", "040 688 4545"
  )),

  profile(mOfficial("m-233", "niina-kinnunen", "Niina", "Kinnunen",
    "Tekninen johtaja", "Technical Director",
    "Suomussalmen kunta", "Municipality of Suomussalmi",
    "2019-01-01",
    "Niina Kinnunen toimii Suomussalmen teknisenä johtajana.",
    "Niina Kinnunen serves as Technical Director of Suomussalmi.",
    "niina.kinnunen@suomussalmi.fi", "044 777 3380",
    "Keskusta (KESK, 2025), aiemmin Vasemmistoliitto (VAS, 2012). Ehdolla Keskustan listalta Suomussalmen kuntavaaleissa 2025. Ehdolla aiemmin Vasemmistoliiton listalta 2012.",
    "Centre Party (KESK, 2025), previously Left Alliance (VAS, 2012). Ran as Centre Party candidate in 2025 Suomussalmi elections. Previously ran as Left Alliance candidate in 2012."
  )),

  profile(mOfficial("m-234", "jonne-maaninka", "Jonne", "Maaninka",
    "Elinvoimajohtaja", "Business Development Director",
    "Suomussalmen kunta", "Municipality of Suomussalmi",
    "2021-01-01",
    "Jonne Maaninka toimii Suomussalmen elinvoimajohtajana.",
    "Jonne Maaninka serves as Business Development Director of Suomussalmi.",
    "jonne.maaninka@suomussalmi.fi", "040 688 4480"
  )),

  profile(mOfficial("m-235", "asko-kinnunen", "Asko", "Kinnunen",
    "Rakennustarkastaja", "Building Inspector",
    "Suomussalmen kunta", "Municipality of Suomussalmi",
    "2015-01-01",
    "Asko Kinnunen toimii Suomussalmen rakennustarkastajana. Vastaa rakennusluvista ja rakennusvalvonnasta.",
    "Asko Kinnunen serves as Building Inspector in Suomussalmi. Responsible for building permits and supervision.",
    "asko.kinnunen@suomussalmi.fi", "044 777 3121"
  )),

  profile(mOfficial("m-236", "jarkko-juntunen", "Jarkko", "Juntunen",
    "Maanmittausinsinööri", "Land Survey Engineer",
    "Suomussalmen kunta", "Municipality of Suomussalmi",
    "2018-01-01",
    "Jarkko Juntunen toimii Suomussalmen maanmittausinsinöörinä. Vastaa tonteista, mittauspalveluista ja kaavoituksesta.",
    "Jarkko Juntunen serves as Land Survey Engineer in Suomussalmi. Responsible for plots, surveying, and land use planning.",
    "jarkko.juntunen@suomussalmi.fi", "044 568 4335"
  )),

  // ─── Paltamo ───

  profile(mOfficial("m-240", "pasi-ahoniemi", "Pasi", "Ahoniemi",
    "Kunnanjohtaja", "Municipal Manager",
    "Paltamon kunta", "Municipality of Paltamo",
    "2020-01-01",
    "Pasi Ahoniemi toimii Paltamon kunnanjohtajana. Tradenomi, kotoisin Paltamosta.",
    "Pasi Ahoniemi serves as Municipal Manager of Paltamo. Business graduate, native of Paltamo.",
    "pasi.ahoniemi@paltamo.fi", "044 750 0001",
    "Keskusta (KESK). Toimi ennen kunnanjohtajaksi valintaa Paltamon kunnanhallituksen keskustalaisena puheenjohtajana. Siirtyi suoraan poliittisesta luottamustehtävästä viranhaltijan rooliin.",
    "Centre Party (KESK). Served as Centre Party chairman of Paltamo's municipal board before being elected as municipal manager. Moved directly from a political leadership position to a professional role."
  )),

  profile(mOfficial("m-241", "petra-juutinen", "Petra", "Juutinen",
    "Hallintojohtaja", "Administrative Director",
    "Paltamon kunta", "Municipality of Paltamo",
    "2023-01-01",
    "Petra Juutinen toimii Paltamon hallintojohtajana.",
    "Petra Juutinen serves as Administrative Director of Paltamo.",
    "petra.juutinen@paltamo.fi", "040 583 7200"
  )),

  profile(mOfficial("m-242", "helena-hynynen", "Helena", "Hynynen",
    "Sivistysjohtaja", "Education Director",
    "Paltamon kunta", "Municipality of Paltamo",
    "2018-01-01",
    "Helena Hynynen toimii Paltamon sivistysjohtajana ja kansalaisopiston rehtorina.",
    "Helena Hynynen serves as Education Director and adult education principal in Paltamo.",
    "helena.hynynen@paltamo.fi", "044 288 5400",
    "Keskusta (KESK). Ehdolla Keskustan listalta Paltamon kuntavaaleissa 2021 ja 2025.",
    "Centre Party (KESK). Ran as Centre Party candidate in 2021 and 2025 Paltamo municipal elections."
  )),

  profile(mOfficial("m-243", "salla-korhonen", "Salla", "Korhonen",
    "Vs. tekninen johtaja / Kehitysjohtaja", "Acting Technical Director / Development Director",
    "Paltamon kunta", "Municipality of Paltamo",
    "2022-01-01",
    "Salla Korhonen toimii Paltamon vs. teknisenä johtajana ja kehitysjohtajana.",
    "Salla Korhonen serves as Acting Technical Director and Development Director of Paltamo.",
    "salla.korhonen@paltamo.fi", "044 288 5660"
  )),

  // ─── Puolanka ───

  profile(mOfficial("m-250", "harri-peltola", "Harri", "Peltola",
    "Kunnanjohtaja", "Municipal Manager",
    "Puolangan kunta", "Municipality of Puolanka",
    "2018-01-01",
    "Harri Peltola toimii Puolangan pormestarina (poliittinen johtaja). Agrologi (AMK), maidontuottaja. Kunnanhallituksen puheenjohtaja vuodesta 2005. MTK:n valtakunnallisia luottamustehtäviä.",
    "Harri Peltola serves as Mayor of Puolanka (political leader). Agrologist, dairy farmer. Municipal board chair since 2005. National-level positions in MTK agricultural union.",
    "harri.peltola@puolanka.fi", null,
    "Keskusta (KESK). Pormestari = poliittinen valinta (ei viranhaltija). Valittu pormestariksi 2018 kun Puolanka siirtyi pormestarimalliin, jatkoi 2021–2025. Keskusta hallitsee Puolankaa (11/17 valtuustopaikkaa). Rikossyytteet joulukuussa 2024 liittyen vuoden 2020 terveyspalveluhankintapäätökseen ilman kilpailutusta.",
    "Centre Party (KESK). Mayor = political appointment (not a civil servant). Elected mayor in 2018 when Puolanka switched to the mayor model, continued 2021–2025. Centre Party dominates Puolanka (11/17 council seats). Facing criminal charges (Dec 2024) related to a 2020 health services procurement decision made without competitive bidding."
  )),

  profile(mOfficial("m-251", "piia-heikkinen", "Piia", "Heikkinen",
    "Hallintojohtaja", "Administrative Director",
    "Puolangan kunta", "Municipality of Puolanka",
    "2020-01-01",
    "Piia Heikkinen toimii Puolangan hallintojohtajana.",
    "Piia Heikkinen serves as Administrative Director of Puolanka.",
    "piia.heikkinen@puolanka.fi", "040 575 0586",
    "Keskusta (KESK). Ehdolla Keskustan listalta Puolangan kuntavaaleissa 2025.",
    "Centre Party (KESK). Ran as Centre Party candidate in 2025 Puolanka municipal elections."
  )),

  profile(mOfficial("m-252", "tuula-vaisanen", "Tuula", "Väisänen",
    "Vs. sivistysjohtaja", "Acting Education Director",
    "Puolangan kunta", "Municipality of Puolanka",
    "2023-01-01",
    "Tuula Väisänen toimii Puolangan vs. sivistysjohtajana. Historian ja yhteiskuntaopin opettaja.",
    "Tuula Väisänen serves as Acting Education Director of Puolanka. History and social studies teacher.",
    "tuula.vaisanen@puolanka.fi", "040 740 2567",
    "Vasemmistoliitto (VAS). Ehdolla Vasemmistoliiton listalta Puolangan kuntavaaleissa 2021.",
    "Left Alliance (VAS). Ran as Left Alliance candidate in 2021 Puolanka municipal elections."
  )),

  profile(mOfficial("m-253", "marko-vayrynen", "Marko", "Väyrynen",
    "Tekninen johtaja", "Technical Director",
    "Puolangan kunta", "Municipality of Puolanka",
    "2019-01-01",
    "Marko Väyrynen toimii Puolangan teknisenä johtajana.",
    "Marko Väyrynen serves as Technical Director of Puolanka.",
    "marko.vayrynen@puolanka.fi", "040 559 2084"
  )),

  profile(mOfficial("m-254", "kalevi-huovinen", "Kalevi", "Huovinen",
    "Va. rakennustarkastaja", "Acting Building Inspector",
    "Puolangan kunta", "Municipality of Puolanka",
    "2024-01-01",
    "Kalevi Huovinen toimii Puolangan va. rakennustarkastajana.",
    "Kalevi Huovinen serves as Acting Building Inspector in Puolanka.",
    "kalevi.huovinen@puolanka.fi", "040 546 2018"
  )),

  // ─── Hyrynsalmi ───

  profile(mOfficial("m-260", "heimo-keranen", "Heimo", "Keränen",
    "Kunnanjohtaja", "Municipal Manager",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi",
    "2016-01-01",
    "Heimo Keränen toimii Hyrynsalmen kunnanjohtajana. FT (suunnittelumaantiede). Johtanut Hyrynsalmea kahdella kaudella: 2005–2013 ja 2017–. Välillä Kainuun liiton aluekehitysjohtaja. Ilmoittanut jäävänsä eläkkeelle 2025.",
    "Heimo Keränen serves as Municipal Manager of Hyrynsalmi. PhD (planning geography). Led Hyrynsalmi in two periods: 2005–2013 and 2017–. Served as regional development director at Kainuu Regional Council in between. Announced retirement in 2025.",
    "heimo.keranen@hyrynsalmi.fi", "044 7104 400",
    "Keskusta (KESK). Ehdolla Keskustan listalta Kainuun aluevaalissa 2025. Yhdistää ammatillisen viranhaltijan roolin poliittiseen ehdokkuuteen.",
    "Centre Party (KESK). Ran as Centre Party candidate in 2025 Kainuu regional welfare area elections. Combines professional civil servant role with political candidacy."
  )),

  profile(mOfficial("m-261", "veli-pekka-makelainen", "Veli-Pekka", "Mäkeläinen",
    "Sivistyspalvelujen päällikkö / Rehtori", "Head of Education Services / Principal",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi",
    "2005-01-01",
    "Veli-Pekka Mäkeläinen toimii Hyrynsalmen sivistyspalvelujen päällikkönä ja yhtenäiskoulun rehtorina. Yli 20 vuoden kokemus.",
    "Veli-Pekka Mäkeläinen serves as Head of Education Services and principal of Hyrynsalmi comprehensive school. Over 20 years of experience.",
    "veli-pekka.makelainen@hyrynsalmi.fi", "044 7104 410"
  )),

  profile(mOfficial("m-262", "jouni-romppainen", "Jouni", "Romppainen",
    "Kunnanrakennusmestari", "Municipal Building Master",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi",
    "2015-01-01",
    "Jouni Romppainen toimii Hyrynsalmen kunnanrakennusmestarina. Vastaa teknisistä palveluista, kiinteistönhoidosta ja infrastruktuurista.",
    "Jouni Romppainen serves as Municipal Building Master of Hyrynsalmi. Responsible for technical services, property maintenance, and infrastructure.",
    "jouni.romppainen@hyrynsalmi.fi", "044 710 4421"
  )),

  profile(mOfficial("m-263", "paivi-hyttinen", "Päivi", "Hyttinen",
    "Varhaiskasvatuspäällikkö / Päiväkodinjohtaja", "Head of Early Childhood Education / Daycare Director",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi",
    "2018-01-01",
    "Päivi Hyttinen toimii Hyrynsalmen varhaiskasvatuspäällikkönä ja päiväkodinjohtajana.",
    "Päivi Hyttinen serves as Head of Early Childhood Education and Daycare Director in Hyrynsalmi.",
    "paivi.hyttinen@hyrynsalmi.fi", "044 7104 468"
  )),

  profile(mOfficial("m-264", "jukka-korhonen", "Jukka", "Korhonen",
    "Ympäristötarkastaja", "Environmental Inspector",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi",
    "2019-01-01",
    "Jukka Korhonen toimii ympäristötarkastajana Hyrynsalmen kunnassa (Suomussalmen kunnan yhteispalvelu).",
    "Jukka Korhonen serves as Environmental Inspector for Hyrynsalmi (shared service from Suomussalmi municipality).",
    "jukka.korhonen@suomussalmi.fi", "044 038 4341"
  )),

  profile(mOfficial("m-265", "merja-toivanen", "Merja", "Toivanen",
    "Toimistosihteeri (hallinto)", "Administrative Secretary",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi",
    "2010-01-01",
    "Merja Toivanen toimii Hyrynsalmen kunnan toimistosihteerinä hallinnossa.",
    "Merja Toivanen serves as Administrative Secretary in Hyrynsalmi municipality.",
    "merja.toivanen@hyrynsalmi.fi", "044 710 4500"
  )),

  // ─── Ristijärvi ───

  profile(mOfficial("m-270", "katri-aula", "Katri", "Aula",
    "Kunnanjohtaja", "Municipal Manager",
    "Ristijärven kunta", "Municipality of Ristijärvi",
    "2025-04-21",
    "Katri Aula aloitti Ristijärven kunnanjohtajana huhtikuussa 2025. KTM, liikkeenjohdon konsultti Kirkkonummelta. Valittu yksimielisesti valtuustossa.",
    "Katri Aula started as Municipal Manager of Ristijärvi in April 2025. M.Sc. (Econ.), management consultant from Kirkkonummi. Elected unanimously by council.",
    "katri.aula@ristijarvi.fi", "044 715 9300",
    "Keskusta (KESK). Ehdolla Keskustan listalta Kirkkonummen kuntavaaleissa 2021 (nro 114, 32 ääntä, ei valittu). Toimi Kirkkonummen tarkastuslautakunnassa.",
    "Centre Party (KESK). Ran as Centre Party candidate in 2021 Kirkkonummi municipal elections (#114, 32 votes, not elected). Served on Kirkkonummi's audit committee."
  )),

  profile(mOfficial("m-271", "maarit-ojavuo", "Maarit", "Ojavuo",
    "Hallintopäällikkö", "Administrative Manager",
    "Ristijärven kunta", "Municipality of Ristijärvi",
    "2018-01-01",
    "Maarit Ojavuo toimii Ristijärven hallintopäällikkönä.",
    "Maarit Ojavuo serves as Administrative Manager of Ristijärvi.",
    "maarit.ojavuo@ristijarvi.fi", "044 715 9309"
  )),

  profile(mOfficial("m-272", "tiinaliisa-portano", "Tiinaliisa", "Portano",
    "Sivistysjohtaja / Rehtori", "Education Director / Principal",
    "Ristijärven kunta", "Municipality of Ristijärvi",
    "2017-01-01",
    "Tiinaliisa Portano toimii Ristijärven sivistysjohtajana ja rehtorina.",
    "Tiinaliisa Portano serves as Education Director and Principal in Ristijärvi.",
    "tiinaliisa.portano@ristijarvi.fi", "044 715 9334"
  )),

  profile(mOfficial("m-273", "ahti-mikkonen", "Ahti", "Mikkonen",
    "Tekninen johtaja", "Technical Director",
    "Ristijärven kunta", "Municipality of Ristijärvi",
    "2016-01-01",
    "Ahti Mikkonen toimii Ristijärven teknisenä johtajana.",
    "Ahti Mikkonen serves as Technical Director of Ristijärvi.",
    "ahti.mikkonen@ristijarvi.fi", "044 715 9744"
  )),

  profile(mOfficial("m-274", "jari-hurskainen", "Jari", "Hurskainen",
    "Rakennustarkastaja", "Building Inspector",
    "Ristijärven kunta", "Municipality of Ristijärvi",
    "2015-01-01",
    "Jari Hurskainen toimii rakennustarkastajana Ristijärven ja Hyrynsalmen kunnissa (yhteinen viranhaltija).",
    "Jari Hurskainen serves as Building Inspector for the municipalities of Ristijärvi and Hyrynsalmi (shared official).",
    "jari.hurskainen@hyrynsalmi.fi", "044 7104 434"
  )),

  profile(mOfficial("m-275", "mika-hakkarainen", "Mika", "Hakkarainen",
    "Kaavoittaja", "Land Use Planner",
    "Ristijärven kunta", "Municipality of Ristijärvi",
    "2020-01-01",
    "Mika Hakkarainen toimii kaavoittajana Ristijärven kunnassa (Sotkamon kunnan yhteispalvelu).",
    "Mika Hakkarainen serves as Land Use Planner for Ristijärvi (shared service from Sotkamo municipality).",
    "mika.hakkarainen@sotkamo.fi", "040 187 7970"
  )),

  profile(mOfficial("m-276", "jenni-kuronen", "Jenni", "Kuronen",
    "Ympäristötarkastaja", "Environmental Inspector",
    "Ristijärven kunta", "Municipality of Ristijärvi",
    "2019-01-01",
    "Jenni Kuronen toimii ympäristötarkastajana Ristijärven kunnassa (Suomussalmen kunnan yhteispalvelu). Paikalla maanantaisin.",
    "Jenni Kuronen serves as Environmental Inspector for Ristijärvi (shared service from Suomussalmi municipality). Available on Mondays.",
    "jenni.kuronen@suomussalmi.fi", "040 688 4546"
  )),

  // ═══ KAINUU — KUNNANVALTUUSTOT (Municipal Councils) 2025–2029 ═══

  // ──�� Kajaani kaupunginvaltuusto (51 seats — KESK 15, KOK ~9, VAS ~9, SDP ~7, PS 6, VIHR 4, KD 1) ───

  profile(mCouncil("c-k-1", "peppiina-hakkarainen", "Peppiina", "Hakkarainen",
    "Kaupunginvaltuuston puheenjohtaja", "City Council Chair",
    "Kajaanin kaupunki", "City of Kajaani", "VAS"
  )),
  profile(mCouncil("c-k-2", "helena-ohtonen", "Helena", "Ohtonen",
    "Kaupunginvaltuuston 2. varapuheenjohtaja", "City Council 2nd Vice Chair",
    "Kajaanin kaupunki", "City of Kajaani", "SDP"
  )),
  profile(mCouncil("c-k-3", "paavo-enroth", "Paavo", "Enroth",
    "Kaupunginvaltuuston 1. varapuheenjohtaja", "City Council 1st Vice Chair",
    "Kajaanin kaupunki", "City of Kajaani", "KOK"
  )),
  profile(mCouncil("c-k-4", "silja-keranen", "Silja", "Keränen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "VIHR"
  )),
  profile(mCouncil("c-k-5", "marjo-kangasharju", "Marjo", "Kangasharju",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "SDP"
  )),
  profile(mCouncil("c-k-6", "minna-leinonen", "Minna", "Leinonen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KESK"
  )),
  profile(mCouncil("c-k-7", "paavo-niemela", "Paavo", "Niemelä",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KESK"
  )),
  profile(mCouncil("c-k-8", "pasi-kilpelainen", "Pasi", "Kilpeläinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "PS"
  )),
  profile(mCouncil("c-k-9", "eveliina-kinnunen", "Eveliina", "Kinnunen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KESK"
  )),
  profile(mCouncil("c-k-10", "jari-lindh", "Jari", "Lindh",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "VAS"
  )),
  profile(mCouncil("c-k-11", "henna-kettunen-k", "Henna", "Kettunen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "VAS"
  )),
  profile(mCouncil("c-k-12", "jaakko-perhovaara", "Jaakko", "Perhovaara",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KOK"
  )),
  profile(mCouncil("c-k-13", "auli-halonen", "Auli", "Halonen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KOK"
  )),
  profile(mCouncil("c-k-14", "raimo-piirainen", "Raimo", "Piirainen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "SDP"
  )),
  profile(mCouncil("c-k-15", "karoliina-kuvaja", "Karoliina", "Kuvaja",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "VIHR"
  )),
  profile(mCouncil("c-k-16", "eila-aavakare", "Eila", "Aavakare",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "PS"
  )),
  profile(mCouncil("c-k-17", "pirra-keranen", "Pirra", "Keränen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "SDP"
  )),
  profile(mCouncil("c-k-18", "antti-schroderus", "Antti", "Schroderus",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KD"
  )),
  // Mikko Polvinen removed — switched to KESK Feb 2026, uncertain if elected as PS valtuutettu
  profile(mCouncil("c-k-20", "sami-sainio", "Sami", "Sainio",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "VAS"
  )),
  profile(mCouncil("c-k-21", "miariikka-tervonen", "Miariikka", "Tervonen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KOK"
  )),
  profile(mCouncil("c-k-22", "heikki-hekkala", "Heikki", "Hekkala",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "SDP"
  )),
  profile(mCouncil("c-k-23", "hannu-suutari", "Hannu", "Suutari",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KOK"
  )),
  profile(mCouncil("c-k-24", "kimmo-kumpulainen", "Kimmo", "Kumpulainen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "VIHR"
  )),
  profile(mCouncil("c-k-25", "harri-savonen", "Harri", "Savonen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KESK"
  )),
  profile(mCouncil("c-k-26", "noora-kyllonen", "Noora", "Kyllönen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "VAS"
  )),
  profile(mCouncil("c-k-27", "venla-osterberg", "Venla", "Österberg",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KESK"
  )),
  profile(mCouncil("c-k-28", "antero-kyllonen", "Antero", "Kyllönen",
    "Kaupunginvaltuutettu, ympäristöteknisen lautakunnan puheenjohtaja", "City Councillor, Chair of Environmental Committee",
    "Kajaanin kaupunki", "City of Kajaani", "VAS"
  )),
  profile(mCouncil("c-k-29", "toivo-kyllonen", "Toivo", "Kyllönen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KESK"
  )),
  // Jere Vekkeli removed — vaalilautakunta chair but not confirmed as valtuutettu
  profile(mCouncil("c-k-31", "juha-urpilainen", "Juha", "Urpilainen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "SDP"
  )),
  profile(mCouncil("c-k-32", "aila-tartia-jalonen", "Aila", "Tartia-Jalonen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "SDP"
  )),
  // Anssi Manninen removed — lautakunta member but not confirmed as valtuutettu
  profile(mCouncil("c-k-34", "mikko-alakarppa", "Mikko", "Alakärppä",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "VIHR"
  )),
  profile(mCouncil("c-k-35", "mika-heikkinen-k", "Mika", "Heikkinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KOK"
  )),
  profile(mCouncil("c-k-36", "toni-keranen", "Toni", "Keränen",
    "Kaupunginvaltuutettu, keskusvaalilautakunnan puheenjohtaja", "City Councillor, Chair of Central Election Board",
    "Kajaanin kaupunki", "City of Kajaani", "KOK"
  )),
  // PS members (confirmed with vote counts)
  profile(mCouncil("c-k-37", "timo-merilainen", "Timo", "Meriläinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "PS"
  )),
  profile(mCouncil("c-k-38", "minna-partanen", "Minna", "Partanen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "PS"
  )),
  profile(mCouncil("c-k-39", "pasi-arffman", "Pasi", "Arffman",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "PS"
  )),
  profile(mCouncil("c-k-40", "teemu-niva", "Teemu", "Niva",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "PS"
  )),
  // Jouni Tervonen removed — lautakunta member but not confirmed as valtuutettu
  // Sami Halonen removed — lautakunta member but not confirmed as valtuutettu
  // KESK members (confirmed from committee appointments)
  profile(mCouncil("c-k-43", "kimmo-tuulenkari", "Kimmo", "Tuulenkari",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KESK"
  )),
  profile(mCouncil("c-k-44", "kaija-patronen", "Kaija", "Patronen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KESK"
  )),
  profile(mCouncil("c-k-45", "mousa-najafi", "Mousa", "Najafi",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KESK"
  )),
  profile(mCouncil("c-k-46", "fanni-karjalainen", "Fanni", "Karjalainen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KESK"
  )),
  profile(mCouncil("c-k-47", "veli-matti-karppinen", "Veli-Matti", "Karppinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KESK"
  )),
  // VAS members
  profile(mCouncil("c-k-48", "maria-kurtti", "Maria", "Kurtti",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "VAS"
  )),
  profile(mCouncil("c-k-49", "panu-huotari", "Panu", "Huotari",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "VAS"
  )),
  profile(mCouncil("c-k-50", "reija-korkatti", "Reija", "Korkatti",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "VAS"
  )),
  // SDP members
  profile(mCouncil("c-k-51", "sonja-laurila", "Sonja", "Laurila",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "SDP"
  )),
  profile(mCouncil("c-k-52", "markku-oikarinen", "Markku", "Oikarinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "SDP"
  )),
  // KOK members
  profile(mCouncil("c-k-53", "matti-heikkinen-k", "Matti", "Heikkinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KOK"
  )),
  profile(mCouncil("c-k-54", "rea-stricker", "Rea", "Stricker",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KOK"
  )),
  profile(mCouncil("c-k-55", "nina-kahkonen", "Nina", "Kähkönen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KOK"
  )),
  profile(mCouncil("c-k-56", "teemu-takalo", "Teemu", "Takalo",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kajaanin kaupunki", "City of Kajaani", "KOK"
  )),

  // ─── Sotkamo kunnanvaltuusto (27 seats — COMPLETE) ───

  profile(mCouncil("c-s-1", "anne-lukkari", "Anne", "Lukkari",
    "Kunnanvaltuuston puheenjohtaja", "Municipal Council Chair",
    "Sotkamon kunta", "Municipality of Sotkamo", "KESK"
  )),
  profile(mCouncil("c-s-2", "sami-kilpelainen-v", "Sami", "Kilpeläinen",
    "Kunnanvaltuuston 1. varapuheenjohtaja", "Municipal Council 1st Vice Chair",
    "Sotkamon kunta", "Municipality of Sotkamo", "KD"
  )),
  profile(mCouncil("c-s-3", "pertti-granqvist", "Pertti", "Granqvist",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "VAS"
  )),
  profile(mCouncil("c-s-4", "janne-hyvonen", "Janne", "Hyvönen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KESK"
  )),
  profile(mCouncil("c-s-5", "jouko-korhonen", "Jouko", "Korhonen",
    "Kunnanvaltuuston 3. varapuheenjohtaja", "Municipal Council 3rd Vice Chair",
    "Sotkamon kunta", "Municipality of Sotkamo", "VAS"
  )),
  profile(mCouncil("c-s-6", "juho-lukkari", "Juho", "Lukkari",
    "Kunnanvaltuutettu, kunnanhallituksen puheenjohtaja", "Municipal Councillor, Chair of Municipal Board",
    "Sotkamon kunta", "Municipality of Sotkamo", "KESK"
  )),
  profile(mCouncil("c-s-7", "riikka-huotari", "Riikka", "Huotari",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KOK"
  )),
  profile(mCouncil("c-s-kj", "mika-kilpelainen-v", "Mika", "Kilpeläinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KESK"
  )),
  profile(mCouncil("c-s-8", "sakari-seppanen-so", "Sakari", "Seppänen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KESK"
  )),
  profile(mCouncil("c-s-9", "nina-repo", "Nina", "Repo",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KOK"
  )),
  profile(mCouncil("c-s-10", "unto-vaisanen", "Unto", "Väisänen",
    "Kunnanvaltuuston 2. varapuheenjohtaja", "Municipal Council 2nd Vice Chair",
    "Sotkamon kunta", "Municipality of Sotkamo", "KOK"
  )),
  profile(mCouncil("c-s-11", "timo-v-korhonen", "Timo V.", "Korhonen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KESK"
  )),
  profile(mCouncil("c-s-12", "jani-komulainen", "Jani", "Komulainen",
    "Kunnanvaltuutettu, KESK-valtuustoryhmän puheenjohtaja", "Municipal Councillor, KESK Group Chair",
    "Sotkamon kunta", "Municipality of Sotkamo", "KESK"
  )),
  profile(mCouncil("c-s-13", "piia-maatta", "Piia", "Määttä",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KESK"
  )),
  profile(mCouncil("c-s-14", "sami-mahonen", "Sami", "Mähönen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KOK"
  )),
  profile(mCouncil("c-s-15", "juha-matti-halonen", "Juha-Matti", "Halonen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "VAS"
  )),
  profile(mCouncil("c-s-16", "jarmo-huttunen", "Jarmo", "Huttunen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KD"
  )),
  profile(mCouncil("c-s-17", "jouko-lipponen", "Jouko", "Lipponen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "PS"
  )),
  profile(mCouncil("c-s-18", "jari-turunen", "Jari", "Turunen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "SDP"
  )),
  profile(mCouncil("c-s-19", "janne-raisanen-so", "Janne", "Räisänen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "PS"
  )),
  profile(mCouncil("c-s-20", "markku-hyvarinen", "Markku", "Hyvärinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "VAS"
  )),
  profile(mCouncil("c-s-21", "pirjo-lahde", "Pirjo", "Lähde",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KOK"
  )),
  profile(mCouncil("c-s-22", "kirsi-moisanen", "Kirsi", "Moisanen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KESK"
  )),
  profile(mCouncil("c-s-23", "tuulia-nikula", "Tuulia", "Nikula",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KESK"
  )),
  profile(mCouncil("c-s-24", "liinu-kauppinen", "Liinu", "Kauppinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KESK"
  )),
  profile(mCouncil("c-s-25", "antti-kela", "Antti", "Kela",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KD"
  )),
  profile(mCouncil("c-s-26", "juha-juntunen-so", "Juha", "Juntunen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KD"
  )),

  // ─── Kuhmo kaupunginvaltuusto (27 seats, leadership) ───

  profile(mCouncil("c-ku-1", "tuomas-kettunen", "Tuomas", "Kettunen",
    "Kaupunginvaltuuston puheenjohtaja", "City Council Chair",
    "Kuhmon kaupunki", "City of Kuhmo", "KESK"
  )),
  profile(mCouncil("c-ku-2", "seija-lukkarinen", "Seija", "Lukkarinen",
    "Kaupunginvaltuuston 1. varapuheenjohtaja", "City Council 1st Vice Chair",
    "Kuhmon kaupunki", "City of Kuhmo", "KESK"
  )),
  profile(mCouncil("c-ku-3", "matti-jussi-pollari", "Matti-Jussi", "Pollari",
    "Kaupunginvaltuuston 2. varapuheenjohtaja", "City Council 2nd Vice Chair",
    "Kuhmon kaupunki", "City of Kuhmo", "KOK"
  )),
  profile(mCouncil("c-ku-kj", "juhana-juntunen-v", "Juhana", "Juntunen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "KESK"
  )),
  profile(mCouncil("c-ku-4", "riikka-seppanen-ku", "Riikka", "Seppänen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "SDP"
  )),
  profile(mCouncil("c-ku-5", "heikki-huotari", "Heikki", "Huotari",
    "Kaupunginvaltuutettu, kaupunginhallituksen puheenjohtaja", "City Councillor, Chair of City Board",
    "Kuhmon kaupunki", "City of Kuhmo", "KESK"
  )),
  profile(mCouncil("c-ku-6", "marjo-riikka-makalainen", "Marjo-Riikka", "Mäkäläinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "SDP"
  )),
  profile(mCouncil("c-ku-7", "kaisa-oinas-panuma", "Kaisa", "Oinas-Panuma",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "KESK"
  )),
  profile(mCouncil("c-ku-8", "antti-komulainen", "Antti", "Komulainen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "PS"
  )),
  profile(mCouncil("c-ku-9", "timo-klemetti", "Timo", "Klemetti",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "PS"
  )),
  profile(mCouncil("c-ku-10", "timo-piirainen", "Timo", "Piirainen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "PS"
  )),
  profile(mCouncil("c-ku-11", "ilmo-komulainen", "Ilmo", "Komulainen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "PS"
  )),
  profile(mCouncil("c-ku-12", "unto-kyllonen-ku", "Unto", "Kyllönen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "PS"
  )),
  profile(mCouncil("c-ku-13", "pentti-sorjonen", "Pentti", "Sorjonen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "PS"
  )),
  profile(mCouncil("c-ku-14", "janne-lehtonen", "Janne", "Lehtonen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "PS"
  )),
  profile(mCouncil("c-ku-15", "esko-ripaoja", "Esko", "Ripaoja",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "KOK"
  )),
  profile(mCouncil("c-ku-16", "ulla-sisko-ekundayo", "Ulla-Sisko", "Ekundayo",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "VIHR"
  )),
  profile(mCouncil("c-ku-17", "virpi-pikkarainen", "Virpi", "Pikkarainen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "KESK"
  )),
  profile(mCouncil("c-ku-18", "eija-komulainen", "Eija", "Komulainen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "KESK"
  )),
  profile(mCouncil("c-ku-19", "ari-kyllonen-ku", "Ari", "Kyllönen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "KESK"
  )),
  profile(mCouncil("c-ku-20", "heimo-karna", "Heimo", "Kärnä",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "KESK"
  )),
  profile(mCouncil("c-ku-21", "taimi-komulainen", "Taimi", "Komulainen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "KOK"
  )),
  profile(mCouncil("c-ku-22", "ensio-pikkarainen", "Ensio", "Pikkarainen",
    "Kaupunginvaltuutettu, kaupunginhallituksen varapuheenjohtaja", "City Councillor, Vice Chair of City Board",
    "Kuhmon kaupunki", "City of Kuhmo", "SDP"
  )),
  profile(mCouncil("c-ku-23", "tauno-harinen", "Tauno", "Harinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "KD"
  )),
  // KESK members from kaupunginhallitus/lautakunta appointments (likely valtuutetut)
  profile(mCouncil("c-ku-24", "kari-antti-kitunen", "Kari-Antti", "Kitunen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "KESK"
  )),
  profile(mCouncil("c-ku-25", "hannu-grohn", "Hannu", "Gröhn",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "KESK"
  )),
  profile(mCouncil("c-ku-26", "arto-malinen", "Arto", "Malinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "KESK"
  )),

  // ─── Suomussalmi kunnanvaltuusto (27 seats — COMPLETE) ───

  profile(mCouncil("c-su-1", "merja-kyllonen", "Merja", "Kyllönen",
    "Kunnanvaltuuston puheenjohtaja", "Municipal Council Chair",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "VAS"
  )),
  profile(mCouncil("c-su-2", "juha-k-heikkinen", "Juha K.", "Heikkinen",
    "Kunnanvaltuuston 1. varapuheenjohtaja", "Municipal Council 1st Vice Chair",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),
  profile(mCouncil("c-su-3", "atte-seppanen", "Atte", "Seppänen",
    "Kunnanvaltuuston 2. varapuheenjohtaja", "Municipal Council 2nd Vice Chair",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "SDP"
  )),
  profile(mCouncil("c-su-4", "jukka-pekka-alanko", "Jukka-Pekka", "Alanko",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KOK"
  )),
  profile(mCouncil("c-su-5", "juha-heikkinen-su", "Juha", "Heikkinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),
  profile(mCouncil("c-su-6", "pirjo-heikkinen", "Pirjo", "Heikkinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),
  profile(mCouncil("c-su-7", "risto-heikkinen", "Risto", "Heikkinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),
  profile(mCouncil("c-su-8", "erja-helttunen", "Erja", "Helttunen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),
  profile(mCouncil("c-su-9", "anne-holappa", "Anne", "Holappa",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "SDP"
  )),
  profile(mCouncil("c-su-10", "terttu-huttu-juntunen", "Terttu", "Huttu-Juntunen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "VAS"
  )),
  profile(mCouncil("c-su-11", "mikko-juntunen-su", "Mikko", "Juntunen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),
  profile(mCouncil("c-su-12", "sami-juntunen-su", "Sami", "Juntunen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KOK"
  )),
  profile(mCouncil("c-su-13", "mari-kela", "Mari", "Kela",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "VAS"
  )),
  profile(mCouncil("c-su-14", "tuovi-kemppainen", "Tuovi", "Kemppainen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),
  profile(mCouncil("c-su-15", "jonna-kinnunen", "Jonna", "Kinnunen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "VAS"
  )),
  profile(mCouncil("c-su-16", "markku-korvuo", "Markku", "Korvuo",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),
  profile(mCouncil("c-su-17", "janne-laatikainen", "Janne", "Laatikainen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "VAS"
  )),
  profile(mCouncil("c-su-18", "leena-manner", "Leena", "Manner",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "VAS"
  )),
  profile(mCouncil("c-su-19", "kirsi-manninen", "Kirsi", "Manninen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),
  profile(mCouncil("c-su-20", "petteri-matero", "Petteri", "Matero",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "PS"
  )),
  profile(mCouncil("c-su-21", "taina-matero", "Taina", "Matero",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "VAS"
  )),
  profile(mCouncil("c-su-22", "keijo-moilanen", "Keijo", "Moilanen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),
  profile(mCouncil("c-su-23", "keijo-mulari", "Keijo", "Mulari",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),
  profile(mCouncil("c-su-24", "jari-paasovaara", "Jari", "Paasovaara",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),
  profile(mCouncil("c-su-25", "sami-pihlajamaa", "Sami", "Pihlajamaa",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "PS"
  )),
  profile(mCouncil("c-su-26", "jonna-seppanen-su", "Jonna", "Seppänen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),
  profile(mCouncil("c-su-27", "marko-tauriainen", "Marko", "Tauriainen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KOK"
  )),
  profile(mCouncil("c-su-28", "veikko-timonen", "Veikko", "Timonen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),

  // ─── Paltamo kunnanvaltuusto (21 seats — COMPLETE) ───

  profile(mCouncil("c-pa-1", "matti-valikangas", "Matti", "Välikangas",
    "Kunnanvaltuuston puheenjohtaja", "Municipal Council Chair",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  profile(mCouncil("c-pa-2", "juha-riipinen", "Juha", "Riipinen",
    "Kunnanvaltuuston 1. varapuheenjohtaja", "Municipal Council 1st Vice Chair",
    "Paltamon kunta", "Municipality of Paltamo", "VAS"
  )),
  profile(mCouncil("c-pa-3", "maarit-rajatalo", "Maarit", "Rajatalo",
    "Kunnanvaltuuston 2. varapuheenjohtaja", "Municipal Council 2nd Vice Chair",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  // Kokoomus (2)
  profile(mCouncil("c-pa-4", "samppa-homanen", "Samppa", "Homanen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KOK"
  )),
  profile(mCouncil("c-pa-5", "jyri-saastamoinen", "Jyri", "Saastamoinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KOK"
  )),
  // Keskusta (15 total incl. chair + 2nd vice)
  profile(mCouncil("c-pa-6", "anne-huusko", "Anne", "Huusko",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  profile(mCouncil("c-pa-7", "ritva-huusko", "Ritva", "Huusko",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  profile(mCouncil("c-pa-8", "ilkka-jarva", "Ilkka", "Jarva",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  profile(mCouncil("c-pa-9", "juha-junkkari", "Juha", "Junkkari",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  profile(mCouncil("c-pa-10", "minna-jappinen", "Minna", "Jäppinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  profile(mCouncil("c-pa-11", "anita-karjalainen", "Anita", "Karjalainen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  profile(mCouncil("c-pa-12", "sampo-karppinen-pa", "Sampo", "Karppinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  profile(mCouncil("c-pa-13", "erkki-kemppainen-pa", "Erkki", "Kemppainen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  profile(mCouncil("c-pa-14", "pentti-keranen-pa", "Pentti", "Keränen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  profile(mCouncil("c-pa-15", "tiina-korhonen-pa", "Tiina", "Korhonen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  profile(mCouncil("c-pa-16", "veli-vaisanen", "Veli", "Väisänen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  // Vasemmistoliitto (5 incl. 1st vice)
  profile(mCouncil("c-pa-17", "kari-keranen-pa", "Kari", "Keränen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "VAS"
  )),
  profile(mCouncil("c-pa-18", "tanja-luiro", "Tanja", "Luiro",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "VAS"
  )),
  profile(mCouncil("c-pa-19", "jari-pekka-pyykkonen", "Jari-Pekka", "Pyykkönen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "VAS"
  )),
  profile(mCouncil("c-pa-20", "paivi-soldatkin", "Päivi", "Soldatkin",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "VAS"
  )),
  // KD (1)
  profile(mCouncil("c-pa-21", "kaisu-karppinen", "Kaisu", "Karppinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KD"
  )),

  // ─── Puolanka kunnanvaltuusto (17 seats — COMPLETE) ───

  profile(mCouncil("c-pu-1", "mari-haapalainen", "Mari", "Haapalainen",
    "Kunnanvaltuuston puheenjohtaja", "Municipal Council Chair",
    "Puolangan kunta", "Municipality of Puolanka", "KESK"
  )),
  profile(mCouncil("c-pu-2", "paavo-sutinen", "Paavo", "Sutinen",
    "Kunnanvaltuuston 1. varapuheenjohtaja", "Municipal Council 1st Vice Chair",
    "Puolangan kunta", "Municipality of Puolanka", "KOK"
  )),
  profile(mCouncil("c-pu-3", "eeva-vayrynen", "Eeva", "Väyrynen",
    "Kunnanvaltuuston 2. varapuheenjohtaja", "Municipal Council 2nd Vice Chair",
    "Puolangan kunta", "Municipality of Puolanka", "VAS"
  )),
  profile(mCouncil("c-pu-4", "juho-fingerroos", "Juho", "Fingerroos",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "YL1"
  )),
  profile(mCouncil("c-pu-5", "teemu-heikkinen-v", "Teemu", "Heikkinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "KESK"
  )),
  profile(mCouncil("c-pu-6", "arto-hilliaho", "Arto", "Hilliaho",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "YL1"
  )),
  profile(mCouncil("c-pu-7", "jaana-kemppainen-v", "Jaana", "Kemppainen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "YL1"
  )),
  profile(mCouncil("c-pu-8", "teemu-kyllonen-v", "Teemu", "Kyllönen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "KESK"
  )),
  profile(mCouncil("c-pu-9", "arvo-mikkonen", "Arvo", "Mikkonen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "KESK"
  )),
  profile(mCouncil("c-pu-10", "tauno-makelainen", "Tauno", "Mäkeläinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "KESK"
  )),
  profile(mCouncil("c-pu-11", "markku-nivakoski", "Markku", "Nivakoski",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "KESK"
  )),
  profile(mCouncil("c-pu-12", "harri-peltola-v", "Harri", "Peltola",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "KESK"
  )),
  profile(mCouncil("c-pu-13", "seppo-rajala", "Seppo", "Rajala",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "KESK"
  )),
  profile(mCouncil("c-pu-14", "juho-seppanen", "Juho", "Seppänen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "KESK"
  )),
  profile(mCouncil("c-pu-15", "salla-seppanen", "Salla", "Seppänen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "YL1"
  )),
  profile(mCouncil("c-pu-16", "alpo-siira", "Alpo", "Siira",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "KESK"
  )),
  profile(mCouncil("c-pu-17", "laura-tolonen", "Laura", "Tolonen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Puolangan kunta", "Municipality of Puolanka", "KESK"
  )),

  // ─── Hyrynsalmi kunnanvaltuusto (19 seats) ───

  profile(mCouncil("c-h-10", "kati-kaartinen", "Kati", "Kaartinen",
    "Kunnanvaltuuston puheenjohtaja", "Municipal Council Chair",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "KESK"
  )),
  profile(mCouncil("c-h-2", "pertti-heikkinen", "Pertti", "Heikkinen",
    "Kunnanvaltuuston 1. varapuheenjohtaja", "Municipal Council 1st Vice Chair",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "KESK"
  )),
  profile(mCouncil("c-h-3", "markku-backman", "Markku", "Bäckman",
    "Kunnanvaltuuston 2. varapuheenjohtaja", "Municipal Council 2nd Vice Chair",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "SDP"
  )),
  profile(mCouncil("c-h-4", "juha-hankkila", "Juha", "Hankkila",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "SDP"
  )),
  profile(mCouncil("c-h-5", "aira-heikkinen", "Aira", "Heikkinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "KESK"
  )),
  profile(mCouncil("c-h-6", "jarkko-heikkinen", "Jarkko", "Heikkinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "VAS"
  )),
  profile(mCouncil("c-h-7", "tarmo-heikkinen", "Tarmo", "Heikkinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "KESK"
  )),
  profile(mCouncil("c-h-8", "martti-huovinen", "Martti", "Huovinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "VAS"
  )),
  profile(mCouncil("c-h-9", "ari-juntunen", "Ari", "Juntunen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "PS"
  )),
  profile(mCouncil("c-h-21", "helena-heikkinen-h", "Helena", "Heikkinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "KESK"
  )),
  profile(mCouncil("c-h-11", "esa-kemppainen-h", "Esa", "Kemppainen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "KESK"
  )),
  profile(mCouncil("c-h-13", "pauli-keranen", "Pauli", "Keränen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "KESK"
  )),
  profile(mCouncil("c-h-14", "taisto-keranen", "Taisto", "Keränen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "KESK"
  )),
  profile(mCouncil("c-h-15", "tuula-kivijarvi", "Tuula", "Kivijärvi",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "KESK"
  )),
  profile(mCouncil("c-h-22", "anssi-helenius", "Anssi", "Helenius",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "VAS"
  )),
  profile(mCouncil("c-h-17", "herkko-kurkinen", "Herkko", "Kurkinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "KESK"
  )),
  profile(mCouncil("c-h-18", "outi-kuvaja-h", "Outi", "Kuvaja",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "SDP"
  )),
  profile(mCouncil("c-h-19", "kati-nykanen", "Kati", "Nykänen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "KESK"
  )),
  profile(mCouncil("c-h-20", "jussi-tolonen", "Jussi", "Tolonen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "SDP"
  )),

  // ─── Ristijärvi kunnanvaltuusto (15 seats, partial — KESK 8, KOK gained via Tolonen switch) ───

  profile(mCouncil("c-ri-1", "arto-j-tolonen", "Arto J.", "Tolonen",
    "Kunnanvaltuuston puheenjohtaja", "Municipal Council Chair",
    "Ristijärven kunta", "Municipality of Ristijärvi", "KOK"
  )),
  profile(mCouncil("c-ri-2", "paavo-oikarinen", "Paavo", "Oikarinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "KESK"
  )),
  profile(mCouncil("c-ri-3", "salla-heikkinen-ri", "Salla", "Heikkinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "KESK"
  )),
  profile(mCouncil("c-ri-4", "arto-klemetti", "Arto", "Klemetti",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "KESK"
  )),
  profile(mCouncil("c-ri-5", "juha-kanervo", "Juha", "Kanervo",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "KESK"
  )),
  profile(mCouncil("c-ri-6", "matja-hayrynen", "Matja", "Häyrynen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "VAS"
  )),
  profile(mCouncil("c-ri-7", "leila-karppinen-ri", "Leila", "Karppinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "KESK"
  )),
  profile(mCouncil("c-ri-8", "mari-korhonen-ri", "Mari", "Korhonen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "KESK"
  )),
  profile(mCouncil("c-ri-9", "hannu-liljeblad", "Hannu", "Liljeblad",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "SIT"
  )),
  profile(mCouncil("c-ri-10", "helka-tolonen", "Helka", "Tolonen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "KESK"
  )),
  profile(mCouncil("c-ri-11", "olavi-oikarinen", "Olavi", "Oikarinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "KESK"
  )),
  profile(mCouncil("c-ri-12", "hannu-halinen", "Hannu", "Hälinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "KESK"
  )),
  profile(mCouncil("c-ri-13", "ulla-maija-oikarinen", "Ulla-Maija", "Oikarinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "VIHR"
  )),
  profile(mCouncil("c-ri-14", "mikko-suutari-ri", "Mikko", "Suutari",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "PS"
  )),
  profile(mCouncil("c-ri-15", "anssi-sotala", "Anssi", "Sotala",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "PS"
  )),

  // ═══════════════════════════════════════════════════════════════
  // LAPPI (Lapland) — 21 municipalities
  // ═══════════════════════════════════════════════════════════════

  // ─── Tornio (Rovaniemi already exists as m-16) ───
  profile(mOfficial("m-300", "jukka-kujala", "Jukka", "Kujala",
    "Kaupunginjohtaja", "City Manager",
    "Tornion kaupunki", "City of Tornio",
    "2013-01-01",
    "Jukka Kujala on toiminut Tornion kaupunginjohtajana vuodesta 2013. Pitkän linjan kunnallishallinnon ammattilainen.",
    "Jukka Kujala has served as City Manager of Tornio since 2013. A veteran municipal administration professional."
  )),

  // ─── Kemi ───
  profile(mOfficial("m-301", "matti-ruotsalainen", "Matti", "Ruotsalainen",
    "Kaupunginjohtaja", "City Manager",
    "Kemin kaupunki", "City of Kemi",
    "2023-01-01",
    "Matti Ruotsalainen on toiminut Kemin kaupunginjohtajana vuodesta 2023. Kemi tunnetaan teollisuuskaupunkina Perämeren rannalla.",
    "Matti Ruotsalainen has served as City Manager of Kemi since 2023. Kemi is known as an industrial city on the Bay of Bothnia."
  )),

  // ─── Kemijärvi ───
  profile(mOfficial("m-302", "dina-solatie", "Dina", "Solatie",
    "Kaupunginjohtaja", "City Manager",
    "Kemijärven kaupunki", "City of Kemijärvi",
    "2022-01-01",
    "Dina Solatie on toiminut Kemijärven kaupunginjohtajana vuodesta 2022. Kemijärvi on Itä-Lapin keskuskaupunki.",
    "Dina Solatie has served as City Manager of Kemijärvi since 2022. Kemijärvi is the central city of Eastern Lapland."
  )),

  // ─── Sodankylä ───
  profile(mOfficial("m-303", "jari-rantapelkonen", "Jari", "Rantapelkonen",
    "Kunnanjohtaja", "Municipal Manager",
    "Sodankylän kunta", "Municipality of Sodankylä",
    "2021-01-01",
    "Jari Rantapelkonen on toiminut Sodankylän kunnanjohtajana vuodesta 2023. Sotatieteiden tohtori, valtiotieteiden maisteri, everstiluutnantti. Aiemmin Maanpuolustuskorkeakoulun sotilasprofessori. Toiminut myös Enontekiön (2016–) ja Kittilän (2022–) kunnanjohtajana.",
    "Jari Rantapelkonen has served as Municipal Manager of Sodankylä since 2023. PhD in military sciences, MSc in political science, Lieutenant Colonel. Previously Military Professor at the National Defence University. Has also served as Municipal Manager of Enontekiö (2016–) and Kittilä (2022–)."
  )),

  // ─── Inari ───
  profile(mOfficial("m-304", "tommi-kasurinen", "Tommi", "Kasurinen",
    "Kunnanjohtaja", "Municipal Manager",
    "Inarin kunta", "Municipality of Inari",
    "2021-01-01",
    "Tommi Kasurinen on toiminut Inarin kunnanjohtajana vuodesta 2021. Inari on Suomen suurin kunta pinta-alaltaan ja saamelaisten kotiseutualuetta.",
    "Tommi Kasurinen has served as Municipal Manager of Inari since 2021. Inari is Finland's largest municipality by area and part of the Sámi homeland."
  )),

  // ─── Kittilä ───
  profile(mOfficial("m-305", "timo-kurula", "Timo", "Kurula",
    "Kunnanjohtaja", "Municipal Manager",
    "Kittilän kunta", "Municipality of Kittilä",
    "2022-12-01",
    "Timo Kurula (s. 1965) on biologian opettaja ja toiminut Kittilän kunnanjohtajana joulukuusta 2022 lähtien. Korkein oikeus tuomitsi Kurulan ehdolliseen vankeusrangaistukseen virka-aseman väärinkäytöstä, petoksen yrityksestä ja virkavelvollisuuden rikkomisesta osana pitkään jatkunutta Kittilä-kriisiä. Valtuusto äänesti hänen jatkamisensa puolesta.",
    "Timo Kurula (b. 1965) is a biology teacher who has served as Municipal Manager of Kittilä since December 2022. The Supreme Court convicted Kurula to a suspended prison sentence for abuse of office, attempted fraud, and breach of official duty as part of the long-running Kittilä corruption case. The council voted to allow him to continue in his role.",
    null, null,
    "Yli 20 vuoden kokemus Kittilän kunnallispolitiikassa Keskustan luottamushenkilönä. Raportoitu Keskustan eduskuntavaaliehdokkaana.",
    "Over 20 years' experience as a Centre Party (Keskusta) elected official in Kittilä municipal politics. Reported as a Centre Party parliamentary election candidate."
  )),

  // ─── Enontekiö ───
  profile(mOfficial("m-306", "eero-ylitalo", "Eero", "Ylitalo",
    "Vt. kunnanjohtaja", "Acting Municipal Manager",
    "Enontekiön kunta", "Municipality of Enontekiö",
    "2025-01-01",
    "Eero Ylitalo toimii Enontekiön vt. kunnanjohtajana. Enontekiö on Suomen luoteisin kunta, tunnettu Hetan ja Kilpisjärven matkailualueista.",
    "Eero Ylitalo serves as Acting Municipal Manager of Enontekiö. Enontekiö is Finland's northwesternmost municipality, known for the Hetta and Kilpisjärvi tourism areas."
  )),

  // ─── Kolari ───
  profile(mOfficial("m-307", "markku-vehkaoja", "Markku", "Vehkaoja",
    "Kunnanjohtaja", "Municipal Manager",
    "Kolarin kunta", "Municipality of Kolari",
    "2020-01-01",
    "Markku Vehkaoja on toiminut Kolarin kunnanjohtajana. Kolari tunnetaan Ylläksen matkailukeskuksesta ja kaivostoiminnasta.",
    "Markku Vehkaoja has served as Municipal Manager of Kolari. Kolari is known for the Ylläs ski resort and mining activities."
  )),

  // ─── Muonio ───
  profile(mOfficial("m-308", "laura-enbuska-maki", "Laura", "Enbuska-Mäki",
    "Kunnanjohtaja", "Municipal Manager",
    "Muonion kunta", "Municipality of Muonio",
    "2021-01-01",
    "Laura Enbuska-Mäki on toiminut Muonion kunnanjohtajana vuodesta 2021. Muonio sijaitsee Tunturi-Lapissa Ruotsin rajan tuntumassa.",
    "Laura Enbuska-Mäki has served as Municipal Manager of Muonio since 2021. Muonio is located in Fell Lapland near the Swedish border."
  )),

  // ─── Pello ───
  profile(mOfficial("m-309", "katja-jaako-korkko", "Katja", "Jaako-Korkkö",
    "Kunnanjohtaja", "Municipal Manager",
    "Pellon kunta", "Municipality of Pello",
    "2022-01-01",
    "Katja Jaako-Korkkö on toiminut Pellon kunnanjohtajana vuodesta 2022. Pello sijaitsee Tornionjokilaaksossa Ruotsin rajalla.",
    "Katja Jaako-Korkkö has served as Municipal Manager of Pello since 2022. Pello is located in the Tornio River Valley on the Swedish border."
  )),

  // ─── Salla ───
  profile(mOfficial("m-310", "erkki-parkkinen", "Erkki", "Parkkinen",
    "Kunnanjohtaja", "Municipal Manager",
    "Sallan kunta", "Municipality of Salla",
    "2018-01-01",
    "Erkki Parkkinen on toiminut Sallan kunnanjohtajana vuodesta 2018. Salla tunnetaan hiihtomatkailusta ja Venäjän rajan läheisyydestä.",
    "Erkki Parkkinen has served as Municipal Manager of Salla since 2018. Salla is known for ski tourism and proximity to the Russian border."
  )),

  // ─── Ranua ───
  profile(mOfficial("m-311", "tuomas-aikkila", "Tuomas", "Aikkila",
    "Kunnanjohtaja", "Municipal Manager",
    "Ranuan kunta", "Municipality of Ranua",
    "2020-01-01",
    "Tuomas Aikkila on toiminut Ranuan kunnanjohtajana. Ranua tunnetaan eläinpuistostaan ja joulumatkailusta.",
    "Tuomas Aikkila has served as Municipal Manager of Ranua. Ranua is known for its wildlife park and Christmas tourism."
  )),

  // ─── Posio ───
  profile(mOfficial("m-312", "pekka-jaasko", "Pekka", "Jääskö",
    "Kunnanjohtaja", "Municipal Manager",
    "Posion kunta", "Municipality of Posio",
    "2019-01-01",
    "Pekka Jääskö on toiminut Posion kunnanjohtajana. Posio tunnetaan Riisitunturin kansallispuistosta ja keramiikkaosaamisestaan.",
    "Pekka Jääskö has served as Municipal Manager of Posio. Posio is known for Riisitunturi National Park and its ceramics expertise."
  )),

  // ─── Savukoski ───
  profile(mOfficial("m-313", "petri-harkonen", "Petri", "Härkönen",
    "Kunnanjohtaja (eronnut 01/2026)", "Municipal Manager (resigned 01/2026)",
    "Savukosken kunta", "Municipality of Savukoski",
    "2019-01-01",
    "Petri Härkönen toimi Savukosken kunnanjohtajana. Ero astui voimaan tammikuussa 2026. Savukoski on Suomen harvimmin asuttu kunta.",
    "Petri Härkönen served as Municipal Manager of Savukoski. Resigned effective January 2026. Savukoski is Finland's most sparsely populated municipality."
  )),

  // ─── Pelkosenniemi ───
  profile(mOfficial("m-314", "mikko-merikanto", "Mikko", "Merikanto",
    "Kunnanjohtaja", "Municipal Manager",
    "Pelkosenniemen kunta", "Municipality of Pelkosenniemi",
    "2020-01-01",
    "Mikko Merikanto on toiminut Pelkosenniemen kunnanjohtajana. Pelkosenniemi tunnetaan Pyhätunturin matkailukeskuksesta.",
    "Mikko Merikanto has served as Municipal Manager of Pelkosenniemi. Pelkosenniemi is known for the Pyhätunturi ski resort."
  )),

  // ─── Utsjoki ───
  profile(mOfficial("m-315", "paivi-kontio", "Päivi", "Kontio",
    "Kunnanjohtaja", "Municipal Manager",
    "Utsjoen kunta", "Municipality of Utsjoki",
    "2021-01-01",
    "Päivi Kontio on toiminut Utsjoen kunnanjohtajana. Utsjoki on Suomen pohjoisin kunta ja ainoa enemmistöltään saamenkielinen kunta.",
    "Päivi Kontio has served as Municipal Manager of Utsjoki. Utsjoki is Finland's northernmost municipality and the only one with a Sámi-speaking majority."
  )),

  // ─── Simo ───
  profile(mOfficial("m-316", "vivi-marttila", "Vivi", "Marttila",
    "Kunnanjohtaja", "Municipal Manager",
    "Simon kunta", "Municipality of Simo",
    "2022-01-01",
    "Vivi Marttila on toiminut Simon kunnanjohtajana vuodesta 2022. Simo sijaitsee Perämeren rannalla Kemin ja Oulun välissä.",
    "Vivi Marttila has served as Municipal Manager of Simo since 2022. Simo is located on the Bay of Bothnia between Kemi and Oulu."
  )),

  // ─── Keminmaa ───
  profile(mOfficial("m-317", "hannele-matinlassi", "Hannele", "Matinlassi",
    "Kunnanjohtaja", "Municipal Manager",
    "Keminmaan kunta", "Municipality of Keminmaa",
    "2019-01-01",
    "Hannele Matinlassi on toiminut Keminmaan kunnanjohtajana. Kasvatustieteen maisteri, koulutus- ja sivistysjohtamisen erikoispätevyydet. Aiemmin Keminmaan sivistysjohtaja vuodesta 2017 ja sitä ennen rehtori vuodesta 2015. Valittu kunnanjohtajaksi äänin 19–11 (vastaehdokas Yrjö Herva).",
    "Hannele Matinlassi has served as Municipal Manager of Keminmaa. Master of Education with specialist qualifications in educational administration. Previously Keminmaa's Director of Education from 2017 and principal from 2015. Elected Municipal Manager 19–11 against Yrjö Herva.",
    null, null,
    "Piti Keminmaan kunnan tervehdyksen Suomen Keskustan Lapin piirin kesäjuhlilla heinäkuussa 2024 — vahva viite Keskusta-yhteyteen, vaikka virallista jäsenyyttä ei julkisissa lähteissä vahvisteta.",
    "Gave the official Keminmaa municipality greeting at the Centre Party (Keskusta) Lapland district summer festival in July 2024 — a strong indicator of Keskusta affiliation, though formal party membership is not confirmed in public sources."
  )),

  // ─── Tervola ───
  profile(mOfficial("m-318", "mika-simoska", "Mika", "Simoska",
    "Kunnanjohtaja", "Municipal Manager",
    "Tervolan kunta", "Municipality of Tervola",
    "2004-01-01",
    "Mika Simoska on toiminut Tervolan kunnanjohtajana yli 21 vuotta. Maa- ja metsätieteiden maisteri, agronomi (entinen Lapin TE-keskus). Toimi Lapin kunnanjohtajien yhdistyksen puheenjohtajana koronakriisin aikana. Tervola sijaitsee Kemijoen varrella Rovaniemen ja Kemin välissä.",
    "Mika Simoska has served as Municipal Manager of Tervola for over 21 years. M.Sc. (Agriculture and Forestry), agronomist (formerly Lapland TE-Centre). Chaired the Lapland Municipal Managers' Association during the COVID crisis. Tervola is located along the Kemi River between Rovaniemi and Kemi.",
    null, null,
    "Asetui Keskustan ehdokkaaksi vuoden 2011 eduskuntavaaleissa Lapin vaalipiirissä.",
    "Stood as a Centre Party (Keskusta) candidate in the 2011 parliamentary elections in the Lapland electoral district."
  )),

  // ─── Ylitornio ───
  profile(mOfficial("m-319", "jarmo-pienimaki", "Jarmo", "Pienimäki",
    "Kunnanjohtaja", "Municipal Manager",
    "Ylitornion kunta", "Municipality of Ylitornio",
    "2018-01-01",
    "Jarmo Pienimäki on toiminut Ylitornion kunnanjohtajana. Ylitornio sijaitsee Tornionjokilaaksossa Ruotsin rajalla.",
    "Jarmo Pienimäki has served as Municipal Manager of Ylitornio. Ylitornio is located in the Tornio River Valley on the Swedish border."
  )),

  // ─── Rovaniemi kaupunginvaltuusto (51 seats: KESK 14, SDP 13, KOK 10, PS 5, VAS 5, VIHR 4 — partial, 38 of 51 confirmed) ───
  // KESK (14)
  profile(mCouncil("c-ro-1", "susanna-junttila", "Susanna", "Junttila",
    "Kaupunginvaltuutettu, kaupunginhallituksen pj.", "City Councillor, Chair of City Board",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),
  profile(mCouncil("c-ro-2", "heikki-kontiosalo", "Heikki", "Kontiosalo",
    "Kaupunginvaltuutettu, 2. varapj.", "City Councillor, 2nd Vice Chair",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),
  profile(mCouncil("c-ro-3", "hilpi-ahola", "Hilpi", "Ahola",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),
  profile(mCouncil("c-ro-4", "timo-haapa-aro", "Timo", "Haapa-aro",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),
  profile(mCouncil("c-ro-5", "kaisu-huhtalo", "Kaisu", "Huhtalo",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),
  profile(mCouncil("c-ro-6", "mari-jolanki", "Mari", "Jolanki",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),
  profile(mCouncil("c-ro-7", "susanna-viitala", "Susanna", "Viitala",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),
  profile(mCouncil("c-ro-8", "raija-keratar", "Raija", "Kerätär",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),
  profile(mCouncil("c-ro-9", "toni-jankala", "Toni", "Jänkälä",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),
  profile(mCouncil("c-ro-10", "sanna-kylmanen", "Sanna", "Kylmänen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),
  profile(mCouncil("c-ro-11", "heikki-luiro", "Heikki", "Luiro",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),
  profile(mCouncil("c-ro-12", "riku-tapio", "Riku", "Tapio",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),
  profile(mCouncil("c-ro-13", "anne-ollila", "Anne", "Ollila",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),
  profile(mCouncil("c-ro-14", "mikko-riikola", "Mikko", "Riikola",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KESK"
  )),

  // SDP (13 — 10 confirmed)
  profile(mCouncil("c-ro-15", "eemeli-kajula", "Eemeli", "Kajula",
    "Kaupunginvaltuuston puheenjohtaja", "Chair of City Council",
    "Rovaniemen kaupunki", "City of Rovaniemi", "SDP"
  )),
  profile(mCouncil("c-ro-16", "mikkel-nakkalajarvi", "Mikkel", "Näkkäläjärvi",
    "Kaupunginvaltuutettu, ryhmän pj.", "City Councillor, Group Chair",
    "Rovaniemen kaupunki", "City of Rovaniemi", "SDP"
  )),
  profile(mCouncil("c-ro-17", "johanna-ojala-niemela", "Johanna", "Ojala-Niemelä",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "SDP"
  )),
  profile(mCouncil("c-ro-18", "maria-riitta-mallinen", "Maria-Riitta", "Mällinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "SDP"
  )),
  profile(mCouncil("c-ro-19", "harri-rapo", "Harri", "Rapo",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "SDP"
  )),
  profile(mCouncil("c-ro-20", "marjo-rundgren", "Marjo", "Rundgren",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "SDP"
  )),
  profile(mCouncil("c-ro-21", "kimmo-niukkanen", "Kimmo", "Niukkanen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "SDP"
  )),
  profile(mCouncil("c-ro-22", "terhi-heikkila", "Terhi", "Heikkilä",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "SDP"
  )),
  profile(mCouncil("c-ro-23", "maija-pirttijarvi", "Maija", "Pirttijärvi",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "SDP"
  )),
  profile(mCouncil("c-ro-24", "paivi-alaoja", "Päivi", "Alaoja",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "SDP"
  )),

  // KOK (10 — 2 confirmed)
  profile(mCouncil("c-ro-25", "heikki-autto", "Heikki", "Autto",
    "Kaupunginvaltuutettu, 1. varapj.", "City Councillor, 1st Vice Chair",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KOK"
  )),
  profile(mCouncil("c-ro-26", "sanna-luoma", "Sanna", "Luoma",
    "Kaupunginvaltuutettu, ryhmän pj.", "City Councillor, Group Chair",
    "Rovaniemen kaupunki", "City of Rovaniemi", "KOK"
  )),

  // PS (5)
  profile(mCouncil("c-ro-27", "tapio-keranen", "Tapio", "Keränen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "PS"
  )),
  profile(mCouncil("c-ro-28", "sara-seppanen", "Sara", "Seppänen",
    "Kaupunginvaltuutettu, kaupunginhallituksen jäsen", "City Councillor, Board Member",
    "Rovaniemen kaupunki", "City of Rovaniemi", "PS"
  )),
  profile(mCouncil("c-ro-29", "mira-mustonen", "Mira", "Mustonen",
    "Kaupunginvaltuutettu, kansanedustaja", "City Councillor, MP",
    "Rovaniemen kaupunki", "City of Rovaniemi", "PS"
  )),
  profile(mCouncil("c-ro-30", "tuomas-koskiniemi", "Tuomas", "Koskiniemi",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "PS"
  )),
  profile(mCouncil("c-ro-31", "timo-tolonen-ro", "Timo", "Tolonen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "PS"
  )),

  // VAS (5)
  profile(mCouncil("c-ro-32", "matti-huutola", "Matti", "Huutola",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "VAS"
  )),
  profile(mCouncil("c-ro-33", "vesa-puuronen", "Vesa", "Puuronen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "VAS"
  )),
  profile(mCouncil("c-ro-34", "tiina-outila", "Tiina", "Outila",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "VAS"
  )),
  profile(mCouncil("c-ro-35", "henri-ramberg", "Henri", "Ramberg",
    "Kaupunginvaltuutettu, 3. varapj.", "City Councillor, 3rd Vice Chair",
    "Rovaniemen kaupunki", "City of Rovaniemi", "VAS"
  )),
  profile(mCouncil("c-ro-36", "mari-ikonen", "Mari", "Ikonen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "VAS"
  )),

  // VIHR (4 — 2 confirmed)
  profile(mCouncil("c-ro-37", "sanna-konola", "Sanna", "Konola",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "VIHR"
  )),
  profile(mCouncil("c-ro-38", "miikka-hast", "Miikka", "Hast",
    "Kaupunginvaltuutettu", "City Councillor",
    "Rovaniemen kaupunki", "City of Rovaniemi", "VIHR"
  )),

  // ─── Tornio kaupunginvaltuusto (43 seats — partial, leadership confirmed) ───
  profile(mCouncil("c-to-1", "markku-ponkala", "Markku", "Ponkala",
    "Kaupunginvaltuuston puheenjohtaja", "Chair of City Council",
    "Tornion kaupunki", "City of Tornio", "KESK"
  )),
  profile(mCouncil("c-to-2", "outi-keinanen", "Outi", "Keinänen",
    "Kaupunginvaltuutettu, 1. varapj.", "City Councillor, 1st Vice Chair",
    "Tornion kaupunki", "City of Tornio", "KESK"
  )),
  profile(mCouncil("c-to-3", "olli-rainio", "Olli", "Rainio",
    "Kaupunginvaltuutettu, kaupunginhallituksen pj.", "City Councillor, Chair of City Board",
    "Tornion kaupunki", "City of Tornio", "KESK"
  )),
  profile(mCouncil("c-to-4", "jaakko-pelimanni", "Jaakko", "Pelimanni",
    "Kaupunginvaltuutettu", "City Councillor",
    "Tornion kaupunki", "City of Tornio", "KESK"
  )),
  profile(mCouncil("c-to-5", "toni-keranen", "Toni", "Keränen",
    "Kaupunginvaltuutettu, 2. varapj.", "City Councillor, 2nd Vice Chair",
    "Tornion kaupunki", "City of Tornio", "VAS"
  )),
  profile(mCouncil("c-to-6", "kosti-ollila", "Kosti", "Ollila",
    "Kaupunginvaltuutettu", "City Councillor",
    "Tornion kaupunki", "City of Tornio", "SDP"
  )),
  profile(mCouncil("c-to-7", "kaisa-juuso", "Kaisa", "Juuso",
    "Kaupunginvaltuutettu, kansanedustaja", "City Councillor, MP",
    "Tornion kaupunki", "City of Tornio", "PS"
  )),

  // ─── Kemi kaupunginvaltuusto (39 seats — SDP 17, VAS 10, KOK 6, KESK 4, PS 2) ───
  // SDP (17 — 15 confirmed)
  profile(mCouncil("c-ke-1", "viivi-jarvela", "Viivi", "Järvelä",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-2", "jaakko-alamommo", "Jaakko", "Alamommo",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-3", "mikko-alamommo", "Mikko", "Alamommo",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-4", "miia-alasaarela", "Miia", "Alasaarela",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-5", "sari-auvinen", "Sari", "Auvinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-6", "kalle-huusko-ke", "Kalle", "Huusko",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-7", "pirita-hyotyla", "Pirita", "Hyötylä",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-8", "heikki-harkonen", "Heikki", "Härkönen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-9", "jukka-ikalainen", "Jukka", "Ikäläinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-10", "teija-jestila", "Teija", "Jestilä",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-11", "jukka-kunnari", "Jukka", "Kunnari",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-12", "pekka-tiitinen", "Pekka", "Tiitinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-13", "ritva-aheinen", "Ritva", "Aheinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-14", "anniina-kumpula", "Anniina", "Kumpula",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  profile(mCouncil("c-ke-15", "johanna-buska", "Johanna", "Buska",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "SDP"
  )),
  // VAS (10 — 6 confirmed)
  profile(mCouncil("c-ke-16", "mikko-koivulehto", "Mikko", "Koivulehto",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "VAS"
  )),
  profile(mCouncil("c-ke-17", "sari-ekorre", "Sari", "Ekorre",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "VAS"
  )),
  profile(mCouncil("c-ke-18", "kari-hanhisuanto", "Kari", "Hanhisuanto",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "VAS"
  )),
  profile(mCouncil("c-ke-19", "jukka-herrala", "Jukka", "Herrala",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "VAS"
  )),
  profile(mCouncil("c-ke-20", "matti-kettunen-ke", "Matti", "Kettunen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "VAS"
  )),
  profile(mCouncil("c-ke-21", "tytti-kumpulainen", "Tytti", "Kumpulainen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "VAS"
  )),
  // KOK (6 — 1 confirmed)
  profile(mCouncil("c-ke-22", "marja-leena-laitinen", "Marja-Leena", "Laitinen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemin kaupunki", "City of Kemi", "KOK"
  )),

  // ─── Kemijärvi kaupunginvaltuusto (27 seats — partial, Yhteinen Kemijärvi list) ───
  profile(mCouncil("c-kj-1", "sirpa-iivari", "Sirpa", "Iivari",
    "Kaupunginvaltuuston puheenjohtaja", "Chair of City Council",
    "Kemijärven kaupunki", "City of Kemijärvi", "SIT"
  )),
  profile(mCouncil("c-kj-2", "henna-jyrkka", "Henna", "Jyrkkä",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemijärven kaupunki", "City of Kemijärvi", "SIT"
  )),
  profile(mCouncil("c-kj-3", "sari-leinonen", "Sari", "Leinonen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemijärven kaupunki", "City of Kemijärvi", "SIT"
  )),
  profile(mCouncil("c-kj-4", "ari-aho", "Ari", "Aho",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kemijärven kaupunki", "City of Kemijärvi", "SIT"
  )),

  // ─── Sodankylä kunnanvaltuusto (27 seats — leadership only) ───
  profile(mCouncil("c-sd-1", "mikko-maijala", "Mikko", "Maijala",
    "Kunnanvaltuuston puheenjohtaja", "Chair of Municipal Council",
    "Sodankylän kunta", "Municipality of Sodankylä", "KESK"
  )),
  profile(mCouncil("c-sd-2", "mari-anne-penttinen", "Mari-Anne", "Penttinen",
    "Kunnanvaltuutettu, kunnanhallituksen pj.", "Municipal Councillor, Chair of Board",
    "Sodankylän kunta", "Municipality of Sodankylä", "KESK"
  )),
  profile(mCouncil("c-sd-3", "veikko-virtanen", "Veikko", "Virtanen",
    "Kunnanvaltuutettu, kunnanhallituksen 2. varapj.", "Municipal Councillor, Board 2nd Vice Chair",
    "Sodankylän kunta", "Municipality of Sodankylä", "KESK"
  )),
  profile(mCouncil("c-sd-4", "mikko-sipila", "Mikko", "Sipilä",
    "Kunnanvaltuutettu, 1. varapj.", "Municipal Councillor, 1st Vice Chair",
    "Sodankylän kunta", "Municipality of Sodankylä", "VIHR"
  )),
  profile(mCouncil("c-sd-5", "satu-honkonen", "Satu", "Honkonen",
    "Kunnanvaltuutettu, 2. varapj.", "Municipal Councillor, 2nd Vice Chair",
    "Sodankylän kunta", "Municipality of Sodankylä", "SDP"
  )),

  // ─── Inari kunnanvaltuusto (27 seats: KESK 8, KOK 6, SDP 5, VIHR 3, VAS 3, PS 1, KD 1 — leadership confirmed) ───
  profile(mCouncil("c-in-1", "janne-tervahauta", "Janne", "Tervahauta",
    "Kunnanvaltuuston puheenjohtaja", "Chair of Municipal Council",
    "Inarin kunta", "Municipality of Inari", "KESK"
  )),
  profile(mCouncil("c-in-2", "aslak-pekkala", "Aslak", "Pekkala",
    "Kunnanvaltuutettu, 1. varapj.", "Municipal Councillor, 1st Vice Chair",
    "Inarin kunta", "Municipality of Inari", "KOK"
  )),
  profile(mCouncil("c-in-3", "jari-huotari", "Jari", "Huotari",
    "Kunnanvaltuutettu, kunnanhallituksen pj.", "Municipal Councillor, Chair of Board",
    "Inarin kunta", "Municipality of Inari", "KOK"
  )),
  profile(mCouncil("c-in-4", "anu-avaskari", "Anu", "Avaskari",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Inarin kunta", "Municipality of Inari", "KOK"
  )),
  profile(mCouncil("c-in-5", "anni-koivisto", "Anni", "Koivisto",
    "Kunnanvaltuutettu, 2. varapj.", "Municipal Councillor, 2nd Vice Chair",
    "Inarin kunta", "Municipality of Inari", "SDP"
  )),
  profile(mCouncil("c-in-6", "pirita-nakkalajarvi", "Pirita", "Näkkäläjärvi",
    "Kunnanvaltuutettu, saamelaiskäräjien pj.", "Municipal Councillor, Chair of Sámi Parliament",
    "Inarin kunta", "Municipality of Inari", "VIHR"
  )),

  // ─── Kittilä kunnanvaltuusto (27 seats — leadership only) ───
  profile(mCouncil("c-kt-1", "marita-toivanen", "Marita", "Toivanen",
    "Kunnanvaltuuston puheenjohtaja", "Chair of Municipal Council",
    "Kittilän kunta", "Municipality of Kittilä", "VAS"
  )),
  profile(mCouncil("c-kt-2", "pekka-rajala", "Pekka", "Rajala",
    "Kunnanvaltuutettu, 1. varapj.", "Municipal Councillor, 1st Vice Chair",
    "Kittilän kunta", "Municipality of Kittilä", "KESK"
  )),
  profile(mCouncil("c-kt-3", "tarmo-salonen", "Tarmo", "Salonen",
    "Kunnanvaltuutettu, 2. varapj.", "Municipal Councillor, 2nd Vice Chair",
    "Kittilän kunta", "Municipality of Kittilä", "PS"
  )),
  profile(mCouncil("c-kt-4", "jukka-poti", "Jukka", "Poti",
    "Kunnanvaltuutettu, 3. varapj.", "Municipal Councillor, 3rd Vice Chair",
    "Kittilän kunta", "Municipality of Kittilä", "KOK"
  )),

  // ─── Enontekiö kunnanvaltuusto (17 seats — partial) ───
  profile(mCouncil("c-en-1", "sari-norrgard", "Sari", "Norrgård",
    "Kunnanvaltuuston puheenjohtaja", "Chair of Municipal Council",
    "Enontekiön kunta", "Municipality of Enontekiö", "KESK"
  )),
  profile(mCouncil("c-en-2", "elli-maria-kultima", "Elli-Maria", "Kultima",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Enontekiön kunta", "Municipality of Enontekiö", "KESK"
  )),
  profile(mCouncil("c-en-3", "emilia-lyttinen", "Emilia", "Lyttinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Enontekiön kunta", "Municipality of Enontekiö", "KESK"
  )),
  profile(mCouncil("c-en-4", "ulla-keinovaara", "Ulla", "Keinovaara",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Enontekiön kunta", "Municipality of Enontekiö", "KESK"
  )),
  profile(mCouncil("c-en-5", "anri-magga", "Anri", "Magga",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Enontekiön kunta", "Municipality of Enontekiö", "VAS"
  )),

  // ─── Kolari kunnanvaltuusto (21 seats — partial leadership) ───
  profile(mCouncil("c-kl-1", "veli-pekka-uusitalo", "Veli-Pekka", "Uusitalo",
    "Kunnanvaltuuston puheenjohtaja", "Chair of Municipal Council",
    "Kolarin kunta", "Municipality of Kolari", "SIT"
  )),
  profile(mCouncil("c-kl-2", "helena-kaikkonen-tiensuu", "Helena", "Kaikkonen-Tiensuu",
    "Kunnanvaltuutettu, 1. varapj.", "Municipal Councillor, 1st Vice Chair",
    "Kolarin kunta", "Municipality of Kolari", "KESK"
  )),
  profile(mCouncil("c-kl-3", "mikko-lipponen", "Mikko", "Lipponen",
    "Kunnanvaltuutettu, 2. varapj.", "Municipal Councillor, 2nd Vice Chair",
    "Kolarin kunta", "Municipality of Kolari", "SIT"
  )),
  profile(mCouncil("c-kl-4", "johanna-kiili", "Johanna", "Kiili",
    "Kunnanvaltuutettu, kunnanhallituksen pj.", "Municipal Councillor, Chair of Board",
    "Kolarin kunta", "Municipality of Kolari", "SIT"
  )),
  profile(mCouncil("c-kl-5", "orvo-vaattovaara", "Orvo", "Vaattovaara",
    "Kunnanvaltuutettu, kunnanhallituksen varapj.", "Municipal Councillor, Board Vice Chair",
    "Kolarin kunta", "Municipality of Kolari", "SIT"
  )),
  profile(mCouncil("c-kl-6", "stiina-kaisa-raisanen", "Stiina-Kaisa", "Räisänen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Kolarin kunta", "Municipality of Kolari", "SIT"
  )),
  profile(mCouncil("c-kl-7", "jarmo-kylmamaa", "Jarmo", "Kylmämaa",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Kolarin kunta", "Municipality of Kolari", "KESK"
  )),
  profile(mCouncil("c-kl-8", "ville-ikonen", "Ville", "Ikonen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Kolarin kunta", "Municipality of Kolari", "KESK"
  )),
  profile(mCouncil("c-kl-9", "voitto-vaattovaara", "Voitto", "Vaattovaara",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Kolarin kunta", "Municipality of Kolari", "VAS"
  )),
  profile(mCouncil("c-kl-10", "hanna-makela", "Hanna", "Mäkelä",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Kolarin kunta", "Municipality of Kolari", "VAS"
  )),

  // ─── Muonio kunnanvaltuusto (17 seats: KESK 5, KOK 5, VAS 2, SDP 2, KD 1 — 15 of 17 confirmed) ───
  profile(mCouncil("c-mu-1", "priitta-poyhtari-troen", "Priitta", "Pöyhtäri-Trøen",
    "Kunnanvaltuuston puheenjohtaja", "Chair of Municipal Council",
    "Muonion kunta", "Municipality of Muonio", "KESK"
  )),
  profile(mCouncil("c-mu-2", "matti-myllykangas", "Matti", "Myllykangas",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Muonion kunta", "Municipality of Muonio", "KESK"
  )),
  profile(mCouncil("c-mu-3", "pirjo-a-rauhala", "Pirjo A.", "Rauhala",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Muonion kunta", "Municipality of Muonio", "KESK"
  )),
  profile(mCouncil("c-mu-4", "pirkko-m-rauhala", "Pirkko M.", "Rauhala",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Muonion kunta", "Municipality of Muonio", "KESK"
  )),
  profile(mCouncil("c-mu-5", "tuomas-sieppi", "Tuomas", "Sieppi",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Muonion kunta", "Municipality of Muonio", "KESK"
  )),
  profile(mCouncil("c-mu-6", "minna-back", "Minna", "Back",
    "Kunnanvaltuutettu, kunnanhallituksen pj.", "Municipal Councillor, Chair of Board",
    "Muonion kunta", "Municipality of Muonio", "KOK"
  )),
  profile(mCouncil("c-mu-7", "mika-brannare", "Mika", "Brännare",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Muonion kunta", "Municipality of Muonio", "KOK"
  )),
  profile(mCouncil("c-mu-8", "petteri-hirsikangas", "Petteri", "Hirsikangas",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Muonion kunta", "Municipality of Muonio", "KOK"
  )),
  profile(mCouncil("c-mu-9", "maria-pietikainen", "Maria", "Pietikäinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Muonion kunta", "Municipality of Muonio", "KOK"
  )),
  profile(mCouncil("c-mu-10", "teemu-taulavuori", "Teemu", "Taulavuori",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Muonion kunta", "Municipality of Muonio", "KOK"
  )),
  profile(mCouncil("c-mu-11", "manu-friman", "Manu", "Friman",
    "Kunnanvaltuutettu, kunnanhallituksen 2. varapj.", "Municipal Councillor, Board 2nd Vice Chair",
    "Muonion kunta", "Municipality of Muonio", "VAS"
  )),
  profile(mCouncil("c-mu-12", "johanna-mikkola", "Johanna", "Mikkola",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Muonion kunta", "Municipality of Muonio", "VAS"
  )),
  profile(mCouncil("c-mu-13", "katriina-lauri", "Katriina", "Lauri",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Muonion kunta", "Municipality of Muonio", "SDP"
  )),
  profile(mCouncil("c-mu-14", "sakari-silen", "Sakari", "Silén",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Muonion kunta", "Municipality of Muonio", "SDP"
  )),
  profile(mCouncil("c-mu-15", "mikael-heikkila", "Mikael", "Heikkilä",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Muonion kunta", "Municipality of Muonio", "KD"
  )),

  // ─── Pello kunnanvaltuusto (17 seats — group leaders only) ───
  profile(mCouncil("c-pe-1", "tuula-ylisaukko-oja", "Tuula", "Ylisaukko-oja",
    "Kunnanvaltuutettu, ryhmän pj.", "Municipal Councillor, Group Chair",
    "Pellon kunta", "Municipality of Pello", "KESK"
  )),
  profile(mCouncil("c-pe-2", "janne-niva", "Janne", "Niva",
    "Kunnanvaltuutettu, ryhmän pj.", "Municipal Councillor, Group Chair",
    "Pellon kunta", "Municipality of Pello", "SDP"
  )),
  profile(mCouncil("c-pe-3", "simo-keranen", "Simo", "Keränen",
    "Kunnanvaltuutettu, ryhmän pj.", "Municipal Councillor, Group Chair",
    "Pellon kunta", "Municipality of Pello", "VAS"
  )),
  profile(mCouncil("c-pe-4", "tiina-paakki", "Tiina", "Paakki",
    "Kunnanvaltuutettu, ryhmän pj.", "Municipal Councillor, Group Chair",
    "Pellon kunta", "Municipality of Pello", "PS"
  )),

  // ─── Posio kunnanvaltuusto (17 seats: KESK 12, Ryhmä 2008 2, PS 2, SDP 1) ───
  profile(mCouncil("c-po-1", "eero-posio", "Eero", "Posio",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Posion kunta", "Municipality of Posio", "KESK"
  )),
  profile(mCouncil("c-po-2", "elina-ruokamo", "Elina", "Ruokamo",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Posion kunta", "Municipality of Posio", "KESK"
  )),

  // ─── Savukoski kunnanvaltuusto (13 seats — partial) ───
  profile(mCouncil("c-sv-1", "jalmari-harju", "Jalmari", "Harju",
    "Kunnanvaltuutettu, ääniharava", "Municipal Councillor, top vote-getter",
    "Savukosken kunta", "Municipality of Savukoski", "KESK"
  )),
  profile(mCouncil("c-sv-2", "kari-kilpimaa", "Kari", "Kilpimaa",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Savukosken kunta", "Municipality of Savukoski", "KOK"
  )),
  profile(mCouncil("c-sv-3", "jari-petri-mulari", "Jari-Petri", "Mulari",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Savukosken kunta", "Municipality of Savukoski", "SIT"
  )),
  profile(mCouncil("c-sv-4", "sinikka-leinonen", "Sinikka", "Leinonen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Savukosken kunta", "Municipality of Savukoski", "SIT"
  )),
  profile(mCouncil("c-sv-5", "jouni-halo", "Jouni", "Halo",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Savukosken kunta", "Municipality of Savukoski", "SIT"
  )),

  // ─── Utsjoki kunnanvaltuusto (15 seats — leadership only) ───
  profile(mCouncil("c-ut-1", "arto-pohjanrinne", "Arto", "Pohjanrinne",
    "Kunnanvaltuuston puheenjohtaja", "Chair of Municipal Council",
    "Utsjoen kunta", "Municipality of Utsjoki", "KOK"
  )),
  profile(mCouncil("c-ut-2", "vaino-guttorm", "Väinö", "Guttorm",
    "Kunnanvaltuutettu, kunnanhallituksen pj.", "Municipal Councillor, Chair of Board",
    "Utsjoen kunta", "Municipality of Utsjoki", "KD"
  )),
  profile(mCouncil("c-ut-3", "vuokko-tieva-niittyvuopio", "Vuokko", "Tieva-Niittyvuopio",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Utsjoen kunta", "Municipality of Utsjoki", "SIT"
  )),

  // ─── Simo kunnanvaltuusto (~19 seats — leadership only) ───
  profile(mCouncil("c-si-1", "soile-vakkala", "Soile", "Vakkala",
    "Kunnanvaltuuston puheenjohtaja", "Chair of Municipal Council",
    "Simon kunta", "Municipality of Simo", "KESK"
  )),

  // ─── Keminmaa kunnanvaltuusto (31 seats: Keminmaalaisten Parhaaksi 13, KESK 10, VAS 4 — leadership only) ───
  profile(mCouncil("c-km-1", "auli-tasala", "Auli", "Tasala",
    "Kunnanvaltuuston puheenjohtaja", "Chair of Municipal Council",
    "Keminmaan kunta", "Municipality of Keminmaa", "SIT"
  )),

  // ─── Tervola kunnanvaltuusto (17 seats — leadership confirmed) ───
  profile(mCouncil("c-tv-1", "ari-hietanen", "Ari", "Hietanen",
    "Kunnanvaltuuston puheenjohtaja", "Chair of Municipal Council",
    "Tervolan kunta", "Municipality of Tervola", "SIT"
  )),
  profile(mCouncil("c-tv-2", "jorma-vaara", "Jorma", "Vaara",
    "Kunnanvaltuutettu, 1. varapj.", "Municipal Councillor, 1st Vice Chair",
    "Tervolan kunta", "Municipality of Tervola", "KESK"
  )),
  profile(mCouncil("c-tv-3", "eero-lampela", "Eero", "Lampela",
    "Kunnanvaltuutettu, kunnanhallituksen pj.", "Municipal Councillor, Chair of Board",
    "Tervolan kunta", "Municipality of Tervola", "KESK"
  )),
  profile(mCouncil("c-tv-4", "hanna-leena-kaasila", "Hanna-Leena", "Kaasila",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Tervolan kunta", "Municipality of Tervola", "KESK"
  )),
  profile(mCouncil("c-tv-5", "riikka-oinas", "Riikka", "Oinas",
    "Kunnanvaltuutettu, 2. varapj.", "Municipal Councillor, 2nd Vice Chair",
    "Tervolan kunta", "Municipality of Tervola", "VAS"
  )),
  profile(mCouncil("c-tv-6", "pertti-hemminki", "Pertti", "Hemminki",
    "Kunnanvaltuutettu, kunnanhallituksen varapj.", "Municipal Councillor, Board Vice Chair",
    "Tervolan kunta", "Municipality of Tervola", "VAS"
  )),
  profile(mCouncil("c-tv-7", "jyrki-tormanen", "Jyrki", "Törmänen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Tervolan kunta", "Municipality of Tervola", "SIT"
  )),
  profile(mCouncil("c-tv-8", "pia-palokangas", "Pia", "Palokangas",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Tervolan kunta", "Municipality of Tervola", "SIT"
  )),

  // ─── Ranua kunnanvaltuusto (17 seats: KESK 6, YKK 6, KOK 4, SDP 1 — FULL ROSTER) ───
  profile(mCouncil("c-rn-1", "keijo-ruonala", "Keijo", "Ruonala",
    "Kunnanvaltuuston puheenjohtaja", "Chair of Municipal Council",
    "Ranuan kunta", "Municipality of Ranua", "SDP"
  )),
  profile(mCouncil("c-rn-2", "ulla-ilvesluoto", "Ulla", "Ilvesluoto",
    "Kunnanvaltuutettu, 1. varapj.", "Municipal Councillor, 1st Vice Chair",
    "Ranuan kunta", "Municipality of Ranua", "SIT"
  )),
  profile(mCouncil("c-rn-3", "esko-lopponen", "Esko", "Löppönen",
    "Kunnanvaltuutettu, 2. varapj.", "Municipal Councillor, 2nd Vice Chair",
    "Ranuan kunta", "Municipality of Ranua", "KESK"
  )),
  profile(mCouncil("c-rn-4", "mirva-salmela", "Mirva", "Salmela",
    "Kunnanvaltuutettu, kunnanhallituksen pj., ääniharava", "Municipal Councillor, Chair of Board, top vote-getter",
    "Ranuan kunta", "Municipality of Ranua", "KESK"
  )),
  profile(mCouncil("c-rn-5", "mikko-sarajarvi", "Mikko", "Sarajärvi",
    "Kunnanvaltuutettu, kunnanhallituksen varapj.", "Municipal Councillor, Board Vice Chair",
    "Ranuan kunta", "Municipality of Ranua", "SIT"
  )),
  profile(mCouncil("c-rn-6", "sirkka-illikainen", "Sirkka", "Illikainen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ranuan kunta", "Municipality of Ranua", "KESK"
  )),
  profile(mCouncil("c-rn-7", "jaakko-kouva", "Jaakko", "Kouva",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ranuan kunta", "Municipality of Ranua", "KESK"
  )),
  profile(mCouncil("c-rn-8", "tea-romppainen", "Tea", "Romppainen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ranuan kunta", "Municipality of Ranua", "KESK"
  )),
  profile(mCouncil("c-rn-9", "jari-hintsala", "Jari", "Hintsala",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ranuan kunta", "Municipality of Ranua", "KESK"
  )),
  profile(mCouncil("c-rn-10", "terhi-salmela", "Terhi", "Salmela",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ranuan kunta", "Municipality of Ranua", "KOK"
  )),
  profile(mCouncil("c-rn-11", "antti-pekka-aikkila", "Antti-Pekka", "Aikkila",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ranuan kunta", "Municipality of Ranua", "KOK"
  )),
  profile(mCouncil("c-rn-12", "juho-petajajarvi", "Juho", "Petäjäjärvi",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ranuan kunta", "Municipality of Ranua", "KOK"
  )),
  profile(mCouncil("c-rn-13", "juha-kortesalmi", "Juha", "Kortesalmi",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ranuan kunta", "Municipality of Ranua", "KOK"
  )),
  profile(mCouncil("c-rn-14", "tuomas-vaarala", "Tuomas", "Väärälä",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ranuan kunta", "Municipality of Ranua", "SIT"
  )),
  profile(mCouncil("c-rn-15", "tatu-hietala", "Tatu", "Hietala",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ranuan kunta", "Municipality of Ranua", "SIT"
  )),
  profile(mCouncil("c-rn-16", "pekka-natti", "Pekka", "Nätti",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ranuan kunta", "Municipality of Ranua", "SIT"
  )),
  profile(mCouncil("c-rn-17", "petri-manninen", "Petri", "Manninen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ranuan kunta", "Municipality of Ranua", "SIT"
  )),

  // ─── Salla kunnanvaltuusto (21 seats: KESK 11, PS 4, VAS 3, SDP 2, KOK 1 — partial) ───
  profile(mCouncil("c-sl-1", "helvi-hamari", "Helvi", "Hamari",
    "Kunnanvaltuutettu, ääniharava (22,2 % äänistä)", "Municipal Councillor, top vote-getter (22.2% of votes)",
    "Sallan kunta", "Municipality of Salla", "VAS"
  )),
  profile(mCouncil("c-sl-2", "minna-karhu", "Minna", "Karhu",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sallan kunta", "Municipality of Salla", "VAS"
  )),
  profile(mCouncil("c-sl-3", "paula-soutukorva", "Paula", "Soutukorva",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sallan kunta", "Municipality of Salla", "VAS"
  )),

  // ─── Pelkosenniemi kunnanvaltuusto (13 seats — partial leadership) ───
  profile(mCouncil("c-pn-1", "markku-kallio", "Markku", "Kallio",
    "Kunnanvaltuuston puheenjohtaja", "Chair of Municipal Council",
    "Pelkosenniemen kunta", "Municipality of Pelkosenniemi", "KESK"
  )),
  profile(mCouncil("c-pn-2", "heidi-karnaattu", "Heidi", "Karnaattu",
    "Kunnanvaltuuston varapuheenjohtaja", "Vice Chair of Municipal Council",
    "Pelkosenniemen kunta", "Municipality of Pelkosenniemi", "VIHR"
  )),
  profile(mCouncil("c-pn-3", "laura-lakso", "Laura", "Lakso",
    "Kunnanvaltuutettu, kunnanhallituksen pj., ääniharava (27,3 % äänistä)", "Municipal Councillor, Chair of Board, top vote-getter (27.3% of votes)",
    "Pelkosenniemen kunta", "Municipality of Pelkosenniemi", "KESK"
  )),
  profile(mCouncil("c-pn-4", "heikki-honkanen", "Heikki", "Honkanen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Pelkosenniemen kunta", "Municipality of Pelkosenniemi", "KESK"
  )),
  profile(mCouncil("c-pn-5", "jouko-viitamaki", "Jouko", "Viitamäki",
    "Kunnanvaltuutettu (vaalikelpoisuus menetetty)", "Municipal Councillor (lost eligibility)",
    "Pelkosenniemen kunta", "Municipality of Pelkosenniemi", "SIT"
  )),

  // ─── Ylitornio kunnanvaltuusto (21 seats: KESK 10, Ylitornion parhaaksi 7, VAS 3, SDP 1 — 12 of 21 confirmed) ───
  // KESK
  profile(mCouncil("c-yt-1", "tanja-joona", "Tanja", "Joona",
    "Kunnanvaltuuston puheenjohtaja", "Chair of Municipal Council",
    "Ylitornion kunta", "Municipality of Ylitornio", "KESK"
  )),
  profile(mCouncil("c-yt-2", "jouni-ollikkala", "Jouni", "Ollikkala",
    "Kunnanvaltuutettu, kunnanhallituksen pj. (kausi 1)", "Municipal Councillor, Chair of Board (term 1)",
    "Ylitornion kunta", "Municipality of Ylitornio", "KESK"
  )),
  profile(mCouncil("c-yt-3", "regina-savolainen", "Regina", "Savolainen",
    "Kunnanvaltuutettu, kunnanhallituksen pj. (kausi 2)", "Municipal Councillor, Chair of Board (term 2)",
    "Ylitornion kunta", "Municipality of Ylitornio", "KESK"
  )),
  profile(mCouncil("c-yt-4", "sirpa-uusimaa", "Sirpa", "Uusimaa",
    "Kunnanvaltuutettu, ryhmän äänikuningatar", "Municipal Councillor, party top vote-getter",
    "Ylitornion kunta", "Municipality of Ylitornio", "KESK"
  )),
  // Ylitornion parhaaksi (yhteislista)
  profile(mCouncil("c-yt-5", "petri-juvani", "Petri", "Juvani",
    "Kunnanvaltuutettu, ryhmän äänikuningas", "Municipal Councillor, group top vote-getter",
    "Ylitornion kunta", "Municipality of Ylitornio", "SIT"
  )),
  profile(mCouncil("c-yt-6", "katriina-koskela", "Katriina", "Koskela",
    "Kunnanvaltuutettu, ryhmän perustaja", "Municipal Councillor, group founder",
    "Ylitornion kunta", "Municipality of Ylitornio", "SIT"
  )),
  profile(mCouncil("c-yt-7", "tommi-knuuti", "Tommi", "Knuuti",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ylitornion kunta", "Municipality of Ylitornio", "SIT"
  )),
  profile(mCouncil("c-yt-8", "anne-mari-kovalainen", "Anne-Mari", "Kovalainen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ylitornion kunta", "Municipality of Ylitornio", "SIT"
  )),
  profile(mCouncil("c-yt-9", "marja-huusko", "Marja", "Huusko",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ylitornion kunta", "Municipality of Ylitornio", "SIT"
  )),
  profile(mCouncil("c-yt-10", "olavi-maansaari", "Olavi", "Maansaari",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ylitornion kunta", "Municipality of Ylitornio", "SIT"
  )),
  profile(mCouncil("c-yt-11", "paulina-koskenniemi", "Paulina", "Koskenniemi",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ylitornion kunta", "Municipality of Ylitornio", "SIT"
  )),
  // VAS
  profile(mCouncil("c-yt-12", "eugen-parviainen", "Eugen", "Parviainen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ylitornion kunta", "Municipality of Ylitornio", "VAS"
  )),

  // ─── Pohjois-Pohjanmaa kunnanjohtajat ───
  // Oulu kaupunginjohtaja already covered as m-5

  profile(mOfficial("m-400", "leena-mikkola-riekkinen", "Leena", "Mikkola-Riekkinen",
    "Kaupunginjohtaja", "City Manager",
    "Raahen kaupunki", "City of Raahe",
    "2022-01-01",
    "Leena Mikkola-Riekkinen on toiminut Raahen kaupunginjohtajana vuodesta 2022. Raahe on merkittävä teollisuus- ja satamakaupunki.",
    "Leena Mikkola-Riekkinen has served as City Manager of Raahe since 2022. Raahe is a significant industrial and port city."
  )),

  profile(mOfficial("m-401", "maria-sorvisto", "Maria", "Sorvisto",
    "Kaupunginjohtaja", "City Manager",
    "Ylivieskan kaupunki", "City of Ylivieska",
    "2018-01-01",
    "Maria Sorvisto on toiminut Ylivieskan kaupunginjohtajana vuodesta 2018.",
    "Maria Sorvisto has served as City Manager of Ylivieska since 2018."
  )),

  profile(mOfficial("m-402", "jukka-puoskari", "Jukka", "Puoskari",
    "Kaupunginjohtaja", "City Manager",
    "Kalajoen kaupunki", "City of Kalajoki",
    "2000-01-01",
    "Jukka Puoskari on toiminut Kalajoen kaupunginjohtajana vuodesta 2000. Pitkän linjan kunnallishallinnon ammattilainen.",
    "Jukka Puoskari has served as City Manager of Kalajoki since 2000. A veteran municipal administration professional."
  )),

  profile(mOfficial("m-403", "jouko-manninen", "Jouko", "Manninen",
    "Kaupunginjohtaja", "City Manager",
    "Kuusamon kaupunki", "City of Kuusamo",
    "2015-01-01",
    "Jouko Manninen on toiminut Kuusamon kaupunginjohtajana vuodesta 2015.",
    "Jouko Manninen has served as City Manager of Kuusamo since 2015."
  )),

  profile(mOfficial("m-404", "paivi-karikumpu", "Päivi", "Karikumpu",
    "Kaupunginjohtaja", "City Manager",
    "Nivalan kaupunki", "City of Nivala",
    "2015-01-01",
    "Päivi Karikumpu on toiminut Nivalan kaupunginjohtajana vuodesta 2015.",
    "Päivi Karikumpu has served as City Manager of Nivala since 2015."
  )),

  profile(mOfficial("m-405", "jonna-tamminen", "Jonna", "Tamminen",
    "Kaupunginjohtaja", "City Manager",
    "Haapajärven kaupunki", "City of Haapajärvi",
    "2024-01-01",
    "Jonna Tamminen on toiminut Haapajärven kaupunginjohtajana vuodesta 2024.",
    "Jonna Tamminen has served as City Manager of Haapajärvi since 2024."
  )),

  profile(mOfficial("m-406", "esa-jussila", "Esa", "Jussila",
    "Kaupunginjohtaja", "City Manager",
    "Haapaveden kaupunki", "City of Haapavesi",
    "2024-01-01",
    "Esa Jussila on toiminut Haapaveden kaupunginjohtajana vuodesta 2024.",
    "Esa Jussila has served as City Manager of Haapavesi since 2024."
  )),

  profile(mOfficial("m-407", "riikka-moilanen", "Riikka", "Moilanen",
    "Kaupunginjohtaja", "City Manager",
    "Oulaisten kaupunki", "City of Oulainen",
    "2021-01-01",
    "Riikka Moilanen on toiminut Oulaisten kaupunginjohtajana vuodesta 2021.",
    "Riikka Moilanen has served as City Manager of Oulainen since 2021."
  )),

  profile(mOfficial("m-408", "tuomas-lohi", "Tuomas", "Lohi",
    "Kunnanjohtaja", "Municipal Manager",
    "Kempeleen kunta", "Municipality of Kempele",
    "2013-01-01",
    "Tuomas Lohi on toiminut Kempeleen kunnanjohtajana vuodesta 2013. Kempele on yksi Suomen nopeimmin kasvavista kunnista.",
    "Tuomas Lohi has served as Municipal Manager of Kempele since 2013. Kempele is one of Finland's fastest-growing municipalities."
  )),

  profile(mOfficial("m-409", "pekka-rajala-li", "Pekka", "Rajala",
    "Kunnanjohtaja", "Municipal Manager",
    "Limingan kunta", "Municipality of Liminka",
    "2004-01-01",
    "Pekka Rajala on toiminut Limingan kunnanjohtajana vuodesta 2004. Pitkän linjan kunnallishallinnon ammattilainen.",
    "Pekka Rajala has served as Municipal Manager of Liminka since 2004. A veteran municipal administration professional."
  )),

  profile(mOfficial("m-410", "kimmo-hinno", "Kimmo", "Hinno",
    "Kunnanjohtaja", "Municipal Manager",
    "Muhoksen kunta", "Municipality of Muhos",
    "2023-01-01",
    "Kimmo Hinno on toiminut Muhoksen kunnanjohtajana vuodesta 2023.",
    "Kimmo Hinno has served as Municipal Manager of Muhos since 2023."
  )),

  profile(mOfficial("m-411", "marjukka-manninen", "Marjukka", "Manninen",
    "Kunnanjohtaja", "Municipal Manager",
    "Iin kunta", "Municipality of Ii",
    "2022-01-01",
    "Marjukka Manninen on toiminut Iin kunnanjohtajana vuodesta 2022.",
    "Marjukka Manninen has served as Municipal Manager of Ii since 2022."
  )),

  profile(mOfficial("m-412", "vesa-anttila", "Vesa", "Anttila",
    "Kunnanjohtaja", "Municipal Manager",
    "Tyrnävän kunta", "Municipality of Tyrnävä",
    "2019-01-01",
    "Vesa Anttila on toiminut Tyrnävän kunnanjohtajana vuodesta 2019.",
    "Vesa Anttila has served as Municipal Manager of Tyrnävä since 2019."
  )),

  profile(mOfficial("m-413", "tomi-timonen", "Tomi", "Timonen",
    "Kaupunginjohtaja", "City Manager",
    "Pudasjärven kaupunki", "City of Pudasjärvi",
    "2014-01-01",
    "Tomi Timonen on toiminut Pudasjärven kaupunginjohtajana vuodesta 2014.",
    "Tomi Timonen has served as City Manager of Pudasjärvi since 2014."
  )),

  profile(mOfficial("m-414", "mirva-haataja", "Mirva", "Haataja",
    "Kunnanjohtaja", "Municipal Manager",
    "Taivalkosken kunta", "Municipality of Taivalkoski",
    "2023-01-01",
    "Mirva Haataja on toiminut Taivalkosken kunnanjohtajana vuodesta 2023.",
    "Mirva Haataja has served as Municipal Manager of Taivalkoski since 2023."
  )),

  profile(mOfficial("m-415", "matti-soronen", "Matti", "Soronen",
    "Kunnanjohtaja", "Municipal Manager",
    "Pyhäjoen kunta", "Municipality of Pyhäjoki",
    "2010-01-01",
    "Matti Soronen on toiminut Pyhäjoen kunnanjohtajana vuodesta 2010. Toimii nykyisin Pohjois-Pohjanmaan hyvinvointialueen (Pohteen) aluevaltuuston puheenjohtajana.",
    "Matti Soronen has served as Municipal Manager of Pyhäjoki since 2010. He currently serves as chair of the North Ostrobothnia wellbeing region (Pohde) regional council.",
    null, null,
    "Keskusta (KESK). Pohteen aluevaltuuston puheenjohtaja Keskustan ryhmästä.",
    "Centre Party (KESK). Chair of Pohde regional council, Centre Party group."
  )),

  profile(mOfficial("m-416", "henrik-kiviniemi", "Henrik", "Kiviniemi",
    "Kaupunginjohtaja", "City Manager",
    "Pyhäjärven kaupunki", "City of Pyhäjärvi",
    "2022-01-01",
    "Henrik Kiviniemi on toiminut Pyhäjärven kaupunginjohtajana vuodesta 2022.",
    "Henrik Kiviniemi has served as City Manager of Pyhäjärvi since 2022."
  )),

  profile(mOfficial("m-417", "juho-jukkola", "Juho", "Jukkola",
    "Kunnanjohtaja (eronnut 21.1.2026)", "Municipal Manager (resigned 21 Jan 2026)",
    "Kärsämäen kunta", "Municipality of Kärsämäki",
    "2020-01-01",
    "Juho Jukkola toimi Kärsämäen kunnanjohtajana ja erosi tehtävästä 21.1.2026. Tehtävää hoidetaan tällä hetkellä viran toistaiseksi avoinna ollessa.",
    "Juho Jukkola served as Municipal Manager of Kärsämäki and resigned from the position on 21 January 2026. The position is currently being managed in an acting capacity."
  )),

  profile(mOfficial("m-418", "antti-jussi-vahteala", "Antti-Jussi", "Vahteala",
    "Kunnanjohtaja", "Municipal Manager",
    "Sievin kunta", "Municipality of Sievi",
    "2025-01-01",
    "Antti-Jussi Vahteala on toiminut Sievin kunnanjohtajana vuodesta 2025.",
    "Antti-Jussi Vahteala has served as Municipal Manager of Sievi since 2025."
  )),

  profile(mOfficial("m-419", "kari-pentti", "Kari", "Pentti",
    "Kunnanjohtaja", "Municipal Manager",
    "Alavieskan kunta", "Municipality of Alavieska",
    "2019-01-01",
    "Kari Pentti on toiminut Alavieskan kunnanjohtajana vuodesta 2019.",
    "Kari Pentti has served as Municipal Manager of Alavieska since 2019."
  )),

  profile(mOfficial("m-420", "kari-jokela", "Kari", "Jokela",
    "Kunnanjohtaja", "Municipal Manager",
    "Merijärven kunta", "Municipality of Merijärvi",
    "2012-01-01",
    "Kari Jokela on toiminut Merijärven kunnanjohtajana vuodesta 2012.",
    "Kari Jokela has served as Municipal Manager of Merijärvi since 2012."
  )),

  profile(mOfficial("m-421", "samuli-yrjana", "Samuli", "Yrjänä",
    "Kunnanjohtaja", "Municipal Manager",
    "Pyhännän kunta", "Municipality of Pyhäntä",
    "2025-01-01",
    "Samuli Yrjänä on toiminut Pyhännän kunnanjohtajana vuodesta 2025.",
    "Samuli Yrjänä has served as Municipal Manager of Pyhäntä since 2025."
  )),

  profile(mOfficial("m-422", "matias-ojalehto", "Matias", "Ojalehto",
    "Kunnanjohtaja", "Municipal Manager",
    "Reisjärven kunta", "Municipality of Reisjärvi",
    "2024-01-01",
    "Matias Ojalehto on toiminut Reisjärven kunnanjohtajana vuodesta 2024. Aktiivinen Keskustan toimija Oulun kuntatasolla ja Pohjois-Pohjanmaan aluetasolla.",
    "Matias Ojalehto has served as Municipal Manager of Reisjärvi since 2024. Active Centre Party figure at Oulu municipal and North Ostrobothnia regional level.",
    null, null,
    "Keskusta (KESK). Aktiivinen Keskustan toimija Oulun kuntatasolla ja Pohjois-Pohjanmaan aluetasolla.",
    "Centre Party (KESK). Active in the Centre Party at Oulu municipal and North Ostrobothnia regional levels."
  )),

  profile(mOfficial("m-423", "tiina-hovi", "Tiina", "Hovi",
    "Kunnanjohtaja", "Municipal Manager",
    "Siikajoen kunta", "Municipality of Siikajoki",
    "2025-01-01",
    "Tiina Hovi aloitti Siikajoen kunnanjohtajana 1.1.2025.",
    "Tiina Hovi began as Municipal Manager of Siikajoki on 1 January 2025."
  )),

  profile(mOfficial("m-424", "pekka-iivari", "Pekka", "Iivari",
    "Kunnanjohtaja", "Municipal Manager",
    "Siikalatvan kunta", "Municipality of Siikalatva",
    "2024-01-01",
    "Pekka Iivari on toiminut Siikalatvan kunnanjohtajana vuodesta 2024.",
    "Pekka Iivari has served as Municipal Manager of Siikalatva since 2024."
  )),

  profile(mOfficial("m-425", "heidi-soini", "Heidi", "Soini",
    "Kunnanjohtaja", "Municipal Manager",
    "Lumijoen kunta", "Municipality of Lumijoki",
    "2025-12-01",
    "Heidi Soini aloitti Lumijoen kunnanjohtajana 1.12.2025.",
    "Heidi Soini began as Municipal Manager of Lumijoki on 1 December 2025."
  )),

  profile(mOfficial("m-426", "anne-sormunen", "Anne", "Sormunen",
    "Kunnanjohtaja", "Municipal Manager",
    "Utajärven kunta", "Municipality of Utajärvi",
    "2017-08-01",
    "Anne Sormunen on toiminut Utajärven kunnanjohtajana 1.8.2017 alkaen.",
    "Anne Sormunen has served as Municipal Manager of Utajärvi since 1 August 2017."
  )),

  profile(mOfficial("m-427", "minna-karkkainen", "Minna", "Kärkkäinen",
    "Kunnanjohtaja", "Municipal Manager",
    "Vaalan kunta", "Municipality of Vaala",
    "2023-08-01",
    "Minna Kärkkäinen on toiminut Vaalan kunnanjohtajana 1.8.2023 alkaen.",
    "Minna Kärkkäinen has served as Municipal Manager of Vaala since 1 August 2023."
  )),

  profile(mOfficial("m-428", "maarit-alikoski", "Maarit", "Alikoski",
    "Kunnanjohtaja", "Municipal Manager",
    "Hailuodon kunta", "Municipality of Hailuoto",
    "2021-01-01",
    "Maarit Alikoski on toiminut Hailuodon kunnanjohtajana vuodesta 2021. Hailuoto on Suomen ainoa merellinen saaristokunta Perämerellä.",
    "Maarit Alikoski has served as Municipal Manager of Hailuoto since 2021. Hailuoto is Finland's only marine archipelago municipality in the Bay of Bothnia."
  )),
];

// ─── Municipal contact info ───

const citySwitchboards: Record<string, string> = {
  "Helsingin kaupunki": "+358 9 310 1691",
  "Espoon kaupunki": "+358 9 816 21",
  "Vantaan kaupunki": "+358 9 839 11",
  "Tampereen kaupunki": "+358 3 565 611",
  "Oulun kaupunki": "+358 8 558 410",
  "Turun kaupunki": "+358 2 330 000",
  "Jyväskylän kaupunki": "+358 14 266 0000",
  "Kuopion kaupunki": "+358 17 185 111",
  "Lahden kaupunki": "+358 3 814 11",
  "Porin kaupunki": "+358 2 621 1100",
  "Kouvolan kaupunki": "+358 20 615 11",
  "Joensuun kaupunki": "+358 13 267 7111",
  "Lappeenrannan kaupunki": "+358 5 616 11",
  "Hämeenlinnan kaupunki": "+358 3 621 2111",
  "Vaasan kaupunki": "+358 6 325 1111",
  "Rovaniemen kaupunki": "+358 16 322 2111",
  "Seinäjoen kaupunki": "+358 6 416 2111",
  "Mikkelin kaupunki": "+358 15 194 2111",
  "Kotkan kaupunki": "+358 5 234 5000",
  "Salon kaupunki": "+358 2 778 4111",
  "Porvoon kaupunki": "+358 19 520 211",
  "Kokkolan kaupunki": "+358 6 828 9111",
  "Hyvinkään kaupunki": "+358 19 459 11",
  "Lohjan kaupunki": "+358 19 369 1",
  "Järvenpään kaupunki": "+358 9 27 191",
  "Rauman kaupunki": "+358 2 834 3111",
  "Kajaanin kaupunki": "+358 8 615 5111",
  "Sotkamon kunta": "+358 8 615 5811",
  "Kuhmon kaupunki": "+358 8 615 5521",
  "Suomussalmen kunta": "+358 8 615 6811",
  "Paltamon kunta": "+358 8 615 5401",
  "Puolangan kunta": "+358 8 615 6611",
  "Hyrynsalmen kunta": "+358 8 615 5001",
  "Ristijärven kunta": "+358 8 615 5201",
  // Lappi
  "Tornion kaupunki": "+358 16 432 111",
  "Kemin kaupunki": "+358 16 259 111",
  "Kemijärven kaupunki": "+358 16 810 111",
  "Sodankylän kunta": "+358 16 617 111",
  "Inarin kunta": "+358 16 687 111",
  "Kittilän kunta": "+358 16 644 111",
  "Enontekiön kunta": "+358 16 556 111",
  "Kolarin kunta": "+358 16 561 111",
  "Muonion kunta": "+358 16 532 111",
  "Pellon kunta": "+358 16 557 111",
  "Sallan kunta": "+358 16 689 111",
  "Ranuan kunta": "+358 16 355 111",
  "Posion kunta": "+358 16 531 111",
  "Savukosken kunta": "+358 16 841 111",
  "Pelkosenniemen kunta": "+358 16 856 111",
  "Utsjoen kunta": "+358 16 677 111",
  "Simon kunta": "+358 16 269 111",
  "Keminmaan kunta": "+358 16 450 111",
  "Tervolan kunta": "+358 16 451 111",
  "Ylitornion kunta": "+358 16 565 111",
  "Savonlinnan kaupunki": "+358 15 571 7300",
  "Keravan kaupunki": "+358 9 294 91",
  "Nokian kaupunki": "+358 3 365 1311",
};

const cityEmailDomains: Record<string, string> = {
  "Helsingin kaupunki": "hel.fi",
  "Espoon kaupunki": "espoo.fi",
  "Vantaan kaupunki": "vantaa.fi",
  "Tampereen kaupunki": "tampere.fi",
  "Oulun kaupunki": "ouka.fi",
  "Turun kaupunki": "turku.fi",
  "Jyväskylän kaupunki": "jyvaskyla.fi",
  "Kuopion kaupunki": "kuopio.fi",
  "Lahden kaupunki": "lahti.fi",
  "Porin kaupunki": "pori.fi",
  "Kouvolan kaupunki": "kouvola.fi",
  "Joensuun kaupunki": "joensuu.fi",
  "Lappeenrannan kaupunki": "lappeenranta.fi",
  "Hämeenlinnan kaupunki": "hameenlinna.fi",
  "Vaasan kaupunki": "vaasa.fi",
  "Rovaniemen kaupunki": "rovaniemi.fi",
  "Seinäjoen kaupunki": "seinajoki.fi",
  "Mikkelin kaupunki": "mikkeli.fi",
  "Kotkan kaupunki": "kotka.fi",
  "Salon kaupunki": "salo.fi",
  "Porvoon kaupunki": "porvoo.fi",
  "Kokkolan kaupunki": "kokkola.fi",
  "Hyvinkään kaupunki": "hyvinkaa.fi",
  "Lohjan kaupunki": "lohja.fi",
  "Järvenpään kaupunki": "jarvenpaa.fi",
  "Rauman kaupunki": "rauma.fi",
  "Kajaanin kaupunki": "kajaani.fi",
  "Sotkamon kunta": "sotkamo.fi",
  "Kuhmon kaupunki": "kuhmo.fi",
  "Suomussalmen kunta": "suomussalmi.fi",
  "Paltamon kunta": "paltamo.fi",
  "Puolangan kunta": "puolanka.fi",
  "Hyrynsalmen kunta": "hyrynsalmi.fi",
  "Ristijärven kunta": "ristijarvi.fi",
  // Lappi
  "Tornion kaupunki": "tornio.fi",
  "Kemin kaupunki": "kemi.fi",
  "Kemijärven kaupunki": "kemijarvi.fi",
  "Sodankylän kunta": "sodankyla.fi",
  "Inarin kunta": "inari.fi",
  "Kittilän kunta": "kittila.fi",
  "Enontekiön kunta": "enontekio.fi",
  "Kolarin kunta": "kolari.fi",
  "Muonion kunta": "muonio.fi",
  "Pellon kunta": "pello.fi",
  "Sallan kunta": "salla.fi",
  "Ranuan kunta": "ranua.fi",
  "Posion kunta": "posio.fi",
  "Savukosken kunta": "savukoski.fi",
  "Pelkosenniemen kunta": "pelkosenniemi.fi",
  "Utsjoen kunta": "utsjoki.fi",
  "Simon kunta": "simo.fi",
  "Keminmaan kunta": "keminmaa.fi",
  "Tervolan kunta": "tervola.fi",
  "Ylitornion kunta": "ylitornio.fi",
  "Savonlinnan kaupunki": "savonlinna.fi",
  "Keravan kaupunki": "kerava.fi",
  "Nokian kaupunki": "nokia.fi",
};

function finnishEmailName(name: string): string {
  return name.toLowerCase()
    .replace(/ä/g, "a").replace(/ö/g, "o").replace(/å/g, "a")
    .replace(/ü/g, "u").replace(/é/g, "e")
    .replace(/ /g, ".").replace(/-/g, ".");
}

// Apply contact info to municipal officials
for (const p of municipalProfiles) {
  const o = p.official;
  const domain = cityEmailDomains[o.organization_fi];
  if (domain && !o.email) {
    o.email = `${finnishEmailName(o.first_name)}.${finnishEmailName(o.last_name)}@${domain}`;
  }
  const phone = citySwitchboards[o.organization_fi];
  if (phone && !o.phone) {
    o.phone = phone;
  }
}

// Total municipality count for stats
export const TOTAL_MUNICIPALITIES = MUNICIPALITIES.reduce((sum, r) => sum + r.municipalities.length, 0);
