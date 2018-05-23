import React, {Component} from 'react';

class TarefasInfo extends Component{

    constructor(props){
        super(props);
        this.state = {
            qtdTarefas: 0
        }
    }

    componentWillReceiveProps(props) {
        this.setState({qtdTarefas: props.tarefas.length});
      }

      render(){
         

        const {tarefas} = this.props;
          if(!this.props.tarefas.length > 0){
            return (
                <h1>... </h1>
            )
          }else{
                    
            const tarefasList = tarefas.map((tarefa, key) => {
                return (
                  <tr>
                      <td>{tarefa.id} </td>
                      <td>{tarefa.descricao} </td>
                       </tr>
                )
          });
          return (
            <div> 
                <table className="table"> 
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tarefasList}
                    </tbody>
                </table>

<h4> total de {this.state.qtdTarefas} tarefas </h4>

            </div>
          );
        }
    }   
}


export default TarefasInfo;