const express = require("express");
const apiRouter = express.Router();
const projectApi = require("../controllers/project.controller");

apiRouter.get('/', projectApi.getProjectApi)

module.exports = apiRouter;