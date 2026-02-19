import imgBasmatiRice from "@/assets/products/basmati-rice.jpg";
import imgTapalTea from "@/assets/products/tapal-tea.jpg";
import imgNestleMilk from "@/assets/products/nestle-milk.jpg";
import imgNationalMasala from "@/assets/products/national-masala.jpg";
import imgSurfExcel from "@/assets/products/surf-excel.jpg";
import imgOlpersMilk from "@/assets/products/olpers-milk.jpg";
import imgShanMasala from "@/assets/products/shan-masala.jpg";
import imgLuxSoap from "@/assets/products/lux-soap.jpg";
import imgPampers from "@/assets/products/pampers.jpg";
import imgKolsonSpaghetti from "@/assets/products/kolson-spaghetti.jpg";
import imgDaldaOil from "@/assets/products/dalda-oil.jpg";
import imgSooperBiscuits from "@/assets/products/sooper-biscuits.jpg";
import imgBananas from "@/assets/products/bananas.jpg";
import imgChickenNuggets from "@/assets/products/chicken-nuggets.jpg";
import imgSunsilk from "@/assets/products/sunsilk.jpg";
import imgSufiOil from "@/assets/products/sufi-oil.jpg";
import imgTomatoes from "@/assets/products/tomatoes.jpg";
import imgPepsi from "@/assets/products/pepsi.jpg";
import imgLaysChips from "@/assets/products/lays-chips.jpg";
import imgHarpic from "@/assets/products/harpic.jpg";

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
    image: imgBasmatiRice, category: "grocery", brand: "Guard", unit: "5kg", inStock: true, isBestSeller: true, isDeal: true,
  },
  {
    id: 2, name: "Tapal Danedar Tea", nameUrdu: "ٹاپل دانے دار چائے", price: 890, oldPrice: 950, discount: 6,
    image: imgTapalTea, category: "beverages", brand: "Tapal", unit: "900g", inStock: true, isBestSeller: true, isDeal: true,
  },
  {
    id: 3, name: "Nestle Milk Pack", nameUrdu: "نیسلے ملک پیک", price: 260, oldPrice: 290, discount: 10,
    image: imgNestleMilk, category: "beverages", brand: "Nestle", unit: "1L", inStock: true, isDeal: true,
  },
  {
    id: 4, name: "National Biryani Masala", nameUrdu: "نیشنل بریانی مصالحہ", price: 120, oldPrice: 150, discount: 20,
    image: imgNationalMasala, category: "grocery", brand: "National", unit: "50g x 2", inStock: true, isDeal: true,
  },
  {
    id: 5, name: "Surf Excel Washing Powder", nameUrdu: "سرف ایکسل", price: 750, oldPrice: 850, discount: 12,
    image: imgSurfExcel, category: "household", brand: "Surf Excel", unit: "3kg", inStock: true, isBestSeller: true,
  },
  {
    id: 6, name: "Olper's Full Cream Milk", nameUrdu: "اولپرز دودھ", price: 270,
    image: imgOlpersMilk, category: "beverages", brand: "Olper's", unit: "1.5L", inStock: true, isBestSeller: true,
  },
  {
    id: 7, name: "Shan Biryani Masala", nameUrdu: "شان بریانی مصالحہ", price: 135, oldPrice: 160, discount: 16,
    image: imgShanMasala, category: "grocery", brand: "Shan", unit: "60g x 2", inStock: true, isDeal: true,
  },
  {
    id: 8, name: "Lux Soap Bar", nameUrdu: "لکس صابن", price: 95, oldPrice: 110, discount: 14,
    image: imgLuxSoap, category: "personal-care", brand: "Lux", unit: "Pack of 3", inStock: true,
  },
  {
    id: 9, name: "Pampers Baby Diapers", nameUrdu: "پیمپرز", price: 1850, oldPrice: 2100, discount: 12,
    image: imgPampers, category: "baby-products", brand: "Pampers", unit: "Large 40pcs", inStock: true,
  },
  {
    id: 10, name: "Kolson Spaghetti", nameUrdu: "کولسن اسپگیٹی", price: 210, oldPrice: 240, discount: 13,
    image: imgKolsonSpaghetti, category: "grocery", brand: "Kolson", unit: "400g", inStock: true,
  },
  {
    id: 11, name: "Dalda Cooking Oil", nameUrdu: "ڈالڈا کوکنگ آئل", price: 680, oldPrice: 750, discount: 9,
    image: imgDaldaOil, category: "grocery", brand: "Dalda", unit: "3L", inStock: true, isBestSeller: true,
  },
  {
    id: 12, name: "Peek Freans Sooper Biscuits", nameUrdu: "سوپر بسکٹ", price: 55,
    image: imgSooperBiscuits, category: "snacks", brand: "Peek Freans", unit: "Half Roll", inStock: true,
  },
  {
    id: 13, name: "Fresh Bananas", nameUrdu: "تازہ کیلے", price: 120,
    image: imgBananas, category: "fruits-vegetables", brand: "Fresh", unit: "1 Dozen", inStock: true,
  },
  {
    id: 14, name: "K&N's Chicken Nuggets", nameUrdu: "کے اینڈ اینز نگٹس", price: 590, oldPrice: 650, discount: 9,
    image: imgChickenNuggets, category: "frozen-food", brand: "K&N's", unit: "1kg", inStock: true, isBestSeller: true,
  },
  {
    id: 15, name: "Sunsilk Shampoo", nameUrdu: "سن سلک شیمپو", price: 380, oldPrice: 420, discount: 10,
    image: imgSunsilk, category: "personal-care", brand: "Sunsilk", unit: "360ml", inStock: true,
  },
  {
    id: 16, name: "Sufi Sunflower Oil", nameUrdu: "صوفی سورج مکھی تیل", price: 620, oldPrice: 700, discount: 11,
    image: imgSufiOil, category: "grocery", brand: "Sufi", unit: "3L", inStock: true, isDeal: true,
  },
  {
    id: 17, name: "Fresh Tomatoes", nameUrdu: "تازہ ٹماٹر", price: 180,
    image: imgTomatoes, category: "fruits-vegetables", brand: "Fresh", unit: "1kg", inStock: true,
  },
  {
    id: 18, name: "Pepsi", nameUrdu: "پیپسی", price: 150, oldPrice: 170, discount: 12,
    image: imgPepsi, category: "beverages", brand: "Pepsi", unit: "1.5L", inStock: true,
  },
  {
    id: 19, name: "Lays Classic Chips", nameUrdu: "لیز کلاسک", price: 70,
    image: imgLaysChips, category: "snacks", brand: "Lays", unit: "Large Pack", inStock: true,
  },
  {
    id: 20, name: "Harpic Toilet Cleaner", nameUrdu: "ہارپک", price: 320, oldPrice: 360, discount: 11,
    image: imgHarpic, category: "household", brand: "Harpic", unit: "500ml", inStock: true,
  },
];

export const brands = ["Guard", "Tapal", "Nestle", "National", "Surf Excel", "Olper's", "Shan", "Lux", "Pampers", "Kolson", "Dalda", "Peek Freans", "K&N's", "Sunsilk", "Sufi", "Pepsi", "Lays", "Harpic"];
