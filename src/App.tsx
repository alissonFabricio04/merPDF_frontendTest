import axios from "axios";
import { useState } from "react";
import { Button } from 'reactstrap';

// Componentes
import { FormularioConsumo } from './components/Etapa1Consumo';
import { FormularioIrradiacaoSolar } from './components/Etapa2Irradiacao';
import { FormularioPotenciaDeGeracaoModulos } from './components/Etapa3Potencia';
import { FormularioTotalDePaineis } from './components/Etapa4TotalPaineis';
import { FormularioPadraoEntradaPotenciaMaxima } from "./components/Etapa5PadraoEntrada";


// Estilo global
import { GlobalStyle } from './styles/styles';


function App() {
  //FormularioConsumo
  const [VarConsumo, setVarConsumo] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
  const [VarName, setVarName] = useState("")
  const [VarEmail, setVarEmail] = useState("")

  //FormularioIrradiacaoSolar
  const [VarIrradiacaoSolar, setVarIrradiacaoSolar] = useState([4.83, 5.3, 4.82, 4.69, 4.07, 3.95, 3.97, 4.85, 4.37, 4.5, 4.74, 5.13])

  //FormularioPotenciaDeGeracaoModulos 
  const [VarModeloPainel, setVarModeloPainel] = useState("painel")
  const [VarAreaPainel, setVarAreaPainel] = useState(0)
  const [VarEficienciaPainel, setVarEficienciaPainel] = useState(0)

  //FormularioTotalDePaineis
  const [VarPotenciaModulo, setVarPotenciaModulo] = useState(0)

  //FormularioPadraoEntradaPotenciaMaxima
  const [VarTensaoFornecimento, setVarTensaoFornecimento] = useState(0)
  const [VarCorrenteDisjuntor, setVarCorrenteDisjuntor] = useState(0)
  const [VarFatorPotencia, setVarFatorPotencia] = useState(0)
  const [VarRaiz3, setVarRaiz3] = useState(0)


  function FunctionSetVarConsumo(valor: number, indice: number) {
    const VarConsumoTemp = VarConsumo
    VarConsumoTemp[indice] = valor
    setVarConsumo(VarConsumoTemp)
  }

  function FunctionSetVarName(valor: string) {
    setVarName(valor)
  }

  function FunctionSetVarEmail(valor: string) {
    setVarEmail(valor)
  }

  function FunctionSetVarIrradiacaoSolar(valor: number, indice: number) {
    const VarIrradiacaoTemp = VarIrradiacaoSolar
    VarIrradiacaoTemp[indice] = valor
    setVarIrradiacaoSolar(VarIrradiacaoTemp)
  }

  function FunctionSetVarModeloPainel(valor: string) {
    setVarModeloPainel(valor)
  }

  function FunctionSetVarAreaPainel(valor: number) {
    setVarAreaPainel(valor)
  }
  
  function FunctionSetVarEficienciaPainel(valor: number) {
    setVarEficienciaPainel(valor)
  }

  function FunctionSetVarPotenciaModulo(valor: number) {
    setVarPotenciaModulo(valor)
  }

  function FunctionSetVarTensaoFornecimento(valor: number) {
    setVarTensaoFornecimento(valor)
  }

  function FunctionSetVarCorrenteDisjuntor(valor: number) {
    setVarCorrenteDisjuntor(valor)
  }

  function FunctionSetVarFatorPotencia(valor: number) {
    setVarFatorPotencia(valor)
  }

  function FunctionSetVarRaiz3(valor: number) {
    setVarRaiz3(valor)
  }

  async function consoleView() {
    await axios.post("http://localhost:3333/api/pdf/env", {
      VarName,
      VarEmail,
      VarConsumo,
      VarIrradiacaoSolar,
      VarModeloPainel,
      VarAreaPainel,
      VarEficienciaPainel,
      VarPotenciaModulo,
      VarTensaoFornecimento,
      VarCorrenteDisjuntor,
      VarFatorPotencia,
      VarRaiz3
    })
      .then(response => {
          alert("Tudo ocorreu bem!!!")
          window.location.href = "/pdf"
      })
      .catch(response => console.log("Deu Erro :(", response))
  }

  return (
    <div>
      <FormularioConsumo 
        consumer={FunctionSetVarConsumo}
        name={FunctionSetVarName}
        email={FunctionSetVarEmail}
      />
      <FormularioIrradiacaoSolar solarRadiation={FunctionSetVarIrradiacaoSolar} />
      <FormularioPotenciaDeGeracaoModulos 
        panelName={FunctionSetVarModeloPainel}
        panelArea={FunctionSetVarAreaPainel}
        panelEfficiency={FunctionSetVarEficienciaPainel}
      />
      <FormularioTotalDePaineis totalPanels={FunctionSetVarPotenciaModulo} />
      <FormularioPadraoEntradaPotenciaMaxima
        voltageSupply={FunctionSetVarTensaoFornecimento}
        currentBreaker={FunctionSetVarCorrenteDisjuntor}
        powerFactor={FunctionSetVarFatorPotencia}
        rootThree={FunctionSetVarRaiz3}
      />


      <Button color="danger" onClick={consoleView}>PDF</Button>

      <GlobalStyle />
    </div>
  );
}

export default App;
