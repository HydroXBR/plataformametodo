async function carregarCursos() {
  try {
    const response = await fetch('./cursos.json');
    if (!response.ok) throw new Error('Erro ao carregar o JSON');

    const lista = await response.json();
    const container = document.getElementById('course-container');
    const emptyState = document.getElementById('empty-state');
    const matriculados = JSON.parse(localStorage.getItem('matriculas')) || [];
    const mtnumber = []
    for (var i = 0; i < matriculados.length; i++) { mtnumber.push(Number(matriculados[i])) }
    const idsPermitidos = [4512, 4513, ...mtnumber];

    console.log(lista, idsPermitidos)

    const todosCursos = Object.values(lista).flat();
    const cursosFiltrados = todosCursos.filter(curso => idsPermitidos.includes(curso.id));

    container.innerHTML = '';

    if (cursosFiltrados.length === 0) {
      container.style.display = 'none';
      emptyState.style.display = 'block';
      return;
    }

    document.getElementById('cursos-andamento').textContent = cursosFiltrados.length;
    document.getElementById('cursos-concluidos').textContent = '0';
    document.getElementById('horas-estudo').textContent = '12h';

    cursosFiltrados.forEach(curso => {
      const card = document.createElement('div');
      card.classList.add('course-card');
      card.innerHTML = `
    <div class="course-image">
        <img src="${curso.imagem || 'https://via.placeholder.com/400x200?text=Curso'}" alt="${curso.titulo}">
        <div class="course-category">${curso.categoria || 'Geral'}</div>
      
    </div>
    <div class="course-content">
        <h3 class="course-title">${curso.titulo}</h3>
        <p class="course-description">${curso.descricao || 'Sem descrição disponível.'}</p>
        <div class="course-meta">
            <div class="meta-item">
                <i class="far fa-clock"></i>
                <span>${curso.duracao || '12 horas'}</span>
            </div>
            <div class="meta-item">
                <i class="far fa-play-circle"></i>
                <span>${curso.aulas || '15'} aulas</span>
            </div>
        </div>
        <div class="course-actions">
            <button class="btn-continue" onclick="window.location.href='curso.html?id=${curso.id}'">
                <i class="fas fa-play"></i>
                Continuar
            </button>
            <button class="btn-outline" onclick="window.location.href='curso.html?id=${curso.id}'">
                <i class="fas fa-info-circle"></i>
                Detalhes
            </button>
        </div>
    </div>
`;

      container.appendChild(card);
    });
  } catch (erro) {
    console.error('Erro ao carregar cursos:', erro);
    document.getElementById('course-container').innerHTML = `
                    <div class="error-state">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h3>Erro ao carregar cursos</h3>
                        <p>Tente recarregar a página ou entre em contato com o suporte.</p>
                    </div>
                `;
  }
}

// Inicializar
document.addEventListener('DOMContentLoaded', function () {
  carregarCursos();

  // Alternar entre visualização em grid e lista
  const viewButtons = document.querySelectorAll('.view-btn');
  const courseList = document.querySelector('.course-list');

  viewButtons.forEach(button => {
    button.addEventListener('click', function () {
      viewButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      if (this.dataset.view === 'grid') {
        courseList.classList.remove('list-view');
        courseList.classList.add('grid-view');
      } else {
        courseList.classList.remove('grid-view');
        courseList.classList.add('list-view');
      }
    });
  });
});