import cors from 'cors';
import express from 'express';

import estudianteRouter from './routes/estudiante.router';

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/estudiante', estudianteRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
