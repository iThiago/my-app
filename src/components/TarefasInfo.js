import React, {Component} from 'react';
import moment from 'moment';
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
                <h1>...</h1>
            )
          }else{
                    
            const tarefasList = tarefas.map((tarefa, key) => {
               
                return (
                  <tr>
                      <td>{tarefa.id} </td>
                      <td >{tarefa.descricao} </td>
                      <td>{ moment(tarefa.dataCriacao).format("DD/MM/YYYY") } </td>
                      <td> <input type="checkbox"  className="checkGrande" value={tarefa.excluida} /></td>
                      <td> <button className="btn brn-success" >Finalizar </button> </td>
                      <td> <button className="btn btn-danger" >Excluir</button> </td>
                       </tr>
                )
          });
          return (
            <div> 
                <table className="table"> 
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col" >Descrição</th>
                            <th scope="col">Data Criacão</th>
                            <th scope="col">Excluida?</th>
                            <th scope="col" >Opções</th>
                            <th scope="col">Excluir</th>
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