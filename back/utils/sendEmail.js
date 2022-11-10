const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "61663cee614b6e",
      pass: "b67be8f949b440",
    },
  });
  const mensaje = {
    from: "Ezenty - Fragancias que inspiran <mail@ezenty.com>",
    to: options.email,
    subject: options.subject,
    text: options.mensaje,
  };

  await transport.sendMail(mensaje);
};

module.exports = sendEmail;
