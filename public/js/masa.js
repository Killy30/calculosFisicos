
//peso
const unoP = document.getElementById('select_unoP');
const dosP = document.getElementById('select_dosP');
const btnP = document.getElementById('btnP');
const numP = document.getElementById('numP');
const resultadoP = document.getElementById('resultadoP')
const valorP = document.getElementById('valorP')


//peso
btnP.addEventListener('click', ()=>{
    var numerop = numP.value; 

    if(unoP.value == 'tonelada' && dosP.value == 'kilogramo'){
        valorP.innerHTML = numerop +' ton';
        resultadoP.innerHTML = contador_mul(numerop, 1000) +' kg';
    }else if(unoP.value == 'tonelada' && dosP.value == 'gramos'){
        valorP.innerHTML = numerop +' ton';
        resultadoP.innerHTML = contador_mul(numerop, 1000000)  +' g';
    } else if(unoP.value == 'tonelada' && dosP.value == 'libra'){
        valorP.innerHTML = numerop +' ton';
        resultadoP.innerHTML = contador_mul(numerop, 2204.7) +' lb';
    }else if(unoP.value == 'tonelada' && dosP.value == 'onza'){
        valorP.innerHTML = numerop +' ton';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' oz';
    }else if(unoP.value == 'tonelada' && dosP.value == 'centigramo'){
        valorP.innerHTML = numerop +' ton';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' cg';
    }else if(unoP.value == 'tonelada' && dosP.value == 'kilo'){
        valorP.innerHTML = numerop +' ton';
        resultadoP.innerHTML = contador_div(numerop, 0.001) +' k';
    }else if(unoP.value == 'tonelada' && dosP.value == 'miligramo'){
        valorP.innerHTML = numerop +' ton';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' mg';
    }else if(unoP.value == 'tonelada' && dosP.value == 'microgramo'){
        valorP.innerHTML = numerop +' ton';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' ug';
    }else if(unoP.value == 'tonelada' && dosP.value == 'nanogramo'){
        valorP.innerHTML = numerop +' ton';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' ng';
    }else if(unoP.value == 'tonelada' && dosP.value == 'picogramo'){
        valorP.innerHTML = numerop +' ton';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' pg';
    }
    
    else if (unoP.value == 'kilogramo' && dosP.value == 'tonelada'){
        valorP.innerHTML = numerop + 'kg';
        resultadoP.innerHTML = contador_div(numerop, 1000) + 'ton';
    } else if (unoP.value == 'kilogramo' && dosP.value == 'gramos'){
        valorP.innerHTML = numerop + 'kg';
        resultadoP.innerHTML = contador_mul(numerop, 1000) + 'g';
    }else if (unoP.value == 'kilogramo' && dosP.value == 'libra'){
        valorP.innerHTML = numerop + 'kg';
        resultadoP.innerHTML = contador_div(numerop, 0.4536) + 'lb';
    }else if(unoP.value == 'kilogramo' && dosP.value == 'onza'){
        valorP.innerHTML = numerop +' kg';
        resultadoP.innerHTML = contador_mul(numerop, 28350) +' oz';
    }else if(unoP.value == 'kilogramo' && dosP.value == 'centigramo'){
        valorP.innerHTML = numerop +' kg';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' ceng';
    }else if(unoP.value == 'kilogramo' && dosP.value == 'kilo'){
        valorP.innerHTML = numerop +' kg';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' k';
    }else if(unoP.value == 'kilogramo' && dosP.value == 'miligramo'){
        valorP.innerHTML = numerop +' kg';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' mg';
    }else if(unoP.value == 'kilogramo' && dosP.value == 'microgramo'){
        valorP.innerHTML = numerop +' kg';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' ug';
    }else if(unoP.value == 'kilogramo' && dosP.value == 'nanogramo'){
        valorP.innerHTML = numerop +' kg';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' ng';
    }else if(unoP.value == 'kilogramo' && dosP.value == 'picogramo'){
        valorP.innerHTML = numerop +' kg';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' pg';
    }
    
    else if(unoP.value == 'gramos' && dosP.value == 'tonelada'){
        valorP.innerHTML = numerop +'g';
        resultadoP.innerHTML = contador_div(numerop, 1000000) +'ton';
    }else if(unoP.value == 'gramos' && dosP.value == 'kilogramo'){
        valorP.innerHTML = numerop +'g';
        resultadoP.innerHTML = contador_div(numerop, 1000) +'kg';
    }else if(unoP.value == 'gramos' && dosP.value == 'libra'){
        valorP.innerHTML = numerop +'g';
        resultadoP.innerHTML = contador_div(numerop, 453.6) +'lb';
    }else if(unoP.value == 'gramos' && dosP.value == 'centigramo'){
        valorP.innerHTML = numerop +'g';
        resultadoP.innerHTML = contador_mul(numerop, 100) +'cg';
    }else if(unoP.value == 'gramos' && dosP.value == 'onza'){
        valorP.innerHTML = numerop +'g';
        resultadoP.innerHTML = contador_mul(numerop, 0.035) +'oz';
    }else if(unoP.value == 'gramos' && dosP.value == 'kilo'){
        valorP.innerHTML = numerop +' g';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' k';
    }else if(unoP.value == 'gramos' && dosP.value == 'miligramo'){
        valorP.innerHTML = numerop +' g';
        resultadoP.innerHTML = contador_div(numerop, 0.001) +' mg';
    }else if(unoP.value == 'gramos' && dosP.value == 'microgramo'){
        valorP.innerHTML = numerop +' g';
        resultadoP.innerHTML = contador_div(numerop, 0.000001) +' ug';
    }else if(unoP.value == 'gramos' && dosP.value == 'nanogramo'){
        valorP.innerHTML = numerop +' g';
        resultadoP.innerHTML = contador_mul(numerop, 0.000000001) +' ng';
    }else if(unoP.value == 'gramos' && dosP.value == 'picogramo'){
        valorP.innerHTML = numerop +' g';
        resultadoP.innerHTML = contador_div(numerop, 0.000000000001) +' pg';
    }
    
    else if(unoP.value == 'centigramo' && dosP.value == 'tonelada'){
        valorP.innerHTML = numerop +' cg';
        resultadoP.innerHTML = contador_div(numerop, 100000000) +' ton';
    }else if(unoP.value == 'centigramo' && dosP.value == 'kilogramo'){
        valorP.innerHTML = numerop +' cg';
        resultadoP.innerHTML = contador_div(numerop, 100000) +' kg';
    }else if(unoP.value == 'centigramo' && dosP.value == 'libra'){
        valorP.innerHTML = numerop +' cg';
        resultadoP.innerHTML = contador_mul(numerop, 45360) +' lb';
    }else if(unoP.value == 'centigramo' && dosP.value == 'gramos'){
        valorP.innerHTML = numerop +' cg';
        resultadoP.innerHTML = contador_div(numerop, 100) +' g';
    }else if(unoP.value == 'centigramo' && dosP.value == 'onza'){
        valorP.innerHTML = numerop +' cg';
        resultadoP.innerHTML = contador_mul(numerop, 0.035) +' oz';
    }else if(unoP.value == 'centigramo' && dosP.value == 'kilo'){
        valorP.innerHTML = numerop +' cg';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' k';
    }else if(unoP.value == 'centigramo' && dosP.value == 'miligramo'){
        valorP.innerHTML = numerop +' cg';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' mg';
    }else if(unoP.value == 'centigramo' && dosP.value == 'microgramo'){
        valorP.innerHTML = numerop +' cg';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' ug';
    }else if(unoP.value == 'centigramo' && dosP.value == 'nanogramo'){
        valorP.innerHTML = numerop +' cg';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' ng';
    }else if(unoP.value == 'centigramo' && dosP.value == 'picogramo'){
        valorP.innerHTML = numerop +' cg';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' pg';
    }
    
    else if(unoP.value == 'libra' && dosP.value == 'tonelada'){
        valorP.innerHTML = numerop +' lb';
        resultadoP.innerHTML = contador_mul(numerop, 2204.7) +' ton';
    }else if(unoP.value == 'libra' && dosP.value == 'kilogramo'){
        valorP.innerHTML = numerop +' lb';
        resultadoP.innerHTML = contador_mul(numerop, 0.4536) +' kg';
    }else if(unoP.value == 'libra' && dosP.value == 'gramos'){
        valorP.innerHTML = numerop +' lb';
        resultadoP.innerHTML = contador_mul(numerop, 453.6) +' g';
    }else if(unoP.value == 'libra' && dosP.value == 'centigramo'){
        valorP.innerHTML = numerop +' lb';
        resultadoP.innerHTML = contador_mul(numerop, 45360) +' cg';
    }else if(unoP.value == 'libra' && dosP.value == 'onza'){
        valorP.innerHTML = numerop +' lb';
        resultadoP.innerHTML = contador_mul(numerop, 16) +' oz';
    }else if(unoP.value == 'libra' && dosP.value == 'kilo'){
        valorP.innerHTML = numerop +' lb';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' k';
    }else if(unoP.value == 'libra' && dosP.value == 'miligramo'){
        valorP.innerHTML = numerop +' lb';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' mg';
    }else if(unoP.value == 'libra' && dosP.value == 'microgramo'){
        valorP.innerHTML = numerop +' lb';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' ug';
    }else if(unoP.value == 'libra' && dosP.value == 'nanogramo'){
        valorP.innerHTML = numerop +' lb';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' ng';
    }else if(unoP.value == 'libra' && dosP.value == 'picogramo'){
        valorP.innerHTML = numerop +' lb';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' pg';
    }
    
    else if(unoP.value == 'onza' && dosP.value == 'tonelada'){
        valorP.innerHTML = numerop +' oz';
        resultadoP.innerHTML = contador_mul(numerop, 28350000) +' ton';
    }else if(unoP.value == 'onza' && dosP.value == 'kilogramo'){
        valorP.innerHTML = numerop +' oz';
        resultadoP.innerHTML = contador_mul(numerop, 28350) +' kg';
    }else if(unoP.value == 'onza' && dosP.value == 'gramos'){
        valorP.innerHTML = numerop +' oz';
        resultadoP.innerHTML = contador_mul(numerop, 28.35) +' g';
    }else if(unoP.value == 'onza' && dosP.value == 'centigramo'){
        valorP.innerHTML = numerop +' oz';
        resultadoP.innerHTML = contador_mul(numerop, 2835) +' cg';
    }else if(unoP.value == 'onza' && dosP.value == 'libra'){
        valorP.innerHTML = numerop +' oz';
        resultadoP.innerHTML = contador_div(numerop, 16) +' lb';
    }else if(unoP.value == 'onza' && dosP.value == 'onza'){
        valorP.innerHTML = numerop +' oz';
        resultadoP.innerHTML = contador_mul(numerop, 1) +' oz';
    }else if(unoP.value == 'onza' && dosP.value == 'kilo'){
        valorP.innerHTML = numerop +' oz';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' k';
    }else if(unoP.value == 'onza' && dosP.value == 'miligramo'){
        valorP.innerHTML = numerop +' oz';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' mg';
    }else if(unoP.value == 'onza' && dosP.value == 'microgramo'){
        valorP.innerHTML = numerop +' oz';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' ug';
    }else if(unoP.value == 'onza' && dosP.value == 'nanogramo'){
        valorP.innerHTML = numerop +' oz';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' ng';
    }else if(unoP.value == 'onza' && dosP.value == 'picogramo'){
        valorP.innerHTML = numerop +' oz';
        resultadoP.innerHTML = contador_mul(numerop, 0) +' pg';
    }
})