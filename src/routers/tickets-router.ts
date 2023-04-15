import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const ticketsRouter = Router()

ticketsRouter
    .all('/*', authenticateToken)
    .get('/types', )
    .get('/')
    .post('/')

export { ticketsRouter }