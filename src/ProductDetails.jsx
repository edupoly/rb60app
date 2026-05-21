import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  var { id } = useParams();
  var [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct({ ...data }));
  }, []);
  return (
    <div>
      <h1>{product?.title} ProductDetails</h1>
      <img src={product?.thumbnail} alt="" />
    </div>
  );
}

export default ProductDetails;
