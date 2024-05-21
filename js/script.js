const crearMain = (main) => {
    const main = document.getElementById('main');

    const sectionUno = document.createElement('div');
    sectionUno.className = 'seccion';
    const rutaImagenUno = 'img/mejorar-sueño.jpg';
    sectionUno.innerHTML = `
                            <div>
                                <h3>Mejora la calidad de tu sueño - Nivel: intermedio</h3>
                                <img src=${rutaImagenUno} alt="mejorar el sueño">
                                <p>Mejorar la calidad del sueño es crucial para nuestra salud física, mental y emocional. Un buen sueño promueve la salud física al reparar el cuerpo y fortalecer el sistema inmunológico, además de regular el metabolismo. A nivel mental, el sueño adecuado mejora la función cognitiva, la memoria y la concentración. También influye en nuestro estado de ánimo, reduciendo la irritabilidad y la ansiedad, y mejorando la salud mental en general. Además, el sueño adecuado facilita la recuperación muscular y del ejercicio, fortalece el sistema inmunológico y nos ayuda a mantenernos sanos y resistentes a las enfermedades.</p>
                            </div>
                            `;

    const sectionDos = document.createElement('div');
    sectionDos.className = 'seccion';
    const rutaImagenDos = 'img/experimentar-emociones.jpg';
    sectionDos.innerHTML = `
                            <div>
                                <h3>Detente a experimentar tus emociones - Nivel: elevado</h3>
                                <img src=${rutaImagenDos} alt="experimentar emociones">
                                <p>Al experimentar conscientemente nuestras emociones, podemos aprender a manejar el estrés, mejorar nuestras relaciones interpersonales y aumentar nuestra autoconciencia. A través de la práctica de la atención plena y la autoexploración emocional, podemos cultivar una mayor comprensión y aceptación de nosotros mismos, lo que nos permite vivir de manera más auténtica y satisfactoria.</p>
                            </div>
                            `;


    const sectionTres = document.createElement('div');
    sectionTres.className = 'seccion';
    const rutaImagenTres = 'img/sanar.jpg';
    sectionTres.innerHTML = `
                            <div>
                                <h3>Emprende el viaje de sanar - Nivel: elevado</h3>
                                <img src=${rutaImagenTres} alt="sanar">
                                <p>Al embarcarnos en este viaje de sanación, podemos sanar nuestras relaciones, fortalecer nuestra autoestima y liberarnos de patrones negativos que nos limitan. La sanación espiritual nos conecta con nuestro ser más profundo y nos ayuda a encontrar un propósito más elevado en la vida. A medida que nos sanamos emocionalmente y espiritualmente, podemos experimentar una mayor alegría, satisfacción y plenitud en todas las áreas de nuestra vida.</p>
                            </div>
                            `;


    main.append(sectionUno, sectionDos, sectionTres, sectionCuatro)
}

const crearMainNoExpertos = (mainNoExpertos) => {
    const mainNoExpertos = document.getElementById('main-no-expertos');

    const textoNoExpertos = document.createElement('h2');
    textoNoExpertos.innerText = 'Te recomendamos estos cursos que son para principiantes';

    const sectionInicial = document.createElement('div');
    sectionInicial.className = 'seccion';
    const rutaImagenCuatro = 'img/liberar-estres.jpg';
    sectionInicial.innerHTML = `
                            <div>
                                <h3>Libera el estrés</h3>
                                <img src=${rutaImagenCuatro} alt="libera estres">
                                <p>Es crucial liberar el estrés para mantener un equilibrio físico, mental y emocional. El estrés crónico puede tener efectos perjudiciales en nuestra salud, desde problemas físicos como dolores de cabeza y problemas digestivos, hasta consecuencias emocionales como la ansiedad y la depresión. Al liberar el estrés, podemos mejorar nuestra calidad de vida, fortalecer nuestro sistema inmunológico y promover un estado mental más positivo. Además, reduce la probabilidad de enfermedades relacionadas con el estrés, como enfermedades cardíacas y trastornos del sueño. </p>
                            </div>
                            `;

    mainNoExpertos.append(textoNoExpertos, sectionInicial)
}


alert('Bienvenido al mundo de la meditación');

let datos = [];

function ingresarDatos(user, password, experiencia) {
    const cuenta = {
        user: user, 
        password: password, 
        experiencia: experiencia,
    };
    datos.push(cuenta);
}

function iniciar() {
    const cargarPagina = confirm('¿Estás listo para crear tu cuenta y no dar vuelta atrás?');
    if(cargarPagina == true){
        let userIngresado = prompt('Defina su nombre de usuario');
        let passwordIngresado = prompt('Escriba su contraseña');
        let experienciaIngresada = confirm('¿Posees algún tipo de experiencia previa en esta práctica?');
        ingresarDatos(userIngresado, passwordIngresado, experienciaIngresada);
        mostrarDatos();

    } else {
        document.getElementById('main').classList.add('hidden');
        document.getElementById('main-no-expertos').classList.remove('hidden');
    }
}

iniciar()

function mostrarDatos() {
    for(const cuenta of datos){
        if(cuenta.experiencia == true){
            alert('Tu nombre de usuario y contraseña son: ' + cuenta.user + 'y ' + cuenta.password + ' . ¡Disfruta de la experiencia!')
        } else if(cuenta.experiencia == false){
            alert('Tu nombre de usuario y contraseña son: ' + cuenta.user + 'y ' + cuenta.password + '. Dado que posees poca experiencia, te recomendamos empezar por la sección "Meditaciones guiadas" y experimentar con aquellas que duren no más de 10 minutos por al menos una semana, esto te ayudará a crear un hábito más sólido')
        }
    }
}

