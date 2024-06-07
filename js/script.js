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

let main = document.getElementById("main");
let mainNoExpertos = document.getElementById("main-no-expertos");

const fetchCursos = async () => {
    try {
        const cursos = await fetch("./js/cursos.json")
        const data = await cursos.json()
        crearMain(data)
    } catch (err) {
        const error = Swal.fire({
            icon: "error",
            position: "top-end",
            toast: true,
            title: "Los cursos no se han cargado correctamente",
            showConfirmButton: false,
            timer: 2000
        });
    }
}

fetchCursos()

const crearMain = (cursos) => {
    if (cursos && cursos.length > 0) {
    cursos.forEach(curso => {
        const section = document.createElement("div");
        section.className = "curso";
        section.innerHTML = `
                                <h3>${curso.titulo}</h3>
                                <img class= '${curso.imgClass}'src= ${curso.img} alt= ${curso.imgAlt}>
                                <p class='${curso.descripcionClass}'>${curso.descripcion}</p>
                                <p class= '${curso.precioClass}'>${curso.precio}</p>
                                <button id= 'boton-compra'>Comprar</button>
                                `;

    const comprar = section.querySelector("#boton-compra");
    comprar.addEventListener("click", (curso) => {
        if (!curso.comprado) {
        curso.comprado = true;
        comprar.disabled = true;
        const mensaje = Swal.fire({
            icon: "success",
            position: "top-end",
            toast: true,
            title: "El curso ha sido adquirido",
            showConfirmButton: false,
            timer: 2000
        });
        main.append(mensaje)
        }
    });
    main.append(section);
    });
    }
}

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
