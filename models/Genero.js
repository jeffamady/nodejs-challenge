const { Sequelize } = require('sequelize');
const db = require('../config/db');
const Personajeoserie = require('./Pelicula-o-serie');

const Genero = db.define('genero', {
    id : {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    nombre : Sequelize.STRING(100),
    imagen : Sequelize.STRING(100)
    });
Genero.belongsTo(Personajeoserie);

module.exports = Genero;