export function GetLocalizedSlug(slug, locale) {
  if (!slug) return "";
  return slug[locale] || slug["uk"];
}
