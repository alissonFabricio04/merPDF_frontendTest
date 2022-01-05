import { useEffect, useState } from "react"
import axios from "axios"

import { GlobalStyle } from "./GlobalStyles"
import { Container } from "./styles"

const logo = require('../../assets/logoT.png');

type Result = {
    Name: string,
    Email: string,
    IdPainelName: string,
    MConsumo: number,
    MIrradiacao: number,
    PModulos: number,         
    AreaTInstalacao: number,     
    TModulosAplicados: number,    
    PSistema: number,   
    PInversor: number,            
    PTMaxSistemaKWP: number
}

export function NovoComponente() {
    let [result, setResult] = useState<Result[]>([])

    useEffect(() => {
        axios.get("http://localhost:3333/api/last/data")
            .then(response => {
                setResult(result = response.data)
            })
            .catch(response => console.log(response))
    }, [])

    return (
        <Container>
            {result.map(valor => {
                return (
                    <>
                        <img className="img-logo" src={String(logo)} alt='logo' />

                        <h1 key="Name">
                            Nome: {valor.Name}
                        </h1>

                        <p key={valor.Email}>
                            E-mail: {valor.Email}
                        </p>

                        <p key={valor.IdPainelName}>
                            Modelo do Painel é: {valor.IdPainelName}
                        </p>

                        <p key={valor.MConsumo}>
                            A média de consumo anual é {valor.MConsumo}
                        </p>

                        <p key={valor.MIrradiacao}>
                            A média de irradiação é {valor.MIrradiacao}
                        </p>

                        <p key={valor.PModulos}>
                            Potência Total Por Módulo (kWh/mês): {valor.PModulos}
                        </p>

                        <p key={valor.AreaTInstalacao}>
                            Área Total de Instalação (m²): {valor.AreaTInstalacao}
                        </p>

                        <p key={valor.TModulosAplicados}>
                            Quantidade de Módulos Aplicado: {valor.TModulosAplicados}
                        </p>

                        <p key={valor.PSistema}>
                            Potência Sistema (kWp): {valor.PSistema}
                        </p>

                        <p key={valor.PInversor}>
                            Potência Inversor (kW): {valor.PInversor}
                        </p>

                        <p key={valor.PTMaxSistemaKWP}>
                            Potência Total Máxima de instalação (kWp): {valor.PTMaxSistemaKWP}
                        </p>
                        <p key={valor.IdPainelName}>
                            Modelo do Painel é: {valor.IdPainelName}
                        </p>

                        <p key={valor.MConsumo}>
                            A média de consumo anual é {valor.MConsumo}
                        </p>

                        <p key={valor.MIrradiacao}>
                            A média de irradiação é {valor.MIrradiacao}
                        </p>

                        <p key={valor.PModulos}>
                            Potência Total Por Módulo (kWh/mês): {valor.PModulos}
                        </p>

                        <p key={valor.AreaTInstalacao}>
                            Área Total de Instalação (m²): {valor.AreaTInstalacao}
                        </p>

                        <p key={valor.TModulosAplicados}>
                            Quantidade de Módulos Aplicado: {valor.TModulosAplicados}
                        </p>

                        <p key={valor.PSistema}>
                            Potência Sistema (kWp): {valor.PSistema}
                        </p>

                        <p key={valor.PInversor}>
                            Potência Inversor (kW): {valor.PInversor}
                        </p>

                        <p key={valor.PTMaxSistemaKWP}>
                            Potência Total Máxima de instalação (kWp): {valor.PTMaxSistemaKWP}
                        </p>
                        <p key={valor.IdPainelName}>
                            Modelo do Painel é: {valor.IdPainelName}
                        </p>

                        <p key={valor.MConsumo}>
                            A média de consumo anual é {valor.MConsumo}
                        </p>

                        <p key={valor.MIrradiacao}>
                            A média de irradiação é {valor.MIrradiacao}
                        </p>

                        <p key={valor.PModulos}>
                            Potência Total Por Módulo (kWh/mês): {valor.PModulos}
                        </p>

                        <p key={valor.AreaTInstalacao}>
                            Área Total de Instalação (m²): {valor.AreaTInstalacao}
                        </p>

                        <p key={valor.TModulosAplicados}>
                            Quantidade de Módulos Aplicado: {valor.TModulosAplicados}
                        </p>

                        <p key={valor.PSistema}>
                            Potência Sistema (kWp): {valor.PSistema}
                        </p>

                        <p key={valor.PInversor}>
                            Potência Inversor (kW): {valor.PInversor}
                        </p>

                        <p key={valor.PTMaxSistemaKWP}>
                            Potência Total Máxima de instalação (kWp): {valor.PTMaxSistemaKWP}
                        </p>
                        <p key={valor.IdPainelName}>
                            Modelo do Painel é: {valor.IdPainelName}
                        </p>

                        <p key={valor.MConsumo}>
                            A média de consumo anual é {valor.MConsumo}
                        </p>

                        <p key={valor.MIrradiacao}>
                            A média de irradiação é {valor.MIrradiacao}
                        </p>

                        <p key={valor.PModulos}>
                            Potência Total Por Módulo (kWh/mês): {valor.PModulos}
                        </p>

                        <p key={valor.AreaTInstalacao}>
                            Área Total de Instalação (m²): {valor.AreaTInstalacao}
                        </p>

                        <p key={valor.TModulosAplicados}>
                            Quantidade de Módulos Aplicado: {valor.TModulosAplicados}
                        </p>

                        <p key={valor.PSistema}>
                            Potência Sistema (kWp): {valor.PSistema}
                        </p>

                        <p className="last" key={valor.PInversor}>
                            Potência Inversor (kW): {valor.PInversor}
                        </p>
                    </>
                );
            })}
        <GlobalStyle />
        </Container>
    )
}