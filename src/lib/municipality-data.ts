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
  phone: string | null = null
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
    "Jari Tolonen on toiminut Kajaanin kaupunginjohtajana vuodesta 2015.",
    "Jari Tolonen has served as City Manager of Kajaani since 2015."
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
    "Paula Halonen toimii Kajaanin hallintojohtajana ja kaupunginlakimiehenä.",
    "Paula Halonen serves as Administrative Director and City Lawyer of Kajaani.",
    "paula.halonen@kajaani.fi", "040 198 5857"
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
    "Mika Kilpeläinen toimii Sotkamon kunnanjohtajana. Sotkamo tunnetaan Vuokatin matkailukeskuksesta.",
    "Mika Kilpeläinen serves as Municipal Manager of Sotkamo. Sotkamo is known for the Vuokatti tourism resort.",
    "mika.kilpelainen@sotkamo.fi", "044 750 2111"
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
    "Juhana Juntunen toimii Kuhmon kaupunginjohtajana. Kuhmo tunnetaan kamarimusiikkijuhlistaan.",
    "Juhana Juntunen serves as City Manager of Kuhmo. Kuhmo is known for its Chamber Music Festival.",
    "juhana.juntunen@kuhmo.fi", "044 7255 222"
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
    "marjut.kyllonen@kuhmo.fi", null
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
    "Erno Heikkinen toimii Suomussalmen kunnanjohtajana.",
    "Erno Heikkinen serves as Municipal Manager of Suomussalmi.",
    "erno.heikkinen@suomussalmi.fi", "044 777 3344"
  )),

  profile(mOfficial("m-231", "antton-vuolle", "Antton", "Vuolle",
    "Vs. hallintojohtaja", "Acting Administrative Director",
    "Suomussalmen kunta", "Municipality of Suomussalmi",
    "2024-01-01",
    "Antton Vuolle toimii Suomussalmen vs. hallintojohtajana.",
    "Antton Vuolle serves as Acting Administrative Director of Suomussalmi.",
    "antton.vuolle@suomussalmi.fi", "040 688 4499"
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
    "niina.kinnunen@suomussalmi.fi", "044 777 3380"
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
    "Pasi Ahoniemi toimii Paltamon kunnanjohtajana.",
    "Pasi Ahoniemi serves as Municipal Manager of Paltamo.",
    "pasi.ahoniemi@paltamo.fi", "044 750 0001"
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
    "helena.hynynen@paltamo.fi", "044 288 5400"
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
    "Harri Peltola toimii Puolangan kunnanjohtajana.",
    "Harri Peltola serves as Municipal Manager of Puolanka.",
    "harri.peltola@puolanka.fi", null
  )),

  profile(mOfficial("m-251", "piia-heikkinen", "Piia", "Heikkinen",
    "Hallintojohtaja", "Administrative Director",
    "Puolangan kunta", "Municipality of Puolanka",
    "2020-01-01",
    "Piia Heikkinen toimii Puolangan hallintojohtajana.",
    "Piia Heikkinen serves as Administrative Director of Puolanka.",
    "piia.heikkinen@puolanka.fi", "040 575 0586"
  )),

  profile(mOfficial("m-252", "tuula-vaisanen", "Tuula", "Väisänen",
    "Vs. sivistysjohtaja", "Acting Education Director",
    "Puolangan kunta", "Municipality of Puolanka",
    "2023-01-01",
    "Tuula Väisänen toimii Puolangan vs. sivistysjohtajana.",
    "Tuula Väisänen serves as Acting Education Director of Puolanka.",
    "tuula.vaisanen@puolanka.fi", "040 740 2567"
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
    "Heimo Keränen toimii Hyrynsalmen kunnanjohtajana.",
    "Heimo Keränen serves as Municipal Manager of Hyrynsalmi.",
    "heimo.keranen@hyrynsalmi.fi", "044 7104 400"
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

  profile(mOfficial("m-270", "petteri-seppanen", "Petteri", "Seppänen",
    "Kunnanjohtaja", "Municipal Manager",
    "Ristijärven kunta", "Municipality of Ristijärvi",
    "2019-01-01",
    "Petteri Seppänen toimii Ristijärven kunnanjohtajana.",
    "Petteri Seppänen serves as Municipal Manager of Ristijärvi.",
    "petteri.seppanen@ristijarvi.fi", "044 715 9300"
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

  // ─── Kajaani kaupunginvaltuusto (51 seats, leadership) ───

  profile(mCouncil("c-k-1", "peppiina-hakkarainen", "Peppiina", "Hakkarainen",
    "Kaupunginvaltuuston puheenjohtaja", "City Council Chair",
    "Kajaanin kaupunki", "City of Kajaani", "VAS"
  )),
  profile(mCouncil("c-k-2", "helena-ohtonen", "Helena", "Ohtonen",
    "Kaupunginvaltuuston 1. varapuheenjohtaja", "City Council 1st Vice Chair",
    "Kajaanin kaupunki", "City of Kajaani", "SDP"
  )),
  profile(mCouncil("c-k-3", "paavo-enroth", "Paavo", "Enroth",
    "Kaupunginvaltuuston 2. varapuheenjohtaja", "City Council 2nd Vice Chair",
    "Kajaanin kaupunki", "City of Kajaani", "KOK"
  )),

  // ─── Sotkamo kunnanvaltuusto (27 seats, leadership) ───

  profile(mCouncil("c-s-1", "anne-lukkari", "Anne", "Lukkari",
    "Kunnanvaltuuston puheenjohtaja", "Municipal Council Chair",
    "Sotkamon kunta", "Municipality of Sotkamo", "KESK"
  )),
  profile(mCouncil("c-s-kj", "mika-kilpelainen-v", "Mika", "Kilpeläinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Sotkamon kunta", "Municipality of Sotkamo", "KESK"
  )),

  // ─── Kuhmo kaupunginvaltuusto (27 seats) ───

  profile(mCouncil("c-ku-kj", "juhana-juntunen-v", "Juhana", "Juntunen",
    "Kaupunginvaltuutettu", "City Councillor",
    "Kuhmon kaupunki", "City of Kuhmo", "KESK"
  )),

  // ─── Suomussalmi kunnanvaltuusto (27 seats) ───

  profile(mCouncil("c-su-kj", "erno-heikkinen-v", "Erno", "Heikkinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Suomussalmen kunta", "Municipality of Suomussalmi", "KESK"
  )),

  // ─── Paltamo kunnanvaltuusto (21 seats, leadership) ───

  profile(mCouncil("c-pa-1", "aaro-tolonen-v", "Aaro", "Tolonen",
    "Kunnanvaltuuston puheenjohtaja", "Municipal Council Chair",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  profile(mCouncil("c-pa-2", "juha-riipinen", "Juha", "Riipinen",
    "Kunnanvaltuuston 1. varapuheenjohtaja", "Municipal Council 1st Vice Chair",
    "Paltamon kunta", "Municipality of Paltamo", "VAS"
  )),
  profile(mCouncil("c-pa-3", "mari-mottonen", "Mari", "Möttönen",
    "Kunnanvaltuuston 2. varapuheenjohtaja", "Municipal Council 2nd Vice Chair",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
  )),
  profile(mCouncil("c-pa-kj", "pasi-ahoniemi-v", "Pasi", "Ahoniemi",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Paltamon kunta", "Municipality of Paltamo", "KESK"
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

  // ─── Hyrynsalmi kunnanvaltuusto (19 seats, partial) ───

  profile(mCouncil("c-h-1", "johanna-sorri", "Johanna", "Sorri",
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
  profile(mCouncil("c-h-10", "kati-kaartinen", "Kati", "Kaartinen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "KESK"
  )),
  profile(mCouncil("c-h-kj", "heimo-keranen-v", "Heimo", "Keränen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Hyrynsalmen kunta", "Municipality of Hyrynsalmi", "KESK"
  )),

  // ─── Ristijärvi kunnanvaltuusto (15 seats) ───

  profile(mCouncil("c-ri-kj", "petteri-seppanen-v", "Petteri", "Seppänen",
    "Kunnanvaltuutettu", "Municipal Councillor",
    "Ristijärven kunta", "Municipality of Ristijärvi", "KESK"
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
