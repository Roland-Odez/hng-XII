import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Roland's Profile API",
      version: "1.0.0",
      description: "A simple Express API To get Roland's Profile details",
    },
    servers: [
      {
        url: "https://backend-task-0.vercel.app/",
        description: "Online Server",
      },
    ],
  },
  apis: ["./src/*.ts"], // Path to API routes (modify if needed)
};

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, { customCssUrl: CSS_URL }));
};
