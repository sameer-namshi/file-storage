import express from "express";
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
import config from "./config.js";
const { PORT } = config
import fileController from "./app/file/controllers/index.js"


app.post("/api/file", fileController.post);

app.get("/api/file/:fileName", fileController.get);



app.listen(PORT, () => {
  console.log(`server app listening on port ${PORT}`);
});
