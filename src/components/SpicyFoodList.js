import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisine,setCuisine] = useState("");

  const foodsToDisplay = foods.filter((food) => {
    if (cuisine === "All") {
      return true;
    } else {
      return food.cuisine === cuisine;
    }
  });
  
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={()=>handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleFilter (event){
    setCuisine(event.target.value)
  }


  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods,newFood]
    setFoods(newFoodArray);
  }

  function handleLiClick(id){
    console.log(id)
    const updatedArray = foods.map((food)=> {
      if (food.id === id){
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food
      }
    }
    );
    console.log(updatedArray)
    setFoods(updatedArray)
  }



  return (
    <div>    
      <select name="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
