import express from "express";
import TEST_ROUTES from "./routes/test-routes";

const ROUTES = express();
ROUTES.use(TEST_ROUTES);
export default ROUTES;