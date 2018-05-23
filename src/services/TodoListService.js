import axios from 'axios'

const TodoListService = {

    obterTarefas: () => {
        return axios.get("https://behbqlqhdk.execute-api.us-east-1.amazonaws.com/dev")
    }

};

export default TodoListService;