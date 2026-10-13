// Seleciona todas as seções de temas da página
const temas = document.querySelectorAll('.tema');

temas.forEach(tema => {
    // Busca o carrossel e os botões dentro deste tema específico
    const container = tema.querySelector('.carousel-container');
    const prevBtn = tema.querySelector('.prev-btn');
    const nextBtn = tema.querySelector('.next-btn');

    if (!container) return;

    // Função que calcula o tamanho do card + o espaçamento (gap)
    const getScrollAmount = () => {
        const card = container.querySelector('.card');
        if (!card) return container.clientWidth;
        
        // Pega o estilo aplicado para extrair a distância do gap no CSS
        const gap = parseFloat(window.getComputedStyle(container).gap) || 0;
        return card.offsetWidth + gap;
    };

    // Clique no botão Voltar (<)
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            container.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });
    }

    // Clique no botão Avançar (>)
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            container.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });
    }
});