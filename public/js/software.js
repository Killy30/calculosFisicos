const c_distancia = document.getElementById('c_distancia');
const c_velocidad = document.getElementById('c_velocidad');
const c_tiempo = document.getElementById('c_tiempo');

const longitud = document.getElementById('longitud');
const tiempo = document.getElementById('tiempo');
const peso = document.getElementById('peso');
const escala = document.getElementById('escala');

var div_longitud = document.querySelector('.div_longitud');
var div_peso = document.querySelector('.div_peso');
var div_tiempo = document.querySelector('.div_tiempo');

var div_distancia = document.querySelector('.div_distancia');
var div_velocidad = document.querySelector('.div_velocidad');
var div_tiempo_c = document.querySelector('.div_tiempo_c');

var bienvenida = document.querySelector('.bienvenida');

var menu = document.querySelector('.box_line')
var panel = document.querySelector('.panel')

menu.addEventListener('click', () =>{
    if (panel.style.display == 'block') {
        panel.style.display='none';
    }else {
        panel.style.display='block';
    }
})

c_distancia.addEventListener('click', (e) =>{
    e.preventDefault();
   
    if (div_tiempo.style.display == 'block') {
        div_tiempo.style.display='none';
    }else if (div_peso.style.display == 'block') {
        div_peso.style.display='none';
    }else if (div_longitud.style.display == 'block') {
        div_longitud.style.display='none';
    }else if (div_velocidad.style.display == 'block') {
        div_velocidad.style.display='none';
    }else if (div_tiempo_c.style.display == 'block') {
        div_tiempo_c.style.display='none';
    }else if (bienvenida.style.display == 'block') {
        bienvenida.style.display='none';
    }

    if (div_distancia.style.display == 'none') {
        div_distancia.style.display='block';
    }else if (div_distancia.style.display == 'block') {
        div_distancia.style.display='none';
    }
})

c_velocidad.addEventListener('click', (e) =>{
    e.preventDefault();

    if (div_tiempo.style.display == 'block') {
        div_tiempo.style.display='none';
    }else if (div_peso.style.display == 'block') {
        div_peso.style.display='none';
    }else if (div_longitud.style.display == 'block') {
        div_longitud.style.display='none';
    }else if (div_distancia.style.display == 'block') {
        div_distancia.style.display='none';
    }else if (div_tiempo_c.style.display == 'block') {
        div_tiempo_c.style.display='none';
    }else if (bienvenida.style.display == 'block') {
        bienvenida.style.display='none';
    }

    if (div_velocidad.style.display == 'none') {
        div_velocidad.style.display='block';
    }else if (div_velocidad.style.display == 'block') {
        div_velocidad.style.display='none';
    }
})

c_tiempo.addEventListener('click', (e) =>{
    e.preventDefault();

    if (div_tiempo.style.display == 'block') {
        div_tiempo.style.display='none';
    }else if (div_peso.style.display == 'block') {
        div_peso.style.display='none';
    }else if (div_longitud.style.display == 'block') {
        div_longitud.style.display='none';
    }else if (div_distancia.style.display == 'block') {
        div_distancia.style.display='none';
    }else if (div_velocidad.style.display == 'block') {
        div_velocidad.style.display='none';
    }else if (bienvenida.style.display == 'block') {
        bienvenida.style.display='none';
    }

    if (div_tiempo_c.style.display == 'none') {
        div_tiempo_c.style.display='block';
    }else if (div_tiempo_c.style.display == 'block') {
        div_tiempo_c.style.display='none';
    }
})

longitud.addEventListener('click', (e) =>{
    e.preventDefault();

    if (div_tiempo.style.display == 'block') {
        div_tiempo.style.display='none';
    }else if (div_peso.style.display == 'block') {
        div_peso.style.display='none';
    }else if (div_tiempo_c.style.display == 'block') {
        div_tiempo_c.style.display='none';
    }else if (div_distancia.style.display == 'block') {
        div_distancia.style.display='none';
    }else if (div_velocidad.style.display == 'block') {
        div_velocidad.style.display='none';
    }else if (bienvenida.style.display == 'block') {
        bienvenida.style.display='none';
    }

    if (div_longitud.style.display == 'none') {
        div_longitud.style.display='block';
    }else if (div_longitud.style.display == 'block') {
        div_longitud.style.display='none';
    }
})

tiempo.addEventListener('click', (e) =>{
    e.preventDefault();

    if (div_longitud.style.display == 'block') {
        div_longitud.style.display='none';
    }else if (div_peso.style.display == 'block') {
        div_peso.style.display='none';
    }else if (div_tiempo_c.style.display == 'block') {
        div_tiempo_c.style.display='none';
    }else if (div_distancia.style.display == 'block') {
        div_distancia.style.display='none';
    }else if (div_velocidad.style.display == 'block') {
        div_velocidad.style.display='none';
    }else if (bienvenida.style.display == 'block') {
        bienvenida.style.display='none';
    }

    if (div_tiempo.style.display == 'none') {
        div_tiempo.style.display='block';
    }else if (div_tiempo.style.display == 'block') {
        div_tiempo.style.display='none';
    }
})

peso.addEventListener('click', (e) =>{
    e.preventDefault();

    if (div_longitud.style.display == 'block') {
        div_longitud.style.display='none';
    }else if (div_tiempo.style.display == 'block') {
        div_tiempo.style.display='none';
    }else if (div_tiempo_c.style.display == 'block') {
        div_tiempo_c.style.display='none';
    }else if (div_distancia.style.display == 'block') {
        div_distancia.style.display='none';
    }else if (div_velocidad.style.display == 'block') {
        div_velocidad.style.display='none';
    }else if (bienvenida.style.display == 'block') {
        bienvenida.style.display='none';
    }
    
    if (div_peso.style.display == 'none') {
        div_peso.style.display='block';
    }else if (div_peso.style.display == 'block') {
        div_peso.style.display='none';
    }
})
