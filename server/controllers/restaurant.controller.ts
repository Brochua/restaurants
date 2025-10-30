import type { NextFunction, Request, Response } from 'express';
import Restaurant from '../models/Restaurant.model.ts';
import type { ParsedQs } from 'qs';
import Category from '../models/Category.model.ts';
import Cuisine from '../models/Cuisine.model.ts';
import { sequelize } from '../db/init.ts';
import type { Includeable, WhereOptions } from 'sequelize';

/**
 * Gets a list of restaurant. Default is page 1 and limit of 50.
 * @param {Request} req - Request
 * @param {number} req.query.page - Page number
 * @param {number} req.query.limit - Number of items per page
 * @param {string} req.query.name - String contained in name
 * @param {string} req.query.area - The desired area
 * @param {string} req.query.category - The category to be contained
 * @param {string} req.query.cuisine - The type of cuisine to find
 * @param {boolean} req.query.all - Whether we should send back all records
 * @param {Response} res - Response
 * @param {NextFunction} next - Next
 */
async function getRestaurants(req: Request, res: Response, next: NextFunction) {
  try {
    const { 
      page = 1, 
      limit = 50, 
      name,
      area,
      category,
      cuisine,
      all
    } = destructureQueryParams(req.query);

    if (isNaN(page) || isNaN(limit)) {
      return res.status(400).json({ message: 'page and limit parameters must be numbers'});
    }

    if (page < 1 || limit < 1) {
      return res.status(400).json({ message: 'page and limit parameters must be greater than 0'});
    }

    const where: WhereOptions = [];
    const include: Includeable[] = [];

    if (all) {
      const restaurants = await fetchRestaurants({}, [
          {
            model: Category,
            attributes: ['id'],
            through: { attributes: [] }
          },
          {
            model: Cuisine,
            attributes: ['id'],
            through: { attributes: [] }
          }
        ],
      );

      const totalPages = await getTotalPages(limit, undefined, undefined);

      return res.status(200).json({
        restaurants,
        currentPage: page,
        totalPages: totalPages
      });
    }

    if (name) {
      where.push({name: name});
    }

    if (area) {
      where.push({area: area});
    }

    include.push({
      model: Category,
      where: category ? { id: category } : {},
      attributes: ['id'],
      through: { attributes: [] }
    });

    include.push({
      model: Cuisine,
      where: cuisine ? { id: cuisine } : {},
      attributes: ['id'],
      through: { attributes: [] }
    })

    const totalPages = await getTotalPages(limit, where, include);
    
    if (page > totalPages) {
      return res.status(404).json({ message: 'Page not found' });
    }

    const restaurants = await fetchRestaurants(where, include);

    return res.status(200).json({
      restaurants,
      currentPage: page,
      totalPages: totalPages
    });
  } catch (error) {
    next(error);
  }
}

async function fetchRestaurants(where: WhereOptions, include: Includeable[]) {
  const restaurants = await Restaurant.findAll({
    where,
    include
  });
  return restaurants.map(restaurant => {
    const restaurantData = restaurant.toJSON();
    return {
      ...restaurantData,
      categories: restaurantData.Categories?.map((cat: any) => cat.id) || [],
      cuisines: restaurantData.Cuisines?.map((cuisine: any) => cuisine.id) || [],
      Categories: undefined,
      Cuisines: undefined
    };
  })
}

function destructureQueryParams(query: ParsedQs) {
  return {
    page: query.page ? Number(query.page) : undefined,
    limit: query.limit ? Number(query.limit) : undefined,
    name: query.name,
    area: query.area,
    category: query.category ? query.category.toString().split(',') : undefined,
    cuisine: query.cuisine ? query.cuisine.toString().split(',') : undefined,
    all: query.all ? Boolean(query.all) : false
  } 
}

/**
 * Gets the total number of pages. Default is 50 items per page.
 * @param {object} req - Request
 * @param {number} [req.query.limit] - Number of items per page
 * @param {object} res - Response
 * @param {Function} next - Next
 * @returns {void}
 */
async function getPageCount(req: Request, res: Response, next: NextFunction) {
  try {
    const totalPages = await getTotalPages(req.query.limit ? Number(req.query.limit) : 50);
    return res.status(200).json({ totalPages });
  } catch (error) {
    next(error);
  }
}

/**
 * Calculates the total number of pages based on the given limit 
 * and an optional aggregation pipeline
 * @async
 * @function getTotalPages
 * @param {number} limit - The maximum number of items per page
 * @param {object[]} where - An optional where clause array
 * @param {object[]} include - An optional includes clause array
 * @returns {Promise<number>} The total number of pages.
 */
async function getTotalPages(limit: number, where: WhereOptions = [], include: Includeable[] = []) {
  const count = await Restaurant.count({
    where,
    include,
  });
  return Math.ceil(count / limit);
}

/**
 * Creates a restaurant
 * 
 * @param {Request} req - Request 
 * @param {Response} res - Response 
 * @param {NextFunction} next - Next function 
 */
async function createRestaurant(req: Request, res: Response, next: NextFunction) {
  const { restaurant, categories, cuisines } = req.body;

  if (!restaurant) {
    return res.status(400).json({ message: "Restaurant must be provided in the body" });
  }


  const cuisinesTuples = await Promise.all((cuisines || []).map((c: string) => {
    return Cuisine.findOrCreate({
      where: { id: c.toLowerCase() },
      defaults: { id: c.toLowerCase() }
    });
  }));
  const cuisinesModels = cuisinesTuples.map(([instance]) => instance);


  const categoriesTuples = await Promise.all((categories || []).map((c: string) => {
    return Category.findOrCreate({
      where: { id: c.toLowerCase() },
      defaults: { id: c.toLowerCase() }
    });
  }));
  const categoriesModels = categoriesTuples.map(([instance]) => instance);


  const newRestaurant = await Restaurant.create(restaurant);

  if (categoriesModels.length) {
    await (newRestaurant as any).addCategories(categoriesModels);
  }
  if (cuisinesModels.length) {
    await (newRestaurant as any).addCuisines(cuisinesModels);
  }

  return res.status(201).json({ id: (newRestaurant as any).id });
}

/**
 * Gets a restaurant by its id.
 * @param {object} req - Request
 * @param {string} req.params.id - Restaurant id
 * @param {object} res - Response
 * @param {Function} next - Next
 * @returns {void}
 */
async function getRestaurant(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findOne({
      where: {
        id
      }
    });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    return res.status(200).json(restaurant);
  } catch (error) {
    next(error);
  }
}

export { getRestaurants, getRestaurant, getPageCount, createRestaurant };