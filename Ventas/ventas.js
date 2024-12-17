class Producto {
static idProducto = 0;
static contadorDeProductos = 0;
    constructor(nombre,precio){
        this._idProducto = Producto.incrementarId();
        this._nombre = nombre;
        this._precio = precio;
        incrementarCantidadDeProductos();
    }

static incrementarId(){
    return ++Producto.idProducto
}
static incrementarCantidadDeProductos() {
    Producto.contadorDeProductos++
}


}


class Orden {
static contadorDeProductosAgregados = 0
    constructor(productos){
        this._idOrden = Orden.incrementarId();
        this._productos = productos;
        Orden.incrementarProductosAgregados(this._productos);
    }

static incrementarId(){
    return ++Orden.idProducto
}
static incrementarProductosAgregados(productos) {
    const MAX_PRODUCTOS = 5
        for(let i=0;i < MAX_PRODUCTOS; i++){
            Orden.contadorDeProductosAgregados += productos[i]._cantidadDeProductos
        }
    }

}

