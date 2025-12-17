document.addEventListener('DOMContentLoaded', function() {

    //cria uma caixa para selecionar todos os "nav a" e o outro todas as tags com classe .sessao
    const navLinks = document.querySelectorAll('a.nav-link');
    const pages = document.querySelectorAll('.sessao')

    //para cada vez que um link (navlinks) for clicado, faça...
    navLinks.forEach(link => {
        link.addEventListener('click', function(e){

        // a. Impede o recarregamento da página
        e.preventDefault();

        // pega o ID da página alvo (ex: "about")
        const targetPageId = link.getAttribute('data-page');
        const targetPage = document.getElementById(targetPageId);

        if (targetPage) {
            // esconde todas as páginas
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // remove active de todos os links do menu
            navLinks.forEach(nav => {
                nav.classList.remove('active');
            });

            // mostra a página alvo (como se "acendesse" a luz)
            targetPage.classList.add('active');

            // marca o link do menu como ativo (sublinhado)
            // const activeNavLink = document.querySelector(`nav a[data-page="${targetPageId}"]`);
            // if(activeNavLink) {
            //     activeNavLink.classList.add('active');
            //}
}

        })
    })
})



