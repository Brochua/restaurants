import type { Request, Response } from "express";
import Cuisine from "../models/Cuisine.model";

export default async function getTags(req: Request, res: Response) {
    const tags = await Cuisine.findAll({
        attributes: ['id'],
        raw: true
    });

    return res.status(200).json({tags: (tags as unknown as {id: string}[]).map(t => t.id)});
}