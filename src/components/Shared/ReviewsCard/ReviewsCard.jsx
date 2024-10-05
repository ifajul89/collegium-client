/* eslint-disable react/prop-types */
const ReviewsCard = ({ image, reviewerName, review }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 rounded-2xl p-10">
      <img className="rounded-full w-12 mb-3" src={image} alt="Reviewer" />
      <h3><b>
        {reviewerName}
        </b></h3>
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
      </div>
      <div className="divider"></div>
      <p className="text-center text-sm text-gray-700">
        <i>&quot;{review}&quot;</i>
      </p>
    </div>
  );
};

export default ReviewsCard;
