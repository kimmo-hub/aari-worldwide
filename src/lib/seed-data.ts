import type {
  Official,
  PreviousRole,
  Affiliation,
  PublicStatement,
  PolicyArea,
  FeedbackAggregation,
  OfficialProfile,
} from "@/types/database";
import { municipalProfiles, MUNICIPALITIES, TOTAL_MUNICIPALITIES } from "./municipality-data";

export { MUNICIPALITIES, TOTAL_MUNICIPALITIES };

// ─── Policy areas ───

export const policyAreas: PolicyArea[] = [
  {
    id: "pa-1",
    name_fi: "Talouspolitiikka",
    name_en: "Economic policy",
    slug: "economic-policy",
    description_fi: "Julkisen talouden suunnittelu ja hallinta",
    description_en: "Public finance planning and management",
  },
  {
    id: "pa-2",
    name_fi: "Digitalisaatio",
    name_en: "Digitalization",
    slug: "digitalization",
    description_fi: "Julkisten palveluiden digitalisointi",
    description_en: "Digitalization of public services",
  },
  {
    id: "pa-3",
    name_fi: "Hallintopolitiikka",
    name_en: "Administrative policy",
    slug: "administrative-policy",
    description_fi: "Julkishallinnon rakenteet ja prosessit",
    description_en: "Public administration structures and processes",
  },
  {
    id: "pa-4",
    name_fi: "Lainsäädäntö",
    name_en: "Legislation",
    slug: "legislation",
    description_fi: "Lakien valmistelu ja säädöspolitiikka",
    description_en: "Legislative preparation and regulatory policy",
  },
  {
    id: "pa-5",
    name_fi: "Ympäristöpolitiikka",
    name_en: "Environmental policy",
    slug: "environmental-policy",
    description_fi: "Ympäristönsuojelu ja kestävä kehitys",
    description_en: "Environmental protection and sustainable development",
  },
  {
    id: "pa-6",
    name_fi: "Koulutuspolitiikka",
    name_en: "Education policy",
    slug: "education-policy",
    description_fi: "Koulutuksen kehittäminen ja tutkimuspolitiikka",
    description_en: "Education development and research policy",
  },
  {
    id: "pa-7",
    name_fi: "Turvallisuuspolitiikka",
    name_en: "Security policy",
    slug: "security-policy",
    description_fi: "Sisäinen ja ulkoinen turvallisuus",
    description_en: "Internal and external security",
  },
  {
    id: "pa-8",
    name_fi: "Sosiaali- ja terveyspolitiikka",
    name_en: "Social and health policy",
    slug: "social-health-policy",
    description_fi: "Sosiaaliturva, terveydenhuolto ja hyvinvointi",
    description_en: "Social security, healthcare, and welfare",
  },
  {
    id: "pa-9",
    name_fi: "Liikenne- ja viestintäpolitiikka",
    name_en: "Transport and communications policy",
    slug: "transport-communications-policy",
    description_fi: "Liikenne, viestintä ja infrastruktuuri",
    description_en: "Transport, communications, and infrastructure",
  },
  {
    id: "pa-10",
    name_fi: "Elinkeinopolitiikka",
    name_en: "Industrial policy",
    slug: "industrial-policy",
    description_fi: "Elinkeinoelämän edistäminen ja työllisyys",
    description_en: "Business development and employment",
  },
  {
    id: "pa-11",
    name_fi: "Rakentaminen ja maankäyttö",
    name_en: "Building and land use",
    slug: "building-land-use",
    description_fi: "Rakennusluvat, kaavoitus ja maankäytön suunnittelu",
    description_en: "Building permits, zoning, and land use planning",
  },
  {
    id: "pa-12",
    name_fi: "Kuntapalvelut",
    name_en: "Municipal services",
    slug: "municipal-services",
    description_fi: "Kuntahallinto ja kuntalaispalvelut",
    description_en: "Municipal administration and citizen services",
  },
  {
    id: "pa-13",
    name_fi: "Asuminen",
    name_en: "Housing",
    slug: "housing",
    description_fi: "Asuntopolitiikka, vuokravalvonta ja asumisen kehittäminen",
    description_en: "Housing policy, rental oversight, and housing development",
  },
  {
    id: "pa-14",
    name_fi: "Elinkeinoluvat",
    name_en: "Business permits",
    slug: "business-permits",
    description_fi: "Anniskeluluvat, tapahtumailmoitukset ja elinkeinoluvat",
    description_en: "Alcohol licenses, event permits, and business registrations",
  },
  {
    id: "pa-15",
    name_fi: "Infrastruktuuri",
    name_en: "Infrastructure",
    slug: "infrastructure",
    description_fi: "Tiet, vesihuolto, jätehuolto ja yhdyskuntarakenne",
    description_en: "Roads, water, waste management, and urban infrastructure",
  },
];

// ─── Helper to create an official ───

function official(
  id: string,
  slug: string,
  firstName: string,
  lastName: string,
  titleFi: string,
  titleEn: string,
  orgFi: string,
  orgEn: string,
  appointmentDate: string,
  appointedByFi: string,
  appointedByEn: string,
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
    appointed_by_fi: appointedByFi,
    appointed_by_en: appointedByEn,
    bio_fi: bioFi,
    bio_en: bioEn,
    email,
    phone,
    category: "state",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2026-04-01T00:00:00Z",
  };
}

// ══════════════════════════════════════════════
// MINISTRY PERMANENT SECRETARIES (Kansliapäälliköt)
// ══════════════════════════════════════════════

const allProfiles: OfficialProfile[] = [
  // 1. Valtioneuvoston kanslia — Timo Lankinen
  {
    official: official(
      "o-1",
      "timo-lankinen",
      "Timo",
      "Lankinen",
      "Alivaltiosihteeri kansliapäällikkönä",
      "Permanent State Under-Secretary",
      "Valtioneuvoston kanslia",
      "Prime Minister's Office",
      "2012-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Timo Lankinen toimii valtioneuvoston kanslian korkeimpana viranhaltijana alivaltiosihteerinä. Hän on johtanut kanslian hallintoa vuodesta 2012.",
      "Timo Lankinen serves as the highest permanent civil servant at the Prime Minister's Office. He has led the office's administration since 2012."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 2. Ulkoministeriö — Jukka Salovaara

  // 2. Ulkoministeriö — Jukka Salovaara
  {
    official: official(
      "o-2",
      "jukka-salovaara",
      "Jukka",
      "Salovaara",
      "Valtiosihteeri kansliapäällikkönä",
      "Permanent State Secretary",
      "Ulkoministeriö",
      "Ministry for Foreign Affairs",
      "2022-05-01",
      "Valtioneuvosto",
      "Council of State",
      "Jukka Salovaara toimii ulkoministeriön kansliapäällikkönä. Hän nimitettiin tehtävään marraskuussa 2021 ja aloitti toukokuussa 2022. Kausi päättyy elokuussa 2026.",
      "Jukka Salovaara serves as Permanent State Secretary at the Ministry for Foreign Affairs. He was appointed in November 2021 and took office in May 2022. His term ends in August 2026."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 3. Oikeusministeriö — Antti Leinonen
  {
    official: official(
      "o-3",
      "antti-leinonen",
      "Antti",
      "Leinonen",
      "Kansliapäällikkö",
      "Permanent Secretary",
      "Oikeusministeriö",
      "Ministry of Justice",
      "2025-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Antti Leinonen aloitti oikeusministeriön kansliapäällikkönä tammikuussa 2025. Hän seurasi tehtävässä Pekka Timosta.",
      "Antti Leinonen took office as Permanent Secretary of the Ministry of Justice in January 2025, succeeding Pekka Timonen."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [
      {
        id: "ps-lei-1",
        official_id: "o-3",
        title_fi: "\"Vakauden ja asiantuntemuksen säilyttäminen on ensiarvoisen tärkeää\"",
        title_en: "\"Maintaining stability and expertise is of paramount importance\"",
        summary_fi: "Kansliapäällikkö Leinonen korosti Advokaatti-lehdessä oikeusvaltion periaatteiden ja oikeuslaitoksen riippumattomuuden merkitystä. Hän painotti asiantuntemuksen säilyttämistä ministeriön toiminnassa.",
        summary_en: "Permanent Secretary Leinonen emphasized in Advokaatti magazine the importance of rule of law principles and judicial independence. He stressed maintaining expertise in the ministry's operations.",
        date: "2025-02-24",
        policy_area_id: "pa-4",
        source_url: "https://advokaatti.fi/2025/02/24/oikeusministerion-kansliapaallikko-antti-leinonen-vakauden-ja-asiantuntemuksen-sailyttaminen-on-ensiarvoisen-tarkeaa/",
        source_name: "Advokaatti",
      },
      {
        id: "ps-lei-2",
        official_id: "o-3",
        title_fi: "Tuomioistuimet ovat kiristäneet rangaistuskäytäntöään",
        title_en: "Courts have tightened their sentencing practices",
        summary_fi: "Kansliapäällikkö Leinonen kommentoi vankimäärän kasvua ja totesi, että tuomioistuimet näyttävät kiristäneen rangaistuskäytäntöään. Hän nosti esiin vankipaikkojen riittävyyden haasteen.",
        summary_en: "Permanent Secretary Leinonen commented on the growth of prisoner numbers and stated that courts appear to have tightened their sentencing practices. He raised the challenge of prison capacity sufficiency.",
        date: "2025-01-01",
        policy_area_id: "pa-4",
        source_url: "https://www.mtvuutiset.fi/artikkeli/kansliapaallikko-vankimaaran-kasvusta-tuomioistuimet-ovat-kiristaneet-rangaistuskaytantoaan/9166800",
        source_name: "MTV Uutiset",
      },
    ],
    feedback: [],
  },

  // 4. Sisäministeriö — Matti Sarasmaa
  {
    official: official(
      "o-4",
      "matti-sarasmaa",
      "Matti",
      "Sarasmaa",
      "Kansliapäällikkö",
      "Permanent Secretary",
      "Sisäministeriö",
      "Ministry of the Interior",
      "2025-02-01",
      "Valtioneuvosto",
      "Council of State",
      "Matti Sarasmaa nimitettiin sisäministeriön kansliapäälliköksi joulukuussa 2024 ja aloitti helmikuussa 2025. Viiden vuoden toimikausi.",
      "Matti Sarasmaa was appointed Permanent Secretary of the Ministry of the Interior in December 2024, taking office in February 2025 for a five-year term."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [
      {
        id: "ps-sar-1",
        official_id: "o-4",
        title_fi: "Sisäministeriö organisoi kansallisen turvallisuuden yksikön tehtävät uudelleen",
        title_en: "Ministry of the Interior reorganises national security unit tasks",
        summary_fi: "Kansliapäällikkö Sarasmaan johdolla sisäministeriö organisoi kansallisen turvallisuuden yksikön tehtävät uudelleen osana turvallisuushallinnon kehittämistä.",
        summary_en: "Under Permanent Secretary Sarasmaa's leadership, the Ministry of the Interior reorganised the national security unit's tasks as part of developing security administration.",
        date: "2025-03-01",
        policy_area_id: "pa-7",
        source_url: "https://intermin.fi/-/sisaministerio-organisoi-kansallisen-turvallisuuden-yksikon-tehtavat-uudelleen",
        source_name: "Sisäministeriö",
      },
    ],
    feedback: [],
  },

  // 5. Puolustusministeriö — Janne Kuusela
  {
    official: official(
      "o-5",
      "janne-kuusela",
      "Janne",
      "Kuusela",
      "Kansliapäällikkö",
      "Permanent Secretary",
      "Puolustusministeriö",
      "Ministry of Defence",
      "2026-02-01",
      "Valtioneuvosto",
      "Council of State",
      "Janne Kuusela nimitettiin puolustusministeriön kansliapäälliköksi marraskuussa 2025. Hän aloitti tehtävässä helmikuussa 2026 ja toimikausi kestää tammikuuhun 2031. Hän seurasi Esa Pulkkista.",
      "Janne Kuusela was appointed Permanent Secretary of the Ministry of Defence in November 2025. He took office in February 2026 for a term until January 2031, succeeding Esa Pulkkinen."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 6. Valtiovarainministeriö — Juha Majanen
  {
    official: official(
      "o-6",
      "juha-majanen",
      "Juha",
      "Majanen",
      "Valtiosihteeri kansliapäällikkönä",
      "State Secretary as Permanent Secretary",
      "Valtiovarainministeriö",
      "Ministry of Finance",
      "2020-04-01",
      "Valtioneuvosto",
      "Council of State",
      "Juha Majanen toimii valtiovarainministeriön kansliapäällikkönä. Hän on ollut tehtävässä vuodesta 2020 ja hänet nimitettiin uudelleen marraskuussa 2025 kaudelle 2026–2031.",
      "Juha Majanen serves as State Secretary and Permanent Secretary at the Ministry of Finance. He has been in the role since 2020 and was reappointed in November 2025 for the term 2026–2031."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [
      {
        id: "ps-maj-1",
        official_id: "o-6",
        title_fi: "Kestävä julkinen talous vaatii pitkäjänteistä työtä",
        title_en: "Sustainable Public Finances Require Long-Term Work",
        summary_fi: "Kansliapäällikkö Majanen esitti, että Suomen julkista taloutta on vahvistettava yhdeksällä miljardilla eurolla kahdella seuraavalla vaalikaudella. Puolustusmenojen kasvu ja velanhoitokustannukset vaikuttavat merkittävästi näkymiin.",
        summary_en: "Permanent Secretary Majanen stated that Finland's public finances need to be strengthened by 9 billion euros over the next two electoral terms. Defense spending growth and debt servicing costs significantly impact the outlook.",
        date: "2024-01-01",
        policy_area_id: "pa-1",
        source_url: "https://vm.fi/-/kestava-julkinen-talous-vaatii-pitkajanteista-tyota",
        source_name: "Valtiovarainministeriö",
      },
      {
        id: "ps-maj-2",
        official_id: "o-6",
        title_fi: "\"Suomi on alisuoriutuja, mutta potentiaalimme huikea\"",
        title_en: "\"Finland is an underperformer, but our potential is enormous\"",
        summary_fi: "Majanen totesi Kuntarahoituksen tilaisuudessa, että Suomi ja Eurooppa ovat olleet alisuoriutujia, mutta potentiaali on huikea. Hän korosti Suomen osaamista, tutkimussatsauksia, vakaata yhteiskuntaa ja ennustettavaa verotusta.",
        summary_en: "Majanen stated at a Municipality Finance event that Finland and Europe have been underperformers, but the potential is enormous. He highlighted Finland's expertise, research investments, stable society, and predictable taxation.",
        date: "2024-01-01",
        policy_area_id: "pa-1",
        source_url: "https://www.kuntarahoitus.fi/ajankohtaista/juha-majanen-nakee-syita-optimismiin",
        source_name: "Kuntarahoitus",
      },
      {
        id: "ps-maj-3",
        official_id: "o-6",
        title_fi: "\"Me teemme tietysti virkavastuulla\" — vastaus kritiikkiin vaikutusarvioista",
        title_en: "\"We work under official responsibility\" — response to criticism of impact assessments",
        summary_fi: "Majanen puolustautui kritiikkiä vastaan todeten: \"Meille on tärkeää, ettei vaikutusarvioihimme voi vaikuttaa poliittisesti.\" Hän korosti, että ministeriön vaikutusarviot tehdään virkavastuulla ja riippumattomasti.",
        summary_en: "Majanen defended the ministry's impact assessments, stating: \"It is important to us that our impact assessments cannot be influenced politically.\" He emphasized that assessments are made under official responsibility and independently.",
        date: "2024-01-01",
        policy_area_id: "pa-3",
        source_url: "https://yle.fi/a/74-20161955",
        source_name: "Yle",
      },
    ],
    feedback: [],
  },

  // 7. Opetus- ja kulttuuriministeriö — Heidi Backman
  {
    official: official(
      "o-7",
      "heidi-backman",
      "Heidi",
      "Backman",
      "Kansliapäällikkö",
      "Permanent Secretary",
      "Opetus- ja kulttuuriministeriö",
      "Ministry of Education and Culture",
      "2025-08-04",
      "Valtioneuvosto",
      "Council of State",
      "Heidi Backman nimitettiin opetus- ja kulttuuriministeriön kansliapäälliköksi kesäkuussa 2025 ja aloitti elokuussa 2025. Hän seurasi Anita Lehikoista, joka toimi tehtävässä 2013–2025.",
      "Heidi Backman was appointed Permanent Secretary of the Ministry of Education and Culture in June 2025, taking office in August 2025. She succeeded Anita Lehikoinen, who served from 2013 to 2025."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 8. Maa- ja metsätalousministeriö — Pekka Pesonen
  {
    official: official(
      "o-8",
      "pekka-pesonen",
      "Pekka",
      "Pesonen",
      "Kansliapäällikkö",
      "Permanent Secretary",
      "Maa- ja metsätalousministeriö",
      "Ministry of Agriculture and Forestry",
      "2024-02-01",
      "Valtioneuvosto",
      "Council of State",
      "Pekka Pesonen nimitettiin maa- ja metsätalousministeriön kansliapäälliköksi tammikuussa 2024. Toimikausi kestää tammikuuhun 2029.",
      "Pekka Pesonen was appointed Permanent Secretary of the Ministry of Agriculture and Forestry in January 2024 for a term until January 2029."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 9. Liikenne- ja viestintäministeriö — Anna-Mari Ahonen
  {
    official: official(
      "o-9",
      "anna-mari-ahonen",
      "Anna-Mari",
      "Ahonen",
      "Kansliapäällikkö",
      "Permanent Secretary",
      "Liikenne- ja viestintäministeriö",
      "Ministry of Transport and Communications",
      "2026-03-16",
      "Valtioneuvosto",
      "Council of State",
      "Anna-Mari Ahonen nimitettiin liikenne- ja viestintäministeriön kansliapäälliköksi maaliskuussa 2026. Toimikausi kestää maaliskuuhun 2031.",
      "Anna-Mari Ahonen was appointed Permanent Secretary of the Ministry of Transport and Communications in March 2026 for a term until March 2031."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 10. Työ- ja elinkeinoministeriö — Timo Jaatinen
  {
    official: official(
      "o-10",
      "timo-jaatinen",
      "Timo",
      "Jaatinen",
      "Kansliapäällikkö",
      "Permanent Secretary",
      "Työ- ja elinkeinoministeriö",
      "Ministry of Economic Affairs and Employment",
      "2023-11-06",
      "Valtioneuvosto",
      "Council of State",
      "Timo Jaatinen nimitettiin työ- ja elinkeinoministeriön kansliapäälliköksi lokakuussa 2023. Toimikausi kestää marraskuuhun 2028.",
      "Timo Jaatinen was appointed Permanent Secretary of the Ministry of Economic Affairs and Employment in October 2023 for a term until November 2028."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [
      {
        id: "ps-jaa-1",
        official_id: "o-10",
        title_fi: "TEM:n irtisanomiset ja henkilöstövähennykset",
        title_en: "Ministry of Economic Affairs layoffs and staff reductions",
        summary_fi: "Kansliapäällikkö Jaatinen johtaa työ- ja elinkeinoministeriön organisaatiouudistusta, johon liittyy merkittäviä henkilöstövähennyksiä osana hallituksen säästötoimia.",
        summary_en: "Permanent Secretary Jaatinen is leading the organizational reform of the Ministry of Economic Affairs and Employment, involving significant staff reductions as part of government austerity measures.",
        date: "2024-01-01",
        policy_area_id: "pa-10",
        source_url: "https://valtioneuvosto.fi/en/-/1410877/ministry-of-economic-affairs-and-employment",
        source_name: "Valtioneuvosto",
      },
    ],
    feedback: [],
  },

  // 11. Sosiaali- ja terveysministeriö — Veli-Mikko Niemi
  {
    official: official(
      "o-11",
      "veli-mikko-niemi",
      "Veli-Mikko",
      "Niemi",
      "Kansliapäällikkö",
      "Permanent Secretary",
      "Sosiaali- ja terveysministeriö",
      "Ministry of Social Affairs and Health",
      "2022-08-15",
      "Valtioneuvosto",
      "Council of State",
      "Veli-Mikko Niemi toimii sosiaali- ja terveysministeriön kansliapäällikkönä elokuusta 2022. Hän seurasi tehtävässä Kirsi Varhilaa.",
      "Veli-Mikko Niemi has served as Permanent Secretary of the Ministry of Social Affairs and Health since August 2022, succeeding Kirsi Varhila."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [
      {
        id: "ps-nie-1",
        official_id: "o-11",
        title_fi: "Ikäihmisten kotihoitoon tarvitaan lisää lääkäripalveluja",
        title_en: "Elderly home care needs more doctor services",
        summary_fi: "Niemi totesi, että ikäihmisten kotihoitoon tarvitaan lisää lääkäripalveluja. Hänen mukaansa ympärivuorokautisia hoivapaikkoja on riittävästi, mutta kotihoitoa on parannettava.",
        summary_en: "Niemi stated that elderly home care needs more doctor services. According to him, there are sufficient around-the-clock care places, but home care needs to be improved.",
        date: "2022-08-15",
        policy_area_id: "pa-8",
        source_url: "https://yle.fi/a/3-12596226",
        source_name: "Yle",
      },
      {
        id: "ps-nie-2",
        official_id: "o-11",
        title_fi: "Lausunto verolakien muuttamisesta",
        title_en: "Statement on amending tax laws",
        summary_fi: "Kansliapäällikkö Niemi allekirjoitti STM:n lausunnon valtiovarainministeriölle hallituksen esityksestä tuloverolaista ja muista verolaeista. Lausunto käsitteli sosiaali- ja terveyspoliittisia vaikutuksia.",
        summary_en: "Permanent Secretary Niemi signed STM's statement to the Ministry of Finance on the government proposal for income tax and other tax laws, addressing social and health policy impacts.",
        date: "2024-12-19",
        policy_area_id: "pa-8",
        source_url: "https://api.hankeikkuna.fi/asiakirjat/f9ce7e1d-c439-4c4d-b264-a33fc4e03ca9/b01756ab-b46e-4d84-8f76-6ab9e785ac5e/LAUSUNTO_20250107123006.PDF",
        source_name: "Lausuntopalvelu",
      },
    ],
    feedback: [],
  },

  // 12. Ympäristöministeriö — Juhani Damski
  {
    official: official(
      "o-12",
      "juhani-damski",
      "Juhani",
      "Damski",
      "Kansliapäällikkö",
      "Permanent Secretary",
      "Ympäristöministeriö",
      "Ministry of the Environment",
      "2020-06-01",
      "Valtioneuvosto",
      "Council of State",
      "Juhani Damski toimii ympäristöministeriön kansliapäällikkönä. Hänet nimitettiin uudelleen kaudelle 2025–2030. Damski on filosofian tohtori ja toimi aiemmin Ilmatieteen laitoksen pääjohtajana.",
      "Juhani Damski serves as Permanent Secretary of the Ministry of the Environment, reappointed for the term 2025–2030. He holds a doctorate in philosophy and previously served as Director General of the Finnish Meteorological Institute."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [
      {
        id: "ps-dam-1",
        official_id: "o-12",
        title_fi: "Ennallistamissuunnitelmassa huomioidaan laajasti yhteiskunnalliset tavoitteet",
        title_en: "Restoration plan broadly considers societal objectives",
        summary_fi: "Damski totesi ohjausryhmän puheenjohtajana, että kansallisen ennallistamissuunnitelman valmistelussa on kuultava kansalaisia ja sidosryhmiä. \"Vain näin voidaan varmistaa, että asetuksen kunnianhimoiset luontotavoitteet toteutetaan yhteiskunnallisesti hyväksyttävällä tavalla.\"",
        summary_en: "As chair of the steering group, Damski stated that preparation of the national restoration plan must include hearing citizens and stakeholders. \"Only this way can we ensure that the regulation's ambitious nature goals are implemented in a socially acceptable way.\"",
        date: "2024-01-01",
        policy_area_id: "pa-5",
        source_url: "https://mmm.fi/-/1410903/ennallistamissuunnitelmassa-huomioidaan-laajasti-yhteiskunnalliset-tavoitteet-toimia-valmistellaan-kansalaisia-ja-sidosryhmia-kuullen",
        source_name: "Maa- ja metsätalousministeriö",
      },
      {
        id: "ps-dam-2",
        official_id: "o-12",
        title_fi: "Vihreästä siirtymästä on tullut turvallisuustekijä",
        title_en: "The green transition has become a security factor",
        summary_fi: "Damski korosti vihreän siirtymän merkitystä turvallisuustekijänä: \"Vihreästä siirtymästä on tullut turvallisuustekijä, joka vahvistaa huoltovarmuuttamme ja kansallista turvallisuuttamme kokonaisuutena.\"",
        summary_en: "Damski emphasized the importance of the green transition as a security factor: \"The green transition has become a security factor that will strengthen our security of supply and national security as a whole.\"",
        date: "2024-01-01",
        policy_area_id: "pa-5",
        source_url: "https://valtioneuvosto.fi/en/-//1410903/ministry-of-the-environment-seeks-comprehensive-solutions-to-ecological-crisis-leads-green-transition-and-creates-conditions-for-smooth-everyday-living",
        source_name: "Valtioneuvosto",
      },
      {
        id: "ps-dam-3",
        official_id: "o-12",
        title_fi: "Ilmasto- ja luontopolitiikan pyöreässä pöydässä keskusteltiin luonnonarvomarkkinoista",
        title_en: "Climate and nature policy round table discussed nature value markets",
        summary_fi: "Damski osallistui ilmasto- ja luontopolitiikan pyöreän pöydän keskusteluun luonnonarvomarkkinoista, jossa käsiteltiin markkinapohjaisia keinoja luonnon monimuotoisuuden turvaamiseksi.",
        summary_en: "Damski participated in the Climate and Nature Policy Round Table discussion on nature value markets, addressing market-based mechanisms for safeguarding biodiversity.",
        date: "2024-01-01",
        policy_area_id: "pa-5",
        source_url: "https://ym.fi/-/194055633/ilmasto-ja-luontopolitiikan-pyoreassa-poydassa-keskusteltiin-luonnonarvomarkkinoista",
        source_name: "Ympäristöministeriö",
      },
    ],
    feedback: [],
  },

  // ══════════════════════════════════════════════
  // AGENCY HEADS (Virastojen pääjohtajat)
  // ══════════════════════════════════════════════

  // 13. Olli Rehn — Suomen Pankki
  {
    official: official(
      "o-13",
      "olli-rehn",
      "Olli",
      "Rehn",
      "Pääjohtaja",
      "Governor",
      "Suomen Pankki",
      "Bank of Finland",
      "2018-07-12",
      "Tasavallan presidentti",
      "President of the Republic",
      "Olli Rehn on toiminut Suomen Pankin pääjohtajana vuodesta 2018. Hän toimi aiemmin EU:n talouskomissaarina ja Suomen elinkeinoministerinä.",
      "Olli Rehn has served as Governor of the Bank of Finland since 2018. He previously served as EU Commissioner for Economic Affairs and as Finland's Minister of Economic Affairs."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [
      {
        id: "ps-reh-1",
        official_id: "o-13",
        title_fi: "Haastattelu Milano Finanzassa: \"Emme saa koskaan edetä autopilotilla\"",
        title_en: "Interview in Milano Finanza: \"We should never proceed on autopilot\"",
        summary_fi: "Rehn totesi inflaation vakiintuneen EKP:n 2 %:n tavoitteen tuntumaan. Hän korosti olevansa \"rahapolitiikan aktivistikoulukunnan\" edustaja ja painotti, ettei EKP saa koskaan edetä autopilotilla vaan sen on pysyttävä ketteränä.",
        summary_en: "Rehn stated inflation has stabilised around the ECB's 2% target. He emphasised being from \"the activist school of monetary policy,\" saying the ECB should never proceed on autopilot and must always remain agile and active.",
        date: "2025-12-06",
        policy_area_id: "pa-1",
        source_url: "https://www.suomenpankki.fi/en/news-and-topical/speeches-and-interviews2/2025/governor-olli-rehn-interview-in-milano-finanza-6-december-2025/",
        source_name: "Suomen Pankki",
      },
      {
        id: "ps-reh-2",
        official_id: "o-13",
        title_fi: "Euroalueen näkymät ja EKP:n rahapolitiikka — MNI Connect -videokonferenssi",
        title_en: "Eurozone outlook and ECB monetary policy — MNI Connect Video Conference",
        summary_fi: "Rehn totesi geopoliittisten muutosten hallitsevan maailmantalouden näkymiä poikkeuksellisella voimalla. EKP:n neuvosto päätti laskea korkoja edelleen, mutta ei sitoudu tiettyyn korkopolkuun. Eurojärjestelmän ennuste: inflaatio 2,3 % vuonna 2025 ja 1,9 % vuonna 2026.",
        summary_en: "Rehn discussed how geopolitics dominates the global economic outlook with exceptional force. The ECB Governing Council decided to further lower interest rates but is not pre-committing to a particular rate path. Eurosystem forecast: inflation at 2.3% for 2025 and 1.9% for 2026.",
        date: "2025-03-18",
        policy_area_id: "pa-1",
        source_url: "https://www.suomenpankki.fi/en/news-and-topical/speeches-and-interviews2/2025/opening-remarks-for-the-mni-connect-video-conference-18-march-2025/",
        source_name: "Suomen Pankki",
      },
    ],
    feedback: [],
  },

  // 14. Outi Antila — Kela
  {
    official: official(
      "o-14",
      "outi-antila",
      "Outi",
      "Antila",
      "Pääjohtaja",
      "Director General",
      "Kansaneläkelaitos (Kela)",
      "Social Insurance Institution of Finland (Kela)",
      "2022-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Outi Antila toimii Kelan pääjohtajana vuodesta 2022. Kela vastaa Suomen sosiaaliturvaetuuksien toimeenpanosta.",
      "Outi Antila has served as Director General of Kela since 2022. Kela is responsible for implementing Finland's social security benefits."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [
      {
        id: "ps-ant-1",
        official_id: "o-14",
        title_fi: "Sosiaaliturvassa pitäisi pyrkiä kohti yhden hakemuksen mallia",
        title_en: "Social security should move towards a single-application model",
        summary_fi: "Antila ajoi mallia, jossa kansalainen tekee yhden hakemuksen ja Kela selvittää kaikki etuudet, joihin henkilö on oikeutettu. Hän totesi, ettei ihmisten pitäisi joutua tietämään kaikkea itse.",
        summary_en: "Antila advocated a model where a citizen makes one application and Kela determines all benefits they are entitled to. She stated people should not have to figure everything out themselves.",
        date: "2024-01-01",
        policy_area_id: "pa-8",
        source_url: "https://www.kela.fi/ajankohtaista/kelan-paajohtaja-outi-antila-sosiaaliturvassa-pitaisi-pyrkia-kohti-yhden-hakemuksen-mallia",
        source_name: "Kela",
      },
      {
        id: "ps-ant-2",
        official_id: "o-14",
        title_fi: "Kelan budjettiin suuri lovi ensi vuodelle — \"Tuli aikamoisena yllätyksenä\"",
        title_en: "Major gap in Kela's budget for next year — \"It came as quite a surprise\"",
        summary_fi: "Antila kommentoi noin 50 miljoonan euron leikkausta Kelan toimintamenoista (noin 10 % vuotuisesta 650 miljoonan euron budjetista). Leikkaukset voivat johtaa palvelupisteiden sulkemisiin ja käsittelyaikojen pidentymiseen.",
        summary_en: "Antila commented on approximately EUR 50 million in cuts to Kela's operating expenses (around 10% of the annual EUR 650 million budget). Cuts could lead to closing service points and lengthening processing times.",
        date: "2025-03-01",
        policy_area_id: "pa-8",
        source_url: "https://yle.fi/a/74-20152406",
        source_name: "Yle",
      },
    ],
    feedback: [],
  },

  // 15. Minna Kelhä — Opetushallitus
  {
    official: official(
      "o-15",
      "minna-kelha",
      "Minna",
      "Kelhä",
      "Pääjohtaja",
      "Director General",
      "Opetushallitus",
      "Finnish National Agency for Education",
      "2023-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Minna Kelhä toimii Opetushallituksen pääjohtajana vuodesta 2023. Opetushallitus vastaa koulutuksen kehittämisestä ja opetussuunnitelmien valmistelusta.",
      "Minna Kelhä has served as Director General of the Finnish National Agency for Education since 2023. The agency is responsible for education development and curriculum preparation."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [
      {
        id: "ps-kel-1",
        official_id: "o-15",
        title_fi: "Uusi lukuvuosi on alkamassa: vahvasta koulutususkosta on pidettävä kiinni",
        title_en: "New school year is starting: we must hold on to strong belief in education",
        summary_fi: "Pääjohtaja Kelhä totesi: \"Tarvitsemme myönteistä puhetta koulusta ja koulutuksen merkityksestä lapsille, nuorille ja Suomen tulevaisuudelle.\" Hän painotti koulutususkon tärkeyttä samalla kun opetussuunnitelmia uudistettiin.",
        summary_en: "Director General Kelhä stated: \"We need positive talk about schools and the importance of education for children, young people, and Finland's future.\" She emphasised the importance of belief in education alongside curriculum reforms.",
        date: "2025-08-01",
        policy_area_id: "pa-6",
        source_url: "https://www.oph.fi/fi/uutiset/2025/uusi-lukuvuosi-alkamassa-vahvasta-koulutususkosta-pidettava-kiinni",
        source_name: "Opetushallitus",
      },
      {
        id: "ps-kel-2",
        official_id: "o-15",
        title_fi: "Vastaus Opetushallituksen lakkauttamisehdotukseen",
        title_en: "Response to the proposal to abolish the Finnish National Agency for Education",
        summary_fi: "Valtiovarainministeri Riikka Purra ehdotti Opetushallituksen lakkauttamista vuoteen 2027 mennessä. Kelhä kuvaili ehdotusta yllättäväksi ja varoitti, että toimintojen siirtäminen poliittisen ohjauksen alle vaarantaisi opetussuunnitelmatyön riippumattomuuden.",
        summary_en: "Finance Minister Riikka Purra proposed abolishing Opetushallitus by 2027. Kelhä described the proposal as surprising and warned that transferring functions under political direction would endanger the independence of curriculum development.",
        date: "2025-08-01",
        policy_area_id: "pa-6",
        source_url: "https://yle.fi/a/74-20176289",
        source_name: "Yle",
      },
    ],
    feedback: [],
  },

  // 16. Seppo Kolehmainen — Poliisihallitus
  {
    official: official(
      "o-16",
      "seppo-kolehmainen",
      "Seppo",
      "Kolehmainen",
      "Poliisiylijohtaja",
      "National Police Commissioner",
      "Poliisihallitus",
      "National Police Board",
      "2016-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Seppo Kolehmainen on toiminut poliisiylijohtajana vuodesta 2016. Hän johtaa Poliisihallitusta, joka ohjaa ja valvoo poliisitoimintaa Suomessa.",
      "Seppo Kolehmainen has served as National Police Commissioner since 2016. He leads the National Police Board, which directs and supervises police operations in Finland."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [
      {
        id: "ps-kol-1",
        official_id: "o-16",
        title_fi: "Poliisi tuo omalla toiminnallaan vakautta yhteiskuntaan",
        title_en: "The police bring stability to society through their own actions",
        summary_fi: "Poliisiylijohtaja Kolehmainen korosti poliisin roolia yhteiskunnallisen vakauden ylläpitäjänä ja painotti operatiivisen valmiuden merkitystä muuttuvassa turvallisuusympäristössä.",
        summary_en: "National Police Commissioner Kolehmainen emphasised the role of the police in maintaining societal stability and stressed the importance of operational readiness in a changing security environment.",
        date: "2023-12-04",
        policy_area_id: "pa-7",
        source_url: "https://poliisi.fi/en/-/national-police-commissioner-seppo-kolehmainen-the-police-bring-stability-to-society-through-their-own-actions",
        source_name: "Poliisihallitus",
      },
      {
        id: "ps-kol-2",
        official_id: "o-16",
        title_fi: "Poliisi on valmistautunut uusiin NATO-tehtäviin",
        title_en: "Police is prepared for new NATO tasks",
        summary_fi: "Kolehmainen totesi poliisin olevan valmistautunut uusiin NATO-jäsenyydestä seuraaviin tehtäviin ja yhteistyövelvoitteisiin. Hän korosti poliisin ja puolustusvoimien välistä yhteistoimintaa.",
        summary_en: "Kolehmainen stated the police are prepared for new tasks and cooperation obligations arising from NATO membership. He emphasised cooperation between the police and defence forces.",
        date: "2024-01-01",
        policy_area_id: "pa-7",
        source_url: "https://poliisi.fi/en/-/national-police-commissioner-seppo-kolehmainen-police-is-prepared-for-new-nato-tasks",
        source_name: "Poliisihallitus",
      },
    ],
    feedback: [],
  },

  // 17. Janne Jaakkola — Puolustusvoimat
  {
    official: official(
      "o-17",
      "janne-jaakkola",
      "Janne",
      "Jaakkola",
      "Puolustusvoimain komentaja, kenraali",
      "Commander of the Finnish Defence Forces, General",
      "Puolustusvoimat",
      "Finnish Defence Forces",
      "2024-08-01",
      "Tasavallan presidentti",
      "President of the Republic",
      "Kenraali Janne Jaakkola nimitettiin puolustusvoimain komentajaksi elokuussa 2024. Hän seurasi tehtävässä kenraali Timo Kivistä.",
      "General Janne Jaakkola was appointed Commander of the Finnish Defence Forces in August 2024, succeeding General Timo Kivinen."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [
      {
        id: "ps-jaak-1",
        official_id: "o-17",
        title_fi: "255. maanpuolustuskurssin avajaiset: \"Yhteistyö yritysten ja teollisuuden kanssa tärkeää\"",
        title_en: "255th National Defence Course opening: \"Cooperation with companies and industry is important\"",
        summary_fi: "Jaakkola korosti teollisuusyhteistyön merkitystä: \"Ukrainan sota ja Lähi-idän kriisi ovat osoittaneet meille, kuinka tärkeää läheinen yhteistyö teollisuuden ja yritysten kanssa on.\" Hän totesi, että \"asioita pitää tehdä nopeammin, enemmän ja halvemmalla.\"",
        summary_en: "Jaakkola emphasised industrial cooperation: \"The war in Ukraine and the Middle East crisis have shown us how important close cooperation with industry and companies is.\" He stated that \"things need to be done faster, more and cheaper.\"",
        date: "2026-02-01",
        policy_area_id: "pa-7",
        source_url: "https://ruotuvaki.fi/-/kenraali-jaakkola-255-maanpuolustuskurssin-avajaisissa-yhteistyo-yritysten-ja-teollisuuden-kanssa-tarkeaa",
        source_name: "Ruotuväki",
      },
      {
        id: "ps-jaak-2",
        official_id: "o-17",
        title_fi: "NATO tehostaa koko itäisen sivustan valmiutta",
        title_en: "NATO is enhancing readiness across the entire eastern flank",
        summary_fi: "Jaakkola korosti NATOn Eastern Sentry -operaation merkitystä itäisen sivustan valmiuden parantamisessa. Hän totesi: \"Eurooppa muodostaa parhaillaan tahtoa vahvistaa turvallisuuttaan ja puolustustaan.\" Hän vakuutti, ettei Suomella ole syytä pelkoon.",
        summary_en: "Jaakkola highlighted NATO's Eastern Sentry operation for strengthening eastern flank readiness. He stated: \"Europe is currently forming the will to strengthen its security and defence.\" He assured that Finland has no reason for fear.",
        date: "2025-01-01",
        policy_area_id: "pa-7",
        source_url: "https://ruotuvaki.fi/-/nato-tehostaa-koko-itaisen-sivustan-valmiutta",
        source_name: "Ruotuväki",
      },
    ],
    feedback: [],
  },

  // 18. Hannu Mäkinen — Tulli
  {
    official: official(
      "o-18",
      "hannu-makinen",
      "Hannu",
      "Mäkinen",
      "Pääjohtaja",
      "Director General",
      "Tulli",
      "Finnish Customs",
      "2015-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Hannu Mäkinen on toiminut Tullin pääjohtajana vuodesta 2015. Tulli vastaa tullivalvonnasta, tuontiverotuksesta ja ulkomaankaupan tilastoinnista.",
      "Hannu Mäkinen has served as Director General of Finnish Customs since 2015. Customs is responsible for customs control, import taxation, and foreign trade statistics."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 19. Ilkka Haahtela — Maahanmuuttovirasto
  {
    official: official(
      "o-19",
      "ilkka-haahtela",
      "Ilkka",
      "Haahtela",
      "Ylijohtaja",
      "Director General",
      "Maahanmuuttovirasto",
      "Finnish Immigration Service",
      "2023-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Ilkka Haahtela toimii Maahanmuuttoviraston ylijohtajana. Virasto käsittelee maahanmuuttoon, turvapaikkaan ja kansalaisuuteen liittyviä asioita.",
      "Ilkka Haahtela serves as Director General of the Finnish Immigration Service. The agency handles matters related to immigration, asylum, and citizenship."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 20. Jarkko Saarimäki — Traficom
  {
    official: official(
      "o-20",
      "jarkko-saarimaki",
      "Jarkko",
      "Saarimäki",
      "Pääjohtaja",
      "Director General",
      "Liikenne- ja viestintävirasto Traficom",
      "Finnish Transport and Communications Agency Traficom",
      "2024-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Jarkko Saarimäki toimii Traficomin pääjohtajana. Traficom vastaa liikenteen ja viestinnän lupa-, rekisteri- ja valvontatehtävistä.",
      "Jarkko Saarimäki serves as Director General of Traficom. The agency is responsible for transport and communications licensing, registration, and oversight."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 21. Janne Viskari — DVV
  {
    official: official(
      "o-21",
      "janne-viskari",
      "Janne",
      "Viskari",
      "Pääjohtaja",
      "Director General",
      "Digi- ja väestötietovirasto (DVV)",
      "Digital and Population Data Services Agency (DVV)",
      "2020-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Janne Viskari on johtanut Digi- ja väestötietovirastoa sen perustamisesta 2020 lähtien. DVV vastaa väestötietojärjestelmästä ja digitaalisten palveluiden kehittämisestä.",
      "Janne Viskari has led the Digital and Population Data Services Agency since its establishment in 2020. DVV manages the population information system and digital service development."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 22. Mika Salminen — THL
  {
    official: official(
      "o-22",
      "mika-salminen",
      "Mika",
      "Salminen",
      "Pääjohtaja",
      "Director General",
      "Terveyden ja hyvinvoinnin laitos (THL)",
      "Finnish Institute for Health and Welfare (THL)",
      "2022-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Mika Salminen toimii THL:n pääjohtajana vuodesta 2022. Hän tuli tunnetuksi koronapandemian aikana THL:n terveysturvallisuusjohtajana.",
      "Mika Salminen has served as Director General of THL since 2022. He became widely known during the COVID-19 pandemic as THL's Director of Health Security."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [
      {
        id: "ps-sal-1",
        official_id: "o-22",
        title_fi: "Hyvinvointialueet ja kunnat karsivat palveluita — \"väärä suunta\"",
        title_en: "Welfare areas and municipalities cut services — \"the wrong direction\"",
        summary_fi: "Salminen ilmaisi huolensa siitä, että alijäämäiset hyvinvointialueet ja kunnat karsivat molemmat palveluitaan ja olettavat toisen hoitavan ne. Hän kritisoi perusterveydenhuollon verkoston karsimista erikoissairaanhoidon sijaan.",
        summary_en: "Salminen expressed concern that deficit-ridden welfare areas and municipalities are both cutting services, each assuming the other will handle them. He criticised cutting the primary healthcare network more than specialised care.",
        date: "2025-01-01",
        policy_area_id: "pa-8",
        source_url: "https://yle.fi/a/74-20078380",
        source_name: "Yle",
      },
      {
        id: "ps-sal-2",
        official_id: "o-22",
        title_fi: "Sote-uudistus ollut valtava onnistuminen",
        title_en: "The health and social services reform has been a massive success",
        summary_fi: "Salminen puolusti sote-uudistusta todeten, ettei suomalainen sote-järjestelmä ole kriisissä vaan kehitysvaiheessa. Julkisen luottamuksen lasku johtuu julkisesta keskustelusta, ei palveluiden romahtamisesta. Suurimmat ongelmat: ammattilaispula ja riittämätön rahoitus.",
        summary_en: "Salminen defended the health reform, stating the Finnish system is not in crisis but in a development phase. The drop in public trust is due to public discourse, not an actual collapse. Biggest challenges: workforce shortages and insufficient funding.",
        date: "2025-02-01",
        policy_area_id: "pa-8",
        source_url: "https://wanhattoverit.fi/kerhot/helsinki/thln-mika-salminen-sote-uudistus-ollut-valtava-onnistuminen/",
        source_name: "Suomen Wanhat Toverit",
      },
    ],
    feedback: [],
  },

  // 23. Leif Schulman — SYKE
  {
    official: official(
      "o-23",
      "leif-schulman",
      "Leif",
      "Schulman",
      "Pääjohtaja",
      "Director General",
      "Suomen ympäristökeskus (SYKE)",
      "Finnish Environment Institute (SYKE)",
      "2017-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Leif Schulman on toiminut Suomen ympäristökeskuksen pääjohtajana vuodesta 2017. SYKE tuottaa tutkimustietoa ympäristöpolitiikan tueksi.",
      "Leif Schulman has served as Director General of the Finnish Environment Institute since 2017. SYKE produces research to support environmental policy."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 24. Petteri Tiippana — STUK
  {
    official: official(
      "o-24",
      "petteri-tiippana",
      "Petteri",
      "Tiippana",
      "Pääjohtaja",
      "Director General",
      "Säteilyturvakeskus (STUK)",
      "Radiation and Nuclear Safety Authority (STUK)",
      "2015-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Petteri Tiippana on toiminut Säteilyturvakeskuksen pääjohtajana vuodesta 2015. STUK valvoo ydin- ja säteilyturvallisuutta Suomessa.",
      "Petteri Tiippana has served as Director General of the Radiation and Nuclear Safety Authority since 2015. STUK oversees nuclear and radiation safety in Finland."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 25. Kirsi Leivo — KKV
  {
    official: official(
      "o-25",
      "kirsi-leivo",
      "Kirsi",
      "Leivo",
      "Pääjohtaja",
      "Director General",
      "Kilpailu- ja kuluttajavirasto (KKV)",
      "Finnish Competition and Consumer Authority (KKV)",
      "2019-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Kirsi Leivo on toiminut Kilpailu- ja kuluttajaviraston pääjohtajana vuodesta 2019. KKV valvoo kilpailulain noudattamista ja kuluttajansuojaa.",
      "Kirsi Leivo has served as Director General of the Finnish Competition and Consumer Authority since 2019. KKV enforces competition law and consumer protection."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 26. Markku Heikura — Verohallinto
  {
    official: official(
      "o-26",
      "markku-heikura",
      "Markku",
      "Heikura",
      "Pääjohtaja",
      "Director General",
      "Verohallinto",
      "Finnish Tax Administration",
      "2020-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Markku Heikura toimii Verohallinnon pääjohtajana. Verohallinto vastaa verotuksen toimittamisesta ja verovalvonnasta Suomessa.",
      "Markku Heikura serves as Director General of the Finnish Tax Administration. The agency is responsible for tax assessment and tax control in Finland."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // ══════════════════════════════════════════════
  // MINISTRY DIRECTORS GENERAL (Ylijohtajat)
  // ══════════════════════════════════════════════

  // 27. Tapio Laamanen — Oikeusministeriö
  {
    official: official(
      "o-27",
      "tapio-laamanen",
      "Tapio",
      "Laamanen",
      "Ylijohtaja, hallinto- ja ohjausosasto",
      "Director General, Department for Administration and Oversight",
      "Oikeusministeriö",
      "Ministry of Justice",
      "2020-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Tapio Laamanen toimii oikeusministeriön hallinto- ja ohjausosaston ylijohtajana.",
      "Tapio Laamanen serves as Director General of the Department for Administration and Oversight at the Ministry of Justice."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 28. Johanna Suurpää — Oikeusministeriö
  {
    official: official(
      "o-28",
      "johanna-suurpaa",
      "Johanna",
      "Suurpää",
      "Ylijohtaja, demokratia- ja julkisoikeusosasto",
      "Director General, Department for Democracy and Public Law",
      "Oikeusministeriö",
      "Ministry of Justice",
      "2020-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Johanna Suurpää toimii oikeusministeriön demokratia- ja julkisoikeusosaston ylijohtajana.",
      "Johanna Suurpää serves as Director General of the Department for Democracy and Public Law at the Ministry of Justice."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 29. Tomi Vuori — Sisäministeriö
  {
    official: official(
      "o-29",
      "tomi-vuori",
      "Tomi",
      "Vuori",
      "Ylijohtaja, poliisiosasto",
      "Director General, Police Department",
      "Sisäministeriö",
      "Ministry of the Interior",
      "2020-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Tomi Vuori toimii sisäministeriön poliisiosaston ylijohtajana.",
      "Tomi Vuori serves as Director General of the Police Department at the Ministry of the Interior."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 30. Kimmo Kohvakka — Sisäministeriö
  {
    official: official(
      "o-30",
      "kimmo-kohvakka",
      "Kimmo",
      "Kohvakka",
      "Ylijohtaja, pelastusosasto",
      "Director General, Department for Rescue Services",
      "Sisäministeriö",
      "Ministry of the Interior",
      "2020-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Kimmo Kohvakka toimii sisäministeriön pelastusosaston ylijohtajana.",
      "Kimmo Kohvakka serves as Director General of the Department for Rescue Services at the Ministry of the Interior."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 31. Minna Hulkkonen — Sisäministeriö
  {
    official: official(
      "o-31",
      "minna-hulkkonen",
      "Minna",
      "Hulkkonen",
      "Ylijohtaja, maahanmuutto-osasto",
      "Director General, Migration Department",
      "Sisäministeriö",
      "Ministry of the Interior",
      "2020-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Minna Hulkkonen toimii sisäministeriön maahanmuutto-osaston ylijohtajana.",
      "Minna Hulkkonen serves as Director General of the Migration Department at the Ministry of the Interior."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 32. Terhi Järvikare — Valtiovarainministeriö
  {
    official: official(
      "o-32",
      "terhi-jarvikare",
      "Terhi",
      "Järvikare",
      "Ylijohtaja, vero-osasto",
      "Director General, Tax Department",
      "Valtiovarainministeriö",
      "Ministry of Finance",
      "2020-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Terhi Järvikare toimii valtiovarainministeriön vero-osaston ylijohtajana.",
      "Terhi Järvikare serves as Director General of the Tax Department at the Ministry of Finance."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 33. Mikko Spolander — Valtiovarainministeriö
  {
    official: official(
      "o-33",
      "mikko-spolander",
      "Mikko",
      "Spolander",
      "Ylijohtaja, kansantalousosasto",
      "Director General, Economics Department",
      "Valtiovarainministeriö",
      "Ministry of Finance",
      "2020-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Mikko Spolander toimii valtiovarainministeriön kansantalousosaston ylijohtajana.",
      "Mikko Spolander serves as Director General of the Economics Department at the Ministry of Finance."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 34. Pirjo Tulokas — Ulkoministeriö
  {
    official: official(
      "o-34",
      "pirjo-tulokas",
      "Pirjo",
      "Tulokas",
      "Alivaltiosihteeri",
      "Under-Secretary of State for Internal and External Services",
      "Ulkoministeriö",
      "Ministry for Foreign Affairs",
      "2025-09-01",
      "Valtioneuvosto",
      "Council of State",
      "Pirjo Tulokas toimii ulkoministeriön alivaltiosihteerinä. Toimikausi kestää elokuuhun 2029.",
      "Pirjo Tulokas serves as Under-Secretary of State at the Ministry for Foreign Affairs. Her term runs until August 2029."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

  // 35. Raimo Antila — Sosiaali- ja terveysministeriö
  {
    official: official(
      "o-35",
      "raimo-antila",
      "Raimo",
      "Antila",
      "Ylijohtaja",
      "Director General",
      "Sosiaali- ja terveysministeriö",
      "Ministry of Social Affairs and Health",
      "2020-01-01",
      "Valtioneuvosto",
      "Council of State",
      "Raimo Antila toimii sosiaali- ja terveysministeriön ylijohtajana.",
      "Raimo Antila serves as Director General at the Ministry of Social Affairs and Health."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },
];

// ─── Contact info by organization ───

const orgSwitchboards: Record<string, string> = {
  "Valtioneuvoston kanslia": "+358 295 16001",
  "Ulkoministeriö": "+358 295 16000",
  "Oikeusministeriö": "+358 295 16001",
  "Sisäministeriö": "+358 295 480 171",
  "Puolustusministeriö": "+358 295 16001",
  "Valtiovarainministeriö": "+358 295 16001",
  "Opetus- ja kulttuuriministeriö": "+358 295 16001",
  "Maa- ja metsätalousministeriö": "+358 295 16001",
  "Liikenne- ja viestintäministeriö": "+358 295 16001",
  "Työ- ja elinkeinoministeriö": "+358 295 16001",
  "Sosiaali- ja terveysministeriö": "+358 295 16001",
  "Ympäristöministeriö": "+358 295 16001",
  "Verohallinto": "+358 29 512 000",
  "Tulli": "+358 295 5200",
  "Maahanmuuttovirasto": "+358 295 430 431",
  "Patentti- ja rekisterihallitus": "+358 29 509 5000",
  "Traficom": "+358 29 534 5000",
  "Ruokavirasto": "+358 29 530 0400",
  "Digi- ja väestötietovirasto": "+358 29 553 6000",
};

// Finnish government email: firstname.lastname@gov.fi for ministries
// Agencies use their own domains
const orgEmailDomains: Record<string, string> = {
  "Valtioneuvoston kanslia": "gov.fi",
  "Ulkoministeriö": "gov.fi",
  "Oikeusministeriö": "gov.fi",
  "Sisäministeriö": "gov.fi",
  "Puolustusministeriö": "gov.fi",
  "Valtiovarainministeriö": "gov.fi",
  "Opetus- ja kulttuuriministeriö": "gov.fi",
  "Maa- ja metsätalousministeriö": "gov.fi",
  "Liikenne- ja viestintäministeriö": "gov.fi",
  "Työ- ja elinkeinoministeriö": "gov.fi",
  "Sosiaali- ja terveysministeriö": "gov.fi",
  "Ympäristöministeriö": "gov.fi",
  "Verohallinto": "vero.fi",
  "Tulli": "tulli.fi",
  "Maahanmuuttovirasto": "migri.fi",
  "Patentti- ja rekisterihallitus": "prh.fi",
  "Traficom": "traficom.fi",
  "Ruokavirasto": "ruokavirasto.fi",
  "Digi- ja väestötietovirasto": "dvv.fi",
};

// Apply contact info to state officials
for (const p of allProfiles) {
  const o = p.official;
  const domain = orgEmailDomains[o.organization_fi];
  if (domain && !o.email) {
    o.email = `${o.first_name.toLowerCase().replace(/ä/g, "a").replace(/ö/g, "o").replace(/å/g, "a").replace(/ü/g, "u").replace(/ /g, ".")}.${o.last_name.toLowerCase().replace(/ä/g, "a").replace(/ö/g, "o").replace(/å/g, "a").replace(/ü/g, "u").replace(/ /g, ".")}@${domain}`;
  }
  const phone = orgSwitchboards[o.organization_fi];
  if (phone && !o.phone) {
    o.phone = phone;
  }
}

// Combine ministry/agency officials with municipal officials
const combinedProfiles: OfficialProfile[] = [...allProfiles, ...municipalProfiles];

// ─── Exports ───

export function getOfficialBySlug(slug: string): OfficialProfile | null {
  return combinedProfiles.find((p) => p.official.slug === slug) ?? null;
}

export function getAllOfficials(): Official[] {
  return combinedProfiles.map((p) => p.official);
}

export function getStateOfficials(): Official[] {
  return combinedProfiles.filter((p) => p.official.category === "state").map((p) => p.official);
}

export function getMunicipalOfficials(): Official[] {
  return combinedProfiles.filter((p) => p.official.category === "municipal").map((p) => p.official);
}

export function searchOfficials(query: string): Official[] {
  const q = query.toLowerCase();
  return getAllOfficials().filter(
    (o) =>
      o.first_name.toLowerCase().includes(q) ||
      o.last_name.toLowerCase().includes(q) ||
      o.organization_fi.toLowerCase().includes(q) ||
      o.organization_en.toLowerCase().includes(q) ||
      o.title_fi.toLowerCase().includes(q) ||
      o.title_en.toLowerCase().includes(q)
  );
}

export function getPolicyAreas(): PolicyArea[] {
  return policyAreas;
}
