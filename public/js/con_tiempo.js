//tiempo conversion
const unoT = document.getElementById('select_unoT');
const dosT = document.getElementById('select_dosT');
const btnT = document.getElementById('btnT');
const numT = document.getElementById('numT');
const resultadoT = document.getElementById('resultadoT')
const valorT = document.getElementById('valorT')

let contador_mul = (a, b) => a * b;
let contador_div = (a, b) => a / b;

//tiempo conversion
btnT.addEventListener('click', ()=>{
    var numeroT = numT.value; 

    if(numeroT.trim() == '') return false

    if (unoT.value == 'hora' && dosT.value == 'hora') {
        new Conversion_mul(numeroT, 1, 'h', 'h')
    }else if (unoT.value == 'hora' && dosT.value == 'minuto') {
        new Conversion_mul(numeroT, 60, 'h', 'min')
    }else if (unoT.value == 'hora' && dosT.value == 'segundo') {
        new Conversion_mul(numeroT, 3600, 'h', 's')
    }else if (unoT.value == 'hora' && dosT.value == 'milisegundo') {
        new Conversion_mul(numeroT, 3600000, 'h', 'mil')
    }else if (unoT.value == 'hora' && dosT.value == 'dia') {
        valorT.innerHTML = numeroT+' h';
        resultadoT.innerHTML = contador_div(numeroT, 24) +' dia'
    }else if (unoT.value == 'hora' && dosT.value == 'año') {
        valorT.innerHTML = numeroT+' h';
        resultadoT.innerHTML = contador_div(numeroT, 8760) +' año'
    }else if (unoT.value == 'hora' && dosT.value == 'semana') {
        valorT.innerHTML = numeroT+' h';
        resultadoT.innerHTML = contador_div(numeroT, 168) +' sem'
    }
    ////
    else if (unoT.value == 'minuto' && dosT.value == 'minuto') {
        new Conversion_mul(numeroT, 1, 'min', 'min')
    }else if (unoT.value == 'minuto' && dosT.value == 'hora') {
        valorT.innerHTML = numeroT+' min';
        resultadoT.innerHTML = contador_div(numeroT, 60) +' h'
    }else if (unoT.value == 'minuto' && dosT.value == 'segundo') {
        new Conversion_mul(numeroT, 60, 'min', 's')
    }else if (unoT.value == 'minuto' && dosT.value == 'milisegundo') {
        new Conversion_mul(numeroT, 60000, 'min', 'mil')
    }else if (unoT.value == 'minuto' && dosT.value == 'dia') {
        valorT.innerHTML = numeroT+' min';
        resultadoT.innerHTML = contador_div(numeroT, 1440) +' dia'
    }else if (unoT.value == 'minuto' && dosT.value == 'año') {
        valorT.innerHTML = numeroT+' min';
        resultadoT.innerHTML = contador_div(numeroT, 525600) +' año'
    }else if (unoT.value == 'minuto' && dosT.value == 'semana') {
        valorT.innerHTML = numeroT+' min';
        resultadoT.innerHTML = contador_div(numeroT, 10080) +' sem'
    }
    
    else if (unoT.value == 'segundo' && dosT.value == 'segundo') {
        new Conversion_mul(numeroT, 1, 's', 's')
    }else if (unoT.value == 'segundo' && dosT.value == 'hora') {
        valorT.innerHTML = numeroT+' s';
        resultadoT.innerHTML = contador_div(numeroT, 3600) +' h'
    }else if (unoT.value == 'segundo' && dosT.value == 'minuto') {
        valorT.innerHTML = numeroT+' s';
        resultadoT.innerHTML = contador_div(numeroT, 60) +' min'
    }else if (unoT.value == 'segundo' && dosT.value == 'milisegundo') {
        new Conversion_mul(numeroT, 1000, 's', 'mil')
    }else if (unoT.value == 'segundo' && dosT.value == 'dia') {
        valorT.innerHTML = numeroT+' s';
        resultadoT.innerHTML = contador_div(numeroT, 86400) +' dia'
    }else if (unoT.value == 'segundo' && dosT.value == 'año') {
        valorT.innerHTML = numeroT+' s';
        resultadoT.innerHTML = contador_div(numeroT, 31536000) +' año'
    }else if (unoT.value == 'segundo' && dosT.value == 'semana') {
        valorT.innerHTML = numeroT+' s';
        resultadoT.innerHTML = contador_div(numeroT, 604800) +' sem'
    }
    /////
    else if (unoT.value == 'milisegundo' && dosT.value == 'milisegundo') {
        new Conversion_mul(numeroT, 1, 'mil', 'mil')
    }else if (unoT.value == 'milisegundo' && dosT.value == 'hora') {
        valorT.innerHTML = numeroT+' mil';
        resultadoT.innerHTML = contador_div(numeroT, 3600000) +' h'
    }else if (unoT.value == 'milisegundo' && dosT.value == 'minuto') {
        valorT.innerHTML = numeroT+' mil';
        resultadoT.innerHTML = contador_div(numeroT, 60000) +' h'
    }else if (unoT.value == 'milisegundo' && dosT.value == 'segundo') {
        valorT.innerHTML = numeroT+' mil';
        resultadoT.innerHTML = contador_div(numeroT, 1000) +' h'
    }else if (unoT.value == 'milisegundo' && dosT.value == 'dia') {
        valorT.innerHTML = numeroT+' mil';
        resultadoT.innerHTML = contador_div(numeroT, 86400000) +' dia'
    }else if (unoT.value == 'milisegundo' && dosT.value == 'año') {
        valorT.innerHTML = numeroT+' mil';
        resultadoT.innerHTML = contador_div(numeroT, 31536000000) +' año'
    }else if (unoT.value == 'milisegundo' && dosT.value == 'semana') {
        valorT.innerHTML = numeroT+' mil';
        resultadoT.innerHTML = contador_div(numeroT, 604800000) +' sem'
    }

    ///
    else if (unoT.value == 'dia' && dosT.value == 'milisegundo') {
        new Conversion_mul(numeroT, 86400000, 'dia', 'mil')
    }else if (unoT.value == 'dia' && dosT.value == 'hora') {
        new Conversion_mul(numeroT, 24, 'dia', 'h')
    }else if (unoT.value == 'dia' && dosT.value == 'minuto') {
        new Conversion_mul(numeroT, 1440, 'dia', 'min')
    }else if (unoT.value == 'dia' && dosT.value == 'segundo') {
        new Conversion_mul(numeroT, 86400, 'dia', 's')
    }else if (unoT.value == 'dia' && dosT.value == 'dia') {
        new Conversion_mul(numeroT, 1, 'dia', 'dia')
    }else if (unoT.value == 'dia' && dosT.value == 'año') {
        valorT.innerHTML = numeroT+' dia';
        resultadoT.innerHTML = contador_div(numeroT, 365) +' año'
    }else if (unoT.value == 'dia' && dosT.value == 'semana') {
        valorT.innerHTML = numeroT+' dia';
        resultadoT.innerHTML = contador_div(numeroT, 7) +' sem'
    }

    ////
    else if (unoT.value == 'año' && dosT.value == 'milisegundo') {
        new Conversion_mul(numeroT, 31536000000, 'año', 'mil')
    }else if (unoT.value == 'año' && dosT.value == 'hora') {
        new Conversion_mul(numeroT, 8760, 'año', 'h')
    }else if (unoT.value == 'año' && dosT.value == 'minuto') {
        new Conversion_mul(numeroT, 525600, 'año', 'min')
    }else if (unoT.value == 'año' && dosT.value == 'segundo') {
        new Conversion_mul(numeroT, 31536000, 'año', 's')
    }else if (unoT.value == 'año' && dosT.value == 'dia') {
        new Conversion_mul(numeroT, 365, 'año', 'dia')
    }else if (unoT.value == 'año' && dosT.value == 'año') {
        new Conversion_mul(numeroT, 1, 'año', 'año')
    }else if (unoT.value == 'año' && dosT.value == 'semana') {
        new Conversion_mul(numeroT, 52, 'año', 'sem')
    }

    ////
    else if (unoT.value == 'semana' && dosT.value == 'milisegundo') {
        new Conversion_mul(numeroT, 604800000, 'sem', 'mil')
    }else if (unoT.value == 'semana' && dosT.value == 'hora') {
        new Conversion_mul(numeroT, 168, 'sem', 'h')
    }else if (unoT.value == 'semana' && dosT.value == 'minuto') {
        new Conversion_mul(numeroT, 10080, 'sem', 'min')
    }else if (unoT.value == 'semana' && dosT.value == 'segundo') {
        new Conversion_mul(numeroT, 604800, 'sem', 's')
    }else if (unoT.value == 'semana' && dosT.value == 'dia') {
        new Conversion_mul(numeroT, 7, 'sem', 'dia') 
    }else if (unoT.value == 'semana' && dosT.value == 'año') {
        valorT.innerHTML = numeroT+' sem';
        resultadoT.innerHTML = contador_div(numeroT, 52) +' año'
    }else if (unoT.value == 'semana' && dosT.value == 'semana') {
        new Conversion_mul(numeroT, 1, 'sem', 'sem')  
    }
})


class Conversion_mul{

    constructor(valor_1, valor_2, name_1, name_2){
       this.valor_1 = valor_1;
       this.valor_2 = valor_2;
       this.name_1 = name_1;
       this.name_2 = name_2;

       this.multip = valor_1 * valor_2;
       this.showData()
    }

    showData(){
        valorT.innerHTML = `${this.valor_1} ${this.name_1}`;
        resultadoT.innerHTML = `${this.multip} ${this.name_2}`
    }
}


