//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.
var express = require("express");

// Nous définissons ici les paramètres du serveur.
var hostname = "localhost";
var port = 3000;

// La variable mongoose nous permettra d'utiliser les fonctionnalités du module mongoose.
var mongoose = require("mongoose");
// Ces options sont recommandées par mLab pour une connexion à la base
var options = {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
};

//URL de notre base
var urlmongo = "mongodb://localhost:27017/projetMP";

// Nous connectons l'API à notre base de données
mongoose.connect(urlmongo);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "Erreur lors de la connexion"));
db.once("open", function () {
  console.log("Connexion à la base OK");
});

// Nous créons un objet de type Express.
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
