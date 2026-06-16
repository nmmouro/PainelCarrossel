import { TABS } from "./config.js";
import { fetchSheet } from "./api.js";
import { renderTable } from "./render.js";
import { renderVeiculos } from "./modules/veiculos.js";

const app = document.getElementById("app");

async function loadAll(){

  const results = await Promise.all(
    TABS.map(t => fetchSheet(t.sheet))
  );

  app.innerHTML = "";

  const painelRows =
    results[2].table.rows || [];

  // VEÍCULOS
  const veiculosRows =
    results[0].table.rows || [];

  app.innerHTML += `
    <section class="card">
      <h2>VEÍCULOS</h2>
      ${renderVeiculos(veiculosRows, painelRows)}
    </section>
  `;

  // OUTRAS TABELAS
  TABS.forEach((tab,i) => {

    if(tab.id==="veiculos") return;

    const rows = results[i].table.rows || [];

    app.innerHTML += `
      <section class="card">
        <h2>${tab.title}</h2>
        ${renderTable(tab.headers || [], rows)}
      </section>
    `;
  });
}

loadAll();
setInterval(loadAll,30000);
