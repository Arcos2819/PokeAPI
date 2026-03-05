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

// La sintaxis Promise<CharacterData> es parte del sistema de tipos genéricos en TypeScript. Cuando defines una función
// asíncrona, ésta devuelve una promesa (Promise), lo que significa que en algún momento en el futuro se resolverá (o
// rechazará) con un valor. Al usar Promise<CharacterData>, le estás diciendo a TypeScript que cuando la promesa se
// resuelva, el valor resultante será de tipo CharacterData.

// async getMoves(): Promise<CharacterData> {

//   // const moves  = 10;
//   // se destructura un objetoque se esta guardando
//   // const {data} = await axios.get('https://rickandmortyapi.com/api/character/77');
//   // console.log(data.image);

//   //vamos a destructurar la data para obtener la imagen, el name, el
//   //status y el id del endpoint
//   try {
//     //realizamos la solicitud y destructuramos 'data'

//     const datosRick = this.httpAdapter
//       ? await this.httpAdapter.get<RickapiResponse>('https://rickandmortyapi.com/api/character/77')
//       : await axios.get<RickapiResponse>('https://rickandmortyapi.com/api/character/77').then(res => res.data);

//     //Destructuramos las propiedades que nos interesan, con los valores por defecto
//     const { image = '', name = 'Desconocido', status = 'N/A', id } = datosRick;
//     console.log(image);

//     //Retornamos solo los datos relevantes
//     return { image, name, status, id };
//   } catch (error) {
//     console.error('Error al obtener los datos:', error);
//     throw error;
//   }
// }

// //Crear un objeto tipo Usuario
// export const userClass = new Usuario(1, "Diego", 34);
// // console.log();
// userClass.getMoves()

import axios from "axios";
import type { PokeapiResponse } from "../bases/PokenAPI";

export interface PokemonSimplified {
  id: number;
  nombre: string;
  imagen: string;
}
export class PokemonService {
  // Método para obtener un solo Pokémon
  async getPokemonData(idOrName: string | number): Promise<PokemonSimplified> {
    try {
      const { data } = await axios.get<PokeapiResponse>(
        `https://pokeapi.co/api/v2/pokemon/${idOrName}`,
      );

      // Aplicando destructuring a la respuesta
      const { id, name, sprites } = data as any; // sprites sirve para optimizar rendimiento

      return {
        id,
        nombre: name,
        imagen: sprites.front_default,
      };
    } catch (error) {
      console.error("Error al obtener Pokémon:", error);
      throw error;
    }
  }
  // Lógica para obtener el listado inicial
  async getPokemonList(limit: number = 20): Promise<PokemonSimplified[]> {
    const pokemonPromises = [];
    for (let i = 1; i <= limit; i++) {
      pokemonPromises.push(this.getPokemonData(i));
    }
    return Promise.all(pokemonPromises);
  }
}
export const pokemonService = new PokemonService();




