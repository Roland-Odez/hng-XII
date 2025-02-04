import express, { Request, RequestHandler, Response } from "express";
import { digit_sum, is_perfect, is_Prime, properties } from "./func";

const app = express();

// CORS middleware
const corsMiddleware: RequestHandler = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

    // Handle Preflight Request
    if (req.method === "OPTIONS") {
        res.sendStatus(204);
        return;
    }

    next();
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware);

app.get("/api/classify-number", async (req: Request, res: Response) => {
    const { number } = req.query;

    if (!number) {
        res.status(400).json({  number: "Number is required!", error: true });
    }else if(isNaN(Number(number))){
        res.status(400).json({  number: "alphabet", error: true });
    }else{
        const fun_fact = await fetch(`http://numbersapi.com/${number}`)
        .then(res => res.text())
        res.status(200).json({
            number: Number(number),
            is_Prime: is_Prime(Number(number)),
            is_perfect: is_perfect(Number(number)),
            properties: properties(Number(number)),
            digit_sum: digit_sum(Number(number)),
            fun_fact
        });

    }
});

// 404 handler
app.use("*", (req: Request, res: Response) => {
    res.status(404).json({ error: "Not found!" });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

// 🚀 Export the function for Vercel
module.exports = app;