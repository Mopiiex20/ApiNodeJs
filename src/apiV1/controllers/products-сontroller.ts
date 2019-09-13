import { Request, Response } from "express";
import { ProductService } from "@services/products-service";

export default class ProductsController {
  public getProducts = async (res: Response): Promise<any> => {
    try {

      var books = await new ProductService().getProducts();

      res.status(200).send({
        success: true,
        data: books
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public addProduct = async (req: Request, res: Response): Promise<any> => {
    try {
      
      var books = {
        _id: null,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
      }
      await new ProductService().addProduct(books);

      res.status(200).send({
        success: true
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
}
