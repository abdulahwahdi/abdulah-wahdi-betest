import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import { authenticateJWT } from './middlewares/auth';
import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

const app = express();

app.use(bodyParser.json());
app.post('/generate-token', (req, res) => {
    const random = (Math.random() + 1).toString(36).substring(7);
    const token = jwt.sign(
      { random },
      jwtSecret,
      { expiresIn: '1h' }
    );
  
    res.status(200).json({ token });
  });

app.use(authenticateJWT);
app.use('/users', userRoutes);

export default app;
