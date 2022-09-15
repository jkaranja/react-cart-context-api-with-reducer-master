import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CartState } from "../context/Context";

const Rating = ({ filterDispatch, rating, pointer }) => {
 

  return (
    <div>
      {[...Array(5)].map((item, i) => {
        return (
          <span
            style={pointer}
            key={i}
            onClick={() =>
              filterDispatch({ type: "BY_RATING", payload: i + 1 })
            }
          >
            {rating > i ? <AiFillStar /> : <AiOutlineStar />}{" "}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
