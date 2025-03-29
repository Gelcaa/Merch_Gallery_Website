import lanyard1 from "../assets/images/products/lanyard1.png";
import lanyard2 from "../assets/images/products/lanyard2.png";
import lanyard3 from "../assets/images/products/lanyard3.png";
import lanyard4 from "../assets/images/products/lanyard4.png";

import totebag1 from "../assets/images/products/totebag1.png";
import totebag2 from "../assets/images/products/totebag2.png";
import totebag3 from "../assets/images/products/totebag3.png";
import totebag4 from "../assets/images/products/totebag4.png";

import tshirt1 from "../assets/images/products/Tshirt1.png";
import tshirt2 from "../assets/images/products/Tshirt2.png";
import tshirt3 from "../assets/images/products/Tshirt3.png";
import tshirt4 from "../assets/images/products/Tshirt4.png";
import tshirt5 from "../assets/images/products/Tshirt5.png";
import tshirt6 from "../assets/images/products/Tshirt6.png";

import pins1 from "../assets/images/products/Pins1.png";
import pins2 from "../assets/images/products/Pins2.png";
import pins3 from "../assets/images/products/Pins3.png";
import pins4 from "../assets/images/products/Pins4.png";
import pins5 from "../assets/images/products/Pins5.png";
import pins6 from "../assets/images/products/Pins6.png";

import cap from "../assets/images/products/Cap.png";

export interface Product {
  id: number;
  name: string;
  price?: number; 
  priceRange?: [number, number]; 
  category: string,
  image?: string;
  description?: string;
}

const products: Product[] = [
  // Cap
  { id: 1, name: "Cap - Animo", price: 250, category: "Cap", image: cap },

  // Lanyards
  { id: 2, name: "Lanyard - Tatak Lasalyano Green", price: 120, category: "Lanyards", image: lanyard1 },
  { id: 3, name: "Lanyard - Tatak Lasalyano Pink", price: 120, category: "Lanyards", image: lanyard2 },
  { id: 4, name: "Lanyard - Never Shall We Fail Pink", price: 120, category: "Lanyards", image: lanyard3 },
  { id: 5, name: "Lanyard - Never Shall We Fail Green", price: 120, category: "Lanyards", image: lanyard4 },

  // Pins
  { id: 6, name: "Pin - Iska", price: 60, category: "Pins", image: pins3 },
  { id: 7, name: "Pin - Iskolar ako, Proud ako", price: 60, category: "Pins", image: pins1 },
  { id: 8, name: "Pin - Isko", price: 60, category: "Pins", image: pins2 },
  { id: 9, name: "Pin - Animo", price: 60, category: "Pins", image: pins4 },
  { id: 10, name: "Pin - Cosa Officer", price: 60, category: "Pins", image: pins5 },
  { id: 11, name: "Pin - Animeow", price: 60, category: "Pins", image: pins6 },

  // Tote Bags
  { id: 12, name: "Tote Bag - Scholar Pink", price: 220, category: "Totebags", image: totebag1 },
  { id: 13, name: "Tote Bag - Scholar Black and White", price: 220, category: "Totebags", image: totebag2 },
  { id: 14, name: "Tote Bag - Animo Green", price: 220, category: "Totebags", image: totebag3 },
  { id: 15, name: "Tote Bag - Animo Black", price: 220, category: "Totebags", image: totebag4 },

  // T-Shirts
  { id: 16, name: "T-Shirt - Cosa", priceRange: [320, 340], category: "T-Shirts", image: tshirt1 },
  { id: 17, name: "T-Shirt - ProudIskolar", priceRange: [270, 290], category: "T-Shirts", image: tshirt2 },
  { id: 18, name: "T-Shirt - IskolarAko", priceRange: [370, 390], category: "T-Shirts", image: tshirt3 },
  { id: 19, name: "T-Shirt - Officer", priceRange: [400, 420], category: "T-Shirts", image: tshirt4 },
  { id: 20, name: "T-Shirt - Animo", priceRange: [390, 410], category: "T-Shirts", image: tshirt5 },
  { id: 21, name: "T-Shirt - Lasallian", priceRange: [360, 380], category: "T-Shirts", image: tshirt6 },
];


// Function to shuffle products
const shuffleArray = (array: Product[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Randomized products array
const randomizedProducts = shuffleArray(products);

export default randomizedProducts;
