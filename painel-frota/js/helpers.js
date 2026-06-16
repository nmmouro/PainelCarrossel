const parseGviz = txt =>
  JSON.parse(txt.substring(txt.indexOf("{"), txt.lastIndexOf("}") + 1));

const getCell = c => c?.f ?? c?.v ?? "";

function formatarData(valor){
  if(!valor) return "";
  if(valor instanceof Date) return valor.toLocaleDateString("pt-BR");

  const match = String(valor).match(/\d{1,2}\/\d{1,2}\/\d{4}/);
  return match ? match[0] : valor;
}
