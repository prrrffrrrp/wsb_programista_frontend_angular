import React from "react";
import { useSelector } from "react-redux";

export default function Navigation() {
    const username = useSelector(state => state.user);

  return (
    <nav>
      <div className="nav-title">Pizza Calculator!</div>
      <div className="nav-user">{username}</div>
    </nav>
  );
}
