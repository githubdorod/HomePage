const SideBar = {
    menu: document.querySelector('#menu'),
    links: document.querySelector('#links'),
    fecha: document.querySelector('#fecha'),
    foto: document.querySelector('#foto'),

    open: function () {
        SideBar.links.style.display = "inline";
    },

    close: function () {
        SideBar.links.style.display = "none";
    },

    init: function () {
        this.menu.addEventListener('click', this.open);
        this.fecha.addEventListener('click', this.close);
        this.foto.addEventListener('click', this.close);
    },
}

SideBar.init();

const Texto = {
    home: document.querySelector('#home'),
    sobre: document.querySelector('#sobre'),
    edudev: document.querySelector('#edudev'),
    portfolio: document.querySelector('#portfolio'),
    contato: document.querySelector('#contato'),
    footer: document.querySelector('#footer'),
    homeTexto: document.querySelector('#homeTexto'),
    sobreTexto: document.querySelector('#sobreTexto'),
    edudevTexto: document.querySelector('#edudevTexto'),
    portfolioTexto: document.querySelector('#portfolioTexto'),
    contatoTexto: document.querySelector('#contatoTexto'),
    conteudo: document.querySelector('#conteudo'),

    selectHome: function () {
        Texto.homeTexto.style.display = "block";
        Texto.sobreTexto.style.display = "none";
        Texto.edudevTexto.style.display = "none";
        Texto.portfolioTexto.style.display = "none";
        Texto.contatoTexto.style.display = "none";
    },

    selectSobre: function () {
        Texto.homeTexto.style.display = "none";
        Texto.sobreTexto.style.display = "block";
        Texto.edudevTexto.style.display = "none";
        Texto.portfolioTexto.style.display = "none";
        Texto.contatoTexto.style.display = "none";
    },

    selectEdudev: function () {
        Texto.homeTexto.style.display = "none";
        Texto.sobreTexto.style.display = "none";
        Texto.edudevTexto.style.display = "block";
        Texto.portfolioTexto.style.display = "none";
        Texto.contatoTexto.style.display = "none";
    },

    selectPortfolio: function () {
        Texto.homeTexto.style.display = "none";
        Texto.sobreTexto.style.display = "none";
        Texto.edudevTexto.style.display = "none";
        Texto.portfolioTexto.style.display = "inline";
        Texto.contatoTexto.style.display = "none";
        Texto.footer.style.position = "relative";
    },

    selectContato: function () {
        Texto.homeTexto.style.display = "none";
        Texto.sobreTexto.style.display = "none";
        Texto.edudevTexto.style.display = "none";
        Texto.portfolioTexto.style.display = "none";
        Texto.contatoTexto.style.display = "block";
    },

    run: function () {
        this.home.addEventListener('click', this.selectHome);
        this.sobre.addEventListener('click', this.selectSobre);
        this.edudev.addEventListener('click', this.selectEdudev);
        this.portfolio.addEventListener('click', this.selectPortfolio);
        this.contato.addEventListener('click', this.selectContato);
    },
}

Texto.run();
