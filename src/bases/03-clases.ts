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

export class Usuarios {
  //METODOS
  constructor(
    public readonly nombre: string,
    public readonly edad: number,
    public readonly telefono?: string
  ) {}
  saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años. y mi numero de telefono es ${this.telefono}`;
  }
}

//Crear un objeto tipo Usuario
export const userClass = new Usuarios("Diego", 30, 314 6798463);
