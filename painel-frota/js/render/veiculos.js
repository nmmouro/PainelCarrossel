function renderVeiculos(rows, painelRows){

  return `
  <table>
    <thead>
      <tr>
        <th>Placa</th>
        <th>Status</th>
        <th>Km</th>
        <th>Combustível</th>
      </tr>
    </thead>
    <tbody>
      ${rows.map(r=>{
        const v = (r.c||[]).map(getCell);

        return `
        <tr>
          <td><strong>${v[0]}</strong></td>
          <td>${getDisponibilidade(v[0],painelRows,"veiculo")}</td>
          <td>${v[2]} km</td>
          <td>⛽ ${v[3]}</td>
        </tr>`;
      }).join("")}
    </tbody>
  </table>`;
}
