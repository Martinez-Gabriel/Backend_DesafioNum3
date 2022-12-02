// >> Consigna:
// Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:
// Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
// Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
// Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

// Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.

const express = require ('express');
const app = express();
const PORT = 8080


const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}`)    
  });

server.on("error", error => console.log(`Error en servidor${error}`));
  
app.get('/productos', function (req, res) {
  res.send(products.getAll())
});

app.get('/productoRandom', function (req, res) {
  res.send(products.getRandom())
});




const fs = require ('fs')


class Container {
     constructor( file ) {
      this.file = file
  }

  
  getAll() {
    
      const objects = fs.readFileSync( this.file, 'utf-8')
      return JSON.parse(objects)
  }

  
  getRandom(min, max) {
    return Math.floor(Math.random() * (max - 1 + 1) + 1);
}
}
  


const products = new Container('products.txt')