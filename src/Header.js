import React from "react";
import profile_header from "./profile_header.jpg";

export default function Header() {
  return (
    <header>
      <img className="header-image" src={profile_header} alt="profile photo" />
    </header>
  );
}
