import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";
import { useSelector } from "react-redux";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = (props) => {
  const { currentUser } = useSelector(mapState);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/" href="#" className="navbar-brand">
          MyShop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link">
                Cart
                <span className="badge badge-warning badge-pill">0</span>
              </a>
            </li>
            {!currentUser && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registration">
                    Registration
                  </Link>
                </li>
              </>
            )}
          </ul>

          {currentUser && (
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle cursor-pointer"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Umair
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <Link className="dropdown-item">Dashboard</Link>
                  <a className="dropdown-item" to="/dashboard">
                    My Orders
                  </a>
                  <a className="dropdown-item">Manage Products</a>
                  <a className="dropdown-item">Manage Orders</a>
                  <a className="dropdown-item" onClick={() => auth.signOut()}>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  currentUser: null,
};



export default Header;
