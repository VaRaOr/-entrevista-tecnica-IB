import { productos } from "../../json/data";

const productosActions = {
  getProductos: () => {
    return async (dispatch, getState) => {
      dispatch({type:"GETPRODUCTOS", payload: productos})
    };
  },
  filterProductos: (inputValue) =>{
    return (dispatch, getState)=>{
        dispatch({type:"FILTERPRODUCTOS", payload:inputValue})
    }
  }
};

export default productosActions
