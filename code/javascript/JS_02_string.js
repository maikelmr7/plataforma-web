var nombre = `MICHAEL`
var apellido = `REYES`

var nombre = `MICHAEL`, apellido = `REYES`

var nombreMayusculas = nombre.toUpperCase()
var apellidoMayusculas = apellido.toUpperCase()


//javaScript puro
console.log( nombreMayusculas + ' ' + apellidoMayusculas)
//  Especificacion de java Script EcmaScript +6
console.log( `${nombre} ${apellidoMayusculas}`) 

var primeraLetraNombre = nombre.charAt(0)
var longitudNombre = nombre.length
var subcadenaNombre = nombre.substr(1,3)

console.log( primeraLetraNombre )
console.log( longitudNombre )
console.log( subcadenaNombre )