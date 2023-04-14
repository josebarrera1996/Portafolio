let menuVisible = false;
// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        // Habilidades técnicas
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add('typescript');
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("basededatos");
        habilidades[4].classList.add("nodejs");
        habilidades[5].classList.add("reactjs");
        // Habilidades soft
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("didacta");
    }
}

// Manejo del formulario de contacto
// Seleccionando los elementos
const $form = document.querySelector('#form');

// Añadiendo un event listener al realizar un 'submit'
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {

    // Evitar que la página se recargue
    event.preventDefault();

    // Leyendo y enviando archivos al servidor
    const form = new FormData(this);

    // Probando que estamos obteniendo los valores en los campos input
    console.log(form.get('full-name')); // Nombre de la persona que nos quiere contactar
    console.log(form.get('email')); // Email de la persona que nos quiere contactar
    console.log(form.get('message')); // Mensaje de la persona

    // Preparando la respuesta
    const response = await fetch(this.action, {

        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });

    // Si todo ha salido bien, mostrar alerta satisfactoria :)
    if (response.ok) {
        this.reset(); // Reseteará los valores de los campos input del formulario
        // alert('Gracias por contactarme, te escribiré pronto :)')
        Swal.fire(
            'Mensaje enviado!',
            'A la brevedad me estaré contactando con vos.',
            'success'
        )
    }
}

function fireSweetAlert() {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    )
}


// detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
} 