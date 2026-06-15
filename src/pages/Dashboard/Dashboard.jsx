import React, { useEffect, useState } from 'react';
import LancamentoService from '../service/LancamentoService';

const Dashboard = () => {
    const [lancamentos, setLancamentos] = useState([]);

    useEffect(() => {
        // Chamada ao seu serviço
        LancamentoService.listarTodos()
            .then(response => {
                setLancamentos(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar lançamentos:", error);
            });
    }, []);

    return (
        <div>
            <h1>Dashboard Financeiro</h1>
            <ul>
                {lancamentos.map(item => (
                    <li key={item.id}>{item.descricao} - R$ {item.valor}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;