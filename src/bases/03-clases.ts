// export class Usuario {
//   //   //PROPIEDADES
//   nombre: string;
//   edad: number;

//   //METODOS
//   constructor(nombre: string, edad: number) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }

//   saludar(): void {
//     console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
//   }
// }

// //Crearun objeto tipo Usuario
// export const userClass = new Usuario("Emiliano", 18);
// userClass.saludar();

// // $this hace referencia a la instancia de la clase, es decir, al objeto que se está creando. En el constructor,
// // se asignan los valores de los parámetros a las propiedades de la clase utilizando this.nombre, this.edad y this.telefono.

// export class Usuarios {
//   constructor(public nombre: string, public edad: number) { }

//   saludar(): string {
//     return `Hola, soy ${this.nombre} `;
//   }
// }
// //Crear un objeto tipo Usuario
// export const userClass = new Usuarios("Diego", 30);
import axios from 'axios';
export class Usuario {
  //METODOS
  constructor(
    public id: number,
    public nombre: string,
    public edad: number
  ) { }

  get imageUrl(): string {
    return `https://imagenUser.com${this.id}`;
  }

  saludar(): string {
    return (`Hola, soy ${this.nombre} conn el id ${this.id}`);
  }

  async getMoves() {
    // const moves  = 10;
    // se destructura un objetoque se esta guardando
    // const {data} = await axios.get('https://rickandmortyapi.com/api/character/77');
    // console.log(data.image);

    //vamos a destructurar la data para obtener la imagen, el name, el 
    //status y el id del endpoint
    try {
      //realizamos la solicitud y destructuramos 'data'
      const { data } = await axios.get('https://rickandmortyapi.com/api/character/77');


      //Destructuramos las propiedades que nos interesan, con los valores por defecto
      const { image = '', name = 'Desconocido', status = 'N/A', id } = data;
      console.log(image);

      //Retornamos solo los datos relevantes
      return { image, name, status, id };
    }catch(error) {
      console.error('Error al obtener los datos:', error);
      throw error;
    }
  }
}
//Crear un objeto tipo Usuario
export const userClass = new Usuario(1, "Diego", 34);
// console.log();
userClass.getMoves()


