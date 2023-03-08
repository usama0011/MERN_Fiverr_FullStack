import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../assets/newRequest";
import { HeartIcon } from "@heroicons/react/24/solid";

const GigCard = ({ item, key }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["gigUser"],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });
  console.log(data);
  return (
    <Link to={`/gigs/${item._id}`} className="link">
      <div key={key} className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img
                src={
                  data.img ||
                  "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
                }
                alt=""
              />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <HeartIcon className="heartIcon" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>$ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
