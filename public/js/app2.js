//calcular
const calcular_distancia = document.getElementById('calcular_distancia');
const calcular_velocidad = document.getElementById('calcular_velocidad');
const calcular_tiempo = document.getElementById('calcular_tiempo');

calcular_distancia.addEventListener('click', ()=>{
    const dis_velocidad = document.getElementById('dis_velocidad').value;
    const dis_tiempo = document.getElementById('dis_tiempo').value;

    const dis_select_uno = document.getElementById('dis_select_uno').value;
    const dis_select_dos = document.getElementById('dis_select_dos').value;
    const resu = document.getElementById('res');

    var resultado = dis_velocidad * dis_tiempo;

    if (dis_select_uno == 'km/h' && dis_select_dos == 'h') {
        
        resu.innerHTML = 'Distancia = '+ resultado +'km'
    }else if (dis_select_uno == 'm/s' && dis_select_dos == 's') {
        
        resu.innerHTML = 'Distancia = '+resultado+'m'
    }else if (dis_select_uno == 'km/h' && dis_select_dos == 'min') {
        
        var min = dis_tiempo / 60;
        var res = dis_velocidad * min;
        
        resu.innerHTML = 'Distancia = '+res+'km';
    }
})

calcular_velocidad.addEventListener('click', ()=>{
    const vel_distancia = document.getElementById('vel_distancia').value;
    const vel_tiempo = document.getElementById('vel_tiempo').value;

    const vel_select_uno = document.getElementById('vel_select_uno').value;
    const vel_select_dos = document.getElementById('vel_select_dos').value;
    const resu = document.getElementById('resv');

    var resultado = vel_distancia / vel_tiempo;

    if (vel_select_uno == 'm' && vel_select_dos == 's') {
        resu.innerHTML = 'Velocidad = '+resultado +'m/s'
    }else if (vel_select_uno == 'km' && vel_select_dos == 'h') {
        resu.innerHTML = 'Velocidad = '+resultado + 'km/h'
    }else if (vel_select_uno == 'm' && vel_select_dos == 'min') {
        resu.innerHTML = 'Velocidad = '+resultado + 'm/min'
    }else if (vel_select_uno == 'km' && vel_select_dos == 'min') {
        var un = vel_tiempo * 60;
        console.log(un);
        
        var res = un / vel_distancia;
        resu.innerHTML = 'Velocidad = '+res + 'km/s'
    }
})

calcular_tiempo.addEventListener('click', ()=>{
    const tiem_velocidad = document.getElementById('tiem_velocidad').value;
    const tiem_distancia = document.getElementById('tiem_distancia').value;

    const tiem_select_uno = document.getElementById('tiem_select_uno').value;
    const tiem_select_dos = document.getElementById('tiem_select_dos').value;
    const resu = document.getElementById('rest');

    var resultado = tiem_distancia / tiem_velocidad;

    if (tiem_select_uno == 'km' && tiem_select_dos == 'km/h') {
        
        
        var r = resultado.toString()
        var g = r.split('.',2)
        console.log(g);
        var h = parseInt(g[0])
        var min = parseInt(g[1]);
        var cero = '0.';
        var u = cero.concat(min);
        console.log(u);
        var b = u * 60;
        console.log(b);
        
        if (b === NaN) {
            return resu.innerHTML = 'Tiempo = '+ h + 'h ';
        }else{
            resu.innerHTML = 'Tiempo = '+ h + 'h '+b+'min';
        }
    }else if (tiem_select_uno == 'm' && tiem_select_dos == 'm/s') {
        resu.innerHTML = 'Tiempo = '+ resultado + 's'
    }
})