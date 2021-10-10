const { verify } = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Informe o token' });
  }

  const [authType, token] = authorization.split(' ');

  if (authType !== 'Bearer') {
    return res.status(401).json({ message: 'Token Inválido' });
  }

  try {
    const { sub } = verify(token, 'chapolinColoradoV');

    req.user = sub;
    return next();
  } catch (e) {
    return res.status(401).json({ message: 'Token Inválido' });
  }
};
