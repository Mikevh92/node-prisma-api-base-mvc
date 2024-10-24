import { Router, IRouter } from 'express';

import estudianteAddMiddleware from '../middlewares/estudiante/estudiante.add.middleware';
import estudianteAddController from '../controllers/estudiante/estudiante.add.controller';

import estudianteGetMiddleware from '../middlewares/estudiante/estudiante.get.middleware';
import estudianteGetController from '../controllers/estudiante/estudiante.get.controller';

const app: IRouter = Router();
app.post('/add', estudianteAddMiddleware, estudianteAddController);
app.get('/', estudianteGetMiddleware, estudianteGetController);

export default app;