import { Review } from "@/@types/review";

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="space-y-2 shadow-sm shadow-gray-400 rounded-md p-4">
      <div className="flex flex-row flex-nowrap justify-between items-center">
        <div className="flex flex-row flex-nowrap justify-start items-center gap-[20px]">
          <div className="w-[40px] h-[40px] rounded-full bg-manzarri-reddish-brown text-white text-center text-[22px] font-bold flex flex-row justify-center items-center">
            {review.personName[0]}
          </div>
          <h2 className="font-bold text-md">{review.personName}</h2>
        </div>

        <span className="text-manzarri-green text-sm">
          {new Date(review.date).toLocaleDateString()}
        </span>
      </div>

      <p className="text-gray-400 text-sm">{review.reviewText}</p>
    </div>
  );
};

const Reviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <section className="p-12">
      <h1 className="font-bold text-[24px]">Reviews</h1>
      <div className="flex flex-col flex-nowrap gap-[10px]">
        {reviews.map((review, idx) => (
          <ReviewCard review={review} key={idx} />
        ))}
      </div>
    </section>
  );
};
export default Reviews;
