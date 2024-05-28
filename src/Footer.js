import React from "react";
import instagram_logo from "./instagram_logo.png";
import facebook_logo from "./facebook_logo.png";
import twitter_logo from "./twitter_logo.png";
import github_logo from "./github_logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <img className="twitter-logo" src={twitter_logo} />
      <img className="facebook-logo" src={facebook_logo} />
      <img className="instagram-logo" src={instagram_logo} />
      <img className="github-logo" src={github_logo} />
    </div>
  );
}
