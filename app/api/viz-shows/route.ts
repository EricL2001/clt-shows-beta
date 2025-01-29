import { neon } from '@neondatabase/serverless';

export const revalidate = 3600 // invalidate every hour

// get events from visulite and remove old shows
const viz = neon(process.env.DATABASE_URL!);

export async function GET() {
  try {
    const shows = await viz`
      SELECT * FROM events
      WHERE check_date::date >= CURRENT_DATE
    `;
    
    return Response.json(shows);
  } catch (error) {
    // console.error('Database query failed:', error);
    return Response.json({ error: 'Failed to fetch shows', details: error }, { status: 500 });
  }
}
