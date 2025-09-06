// pages/property/[id].tsx
import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyDescProps } from "@/interfaces";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const PropertyDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Use id to find the property in the sample data
  const propertyIndex = Number(id) - 1; // assuming URLs are /property/1, /property/2, etc.
  const property = PROPERTYLISTINGSAMPLE[propertyIndex];

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-lg text-red-500">Property not found!</p>
        <Link href="/property">
          <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700">
            Go Back
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Back Button */}
      <div className="p-4 md:p-10">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-700 hover:text-black mb-4"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* Property Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{property.name}</h1>
        <p className="text-gray-600 mb-6">
          {property.address.city}, {property.address.state ? `${property.address.state}, ` : ""}
          {property.address.country}
        </p>

        {/* Property Image */}
        <div className="w-full h-96 relative mb-6 rounded-xl overflow-hidden">
          <Image
            src={property.image || "/placeholder.jpg"}
            alt={property.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {property.category.map((cat, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Pricing & Offers */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-900 font-semibold text-lg md:text-xl">
            ${property.price}/Night
          </div>
          <div className="flex gap-4 text-gray-700">
            <span>Bed: {property.offers.bed}</span>
            <span>Shower: {property.offers.shower}</span>
            <span>Occupants: {property.offers.occupants}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">About this property</h2>
          <p className="text-gray-700">
            This is a beautiful property called {property.name}. Enjoy the best amenities
            and make your stay unforgettable.
          </p>
        </div>

        {/* Discount Badge */}
        {property.discount && (
          <div className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold mb-6">
            {property.discount}% Off
          </div>
        )}

        {/* Back to Listings */}
        <Link href="/property">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700">
            Back to Listings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
