const express = require('express');
const path = require("path");

const mainRoutes = require('./routes/mainRoutes.js')
const shopRoutes = require('./routes/shopRoutes.js')

const app = express();
const port = 3000;

// Carpeta Public

app.use(express.static('public'));

// Motor de vistas EJS y su carpeta
app.set ("view engine", "ejs")
app.set ("views", path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname, '../public')));

// Rutas

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);


// Middleware 404
app.use((req, res) => {
    res.status(404).send("Pagina no encontrada")
});

//Servidor

app.listen(port, () => {
 console.log(`La app está corriendo en http://localhost:${port}`);
});