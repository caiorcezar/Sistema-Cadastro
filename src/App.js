import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";

function App() {
	const [professores, setProfessores] = useState([])

function aoAdicionarProfessor(professor){
	setProfessores([...professores, professor])
	console.log(professor)
}
	
	return (
		<div>
			<Banner />
			<Formulario aoCadastrarProfessor={professor => aoAdicionarProfessor(professor)}/>
		</div>
	);
}

export default App;
