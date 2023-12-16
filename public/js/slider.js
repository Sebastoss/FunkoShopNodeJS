const productosContainer = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slideIndex = 0;
const productosPorSlide = 3;

function mostrarProductos() {
  productosContainer.innerHTML = '';

  for (let i = slideIndex * productosPorSlide; i < (slideIndex + 1) * productosPorSlide; i++) {
    if (i >= productos.length) break;

    const producto = productos[i];
    const productoHTML = `
      <div>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.categoria}</h3>
        <h4>${producto.nombre}</h4>
        <p>${producto.precio}</p>
      </div>
    `;
    productosContainer.innerHTML += productoHTML;
  }
}

function avanzarSlide() {
  slideIndex++;
  if (slideIndex * productosPorSlide >= productos.length) {
    slideIndex = 0;
  }
  mostrarProductos();
}

function retrocederSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = Math.ceil(productos.length / productosPorSlide) - 1;
  }
  mostrarProductos();
}

mostrarProductos();

prevBtn.addEventListener('click', retrocederSlide);
nextBtn.addEventListener('click', avanzarSlide);