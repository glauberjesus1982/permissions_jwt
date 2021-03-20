import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import PermissionController from "./app/controllers/PermissionController";
import RoleController from "./app/controllers/RoleController";
import ProductController from "./app/controllers/ProductController";

import { is } from "./app/middlewares/permission";
const router = Router();

router.post("/users", UserController.create);
router.post("/sessions", SessionController.create);
router.post("/permissions", PermissionController.create);
router.post("/roles", RoleController.create);

router.post("/products", is(["ROLE_ADMIN"]), ProductController.create);
router.get("/products",is(["ROLE_ADMIN", "ROLE_USER"]),ProductController.index);
router.get("/products/:id",is(["ROLE_ADMIN", "ROLE_USER"]),ProductController.show);

export { router };