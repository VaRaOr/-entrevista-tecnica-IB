const initialState = {
  productos: [],
  filterProductos: [],
};

const productosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETPRODUCTOS":
      return {
        ...state,
        productos: action.payload,
        filterProductos:action.payload
      };

    case "FILTERPRODUCTOS":
      
      let filter = state.productos.filter((producto) => producto.name.toLowerCase().includes(action.payload.toLowerCase().trim()));

      return {
        ...state,
        filterProductos: filter,
      };

    default:
      return state;
  }
};

export default productosReducer;
