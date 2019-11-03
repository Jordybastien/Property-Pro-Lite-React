import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Homepage from "./views/Homepage";
import Property from "./views/Property";
import Signup from "./views/auth/Signup";
import Login from "./views/auth/Login";
import "./css/style.css";
import store from "./store";
import { setCurrentUser } from "./actions/authActions";
// check for token
if (localStorage.proLiteToken) {
  // set auth token header auth
  setAuthToken(localStorage.proLiteToken);
  // Decode token and get user info
  const decoded = jwt_decode(localStorage.proLiteToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}
class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <div className="App">
          { location.pathname == '/login' || location.pathname == '/signup' ? null :  <Navbar/> }
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/property" component={Property} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
