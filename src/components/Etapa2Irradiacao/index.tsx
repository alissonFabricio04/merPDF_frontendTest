import { Form, Input, Table } from "reactstrap";


import { Container } from "./styles";

interface FormSolarRadiationProps {
    solarRadiation: number[]
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
                                        solarRadiation[0] = ret
                                    }} 
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 2" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation[1] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 3" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation[2] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 4" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation[3] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 5" type="text" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation[4] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 6" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation[5] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 7" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation[6] = ret
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 8" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation[7] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 9" type="text" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation[8] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 10" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation[9] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 11" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation[10] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 12" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        solarRadiation[11] = ret
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