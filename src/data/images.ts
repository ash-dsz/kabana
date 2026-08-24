// Centralized imagery management for Kabana Cafe

export interface FoodImage {
  url: string;
  alt: string;
  caption?: string;
}

export const images = {
  // Hero: Aromatic Qabuli Palow on artisanal ceramic plate
  hero: {
    url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1600&auto=format&fit=crop",
    alt: "Afghan Qabuli Palow rice with tender spiced lamb, caramelized carrots and raisins",
    caption: "Signature Qabuli Palow with slow-cooked lamb and sweet spiced carrots",
  },
  
  // Afghan Specialties
  qabuliPalow: {
    url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop",
    alt: "Traditional Afghan Qabuli Palow rice dish",
    caption: "Aromatic basmati rice, tender lamb, raisins & julienne carrots",
  },
  manto: {
    url: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=1200&auto=format&fit=crop",
    alt: "Steamed Manto dumplings topped with split pea tomato sauce and garlic yogurt",
    caption: "Handmade dumplings filled with spiced ground beef, chaka yogurt and dried mint",
  },
  chapliKebab: {
    url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    alt: "Afghan Chapli Kebab pan-fried patties with fresh coriander and spices",
    caption: "Crispy edged pan-fried spiced patties served with Afghan salata and naan",
  },
  tikaKebab: {
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    alt: "Charcoal grilled marinated lamb and chicken Tika skewers",
    caption: "Marinated overnight in saffron, sumac and garlic, grilled over charcoal",
  },
  bolani: {
    url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop",
    alt: "Crispy pan-fried Afghan Bolani flatbread stuffed with spiced potatoes and leeks",
    caption: "Pan-crisped flatbread with potato and leek filling, served with green chutney",
  },

  // Breakfast & Brunch
  breakfastBenny: {
    url: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=1200&auto=format&fit=crop",
    alt: "Classic Melbourne Bacon Benny with poached eggs and hollandaise",
    caption: "Crispy bacon, poached free-range eggs and house hollandaise on brioche",
  },
  avocadoSmash: {
    url: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop",
    alt: "Avocado and Feta smash on artisan sourdough with herbs and dukkah",
    caption: "Avocado & feta smash on toasted sourdough with heirloom tomatoes",
  },
  chilliScrambled: {
    url: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1200&auto=format&fit=crop",
    alt: "Chilli scrambled eggs with spring onion and toasted sourdough",
    caption: "Soft creamy scramble infused with house chilli crisp and fresh coriander",
  },

  // Coffee & Chai
  coffeeFlatWhite: {
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
    alt: "Melbourne flat white with velvety microfoam latte art",
    caption: "Locally roasted Melbourne espresso blends and silky steamed milk",
  },
  afghanChai: {
    url: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200&auto=format&fit=crop",
    alt: "Traditional aromatic cardamom and saffron Afghan chai in glass cup",
    caption: "Brewed black tea infused with cracked green cardamom pods and saffron",
  },

  // Storefront & Atmosphere
  cafeInterior: {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1400&auto=format&fit=crop",
    alt: "Modern minimalist cafe dining tables with warm sunlight",
    caption: "Clean architectural space designed for relaxed gatherings",
  },
  diningTable: {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
    alt: "Warm shared hospitality dining table at Kabana",
    caption: "Good food made to be shared around the table",
  },
};
