
import useSelect from '../hooks/useSelect'
import styles from '../styles/Formulario.module.css'

const Formulario = ({setCategoria}) => {

    const opciones = [
        {value: 'general', label : 'General'},    
        {value: 'business', label : 'Negocios'},
        {value: 'entertainment', label : 'Entretenimiento'},
        {value: 'healt', label : 'Salud'},
        {value: 'sports', label : 'Deportes'},
        {value: 'science', label : 'Ciencia'},
        {value: 'technology', label : 'Tecnología'},
    ]

    const [categoria,SelectNoticias]=useSelect('sports',opciones)

    const HandleSubmit = e => {
        e.preventDefault()
        setCategoria(categoria)
    }


    return (
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form onSubmit={HandleSubmit}>
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
                    <SelectNoticias/>
                    <div className='input-field col s12'>
                        <button type="submit" className={`${styles.btn_block} btn-large amber darken-2`} >Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario
