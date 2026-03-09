import type { CollectionConfig } from 'payload';

export const About: CollectionConfig = {
  slug: 'about',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
    },
  ],
};
