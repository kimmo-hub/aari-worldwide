import type {
  Official,
  PreviousRole,
  Affiliation,
  PublicStatement,
  PolicyArea,
  FeedbackAggregation,
  OfficialProfile,
} from "@/types/database";

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
  bioEn: string
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
      "Timo Lankinen toimii valtioneuvoston kanslian korkeimpana virkamiehenä alivaltiosihteerinä. Hän on johtanut kanslian hallintoa vuodesta 2012.",
      "Timo Lankinen serves as the highest permanent civil servant at the Prime Minister's Office. He has led the office's administration since 2012."
    ),
    previous_roles: [],
    affiliations: [],
    public_statements: [],
    feedback: [],
  },

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
    public_statements: [],
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
    public_statements: [],
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
    public_statements: [],
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
    public_statements: [],
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
    public_statements: [],
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
    public_statements: [],
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
    public_statements: [],
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
    public_statements: [],
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
    public_statements: [],
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
    public_statements: [],
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
    public_statements: [],
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
    public_statements: [],
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
];

// ─── Exports ───

export function getOfficialBySlug(slug: string): OfficialProfile | null {
  return allProfiles.find((p) => p.official.slug === slug) ?? null;
}

export function getAllOfficials(): Official[] {
  return allProfiles.map((p) => p.official);
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
