/**
 * Converts a title + ID into a slug (for URLs).
 */
export function slugifyTitleWithId(id: number, title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
  return `${id}-${slug}`;
}

/**
 * Extracts the ID from a slug (e.g. from the URL).
 */
export function extractIdFromSlug(slug: string): number | null {
  const match = slug.match(/^(\d+)-/);
  return match ? parseInt(match[1], 10) : null;
}
