import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
import Inicio from "./components/Inicio"
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/contacto" className="btn btn-dark">
            Contacto
          </Link>
          <NavLink to="/nosotros" className="btn btn-dark" activeClassName="active">
            Nosotros
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route path= "/nosotros/:id">
              <User/>
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
