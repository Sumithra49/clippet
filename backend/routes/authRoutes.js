const express = require("express");
const {
  register,
  login,
  listUsers,
  updateUser,
  deleteUser,
} = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", listUsers);
router.put("/update", updateUser);
router.delete("/delete", deleteUser);

module.exports = router;
