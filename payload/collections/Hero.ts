import type { CollectionConfig } from 'payload';

export const Hero: CollectionConfig = {
  slug: 'hero',
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'body',
      type: 'textarea',
    },
  ],
};
