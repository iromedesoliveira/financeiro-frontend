import api from './api';

export const processarLucro = async (dadosLucro) => {
    // dadosLucro deve ser { valorTotal: 300.00, perfil: "CONSERVADOR" }
    const response = await api.post('/lucros/processar', dadosLucro);
    return response.data;
};

export const listarLucros = async () => {
    const response = await api.get('/lucros/listar');
    return response.data;
};