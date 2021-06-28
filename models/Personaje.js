const { Sequelize } = require('sequelize');
const db = require('../config/db');

const Personaje = db.define('personaje', {
    id : {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    imagen : Sequelize.STRING(100),
    nombre : Sequelize.STRING(100),
    edad : Sequelize.INTEGER(2),
    peso : Sequelize.INTEGER(3),
    historia : Sequelize.STRING(100),
    "peliculas o series" : Sequelize.STRING(100)
});

module.exports = Personaje;