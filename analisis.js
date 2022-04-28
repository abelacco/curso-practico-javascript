
//Helpers

function esPar(numerito) {
    return (numerito % 2 === 0);
}

function medianaSalarios (lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const mitad1 =lista[mitad - 1];
        const mitad2 = lista[mitad];
        const media = (mitad1 + mitad2) / 2;
        return media;
    }else{
        const mitad = lista[mitad -1];
        return mitad;
    }
    
}

//Calculadora de la mediana

// Mediana General 

const salariosCol = colombia.map(function(personita){
return personita.salary

});

const salariosColOrdenados = salariosCol.sort(function(salaryA,salaryB){
    return salaryA - salaryB;
});

const sumaSalariosCol = salariosCol.reduce(function(sumatotal,salary){
    return sumatotal + salary
});

const mediaSalariosCol = sumaSalariosCol / salariosCol.length;



const medianaGeneralColombia = medianaSalarios(salariosColOrdenados);


// Mediana del top 10

const spliceStart= (salariosColOrdenados.length * 90)/100;
const spliceCount= salariosColOrdenados.length - spliceStart;

const salariosTop10 = salariosColOrdenados.splice(spliceStart,spliceCount);

const medianaTop10 = medianaSalarios(salariosTop10);

