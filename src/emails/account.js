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
    subject: "Loan Application Received",
    html: `<p>Dear ${name},</p>

    <p>I hope this email finds you well. I am writing to confirm that we have received your loan application on our platform. Thank you for considering us as a potential lender.</p>

    <p>We appreciate your interest in our loan services, and we would like to assure you that we will carefully review your application. Our team is dedicated to evaluating each application we receive, and we will notify you of our decision as soon as possible.</p>

    <p>Please note that due to the high volume of loan applications we receive, the evaluation process may take some time. Rest assured that we will do our best to keep you informed throughout the process.</p>

    <p>If you have any questions or concerns regarding your loan application or the evaluation process, please feel free to send us a mail.</p>

    <p>Thank you again for considering our loan services. We look forward to reviewing your application.</p>

    <p>Best regards,</p>
    <p>Lade Agroloans,</p>
    `,
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

  // Format Amount
   const formatNumbers = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const msg = {
    to: email,
    from: "okoyedennis7@gmail.com",
    subject: "Thank You for Your Donation",
    html: `<p>Dear ${name},</p>

    <p>I am writing to express my heartfelt gratitude for your generous donation of <b>${formatNumbers(amount)}</b> naira to Lade Agroloans. Your support is vital to our mission, and your contribution will go a long way in helping us achieve our goals.</p>

    <p>We appreciate your commitment to our cause and your willingness to help make a positive impact in our community. Your donation will help us to provide loans to SME's.</p>

    <p>We cannot thank you enough for your support. Your generosity will make a real difference in the lives of those we serve, and we are truly grateful for your contribution.</p>

    <p>If you have any questions or would like to learn more about our organization and the work we do, please feel free to send us a mail.</p>

    <p>Once again, thank you for your kind and generous donation. We could not do this without your support..</p>

    <p>Best regards,</p>
    <p>Lade Agroloans,</p>
    `,
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

const sendForgotPasswordEmail = (email, firstName, resetUrl) => {
  const msg = {
    to: email,
    from: "okoyedennis7@gmail.com",
    subject: "Forgot Password",
    html: ` <h2>Hello ${firstName}</h2>
    <p>Please use the url below to reset your password</p>
    <p>This reset link is valid for 30minutes.</p>

    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>

    <p>Regards...</p>`,
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
  sendForgotPasswordEmail,
};
