const api = require('../services/api');

exports.list = async (req, res) => {
  try {
    const { ordem, ordenarPor } = req.query;
    const { data } = await api.get('deputados', {
      params: {
        ...(ordem && { ordem }),
        ...(ordenarPor && { ordenarPor }),
      },
    });

    const deputadosNomes = data.dados.map((dados) => dados.nome);
    const dadosDeputados = data.dados.map((dados) => `Nome:  ${dados.nome}, Membro do: ${dados.siglaPartido} do estado de: ${dados.siglaUf}, Foto: ${dados.urlFoto}`);

    res.status(200).json({
      'Lista de deputados': deputadosNomes,
      'Dados dos deputados': dadosDeputados,
      'Dados gerais': data,
    });
  } catch (error) {
    console.error('Algum erro inesperado aconteceu:');
    console.error(error);
  }
};
