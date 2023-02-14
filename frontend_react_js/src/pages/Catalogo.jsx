import React from "react";
import Cards from "../components/CardsProductos";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productosActions from "../redux/actions/productosActions";

function Catalogo() {
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setTimeout(() => {
      dispatch(productosActions.filterProductos(event.target[0].value));
    }, 3000);
  };
  const productos = useSelector(
    (store) => store.productosReducer.filterProductos
  );
  useEffect(() => {}, [productos]);

  return (
    <>
      <form onSubmit={handleSubmit} className="form-search">
        <input type="text" className="input-search" />

        <button type="submit" className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="input-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <p className="text-search">Buscar</p>
        </button>
      </form>

      <div className="container-cards">
        {productos.length > 0 ? (<Cards cardFilter={productos} />) : (<h2> no hay resultados</h2>)}
      </div>
      <div className="results">
        <p>{productos.length} resultados</p>
      </div>
    </>
  );
}

export default Catalogo;
