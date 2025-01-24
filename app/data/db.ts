// fetch shows from visulite neon DB, map thru and return as JSON

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getVisuliteShows() {
  try {

    // await delay(3000);  // Simulate slow network - REMOVE BEFORE PRODUCTION
      const response = await fetch('/api/viz-shows');
      const data = await response.json();

    // Add these console.logs:
    console.log('Raw JSON data:', JSON.stringify(data, null, 2));
    console.log('Date for first event:', data[0].event_date);
   

    return data.map((show: { band_name: string; second_band?: string; venue_name: string; event_date: string; href: string; image_src: string}) => ({
      bandName: show.band_name,
      secondBand: show.second_band || 'No Opener',
      venueName: show.venue_name,
      date: show.event_date,
      href: show.href,
      imageSrc: show.image_src,
      imageAlt: `${show.band_name} at ${show.venue_name}`
    }));
  } catch (error) {
    console.error('Failed to fetch shows:', error);
    return [];
  }
}


// fetch neighborhood shows
export async function getNeighborhoodShows() {
  try {

      // await delay(3000);  // Simulate slow network - REMOVE BEFORE PRODUCTION
      const response = await fetch('/api/nt-shows');
      const data = await response.json();

    // Add these console.logs:
    //console.log('Raw JSON data:', JSON.stringify(data, null, 2));
    //console.log('First show:', data[0]);

    return data.map((show: { band_name: string; second_band?: string; venue_name: string; event_date: string; href: string; image_src: string; }) => ({
      bandName: show.band_name,
      secondBand: show.second_band || 'No Opener',
      venueName: show.venue_name,
      date: show.event_date,
      href: show.href,
      imageSrc: show.image_src,
      imageAlt: `${show.band_name} at ${show.venue_name}`
    }));
  } catch (error) {
    console.error('Failed to fetch shows:', error);
    return [];
  }
}
