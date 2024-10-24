import { Handler } from 'express';
import { Request, Response } from 'express';
import { IEstudiante } from '../../interfaces/IEstudiante';
import Joi from 'joi';
import 'dotenv';

const middleware: Handler = (req:Request, res:Response, next) => {
  const authorization = req.headers.authorization;
  const body:IEstudiante = req.body;
  
  try {
    const schema = Joi.object<IEstudiante>({
      id: Joi.string().required(),
      name: Joi.string().required(),
      matricula: Joi.string().required()
    })

    const error = schema.validate(body);
    if(error.error){
      throw error.error.message;
    }

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