const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email,
    from: "okoyedennis7@gmail.com",
    subject: "Lade Agroloans",
    html: `<b>Hello ${name}</b>,</b> <br/><p>Welcome to Lade Agroloans, Let us know how you get along with the app.</p>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

const sendAppliedEmail = (email, name) => {
  const msg = {
    to: email,
    from: "okoyedennis7@gmail.com",
    subject: "Lade Agroloans",
    html: `<b>Hello ${name},</b> <br/><p>You have applied to Lade Agroloans successfully. <br/> <br/>We will get back to you on the next phase.</p>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

const sendDonationEmail = (email, name, amount) => {
  const msg = {
    to: email,
    from: "okoyedennis7@gmail.com",
    subject: "Lade Agroloans",
    html: `<b>Hello ${name},</b> <br/><p>Thank you for your donation of <b>₦${amount}</b> to Lade Agroloans. <br/> <br/>We thank you and we look forward to partnering with you.</p>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  sendWelcomeEmail,
  sendAppliedEmail,
  sendDonationEmail,
};
