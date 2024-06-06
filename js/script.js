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

const cursos = [
    {
    titulo: "Libera el estrés - Nivel inicial",
    img: "img/liberar-estres.jpg",
    imgClass: "img-curso",
    imgAlt: "libera estres",
    descripcion:
    "Es crucial liberar el estrés para mantener un equilibrio físico, mental y emocional. El estrés crónico puede tener efectos perjudiciales en nuestra salud, desde problemas físicos como dolores de cabeza y problemas digestivos, hasta consecuencias emocionales como la ansiedad y la depresión. Al liberar el estrés, podemos mejorar nuestra calidad de vida, fortalecer nuestro sistema inmunológico y promover un estado mental más positivo. Además, reduce la probabilidad de enfermedades relacionadas con el estrés, como enfermedades cardíacas y trastornos del sueño.",
    descripcionClass: "descripcion-curso",
    precio: "Precio: $5000",
    precioClass: "precio-curso",
    comprado: false,
    },
    {
    titulo: "Mejora la calidad de tu sueño - Nivel: intermedio",
    img: "img/mejorar-sueño.jpg",
    imgClass: "img-curso",
    imgAlt: "mejorar el sueño",
    descripcion:
    "Mejorar la calidad del sueño es crucial para nuestra salud física, mental y emocional. Un buen sueño promueve la salud física al reparar el cuerpo y fortalecer el sistema inmunológico, además de regular el metabolismo. A nivel mental, el sueño adecuado mejora la función cognitiva, la memoria y la concentración. También influye en nuestro estado de ánimo, reduciendo la irritabilidad y la ansiedad, y mejorando la salud mental en general. Además, el sueño adecuado facilita la recuperación muscular y del ejercicio, fortalece el sistema inmunológico y nos ayuda a mantenernos sanos y resistentes a las enfermedades.",
    descripcionClass: "descripcion-curso",
    precio: "Precio: $7000",
    precioClass: "precio-curso",
    comprado: false,
    },
    {
    titulo: "Detente a experimentar tus emociones - Nivel: elevado",
    img: "img/experimentar-emociones.jpg",
    imgClass: "img-curso",
    imgAlt: "experimentar emociones",
    descripcion:
    "Al experimentar conscientemente nuestras emociones, podemos aprender a manejar el estrés, mejorar nuestras relaciones interpersonales y aumentar nuestra autoconciencia. A través de la práctica de la atención plena y la autoexploración emocional, podemos cultivar una mayor comprensión y aceptación de nosotros mismos, lo que nos permite vivir de manera más auténtica y satisfactoria.",
    descripcionClass: "descripcion-curso",
    precio: "Precio: $10000",
    precioClass: "precio-curso",
    comprado: false,
    },
    {
    titulo: "Emprende el viaje de sanar - Nivel: elevado",
    img: "img/sanar.jpg",
    imgClass: "img-curso",
    imgAlt: "sanar",
    descripcion:
    "Al embarcarnos en este viaje de sanación, podemos sanar nuestras relaciones, fortalecer nuestra autoestima y liberarnos de patrones negativos que nos limitan. La sanación espiritual nos conecta con nuestro ser más profundo y nos ayuda a encontrar un propósito más elevado en la vida. A medida que nos sanamos emocionalmente y espiritualmente, podemos experimentar una mayor alegría, satisfacción y plenitud en todas las áreas de nuestra vida.",
    descripcionClass: "descripcion-curso",
    precio: "Precio: $12000",
    precioClass: "precio-curso",
    comprado: false,
    },
];

const crearMain = () => {
    cursos.forEach((curso) => {
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
            toast: false,
            title: "El curso ha sido adquirido",
            showConfirmButton: false,
            timer: 2000
        });
        comprar.parentElement.appendChild(mensaje);
        }
    });

    main.append(section);
    });
};

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
