import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8533c177f8b0de",
    pass: "e24264c7862903"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({ subject, body }: SendMailData){
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Gustavo Tartare <gustavocarrertartare@gmail.com>',
      subject: subject,
      html: body
    })
  };
}