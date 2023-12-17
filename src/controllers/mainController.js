

module.exports = {

    home: (req, res) => {

        const coleccionesJSON = require("../data/colecciones.json");
        const productosJSON = require("../data/productos.json");

    res.render('home', {title:"Home", colecciones: coleccionesJSON, productos:productosJSON})
},
    contact: (req, res) => res.send("Página de Contacto"),
    about: (req, res) => res.send("Página Sobre Nosotros"),
    faqs: (req, res) => res.send("Página Sobre Faqs"),

   }
   