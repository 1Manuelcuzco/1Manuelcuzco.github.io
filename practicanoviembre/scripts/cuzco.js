function pageLoad() {
    let fecha = document.getElementById("fecha");
    fecha.onclick = feClick;
    let mensaje = document.getElementsByClassName("vineta");
    mensaje.click() = menClick;

}
let flag = 1;

function menClick() {
    let m = document.getElementsByClassName("mensaje");
    if (flag) {
        document.getElementsByClassName("mensaje").innerHTML = "Lectura completada";
        flag = 0;
    } else {
        document.getElementsByClassName("mensaje").innerHTML = m;
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