import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

// Componentes
import { FormularioConsumo } from './components/Etapa1Consumo';
import { FormularioIrradiacaoSolar } from './components/Etapa2Irradiacao';
import { FormularioPotenciaDeGeracaoModulos } from './components/Etapa3Potencia';
import { FormularioTotalDePaineis } from './components/Etapa4TotalPaineis';
import { NovoComponente } from './components/pdf';

// Função de calculos
import { gerarPdf } from './services/calculos';
import { mediaIrradiacaoSolar } from './services/mediaIrradiacao';
import { potenciaDeGeracaoDeModulos } from './services/potenciaModulos';

// Estilo global
import { GlobalStyle } from './styles/styles';

//--------------------------------------------------------------------------------------------------------//
//FormularioConsumo
export const VarConsumo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

//FormularioIrradiacaoSolar
export const VarIrradiacaoSolar = [4.83, 5.3, 4.82, 4.69, 4.07, 3.95, 3.97, 4.85, 4.37, 4.5, 4.74, 5.13]

//FormularioPotenciaDeGeracaoModulos 
export const VarModeloPainel = ["painel"]
export const VarIrradiacaoMedia = mediaIrradiacaoSolar()
export const VarAreaPainel = [0]
export const VarEficienciaPainel = [0]

//FormularioTotalDePaineis
export const VarTotalPaineis = [0]

function App() {
  return (
    <div>
      <FormularioConsumo consumer={VarConsumo} />
      <FormularioIrradiacaoSolar solarRadiation={VarIrradiacaoSolar} />
      <FormularioPotenciaDeGeracaoModulos 
        panelName={VarModeloPainel}
        solarRadiationAverage={VarIrradiacaoMedia}
        panelArea={VarAreaPainel}
        panelEfficiency={VarEficienciaPainel}
      />
      <FormularioTotalDePaineis totalPanels={VarTotalPaineis} />

      <Button color="danger" onClick={gerarPdf}>
        <Link to="/pdf">PDF</Link>
      </Button>

      <GlobalStyle />
    </div>
  );
}

export default App;
