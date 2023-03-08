import { HandThumbDownIcon, HandThumbUpIcon, StarIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../assets/newRequest";
import "./Review.scss";
const Review = ({ review }) => {
    console.log(review)
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <div className="review">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="user">
          <img className="pp" src={data.img || "/img/noavatar.jpg"} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <StarIcon className="starIcon" />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <HandThumbUpIcon className="thumbIcon" />
        <span>Yes</span>
        <HandThumbDownIcon className="thumbIcon" />

        <span>No</span>
      </div>
    </div>
  );
};

export default Review;
