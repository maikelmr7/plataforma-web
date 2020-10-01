var docente1 = {
    nombre: `Michael`,
    apellido: `Reyes`,
    afiliacion: `Universidad Politécnica Salesiana`,
    correo_electronico: `mreyessa@est.ups.edu.ec`,
}

var docente2 = {
    nombre: `Jose`,
    apellido: `Rodriguez`,
    afiliacion: `Universidad Politécnica Salesiana`,
    correo_electronico: `jrodriguez@ups.edu.ec`,
}

function imprimirNombreMayuscula(objeto) {
    var { nombre } = objeto
    console.log( `${nombre.toUpperCase()} ${objeto.apellido}` )
}

function imprimirNombreMinuscula(objeto) {
    console.log( `${objeto.nombre.toLowerCase()} ${objeto.apellido}` )
}

function imprimirApellidoMayuscula( { apellido } ) {
    console.log( `${apellido.toUpperCase()}` )
}


imprimirNombreMayuscula( docente1 )
imprimirNombreMinuscula( docente1 )
imprimirApellidoMayuscula( docente2 )