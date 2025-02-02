import { Button } from "@/components/ui/button"
import { venueData, VenueInfo } from "@/app/data/venue-data"

export default function HeroSection({ setActiveVenue }: { setActiveVenue: (venue: VenueInfo) => void }) {
    return (
      <div className="flex-1 bg-gray-900 text-white">
        <div className="container mx-auto px-4 pt-16 pb-8 flex flex-col text-center align-center">
          <h1 className="text-5xl font-bold mb-4">SEE. MORE. MUSIC. CLT</h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Browse shows at Charlotte venues
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {venueData.map((venue) => (
              <Button
                key={venue.id}
                variant="outline" 
                className="border-white text-white hover:bg-gray-800 hover:text-yellow-400 hover:border-yellow-400"
                onClick={() => setActiveVenue(venue)}
                aria-label={`Show ${venue.name} data`}
              >
                {venue.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    )
  }