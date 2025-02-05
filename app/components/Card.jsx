import Link from "next/link";
import { MapPin } from "lucide-react";

const Card = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        src="/AboutImg.png"
        alt="Tour Image"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-orange-600 text-sm flex items-center">
            <MapPin />
            Maldives
          </span>
          <span className="text-yellow-500 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.197c.969 0 1.371 1.24.588 1.81l-3.398 2.45a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.539 1.118L10 13.347l-3.398 2.45c-.783.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.587 8.397c-.783-.57-.38-1.81.588-1.81h4.196a1 1 0 00.95-.69l1.286-3.97z" />
            </svg>
            4.7
          </span>
        </div>
        <h2 className="text-lg font-semibold mb-1">Hurawalhi Island</h2>
        <p className="text-sm text-gray-500 mb-3">7 Days Tour on 2 person</p>
        <div className="flex justify-between items-center">
          <span className="text-orange-600 font-bold text-lg">620$</span>
          <Link
            href="#"
            className="text-gray-600 text-sm flex items-center hover:underline"
          >
            View More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
