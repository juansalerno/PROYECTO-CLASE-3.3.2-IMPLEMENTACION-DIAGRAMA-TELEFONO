import Camara from './camara';
import Telefono from './telefono';

export default class TelefonoConCamara extends Telefono {
    private camara: Camara;
    private fotosActuales: number;

    public constructor(camara) {
        super();
        this.camara = camara;
        this.fotosActuales = 0;
    }

    public sacarFoto(): void {
        console.log(this.camara.sacarFoto());
        this.fotosActuales += 1;
    }

    public eliminarFoto(): void {
        this.fotosActuales -= 1;
        console.log('Foto Eliminada');
    }

    public getFotosActuales(): number {
        console.log('El numero de fotos actuales es: '+ this.fotosActuales);
        return this.fotosActuales;
    }

    public imprimirEstadoGlobal(): void {
        console.log(this);
        
    }
}

