
import './App.css';
import Mensaje from'./Mensaje.js'


const Description =()=>{
  return <p>
    Esta es el componente de la descripcion la cual se va a incluir
  </p>
}

const  App = ()=> {

 
  const a=8
  const b=3
  return (
    <div className="App">
      <h1>El titulo es aca</h1>
      <strong>We are work in it</strong>
      <div>
       <p>El resultado es </p>
       
       {a+b}

       <Mensaje color='red' messaje='Estamos trabajando parte 1'/>
       <Mensaje color='blue' messaje='en un curso de react parte 2'/>
       <Mensaje color='green'  messaje='lets go'/>
      </div>
     <Description/>
   
    </div>
  );
}

export default App;
