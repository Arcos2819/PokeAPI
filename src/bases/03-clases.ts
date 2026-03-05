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

export interface PokemonCardData {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
}

// Mapeo de descripciones de pokémon en español
const descripcionesPokemon: { [key: string]: string } = {
  bulbasaur: "Pokémon de tipo Planta/Veneno. Tiene un bulbo en su espalda que le permite realizar ataques de plantas.",
  ivysaur: "Evolución de Bulbizarre. El bulbo crece y se abre gradualmente conforme el pokémon se desarrolla.",
  venusaur: "Forma final de Bulbizarre. Su flor es capaz de captar la energía del sol para potenciar sus ataques.",
  charmander: "Pokémon de tipo Fuego. Vive en montañas volcánicas y su cola refleja su nivel de vida.",
  charmeleon: "Evolución de Charmander. Se vuelve más agresivo y territorial al evolucionar.",
  charizard: "Forma final de Charmander. Puede volar y su aliento es una llamarada de fuego.",
  squirtle: "Pokémon de tipo Agua. Tiene un caparazón que usa para protegerse de los ataques.",
  wartortle: "Evolución de Squirtle. Desarrolla orejas peludas blancas y se vuelve más fuerte.",
  blastoise: "Forma final de Squirtle. Tiene cañones de agua en su caparazón para atacar.",
  caterpie: "Pokémon de tipo Bicho. Pequeño y frágil, se alimenta de hojas de plantas.",
  metapod: "Evolución de Caterpie. Se enduerce formando un capullo protecter.",
  butterfree: "Forma final de Caterpie. Un pokémon mariposa capaz de volar y atacar con polvo.",
  weedle: "Pokémon de tipo Bicho/Veneno. Pequeño pero peligroso por su veneno.",
  kakuna: "Pokémon de tipo Bicho/Veneno. Se encuentra en estado de transformación.",
  beedrill: "Pokémon de tipo Bicho/Veneno. Usa sus aguijones para atacar a sus enemigos.",
  pidgey: "Pokémon de tipo Normal/Volador. Común en prados y bosques, muy dócil.",
  pidgeotto: "Evolución de Pidgey. Es más fuerte y agresivo en combate.",
  pidgeot: "Forma final de Pidgey. Excelente volador con alas poderosas.",
  rattata: "Pokémon de tipo Normal. Pequeño y rápido, vive en las alcantarillas.",
  raticate: "Evolución de Rattata. Más grande y agresivo, sus dientes son muy afilados.",
  spearow: "Pokémon de tipo Normal/Volador. Pequeño pájaro con un pico muy afilado y puntiagudo.",
  fearow: "Evolución de Spearow. Un águila feroz con vuelo rápido y atacante.",
  ekans: "Pokémon de tipo Veneno. Una serpiente que ataca con su veneno y enrollándose.",
  arbok: "Evolución de Ekans. Serpiente venenosa más grande y peligrosa.",
  pikachu: "Pokémon de tipo Eléctrico. Famoso por su capacidad de generar electricidad de alto voltaje.",
  raichu: "Evolución de Pikachu. Es más grande y genera aún más electricidad que su preevolución.",
  sandshrew: "Pokémon de tipo Tierra. Vive en desiertos excavando galerías subterráneas.",
  sandslash: "Evolución de Sandshrew. Puede enrollarse en una bola y atacar.",
  nidoran_f: "Habilidad: Poison-point. Un pokémon único y especial.",
  nidorina: "Evolución de Nidoran hembra. Más grande con púas venenosas más fuertes.",
  nidoqueen: "Forma final de Nidoran hembra. Una reina veneno de tamaño imponente.",
  nidoran_m: "Habilidad: Poison-point. Un pokémon único y especial.",
  nidorino: "Evolución de Nidoran macho. Más fuerte y con púas más grandes.",
  nidoking: "Forma final de Nidoran macho. Un rey veneno poderoso y territorial.",
  clefairy: "Pokémon de tipo Normal. Pequeño ser rosado y adorable que brilla.",
  clefable: "Evolución de Clefairy. Un hada mágica de gran poder encantador.",
  vulpix: "Pokémon de tipo Fuego. Zorro pequeño con seis colas llenas de fuego.",
  ninetales: "Evolución de Vulpix. Zorro mítico con nueve colas flamígeras.",
  jigglypuff: "Pokémon de tipo Normal. Bola rosada que canta hipnóticamente.",
  wigglytuff: "Evolución de Jigglypuff. Más grande y con voz aún más potente.",
};

export class PokemonService {
  async getPokemon(id: number): Promise<PokemonCardData> {
    // Petición modular al endpoint
    const { data } = await axios.get<PokeapiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );

    // Aplicando Destructuring (Requisito de buenas prácticas)
    const { name: nombre, id: pokemonId, sprites, abilities } = data;
    const { front_default: imagen } = sprites;
    
    // Obtener descripción personalizada o genérica
    let descripcion = descripcionesPokemon[nombre.toLowerCase()];
    if (!descripcion) {
      descripcion = `Habilidad: ${abilities[0].ability.name.charAt(0).toUpperCase() + abilities[0].ability.name.slice(1)}. Un pokémon único y especial.`;
    }

    return { id: pokemonId, nombre, imagen, descripcion };
  }
  // Lógica para obtener el listado inicial
  async getInitialList(cantidad: number = 20): Promise<PokemonCardData[]> {
    const promesas = Array.from({ length: cantidad }, (_, i) =>
      this.getPokemon(i + 1),
    );
    return Promise.all(promesas);
  }
}
export const pokemonService = new PokemonService();
