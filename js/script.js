let main = document.getElementById('main');
let mainNoExpertos = document.getElementById('main-no-expertos');

const crearMain = () => {
    const sectionInicial = document.createElement('div');
    sectionInicial.className = 'seccion';
    const img = document.createElement('img');
    img.src = 'img/liberar-estres.jpg';
    img.className = 'img-curso';
    sectionInicial.innerHTML = `
                            <div>
                                <h3>Libera el estrés - Nivel inicial</h3>
                                <img src=${img.src} class= "img-curso" alt="libera estres">
                                <p>Es crucial liberar el estrés para mantener un equilibrio físico, mental y emocional. El estrés crónico puede tener efectos perjudiciales en nuestra salud, desde problemas físicos como dolores de cabeza y problemas digestivos, hasta consecuencias emocionales como la ansiedad y la depresión. Al liberar el estrés, podemos mejorar nuestra calidad de vida, fortalecer nuestro sistema inmunológico y promover un estado mental más positivo. Además, reduce la probabilidad de enfermedades relacionadas con el estrés, como enfermedades cardíacas y trastornos del sueño. </p>
                            </div>
                            `;

    const sectionUno = document.createElement('div');
    sectionUno.className = 'seccion';
    const imgUno = document.createElement('img');
    imgUno.src = 'img/mejorar-sueño.jpg';
    imgUno.className = 'img-curso';
    sectionUno.innerHTML = `
                            <div>
                                <h3>Mejora la calidad de tu sueño - Nivel: intermedio</h3>
                                <img src=${imgUno.src} class= "img-curso" alt="mejorar el sueño">
                                <p>Mejorar la calidad del sueño es crucial para nuestra salud física, mental y emocional. Un buen sueño promueve la salud física al reparar el cuerpo y fortalecer el sistema inmunológico, además de regular el metabolismo. A nivel mental, el sueño adecuado mejora la función cognitiva, la memoria y la concentración. También influye en nuestro estado de ánimo, reduciendo la irritabilidad y la ansiedad, y mejorando la salud mental en general. Además, el sueño adecuado facilita la recuperación muscular y del ejercicio, fortalece el sistema inmunológico y nos ayuda a mantenernos sanos y resistentes a las enfermedades.</p>
                            </div>
                            `;

    const sectionDos = document.createElement('div');
    sectionDos.className = 'seccion';
    const imgDos = document.createElement('img');
    imgDos.src = 'img/experimentar-emociones.jpg';
    imgDos.className = 'img-curso';
    sectionDos.innerHTML = `
                            <div>
                                <h3>Detente a experimentar tus emociones - Nivel: elevado</h3>
                                <img src=${imgDos.src} class= "img-curso" alt="experimentar emociones">
                                <p>Al experimentar conscientemente nuestras emociones, podemos aprender a manejar el estrés, mejorar nuestras relaciones interpersonales y aumentar nuestra autoconciencia. A través de la práctica de la atención plena y la autoexploración emocional, podemos cultivar una mayor comprensión y aceptación de nosotros mismos, lo que nos permite vivir de manera más auténtica y satisfactoria.</p>
                            </div>
                            `;


    const sectionTres = document.createElement('div');
    sectionTres.className = 'seccion';
    const imgTres = document.createElement('img');
    imgTres.src = 'img/sanar.jpg';
    imgTres.className = 'img-curso';
    sectionTres.innerHTML = `
                            <div>
                                <h3>Emprende el viaje de sanar - Nivel: elevado</h3>
                                <img src=${imgTres.src} class= "img-curso" alt="sanar">
                                <p>Al embarcarnos en este viaje de sanación, podemos sanar nuestras relaciones, fortalecer nuestra autoestima y liberarnos de patrones negativos que nos limitan. La sanación espiritual nos conecta con nuestro ser más profundo y nos ayuda a encontrar un propósito más elevado en la vida. A medida que nos sanamos emocionalmente y espiritualmente, podemos experimentar una mayor alegría, satisfacción y plenitud en todas las áreas de nuestra vida.</p>
                            </div>
                            `;


    main.append(sectionInicial, sectionUno, sectionDos, sectionTres)
}

const crearMainNoExpertos = () => {
    const textoNoExpertos = document.createElement('h2');
    textoNoExpertos.innerText = 'Te recomendamos esta playlist para principiantes';

    const section = document.createElement('div');
    section.className = 'seccion';
    const link = document.createElement('a')
    link.href = 'https://www.youtube.com/playlist?list=PL63NAFEk4KQz3w6oiYH7kypSed4ZDn2Mr';
    link.className = 'link-curso';
    section.innerHTML = `
                            <div class= "seccion">
                                <h3>Meditaciones guiadas - Nivel: principiante</h3>
                                <a class= "link-curso">Visita la playlist (¡es gratuita!): ${link.src}</a>
                            </div>
                            `;

    mainNoExpertos.append(textoNoExpertos, section)
}

crearMain()
crearMainNoExpertos()


let datos = JSON.parse(localStorage.getItem('datos')) || [];

function ingresarDatos(user, password, experiencia) {
    const cuenta = {
        user: user, 
        password: password, 
        experiencia: experiencia,
    };
    datos.push(cuenta);
    localStorage.setItem('datos', JSON.stringify(datos))
}

function iniciar() {
    main.style.display ='none';
    mainNoExpertos.style.display= 'none';
    const form = document.getElementById('form');
    form.style.display = 'block';

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const userIngresado = document.getElementById('user');
        const passwordIngresado = document.getElementById('password');
        const experienciaIngresada = document.getElementById('experiencia');
        ingresarDatos(userIngresado.value, passwordIngresado.value, experienciaIngresada.checked);
        // mostrarDatos();

        if(experienciaIngresada.checked){
            main.style.display = 'block';
            mainNoExpertos.style.display = 'none';
        } else if(!experienciaIngresada.checked) {
            main.style.display = 'none';
            mainNoExpertos.style.display = 'block';
        }
    })

    form.reset();
}

iniciar()

// function mostrarDatos() {
//     for(const cuenta of datos){
//         if(cuenta.experiencia.checked){
//             alert('Tu nombre de usuario y contraseña son: ' + cuenta.user + 'y ' + cuenta.password + ' . ¡Disfruta de la experiencia!')
//         } else if(!cuenta.experiencia.checked){
//             alert('Tu nombre de usuario y contraseña son: ' + cuenta.user + 'y ' + cuenta.password + '. Dado que posees poca experiencia, te recomendamos empezar por la sección "Meditaciones guiadas" y experimentar con aquellas que duren no más de 10 minutos por al menos una semana, esto te ayudará a crear un hábito más sólido')
//         }
//     }
// }

// function precios(precio){
//     let precio = document.getElementById('precio');

//     if(precio === sectionUno){
//         precios(parseInt('$7000'))
//     } else if(precio === sectionDos){
//         precios(parseInt('$12000'))
//     } else if(precio === sectionTres){
//         precios(parseInt('$10000'))
//     }  else if(precio === sectionInicial){
//         precios(parseInt('$5000'))
//     }
// }
// precios()