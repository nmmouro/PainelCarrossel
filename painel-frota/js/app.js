import { DataTable, initDataTable } from "./components/DataTable.js";
import { Card } from "./components/Card.js";

function renderAgenda(rows){

  const id = "agenda";

  const html = Card({
    title:"AGENDA DO DIA",
    content: DataTable({
      id,
      headers:[
        "Data","Hora","Passageiro","Setor",
        "Motivo","Itinerário","Status"
      ],
      rows
    })
  });

  setTimeout(()=> initDataTable(`dt-${id}`), 0);

  return html;
}
