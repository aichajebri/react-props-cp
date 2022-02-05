import React from "react";
import Profile from "./profile/profile";
import myData from "./profile/myData";

function App() {
  return (
    <div>
      <Profile
        fullName={myData.fullName}
        bio={myData.bio}
        profession={myData.profession}
      >
        {myData.img}
      </Profile>
    </div>
  );
}

export default App;
