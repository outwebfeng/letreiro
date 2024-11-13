export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const { GOOGLE_TRACKING_ID, GOOGLE_ADSENSE_URL, GOOGLE_ADSENSE_ACCOUNT } = process.env as Record<string, string>;
