const send = require('../services/nodemailer');

const sendMail = async (req, res) => {
  const { name, phone, email, message } = req.body;
  send(name, phone, email, message);

  return res.json('E-mail enviado com sucesso!');
}

module.exports = {
  sendMail
}