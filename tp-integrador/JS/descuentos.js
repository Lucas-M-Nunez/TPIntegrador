const btnResumen = document.getElementById('btnResumen');
const spanTotal = document.getElementById('total');

const valorTicket = 200;

const aplicarDescuento = () => {
    const cantidad = document.getElementById('cantidad').value;
    const categoria = document.getElementById('categoria').value;

    let seleccionCategoria = categoria.toLowerCase();
    
    if (seleccionCategoria === 'estudiante') {
        
        let totalDeTickets = valorTicket * cantidad;
        let descEstudiante = 160;
        let descuentoTotal = descEstudiante * cantidad;
        let totalAPagar = totalDeTickets - descuentoTotal;

        spanTotal.innerHTML = `${totalAPagar}`;

    } else if (seleccionCategoria === 'trainee') {

        let totalDeTickets = valorTicket * cantidad;
        let descEstudiante = 100;
        let descuentoTotal = descEstudiante * cantidad;
        let totalAPagar = totalDeTickets - descuentoTotal;

        spanTotal.innerHTML = `${totalAPagar}`;
        
    } else if (seleccionCategoria === 'junior') {

        let totalDeTickets = valorTicket * cantidad;
        let descEstudiante = 30;
        let descuentoTotal = descEstudiante * cantidad;
        let totalAPagar = totalDeTickets - descuentoTotal;

        spanTotal.innerHTML = `${totalAPagar}`;
    }
}

btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    aplicarDescuento();
});