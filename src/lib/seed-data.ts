import type {
  Official,
  PreviousRole,
  Affiliation,
  PublicStatement,
  PolicyArea,
  FeedbackAggregation,
  OfficialProfile,
} from "@/types/database";

// Policy areas
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
];

// ─── Official 1: Matti Virtanen ───

const official1: Official = {
  id: "official-1",
  slug: "matti-virtanen",
  first_name: "Matti",
  last_name: "Virtanen",
  title_fi: "Ylijohtaja",
  title_en: "Director General",
  organization_fi: "Valtiovarainministeriö",
  organization_en: "Ministry of Finance",
  photo_url: null,
  appointment_date: "2021-03-15",
  appointed_by_fi: "Valtioneuvosto",
  appointed_by_en: "Council of State",
  bio_fi:
    "Matti Virtanen on toiminut valtiovarainministeriön ylijohtajana vuodesta 2021. Hän vastaa julkisen hallinnon ICT-osastosta ja digitalisaation edistämisestä valtionhallinnossa.",
  bio_en:
    "Matti Virtanen has served as Director General at the Ministry of Finance since 2021. He oversees the public administration ICT department and the advancement of digitalization in state governance.",
  created_at: "2024-01-01T00:00:00Z",
  updated_at: "2024-06-15T00:00:00Z",
};

const roles1: PreviousRole[] = [
  {
    id: "role-1",
    official_id: "official-1",
    role_fi: "Osastopäällikkö",
    role_en: "Department Head",
    organization_fi: "Liikenne- ja viestintäministeriö",
    organization_en: "Ministry of Transport and Communications",
    start_date: "2016-06-01",
    end_date: "2021-03-14",
    source_url: "https://valtioneuvosto.fi",
  },
  {
    id: "role-2",
    official_id: "official-1",
    role_fi: "Neuvotteleva virkamies",
    role_en: "Ministerial Adviser",
    organization_fi: "Valtioneuvoston kanslia",
    organization_en: "Prime Minister's Office",
    start_date: "2012-01-15",
    end_date: "2016-05-31",
    source_url: "https://valtioneuvosto.fi",
  },
];

const affiliations1: Affiliation[] = [
  {
    id: "aff-1",
    official_id: "official-1",
    organization_fi: "Digi- ja väestötietovirasto",
    organization_en: "Digital and Population Data Services Agency",
    role_fi: "Hallituksen jäsen",
    role_en: "Board member",
    start_date: "2022-01-01",
    end_date: null,
    source_url: "https://www.prh.fi",
  },
  {
    id: "aff-2",
    official_id: "official-1",
    organization_fi: "Julkisen hallinnon tietohallinnon neuvottelukunta (JUHTA)",
    organization_en:
      "Advisory Committee on Information Management in Public Administration (JUHTA)",
    role_fi: "Puheenjohtaja",
    role_en: "Chair",
    start_date: "2021-06-01",
    end_date: null,
    source_url: "https://vm.fi",
  },
];

const statements1: PublicStatement[] = [
  {
    id: "stmt-1",
    official_id: "official-1",
    title_fi: "Lausunto julkisen hallinnon pilvipalvelulinjauksista",
    title_en: "Statement on public administration cloud service policies",
    summary_fi:
      "Virtanen korosti tarvetta yhtenäiselle pilvipalvelustrategialle valtionhallinnossa ja esitti siirtymistä hybridipilvimalliin vuoteen 2025 mennessä.",
    summary_en:
      "Virtanen emphasized the need for a unified cloud service strategy in state governance and proposed a transition to a hybrid cloud model by 2025.",
    date: "2023-11-15",
    policy_area_id: "pa-2",
    source_url:
      "https://lausunto.fi/FI/Proposal/Participation?proposalId=example1",
    source_name: "Lausunto.fi",
  },
  {
    id: "stmt-2",
    official_id: "official-1",
    title_fi: "Puheenvuoro valtionhallinnon tuottavuusohjelmasta",
    title_en: "Speech on public administration productivity programme",
    summary_fi:
      "Virtanen esitteli uuden tuottavuusohjelman, joka tähtää 15% tehokkuuden parantamiseen julkisissa palveluissa digitalisaation avulla.",
    summary_en:
      "Virtanen presented a new productivity programme aiming for 15% efficiency improvement in public services through digitalization.",
    date: "2023-09-22",
    policy_area_id: "pa-1",
    source_url: "https://vm.fi/artikkeli/-/asset_publisher/example2",
    source_name: "Valtiovarainministeriö",
  },
  {
    id: "stmt-3",
    official_id: "official-1",
    title_fi: "Lausunto tiedonhallintalain muutosehdotuksesta",
    title_en:
      "Statement on proposed amendments to the Information Management Act",
    summary_fi:
      "Virtanen kannatti tiedonhallintalain tiukentamista ja esitti automaattisen päätöksenteon läpinäkyvyysvaatimuksia.",
    summary_en:
      "Virtanen supported tightening the Information Management Act and proposed transparency requirements for automated decision-making.",
    date: "2024-02-10",
    policy_area_id: "pa-4",
    source_url:
      "https://lausunto.fi/FI/Proposal/Participation?proposalId=example3",
    source_name: "Lausunto.fi",
  },
];

const feedback1: FeedbackAggregation[] = [
  {
    policy_area_id: "pa-1",
    policy_area_name_fi: "Talouspolitiikka",
    policy_area_name_en: "Economic policy",
    total_responses: 47,
    average_rating: 3.2,
    distribution: { 1: 5, 2: 8, 3: 15, 4: 12, 5: 7 },
  },
  {
    policy_area_id: "pa-2",
    policy_area_name_fi: "Digitalisaatio",
    policy_area_name_en: "Digitalization",
    total_responses: 83,
    average_rating: 3.8,
    distribution: { 1: 3, 2: 7, 3: 18, 4: 30, 5: 25 },
  },
  {
    policy_area_id: "pa-3",
    policy_area_name_fi: "Hallintopolitiikka",
    policy_area_name_en: "Administrative policy",
    total_responses: 31,
    average_rating: 2.9,
    distribution: { 1: 4, 2: 9, 3: 10, 4: 5, 5: 3 },
  },
  {
    policy_area_id: "pa-4",
    policy_area_name_fi: "Lainsäädäntö",
    policy_area_name_en: "Legislation",
    total_responses: 22,
    average_rating: 3.5,
    distribution: { 1: 1, 2: 3, 3: 8, 4: 6, 5: 4 },
  },
];

// ─── Official 2: Anna Korhonen ───

const official2: Official = {
  id: "official-2",
  slug: "anna-korhonen",
  first_name: "Anna",
  last_name: "Korhonen",
  title_fi: "Kansliapäällikkö",
  title_en: "Permanent Secretary",
  organization_fi: "Ympäristöministeriö",
  organization_en: "Ministry of the Environment",
  photo_url: null,
  appointment_date: "2020-09-01",
  appointed_by_fi: "Tasavallan presidentti",
  appointed_by_en: "President of the Republic",
  bio_fi:
    "Anna Korhonen johtaa ympäristöministeriön toimintaa kansliapäällikkönä. Hänellä on pitkä kokemus ympäristöhallinnosta ja ilmastopolitiikasta.",
  bio_en:
    "Anna Korhonen leads the Ministry of the Environment as Permanent Secretary. She has extensive experience in environmental administration and climate policy.",
  created_at: "2024-01-01T00:00:00Z",
  updated_at: "2024-08-01T00:00:00Z",
};

const roles2: PreviousRole[] = [
  {
    id: "role-3",
    official_id: "official-2",
    role_fi: "Ylijohtaja",
    role_en: "Director General",
    organization_fi: "Ympäristöministeriö, Luontoympäristöosasto",
    organization_en:
      "Ministry of the Environment, Natural Environment Department",
    start_date: "2015-03-01",
    end_date: "2020-08-31",
    source_url: "https://valtioneuvosto.fi",
  },
];

const affiliations2: Affiliation[] = [
  {
    id: "aff-3",
    official_id: "official-2",
    organization_fi: "Suomen ympäristökeskus (SYKE)",
    organization_en: "Finnish Environment Institute (SYKE)",
    role_fi: "Johtokunnan jäsen",
    role_en: "Board member",
    start_date: "2020-10-01",
    end_date: null,
    source_url: "https://www.syke.fi",
  },
];

const statements2: PublicStatement[] = [
  {
    id: "stmt-4",
    official_id: "official-2",
    title_fi: "Lausunto ilmastolain toimeenpanosta",
    title_en: "Statement on Climate Act implementation",
    summary_fi:
      "Korhonen esitti konkreettisia toimenpiteitä ilmastolain toimeenpanon nopeuttamiseksi ja korosti sektorirajat ylittävän yhteistyön merkitystä.",
    summary_en:
      "Korhonen proposed concrete measures to accelerate Climate Act implementation and emphasized the importance of cross-sector collaboration.",
    date: "2024-01-20",
    policy_area_id: "pa-5",
    source_url:
      "https://lausunto.fi/FI/Proposal/Participation?proposalId=example4",
    source_name: "Lausunto.fi",
  },
  {
    id: "stmt-5",
    official_id: "official-2",
    title_fi: "Puheenvuoro luonnon monimuotoisuuden suojelusta",
    title_en: "Speech on biodiversity conservation",
    summary_fi:
      "Korhonen painotti Suomen vastuuta EU:n biodiversiteettistrategian toteuttamisessa ja esitti lisärahoitusta suojelualueiden laajentamiseen.",
    summary_en:
      "Korhonen emphasized Finland's responsibility in implementing the EU Biodiversity Strategy and proposed additional funding for expanding protected areas.",
    date: "2023-06-05",
    policy_area_id: "pa-5",
    source_url: "https://ym.fi/artikkeli/-/asset_publisher/example5",
    source_name: "Ympäristöministeriö",
  },
];

const feedback2: FeedbackAggregation[] = [
  {
    policy_area_id: "pa-5",
    policy_area_name_fi: "Ympäristöpolitiikka",
    policy_area_name_en: "Environmental policy",
    total_responses: 112,
    average_rating: 4.1,
    distribution: { 1: 4, 2: 8, 3: 15, 4: 40, 5: 45 },
  },
  {
    policy_area_id: "pa-3",
    policy_area_name_fi: "Hallintopolitiikka",
    policy_area_name_en: "Administrative policy",
    total_responses: 28,
    average_rating: 3.4,
    distribution: { 1: 2, 2: 4, 3: 10, 4: 8, 5: 4 },
  },
];

// ─── Official 3: Jukka Lahtinen ───

const official3: Official = {
  id: "official-3",
  slug: "jukka-lahtinen",
  first_name: "Jukka",
  last_name: "Lahtinen",
  title_fi: "Pääjohtaja",
  title_en: "Director General",
  organization_fi: "Opetushallitus",
  organization_en: "Finnish National Agency for Education",
  photo_url: null,
  appointment_date: "2019-01-01",
  appointed_by_fi: "Valtioneuvosto",
  appointed_by_en: "Council of State",
  bio_fi:
    "Jukka Lahtinen johtaa Opetushallitusta ja vastaa koulutuksen kehittämisestä, opetussuunnitelmien valmistelusta ja koulutuksen laadun arvioinnista.",
  bio_en:
    "Jukka Lahtinen leads the Finnish National Agency for Education and is responsible for education development, curriculum preparation, and education quality evaluation.",
  created_at: "2024-01-01T00:00:00Z",
  updated_at: "2024-05-20T00:00:00Z",
};

const roles3: PreviousRole[] = [
  {
    id: "role-4",
    official_id: "official-3",
    role_fi: "Johtaja",
    role_en: "Director",
    organization_fi: "Opetus- ja kulttuuriministeriö",
    organization_en: "Ministry of Education and Culture",
    start_date: "2013-09-01",
    end_date: "2018-12-31",
    source_url: "https://valtioneuvosto.fi",
  },
  {
    id: "role-5",
    official_id: "official-3",
    role_fi: "Opetusneuvos",
    role_en: "Counsellor of Education",
    organization_fi: "Opetushallitus",
    organization_en: "Finnish National Agency for Education",
    start_date: "2008-01-01",
    end_date: "2013-08-31",
    source_url: "https://www.oph.fi",
  },
];

const affiliations3: Affiliation[] = [
  {
    id: "aff-4",
    official_id: "official-3",
    organization_fi: "Koulutuksen arviointikeskus (Karvi)",
    organization_en: "Finnish Education Evaluation Centre (FINEEC)",
    role_fi: "Arviointineuvoston jäsen",
    role_en: "Evaluation Council member",
    start_date: "2019-03-01",
    end_date: null,
    source_url: "https://karvi.fi",
  },
];

const statements3: PublicStatement[] = [
  {
    id: "stmt-6",
    official_id: "official-3",
    title_fi: "Lausunto perusopetuksen opetussuunnitelman uudistamisesta",
    title_en: "Statement on basic education curriculum reform",
    summary_fi:
      "Lahtinen esitteli opetussuunnitelman uudistuksen päälinjat, korostaen digitaalisten taitojen ja kriittisen ajattelun roolia tulevaisuuden opetuksessa.",
    summary_en:
      "Lahtinen presented the main directions of curriculum reform, emphasizing the role of digital skills and critical thinking in future education.",
    date: "2024-03-15",
    policy_area_id: "pa-6",
    source_url: "https://www.oph.fi/fi/uutiset/example6",
    source_name: "Opetushallitus",
  },
];

const feedback3: FeedbackAggregation[] = [
  {
    policy_area_id: "pa-6",
    policy_area_name_fi: "Koulutuspolitiikka",
    policy_area_name_en: "Education policy",
    total_responses: 156,
    average_rating: 3.0,
    distribution: { 1: 20, 2: 30, 3: 40, 4: 38, 5: 28 },
  },
];

// ─── Official 4: Liisa Nieminen ───

const official4: Official = {
  id: "official-4",
  slug: "liisa-nieminen",
  first_name: "Liisa",
  last_name: "Nieminen",
  title_fi: "Osastopäällikkö",
  title_en: "Department Head",
  organization_fi: "Sosiaali- ja terveysministeriö",
  organization_en: "Ministry of Social Affairs and Health",
  photo_url: null,
  appointment_date: "2022-06-01",
  appointed_by_fi: "Valtioneuvosto",
  appointed_by_en: "Council of State",
  bio_fi:
    "Liisa Nieminen johtaa sosiaali- ja terveysministeriön hyvinvointiosastoa. Hän on erikoistunut sosiaaliturvan uudistamiseen ja terveydenhuollon digitalisaatioon.",
  bio_en:
    "Liisa Nieminen heads the welfare department at the Ministry of Social Affairs and Health. She specializes in social security reform and healthcare digitalization.",
  created_at: "2024-01-01T00:00:00Z",
  updated_at: "2024-07-10T00:00:00Z",
};

const roles4: PreviousRole[] = [
  {
    id: "role-6",
    official_id: "official-4",
    role_fi: "Neuvotteleva virkamies",
    role_en: "Ministerial Adviser",
    organization_fi: "Sosiaali- ja terveysministeriö",
    organization_en: "Ministry of Social Affairs and Health",
    start_date: "2017-01-01",
    end_date: "2022-05-31",
    source_url: "https://valtioneuvosto.fi",
  },
];

const affiliations4: Affiliation[] = [];

const statements4: PublicStatement[] = [
  {
    id: "stmt-7",
    official_id: "official-4",
    title_fi: "Lausunto sosiaaliturvan kokonaisuudistuksesta",
    title_en: "Statement on comprehensive social security reform",
    summary_fi:
      "Nieminen esitteli sosiaaliturvauudistuksen vaiheistusta ja korosti tietopohjaisen päätöksenteon merkitystä uudistuksen valmistelussa.",
    summary_en:
      "Nieminen presented the phasing of social security reform and emphasized the importance of evidence-based decision-making in reform preparation.",
    date: "2023-12-01",
    policy_area_id: "pa-3",
    source_url: "https://stm.fi/artikkeli/-/asset_publisher/example7",
    source_name: "Sosiaali- ja terveysministeriö",
  },
];

const feedback4: FeedbackAggregation[] = [
  {
    policy_area_id: "pa-3",
    policy_area_name_fi: "Hallintopolitiikka",
    policy_area_name_en: "Administrative policy",
    total_responses: 64,
    average_rating: 3.6,
    distribution: { 1: 3, 2: 8, 3: 18, 4: 22, 5: 13 },
  },
];

// ─── All profiles ───

const allProfiles: OfficialProfile[] = [
  {
    official: official1,
    previous_roles: roles1,
    affiliations: affiliations1,
    public_statements: statements1,
    feedback: feedback1,
  },
  {
    official: official2,
    previous_roles: roles2,
    affiliations: affiliations2,
    public_statements: statements2,
    feedback: feedback2,
  },
  {
    official: official3,
    previous_roles: roles3,
    affiliations: affiliations3,
    public_statements: statements3,
    feedback: feedback3,
  },
  {
    official: official4,
    previous_roles: roles4,
    affiliations: affiliations4,
    public_statements: statements4,
    feedback: feedback4,
  },
];

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
