import React from "react";

function Cards({ cardFilter }) {
  return cardFilter.map((producto) => {
    return (
      <div key={producto.id} className="card">
        <img src={producto.img} alt={producto.name} className="product-img" />
        <div className="product-info">
          <h2 className="product-name">{producto.name}</h2>
          <p className="product-id">{producto.id.slice(4)}</p>
          <div className="container-price">
            <p className="product-price">Precio:</p>
            <p className="product-price-number">${(new Intl.NumberFormat("es-AR").format(producto.price))}</p>
          </div>
        </div>
      </div>
    );
  });
}

export default Cards;
