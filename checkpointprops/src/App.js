import "./App.css";
import Profil from "./Profile/Profil.js";
// import Profile from "./Profile/Profil.js";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const handleName = () => {
    alert(fullName);
  };
  let fullName = "Achraf",
    bio = "student",
    profession = "developper";
  return (
    <div className="App">
      <Profil
        fullName={fullName}
        handleName={handleName}
        bio={bio}
        profession={profession}
      >
        <img className="pic" src="./moi.jpg" alt="mypic" />
      </Profil>
    </div>
  );
}

export default App;
