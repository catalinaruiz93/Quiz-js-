var tipomotor = (2);
switch (tipomotor) {
    case 0: document.write("No hay establecido un valor definido para el tipo de bomba");
    break;
    case 1: document.write("La bomba es una bomba de agua");
    break;
    case 2: document.write("La bomba es una bomba de gasolina");
    break;
    case 3: document.write("La bomba es una bomba de hormigón");
    break;
    case 4: document.write("La bomba es una bomba de pasta alimenticia");
    break;
    default: document.write("No existe un valor válido para tipo de bomba");
    break;
}


function obtenervalorconimpuesto (valorsinimpuesto ,producto) {
 console.log (valorsinimpuesto + producto);    
}
  
var args = [1, 2, 3];
obtenervalorconimpuesto.apply (null, args.concat(3));
 const obtenervalorconimpuesto1 = (valorsinimpuesto, producto) =>
 {
     console.log (valorsinimpuesto + producto);

 };
 let args1 = [ 21, 10 , 3];
 obtenervalorconimpuesto(...args, 3)
 alert( 'El valor sin impuestos'  * 'precio' + ' producto')




