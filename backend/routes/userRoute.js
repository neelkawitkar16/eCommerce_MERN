const express = require("express")
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, deleteUser } = require("../controllers/userController")
const router = express.Router()
const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth")

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/password/forgot").post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword)
router.route("/logout").get(logoutUser)
router.route("/me").get(isAuthenticatedUser, getUserDetails)
router.route("/password/update").put(isAuthenticatedUser, updatePassword)
router.route("/me/update").put(isAuthenticatedUser, updateProfile)
router.route("/admin/users").get(isAuthenticatedUser, authorizedRoles("admin"), getAllUser)
router.route("/admin/user/:id").get(isAuthenticatedUser, authorizedRoles("admin"), getSingleUser)
router.route("/admin/user/:id").put(isAuthenticatedUser, authorizedRoles("admin"), updateUserRole)
router.route("/admin/user/:id").delete(isAuthenticatedUser, authorizedRoles("admin"), deleteUser)

module.exports = router