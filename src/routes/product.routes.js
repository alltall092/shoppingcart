const { Router } = require("express");
const { getProductAlls,postProduct, agregarProducts,getCartAlls,realizarCompras,getOrderAlls } = require("../controllers");
const authenticate = require("../middlewares/auth.middleware");
const router = Router();
/**
 * @openapi
 * /api/v1/product:
 *   post:
 *     tags:
 *       - Product
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                    
 *                   items:
 *                     $ref: "#/components/schemas/Product"
 *
 */
/**
 * @openapi
 * /api/v1/product:
 *   get:
 *     tags:
 *       - Product
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                    
 *                   items:
 *                     $ref: "#/components/schemas/Product"
 *
 */
/**
 * @openapi
 * /api/v1/cart:
 *   post:
 *     tags:
 *       - Cart
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                    
 *                   items:
 *                     $ref: "#/components/schemas/Cart"
 *
 */
/**
 * @openapi
 * /api/v1/cart:
 *   get:
 *     tags:
 *       - Cart
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                    
 *                   items:
 *                     $ref: "#/components/schemas/Cart"
 *
 */
/**
 * @openapi
 * /api/v1/compra:
 *   post:
 *     tags:
 *       - Cart
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                    
 *                   items:
 *                     $ref: "#/components/schemas/Cart"
 * 
 *
 */
/**
 * @openapi
 * /api/v1/order:
 *   get:
 *     tags:
 *       - Order
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                    
 *                   items:
 *                     $ref: "#/components/schemas/order"
 *
 */
router.get("/product",getProductAlls);
router.post("/product",postProduct);
router.post("/cart", agregarProducts)
router.get("/cart",getCartAlls);
router.post("/compra",realizarCompras);
router.get("/order",getOrderAlls);
module.exports = router;