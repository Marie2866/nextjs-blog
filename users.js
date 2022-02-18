// Pour modéliser les données, le framework mongoose utilise des "schémas" ; nous créons donc un modèle de données :
var UsersSchema = mongoose.Schema({
  mail: String,
  password: Int16,
  displayName: String,
});

var Users = mongoose.model("Users", UsersSchema);
