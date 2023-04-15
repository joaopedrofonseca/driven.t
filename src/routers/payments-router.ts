import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const paymentsRouter = Router();

paymentsRouter
    .all('/*', authenticateToken)
    .get('/') //receberá uma query no service ?ticketId=1
    .post('process')

export { paymentsRouter }