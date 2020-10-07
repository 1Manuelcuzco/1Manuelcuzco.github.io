function pageLoad() {
    let fecha = document.getElementById("fecha");
    fecha.onclick = feClick;
    let carr = document.getElementById("mosimg");
    carr.onclick = caClick;
    let estado = document.getElementById("vin");
    estado.onclick = esClick;
    let estado1 = document.getElementById("vin1");
    estado1.onclick = esClick1;
    let estado2 = document.getElementById("vin2");
    estado2.onclick = esClick2;
    let estado3 = document.getElementById("vin3");
    estado3.onclick = esClick3;

}
let flag = 1;

function esClick() {
    if (flag) {
        let a = "Lectura completada";
        document.getElementById("mensaje").innerHTML = a;
        flag = 0;
    } else {
        document.getElementById("mensaje").innerHTML = "Lectura de 3 min";
        flag = 1;
    }
}

function esClick1() {
    if (flag) {
        let a = "Lectura completada";
        document.getElementById("mensaje1").innerHTML = a;
        flag = 0;
    } else {
        document.getElementById("mensaje1").innerHTML = "Lectura de 2 min";
        flag = 1;
    }
}

function esClick2() {
    if (flag) {
        let a = "Lectura completada";
        document.getElementById("mensaje2").innerHTML = a;
        flag = 0;
    } else {
        document.getElementById("mensaje2").innerHTML = "Lectura de 3 min";
        flag = 1;
    }
}

function esClick3() {
    if (flag) {
        let a = "Lectura completada";
        document.getElementById("mensaje3").innerHTML = a;
        flag = 0;
    } else {
        document.getElementById("mensaje3").innerHTML = "Lectura de 5 min";
        flag = 1;
    }
}

function caClick() {
    if (flag) {
        document.getElementById("carrusel").style.display = 'block';
        document.getElementById("ocul").style.display = 'none';
        flag = 0;

    } else {
        document.getElementById("carrusel").style.display = 'none';
        document.getElementById("ocul").style.display = 'block';
        flag = 1;
    }
}

function feClick() {
    let fechaactual = new Date();
    if (flag) {
        document.getElementById("horaactual").innerHTML = fechaactual;
        flag = 0;
    } else {
        document.getElementById("horaactual").innerHTML = "";
        flag = 1;
    }
}

window.onload = pageLoad;