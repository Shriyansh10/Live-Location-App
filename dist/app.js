import express from "express";
import path from "node:path";
const app = express();
app.use(express.static(path.resolve('./public')));
app.get("/health", (req, res) => {
    res.status(200).json({
        message: "ok",
    });
});
export default app;
//# sourceMappingURL=app.js.map