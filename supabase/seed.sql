-- Seed data for Virkavastuu.fi
-- Run after schema.sql to populate the database with test data

-- Policy areas
INSERT INTO policy_areas (id, name_fi, name_en, slug, description_fi, description_en) VALUES
  (gen_random_uuid(), 'Talouspolitiikka', 'Economic policy', 'economic-policy', 'Julkisen talouden suunnittelu ja hallinta', 'Public finance planning and management'),
  (gen_random_uuid(), 'Digitalisaatio', 'Digitalization', 'digitalization', 'Julkisten palveluiden digitalisointi', 'Digitalization of public services'),
  (gen_random_uuid(), 'Hallintopolitiikka', 'Administrative policy', 'administrative-policy', 'Julkishallinnon rakenteet ja prosessit', 'Public administration structures and processes'),
  (gen_random_uuid(), 'Lainsäädäntö', 'Legislation', 'legislation', 'Lakien valmistelu ja säädöspolitiikka', 'Legislative preparation and regulatory policy'),
  (gen_random_uuid(), 'Ympäristöpolitiikka', 'Environmental policy', 'environmental-policy', 'Ympäristönsuojelu ja kestävä kehitys', 'Environmental protection and sustainable development'),
  (gen_random_uuid(), 'Koulutuspolitiikka', 'Education policy', 'education-policy', 'Koulutuksen kehittäminen ja tutkimuspolitiikka', 'Education development and research policy');

-- Officials
INSERT INTO officials (id, slug, first_name, last_name, title_fi, title_en, organization_fi, organization_en, appointment_date, appointed_by_fi, appointed_by_en, bio_fi, bio_en) VALUES
  (gen_random_uuid(), 'matti-virtanen', 'Matti', 'Virtanen', 'Ylijohtaja', 'Director General', 'Valtiovarainministeriö', 'Ministry of Finance', '2021-03-15', 'Valtioneuvosto', 'Council of State',
   'Matti Virtanen on toiminut valtiovarainministeriön ylijohtajana vuodesta 2021. Hän vastaa julkisen hallinnon ICT-osastosta ja digitalisaation edistämisestä valtionhallinnossa.',
   'Matti Virtanen has served as Director General at the Ministry of Finance since 2021. He oversees the public administration ICT department and the advancement of digitalization in state governance.'),
  (gen_random_uuid(), 'anna-korhonen', 'Anna', 'Korhonen', 'Kansliapäällikkö', 'Permanent Secretary', 'Ympäristöministeriö', 'Ministry of the Environment', '2020-09-01', 'Tasavallan presidentti', 'President of the Republic',
   'Anna Korhonen johtaa ympäristöministeriön toimintaa kansliapäällikkönä. Hänellä on pitkä kokemus ympäristöhallinnosta ja ilmastopolitiikasta.',
   'Anna Korhonen leads the Ministry of the Environment as Permanent Secretary. She has extensive experience in environmental administration and climate policy.'),
  (gen_random_uuid(), 'jukka-lahtinen', 'Jukka', 'Lahtinen', 'Pääjohtaja', 'Director General', 'Opetushallitus', 'Finnish National Agency for Education', '2019-01-01', 'Valtioneuvosto', 'Council of State',
   'Jukka Lahtinen johtaa Opetushallitusta ja vastaa koulutuksen kehittämisestä, opetussuunnitelmien valmistelusta ja koulutuksen laadun arvioinnista.',
   'Jukka Lahtinen leads the Finnish National Agency for Education and is responsible for education development, curriculum preparation, and education quality evaluation.'),
  (gen_random_uuid(), 'liisa-nieminen', 'Liisa', 'Nieminen', 'Osastopäällikkö', 'Department Head', 'Sosiaali- ja terveysministeriö', 'Ministry of Social Affairs and Health', '2022-06-01', 'Valtioneuvosto', 'Council of State',
   'Liisa Nieminen johtaa sosiaali- ja terveysministeriön hyvinvointiosastoa. Hän on erikoistunut sosiaaliturvan uudistamiseen ja terveydenhuollon digitalisaatioon.',
   'Liisa Nieminen heads the welfare department at the Ministry of Social Affairs and Health. She specializes in social security reform and healthcare digitalization.');

-- Note: Previous roles, affiliations, public statements, and feedback ratings
-- should be inserted with references to the generated UUIDs above.
-- In production, use a migration script that captures the generated IDs.
-- For development, the app uses static seed data from src/lib/seed-data.ts.
