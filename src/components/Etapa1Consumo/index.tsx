import { Form, FormGroup, Label, Input, Table} from "reactstrap"

// Dependencia
import 'bootstrap/dist/css/bootstrap.min.css'

// Estilo
import { Container } from "./styles"


interface FormConsumoProps {
    consumer: (valor: number, indice: number) => void;
    name: (valor: string) => void;
    email: (valor: string) => void;
}

export function FormularioConsumo ({ consumer, name, email }: FormConsumoProps) {
    
    return (
        <Container>
            <strong>Dimensionamento de sistema fotovoltaico</strong>
            <Form>
                <FormGroup>
                    <Label for="nomeLabel">Nome</Label>
                    <Input id="nome" name="nome" placeholder="Nome" type="text"
                        onChange={event => {
                            const ret = String(event.target.value)
                            name(ret)
                        }}
                    />

                    <Label for="emailLabel">Email</Label>
                    <Input id="email" name="email" placeholder="E-mail" type="email"
                        onChange={event => {
                            const ret = String(event.target.value)
                            email(ret)
                        }}
                    />
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
                                        consumer(ret, 0)
                                    }} 
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 2" type="number" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer(ret, 1)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 3" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer(ret, 2)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 4" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer(ret, 3)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 5" type="text" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer(ret, 4)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 6" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer(ret, 5)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 7" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer(ret, 6)
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 8" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer(ret, 7)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 9" type="text" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer(ret, 8)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 10" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer(ret, 9)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 11" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer(ret, 10)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 12" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer(ret, 11)
                                    }}
                                />
                            </td>
                            <td> 
                                <Input id="exampleEmail" name="email" placeholder="Mês 13" type="email" 
                                    onChange={event => {
                                        const ret = Number(event.target.value)
                                        consumer(ret, 12)
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