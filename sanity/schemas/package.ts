import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'package',
  title: 'Package/Pricing',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g., ₦500K or ₦1M',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'period',
      title: 'Billing Period',
      type: 'string',
      options: {
        list: [
          { title: 'One-time', value: 'one-time' },
          { title: 'Monthly', value: 'monthly' },
          { title: 'Yearly', value: 'yearly' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'features',
      title: 'Included Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'notIncluded',
      title: 'Not Included',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'highlighted',
      title: 'Highlight (Popular)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
    },
  },
});
