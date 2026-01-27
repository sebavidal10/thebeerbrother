export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const formatDate = (date: string | Date) => {
  const d = new Date(date);
  return {
    year: d.getFullYear().toString(),
    month: (d.getMonth() + 1).toString().padStart(2, '0'),
    day: d.getDate().toString().padStart(2, '0'),
  };
};

// Image path resolver for Astro optimization
export const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpeg,jpg,png,gif}',
);
