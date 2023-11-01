const btnBuyTickets = document.getElementById('buyTickets');
const btnCarroucelBuyTickets = document.getElementById('buyTicketsCarroucel');
const sectionCarrucel = document.getElementById('carouselExampleInterval');
const sectionOradores = document.getElementById('Oradores');
const sectionBsAs = document.getElementById('Bs-As');
const sectionConvierteteEnOrador = document.getElementById('conviertete-en-Orador');
const sectionCompraTickets = document.getElementById('CompraTickets');

const navConferencia = document.getElementById('Conferencia');
const navLosOradores = document.getElementById('losOradores');
const navLugarYFecha = document.getElementById('lugarYFecha');
const navConviertete = document.getElementById('Conviertete');

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
});


navConferencia.addEventListener('click', (e) => {
    e.preventDefault();
    sectionCarrucel.classList.remove('inactive');
    sectionOradores.classList.remove('inactive');
    sectionBsAs.classList.remove('inactive');
    sectionConvierteteEnOrador.classList.remove('inactive');
    sectionCompraTickets.classList.add('inactive');
});

navLosOradores.addEventListener('click', (e) => {
    e.preventDefault();
    sectionCarrucel.classList.remove('inactive');
    sectionOradores.classList.remove('inactive');
    sectionBsAs.classList.remove('inactive');
    sectionConvierteteEnOrador.classList.remove('inactive');
    sectionCompraTickets.classList.add('inactive');
});

navLugarYFecha.addEventListener('click', (e) => {
    e.preventDefault();
    sectionCarrucel.classList.remove('inactive');
    sectionOradores.classList.remove('inactive');
    sectionBsAs.classList.remove('inactive');
    sectionConvierteteEnOrador.classList.remove('inactive');
    sectionCompraTickets.classList.add('inactive');
});

navConviertete.addEventListener('click', (e) => {
    e.preventDefault();
    sectionCarrucel.classList.remove('inactive');
    sectionOradores.classList.remove('inactive');
    sectionBsAs.classList.remove('inactive');
    sectionConvierteteEnOrador.classList.remove('inactive');
    sectionCompraTickets.classList.add('inactive');
});