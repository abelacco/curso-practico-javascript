const lista1 = [
    500,
    200,
    700,
    400,
];


function calcularMediaAritmetica (lista) {
   
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;           
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}


function esPar(numerito) {
    if (numerito % 2 === 0){
        return true;
    }
    else {
        return false;
    }

}

let mediana;

function calcularMediana(lista) {

const listaOrdenada = lista.sort();
const mitadLista1 = parseInt(listaOrdenada.length / 2) ;

if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista1 - 1];
    const elemento2 = listaOrdenada[mitadLista1];

    const promedioElemento1y2 =  calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElemento1y2;

}
else {
    mediana = lista1[mitadLista1];
}
}