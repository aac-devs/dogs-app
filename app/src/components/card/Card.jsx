import React, { useContext, useEffect, useRef } from "react";
import BreedsContext from "../context/BreedsContext";

const Card = ({ breed, onHandleDetails, onHandleAddFavorites }) => {
  const { favorites, addToFavorites } = useContext(BreedsContext);

  const renderRef = useRef(0);
  useEffect(() => {
    console.log("- Card", renderRef.current);
    renderRef.current++;
  });

  const {
    id,
    name,
    // breed_group,
    // origin,
    // life_span,
    // weight,
    // height,
    image,
  } = breed;

  return (
    <div>
      <img
        src={image.url}
        title="View details.."
        alt={name}
        style={{ height: "100px" }}
        onClick={() => onHandleDetails(id)}
      />
      <h6>{name}</h6>
      <button onClick={() => addToFavorites(id)}>add fav</button>
      <hr></hr>
    </div>
  );
};

export default Card;
