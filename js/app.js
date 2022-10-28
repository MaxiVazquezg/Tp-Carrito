
// Declaro Variables
const carrito = document.querySelector('#carrito'); // metodo primer elemento del
// doc. que coicide con el selector
const listaProductos = document.querySelector('#lista-producto');//idem
const contenedorCarrito = document.querySelector('#lista-carrito tbody');//idem
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); //idem
const numeroCant = document.querySelector('#numeroCant'); //idem


      let articulosCarrito = []

      class Producto { 
          constructor(imagen, titulo,precio,id, cantidad) {
              this.imagen = imagen; 
              this.titulo = titulo;
              this.precio = precio;
              this.id = id;
               this.cantidad = cantidad;
             
          }}

         
// Listeners escucho 
cargarEventListeners();
// hacemos tres listeners
function cargarEventListeners() {
     //no hacemos una funcion grande sino que 
     //haremos algunas para favoreces comprención 
     // Dispara cuando se presiona "Agregar Carrito"
     listaProductos.addEventListener('click', agregarProducto);//
     //metodo que indica al navegador que este atento a la interacción del usuario
     //escuchandooooo
     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarProducto);
     //escuchandooooo
     // Al Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
  
}

// Funciones
// Función que añade el curso al carrito
function agregarProducto(e) {
     //e.preventDefault();
     // Delegation para agregar-carrito
     if(e.target.classList.contains('agregar-carrito')) {
          const producto = e.target.parentElement.parentElement;
          // Enviamos el curso seleccionado para tomar sus datos
          console.log(producto)
          leerDatosProd(producto);
     }

}

// Lee los datos del curso
function leerDatosProd(producto) {

     //     const infoCurso = {                        remplazado al aplicar la clase constructor "Producto"
     //      imagen: curso.querySelector('img').src,
     //      titulo: curso.querySelector('h4').textContent,
     //      precio: curso.querySelector('.precio span').textContent,
     //      id: curso.querySelector('a').getAttribute('data-id'), 
     //      cantidad: 1 

         let imagen = producto.querySelector('img').src;
         let titulo = producto.querySelector('h4').textContent;
         let precio =  producto.querySelector('.precio span span').textContent; 
         let id = producto.querySelector('a').getAttribute('data-id');
         let cantidad= 1;
        let numer = 0;


     let infoProducto = new Producto(imagen, titulo, precio, id, cantidad); //##  llamamos a la clase "Producto"

     if( articulosCarrito.some( producto => producto.id === infoProducto.id ) ) { 
          const productos = articulosCarrito.map( producto => {
               if( producto.id === infoProducto.id ) {
                    producto.cantidad++ ; 
                  
                   return producto;
                } else {
                    
                     return producto;

             }
          })
        
          articulosCarrito = [...productos];//tarea ver que hace esta linea
         
     }  else {
          articulosCarrito = [...articulosCarrito, infoProducto];
     }
   
     articulosCarrito.map( producto => { //   ##   usamos map para recorrer producto y sumar la cantridad al contador 
          if( producto.id === infoProducto.id ) {
               producto.cantidad; 
              numer = numer + producto.cantidad ;
              return producto;
           } else {
               numer = numer + producto.cantidad ;
                return producto;
        }})


     // console.log(articulosCarrito)
   descuento();  
contador(numer); 
 carritoHTML();
}

// Elimina el curso del carrito en el DOM
function eliminarProducto(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-producto') ) {
          // e.target.parentElement.parentElement.remove();
          const productoId = e.target.getAttribute('data-id')
          
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

          
          carritoHTML();
          vaciarContador();
     }
   
}

// Muestra el curso seleccionado en el Carrito
function carritoHTML() {
    
     
     contenedorCarrito.innerHTML = ''; //reiniciamos el carrito sin el usar la funcion vaciar carrito para no vaciar el array
   
     articulosCarrito.forEach(producto => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${producto.imagen}" width=100>
               </td>
               <td>${producto.titulo}</td>
               <td>$${producto.precio}</td>
               <td>${producto.cantidad} </td>
               <td></td>
               <td>
                    <a href="#" onclick="desaaprecerDescuento();" class="borrar-producto" data-id="${producto.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);

          
     });


}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() { 
     // forma lenta
     articulosCarrito = []; //vaciamos el array
     contenedorCarrito.innerHTML = '';
     desaaprecerDescuento();
   console.log(articulosCarrito) ;

     // forma rapida (recomendada)
}

function contador(numCantidad) {

this.numCantidad = numCantidad;
    
     const row = document.createElement('p');
   vaciarContador();
     row.innerHTML = `
      <h2>  ${numCantidad} </h2>
          `;
          numeroCant.appendChild(row);         
}

function vaciarContador() { //vacia el contador
   numeroCant.innerHTML=''
}

function descuento() {// usamos el some para encontrar el numero 3 en valor.cantidad
  const desc = articulosCarrito.some(valor => { 
     let result = false;
     result =  valor.cantidad == 3;
     return result;
});

console.log(desc)
if(desc == true ){
    

    document.getElementById("descuento").style.display = 'block';
 

}}

function desaaprecerDescuento() {

     document.getElementById("descuento").style.display = 'none';

   }

