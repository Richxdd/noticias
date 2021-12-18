
import { useState,useEffect } from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoNoticia from './components/ListadoNoticia'


const App=()=> {


  const [categoria,setCategoria]=useState('sports')
  const [noticias,setNoticias]=useState([])

  useEffect(()=>{

      const consultaAPI = async() =>{
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=43f02d3833964ab1bfa74fafe6887d1a`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setNoticias(resultado.articles)

      }
      consultaAPI()
      
  },[categoria])

  
  return (
    <div>
      <Header titulo='Buscador de Noticias'/>
      <div className="container white">
        <Formulario setCategoria={setCategoria}/>
        <ListadoNoticia noticias={noticias}/>
      </div>
    </div>
  )
}

export default App
