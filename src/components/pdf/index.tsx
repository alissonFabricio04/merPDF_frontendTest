import { mediaConsumo } from "../../services/mediaConsumo"
import { mediaIrradiacaoSolar } from "../../services/mediaIrradiacao"
import { potenciaDeGeracaoDeModulos } from "../../services/potenciaModulos"
import { totalDePaineis } from "../../services/totalDePaineis"


import { Container } from "./styles"

export function NovoComponente() {
    const consumo = mediaConsumo()
    const irradiacao = mediaIrradiacaoSolar()
    const potencia = potenciaDeGeracaoDeModulos()
    const totalpaineis = totalDePaineis()

    return (
        <Container>
            <h1>Dados</h1>
            <p>{consumo}, {irradiacao}, {potencia}</p>
            <h2>{totalpaineis}</h2>
        </Container>
    )
}