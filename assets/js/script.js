// Clase Propietario
class Propietario {
    #nombre;
    #direccion;
    #telefono;

    constructor(nombre, direccion, telefono) {
        this.#nombre = nombre;
        this.#direccion = direccion;
        this.#telefono = telefono;
    }

    get nombre() {
        return this.#nombre;
    }

    get direccion() {
        return this.#direccion;
    }

    get telefono() {
        return this.#telefono;
    }

    // Método para obtener todos los datos del propietario
    datosPropietario() {
        return {
            nombre: this.#nombre,
            direccion: this.#direccion,
            telefono: this.#telefono
        };
    }
}

// Clase Animal
class Animal extends Propietario {
    #tipo;

    constructor(nombre, direccion, telefono) {
        super(nombre, direccion, telefono);
        this.#tipo = [];
    }

    set tipos(tipo) {
        this.#tipo.push(tipo);
    }

    get tipos() {
        return this.#tipo;
    }

    // Método para obtener el tipo de animal
    get tipoAnimal() {
        return `El tipo de animal es un: ${this.#tipo}`;
    }
}

// Clase Mascota
class Mascota extends Animal {
    #nombre;
    #enfermedad;

    constructor(nombrePropietario, direccionPropietario, telefonoPropietario, nombreMascota, enfermedad) {
        super(nombrePropietario, direccionPropietario, telefonoPropietario);
        this.#nombre = nombreMascota;
        this.#enfermedad = enfermedad;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(value) {
        this.#nombre = value;
    }

    get enfermedad() {
        return this.#enfermedad;
    }

    set enfermedad(value) {
        this.#enfermedad = value;
    }
}

// Función para manejar el envío del formulario
const agregarMascota = (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const propietarioInput = document.getElementById('propietario').value;
    const telefonoInput = document.getElementById('telefono').value;
    const direccionInput = document.getElementById('direccion').value;
    const nombreMascotaInput = document.getElementById('nombreMascota').value;
    const tipoInput = document.getElementById('tipo').value;
    const enfermedadInput = document.getElementById('enfermedad').value;

    // Crear una nueva instancia de Mascota
    const mascota = new Mascota(propietarioInput, direccionInput, telefonoInput, nombreMascotaInput, enfermedadInput);
    mascota.tipos = tipoInput;

    // Obtener los datos del propietario y la mascota
    const propietarioData = mascota.datosPropietario();
    const mascotaData = {
        tipo: mascota.tipoAnimal,
        nombre: mascota.nombre,
        enfermedad: mascota.enfermedad
    };

    // Mostrar los datos en la lista
    const resultadoList = document.querySelector('#resultado ul');
    const listItem = document.createElement('li');

    // Construir el mensaje concatenando los datos del propietario y la mascota
    listItem.innerHTML = `
        <li>Nombre del dueño: ${propietarioData.nombre}, Domicilio: ${propietarioData.direccion}, Teléfono: ${propietarioData.telefono}</li>
        <li>Tipo de animal: ${mascotaData.tipo}, Nombre de la mascota: ${mascotaData.nombre}, Enfermedad: ${mascotaData.enfermedad}</li>
    <br>`;

    // Aplicar estilo para aumentar el tamaño de la letra
    listItem.style.fontSize = '25px';
    resultadoList.appendChild(listItem);

    // Limpiar el formulario
    event.target.reset();

    // Mostrar alerta
    alert("Datos agregados...");
}

// Agregar el evento de submit al formulario
document.querySelector('form').addEventListener('submit', agregarMascota);