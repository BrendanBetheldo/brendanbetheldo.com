import path from 'path';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { Hero } from './payload/collections/Hero';
import { About } from './payload/collections/About';
import { Expertise } from './payload/collections/Expertise';
import { Projects } from './payload/collections/Projects';
import { Contact } from './payload/collections/Contact';
import { Users } from './payload/collections/Users';

export default buildConfig({
  admin: {
    meta: {
      titleSuffix: ' — brendanbetheldo.com',
    },
    user: Users.slug,
  },
  collections: [Users, Hero, About, Expertise, Projects, Contact],
  db: postgresAdapter({
    pool: {
      connectionString: process.env['DATABASE_URI'] ?? '',
    },
  }),
  secret: process.env['PAYLOAD_SECRET'] ?? '',
  typescript: {
    outputFile: path.resolve(process.cwd(), 'payload-types.ts'),
  },
});
