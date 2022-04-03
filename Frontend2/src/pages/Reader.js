import React from "react";
import Navigation from "../components/Navigation";

const Reader = () => {
  return (
    <div>
      <Navigation />
      <h1>Bienvenue sur votre dashboard en tant qu'Reader</h1>
      <h1>Mes derniers commentaires</h1>
      <script>db.comments.find({});</script>
    </div>
  );
};

export default Reader;
