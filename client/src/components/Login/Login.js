import React, { Component } from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="container-login">
          <div className="signin-right">
            <form onSubmit={this.onSubmit}>
              <input
                onChange={this.onChange}
                type="text"
                placeholder="email"
                value={this.state.email}
                name="email"
                error={errors.email}
              />
              <input
                type="password"
                onChange={this.onChange}
                value={this.state.password}
                placeholder="password"
                name="password"
                error={errors.password}
              />
              <button type="submit" className="enter">
                Log In
              </button>
            </form>
          </div>
          <div className="subcontainer1 bg-primary">
            <div className="subb1">
              <ul>
                <li>
                  <i className="fas fa-search fa-2x" />
                  Follow your favorite birds.
                </li>
                <li>
                  <i className="fas fa-binoculars fa-2x" />
                  Find guides where you need.
                </li>
                <li>
                  <i className="user fas fa-users fa-2x" />
                  Join the community.
                </li>
              </ul>
            </div>
          </div>

          <div className="subcontainer2">
            <div className="subsub2">
              <div className="logo-log">
                <i className="bird fas fa-feather" />
              </div>
              <div className="slogan">
                <h1>See where can you go to find the next lifer.</h1>
              </div>
              <div className="mini-slogan">
                <p>Join BirdWatcher today.</p>
              </div>
              <div className="join-btns">
                <Link to="/register">
                  <p className="register">Register</p>
                </Link>
                <Link to="/login">
                  {" "}
                  <p className="signin">Log In</p>
                </Link>

                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
