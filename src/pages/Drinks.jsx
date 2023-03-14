import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Drinks = (props) => {
  const [drink, setDrink] = useState({
    searchTerm: "",
  });

  const apiKey = "1";

  // const url = `www.thecocktaildb.com/api/json/v1/${apiKey}/search.php?s=${searchTerm}`;

  const handleChange = (event) => {
    setDrink({ ...drink, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.drinkSearch(drink.searchTerm);
  };

  const getDrink = async (searchTerm) => {
    const response = await fetch(
      `www.thecocktaildb.com/api/json/v1/${apiKey}/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    setDrink(data);
  };

  useEffect(() => {
    getDrink("");
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          name="searchTerm"
          placeholder="Search drinks here"
          onChange={handleChange}
          value={drink.searchTerm}
        />
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Drinks;
