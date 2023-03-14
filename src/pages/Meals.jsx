import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Meals = (props) => {
  const apiKey = "1";

  // const url = `www.thecocktaildb.com/api/json/v1/${apiKey}/search.php?s=${""}`;

  const [meal, setMeal] = useState({
    searchTerm: "",
  });

  //handleChange - updates Drink when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setMeal({ ...meal, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.mealSearch(meal.searchTerm);
  };

  const getMeal = async (searchTerm) => {
    const response = await fetch(url.concat());
    const data = await response.json();
    setMeal(data);
  };

  useEffect(() => {
    getMeal("");
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          name="searchTerm"
          placeholder="Search meals here"
          onChange={handleChange}
          value={meal.searchTerm}
        />
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Meals;
