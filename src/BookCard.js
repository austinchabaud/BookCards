import React from "react";

const BookCard = props => {
  return (
    <div>
      <img src={props.image} alt="" />
      <div className="desc">
        <h2>{props.title}</h2>
        <h3>Author: {props.author}</h3>
        <p>Published Date: {props.published === "0000" ? "Not Availabale" : props.published.substring(0, 4)}</p>
      </div>
    </div>
  );
};
export default BookCard;
