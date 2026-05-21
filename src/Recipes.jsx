import React from "react";
import { Link, Outlet } from "react-router-dom";
function Recipes() {
  const [recipes, setrecipes] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setrecipes([...data.recipes]);
      });
  }, []);

  return (
    <div className="d-flex justify-content-between">
      <ul>
        {recipes?.map((p) => {
          return (
            <li>
              <Link to={`/recipes/${p.id}`}>{p.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="w-50">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Recipes;
