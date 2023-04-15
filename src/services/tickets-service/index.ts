import ticketsRepository from "@/repositories/tickets-repository";


async function getTickets(){
    const tickets = await ticketsRepository.findTickets();
    return tickets
}

const ticketsService = {
    getTickets
};

export default ticketsService;