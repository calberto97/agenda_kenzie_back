import { tClientLogin } from './../../interfaces/client';
import { clientCreationResultSchema } from '../../schemas/client';
import { tClientCreationResult } from '../../interfaces/client';
import { Client } from '../../entities/client';
import { AppDataSource } from '../../data-source';
import { compare, hash } from 'bcryptjs';
import { AppError } from '../../errors';
import { sign } from 'jsonwebtoken';

const clientLoginService = async (
  payload: tClientLogin
): Promise<{ token: string }> => {
  const repo = AppDataSource.getRepository(Client);
  
  const client = await repo.findOneBy({ email: payload.email });
  if (!client) {
    throw new AppError('Invalid credentials!', 401);
  }

  const checkPw = await compare(payload.password, client.password);
  if (!checkPw) {
    throw new AppError('Invalid credentials!', 401);
  }

  const token = sign(
    { email: payload.email },
    String(process.env.SECRET_KEY),
    { expiresIn: '24h', subject: String(client.id) }
  );

  return { token };
};

export default clientLoginService;
