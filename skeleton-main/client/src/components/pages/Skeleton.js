import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import fetch from "node-fetch";
// import ScriptTag from "react-script-tag";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "204415935913-be7cesbef5i942rtjct5j2fs71rvd7d0.apps.googleusercontent.com";

const Skeleton = ({}) => {
  return (
    <>
      Hi!!
      {/* <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossorigin=""
      />
      <script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""
      ></script>
      <div id="map"></div> */}
    </>
    // <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    //   {userId ? (
    //     <button
    //       onClick={() => {
    //         googleLogout();
    //         handleLogout();
    //       }}
    //     >
    //       Logout
    //     </button>
    //   ) : (
    //     <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
    //   )}
    //   <h1>Good luck on your project :)</h1>
    //   <h2> What you need to change in this skeleton</h2>
    //   <ul>
    //     <li>
    //       Change the Frontend CLIENT_ID (Skeleton.js) to your team's CLIENT_ID (obtain this at
    //       http://weblab.is/clientid)
    //     </li>
    //     <li>Change the Server CLIENT_ID to the same CLIENT_ID (auth.js)</li>
    //     <li>
    //       Change the Database SRV (mongoConnectionURL) for Atlas (server.js). You got this in the
    //       MongoDB setup.
    //     </li>
    //     <li>Change the Database Name for MongoDB to whatever you put in the SRV (server.js)</li>
    //   </ul>
    //   <h2>How to go from this skeleton to our actual app</h2>
    //   <a href="https://docs.google.com/document/d/110JdHAn3Wnp3_AyQLkqH2W8h5oby7OVsYIeHYSiUzRs/edit?usp=sharing">
    //     Check out this getting started guide
    //   </a>
    // </GoogleOAuthProvider>
  );
};

export default Skeleton;
