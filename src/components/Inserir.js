import React, {Component} from 'react';
import TodoListService from '../services/TodoListService'
export class Inserir extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          tarefa: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(e) {
        let {tarefa} = this.state;
        const name = e.target.name;
        const value = e.target.value;
        tarefa[name] = value;
        this.setState({
        tarefa
         })
}

  handleSubmit(event) {
    event.preventDefault();

    let {tarefa} = this.state;

    tarefa.dataCriacao = new Date();
    tarefa.excluida = false;

    this.setState({tarefa})

    TodoListService.criarTarefa(this.state.tarefa).then(
    res => {
        console.log(res);
        console.log(res.data);
    })

  }

    render() {
        return (
            <div>
                <center> 
                    <br/><br/>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-row col-md-4">
                            <div class="form-group col-md-12">
                                <label class="form-control">
                                   <p> Descricao </p>
                                    <input type="text"  className="form-control"
                                     name="descricao" onChange={(event) => this.handleUserInput(event)} />
                                </label>
                            <input type="submit" class="form-control" value="Submit" />
                            </div>
                        </div>
                    </form>
                </center>
            </div>
          );
   }
};

export default Inserir;