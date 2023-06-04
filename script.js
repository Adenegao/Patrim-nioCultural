// Selecionar os elementos de navegação
const sections = document.querySelectorAll('.section-description');
const navItems = document.querySelectorAll('.example-list-item');
const images = document.querySelectorAll('img');

// Adicionar eventos de clique aos itens de navegação
navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Remover a classe 'active' de todos os itens de navegação
    navItems.forEach((navItem) => {
      navItem.classList.remove('active');
    });

    // Adicionar a classe 'active' ao item de navegação clicado
    item.classList.add('active');

    // Rolar para a seção correspondente ao item clicado
    sections[index].scrollIntoView({ behavior: 'smooth' });
  });
});

// Adicionar evento de clique às imagens para voltar ao início da página
images.forEach((image) => {
  image.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
