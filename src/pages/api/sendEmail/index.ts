import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

export interface ISendMail {
  subject: string;
  body: string;
}

export interface IMailAdapter {
  sendMail: (data: ISendMail) => Promise<void>;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {name, email, message} = req.body
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  // format mail send
  const body = [
    `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
    `<p>Nome: ${name}</p>`,
    `<p>email: ${email}</p>`,
    `<a href="mailto:${email}">Enviar e-mail para ${name}</a>`,
    `<p>mensagem: ${message}</p>`,
    `</div>`
  ].join('\n')
  const transport = nodemailer.createTransport({
    host: process.env.NODEMAILERHOST  ?? '',
    port: Number(String(process.env.NODEMAILERPORT)),
    auth: {
      user: process.env.NODEMAILERUSER ?? '',
      pass: process.env.NODEMAILERPASS ?? '',
    },
  });''

  await transport.sendMail({
    from: "Portfolio <oi@portfolio.com>",
    to: "Henrique Ramos <devhenrique.ramos@gmail.com>",
    subject: `${name} te enviou uma mensagem`,
    html: body,
  })

  return res.status(201).send('ok');
}