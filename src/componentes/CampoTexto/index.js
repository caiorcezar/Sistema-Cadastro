import './CampoTexto.css'

function CampoTexto (props) {
    
    let valor = ""
    const digitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }
    
    return(
        <div className='CampoTexto'>
            <label>{props.label}</label>
            <input value={valor} onChange={digitado} placeholder={props.placeholder} required={props.obrigatorio}/>
        </div>
    )
}

export default CampoTexto