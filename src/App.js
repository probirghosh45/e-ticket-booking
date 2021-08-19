import Header from "./components/Header/Header";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Destination from "./components/Destination/Destination";
import Home from "./components/Home/Home";
import NoMatch from "./components/No Match/NoMatch";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext=createContext();

function App() {

  const [search, setSearch] = useState({});
  const [ticket, setTicket] = useState([])
 const [loggedInUser,setLoggedInUser]=useState({});

  return (
    <UserContext.Provider value={{search,setSearch,ticket,setTicket,loggedInUser,setLoggedInUser}} >
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" >
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/destination">
            <Destination/>
          </PrivateRoute>

          <Route path="*" >
             <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
