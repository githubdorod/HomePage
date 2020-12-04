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
    edujogos: document.querySelector('#edujogos'),
    portfolio: document.querySelector('#portfolio'),
    contato: document.querySelector('#contato'),
    footer: document.querySelector('#footer'), // NÃO ESTÁ EM USO
    homeTexto: document.querySelector('#homeTexto'),
    sobreTexto: document.querySelector('#sobreTexto'),
    edujogosTexto: document.querySelector('#edujogosTexto'),
    portfolioTexto: document.querySelector('#portfolioTexto'),
    contatoTexto: document.querySelector('#contatoTexto'),
    conteudo: document.querySelector('#conteudo'),

    selectHome: function () {
        Texto.homeTexto.style.display = "block";
        Texto.sobreTexto.style.display = "none";
        Texto.edujogosTexto.style.display = "none";
        Texto.portfolioTexto.style.display = "none";
        Texto.contatoTexto.style.display = "none";
    },

    selectSobre: function () {
        Texto.homeTexto.style.display = "none";
        Texto.sobreTexto.style.display = "block";
        Texto.edujogosTexto.style.display = "none";
        Texto.portfolioTexto.style.display = "none";
        Texto.contatoTexto.style.display = "none";
    },

    selectEdujogos: function () {
        Texto.homeTexto.style.display = "none";
        Texto.sobreTexto.style.display = "none";
        Texto.edujogosTexto.style.display = "block";
        Texto.portfolioTexto.style.display = "none";
        Texto.contatoTexto.style.display = "none";
    },

    selectPortfolio: function () {
        Texto.homeTexto.style.display = "none";
        Texto.sobreTexto.style.display = "none";
        Texto.edujogosTexto.style.display = "none";
        Texto.portfolioTexto.style.display = "inline";
        Texto.contatoTexto.style.display = "none";
    },

    selectContato: function () {
        Texto.homeTexto.style.display = "none";
        Texto.sobreTexto.style.display = "none";
        Texto.edujogosTexto.style.display = "none";
        Texto.portfolioTexto.style.display = "none";
        Texto.contatoTexto.style.display = "block";
    },

    run: function () {
        this.home.addEventListener('click', this.selectHome);
        this.sobre.addEventListener('click', this.selectSobre);
        this.edujogos.addEventListener('click', this.selectEdujogos);
        this.portfolio.addEventListener('click', this.selectPortfolio);
        this.contato.addEventListener('click', this.selectContato);
    },
}

Texto.run();
