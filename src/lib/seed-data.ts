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
];

// Test official: a fictional senior civil servant
const testOfficial: Official = {
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

const previousRoles: PreviousRole[] = [
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

const affiliations: Affiliation[] = [
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

const publicStatements: PublicStatement[] = [
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
    source_url: "https://lausunto.fi/FI/Proposal/Participation?proposalId=example1",
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
    title_en: "Statement on proposed amendments to the Information Management Act",
    summary_fi:
      "Virtanen kannatti tiedonhallintalain tiukentamista ja esitti automaattisen päätöksenteon läpinäkyvyysvaatimuksia.",
    summary_en:
      "Virtanen supported tightening the Information Management Act and proposed transparency requirements for automated decision-making.",
    date: "2024-02-10",
    policy_area_id: "pa-4",
    source_url: "https://lausunto.fi/FI/Proposal/Participation?proposalId=example3",
    source_name: "Lausunto.fi",
  },
];

const feedbackAggregations: FeedbackAggregation[] = [
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

export const testOfficialProfile: OfficialProfile = {
  official: testOfficial,
  previous_roles: previousRoles,
  affiliations: affiliations,
  public_statements: publicStatements,
  feedback: feedbackAggregations,
};

export function getOfficialBySlug(slug: string): OfficialProfile | null {
  if (slug === "matti-virtanen") {
    return testOfficialProfile;
  }
  return null;
}

export function getAllOfficials(): Official[] {
  return [testOfficial];
}
