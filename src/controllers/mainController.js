

module.exports = {

    home: (req, res) => {

        const coleccionesJSON = require("../data/colecciones.json");

        console.log(coleccionesJSON)

    res.render('home', {title:"Home", colecciones: coleccionesJSON})
},
    contact: (req, res) => res.send("Página de Contacto"),
    about: (req, res) => res.send("Página Sobre Nosotros"),
    faqs: (req, res) => res.send("Página Sobre Faqs"),

   }
   