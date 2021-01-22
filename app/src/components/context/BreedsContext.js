import React, { createContext, useEffect, useRef, useState } from "react";
import getBreeds from "../helpers/getBreeds";

const BreedsContext = createContext();

const initialBreeds = [
  {
    id: 1,
    name: "Nombre 1",
    origin: "Origen 1",
    breed_group: "",
    life_span: "",
    weight: "",
    height: "",
    image: "xxx",
  },
  {
    id: 2,
    name: "Nombre 2",
    breed_group: "",
    life_span: "",
    weight: "",
    height: "",
    origin: "Origen 2",
    image: "xxx",
  },
  {
    id: 3,
    name: "Nombre 3",
    breed_group: "",
    life_span: "",
    weight: "",
    height: "",
    origin: "Origen 3",
    image: "xxx",
  },
];

const BreedsProvider = ({ children }) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [favorites, setFavorites] = useState([]);

  const renderRef = useRef(0);
  useEffect(() => {
    console.log("- BreedsProvider", renderRef.current);
    renderRef.current++;
  });

  useEffect(() => {
    getBreeds().then((newBreeds) => {
      setBreeds(newBreeds);
      console.log(newBreeds);
    });
  }, []);

  const addToFavorites = (breedId) => {
    console.log("Add to favorite", breedId);

    const isFavorite = favorites.includes(breedId);
    const favoriteBreeds = isFavorite
      ? favorites.filter((favId) => favId !== breedId)
      : [...favorites, breedId];

    setFavorites(favoriteBreeds);
  };

  const data = { breeds, addToFavorites };

  return (
    <BreedsContext.Provider value={data}>
      {children}
      {/*  */}
    </BreedsContext.Provider>
  );
};

export { BreedsProvider };
export default BreedsContext;
