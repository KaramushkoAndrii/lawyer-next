// export const BuildServicesData = [
//   {
//     text: "maino",
//     slug: {
//       ru: "nedvizhimost",
//       uk: "maino",
//     },
//     id: 1,
//   },
//   {
//     text: "arenda",
//     slug: {
//       ru: "arenda",
//       uk: "orenda",
//     },
//     id: 2,
//   },
//   {
//     text: "spory",
//     slug: {
//       ru: "spory",
//       uk: "spory-uk",
//     },
//     id: 3,
//   },
//   {
//     text: "spravy",
//     slug: {
//       ru: "dela",
//       uk: "spravy",
//     },
//     id: 4,
//   },
// ];

// Данные для строительства (уже есть)
export const BuildServicesData = [
  {
    text: "maino",
    slug: { ru: "nedvizhimost", uk: "maino" },
    id: 1,
    title: "Hello world",
    description: "This description about maino",
  },
  {
    text: "arenda",
    slug: { ru: "arenda", uk: "orenda" },
    id: 2,
    title: "This page about arenda",
    description: "description about arenda",
  },
  {
    text: "spory",
    slug: { ru: "spory", uk: "spory-uk" },
    id: 3,
    title: "This page about spors",
    description: "description about spors",
  },
  {
    text: "spravy",
    slug: { ru: "dela", uk: "spravy" },
    id: 4,
    title: "This page about spravy",
    description: "This description about spravy",
  },
];

// Семейные дела
export const FamilyServicesData = [
  { text: "divorce", slug: { ru: "razvod", uk: "rozluchennya" }, id: 1 },
  { text: "alimony", slug: { ru: "alimenty", uk: "alimony-uk" }, id: 2 },
];

// Военное право
export const MilitaryServicesData = [
  {
    text: "mobilization",
    slug: { ru: "mobilizaciya", uk: "mobilizaciya-uk" },
    id: 1,
  },
  { text: "payments", slug: { ru: "vyplaty", uk: "vyplaty-vsu" }, id: 2 },
];

// Услуги адвоката
export const LawyerServicesData = [
  {
    text: "consultation",
    slug: { ru: "konsultaciya", uk: "konsultaciya-uk" },
    id: 1,
  },
  { text: "court", slug: { ru: "sud", uk: "sud-predstavnitstvo" }, id: 2 },
];

// Возврат долгов
export const DutyServicesData = [
  {
    text: "debt_recovery",
    slug: { ru: "vzyskanie", uk: "styagnennya-borgu" },
    id: 1,
  },
  { text: "receipt", slug: { ru: "raspiska", uk: "rozpiska" }, id: 2 },
];

// Защита должников
export const ProtectionServicesData = [
  { text: "bankruptcy", slug: { ru: "bankrotstvo", uk: "bankrutstvo" }, id: 1 },
  {
    text: "executive_stop",
    slug: { ru: "ispolnitelnoe", uk: "vikonavche-provadzhennya" },
    id: 2,
  },
];

// Трудовое право
export const WorkerServicesData = [
  { text: "dismissal", slug: { ru: "uvolnenie", uk: "zvilnennya" }, id: 1 },
  { text: "salary", slug: { ru: "zarplata", uk: "zarplata-uk" }, id: 2 },
];

// Административное право
export const LawServicesData = [
  { text: "fines", slug: { ru: "shtrafy", uk: "shtrafy" }, id: 1 },
  {
    text: "appeals",
    slug: { ru: "oskarzhennya", uk: "oskarzhennya-uk" },
    id: 2,
  },
];

// Административные правонарушения
export const ViolationServicesData = [
  { text: "dtp", slug: { ru: "dtp", uk: "dtp-uk" }, id: 1 },
  { text: "alcohol", slug: { ru: "st130", uk: "st130-uk" }, id: 2 },
];

// Единый реестр для поиска слагов в LangSwitcher
// Ключи должны совпадать с корневыми сегментами из routing.js (без слеша в начале для удобства поиска)
export const AllServicesData = {
  build: BuildServicesData,
  family: FamilyServicesData,
  military: MilitaryServicesData,
  lawyer: LawyerServicesData,
  duty: DutyServicesData,
  protection: ProtectionServicesData,
  worker: WorkerServicesData,
  law: LawServicesData,
  violation: ViolationServicesData,
};
