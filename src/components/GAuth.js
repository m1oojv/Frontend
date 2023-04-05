import React, { useState, useEffect, createContext, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";

import jwt from "jsonwebtoken";
import UsePersistedState from "../utils/UsePersistedState.js";
import { apiFetch } from "../utils/Utils.js";

import { API_ENDPOINT } from "../constants.js";

const AuthContext = createContext(false);

const AuthProvider = (props) => {
  const [internalCredentials, setInternalCredentials] = useState(null);
  const [credentials, setCredentials] = UsePersistedState(
    "googleCredentials",
    ""
  );
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [showLoginSnackbar, setShowLoginSnackbar] = useState(false);
  const [showLogoutSnackbar, setShowLogoutSnackbar] = useState(false);
  const [userId, setUserId] = useState(null);

  // useGoogleOneTapLogin({
  //     onSuccess: credentialResponse => {
  //         setInternalCredentials(credentialResponse.credential);
  //     },
  // });

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
        headers: new Headers({
          Authorization: "Bearer " + tokenResponse.access_token,
        }),
      }).then((res) => {
        if (res.status !== 200) {
          logout(false);
        } else {
          res.json().then((jsonData) => {
            // create a jwt token
            jsonData.email_verified = jsonData.verified_email; // create another field to be compatible with api responses
            const token = jwt.sign(
              jsonData,
              process.env.REACT_APP_PRIVATE_JWT_KEY,
              {
                audience: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
                issuer: "frontend",
                algorithm: "HS256",
              }
            );
            setInternalCredentials(token);
          });
        }
      });
    },
  });

  const logout = (showSnackbar) => {
    setCredentials("");
    setInternalCredentials(null);
    setLoggedIn(false);
    setUserInfo(null);
    if (showSnackbar) {
      setShowLogoutSnackbar(true);
    }
  };

  //   useEffect(() => {
  //     if (internalCredentials !== null) {
  //       apiFetch(
  //         `mutation {
  //                 createUser(id_token: "${internalCredentials}") {
  //                     name
  //                     id_token
  //                 }
  //             }`,
  //         credentials
  //       )
  //         .then((data) => {
  //           setLoggedIn(true);
  //           setShowLoginSnackbar(true);
  //           setCredentials(data.createUser.id_token);
  //           setUserInfo(data.createUser.name);
  //         })
  //         .catch(() => {
  //           logout(false);
  //         });
  //     } else if (credentials !== "" && credentials !== null) {
  //       // Use credentials to get the data we need
  //       fetch(`${API_ENDPOINT}/graphql`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${credentials}`,
  //         },
  //         body: JSON.stringify({
  //           query: `{
  //                             user(id_token: "${credentials}") {
  //                                 name
  //                                 id
  //                             }
  //                         }`,
  //         }),
  //       }).then((res) => {
  //         res.json().then((jsonData) => {
  //           if (jsonData.errors) {
  //             logout(false);
  //           } else {
  //             setLoggedIn(true);
  //             setUserInfo(jsonData.data.user.name);
  //             setUserId(jsonData.data.user.id);
  //           }
  //         });
  //       });
  //     } else {
  //       logout(false);
  //     }
  //   }, [internalCredentials]);

  return (
    <AuthContext.Provider
      value={{
        userId: userId,
        userInfo: userInfo,
        credentials: credentials,
        loggedIn: loggedIn,
        login: login,
        logout: logout,
        snackbars: {
          showLoginSnackbar: showLoginSnackbar,
          setShowLoginSnackbar: setShowLoginSnackbar,
          showLogoutSnackbar: showLogoutSnackbar,
          setShowLogoutSnackbar: setShowLogoutSnackbar,
        },
      }}
      {...props}
    />
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
