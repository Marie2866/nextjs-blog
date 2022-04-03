import React from "react";
import Navigation from "../components/Navigation";

const ForgotPassword = () => {
  return (
    <div>
      <Navigation />
      <h1>Forgot Password</h1>
      <div>
        <p>E-mail</p>
        <input type="email" placeholder="E-mail" />
      </div>
      <div>
        <input type="button" value="Envoyé un email à cette adresse mail" />
      </div>
    </div>
  );
};

export default ForgotPassword;
