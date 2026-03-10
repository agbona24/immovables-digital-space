import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'packagesPage',
  title: 'Packages Page',
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
      name: 'comparisonTitle',
      title: 'Comparison Section Title',
      type: 'string',
    }),
    defineField({
      name: 'comparisonSubtitle',
      title: 'Comparison Section Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'faqTitle',
      title: 'FAQ Section Title',
      type: 'string',
    }),
    defineField({
      name: 'faqSubtitle',
      title: 'FAQ Section Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Section Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Section Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Packages Page Content' };
    },
  },
});
