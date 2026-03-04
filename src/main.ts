import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { users } from "./bases/01-intro";
import { userClass } from "./bases/03-clases.ts";

async function loadData() {
  const dataRM = await userClass.getMoves();
  // const urlimage = await userClass.getMoves();


  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
     <h2>${users[1].nombre}</h2>
      <h2>${userClass.nombre} : ${userClass.edad}</h2>
      <h2>${userClass.imageUrl}</h2>
      
      
    <h1> Objeto usando Rikc y Morty <h1>   
   
    <p> Este es el capitulo ${dataRM.id} y ese capitulo se llama <b> ${dataRM.name} </b> </p>
     <h2>${userClass.getMoves()}</h2>
      <img src="${dataRM.image}" alt="Imagen del usuario" />
      

      
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
   
  </div>`;
}
loadData();

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
