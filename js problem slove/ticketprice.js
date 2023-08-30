
function totalPrice(ticketNumber) {
    let first100Ticket = 100;
    let scound100Ticket = 80;
    let restTicket = 60;
    let totalPrice = 0;
    if (ticketNumber <= 100) {
        ticketPrice = ticketNumber * first100Ticket;
        totalPrice = ticketPrice;
    }else if (ticketNumber > 100 && ticketNumber <=200) {
        first100TicketPrice = 100 * first100Ticket;
        scound100TicketPrice = (ticketNumber-100) * scound100Ticket;
        ticketPrice = (first100TicketPrice + scound100TicketPrice);
        totalPrice = ticketPrice;
    }else{
        first100TicketPrice = 100 * first100Ticket;
        scound100TicketPrice =100* scound100Ticket;
        restTicketPrice = (ticketNumber-200) * restTicket;
        ticketPrice = (first100TicketPrice+scound100TicketPrice+restTicketPrice);
        totalPrice = ticketPrice;
    }
    return totalPrice;
}
let ticketNumber = 101;
let totalTicketPrice = totalPrice(ticketNumber)
console.log(totalTicketPrice)
// ticketprice.js