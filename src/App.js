import "./App.css";
import Header from "./Componants/Header/Header";
import Shop from "./Componants/Shop/Shop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Order from "./Componants/Order/Order";
import NotFound from "./Componants/NotFound/NotFound";
import Inventory from "./Componants/Inventory/Inventory";
import ProductDetails from "./Componants/ProductDetails/ProductDetails";

function App() {
  return (
    <Router>
      <Header></Header>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/inventory">
          <Inventory/>
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetails/>
        </Route>
        
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
