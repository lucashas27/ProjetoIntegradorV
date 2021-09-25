const api = require('../services/api');

exports.list = async (req, res) => {
  try {
    // Consumindo todos os temas de votações da API da câmara e filtrando por nome
    const { data } = await api.get('referencias/proposicoes/codTema');
    const temasNomes = data.dados.map((dados) => dados.nome);
    const codListaTemas = data.dados.map((dados) => `${dados.nome} ID: - ${dados.cod}`);

    res.status(200).json({
      'Lista de temas': temasNomes,
      'Nome e IDs:': codListaTemas,
    });
  } catch (error) {
    console.error('Algum erro inesperado aconteceu:');
    console.error(error);
  }
};

// Lista todos os projetos recentes de um determinado tema
exports.find = async (req, res) => {
  const { id } = req.params;
  try {
    // Consumindo as propostas de votação com base no ID do tema
    const { data } = await api.get(`proposicoes/${id}/temas`);

    const nomesTemas = data.dados.map((dados) => dados.ementa);

    res.status(200).json({
      'Nomes das ementas': nomesTemas,
      'Dados completos': data,
    });
  } catch (error) {
    console.error('Algum erro inesperado aconteceu:');
    console.error(error);
  }
};
