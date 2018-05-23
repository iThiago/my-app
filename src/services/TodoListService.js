import axios from 'axios'

const TodoListService = {

    obterTarefas: () => {
        return axios.get("https://behbqlqhdk.execute-api.us-east-1.amazonaws.com/dev")
    },

    criarTarefa: (tarefa) => {
        return axios.post("https://behbqlqhdk.execute-api.us-east-1.amazonaws.com/dev",tarefa)
    }

};

export default TodoListService;