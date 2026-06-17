import React, { useEffect, useState } from 'react';
import { listarLucros } from '../../services/LucroService'; // Importando do novo serviço

const ListagemLancamentos = () => {
  const [lucros, setLucros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      setLoading(true);
      // Agora chamamos listarLucros() que retorna direto o array de dados
      const data = await listarLucros(); 
      setLucros(data);
    } catch (err) {
      console.error("Erro ao buscar lucros:", err);
      setError("Não foi possível carregar os lucros.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Carregando lucros...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h1>Histórico de Alocação de Lucros</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Valor Total</th>
            <th>Poupança</th>
            <th>Dividendos</th>
            <th>Reinvestimento</th>
          </tr>
        </thead>
        <tbody>
          {lucros.map((item) => (
            <tr key={item.id}>
              <td>R$ {item.valorTotal?.toFixed(2)}</td>
              <td>R$ {item.valorPoupanca?.toFixed(2)}</td>
              <td>R$ {item.valorDividendos?.toFixed(2)}</td>
              <td>R$ {item.valorReinvestimento?.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListagemLancamentos;