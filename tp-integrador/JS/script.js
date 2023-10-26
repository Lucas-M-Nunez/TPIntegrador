const btnBuyTickets = document.getElementById('buyTickets');
const btnCarroucelBuyTickets = document.getElementById('buyTicketsCarroucel');
const sectionCarrucel = document.getElementById('carouselExampleInterval');
const sectionOradores = document.getElementById('Oradores');
const sectionBsAs = document.getElementById('Bs-As');
const sectionConvierteteEnOrador = document.getElementById('conviertete-en-Orador');
const sectionCompraTickets = document.getElementById('CompraTickets');

btnBuyTickets.addEventListener('click', (e) => {
    e.preventDefault();

    sectionCarrucel.classList.add('inactive');
    sectionOradores.classList.add('inactive');
    sectionBsAs.classList.add('inactive');
    sectionConvierteteEnOrador.classList.add('inactive');
    sectionCompraTickets.classList.remove('inactive');
});

btnCarroucelBuyTickets.addEventListener('click', (e) => {
    e.preventDefault();

    sectionCarrucel.classList.add('inactive');
    sectionOradores.classList.add('inactive');
    sectionBsAs.classList.add('inactive');
    sectionConvierteteEnOrador.classList.add('inactive');
    sectionCompraTickets.classList.remove('inactive');
})



