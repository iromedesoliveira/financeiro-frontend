import api from './api'; // Importa aquela instância que configuramos com o interceptor

const LancamentoService = {
    // Busca todos os lançamentos
    listarTodos: () => {
        return api.get('/lancamentos');
    },

    // Envia um novo lançamento para o seu backend Java
    salvar: (dados) => {
        return api.post('/lancamentos', dados);
    },

    // Deleta um lançamento
    deletar: (id) => {
        return api.delete(`/lancamentos/${id}`);
    }
};

export default LancamentoService;