// let user = "";
// let password = {
//     string: "",
//     number: 0
// };

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