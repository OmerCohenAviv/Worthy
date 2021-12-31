const { Router } = require("express");
const calculateDiamond = require("../controllers/diamonds/calculate-diamond");

const DiamondRouter = Router();

DiamondRouter.get("/calculate", calculateDiamond);

module.exports = DiamondRouter;
