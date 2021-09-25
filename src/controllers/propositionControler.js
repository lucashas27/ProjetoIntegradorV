const api = require('../services/api');

exports.list = async (req, res) => {
  try {
    const { siglaUfAutor, codTema } = req.query;
    const { data: propositions } = await api.get('proposicoes', {
      params: {
        ...(siglaUfAutor && { siglaUfAutor }),
        ...(codTema && { codTema }),
      },
    });

    return res.status(200).json(propositions);
  } catch (e) {
    return res.status(403).json(e);
  }
};

exports.find = async (req, res) => {
  try {
    const { id } = req.params;
    const { data: proposition } = await api.get(`proposicoes/${id}`);

    return res.status(200).json(proposition);
  } catch (e) {
    return res.status(403).json(e);
  }
};
