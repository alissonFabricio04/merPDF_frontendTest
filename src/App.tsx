import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

// Componentes
import { FormularioConsumo } from './components/Etapa1Consumo';
import { FormularioIrradiacaoSolar } from './components/Etapa2Irradiacao';
import { FormularioPotenciaDeGeracaoModulos } from './components/Etapa3Potencia';
import { FormularioTotalDePaineis } from './components/Etapa4TotalPaineis';

// API
import { api } from "./services/api";


// Estilo global
import { GlobalStyle } from './styles/styles';


function App() {
  //FormularioConsumo
  const VarConsumo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  //FormularioIrradiacaoSolar
  const VarIrradiacaoSolar = [4.83, 5.3, 4.82, 4.69, 4.07, 3.95, 3.97, 4.85, 4.37, 4.5, 4.74, 5.13]

  //FormularioPotenciaDeGeracaoModulos 
  const [VarModeloPainel, setVarModeloPainel] = useState("painel")
  const [VarAreaPainel, setVarAreaPainel] = useState(0)
  const [VarEficienciaPainel, setVarEficienciaPainel] = useState(0)

  //FormularioTotalDePaineis
  const [VarPotenciaModulo, setVarPotenciaModulo] = useState(0)

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

  async function consoleView() {
    console.log(VarModeloPainel)
    console.log(VarAreaPainel)
    console.log(VarEficienciaPainel)
    console.log(VarPotenciaModulo)

    const result = await axios.post(`${api}/pdf/env`, {
      VarConsumo,
      VarIrradiacaoSolar,
      VarModeloPainel,
      VarAreaPainel,
      VarEficienciaPainel,
      VarPotenciaModulo,
    })
      .then(response => alert(response))
      .catch(response => alert("Deu Erro :("))
  }

  return (
    <div>
      <FormularioConsumo consumer={VarConsumo} />
      <FormularioIrradiacaoSolar solarRadiation={VarIrradiacaoSolar} />
      <FormularioPotenciaDeGeracaoModulos 
        panelName={FunctionSetVarModeloPainel}
        panelArea={FunctionSetVarAreaPainel}
        panelEfficiency={FunctionSetVarEficienciaPainel}
      />
      <FormularioTotalDePaineis totalPanels={FunctionSetVarPotenciaModulo} />

      <Button color="danger" onClick={consoleView}>PDF</Button>

      <GlobalStyle />
    </div>
  );
}

export default App;
