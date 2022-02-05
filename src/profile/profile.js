import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import propTypes from "prop-types";

function Profile(props) {
  function handleName() {
    alert(props.fullName);
  }

  return (
    <div
      style={{
        border: "1px black solid",
        margin: "100px 300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px black solid",
        }}
      >
        <img src={props.children} alt="meow" width={250} height={250} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="fullname">FullName : {props.fullName}</p>
        <br />
        <p className="bio"> Bio: {props.bio} </p>
        <br />
        <p className="profession"> Profession: {props.profession} </p>
        <Button variant="primary" onClick={handleName}>
          clickMe
        </Button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  fullName: propTypes.string.isRequired,
  bio: propTypes.string.isRequired,
  profession: propTypes.string.isRequired,
};
Profile.defaultProps = {
  fullName: "name",
  bio: "bio",
  profession: "profession",
};

export default Profile;
