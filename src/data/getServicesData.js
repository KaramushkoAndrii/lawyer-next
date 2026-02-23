import { AllServicesData } from "./servicesData";

export async function getServicesBySlug(category, slug, locale) {
  const categoryData = AllServicesData[category];
  if (!categoryData) return null;

  return categoryData.find((item) => item.slug[locale] === slug) || null;
}
