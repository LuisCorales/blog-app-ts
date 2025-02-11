"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users_controller");
const router = (0, express_1.Router)();
router.get("/users/:id", users_controller_1.getOneUser);
router.get("/users", users_controller_1.getAllUser);
router.post("/users", users_controller_1.postUser);
router.put("/users/:id", users_controller_1.putUser);
router.delete("/users/:id", users_controller_1.deleteUser);
exports.default = router;
