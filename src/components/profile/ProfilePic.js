import React from "react";
import './style.css';
import photo from "./photo.png";
const profilePhoto =()=> {
    return <div className="img">
    <img src={photo} alt="Person"/>
  </div>;
}
export default profilePhoto;
