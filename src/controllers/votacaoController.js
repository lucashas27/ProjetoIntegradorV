const api = require('../services/api');

exports.list = async (req, res) => {
  try {
    const {
      ano,
      dataIncio,
      codSituacao,
      ordenarPor,
      ordem = 'ASC',
    } = req.query;
    // Mostrando todas as votações em aberto
    const { data } = await api.get('proposicoes', {
      params: {
        ...(ano && { ano }),
        ...(dataIncio && { dataIncio }),
        ...(codSituacao && { codSituacao }),
        ...(ordenarPor && { ordenarPor }),
        ordem,
      },
    });
    const votacaoEmenta = data.dados.map((dados) => `ID ${dados.id}, Ementa ${dados.ementa}, Sigla ${dados.siglaTipo}`);

    res.status(200).json({
      'Lista de votacao': votacaoEmenta,
      Dados: data,
    });
  } catch (error) {
    console.error('Algum erro inesperado aconteceu:');
    console.error(error);
  }
};

exports.show = async (req, res) => {
  const { id: idPropostas } = req.params;
  try {
    // Consumindo as propostas de votação com base no ID do tema
    const { data } = await api.get(`proposicoes/${idPropostas}`);

    res.status(200).json({
      'Nomes das ementas': data,
    });
  } catch (error) {
    console.error('Algum erro inesperado aconteceu');
    console.error(error);
  }
};
