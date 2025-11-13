import type { Request, Response } from "express";
import Category from "../models/Category.model";

export default async function getCategories(req: Request, res: Response) {
    const ids = await Category.findAll({
        attributes: ['id'],
        raw: true
    });

    return res.status(200).json({ categories: (ids as unknown as { id: string }[]).map(tag => tag.id) });
}