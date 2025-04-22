import './ListaSuspensa.css'

interface ListaSuspensaProps {
    label: string
    itens: string[]
    valor: string
    required?: boolean
    aoAlterado: (valor: string) => void 
    }
const ListaSuspensa = ({label, itens, valor, required, aoAlterado}: ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={required} value={valor}>
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa