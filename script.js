function abrirCarta() {
    // Encontrando o elemento da carta
    const carta = document.querySelector('.card');
    
    // Alterna a classe 'open' para ativar a animação de virar
    carta.classList.toggle('open');
}
