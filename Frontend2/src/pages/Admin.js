import React from "react";
import Navigation from "../components/Navigation";

const Admin = () => {
  return (
    <div>
      <Navigation />
      <h1>Bienvenue sur votre dashboard en tant qu'administrateur</h1>

      <h1>Nombre total de posts publiés sur la plateforme</h1>

      <h1>Nombre total de comments publiés sur la plateforme</h1>

      <h1>Nombre total d'users enregistrés sur la plateforme</h1>

      <h1>Nombre total de visiteurs pour le mois courant</h1>
    </div>
  );
};

export default Admin;
