import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { IEstudiante } from "../../interfaces/IEstudiante";

const prisma = new PrismaClient();

const controller = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await prisma.estudiante.findMany({
      select: {
        id: true,
        matricula: true,
        name: true
      }
    });

    res
      .set("Content-Type", "application/vnd.api+json")
      .status(200)
      .json({
        data: {
          include: response,
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
