let fs = require('fs');

module.exports = {

    shop: (req, res) => {
        
        // lectura del archivo productos.json (fs.readFile) con una promesa callback. Devuelve error con res.send si hay algun problema, sino renderiza enviando los productos a la view shop.

        fs.readFile("src/data/productos.json", (err, data) => {

            if (err) {

                console.log('Error:', err);

                res.send(`Error: ${err.errno} <br> ${err.code}<br> ${err.syscall}<br> ${err.path}`)

            } else {

                console.log(JSON.parse(data));

                res.render('shop', {title: "Funko Shop", items: JSON.parse(data)});
            } 
        });
    },
    shopItem: (req,res)=>{
        let id = req.params.id
        let productos = require('../data/productos.json')

        console.log(id)

        fs.readFile("src/data/productos.json", (err, data) => {

            if (err) {

                console.log('Error:', err);

                res.send(`Error: ${err.errno} <br> ${err.code}<br> ${err.syscall}<br> ${err.path}`)

            } else {

                let itemsJSONData = JSON.parse(data);
                let itemFound
                let itemInfo

                itemsJSONData.forEach(producto => {
                    if (producto.product_sku === id){
                        itemFound = 1
                        itemInfo = {
                            "product_id": producto.product_id,
                            "licence_name": producto.licence_name,
                            "category_name": producto.category_name,
                            "product_name": producto.product_name,
                            "product_description": producto.product_description,
                            "product_price": producto.product_price,
                            "dues": producto.dues,
                            "product_sku": producto.product_sku,
                            "img_front": producto.img_front,
                            "img_back": producto.img_back
                        }
                    }
                });

                if(itemFound){
                    res.render("shopItem",{title: `Funko Shop ${itemInfo.product_name}`, item: itemInfo, productos:productos})

                } else {

                    res.send("Producto no encontrado")
                }
            } 
        });
        
    }


   }