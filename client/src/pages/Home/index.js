import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import { useAuth } from "../../utils/auth";
import Logo from "../../components/Logo";
import API from "../../utils/API"

function Home() {
  const { user, logout } = useAuth();
  const history = useHistory();
  const goToEditProfile = () => history.push("/order");
  const [username, setUsername] = useState("");

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
    });
  }, [user]);



  return (
    <div className="Home">
      <Logo />
      <div className="Home-header">
        <h2>Welcome {username}!</h2>
      </div>
      <p className="Home-intro">
        <button className="btn-rad" onClick={goToEditProfile}>
          Place Order
        </button>
        <button
          className="btn-rad"
          style={{ marginLeft: "1em" }}
          onClick={() => logout()}
        >
          Logout
        </button>
      </p>
    </div>
  );
}

export default Home;
