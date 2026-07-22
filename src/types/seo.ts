export interface SEOProps {
  title: string;
  description: string;
  /** Path under public/ for the social preview image, e.g. "/og-image.png". */
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  /** One or more schema.org objects, each rendered as its own JSON-LD script. */
  structuredData?: Record<string, unknown>[];
}
