import React, {Component} from 'react';
import TodoListService from '../services/TodoListService'
import TarefasInfo from './TarefasInfo';

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tarefas: [],
        };

        TodoListService.obterTarefas().then((response) => {
            debugger;
            var listaJson = JSON.parse(response.data);
            this.setState({tarefas:listaJson});
        })
    }

   
    
    render() {
        return (
            <TarefasInfo tarefas={this.state.tarefas}/>
        )
   }
};

export default TodoList;