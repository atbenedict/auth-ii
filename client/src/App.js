import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import "./App.css";
import Login from "./login/Login";
import Register from "./login/Register";
import Users from "./users/Users";

class App extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/login">Login</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/users">Users</NavLink>
            &nbsp;|&nbsp;
            {this.state.loggedIn ? (
              <button onClick={this.logout}>Logout</button>
            ) : null}
          </nav>
        </header>
        <main>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.setState({ loggedIn: false });

    this.props.history.push("/login");
  };
}

export default withRouter(App);
