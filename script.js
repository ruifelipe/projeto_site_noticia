document.addEventListener('DOMContentLoaded', function () {
    // Obtenha uma referência para os elementos da logo e do título
    const logo = document.querySelector('.menu__logo img');
    const title = document.querySelector('#menu__title');

    // Defina um intervalo para alternar a visibilidade
    setInterval(function () {
        // Verifique se a logo está visível
        if (logo.style.display === 'none') {
            // Se estiver oculta, exiba a logo e oculte o título
            logo.style.display = 'block';
            title.style.display = 'none';
        } else {
            // Caso contrário, oculte a logo e exiba o título
            logo.style.display = 'none';
            title.style.display = 'block';
        }
    }, 2000); // Intervalo de 2 segundos (altere conforme necessário)
});

// Adiciona a classe 'menu-open' ao body quando o menu hamburguer é clicado
document.addEventListener('DOMContentLoaded', function () {
    // Adicione um event listener para o clique no botão de hambúrguer
    document.querySelector('.hamburger').addEventListener('click', function () {
        // Alterna a classe 'menu-hidden' na lista de menu ao clicar no botão de hambúrguer
        document.querySelector('.nav').classList.toggle('menu-hidden');
    });

});  