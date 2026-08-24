export interface BusinessInfo {
  name: string;
  subname: string;
  tagline: string;
  address: {
    street: string;
    suburb: string;
    state: string;
    postcode: string;
    full: string;
  };
  phone: string;
  phoneDisplay: string;
  email: string;
  googleMapsUrl: string;
  googleRating: number;
  reviewCount: number;
  hours: {
    period: string;
    times: string;
    note?: string;
  }[];
  highlights: string[];
}

export const businessInfo: BusinessInfo = {
  name: "KABANA CAFE",
  subname: "NARRE WARREN",
  tagline: "Afghan flavours, breakfast, brunch and coffee in Narre Warren.",
  address: {
    street: "58 Victor Cres",
    suburb: "Narre Warren",
    state: "VIC",
    postcode: "3805",
    full: "58 Victor Cres, Narre Warren VIC 3805",
  },
  phone: "0387903218",
  phoneDisplay: "(03) 8790 3218",
  email: "hello@kabanacafe.com.au",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=58+Victor+Cres+Narre+Warren+VIC+3805",
  googleRating: 4.8,
  reviewCount: 590,
  hours: [
    { period: "Monday – Thursday", times: "7:00 AM – 4:00 PM", note: "Breakfast, Lunch & Coffee" },
    { period: "Friday", times: "7:00 AM – 9:00 PM", note: "All-Day Dining & Afghan Dinner" },
    { period: "Saturday", times: "8:00 AM – 4:00 PM", note: "Brunch & Weekend Specials" },
    { period: "Sunday", times: "8:00 AM – 4:00 PM", note: "Brunch & Weekend Specials" },
  ],
  highlights: [
    "100% Halal Certified Kitchen",
    "Specialty Melbourne Roasted Coffee",
    "Handmade Afghan Dumplings & Rice",
    "Outdoor & Indoor Dining",
    "Easy On-Site Precinct Parking",
  ],
};
