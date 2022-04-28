// Código del cuadrado
console.group("Cuadrado")
// const ladoCuadrado = 20;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado);

function  perimetroCuadrado(lado) {
 return lado * 4 ;
} 
//console.log("El perimetro del cuadrado es :" + perimetroCuadrado + " m");


function areaCuadrado(lado) {
    return lado * lado ;
}
//console.log("El área del cuadrado es :" + areaCuadrado + " m2");
console.groupEnd()

// Código del triángulo
console.group("Tríangulo")
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log("Los lados de mi triángulo miden: " + ladoTriangulo1 + ", " + ladoTriangulo2 + ", " + baseTriangulo);

function perimetroTriangulo(lado1,lado2,base){
   return lado1 + lado2 + base; 
}
//console.log("El perimetro del triángulo es :" + perimetroTriangulo + " m");


function areaTriangulo(base,altura) {
    return (base * altura) / 2 ;
}
//console.log("El área del triángulo es :" + areaTriangulo + " m2");
console.groupEnd();

// Código del circulo
console.group("Circulo")
//const radio = 20;
const pi = 3.1415
//console.log("El radio del círculo es : " + radio + " y su perímetro es : " + 2*radio*pi);

function areaCirculo(radio) {
    return radio * radio * pi ;
}   

function diametroCirculo(radio) {
    return radio * 2 ;
}    

    function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

//console.log("El área del circúlo es :" + areaCirculo + " m");
console.groupEnd();

// Aquí interactuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

// Tarea altura de un triangulo isósceles


function alturaTrianguloIsosceles(lado1,lado2,base) {
    if (lado1 === lado2 && lado1 != base){
        const altura = Math.sqrt(lado1*lado1-(base*base/4));
        return "La altura del triángulo isosceles es: " + altura;
    }
    else {
        return "No es un triángulo isósceles"
        console.log("No es un triangulo isósceles")
    }
}