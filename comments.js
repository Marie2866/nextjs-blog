// Pour modéliser les données, le framework mongoose utilise des "schémas" ; nous créons donc un modèle de données :
var CommentsSchema = mongoose.Schema({
  content: String,
  date: Date,
});

var Comments = mongoose.model("Comments", CommentsSchema);
