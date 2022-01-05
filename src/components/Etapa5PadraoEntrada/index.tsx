import { Form, Input, Table } from "reactstrap";


import { Container } from "./styles";

interface FormTotalPaineisProps {
    voltageSupply: (valor: number) => void;
    currentBreaker: (valor: number) => void;
    powerFactor: (valor: number) => void;
    rootThree: (valor: number) => void;
}

export function FormularioPadraoEntradaPotenciaMaxima(props: FormTotalPaineisProps) {
    return (
        <Container>
            <Form>
                <Table borderless>
                    <thead>
                        <tr>
                            <th>Tensão de Fornecimento em Volts (V)</th>
                            <th>Corrente (I) do Disjuntor do Padrão</th>
                            <th>Fator de Potência</th>
                            <th>Raiz 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Input id="tensaoFornecimento" placeholder="Tensão de Fornecimento em Volts (V)" 
                                    type="number" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        
                                    }} 
                                />
                            </td>
                            <td>
                                <Input id="correnteDisjuntor" placeholder="Corrente (I) do Disjuntor do Padrão" 
                                    type="number" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        
                                    }} 
                                />
                            </td>
                            <td>
                                <Input id="fatorPotencia" placeholder="Fator de Potência" type="number" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        
                                    }} 
                                />
                            </td>
                            <td>
                                <Input id="raiz3" placeholder="Raiz 3" type="number" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        
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