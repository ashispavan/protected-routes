import React from "react";
import Auth from "./Auth";

function Dashboard({ history }) {
  const logout = () => {
    Auth.logout(() => {
      history.push("/");
    });
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
