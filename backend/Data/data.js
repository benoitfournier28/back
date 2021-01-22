
const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://evalmongo:evalmongo@sandbox.we2cm.mongodb.net/mongoexo?retryWrites=true&w=majority",
{ useNewUrlParser: true,
useUnifiedTopology: true})
.then(() => console.log('Connexion réussi !'))
.catch(() => console.log('connection échouée...'))

mongoose.Promise = global.Promise;