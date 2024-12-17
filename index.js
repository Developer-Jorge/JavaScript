let persona = {
    nombre : 'Jorge',
    apellido : 'Condori Aguirre',
    dni:0, 
    set cambiarDNI(_dni) {
        this.dni = _dni
    },
    get consularDNI(){
        return this.dni
    },
    consul : function(){
        return this.dni
    }
}

console.log(persona.nombre)
persona.cambiarDNI = 43988157
console.log(persona.dni)
console.log(persona.consularDNI)
console.log(persona.consul())



//CONSTRUCTOR
function Persona (_nombre,_apellido,_dni) {
    this.nombre = _nombre,
    this.apellido = _apellido,
    this.dni = _dni
};

const laura = new Persona ("Laura","Morales",43988157)
console.log(laura)

//CLASE
class Person {
    constructor(_nombre, _apellido, _dni) {
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.dni = _dni;
    }
}

const jorge = new Person("Jorge","Condori",43988157)
console.log(jorge)

// HERENCIA
class Trabajador extends Person {
    constructor(_nombre, _apellido, _dni, _horasDeSuenio,_horasDeTrabajo, _sueldoPorHora) {
        super(_nombre, _apellido, _dni);
        this.horasDeSuenio = _horasDeSuenio;
        this.horasDeTrabajo = _horasDeTrabajo;
        this.sueldoPorHora = _sueldoPorHora;
        this.sueldoTotal = 0;
    }

    sueldo() {
        this.sueldoTotal = (this.horasDeTrabajo * this.sueldoPorHora) * 30;
    }
}

const pedro = new Trabajador("Pedro","Carlo",43988157,0,8,15)
pedro.sueldo()
console.log(pedro.sueldoTotal)

