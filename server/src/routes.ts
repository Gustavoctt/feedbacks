import express from 'express';
import { NodemailerMailAdapter } from './adapter/nodemailer/nodemail-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbacksUseCase } from './use-cases/submit-feedbacks-use-case';

export const routes = express.Router();



routes.post('/feedbacks', async (req, res) => {

  const { type, comment, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbacksUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send();
  
})