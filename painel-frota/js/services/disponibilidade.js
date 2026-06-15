export function getDisponibilidade(
    nome,
    painelRows,
    tipo
){

    const procurado =
    String(nome)
    .trim()
    .toUpperCase();

    for(const row of painelRows){

        const valores =
        (row.c || []).map(
            c => c?.f ?? c?.v ?? ""
        );

        const veiculo =
        String(valores[3] || "")
        .trim()
        .toUpperCase();

        const motorista =
        String(valores[2] || "")
        .trim()
        .toUpperCase();

        const status =
        String(valores[6] || "")
        .toUpperCase();

        const encontrado =
        tipo === "veiculo"
        ? veiculo === procurado
        : motorista === procurado;

        if(!encontrado) continue;

        if(status.includes("VIAGEM"))
            return "🟣 VIAGEM";

        if(status.includes("MANUTEN"))
            return "🔵 MANUTENÇÃO";

        return "🔴 OCUPADO";
    }

    return "🟢 LIVRE";
}
