const nodemailer = require('nodemailer');
const portfolioAccountService = process.env.PORTFOLIO_ACCOUNT_SERVICE;
const portfolioAccountUser = process.env.PORTFOLIO_ACCOUNT_USER;
const portfolioAccoundPass = process.env.PORTFOLIO_ACCOUNT_PASS;

export async function sendEmail(to:string, subject:string, body:string){
    try {
        const transporter = nodemailer.createTransport({
            service: portfolioAccountService,
              auth: {
                user: portfolioAccountUser,
                pass: portfolioAccoundPass,
              },
            });
          
            const info = await transporter.sendMail({
              from: `"Portfolio"`, // sender address
              to: to, // list of receivers
              subject: subject, // Subject line
              text: body, // body
            });
    } catch (error) {
        console.log(error);
    }
  }