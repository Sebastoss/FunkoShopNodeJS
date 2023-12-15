const express = require('express');
const fs = require('fs')

const router = express.Router();

const {home, contact, about, faqs} = require('../controllers/mainController.js')

// MAIN ROUTES

router.get("/", home);
router.get("/contact", contact);
router.get("/about", about);
router.get("/faqs", faqs);


router.get("/items", (req, res) => {
    const producto = req.query.id;


    const getItems = fs.readFileSync('./data/items.json')

 res.send(JSON.parse(getItems));
});


module.exports = router;