export const LEARNING_SERIES_SLUG = "backend-first-principles";

export function getLearningPathUrl(seriesSlug: string) {
  return `/learning/${seriesSlug}`;
}

export function getLearningDaySlug(dayNumber: number) {
  return `day-${String(dayNumber).padStart(2, "0")}`;
}

export function getLearningDayUrl(seriesSlug: string, dayNumber: number) {
  return `${getLearningPathUrl(seriesSlug)}/${getLearningDaySlug(dayNumber)}`;
}

export function getLearningPartUrl(seriesSlug: string, dayNumber: number, partSlug: string) {
  return `${getLearningDayUrl(seriesSlug, dayNumber)}/${partSlug}`;
}
