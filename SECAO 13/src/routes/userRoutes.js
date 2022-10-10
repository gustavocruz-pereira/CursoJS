import { Router } from "express";
import userController from "../controllers/HomeController";

const router = new Router();

router.get('/', userController.store)

export default router;