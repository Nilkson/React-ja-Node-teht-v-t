import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Koti from "./Koti";
import Tarina from "./Tarina";
import Yhteys from "./Yhteys";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Perus Single Page Application (SPA)</h1>
            <ul className="header">
              <li><NavLink exact to="/">Koti</NavLink></li>
              <li><NavLink to="/tarina">Tarinaa</NavLink></li>
              <li><NavLink to="/yhteys">Yhteys</NavLink></li>
            </ul>
            <div className="content">
                <Routes>
              <Route path="/" component={Koti}/>
              <Route path="/tarina" component={Tarina}/>
              <Route path="/yhteys" component={Yhteys}/>
              </Routes>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;
