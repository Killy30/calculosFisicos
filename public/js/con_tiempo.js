//tiempo conversion
const unoT = document.getElementById('select_unoT');
const dosT = document.getElementById('select_dosT');
const btnT = document.getElementById('btnT');
const numT = document.getElementById('numT');
const resultadoT = document.getElementById('resultadoT')
const valorT = document.getElementById('valorT')


//tiempo conversion
btnT.addEventListener('click', ()=>{
    var numeroT = numT.value; 

    if (unoT.value == 'hora' && dosT.value == 'hora') {
        valorT.innerHTML = numeroT+' h';
        resultadoT.innerHTML = contador_mul(numeroT, 1) +' min'
    }else if (unoT.value == 'hora' && dosT.value == 'minuto') {
        valorT.innerHTML = numeroT+' h';
        resultadoT.innerHTML = contador_mul(numeroT, 60) +' min'
    }else if (unoT.value == 'hora' && dosT.value == 'segundo') {
        valorT.innerHTML = numeroT+' h';
        resultadoT.innerHTML = contador_mul(numeroT, 3600) +' s'
    }else if (unoT.value == 'hora' && dosT.value == 'milisegundo') {
        valorT.innerHTML = numeroT+' h';
        resultadoT.innerHTML = contador_mul(numeroT, 3600000) +' mil'
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
        valorT.innerHTML = numeroT+' min';
        resultadoT.innerHTML = contador_mul(numeroT, 1) +' min'
    }else if (unoT.value == 'minuto' && dosT.value == 'hora') {
        valorT.innerHTML = numeroT+' min';
        resultadoT.innerHTML = contador_div(numeroT, 60) +' h'
    }else if (unoT.value == 'minuto' && dosT.value == 'segundo') {
        valorT.innerHTML = numeroT+' min';
        resultadoT.innerHTML = contador_mul(numeroT, 60) +' s'
    }else if (unoT.value == 'minuto' && dosT.value == 'milisegundo') {
        valorT.innerHTML = numeroT+ ' min';
        resultadoT.innerHTML = contador_mul(numeroT, 60000) +' mil'
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
        valorT.innerHTML = numeroT+' s';
        resultadoT.innerHTML = contador_mul(numeroT, 1) +' s'
    }else if (unoT.value == 'segundo' && dosT.value == 'hora') {
        valorT.innerHTML = numeroT+' s';
        resultadoT.innerHTML = contador_mul(numeroT, 3600) +' h'
    }else if (unoT.value == 'segundo' && dosT.value == 'minuto') {
        valorT.innerHTML = numeroT+' s';
        resultadoT.innerHTML = contador_div(numeroT, 60) +' min'
    }else if (unoT.value == 'segundo' && dosT.value == 'milisegundo') {
        valorT.innerHTML = numeroT+'s';
        resultadoT.innerHTML = contador_mul(numeroT, 1000) +'min'
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
        valorT.innerHTML = numeroT+' mil';
        resultadoT.innerHTML = contador_mul(numeroT, 1) +' mil'
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
        valorT.innerHTML = numeroT+' dia';
        resultadoT.innerHTML = contador_mul(numeroT, 86400000) +' mil'
    }else if (unoT.value == 'dia' && dosT.value == 'hora') {
        valorT.innerHTML = numeroT+' dia';
        resultadoT.innerHTML = contador_mul(numeroT, 24) +' h'
    }else if (unoT.value == 'dia' && dosT.value == 'minuto') {
        valorT.innerHTML = numeroT+' dia';
        resultadoT.innerHTML = contador_mul(numeroT, 1440) +' h'
    }else if (unoT.value == 'dia' && dosT.value == 'segundo') {
        valorT.innerHTML = numeroT+' dia';
        resultadoT.innerHTML = contador_mul(numeroT, 86400) +' h'
    }else if (unoT.value == 'dia' && dosT.value == 'dia') {
        valorT.innerHTML = numeroT+' dia';
        resultadoT.innerHTML = contador_mul(numeroT, 1) +' dia'
    }else if (unoT.value == 'dia' && dosT.value == 'año') {
        valorT.innerHTML = numeroT+' dia';
        resultadoT.innerHTML = contador_div(numeroT, 365) +' año'
    }else if (unoT.value == 'dia' && dosT.value == 'semana') {
        valorT.innerHTML = numeroT+' dia';
        resultadoT.innerHTML = contador_div(numeroT, 7) +' sem'
    }

    ////
    else if (unoT.value == 'año' && dosT.value == 'milisegundo') {
        valorT.innerHTML = numeroT+' año';
        resultadoT.innerHTML = contador_mul(numeroT, 31536000000) +' mil'
    }else if (unoT.value == 'año' && dosT.value == 'hora') {
        valorT.innerHTML = numeroT+' año';
        resultadoT.innerHTML = contador_mul(numeroT, 8760) +' h'
    }else if (unoT.value == 'año' && dosT.value == 'minuto') {
        valorT.innerHTML = numeroT+' año';
        resultadoT.innerHTML = contador_mul(numeroT, 525600) +' h'
    }else if (unoT.value == 'año' && dosT.value == 'segundo') {
        valorT.innerHTML = numeroT+' año';
        resultadoT.innerHTML = contador_mul(numeroT, 31536000) +' h'
    }else if (unoT.value == 'año' && dosT.value == 'dia') {
        valorT.innerHTML = numeroT+' año';
        resultadoT.innerHTML = contador_mul(numeroT, 365) +' dia'
    }else if (unoT.value == 'año' && dosT.value == 'año') {
        valorT.innerHTML = numeroT+' año';
        resultadoT.innerHTML = contador_mul(numeroT, 1) +' año'
    }else if (unoT.value == 'año' && dosT.value == 'semana') {
        valorT.innerHTML = numeroT+' año';
        resultadoT.innerHTML = contador_mul(numeroT, 52.14285714285714) +' sem'
    }

    ////
    else if (unoT.value == 'semana' && dosT.value == 'milisegundo') {
        valorT.innerHTML = numeroT+' sem';
        resultadoT.innerHTML = contador_mul(numeroT, 604800000) +' mil'
    }else if (unoT.value == 'semana' && dosT.value == 'hora') {
        valorT.innerHTML = numeroT+' sem';
        resultadoT.innerHTML = contador_mul(numeroT, 168) +' h'
    }else if (unoT.value == 'semana' && dosT.value == 'minuto') {
        valorT.innerHTML = numeroT+' sem';
        resultadoT.innerHTML = contador_mul(numeroT, 10080) +' h'
    }else if (unoT.value == 'semana' && dosT.value == 'segundo') {
        valorT.innerHTML = numeroT+' sem';
        resultadoT.innerHTML = contador_mul(numeroT, 604800) +' h'
    }else if (unoT.value == 'semana' && dosT.value == 'dia') {
        valorT.innerHTML = numeroT+' sem';
        resultadoT.innerHTML = contador_mul(numeroT, 7) +' dia'
    }else if (unoT.value == 'semana' && dosT.value == 'año') {
        valorT.innerHTML = numeroT+' sem';
        resultadoT.innerHTML = contador_div(numeroT, 52.14285714285714) +' año'
    }else if (unoT.value == 'semana' && dosT.value == 'semana') {
        valorT.innerHTML = numeroT+' sem';
        resultadoT.innerHTML = contador_mul(numeroT, 1) +' sem'
    }
})