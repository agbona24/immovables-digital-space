import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'insightsPage',
  title: 'Insights Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroHighlight',
      title: 'Hero Highlight Text (Orange)',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'categories',
      title: 'Filter Categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., All, AI, SEO, Marketing, Technology',
    }),
    defineField({
      name: 'newsletterTitle',
      title: 'Newsletter Section Title',
      type: 'string',
    }),
    defineField({
      name: 'newsletterSubtitle',
      title: 'Newsletter Section Subtitle',
      type: 'text',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Insights Page Content' };
    },
  },
});
