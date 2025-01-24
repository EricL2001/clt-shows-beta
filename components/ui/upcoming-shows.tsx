import { Show } from "@/types"
import ShowCard from "@/components/ui/show-card"

export default function UpcomingShowsSection({ venueName, showData, handleClick }: { venueName: string, showData: Show[], handleClick: (href: string) => void }) {
    return (
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Upcoming Shows at {venueName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {showData.map((show, index) => (
                <ShowCard key={index} show={show} handleClick={handleClick} />
              ))}
            </div>
          </div>
      </div>
    )
  }