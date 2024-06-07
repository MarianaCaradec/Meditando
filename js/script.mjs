const darBienvenida = () => {
    Swal.fire({
    title: "¡Bienvenidx!",
    imageUrl: "./img/logo.png",
    imageWidth: 80,
    imageHeight: 70,
    imageAlt: "Logo",
    text: "¿Listx para conocer tu paz interior?",
    width: "60%",
    background: "#B865B8",
    backdrop: "#B865B8",
    allowOutsideClick: true,
    allowEnterKey: true,
    });
};
darBienvenida();

// let main = document.getElementById("main");
let mainNoExpertos = document.getElementById("main-no-expertos");


import { crearMain } from './cursos.mjs';

const crearMainNoExpertos = () => {
    const textoNoExpertos = document.createElement("h2");
    textoNoExpertos.innerText =
    "Te recomendamos esta playlist para principiantes";

    const section = document.createElement("div");
    section.className = "seccion";
    const link = document.createElement("a");
    link.href =
    "https://www.youtube.com/playlist?list=PL63NAFEk4KQz3w6oiYH7kypSed4ZDn2Mr";
    link.className = "link-curso";
    section.innerHTML = `
                                <h3>Meditaciones guiadas - Nivel: principiante</h3>
                                <a href='${link.href}' class= "link-curso" target="_blank">Visita la playlist (¡es gratuita!)</a>
                            `;

    mainNoExpertos.append(textoNoExpertos, section);
};

let datos = JSON.parse(localStorage.getItem("datos")) || [];

function ingresarDatos(user, password, experiencia) {
    const cuenta = {
    user: user,
    password: password,
    experiencia: experiencia,
    };
    datos.push(cuenta);
    localStorage.setItem("datos", JSON.stringify(datos));
}

function iniciar() {
    main.style.display = "none";
    mainNoExpertos.style.display = "none";
    const form = document.getElementById("form");
    form.style.display = "block";

    form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userIngresado = document.getElementById("user");
    const passwordIngresado = document.getElementById("password");
    const experienciaIngresada = document.getElementById("experiencia");
    ingresarDatos(
        userIngresado.value,
        passwordIngresado.value,
        experienciaIngresada.checked
    );

    if (experienciaIngresada.checked) {
        main.style.display = "block";
        mainNoExpertos.style.display = "none";
        crearMain();
    } else if (!experienciaIngresada.checked) {
        main.style.display = "none";
        mainNoExpertos.style.display = "block";
        crearMainNoExpertos();
    }

    const submit = document.getElementById("submit");
    submit.disabled = true;
    });
}

iniciar();
