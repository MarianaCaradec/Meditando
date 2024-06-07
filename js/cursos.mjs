let main = document.getElementById("main");

const fetchCursos = async () => {
    try {
        const cursos = await fetch("./js/cursos.json")
    const data = await cursos.json()
    .then(data => {
        crearMain(data)
    })
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

export const crearMain = (cursos) => {
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
        comprar.parentElement.appendChild(mensaje);
        }
    });

    main.append(section);
    });
}
