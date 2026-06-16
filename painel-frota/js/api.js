import { SHEET_ID } from "./config.js";
import { parseGviz } from "./utils.js";

function buildQuery(sheet){
  switch(sheet){
    case "LANÇAMENTOS": return "select B,C,D,E,F,G,X";
    case "AGENDA DO DIA": return "select B,C,D,E,F,G,H";
    case "AGENDA SERVIÇO SOCIAL": return "select B,C,D,F,G,H";
    case "VEÍCULOS": return "select B,V,M,N";
    case "MOTORISTAS": return "select A,B,C";
    default: return "";
  }
}

export async function fetchSheet(sheet){
  const query = buildQuery(sheet);

  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq` +
    `?sheet=${encodeURIComponent(sheet)}` +
    `&tq=${encodeURIComponent(query)}` +
    `&tqx=out:json`;

  const res = await fetch(url);

  if(!res.ok){
    throw new Error(`Erro HTTP ${res.status}`);
  }

  return parseGviz(await res.text());
}
