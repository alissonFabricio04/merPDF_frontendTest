import { VarIrradiacaoMedia, VarAreaPainel, VarEficienciaPainel } from "../App"

export function potenciaDeGeracaoDeModulos() {
    const potenciaTotalModulo = (VarIrradiacaoMedia * VarAreaPainel[0] * VarEficienciaPainel[0]) * 30

    return Number(potenciaTotalModulo.toFixed(2))
}