import express from "express";
import {
  postProduct,
  getProduct,
  cmtProduct,
  getCart,
  removeProduct,
  updateUser,
  getOrder,
  getUser,
  removeProductCart,
} from "../controllers/user.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/** POST  id:/ _idUser*/

router.post("/postP/:id", verifyToken, postProduct);

router.post("/cmtP/:id/:idP", verifyToken, cmtProduct);

/** READ  id: _idUser*/

router.get("/getP/:id", verifyToken, getProduct);
router.get("/getCart/:id", verifyToken, getCart);
router.get("/getOrder/:id", verifyToken, getOrder);
router.get("/getUser/:id", getUser);
/** Update  */

router.patch("/update/:id", verifyToken, updateUser);

router.patch("/:id/:idP", verifyToken, removeProduct);

router.patch("/removeProductCart/:id/:product", verifyToken, removeProductCart);

export default router;
