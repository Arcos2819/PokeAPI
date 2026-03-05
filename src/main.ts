import "./style.css";
import { pokemonService } from "./bases/03-clases";
import type { PokemonCardData } from "./bases/03-clases";

const app = document.querySelector<HTMLDivElement>("#app")!;

async function renderApp() {
  const pokemons = await pokemonService.getInitialList(20); // Lista inicial

  app.innerHTML = `
        <h1>Busca Tu Pokemon</h1>
        <input type="text" id="buscador" placeholder="Busca para descubrir..." autocomplete="off">
        <div id="pokemon-container" class="grid-layout">
            ${pokemons.map((p) => drawCard(p)).join("")}
        </div>
    `;

  initSearchLogic();
}

// Función de presentación pura
function drawCard({ nombre, imagen, descripcion, id }: PokemonCardData) {
  return `
        <div class="pokemon-card" data-nombre="${nombre}">
            <img src="${imagen}" alt="${nombre}">
            <div class="info">
                <p class="number">#${id}</p>
                <p class="name">${nombre.toUpperCase()}</p>
                <p class="desc">${descripcion}</p>
            </div>
        </div>
    `;
}

// Lógica del concepto "Descubierto"
function initSearchLogic() {
  const input = document.querySelector<HTMLInputElement>("#buscador")!;
  const cards = document.querySelectorAll<HTMLDivElement>(".pokemon-card");

  input.addEventListener("input", (e) => {
    const busqueda = (e.target as HTMLInputElement).value.toLowerCase();

    cards.forEach((card) => {
      const pokeNombre = card.dataset.nombre || "";
      // Si el usuario escribe el nombre, se activa el estilo "descubierto"
      if (busqueda !== "" && pokeNombre.includes(busqueda)) {
        card.classList.add("descubierto");
      } else {
        card.classList.remove("descubierto");
      }
    });
  });
}

renderApp();
