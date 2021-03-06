const formularioReserva = document.getElementById('formularioReserva-js');
const entradas = document.querySelectorAll('#formularioReserva-js input');
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,10}$/,
    numero: /^\d{1,2}$/, /// 7 a 10 numeros.
}
const validarformularioReserva = (e) => {
    
	switch (e.target.name) {
		case "nombreCliente":
			if(expresiones.nombre.test(e.target.value)){
                document.getElementById('nombre').classList.remove('formularioReserva__grupo-incorrecto');
                document.getElementById('nombre').classList.remove('formularioReserva-error-activado');
                return true;
            }else{
                if(e.target.value=="")
                document.getElementById('nombre').classList.add('formularioReserva__grupo-incorrecto');
                document.getElementById('nombre').classList.add('formularioReserva-error-activado');
                return false;
            }
		break;
		case "apellidoCliente":
			if(expresiones.nombre.test(e.target.value)){
                document.getElementById('apellido').classList.remove('formularioReserva__grupo-incorrecto');
                document.getElementById('apellido').classList.remove('formularioReserva-error-activado');
                return true;
            }else{
                document.getElementById('apellido').classList.add('formularioReserva__grupo-incorrecto');
                document.getElementById('apellido').classList.add('formularioReserva-error-activado');
                return false;
            }
		break;
		case "emailCliente":
			if(expresiones.correo.test(e.target.value)){
                document.getElementById('email').classList.remove('formularioReserva__grupo-incorrecto');
                document.getElementById('email').classList.remove('formularioReserva-error-activado');
                return true;
            }else{
                document.getElementById('email').classList.add('formularioReserva__grupo-incorrecto');
                document.getElementById('email').classList.add('formularioReserva-error-activado');
                return false;
            }
		break;
		case "telefonoCliente":
			if(expresiones.telefono.test(e.target.value)){
                document.getElementById('telefono').classList.remove('formularioReserva__grupo-incorrecto');
                document.getElementById('telefono').classList.remove('formularioReserva-error-activado');
                return true;
            }else{
                document.getElementById('telefono').classList.add('formularioReserva__grupo-incorrecto');
                document.getElementById('telefono').classList.add('formularioReserva-error-activado');
                return false;
            }
		break;
		case "mesaCliente":
			if(expresiones.numero.test(e.target.value) && e.target.value < 11){
                document.getElementById('mesaReserva').classList.remove('formularioReserva__grupo-incorrecto');
                document.getElementById('mesaReserva').classList.remove('formularioReserva-error-activado');
                return true;
            }else{
                document.getElementById('mesaReserva').classList.add('formularioReserva__grupo-incorrecto');
                document.getElementById('mesaReserva').classList.add('formularioReserva-error-activado')
                return false;
            }
		break;
		case "reservaCliente":
            var dato = e.target.value;
            var fecha = new Date(dato);
            var fechaAct= new Date();
            if(fechaAct.getTime() <= fecha.getTime()){
                document.getElementById('diaReserva').classList.remove('formularioReserva__grupo-incorrecto');
                document.getElementById('diaReserva').classList.remove('formularioReserva-error-activado');
                return true;
                
            }else{
                console.log('dentro else');
                document.getElementById('diaReserva').classList.add('formularioReserva__grupo-incorrecto');
                document.getElementById('diaReserva').classList.add('formularioReserva-error-activado')
                return false;
            }
		break;
        case "reservaHoraCliente":
            var hora=document.querySelector("input[name=reservaHoraCliente]").value;
            console.log("la hora es: ");
            console.log(hora);
            if(hora >  '10:00' && hora < '20:30'){
                console.log("es mayor",hora);
                document.getElementById('horaReserva').classList.remove('formularioReserva__grupo-incorrecto');
                document.getElementById('horaReserva').classList.remove('formularioReserva-error-activado');
                return true;
            }else{
                document.getElementById('horaReserva').classList.add('formularioReserva__grupo-incorrecto');
                document.getElementById('horaReserva').classList.add('formularioReserva-error-activado');
                return false;
            }
            break;


	}
}

entradas.forEach((input) => {
	input.addEventListener('keyup', validarformularioReserva);
	input.addEventListener('blur', validarformularioReserva);
});

formularioReserva.addEventListener('submit', (e) => {
    if(!document.querySelector('input[name="lugar"]:checked')) {
        alert('Error, debe escoger un establecimiento para realizar la reserva.');
        }
	    e.preventDefault();}
)