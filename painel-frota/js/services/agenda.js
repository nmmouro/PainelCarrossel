import { fetchSheet } from "../api.js";
import { getCell } from "../helpers.js";
import { renderTable } from "../render/tables.js";
import { TABS } from "../config.js";

export async function loadAgenda(){

    await Promise.all([
        carregarAgendaDia(),
        carregarAgendaSocial()
    ]);
}
