import { Form, Input, Table } from "reactstrap";


import { Container } from "./styles";

interface FormTotalPaineisProps {
    totalPanels: (valor: number) => void;
}

export function FormularioTotalDePaineis({ totalPanels }: FormTotalPaineisProps) {
    return (
        <Container>
            <Form>
                <Table borderless>
                    <thead>
                        <tr>
                            <th className="principal">Total de paineis fotovoltaicos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <th>Potência do modulo</th>
                        <tr>
                            <td>
                                <Input id="potenciaModulo" placeholder="Potência do módulo" type="number" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        totalPanels(ret)
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