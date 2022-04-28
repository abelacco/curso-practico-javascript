const notasCurso = [
    {final: 20,
     peso: 1
    },
    {final: 5,
     peso: 1
    },
    {final: 11,
     peso: 10
    },
    {final: 11,
     peso: 2
    }, 
]

const notasxPromedios = notasCurso.map(function(notasObjeto){
    return notasObjeto.final * notasObjeto.peso
});

const sumaPromedios = notasxPromedios.reduce(function(resultado,elemento) {
    return resultado + elemento;
 
});

const creditos = notasCurso.map(function(notasObjeto) {
    return notasObjeto.peso;
});

const sumaDecreditos = creditos.reduce(function(resultado,elemento){
    return resultado + elemento;
});

const sumaDecreditos = notasCurso.reduce(function(resultado,notasObjeto){
    return resultado + notasObjeto.peso;
});

function promedioPonderado(notasCurso) {
    return sumaPromedios / sumaDecreditos;
}



