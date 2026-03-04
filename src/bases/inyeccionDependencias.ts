import type { HttpAdapter, RickapiResponse } from '../interfaces/rickapi-response.interface';
type CharacterData = {
    image: string;
    name: string;
    status: string;
    id: number;
}

export class Usuario {
    //METODOS
    constructor(
        public id: number,
        public nombre: string,
        public edad: number,
        private readonly http: HttpAdapter
    ) { }

    get imageUrl(): string {
        return `https://imagenUser.com${this.id}`;
    }

    saludar(): string {
        return (`Hola, soy ${this.nombre} con el id ${this.id}`);
    }

    async getCharacter(characterId: number): Promise<CharacterData> {
        const data = await this.http.get<RickapiResponse>(
            `https://rickandmortyapi.com/api/character/${characterId}`
        );

        const { image, name, status, id } = data;

        return { image, name, status, id };

    }
}            