import { env } from '~/modules/env.server';
import QRCode from 'qrcode';

export async function loader() {
  const websiteUrl = `${env.server.origin}/`;
  const qrCode = await QRCode.toBuffer(websiteUrl, { width: 1200 });
  return new Response(qrCode, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': `public, max-age=${60 * 60 * 24}`,
    },
  });
}
