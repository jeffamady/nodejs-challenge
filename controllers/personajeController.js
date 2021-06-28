const Personaje = require("../models/Personaje");

exports.mostrarPersonajes = async (req, res) => {
  try {
    const personajes = await Personaje.findAll();
    res.send(personajes);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.agregarPersonaje = async (req, res) => {
  try {
    // console.log(req.body);

    const { imagen } = req.body;
    const { nombre } = req.body;
    const { edad } = req.body;
    const { peso } = req.body;
    const { historia } = req.body;
    const { peliculasoseries } = req.body;
    if (
      !imagen ||
      !nombre ||
      !edad ||
      !peso ||
      !historia ||
      !peliculasoseries
    ) {
      res.send({ msg: "Faltan datos" });
    } else {
      await Personaje.create({
        imagen,
        nombre,
        edad,
        peso,
        historia,
        "peliculas o series": peliculasoseries,
      });
      res.send({ msg: "Personaje agregado" });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.modificarPersonaje = async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const personaje = await Personaje.findOne({
      where: { id },
    });
    // console.log(personaje);

    if (personaje === null) {
      res.status(400).send({ msg: "No tenemos este personaje" });
    } else {
      const { id } = req.params;
      const { imagen } = req.body;
      const { nombre } = req.body;
      const { edad } = req.body;
      const { peso } = req.body;
      const { historia } = req.body;
      const { peliculasoseries } = req.body;
      const personajeModificado = await Personaje.update(
        {
          imagen,
          nombre,
          edad,
          peso,
          historia,
          "peliculas o series": peliculasoseries,
        },
        { where: { id } }
      );

      res.send({ msg: "Personaje modificado" });
    }
  } catch (error) {
    res.status(400).send(error);
}
};

exports.eliminarPersonaje = async (req, res, next) => {
    try {
        const { id } = req.params;

        const response = await Personaje.destroy({where: { id }});

        console.log(response);
        

        if(!response) {
            res.status(400).send({msg: "Personaje no existe"});
            return next();
        }

        res.send({ msg: "El personaje ha sido borrado"});

    } catch (error) {
        res.status(400).send(error);
    }

}
