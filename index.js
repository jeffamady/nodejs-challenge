const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes/index.routes');

//Connection with DB
const db = require('./config/db');
require('./models/Personaje');
// require('./models/Pelicula-o-serie');
// require('./models/Genero');
db.sync()
    .then(() => console.log('Connected to the Server')
    )
    .catch(error => console.log(error)
    )


const app = express();
app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 3001);

app.use('/', routes());

app.listen(app.get('port'));
console.log('Server on port: ', app.get('port'));

