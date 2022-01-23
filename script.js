const buscarInput = document.getElementsByClassName('buscar-input')[0];
const buscarIcone = document.getElementsByClassName('buscar-icone')[0];

buscarInput.addEventListener('focusin', () => {
    buscarIcone.style['color'] = '#7856FF';
});

buscarInput.addEventListener('focusout', () => {
    buscarIcone.style['color'] = '#969696';
});