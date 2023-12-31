import React from "react";
// import { Link } from "@reach/router";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import {
  displayUserInteractionstimestamp,
  clearMarkers,
  clearHeatmap,
  clearallHeatmap,
} from "../../index.js";

import "./NavBar.css";

const GOOGLE_CLIENT_ID = "204415935913-be7cesbef5i942rtjct5j2fs71rvd7d0.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = ({ userId, handleLogin, handleLogout }) => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">
        <span className="gradient1-text"> MIT Heat Map</span>
      </div>
      <div className="NavBar-linkContainer u-inlineBlock">
        <span className="NavBar-link NavBar-loginbutton">
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            {userId ? (
              <button
                className="button-54"
                onClick={() => {
                  googleLogout();
                  handleLogout();
                  clearMarkers();
                  clearHeatmap();
                }}
              >
                Logout
              </button>
            ) : (
              <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
            )}
          </GoogleOAuthProvider>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
