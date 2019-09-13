import { Router } from "express";
import auth from "./route/auth-route";
import signUp from "./route/auth-route";
import users from "./route/user-route"
import products from "./route/products-route";

const router: Router = Router();

router.use("/env", (req, res) => {
  res.json(process.env);
});
router.use("/", auth);
router.use("/users", users);
router.use("/register", signUp);
router.use("/books", products);

export default router;
