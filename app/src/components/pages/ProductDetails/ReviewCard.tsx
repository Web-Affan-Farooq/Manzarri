// components/ReviewCard.tsx

import React from "react";
import { Review } from "@/@types/review"; // Adjust path as needed
import { Star } from "lucide-react";

const ReviewCard = ({ review }: { review: Review }) => {
  // Function to render stars based on the rating
  const renderStars = (currentRating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < currentRating ? "text-yellow-500" : "text-gray-300"
        }`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <div className="border-b border-gray-200 py-6 last:border-b-0">
      {/* Header: Rating and Verified Buyer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {renderStars(2)}
          <h4 className="ml-3 text-lg font-semibold text-gray-900">
            {review.personName}
          </h4>
        </div>
      </div>

      {/* Comment and User Info */}
      <p className="mt-2 text-gray-600 italic">"{review.reviewText}"</p>

      <div className="mt-3 flex items-center text-sm text-gray-500">
        <span className="font-medium text-gray-700">{review.personName}</span>
        <span className="mx-2">•</span>
        <span>{new Date(review.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
