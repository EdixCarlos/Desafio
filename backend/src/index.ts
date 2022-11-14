import { ProductQueries } from './querys/Product.query';
/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { productsRouter } from "./products/products.router";
import * as MySQLConnector from './mysql.connector';
import fs from "fs"
import https from "https"
import path from 'path'
dotenv.config();
MySQLConnector.init();
/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
/**
 *  App Configuration
 */
https.createServer({
  cert: fs.readFileSync(path.join(__dirname,'cert.cert')),
  key: fs.readFileSync(path.join(__dirname,'key.key')),
},app).listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/products", productsRouter);
app.use("/api/category", productsRouter);
/**
 * Server Activation
 */

