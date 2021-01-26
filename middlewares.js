import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "MunTube";
  res.locals.routes = routes;
  next();
};
