class Persona {
    static contadorPersonas = 0;
    static idPersona = 0;
    constructor(nombre,apellido,edad){
        this._idPersona = Persona.incrementarId();
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        Persona.incrementarPersonas();
    }
    static incrementarId () {
        return ++Persona.idPersona;
    }   
    static incrementarPersonas () {
        Persona.contadorPersonas++;
    }
    getIdPersona(){
        return this._idPersona;
    }
    getNombre(){
        return this._nombre;
    }
    setNombre(nombre){
        this._nombre = nombre;
    }
    getApellido(){
        return this._apellido;
    }
    setApellido(apellido){
        this._apellido = apellido;
    }
    getEdad() {
        return this._edad;
    }
    setEdad(edad){
        this._edad = edad;
    }
    toString(){
        return '${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}'
    }
}

class Empleado extends Persona{
    idEmpleado = 0 
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = Persona.incrementarId();
        this._sueldo = sueldo;
    }
    getIdEmpleado () {
        return this._idEmpleado
    }
    getSueldo () {
        return this._sueldo
    }
    setSueldo (sueldo) {
        this._sueldo = sueldo
    }
    toString(){
        return '${super().toString} ${this._idEmpleado} ${this._sueldo)}'
    }
}

class Cliente extends Persona {
    constructor (nombre,apellido,edad) {
        super(nombre,apellido,edad);
        this._idCliente = Persona.incrementarId();
        this._fechaDeRegistro = new Date();
    }
    getIdCliente(){
        return this._idCliente
    }
    getFechaDeRegistro(){
        return this._fechaDeRegistro
    }
    setFechaDeRegistro(date){
        this._fechaDeRegistro = date
    }
    toString(){
        return '${super().toString} ${this._idCliente} ${this._fechaDeRegistro}'
    }   
}

let empleado = new Empleado("Carlos", "Martínez", 30, 2500);
console.log(empleado.toString());

let cliente = new Cliente("Ana", "González", 25);
console.log(cliente.toString());