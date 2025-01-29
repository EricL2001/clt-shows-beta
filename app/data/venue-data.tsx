import { Show } from "@/types"
import { getVisuliteShows } from './db';
import { getNeighborhoodShows } from "./db";

export interface VenueInfo {
  id: string;
  name: string;
  data: Show[];
  baseUrl?: string;
  fetchData?: () => Promise<Show[]>;
}

export const venueData: VenueInfo[] = [
  {
    id: 'vzdata',
    name: 'Visulite Theatre',
    data: [],
    baseUrl: 'https://visulite.com',
    fetchData: getVisuliteShows
  },
  {
    id: 'ntdata',
    name: 'Neighborhood Theatre',
    data: [],
    fetchData: getNeighborhoodShows
  }
  // {
  //   id: 'musedata',
  //   name: 'The Evening Muse',
  //   data: []
  // },
  // {
  //   id: 'snugdata',
  //   name: 'Snug Harbor',
  //   data: []
  // }
]