import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

function Formulario (){

    const setores = [
        '',
        'Mecânica',
        'Logística',
        'Elétrica',
        'Tecnologia da Informação',
        'Alimentos',
        'Gestão'
    ]
    return(
        <section className='form'>
            <form>
                <h2>Preencha os dados para cadastrar </h2>
                <CampoTexto label="Nome Professor" placeholder="Insira seu nome" obrigatorio={true}/>
                <CampoTexto label="Especialidade" placeholder="Insira uma especialidade" obrigatorio={true}/>
                <CampoTexto label="Imagem" placeholder="Carregue uma imagem"/>
                <ListaSuspensa label="Área" areas={setores} obrigatorio={true}/>
                <Botao texto="Cadastrar"/>              
            </form>
        </section>
    )
}
export default Formulario