import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import "./Footer.css";

class Navbar extends Component {
  onLogoutClick(event) {
    event.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/feed">
            PostFeed
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item ">
          <a
            href="#"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link text-light"
          >
            <img
              src={user.avatar}
              alt={user.name}
              title="Gravatar to connect the image"
              style={{ width: "25px", marginRight: "5px" }}
              className="rounded-circle"
            />
            LOGOUT
          </a>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item ">
          <Link className="nav-link text-light" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm bg-primary border border-bottom-2 border-ligth ">
        <div className="container">
          <Link className="navbar-brand text-light" to="/">
            Bird-Watcher.com
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav ">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/profiles">
                  {" "}
                  Guides
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
