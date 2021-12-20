import { Form, FormGroup, Label, Input, Table} from "reactstrap"

// Dependencia
import 'bootstrap/dist/css/bootstrap.min.css'

// Estilo
import { Container } from "./styles"


interface FormConsumoProps {
    consumer: number[];
}

export function FormularioConsumo ({ consumer }: FormConsumoProps) {
    
    return (
        <Container>
            <strong>Dimensionamento de sistema fotovoltaico</strong>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input id="exampleEmail" name="email" placeholder="E-mail" type="email" />
                </FormGroup>
                <Table borderless>
                    <thead>
                        <tr>
                            <th className="principal">Consumo mensal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {/* Mes 01 */}
                                <Input id="mes01" placeholder="Mês 1" type="number" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer[0] = ret
                                    }} 
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 2" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer[1] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 3" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer[2] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 4" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer[3] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 5" type="text" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer[4] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 6" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer[5] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 7" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer[6] = ret
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 8" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer[7] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 9" type="text" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer[8] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 10" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer[9] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 11" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer[10] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 12" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer[11] = ret
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 13" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer[12] = ret
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