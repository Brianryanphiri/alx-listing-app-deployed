// constants/index.ts
import { PropertyProps, PropertyDescProps, ReviewProps } from '../interfaces';

// Filter options
export const FILTER_OPTIONS = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book Now, Pay Later",
  "Self Checkin",
  "Instant Book"
];

// Sample property listings
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "/assets/Villa_Arrecife.png",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "/assets/Almyros.png",
    discount: "30"
  }
];

// Property descriptions (for detail pages)
export const PROPERTYLISTINGDESCRIPTIONS: PropertyDescProps[] = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    reviewCount: 120,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "/assets/Villa_Arrecife.png",
    discount: "",
    description: "Experience luxury at Villa Ocean Breeze with stunning ocean views and private pool.",
    amenities: ["Pool", "WiFi", "Air Conditioning", "Free Parking"],
    images: [
      "/assets/Villa_Arrecife.png",
      "/assets/Villa_Arrecife_2.png",
      "/assets/Villa_Arrecife_3.png"
    ]
  }
  // Add more property descriptions as needed
];

// Sample reviews
export const SAMPLE_REVIEWS: ReviewProps[] = [
  {
    id: 1,
    name: "Kerry",
    avatar: "/assets/review_avatar_1.png",
    rating: "★★★★★",
    comment: "The villa was amazing and the service exceptional.",
    date: "March 2024",
    yearsOnPlatform: "2 years on ALX",
    tripType: "Family trip"
  }
  // Add more reviews as needed
];

// Hero images
export const Hero_Image = '/assets/Hero-Image.png';
export const Hero_Image_Mobile = '/assets/Hero-Image-Mobile.png';
