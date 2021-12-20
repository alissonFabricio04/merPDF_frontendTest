import { mediaConsumo } from "./mediaConsumo"
import { mediaIrradiacaoSolar } from "./mediaIrradiacao"
import { potenciaDeGeracaoDeModulos } from "./potenciaModulos"
import { totalDePaineis } from "./totalDePaineis"

export function gerarPdf() {
    // execução dos calculos
    mediaConsumo()
    mediaIrradiacaoSolar()
    potenciaDeGeracaoDeModulos()
    totalDePaineis()

    console.log("FUIIIII EXECUTADOOOOO")
}
