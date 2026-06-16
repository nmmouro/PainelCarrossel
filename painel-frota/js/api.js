async function fetchSheet(sheet){

  let query = "";

  if(sheet === "LANÇAMENTOS") query = "select B,C,D,E,F,G,X";
  if(sheet === "AGENDA DO DIA") query = "select B,C,D,E,F,G,H";
  if(sheet === "AGENDA SERVIÇO SOCIAL") query = "select B,C,D,F,G,H";
  if(sheet === "VEÍCULOS") query = "select B,V,M,N";
  if(sheet === "MOTORISTAS") query = "select A,B,C";

  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq` +
    `?sheet=${encodeURIComponent(sheet)}` +
    `&tq=${encodeURIComponent(query)}` +
    `&tqx=out:json`;

  const res = await fetch(url);
  return parseGviz(await res.text());
}
