import { Handler } from 'express';
import { Request, Response } from 'express';
import { IEstudiante } from '../../interfaces/IEstudiante';
import Joi from 'joi';
import 'dotenv';

const middleware: Handler = (req:Request, res:Response, next) => {
  try {
    next();
  }catch (e){
    res
    .set('Content-Type', 'application/vnd.api+json')
    .status(200)
    .json({
      errors: {
        details: e
      }
    });
  }
}

export default middleware;