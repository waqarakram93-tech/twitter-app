import "dotenv/config.js";
import express from "express";
import cors from "cors";
import postsRouter from "./routes/postsRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import "./db/test.js";

const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
    const morgan = await import("morgan");
    app.use(morgan.default("dev"));
}
app.use(cors());
app.use(express.json());
app.use("/posts", postsRouter);

app.use(errorHandler);
console.log('app start')
app.listen(port, () => console.log(`Server running on port ${port}`));
