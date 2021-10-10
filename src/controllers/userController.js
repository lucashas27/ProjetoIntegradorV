const { hash, compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const User = require('../models/User');

exports.create = async (req, res) => {
  const {
    name, username, password, confirmPassword,
  } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Senhas não conferem' });
  }

  try {
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ message: 'Usuário já existe!' });
    }

    const hashedPassword = await hash(password, 8);

    await User.create({
      name,
      username,
      password: hashedPassword,
    });

    return res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (e) {
    return res.status(400).json({ message: 'Falha ao criar usuário!' });
  }
};

exports.auth = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username }).select('+password').lean();

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      return res.status(400).json({ message: 'Usuário ou Senha icorretos!' });
    }

    delete user.password;

    const token = sign({}, 'chapolinColoradoV', {
      subject: JSON.stringify(user._id),
    });

    return res.status(200).json({ ...user, token });
  } catch (e) {
    return res.status(400).json({ message: 'Usuário ou Senha icorretos!' });
  }
};
