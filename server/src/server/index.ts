import express from "express"
import cors from "cors";
import compression from "compression";
import router from "@root/routes";
import mongoose from "mongoose";
import verifyAppKeyMiddleware from "@root/middlewares/verifyAppKeyMiddleware";

const app = express();
mongoose.connect("mongodb://localhost/test",{
    useNewUrlParser : true,
    useUnifiedTopology: true
});

app.use(cors())
app.use(compression())
app.disabled("x-powered-by");
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1",verifyAppKeyMiddleware,router);

const server = app;
export default server;