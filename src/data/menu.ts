export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price?: string;
  priceNum?: number;
  dietary?: ('Halal' | 'GF' | 'DF' | 'V' | 'VG')[];
  isPopular?: boolean;
  isSignature?: boolean;
  image?: string;
  details?: string;
  servingTime?: 'All Day' | 'Breakfast & Lunch' | 'Lunch & Dinner' | 'Dinner Only';
}

export type MenuCategory = 
  | 'afghan_specialties'
  | 'breakfast_brunch'
  | 'kebabs'
  | 'dumplings_sides'
  | 'sandwiches_burgers'
  | 'drinks'
  | 'desserts';

export interface CategoryInfo {
  id: MenuCategory;
  label: string;
  subtitle: string;
}

export const menuCategories: CategoryInfo[] = [
  { id: 'afghan_specialties', label: 'Afghan Specialties', subtitle: 'Traditional slow-cooked recipes, aromatic rice & family classics' },
  { id: 'breakfast_brunch', label: 'Breakfast & Brunch', subtitle: 'Melbourne morning favourites, free-range eggs & sourdough' },
  { id: 'kebabs', label: 'Kebabs & Grills', subtitle: 'Marinated skewers & spiced patties grilled fresh to order' },
  { id: 'dumplings_sides', label: 'Dumplings & Sides', subtitle: 'Handmade Manto, crispy Bolani & fresh Afghan salads' },
  { id: 'sandwiches_burgers', label: 'Burgers & Toasties', subtitle: 'Gourmet burgers and artisan toasted sandwiches' },
  { id: 'drinks', label: 'Coffee & Chai', subtitle: 'Specialty Melbourne espresso, spiced saffron chai & cold drinks' },
  { id: 'desserts', label: 'Desserts & Sweets', subtitle: 'Traditional Afghan cardamom sweets & artisan pastries' },
];

export const menuItems: MenuItem[] = [
  // Afghan Specialties
  {
    id: 'qabuli-palow',
    name: 'Qabuli Palow',
    category: 'afghan_specialties',
    description: 'Aromatic seasoned sella basmati rice layered with tender slow-cooked spiced lamb shank, topped with julienned caramelized carrots, plump black raisins, and toasted almonds.',
    price: '$26.50',
    priceNum: 26.5,
    dietary: ['Halal', 'GF', 'DF'],
    isSignature: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
    details: 'The national dish of Afghanistan. Cooked with whole cloves, cardamom pods, and cumin, served with a side of house-made Afghan salata and pickled garlic.',
    servingTime: 'Lunch & Dinner',
  },
  {
    id: 'manto-main',
    name: 'Manto (Afghan Steamed Dumplings)',
    category: 'afghan_specialties',
    description: 'Thin handcrafted pastry pockets filled with lightly spiced minced beef and onions, gently steamed and served over a bed of slow-cooked yellow split pea sauce, garlic-mint yogurt (chaka), and dried wild mint.',
    price: '$24.00',
    priceNum: 24.0,
    dietary: ['Halal'],
    isSignature: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=800&auto=format&fit=crop',
    details: 'Delicate dumplings hand-pinched daily in our kitchen. Served in portions of 8 or 12 for sharing.',
    servingTime: 'Lunch & Dinner',
  },
  {
    id: 'borani-banjan',
    name: 'Borani Banjan',
    category: 'afghan_specialties',
    description: 'Layers of pan-fried eggplant simmered in a spiced tomato, turmeric and garlic reduction, finished with creamy strained garlic yogurt and cracked mint. Served with fresh hot Afghan flatbread.',
    price: '$21.00',
    priceNum: 21.0,
    dietary: ['Halal', 'V', 'GF'],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop',
    details: 'Rich, comforting and naturally vegetarian. Best enjoyed by dipping fresh stone-baked flatbread.',
    servingTime: 'Lunch & Dinner',
  },
  {
    id: 'kabana-mixed-grill',
    name: 'Kabana Mixed Grill Platter',
    category: 'afghan_specialties',
    description: 'The ultimate tasting platter: 1x Lamb Tika skewer, 1x Chicken Shish skewer, 1x Chapli Kebab patty. Served on a bed of seasoned saffron rice, grilled chilli, lemon, and green herb chutney.',
    price: '$34.50',
    priceNum: 34.5,
    dietary: ['Halal', 'GF'],
    isSignature: true,
    details: 'Ideal for serious appetite or sharing between two with additional flatbread.',
    servingTime: 'Lunch & Dinner',
  },

  // Breakfast & Brunch
  {
    id: 'bacon-benny',
    name: 'Bacon Benny',
    category: 'breakfast_brunch',
    description: 'Crispy thick-cut smoked beef bacon (or pork bacon option), two poached free-range eggs, house-churned citrus hollandaise, and baby spinach served on toasted brioche.',
    price: '$22.50',
    priceNum: 22.5,
    dietary: ['Halal'],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=800&auto=format&fit=crop',
    servingTime: 'Breakfast & Lunch',
  },
  {
    id: 'avocado-feta-smash',
    name: 'Avocado & Feta Smash',
    category: 'breakfast_brunch',
    description: 'Fresh Haas avocado smashed with crumbled Danish feta, mint, lemon oil, heirloom cherry tomatoes, roasted pepitas, and house dukkah on organic seeded sourdough.',
    price: '$21.00',
    priceNum: 21.0,
    dietary: ['Halal', 'V'],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop',
    servingTime: 'Breakfast & Lunch',
  },
  {
    id: 'chilli-scrambled-eggs',
    name: 'Chilli Scrambled Eggs',
    category: 'breakfast_brunch',
    description: 'Silky scrambled free-range eggs folded with house chilli crisp, sliced shallots, coriander, whipped feta, and fried curry leaves on toasted dark rye sourdough.',
    price: '$22.00',
    priceNum: 22.0,
    dietary: ['Halal', 'V'],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800&auto=format&fit=crop',
    servingTime: 'Breakfast & Lunch',
  },
  {
    id: 'kabana-big-breakfast',
    name: 'Kabana Big Breakfast',
    category: 'breakfast_brunch',
    description: 'Two eggs cooked your way, grilled beef sausage, crispy bacon, hash brown, thyme roasted field mushrooms, grilled tomato, and sourdough toast.',
    price: '$25.50',
    priceNum: 25.5,
    dietary: ['Halal'],
    servingTime: 'Breakfast & Lunch',
  },
  {
    id: 'brioche-french-toast',
    name: 'Brioche French Toast',
    category: 'breakfast_brunch',
    description: 'Custard-soaked golden brioche, seasonal macerated berries, whipped vanilla mascarpone, pistachio crumb, and pure Canadian maple syrup.',
    price: '$21.50',
    priceNum: 21.5,
    dietary: ['Halal', 'V'],
    servingTime: 'Breakfast & Lunch',
  },

  // Kebabs & Grills
  {
    id: 'chapli-kebab-plate',
    name: 'Chapli Kebab Plate',
    category: 'kebabs',
    description: 'Two large pan-fried patties of freshly ground beef infused with crushed coriander seeds, pomegranate molasses, green chillies, diced tomatoes and scallions. Served with warm flatbread and salad.',
    price: '$23.50',
    priceNum: 23.5,
    dietary: ['Halal', 'DF'],
    isSignature: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
    servingTime: 'Lunch & Dinner',
  },
  {
    id: 'tika-lamb-kebab',
    name: 'Lamb Tika Kebab Skewers',
    category: 'kebabs',
    description: 'Tender diced Australian lamb backstrap marinated in saffron, garlic, cracked pepper and sumac, grilled over open flames. Served with saffron basmati rice or fresh naan bread.',
    price: '$25.50',
    priceNum: 25.5,
    dietary: ['Halal', 'GF'],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    servingTime: 'Lunch & Dinner',
  },
  {
    id: 'chicken-shish-kebab',
    name: 'Chicken Shish Kebab',
    category: 'kebabs',
    description: 'Succulent chicken breast skewers marinated in mild paprika, Greek yogurt, lemon juice and Afghan spice blend, grilled with charred peppers and onions.',
    price: '$23.00',
    priceNum: 23.0,
    dietary: ['Halal', 'GF'],
    servingTime: 'Lunch & Dinner',
  },

  // Dumplings & Sides
  {
    id: 'bolani-potato-leek',
    name: 'Bolani (Stuffed Flatbread)',
    category: 'dumplings_sides',
    description: 'Traditional Afghan pan-fried unleavened flatbread stuffed with spiced potatoes, spring leeks, and herbs. Served hot with garlic yogurt dipping sauce and spicy green chutney.',
    price: '$16.50',
    priceNum: 16.5,
    dietary: ['Halal', 'V'],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop',
    servingTime: 'All Day',
  },
  {
    id: 'ashak-dumplings',
    name: 'Ashak (Scallion Dumplings)',
    category: 'dumplings_sides',
    description: 'Handmade dumplings filled with fresh scallions and leeks, gently boiled, layered with rich lamb meat sauce (or lentil sauce for V), garlic yogurt and mint.',
    price: '$22.00',
    priceNum: 22.0,
    dietary: ['Halal', 'V'],
    servingTime: 'Lunch & Dinner',
  },
  {
    id: 'afghan-salata',
    name: 'Afghan Salata',
    category: 'dumplings_sides',
    description: 'Finely diced Persian cucumbers, ripe Roma tomatoes, red onion, fresh mint, coriander, dressed with freshly squeezed lemon juice and cold-pressed extra virgin olive oil.',
    price: '$9.50',
    priceNum: 9.5,
    dietary: ['Halal', 'VG', 'GF', 'DF'],
    servingTime: 'All Day',
  },

  // Burgers & Toasties
  {
    id: 'kabana-wagyu-burger',
    name: 'Kabana Wagyu Burger & Chips',
    category: 'sandwiches_burgers',
    description: '200g premium halal Wagyu beef patty, melted aged cheddar, oak lettuce, heirloom tomato, caramelized onions, house pickles and smoky barbecue aioli on toasted milk bun.',
    price: '$22.00',
    priceNum: 22.0,
    dietary: ['Halal'],
    servingTime: 'Lunch & Dinner',
  },
  {
    id: 'crispy-chicken-burger',
    name: 'Crispy Buttermilk Chicken Burger',
    category: 'sandwiches_burgers',
    description: 'Herb-crusted buttermilk fried chicken breast, crunchy jalapeño slaw, cheese, and spicy chipotle mayo on a toasted brioche bun with chips.',
    price: '$21.00',
    priceNum: 21.0,
    dietary: ['Halal'],
    servingTime: 'Lunch & Dinner',
  },

  // Coffee & Chai
  {
    id: 'melbourne-espresso',
    name: 'Espresso / Flat White / Latte',
    category: 'drinks',
    description: 'Specialty Melbourne roasted Arabica beans. Velvety milk texture, notes of dark chocolate and toasted hazelnuts.',
    price: '$4.80 / $5.50',
    priceNum: 4.8,
    dietary: ['Halal', 'V'],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    servingTime: 'All Day',
  },
  {
    id: 'afghan-saffron-chai',
    name: 'Traditional Cardamom & Saffron Chai',
    category: 'drinks',
    description: 'Slow-brewed black tea infused with whole green cardamom pods, saffron strands and a hint of cinnamon. Served sweetened or unsweetened in a traditional glass.',
    price: '$6.00',
    priceNum: 6.0,
    dietary: ['Halal', 'VG', 'GF'],
    isSignature: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
    servingTime: 'All Day',
  },
  {
    id: 'iced-matcha-latte',
    name: 'Ceremonial Iced Matcha Latte',
    category: 'drinks',
    description: 'Japanese ceremonial grade Uji matcha whisked with your choice of oat, almond, or full-cream milk over ice.',
    price: '$6.50',
    priceNum: 6.5,
    dietary: ['Halal', 'V'],
    servingTime: 'All Day',
  },

  // Desserts
  {
    id: 'firni-pudding',
    name: 'Firni (Afghan Cardamom & Rose Custard)',
    category: 'desserts',
    description: 'Silk-smooth chilled milk and ground rice pudding subtly infused with cracked cardamom and rose water, garnished with crushed green pistachios and edible rose petals.',
    price: '$10.00',
    priceNum: 10.0,
    dietary: ['Halal', 'V', 'GF'],
    isSignature: true,
    servingTime: 'All Day',
  },
  {
    id: 'pistachio-baklava',
    name: 'Artisan Pistachio Baklava (2 pcs)',
    category: 'desserts',
    description: 'Layers of crispy golden filo pastry filled with roasted Turkish pistachios, soaked in fragrant blossom syrup.',
    price: '$8.50',
    priceNum: 8.5,
    dietary: ['Halal', 'V'],
    servingTime: 'All Day',
  },
];
