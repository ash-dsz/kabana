export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  source: 'Google Review' | 'Verified Dine-in';
  highlightDish?: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Daniel M.',
    rating: 5,
    date: '3 weeks ago',
    source: 'Google Review',
    highlightDish: 'Qabuli Palow & Manto',
    text: 'Probably the best Afghan food in the south-east suburbs. The Qabuli Palow lamb shank literally fell off the bone, and the seasoning on the rice was spot on. Also love that they do proper Melbourne specialty coffee in the mornings.',
  },
  {
    id: 'r2',
    author: 'Sarah K.',
    rating: 5,
    date: '1 month ago',
    source: 'Google Review',
    highlightDish: 'Bacon Benny & Saffron Chai',
    text: 'A hidden gem in Narre Warren! We came in for weekend brunch and ordered the Bacon Benny and Chilli Scrambled Eggs alongside their spiced cardamom chai. Beautiful space, relaxed vibe and genuinely warm service.',
  },
  {
    id: 'r3',
    author: 'Farhad N.',
    rating: 5,
    date: '2 months ago',
    source: 'Google Review',
    highlightDish: 'Chapli Kebab & Bolani',
    text: 'Authentic flavours that remind me of family dinners. The Chapli kebabs have that perfect crisp edge and coriander spice kick. Great outdoor seating area as well.',
  },
];
