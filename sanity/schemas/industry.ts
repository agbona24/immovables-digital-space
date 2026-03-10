import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'industry',
  title: 'Industry',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Industry Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name (Lucide)',
      type: 'string',
      description: 'e.g., Building2, GraduationCap, ShoppingBag, Store, Hotel, Briefcase, Heart, Factory',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'solutions',
      title: 'Solutions Offered',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'stat',
      title: 'Key Statistic',
      type: 'string',
      description: 'e.g., "250% average increase in property inquiries"',
    }),
    defineField({
      name: 'image',
      title: 'Industry Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'stat' },
  },
});
