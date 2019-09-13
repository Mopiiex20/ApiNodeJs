import { Router } from "express";
import verifyAdmin from "@helpers/verify-admin";
import Controller from "../controllers/products-сontroller";

const product: Router = Router();
const controller = new Controller();

// Retrieve all books
product.get("/", controller.getProducts);

product.put("/", verifyAdmin, controller.addProduct);

export default product;
