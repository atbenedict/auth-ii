import React, { setGlobal, useGlobal, useState } from "reactn";
import { Route, NavLink, withRouter } from "react-router-dom";

import "./App.css";
import Login from "./login/Login";
import Register from "./login/Register";
import Users from "./users/Users";

setGlobal({
  loggedIn: false
});

const App = () => {
  const logged = useGlobal("loggedIn");

  return (
    <>
      <header>
        <nav>
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink>
          &nbsp;|&nbsp;
          {logged ? <button onClick={logout()}>Logout</button> : null}
        </nav>
      </header>
      <main>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </main>
    </>
  );
};

const logout = () => {
  localStorage.removeItem("jwt");
  setGlobal({ loggedIn: false });
  this.props.history.push("/login");
};

export default withRouter(App);
