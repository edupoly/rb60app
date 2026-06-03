import React from "react";
import { useDispatch } from "react-redux";
import { addToBilling } from "./billingSlice";
import { useGetAllProductsQuery } from "../../services/products";

function Products() {
  // const [prods, setProducts] = React.useState([]);
  var dispatch = useDispatch();
  var { isLoading, data } = useGetAllProductsQuery();
  function handleAddBilling(product) {
    dispatch(addToBilling(product));
  }
  return (
    <ul className="list-unstyled d-flex flex-wrap">
      {isLoading && (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {data?.products?.map((p) => {
        return (
          <li
            className="w-25 p-2 d-flex flex-column justify-content-between align-items-center"
            style={{
              backgroundColor: "#dedddc",
              backgroundClip: "content-box",
            }}
            key={p.id}
          >
            <img src={p.thumbnail} className="w-100" alt="" />
            <i className="px-2 text-center">{p.title}</i>
            <b>Price:{p.price}</b>
            <button
              className="btn btn-sm btn-success m-2"
              onClick={() => {
                handleAddBilling(p);
              }}
            >
              {" "}
              Add To Order
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Products;
