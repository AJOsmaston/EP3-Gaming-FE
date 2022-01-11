import { createContext, useState } from "react"

const AuthenticationContext = createContext();

export const AuthenticationProvider = ( {children} ) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [display, setDisplay] = useState();

  const callAPILogIn = (username, password) => {
    const user = { username: username, password: password };

    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("/login", options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success === true) {
          setLoggedIn(true);
        }
        setDisplay(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const callAPISignUp = (username, password) => {
    const user = { username: username, password: password };
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    fetch("/signup", options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDisplay(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const callAPILogOut = () => {
    
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    fetch("/logout", options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setDisplay(data.message);
      setLoggedIn(false);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return <AuthenticationContext.Provider value={{
    loggedIn,
    display,
    callAPILogIn,
    callAPISignUp,
    callAPILogOut,
  }}>
    {children}
    </AuthenticationContext.Provider>

}

export default AuthenticationContext;