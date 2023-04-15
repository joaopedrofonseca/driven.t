import { prisma } from '@/config';
import { TicketType } from '@prisma/client';

async function findTickets() {
    const ticketypes = await prisma.ticketType.findMany()
    return ticketypes
}

const ticketsRepository = {
    findTickets,
}

export default ticketsRepository