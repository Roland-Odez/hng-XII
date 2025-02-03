import express, { Request, RequestHandler, Response } from "express";
import { setupSwagger } from "./swagger";
// import { VercelRequest, VercelResponse } from "@vercel/node";

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

setupSwagger(app);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get user info
 *     description: Returns the email, current date-time, and GitHub URL.
 *     responses:
 *       200:
 *         description: Successfully returns user info.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: "breezyroland@gmail.com"
 *                 current_datetime:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-01-30T12:00:00.000Z"
 *                 github_url:
 *                   type: string
 *                   example: "https://github.com/yourusername"
 */

app.get("/", (req: Request, res: Response) => {
    const email = 'breezyroland@gmail.com';
    const current_datetime = new Date().toISOString();
    const github_url = 'https://github.com/Roland-Odez/hng-XII/tree/main/task-0/backend'; // You can update with your actual GitHub URL

    res.status(200).json({
        email,
        current_datetime,
        github_url
    });
});

// 404 handler
// app.use("*", (req: Request, res: Response) => {
//     res.status(404).json({ error: "Not found!" });
// });

app.listen(3000, () => console.log("Server ready on port 3000."));

// 🚀 Export the function for Vercel
module.exports = app;