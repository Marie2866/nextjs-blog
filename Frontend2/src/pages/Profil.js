import React from "react";
import Navigation from "../components/Navigation";

const Profil = () => {
  return (
    <div>
      <Navigation />
      <h1>Bienvenue sur votre profile</h1>
      <form>
        <label for="champMail">E-mail :</label>
        <input type="text" id="champMail" placeholder="E-mail" />
      </form>
      <form>
        <label for="champPassword">Password :</label>
        <input type="text" id="champPassword" placeholder="Password" />
      </form>
    </div>
  );
};

export default Profil;
