exports.list = (req, res) => {
  const { siglaUfAutor } = req.query;

  return res.send(200).json([]);
}