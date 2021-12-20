import { useEffect, useState } from "react";
import { Form, Input, Table } from "reactstrap";

import { Container } from "./styles";


interface FormPotenciaGeracaoProps {
    panelName: string[];
    solarRadiationAverage: number; // average == média
    panelArea: number[];
    panelEfficiency: number[];
}

export function FormularioPotenciaDeGeracaoModulos(props: FormPotenciaGeracaoProps) {
    return (
        <Container>
            <Form>
                <Table borderless>
                    <thead>
                        <tr>
                            <th className="principal">Potência geração módulo mês</th>
                        </tr>
                    </thead>
                    <tbody>
                        <th>Modelo do painel</th>
                        <th>Irradiacao media</th>
                        <th>Area do painel (m²)</th>
                        <th>Eficiencia do painel</th>
                        <th>Potência Total Por Módulo (kWh/mês)</th>
                        <tr>
                            <td>
                                <Input id="nomePainel" placeholder="Modelo do painel" type="text" 
                                    onChange={event => {
                                        const ret = String(event.target.value)
                                        props.panelName[0] = ret
                                    }} 
                                />
                            </td>
                            <td>
                                <Input id="irradiacaoMedia" placeholder="Irradiacao media" type="number" 
                                    value={props.solarRadiationAverage.toFixed(2)}
                                />
                            </td>
                            <td>
                                <Input id="areaPainel" placeholder="Area do painel (m²)" type="number"
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        props.panelArea[0] = ret
                                    }} 
                                />
                            </td>
                            <td>
                                <Input id="eficienciaPainel" placeholder="Eficiencia do painel" type="number"
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        props.panelEfficiency[0] = ret
                                    }} 
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Form>
        </Container>
    )
}