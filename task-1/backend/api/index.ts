import express, { RequestHandler, Response, Request } from "express";
import { digit_sum, is_perfect, is_Prime, properties } from "./func";

const app = express();
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


app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/classify-number", async (req: Request, res: Response): Promise<void> => {
    const { number } = req.query;
    const num = Number(number);

    if (!number) {
        res.status(400).json({ number: "Number is required!", error: true });
        return;
    }

    if (isNaN(num)) {
        res.status(400).json({ number: "alphabet", error: true });
        return;
    }

    try {
        // Run all number classification functions in parallel
        const [primeStatus, perfectStatus, numProperties, sumOfDigits, funFact] = await Promise.all([
            is_Prime(num),
            is_perfect(num),
            properties(num),
            digit_sum(num),
            fetch(`http://numbersapi.com/${num}`).then(res => res.text()).catch(() => "No fact available.")
        ]);

        res.status(200).json({
            number: num,
            is_Prime: primeStatus,
            is_perfect: perfectStatus,
            properties: numProperties,
            digit_sum: sumOfDigits,
            fun_fact: funFact
        });
        return;

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        return;
    }
});

// 404 handler
app.use("*", (req: Request, res: Response) => {
    res.status(404).json({ error: "Not found!" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));
