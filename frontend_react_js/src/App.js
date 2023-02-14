import Catalogo from "./pages/Catalogo";
import "./styles/App.css";

import { useEffect } from "react";
import { useDispatch} from "react-redux";
import productosActions from "./redux/actions/productosActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productosActions.getProductos());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Catalogo />
    </div>
  );
}

export default App;
