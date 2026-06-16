import { getStatusKey } from "../utils.js";
import { STATUS } from "../config.js";

export function StatusBadge(status){

  const key = getStatusKey(status);

  if(!key) return `<span>${status || ""}</span>`;

  const config = STATUS[key];

  return `
    <span class="status-badge ${config.class}">
      ${config.icon}
    </span>
  `;
}
