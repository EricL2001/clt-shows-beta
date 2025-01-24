export interface Show {
    imageSrc: string;
    imageAlt: string;
    bandName: string;
    secondBand: string;
    venueName: string;
    date: string;
    href: string;
  }
  
  export interface VenueData {
    vzdata: Show[];
    ntdata: Show[];
    musedata: Show[];
  }
  