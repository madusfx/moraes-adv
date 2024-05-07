const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD_EMAIL
  }
});

const send = (name, phone, email, message) => {
  transporter.sendMail({
    from: process.env.USER_EMAIL,
    to: 'mariaesfreitas@gmail.com',
    subject: 'Um novo formulário foi submetido!',
    html: `
    <h1>Você recebeu um novo formulário!</h1>
    <p>Nome do cliente:<p>
    <p>${name}</p>
    <p>Telefone do cliente:<p>
    <p>${phone}</p>
    <p>E-mail do cliente:<p>
    <p>${email}</p>
    <p>Mensagem do cliente:<p>
    <p>${message}</p>
  `
  })
}

module.exports = send;