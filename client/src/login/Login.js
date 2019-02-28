import React from "reactn";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: "boromir",
    password: "pass"
  };

  render() {
    return (
      <>
        <div className="login">
          <h2>Returning Member</h2>
          <form onSubmit={this.handleLogin}>
            <div>
              <label htmlFor="username" />
              <input
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                type="text"
              />
            </div>
            <div>
              <label htmlFor="password" />
              <input
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
              />
            </div>

            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </>
    );
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleLogin = event => {
    event.preventDefault();

    const endpoint = "http://localhost:5000/api/auth/login";
    const userLogin = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post(endpoint, userLogin)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);

        this.props.history.push("/users");
      })
      .catch(error => console.error(error));
  };
}

export default Login;
