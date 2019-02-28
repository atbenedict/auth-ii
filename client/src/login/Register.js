import React from "reactn";
import axios from "axios";

class Register extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <>
        <div className="register">
          <h2>New Member</h2>
          <form onSubmit={this.handleRegister}>
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
              <button type="submit">Register</button>
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

  handleRegister = event => {
    event.preventDefault();

    const endpoint = "http://localhost:5000/api/auth/register";
    const userRegister = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post(endpoint, userRegister)
      .then(res => {
        this.props.history.push("/login");
      })
      .catch(error => console.error(error));
  };
}

export default Register;
