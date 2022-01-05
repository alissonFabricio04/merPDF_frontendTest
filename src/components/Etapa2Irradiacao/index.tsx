import { Form, Input, Table } from "reactstrap";


import { Container } from "./styles";

interface FormSolarRadiationProps {
    solarRadiation: (valor: number, indice: number) => void;
}

export function FormularioIrradiacaoSolar({ solarRadiation }: FormSolarRadiationProps) {

    return (
        <Container>
            <Form>
                <Table borderless>
                    <thead>
                        <tr>
                            <th className="principal">Irradiação mensal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Input id="mes01" placeholder="Mês 1" type="number" 
                                    onChange={event => {
                                        const ret = Number(event.target.value) //ret = return
                                        solarRadiation(ret, 0)
                                    }} 
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 2" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation(ret, 1)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 3" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation(ret, 2)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 4" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation(ret, 3)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 5" type="text" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation(ret, 4)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 6" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation(ret, 5)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 7" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation(ret, 6)
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 8" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation(ret, 7)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 9" type="text" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation(ret, 8)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 10" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation(ret, 9)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 11" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation(ret, 10)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 12" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation(ret, 11)
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