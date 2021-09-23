exports.post = (req, res) => {
  res.status(201).send('Requisição recebida com sucesso!');
};

exports.put = (req, res) => {
  const { id } = req.params;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.deconste = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
