const express = require('express');
const fs = require('fs')

const router = express.Router();

const {shop, shopItem} = require('../controllers/shopControllers.js')

// Shop ROUTES

router.get("/", shop);
router.get("/item/:id", shopItem);
router.post("/item/:id/add", );
router.get("/cart", );
router.post("/cart", );



module.exports = router;