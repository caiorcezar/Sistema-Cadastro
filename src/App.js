import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
	
    const areas = [
        {
            nome: 'Mecânica',
            corFundo: '#ffcccc',
            corBorda: '#ff0000',
        },
        {
            nome: 'Elétrica',
            corFundo: '#ffffcc',
            corBorda: '#ffff00',
        },
        {
            nome: 'Tecnologia da Informação',
            corFundo: '#cce6ff',
            corBorda: ' #3399ff',
        },
        {
            nome: 'Logística',
            corFundo: '#d6f5d6',
            corBorda: ' #33cc33',
        },
        {
            nome: 'Gestão',
            corFundo: '#fff5cc',
            corBorda: ' #ffcc00',
        },
    ]
    
    
    const [professores, setProfessores] = useState([]);

	function aoAdicionarProfessor(professor) {
		setProfessores([...professores, professor]);
		console.log(professor);
	}

	return (
		<div>
			<Banner />
			<Formulario
                times = {areas.map(area => area.nome)}
				aoCadastrarProfessor={(professor) => aoAdicionarProfessor(professor)}
			/>
			{areas.map(area => <Time 
                                    nome={area.nome} 
                                    background={area.corFundo} 
                                    corDaBorda={area.corBorda}
                                    cards={professores.filter(professor => professor.area === area.nome)}
                                    />)} 
		</div>
	);
}

export default App;
