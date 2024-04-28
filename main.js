//tipos de bucles 
//ciclos por conteo
// estructura for
//repite un codigo un numero de veces especificas
// for (let i = 0; i < 10; i++){
// alert(i);
//}

//ciclos condicionales
// estructura while o do while
// repite la condicion mientras sea verdadera

// for

// desde; hasta; actualizacion/incrementos
// i++ quiere decir que va de uno en uno
// sugarsintax i++ 


// dubegger es limpiar los problemas del sistema

//debugger

/*let i = parseInt(prompt("ingrese un numero"))

for( let i = 0; i<10; i++){
    alert("hola javascript" + " " + i)
}*/

//let i =0

/* let numero = parseInt(prompt("ingrese un numero"))

for(let i=1; i<10; i++){

    let resultado = numero *i
    alert("esta es la tabla del numero " + numero + " " + resultado)
}*/

// el break es un condicional que hace que el for corte cuando es falsa la condicion dentro del break
// el continue salta la condicion que uno coloque

/*for(let i=1; i<10; i++){
    // si la variable i es igual 5 interrumpo el for
    if( i == 5){
        continue;
    }

    alert(i)


}*/

// el bucle for se utiliza cuando sabemos el numero de veces que queremos que se repita una condicion
// el ciclo while se repite mientras la condicion sea verdadera

/*let entrada = prompt("ingresa un dato")

// repetimos con while hasta que el usuario ingrese "ESC"
while(entrada != "ESC"){

    alert("el usuario ingreso " + entrada);
    //volvemos a solicistar un dato. en la proxima iteracion se evalua si no es ESC.
    entrada = prompt("ingresa otro dato")
}*/

/*let iterar = true

while( iterar === true){
    console.log("imprimo mensaje por consola")
    iterar = confirm("queres seguir en el bucle?")

}*/

// confirm es un alert con opciones de aceptar o cancelar
//alert es solo el mensaje
// confirm da opcion true o false

//  do while garantizar que el bloque de codigo se interprete al menos una vez
// esto se debe porque la condicion se ejetuta al final

// caso de do while

/*let contador = 6

do{
    console.log("el valor del contador es " + contador)
    contador++
}while(contador < 3)*/


/*let contrasena = 123

do{
    let pass = prompt("ingresa contrase;a")
}while(contador == pass)*/


let identificar = true

let intentos = 1

do{
    let usuario = prompt("ingresar el usuario, (solo tenes 3 intentos)")
    if(usuario == null){
        break
    }

    if( usuario == "pedro ramos" && intentos <=3){
        alert("bienvenido bichito de luz a mi corazon")
        identificar = false
    }else{
        intentos++
        if(intentos >3){
            alert("vos no sos mi bichito de luz")
        }
    }
}while(identificar)