const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const exphbs = require('express-handlebars');

const session = require('express-session');
app.use(session({
   secret: 'key session',
   resave: true,
   saveUninitialized: true
})) 

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

const path = require('path')
app.set('views', path.join(__dirname, 'views'))

 //Routes
const routes = require("./routes/index.routes")
app.use( routes )
//static file
let publicPath = path.join(__dirname, '../public');
//path.join(__dirname, 'public'); también puede ser una opción
// Para que los archivos estaticos queden disponibles.
app.use(express.static(publicPath));
 
app.listen(1107, ()=>{
   console.log('servidor a la espera de conexiones');
})

 