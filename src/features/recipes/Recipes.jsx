import React from "react";
import { useGetAllRecipesQuery } from "../../services/recipes";

function Recipes() {
  var { isLoading, data } = useGetAllRecipesQuery();
  return (
    <div className="border border-2 border-danger m-2 p-2">
      <h1>Recipes</h1>
      {isLoading && <b>Loading...</b>}
      {data?.recipes?.map((recipe) => {
        return <li>{recipe.name}</li>;
      })}
    </div>
  );
}

export default Recipes;
