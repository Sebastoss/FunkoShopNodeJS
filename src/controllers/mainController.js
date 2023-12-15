

module.exports = {

    home: (req, res) => {

    res.render('home', {title:"Home"})
},
    contact: (req, res) => res.send("Página de Contacto"),
    about: (req, res) => res.send("Página Sobre Nosotros"),
    faqs: (req, res) => res.send("Página Sobre Faqs"),

   }
   