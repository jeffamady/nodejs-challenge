const express = require('express');
const router = express.Router();
const personajeController = require('../controllers/personajeController');

module.exports = function () {
    router.post('/personajes/nuevo', personajeController.agregarPersonaje);

    router.get('/personajes', personajeController.mostrarPersonajes);
    
    // router.get('/personajes/:id', personajeController.mostrarPersonajes);

    router.put('/personajes/:id', personajeController.modificarPersonaje);
   
    router.delete('/personajes/:id', personajeController.eliminarPersonaje);



    return router;
}