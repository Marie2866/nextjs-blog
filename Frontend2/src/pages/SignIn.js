import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const SignIn = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <h1>Sign In</h1>

      <form>
        <label for="champMail">E-mail :</label>
        <input type="text" id="champMail" placeholder="E-mail" />
      </form>
      <form>
        <label for="champPassword">Password :</label>
        <input type="text" id="champPassword" placeholder="Password" />
      </form>

      <div>
        <a href="Forgot-password.html">Forgot password?</a>
      </div>
      <div>
        <input class="button" type="submit" value="Sign In" />
      </div>
    </div>
  );
};

export default SignIn;
