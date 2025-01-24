'use client'

import HeroSection from "@/components/ui/hero"
import UpcomingShowsSection from "@/components/ui/upcoming-shows"
import Loading from "./loading"
import { useState } from "react"
import { VenueInfo } from "./data/venue-data"
import Footer from "@/components/ui/footer"


export default function Home() {
  const [activeVenue, setActiveVenue] = useState<VenueInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);



  const handleClick = (href: string) => {
    if (href) {
      const fullUrl = activeVenue?.baseUrl ? `${activeVenue.baseUrl}${href}` : href;
      window.open(fullUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.error(`No URL found for show`);
    }
  }


  const handleVenueSelect = async (venue: VenueInfo) => {
    setIsLoading(true);
    if (venue.fetchData) {
      const shows = await venue.fetchData();
      venue.data = shows;
    }
    setActiveVenue(venue);
    setIsLoading(false);
  };


  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection setActiveVenue={handleVenueSelect} />
      {isLoading ? (
        <Loading />
      ) : (
        activeVenue && (
          <UpcomingShowsSection 
            venueName={activeVenue.name} 
            showData={activeVenue.data} 
            handleClick={handleClick} 
          />
        )
      )}
      <Footer />
    </div>
  );
}