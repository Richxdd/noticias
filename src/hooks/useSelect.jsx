
import {useState} from 'react'

const useSelect = (stateInicial,opciones) => {

    const [categoria,setCategoria]=useState(stateInicial)
    
    const SelectNoticias = () =>(
        <select className='browser-default' value={categoria} onChange={e=>setCategoria(e.target.value)}>
            {opciones.map(opcion=>(
                <option 
                    key={opcion.value}
                    value={opcion.value}
                    >
                    {opcion.label}
                </option>
            ))}
        </select>
    )

    return [categoria,SelectNoticias]
}

export default useSelect
