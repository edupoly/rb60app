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
      <ul className="d-flex flex-wrap list-unstyled w-50">
        {recipes?.map((p) => {
          return (
            <li className="w-25 p-3 d-flex flex-column justify-content-center align-items-center">
              <img src={p.image} className="w-50" alt="" />
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
