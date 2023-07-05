import { NextApiRequest, NextApiResponse } from 'next';
import { AiPersonaSchema } from '../types/aiPersona';
import { generateAiPersona } from '../services/aiPersonaGeneration';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { description } = req.body;
    try {
      const aiPersona: AiPersonaSchema = generateAiPersona(description);
      res.status(200).json({ aiPersona });
    } catch (error) {
      res.status(500).json({ error: 'Error generating AI persona' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}