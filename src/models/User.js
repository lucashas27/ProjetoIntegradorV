const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Informe um nome'],
  },
  username: {
    type: String,
    required: [true, 'Informe o Username'],
  },
  password: {
    type: String,
    required: [true, 'Informe uma senha'],
    select: false,
  },
}, { timestamps: true, versionKey: false });

module.exports = model('user', UserSchema);
