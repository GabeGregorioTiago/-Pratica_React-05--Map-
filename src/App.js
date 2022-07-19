//Crie um component de class


//Crie um array de objetos no STATE com pelo menos 6 objetos


//Faça um map do seu state e exiba os dados na tela

import React, {Component} from "react";

class App extends Component{
     state ={
         cadastro:[{nome:'Gabriel',idade:24,cidade:'Barra Mansa'},
         {nome:'Isabella',idade:18,cidade:'Salvador'},
         {nome:'Ana',idade:27,cidade:'Rio de Janeiro'},
         {nome:'Daniel',idade:27,cidade:'Volta Redonda'},
         {nome:'Ana Paula',idade:49,cidade:'Florianopolis',},{nome:'Marina', idade:22,cidade:'São Gonçalo'}]  ,     

         
     };
     
    render(){
      return(
        <section>
            <div>
              <h1>Dados</h1>
            </div>
           {this.state.cadastro.map((rastreador) => (
             <div>
              
               <p>Meu nome é {rastreador.nome}</p>
               <p>Minha idade é {rastreador.idade}</p>
               <p>Minha cidade é {rastreador.cidade}</p>
               </div>  
          
           
            ))}
         
        </section>
      );

    }

}
export default App;