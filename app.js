import express from "express";
import morgan from "morgan";
//express middleware -logging 위한것
import helmet from "helmet";
//express middleware -보안 위한것
import cookeParser from "cookie-parser";
//express middleware -cookie에 유저정보 저장
import bodyParser from "body-parser";
//express middleware -body로 부터 정보를 얻을 수 있게 해주는 것?
//서버가 유저로부터 받은 데이터를 이해하는 방법???
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookeParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//지금은 뭐하는건지 잘 모르겠지만 나중에 앱을 만들다가 여기와서 이걸 지워보면 이게 어떤 애들인지 알 수 있을거야
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
