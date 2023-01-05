const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "okoyedennis7@gmail.com",
    subject: "Lade Agroloans",
    html: `<b>Hello ${name}</b>,</b> <br/><p>Welcome to Lade Agroloans, Let us know how you get along with the app.</p>`,
  });
};

const sendAppliedEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "okoyedennis7@gmail.com",
    subject: "Lade Agroloans",
    html: `<b>Hello ${name},</b> <br/><p>You have applied to Lade Agroloans successfully. <br/> <br/>We will get back to you on the next phase.</p>`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendAppliedEmail,
};
