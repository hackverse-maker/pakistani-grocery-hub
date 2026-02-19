export interface Product {
  id: number;
  name: string;
  nameUrdu?: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  category: string;
  brand: string;
  unit: string;
  inStock: boolean;
  isBestSeller?: boolean;
  isDeal?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: "grocery", name: "Grocery", icon: "🛒", count: 245 },
  { id: "fruits-vegetables", name: "Fruits & Vegetables", icon: "🥬", count: 89 },
  { id: "beverages", name: "Beverages", icon: "🥤", count: 112 },
  { id: "snacks", name: "Snacks", icon: "🍿", count: 78 },
  { id: "personal-care", name: "Personal Care", icon: "🧴", count: 156 },
  { id: "household", name: "Household", icon: "🏠", count: 134 },
  { id: "baby-products", name: "Baby Products", icon: "🍼", count: 67 },
  { id: "frozen-food", name: "Frozen Food", icon: "🧊", count: 45 },
];

export const products: Product[] = [
  {
    id: 1, name: "Basmati Rice", nameUrdu: "باسمتی چاول", price: 1250, oldPrice: 1450, discount: 14,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
    category: "grocery", brand: "Guard", unit: "5kg", inStock: true, isBestSeller: true, isDeal: true,
  },
  {
    id: 2, name: "Tapal Danedar Tea", nameUrdu: "ٹاپل دانے دار چائے", price: 890, oldPrice: 950, discount: 6,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=300&h=300&fit=crop",
    category: "beverages", brand: "Tapal", unit: "900g", inStock: true, isBestSeller: true, isDeal: true,
  },
  {
    id: 3, name: "Nestle Milk Pack", nameUrdu: "نیسلے ملک پیک", price: 260, oldPrice: 290, discount: 10,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop",
    category: "beverages", brand: "Nestle", unit: "1L", inStock: true, isDeal: true,
  },
  {
    id: 4, name: "National Biryani Masala", nameUrdu: "نیشنل بریانی مصالحہ", price: 120, oldPrice: 150, discount: 20,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop",
    category: "grocery", brand: "National", unit: "50g x 2", inStock: true, isDeal: true,
  },
  {
    id: 5, name: "Surf Excel Washing Powder", nameUrdu: "سرف ایکسل", price: 750, oldPrice: 850, discount: 12,
    image: "https://images.unsplash.com/photo-1585441695325-21557ef66ff4?w=300&h=300&fit=crop",
    category: "household", brand: "Surf Excel", unit: "3kg", inStock: true, isBestSeller: true,
  },
  {
    id: 6, name: "Olper's Full Cream Milk", nameUrdu: "اولپرز دودھ", price: 270,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop",
    category: "beverages", brand: "Olper's", unit: "1.5L", inStock: true, isBestSeller: true,
  },
  {
    id: 7, name: "Shan Biryani Masala", nameUrdu: "شان بریانی مصالحہ", price: 135, oldPrice: 160, discount: 16,
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=300&h=300&fit=crop",
    category: "grocery", brand: "Shan", unit: "60g x 2", inStock: true, isDeal: true,
  },
  {
    id: 8, name: "Lux Soap Bar", nameUrdu: "لکس صابن", price: 95, oldPrice: 110, discount: 14,
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=300&h=300&fit=crop",
    category: "personal-care", brand: "Lux", unit: "Pack of 3", inStock: true,
  },
  {
    id: 9, name: "Pampers Baby Diapers", nameUrdu: "پیمپرز", price: 1850, oldPrice: 2100, discount: 12,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
    category: "baby-products", brand: "Pampers", unit: "Large 40pcs", inStock: true,
  },
  {
    id: 10, name: "Kolson Spaghetti", nameUrdu: "کولسن اسپگیٹی", price: 210, oldPrice: 240, discount: 13,
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&h=300&fit=crop",
    category: "grocery", brand: "Kolson", unit: "400g", inStock: true,
  },
  {
    id: 11, name: "Dalda Cooking Oil", nameUrdu: "ڈالڈا کوکنگ آئل", price: 680, oldPrice: 750, discount: 9,
    image: "https://images.unsplash.com/photo-1474979266404-7eadf1044a0e?w=300&h=300&fit=crop",
    category: "grocery", brand: "Dalda", unit: "3L", inStock: true, isBestSeller: true,
  },
  {
    id: 12, name: "Peek Freans Sooper Biscuits", nameUrdu: "سوپر بسکٹ", price: 55,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop",
    category: "snacks", brand: "Peek Freans", unit: "Half Roll", inStock: true,
  },
  {
    id: 13, name: "Fresh Bananas", nameUrdu: "تازہ کیلے", price: 120,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop",
    category: "fruits-vegetables", brand: "Fresh", unit: "1 Dozen", inStock: true,
  },
  {
    id: 14, name: "K&N's Chicken Nuggets", nameUrdu: "کے اینڈ اینز نگٹس", price: 590, oldPrice: 650, discount: 9,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=300&fit=crop",
    category: "frozen-food", brand: "K&N's", unit: "1kg", inStock: true, isBestSeller: true,
  },
  {
    id: 15, name: "Sunsilk Shampoo", nameUrdu: "سن سلک شیمپو", price: 380, oldPrice: 420, discount: 10,
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=300&h=300&fit=crop",
    category: "personal-care", brand: "Sunsilk", unit: "360ml", inStock: true,
  },
  {
    id: 16, name: "Sufi Sunflower Oil", nameUrdu: "صوفی سورج مکھی تیل", price: 620, oldPrice: 700, discount: 11,
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=300&h=300&fit=crop",
    category: "grocery", brand: "Sufi", unit: "3L", inStock: true, isDeal: true,
  },
  {
    id: 17, name: "Fresh Tomatoes", nameUrdu: "تازہ ٹماٹر", price: 180,
    image: "https://images.unsplash.com/photo-1546470427-0d4db154ceb8?w=300&h=300&fit=crop",
    category: "fruits-vegetables", brand: "Fresh", unit: "1kg", inStock: true,
  },
  {
    id: 18, name: "Coca-Cola", nameUrdu: "کوکا کولا", price: 150, oldPrice: 170, discount: 12,
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=300&fit=crop",
    category: "beverages", brand: "Coca-Cola", unit: "1.5L", inStock: true,
  },
  {
    id: 19, name: "Lays Classic Chips", nameUrdu: "لیز کلاسک", price: 70,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop",
    category: "snacks", brand: "Lays", unit: "Large Pack", inStock: true,
  },
  {
    id: 20, name: "Harpic Toilet Cleaner", nameUrdu: "ہارپک", price: 320, oldPrice: 360, discount: 11,
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=300&h=300&fit=crop",
    category: "household", brand: "Harpic", unit: "500ml", inStock: true,
  },
];

export const brands = ["Guard", "Tapal", "Nestle", "National", "Surf Excel", "Olper's", "Shan", "Lux", "Pampers", "Kolson", "Dalda", "Peek Freans", "K&N's", "Sunsilk", "Sufi", "Coca-Cola", "Lays", "Harpic"];
