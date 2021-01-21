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
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

const handleHome = (req, res) => res.send("Hellow from Home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookeParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//지금은 뭐하는건지 잘 모르겠지만 나중에 앱을 만들다가 여기와서 이걸 지워보면 이게 어떤 애들인지 알 수 있을거야
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
