// import expressjs
import express from "express";
import { saveProduct } from "../../RESTfulAPIExpressJS/controllers/productController";
// import controller
import { getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/product.js";

const router = express.Router();

//route get all data di dalam product
router.get('/', getProducts);
//route get single product atau satu data (byId)
router.get('/', getProductById);
//route create product (membuat)
router.post('/', saveProduct);
//route update product
router.patch('/', updateProduct);
//route delete product
router.delete('/', deleteProduct);

//export router
export default router;

