import { Show } from "@/types"
import Image from 'next/image'
import { Button } from './button'

export default function ShowCard({ show, handleClick }: { show: Show, handleClick: (href: string) => void }) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg border-[0.5px] border-white">
        <Image
          src={show.imageSrc}
          alt={show.imageAlt}
          width={400}
          height={200}
          className="mb-4 rounded"
        />
        <h3 className="text-l font-semibold text-white">{show.bandName}</h3>
        <p className="text-sm text-white mb-4 italic">{show.secondBand !== "No Opener" ? show.secondBand : ""}</p>
        <p className="text-white text-sm mb-1">{show.venueName}</p>
        <p className="text-white mb-2 text-sm">{show.date}</p>
        <Button onClick={() => handleClick(show.href)} variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-gray-800 hover:text-white">
          Info & Tickets
        </Button>
      </div>
    )
  }