import { getCell, getStatusKey } from "./utils.js";
import { STATUS } from "./config.js";

export function renderTable(headers, rows){
  return `
  <table>
    <thead>
      <tr>${headers.map(h=>`<th>${h}</th>`).join("")}</tr>
    </thead>
    <tbody>
      ${rows.map(r=>{
        const values = (r.c||[]).map(getCell);
        const status = values.at(-1);
        const key = getStatusKey(status);

        return `
          <tr class="${STATUS[key]?.class || ""}">
          ${values.map((v,i)=>`
            <td>${i===values.length-1 ? STATUS[key]?.icon || "" : v}</td>
          `).join("")}
          </tr>
        `;
      }).join("")}
    </tbody>
  </table>
  `;
}
