import React, { useEffect, useState } from 'react';
import LancamentoService from '../../services/LancamentoService';

const ListagemLancamentos = () => {
  const [lancamentos, setLancamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    carregarLancamentos();
  }, []);

  const carregarLancamentos = async () => {
    try {
      setLoading(true);
      const response = await LancamentoService.listarTodos();
      setLancamentos(response.data);
    } catch (err) {
      console.error("Erro ao buscar lançamentos:", err);
      setError("Não foi possível carregar os lançamentos.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Carregando lançamentos...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h1>Lançamentos Financeiros</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {lancamentos.map((item) => (
            <tr key={item.id}>
              <td>{item.descricao}</td>
              <td>R$ {item.valor.toFixed(2)}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListagemLancamentos;