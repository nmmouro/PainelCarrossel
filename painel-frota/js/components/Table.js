import { getCell } from "../utils.js";
import { getStatusKey } from "../utils.js";
import { STATUS } from "../config.js";
import { StatusBadge } from "./StatusBadge.js";

export function Table({
  headers = [],
  rows = [],
  showStatus = true
}){

  return `
    <table>

      <thead>
        <tr>
          ${headers.map(h => `<th>${h}</th>`).join("")}
        </tr>
      </thead>

      <tbody>

        ${rows.map(row => {

          const values = (row.c || []).map(getCell);

          const status = values.at(-1) || "";
          const key = getStatusKey(status);

          return `
            <tr class="${STATUS[key]?.class || ""}">

              ${values.map((v,i)=>{

                const isLast = i === values.length - 1;

                return `
                  <td class="${isLast ? 'status-icon' : ''}">
                    ${
                      isLast && showStatus
                        ? StatusBadge(v)
                        : v
                    }
                  </td>
                `;
              }).join("")}

            </tr>
          `;
        }).join("")}

      </tbody>

    </table>
  `;
}
