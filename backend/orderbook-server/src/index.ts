import express  from "express";
import {OrderInputSchema} from './types'
import { bookWithQuantity, orderbooks } from "./orderbook";
import { Postorder } from "./routes/Postorder";


const BASE_ASSET="BTC";
const QUOTE_ASSET="USD";

const app = express();
app.use(express.json());

app.post("/api/v1/order",Postorder);