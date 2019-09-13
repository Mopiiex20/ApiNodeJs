import { Router } from "express";
import auth from "./route/authRoute";
import signUp from "./route/authRoute";
import users from "./route/userRoute"
import products from "./route/productsRoute";

const router: Router = Router();

router.use("/env", (req, res) => {
  res.json(process.env);
});
router.use("/", auth);
router.use("/users", users);
router.use("/register", signUp);
router.use("/books", products);

export default router;
