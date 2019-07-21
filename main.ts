import Telefono from './telefono';
import Camara from './camara';
import TelefonoConCamara from './telefonoConCamara';

let miCamara = new Camara();
let miTelefonoConCamara = new TelefonoConCamara(miCamara);

// prueba de metodos:

miTelefonoConCamara.imprimirEstadoGlobal();
miTelefonoConCamara.prenderApagarTelefono();
miTelefonoConCamara.sacarFoto();
miTelefonoConCamara.sacarFoto()
miTelefonoConCamara.hacerLLamada();
miTelefonoConCamara.hacerLLamada();
miTelefonoConCamara.mandarMensaje('hola como estas', 2494526574);
miTelefonoConCamara.prenderApagarLinterna();
miTelefonoConCamara.cargarBateria();
miTelefonoConCamara.usarBateria();
miTelefonoConCamara.getEstadoBateria();
miTelefonoConCamara.prenderApagarLinterna();
miTelefonoConCamara.eliminarFoto();
miTelefonoConCamara.getFotosActuales();
miTelefonoConCamara.getLlamadasRealizadas();
miTelefonoConCamara.getMensajesRealizados();

miTelefonoConCamara.imprimirEstadoGlobal();


