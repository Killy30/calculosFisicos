const uno = document.getElementById('select_uno');
const dos = document.getElementById('select_dos');
const btn = document.getElementById('btn');
const num = document.getElementById('num');
const resultado = document.getElementById('resultado');
const valor = document.getElementById('valor');


btn.addEventListener('click', (e) =>{
    var numero = num.value;
    
    if(uno.value == 'kilometro' && dos.value == 'kilometro'){
        new Conversion_mul(numero, 1, 'km', 'km')
    }else if(uno.value == 'kilometro' && dos.value == 'millas'){
        new Conversion_mul(numero, 0.62137, 'km', 'mi')
    }else if(uno.value == 'kilometro' && dos.value == 'milimetro'){
        new Conversion_mul(numero, 1000000, 'km', 'mil')
    }else if(uno.value == 'kilometro' && dos.value == 'metro'){
        new Conversion_mul(numero, 1000, 'km', 'm')
    }else if(uno.value == 'kilometro' && dos.value == 'centimetro'){
       new Conversion_mul(numero, 100000, 'km', 'cm')
    }else if(uno.value == 'kilometro' && dos.value == 'pulgada'){
        valor.innerHTML = numero +' km';
        resultado.innerHTML = contador_mul(numero, 39370.07) +' in';
    }else if(uno.value == 'kilometro' && dos.value == 'pie'){
        valor.innerHTML = numero +' km';
        resultado.innerHTML = contador_mul(numero, 3280.83) +' ft';
    }else if(uno.value == 'kilometro' && dos.value == 'yarda'){
        valor.innerHTML = numero +' km';
        resultado.innerHTML = contador_mul(numero, 1093.613298) +' yd';
    }else if(uno.value == 'metro' && dos.value == 'metro'){
        valor.innerHTML = numero +' m';
        resultado.innerHTML = contador_mul(numero, 1) +' m';
    }else if(uno.value == 'metro' && dos.value == 'centimetro'){
        valor.innerHTML = numero +' m';
        resultado.innerHTML = contador_mul(numero, 100) +' cm';
    }else if(uno.value == 'metro' && dos.value == 'milimetro'){
        valor.innerHTML = numero +' m';
        resultado.innerHTML = contador_mul(numero, 1000) +' mm';
    }else if(uno.value == 'metro' && dos.value == 'pulgada'){
        valor.innerHTML = numero +' m';
        resultado.innerHTML = contador_mul(numero, 39.37007) +' in';
    }else if(uno.value == 'metro' && dos.value == 'pie'){
        valor.innerHTML = numero +' m';
        resultado.innerHTML = contador_mul(numero, 3.28083) +' ft';
    }else if(uno.value == 'metro' && dos.value == 'millas'){
        valor.innerHTML = numero +' mi';
        resultado.innerHTML = contador_mul(numero, 0.000621371) +' ft';
    }else if(uno.value == 'metro' && dos.value == 'yarda'){
        valor.innerHTML = numero +' m';
        resultado.innerHTML = contador_mul(numero, 1.093613298) +' yd';
    }else if(uno.value == 'metro' && dos.value == 'kilometro'){
        valor.innerHTML = numero +' m';
        resultado.innerHTML = contador_div(numero, 1000) +' km';
    }else if(uno.value == 'pie' && dos.value == 'pie'){
        valor.innerHTML = numero +' ft';
        resultado.innerHTML = contador_mul(numero, 1) +' ft';
    }else if(uno.value == 'pie' && dos.value == 'pulgada'){
        valor.innerHTML = numero +' ft';
        resultado.innerHTML = contador_mul(numero, 12) +' in';
    }else if(uno.value == 'pie' && dos.value == 'kilometro'){
        valor.innerHTML = numero +' ft';
        resultado.innerHTML = contador_div(numero, 3280.83) +' km';
    }else if(uno.value == 'pie' && dos.value == 'metro'){
        valor.innerHTML = numero +' ft';
        resultado.innerHTML = contador_div(numero, 3.28083) +' m';
    }else if(uno.value == 'pie' && dos.value == 'yarda'){
        valor.innerHTML = numero +'ft';
        resultado.innerHTML = contador_div(numero, 3) +' yd';
    }else if(uno.value == 'pie' && dos.value == 'centimetro'){
        valor.innerHTML = numero +'ft';
        resultado.innerHTML = contador_div(numero, 0.0328083) +' cm';
    }else if(uno.value == 'pie' && dos.value == 'milimetro'){
        valor.innerHTML = numero +'';
        resultado.innerHTML = contador_mul(numero, 0.00328083) +' mm';
    }else if(uno.value == 'pie' && dos.value == 'millas'){
        valor.innerHTML = numero +'ft';
        resultado.innerHTML = contador_mul(numero, 5279.985709) +' mi';
    }else if(uno.value == 'yarda' && dos.value == 'yarda'){
        valor.innerHTML = numero +' km';
        resultado.innerHTML = contador_mul(numero, 1) +' yd';
    }else if(uno.value == 'yarda' && dos.value == 'kilometro'){
        valor.innerHTML = numero +' km';
        resultado.innerHTML = contador_div(numero, 1093.613298) +' yd';
    }else if(uno.value == 'yarda' && dos.value == 'metro'){
        valor.innerHTML = numero +' yd';
        resultado.innerHTML = contador_div(numero, 1.093613298) +' m';
    }else if(uno.value == 'yarda' && dos.value == 'pulgada'){
        valor.innerHTML = numero +' yd';
        resultado.innerHTML = contador_mul(numero, 36) +' in';
    }else if(uno.value == 'yarda' && dos.value == 'pie'){
        valor.innerHTML = numero +' yd';
        resultado.innerHTML = contador_mul(numero, 3) +' ft';
    }else if(uno.value == 'yarda' && dos.value == 'centimetro'){
        valor.innerHTML = numero +' yd';
        resultado.innerHTML = contador_mul(numero, 0.01093613298) +' cm';
    }else if(uno.value == 'yarda' && dos.value == 'milimetro'){
        valor.innerHTML = numero +' yd';
        resultado.innerHTML = contador_mul(numero, 0.001093613298) +' mm';
    }else if(uno.value == 'yarda' && dos.value == 'millas'){
        valor.innerHTML = numero +' yd';
        resultado.innerHTML = contador_mul(numero, 1760.00337641019) +' mi';
    }else if(uno.value == 'pulgada' && dos.value == 'pulgada'){
        valor.innerHTML = numero +' in';
        resultado.innerHTML = contador_mul(numero, 1) +' in';
    }else if(uno.value == 'pulgada' && dos.value == 'centimetro'){
        valor.innerHTML = numero +' in';
        resultado.innerHTML = contador_mul(numero, 2.54) +' cm';
    }else if(uno.value == 'pulgada' && dos.value == 'metro'){
        valor.innerHTML = numero +' in';
        resultado.innerHTML = contador_div(numero, 39.37007) +' m';
    }else if(uno.value == 'pulgada' && dos.value == 'kilometro'){
        valor.innerHTML = numero +' in';
        resultado.innerHTML = contador_div(numero, 39370.07) +' km';
    }else if(uno.value == 'pulgada' && dos.value == 'yarda'){
        valor.innerHTML = numero +' in';
        resultado.innerHTML = contador_div(numero, 36) +' yd';
    }else if(uno.value == 'pulgada' && dos.value == 'pie'){
        valor.innerHTML = numero +' in';
        resultado.innerHTML = contador_div(numero, 12) +' ft';
    }else if(uno.value == 'pulgada' && dos.value == 'milimetro'){
        valor.innerHTML = numero +' in';
        resultado.innerHTML = contador_mul(numero, 0.039370007) +' mm';
    }else if(uno.value == 'pulgada' && dos.value == 'millas'){
        valor.innerHTML = numero +' in';
        resultado.innerHTML = contador_div(numero, 63360.107504385447) +' mi';
    }else if(uno.value == 'millas' && dos.value == 'millas'){
        valor.innerHTML = numero +'mi';
        resultado.innerHTML = contador_mul(numero, 1) +'mi';
    }else if(uno.value == 'millas' && dos.value == 'kilometro'){
        valor.innerHTML = numero +'mi';
        resultado.innerHTML = contador_div(numero, 0.62137) +'km';
    }else if(uno.value == 'millas' && dos.value == 'metro'){
        valor.innerHTML = numero +' mi';
        resultado.innerHTML = contador_div(numero, 0.000621371) +' m';
    }else if(uno.value == 'millas' && dos.value == 'pie'){
        valor.innerHTML = numero +' mi';
        resultado.innerHTML = contador_div(numero, 5279.985709) +' ft';
    }else if(uno.value == 'millas' && dos.value == 'pulgada'){
        valor.innerHTML = numero +' mi';
        resultado.innerHTML = contador_mul(numero, 63360.107504385447) +' in';
    }else if(uno.value == 'millas' && dos.value == 'yarda'){
        valor.innerHTML = numero +' mi';
        resultado.innerHTML = contador_div(numero, 1760.00337641019) +' yd';
    }else if(uno.value == 'millas' && dos.value == 'centimetro'){
        valor.innerHTML = numero +' mi';
        resultado.innerHTML = contador_mul(numero, 0.00000621371) +' cm';
    }else if(uno.value == 'millas' && dos.value == 'milimetro'){
        valor.innerHTML = numero +' mi';
        resultado.innerHTML = contador_mul(numero, 1609344.497) +' mm';
    }else if(uno.value == 'centimetro' && dos.value == 'centimetro'){
        valor.innerHTML = numero +' cm';
        resultado.innerHTML = contador_mul(numero, 1) +' cm';
    }else if(uno.value == 'centimetro' && dos.value == 'kilometro'){
        valor.innerHTML = numero +' cm';
        resultado.innerHTML = contador_div(numero, 100000) +' km';
    }else if(uno.value == 'centimetro' && dos.value == 'pulgada'){
         valor.innerHTML = numero +' cm';
         resultado.innerHTML = contador_div(numero, 2.54) +' in';
     }else if(uno.value == 'centimetro' && dos.value == 'metro'){
         valor.innerHTML = numero +' cm';
         resultado.innerHTML = contador_div(numero, 100) +' m';
     }else if(uno.value == 'centimetro' && dos.value == 'millas'){
        valor.innerHTML = numero +' cm';
        resultado.innerHTML = contador_div(numero, 0.00000621371) +' mi';
    }else if(uno.value == 'centimetro' && dos.value == 'yarda'){
        valor.innerHTML = numero +' cm';
        resultado.innerHTML = contador_div(numero, 0.01093613298) +' yd';
    }else if(uno.value == 'centimetro' && dos.value == 'pie'){
        valor.innerHTML = numero +' cm';
        resultado.innerHTML = contador_mul(numero, 0.0328083) +' ft';
    }else if(uno.value == 'centimetro' && dos.value == 'milimetro'){
        valor.innerHTML = numero +' cm';
        resultado.innerHTML = contador_mul(numero, 10) +' mm';
    }else if(uno.value == 'milimetro' && dos.value == 'milimetro'){
        valor.innerHTML = numero +'mm';
        resultado.innerHTML = contador_mul(numero, 1) +'mm';
    }else if(uno.value == 'milimetro' && dos.value == 'kilometro'){
        valor.innerHTML = numero +'mm';
        resultado.innerHTML = contador_div(numero, 1000000) +'km';
    }else if(uno.value == 'milimetro' && dos.value == 'metro'){
        valor.innerHTML = numero +' mm';
        resultado.innerHTML = contador_div(numero, 1000) +' m';
    }else if(uno.value == 'milimetro' && dos.value == 'pie'){
        valor.innerHTML = numero +' mm';
        resultado.innerHTML = contador_div(numero, 0.00328083) +' ft';
    }else if(uno.value == 'milimetro' && dos.value == 'centimetro'){
        valor.innerHTML = numero +' cm';
        resultado.innerHTML = contador_div(numero, 10) +' cm';
    }else if(uno.value == 'milimetro' && dos.value == 'pulgada'){
        valor.innerHTML = numero +' mm';
        resultado.innerHTML = contador_div(numero, 0.039370007) +' in';
    }else if(uno.value == 'milimetro' && dos.value == 'yarda'){
        valor.innerHTML = numero +' mm';
        resultado.innerHTML = contador_div(numero, 0.001093613298) +' yd';
    }else if(uno.value == 'milimetro' && dos.value == 'millas'){
        valor.innerHTML = numero +' mm';
        resultado.innerHTML = contador_div(numero, 1609344.497) +' mi';
    }
    
})