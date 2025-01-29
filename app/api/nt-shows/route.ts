import { neon } from '@neondatabase/serverless';

export const revalidate = 3600 // invalidate every hour

// get all events from neighborhood and remove old shows
const nt = neon(process.env.DATABASE_URL_1!);

export async function GET() {
  try {
    const shows = await nt`
      SELECT * FROM events
      WHERE check_date::date >= CURRENT_DATE
    `;
    
    return Response.json(shows);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch shows' }, { status: 500 });
  }
}