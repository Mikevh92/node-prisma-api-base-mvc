import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { IEstudiante } from "../../interfaces/IEstudiante";

const prisma = new PrismaClient();

const controller = async (req: Request, res: Response): Promise<void> => {
  try {
    const body: IEstudiante = req.body;
    
    const response = await prisma.estudiante.create({
      data: {
        id: body.id,
        name: body.name,
        matricula: body.matricula
      }
    })

    res
      .set("Content-Type", "application/vnd.api+json")
      .status(200)
      .json({
        data: {
          attributes: response,
        },
      });
  } catch (e) {
    res
      .set("Content-Type", "application/vnd.api+json")
      .status(200)
      .json({
        errors: {
          details: e,
        },
      });
  }
};

export default controller;
