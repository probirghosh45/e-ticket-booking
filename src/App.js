import Header from "./components/Header/Header";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Destination from "./components/Destination/Destination";
import Home from "./components/Home/Home";
import NoMatch from "./components/No Match/NoMatch";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";

export const UserContext=createContext();

function App() {

  const [search, setSearch] = useState({});

  return (
    <UserContext.Provider value={{search,setSearch}} >
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" >
            <Home/>
          </Route>
          <Route path="/destination">
            <Destination/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*" >
             <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
