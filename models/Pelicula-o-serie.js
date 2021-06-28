const { Sequelize } = require('sequelize');
const db = require('../config/db');
const Personaje = require('./Personaje');

const Peliculaoserie = db.define('peliculaoserie', {
    id : {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    imagen : Sequelize.STRING(100),
    titulo : Sequelize.STRING(100),
    fecha : Sequelize.INTEGER(2),
    calificacion : Sequelize.ENUM(1,2,3,4,5)
    });
Peliculaoserie.belongsTo(Personaje);

module.exports = Peliculaoserie;