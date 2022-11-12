const express = require("express")
const { 
  getAllProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct, 
  getProductDetails, 
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts
} = require("../controllers/productController")

const router = express.Router()

const {isAuthenticatedUser, authorizedRoles} = require("../middleware/auth")

router.route("/products").get(getAllProducts)
router.route("/admin/products").get(isAuthenticatedUser, authorizedRoles("admin"), getAdminProducts)
router.route("/product/:id").get(getProductDetails)
router.route("/admin/product/new").post(isAuthenticatedUser, authorizedRoles("admin"), createProduct)
router.route("/admin/product/:id").put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct)
router.route("/admin/product/:id").delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct)
router.route("/review").put(isAuthenticatedUser, createProductReview)
router.route("/reviews").get(getProductReviews)
router.route("/reviews").delete(isAuthenticatedUser, deleteReview)

module.exports = router