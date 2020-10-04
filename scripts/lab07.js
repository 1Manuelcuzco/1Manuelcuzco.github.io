function pageLoad() {
    let extraer = document.getElementById("extraer");
    extraer.onclick = exClick;
    let colorear = document.getElementById("colorear");
    colorear.onclick = colorClick;
}
let flag = 1;

function colorClick() {
    let botoncolor = document.getElementsByClassName("cambiocolor");
    let botoncolor2 = document.getElementsByClassName("cambiocolor2")
    let i;

    if (flag) {
        for (i = 0; i < botoncolor.length; i++) {
            document.getElementById("colorear").style.backgroundColor = "blue";
            botoncolor[i].style.backgroundColor = "#6E2C00";
            for (j = 0; j < botoncolor2.length; j++) {
                botoncolor2[j].style.backgroundColor = "blue";
            }
        }
        flag = 0;
    } else {
        for (i = 0; i < botoncolor.length; i++) {
            document.getElementById("colorear").style.backgroundColor = "#6E2C00";
            botoncolor[i].style.backgroundColor = "blue";
            for (j = 0; j < botoncolor2.length; j++) {
                botoncolor2[j].style.backgroundColor = "#6E2C00";
            }
        }
        flag = 1;
    }

}

function exClick() {

    let exnombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fechanac").value;
    let fechain = new Date(fecha);
    let fechaactual = new Date();
    let edad = fechaactual.getFullYear() - fechain.getFullYear();
    let mes = fechain.getMonth();
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let a = "";
    if (!isNaN(mes) && mes >= 1 && mes <= 12) {
        a = meses[mes];
    }

    let apellido1 = exnombre.split(" ");
    let obtenerpri = "";
    let obtenerseg = "";
    let obtenernom = "";
    let obtenernom2 = "";
    if (apellido1.length == 3) {
        for (let i = 0; i < apellido1.length; i++) {
            obtenerpri = apellido1[0].slice();
            obtenerseg = apellido1[1].slice();
            obtenernom = apellido1[2].slice();

        }
    } else {
        for (let i = 0; i < apellido1.length; i++) {
            obtenerpri = apellido1[0].slice();
            obtenerseg = apellido1[1].slice();
            obtenernom = apellido1[2].slice();
            obtenernom2 = apellido1[3].slice();

        }
    }
    document.getElementById("ape1").innerHTML = obtenerpri;
    document.getElementById("ape2").innerHTML = obtenerseg;
    document.getElementById("nom").innerHTML = obtenernom + " " + obtenernom2;
    document.getElementById("longitud").innerHTML = obtenerpri.length + obtenerseg.length;
    document.getElementById("edad").innerHTML = edad + " años";
    document.getElementById("mes").innerHTML = a;
}
window.onload = pageLoad;