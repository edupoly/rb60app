import { useEffect, useState } from "react";

function Products() {
  var [ar, setAr] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAr([...data.products]);
      });
  }, []);
  return (
    <div className="border border-5 border-warning m-2 p-2">
      <h1>Products</h1>
      <ul>
        {ar.map((p) => {
          return <li>{p.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Products;
