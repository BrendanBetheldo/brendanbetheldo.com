import type { Metadata } from 'next';
import config from '@payload-config';
import { RootPage, generatePageMetadata } from '@payloadcms/next/views';
import { importMap } from '../importMap';

type Args = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
};

export const generateMetadata = (args: Args): Promise<Metadata> =>
  generatePageMetadata({ config, ...args });

export default function AdminPage(args: Args): Promise<React.ReactElement> {
  return RootPage({ config, ...args, importMap });
}
