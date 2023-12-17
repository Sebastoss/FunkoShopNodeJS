let cantidadItem = document.getElementById("cantidadItem"); // selecciono el input que contiene la cantidad de productos de un item
let btnItemCant = document.getElementsByClassName("btnItemCant"); // selecciono los botones + y - para agregar o quitar la cantidad de un item


// Eventos de click para sumar o restar a la cantidad de un item
btnItemCant[0].addEventListener("click",()=>{ // boton +

    if(cantidadItem.value >= 0){
        cantidadItem.value = +cantidadItem.value + 1;
    }

})
btnItemCant[1].addEventListener("click",()=>{ // boton -
    
    if(cantidadItem.value > 0){
        cantidadItem.value = +cantidadItem.value - 1;
    }

})

// Funciones para cambiar la img_front a img_back y viceversa 

const cambiarImagen = (img, nuevaUrl)=>{
    img.src = nuevaUrl;
}
const restaurarImagen = (img, anteriorUrl)=>{
    img.src = anteriorUrl;
}

