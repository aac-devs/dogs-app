import React, { useContext } from "react";
import Card from "../card/Card";
import BreedsContext from "../context/BreedsContext";

const List = () => {
  const { breeds } = useContext(BreedsContext);

  const onHandleDetails = () => {};

  // const onHandleAddFavorites = (favsId) => {};

  return (
    <ul>
      {breeds.map((breed) => (
        <Card
          key={breed.id}
          breed={breed}
          onHandleDetails={onHandleDetails}
          // onHandleAddFavorites={onHandleAddFavorites}
        />
      ))}
    </ul>
  );
};

export default List;
