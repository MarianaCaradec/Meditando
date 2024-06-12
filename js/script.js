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


const main = document.getElementById("main");
const contenedorCarrito = document.getElementById('contenedor-carrito')
const mainNoExpertos = document.getElementById("main-no-expertos");
let cursos;
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const fetchCursos = async () => {
    try {
        const response = await fetch("./js/cursos.json")
        cursos = await response.json()
        crearMain(cursos)
    } catch (err) {
        Swal.fire({
            icon: "error",
            position: "top-end",
            toast: true,
            title: "Los cursos no se han cargado correctamente",
            showConfirmButton: false,
            timer: 2000
        });
    }
}

const crearMain = (cursos) => {
    cursos.forEach(curso => {
        const section = document.createElement("div");
        section.className = "curso";
        section.innerHTML = `
                                <h3>${curso.titulo}</h3>
                                <img class= '${curso.imgClass}'src= ${curso.img} alt= ${curso.imgAlt}>
                                <p class='${curso.descripcionClass}'>${curso.descripcion}</p>
                                <p class= '${curso.precioClass}'>${curso.precio}</p>
                                <button class= 'boton-agregar' data-id='${curso.id}'>Agregar al carrito</button>
                                `;

    main.append(section);
    });
}

const crearCursoCarrito = (curso) => {
        const cursoAgregado = document.createElement("div");
        cursoAgregado.className = "curso-agregado";
        cursoAgregado.id = `curso-${curso.id}`;
        cursoAgregado.innerHTML = `
                                <h3>${curso.titulo}</h3>
                                <img class= '${curso.imgClass}'src= ${curso.img} alt= ${curso.imgAlt}>
                                <p class='${curso.descripcionClass}'>${curso.descripcion}</p>
                                <p class= '${curso.precioClass}'>${curso.precio}</p>
                                `;

    contenedorCarrito.append(cursoAgregado);
}

const agregarCursoCarrito = (cursos) => {
    const botonesAgregar = document.querySelectorAll('.boton-agregar');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (event) => {
            const cursoId = event.target.getAttribute('data-id');
                const cursoSeleccionado = cursos.find(curso => curso.id === cursoId);
                if (cursoSeleccionado) {
                    event.target.disabled = true;
                    carrito.push(cursoSeleccionado);
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                    crearCursoCarrito(cursoSeleccionado)
                    
                    Swal.fire({
                        icon: "success",
                        position: "top-end",
                        toast: false,
                        title: "El curso ha sido agregado al carrito",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
        })
    })
}


// const mostrarCarrito = () => {
//     contenedorCarrito.style.display = "block";
// };

const verCarrito = () => {
    if (cursos && cursos.length > 0) {
        // mostrarCarrito()
        carrito.forEach(curso => {
            crearCursoCarrito(curso)
    })
    }
}

const principal = async () => {
    cursos = await fetchCursos()
    agregarCursoCarrito(cursos)
    // verCarrito()
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
// principal();
