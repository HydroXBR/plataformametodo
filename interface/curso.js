document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const cursos = await fetch("./cursos.json").then(res => res.json());
  const cursoData = cursos.find(curso => curso.id === id);

  if (!cursoData) {
    document.querySelector("#media-section").innerHTML = "<p>Curso não encontrado.</p>";
    return;
  }

  document.querySelector("#curso-img").src = cursoData.imagem;
  document.querySelector("#curso-titulo").textContent = cursoData.titulo;
  document.querySelector("#curso-desc").textContent = cursoData.descricao;

  document.querySelector("#curso-duracao").textContent = cursoData.duracao || "Carregando...";
  document.querySelector("#curso-aulas").textContent = `${cursoData.content.length} aulas`;
  document.querySelector("#curso-avaliacao").textContent = cursoData.avaliacao || "5";

  document.querySelector("#btn-voltar").addEventListener("click", () => {
    window.location.href = "/cursostecnicos";
  });

  renderizarAulas(cursoData.content);

  configurarControlesNavegacao(cursoData.content);

  if (cursoData.content.length > 0) {
    carregarAula(cursoData.content[0], 0);
  }
});

function renderizarAulas(aulas) {
  const aulasList = document.querySelector("#aulas-list");
  const totalAulas = document.querySelector("#total-aulas");

  totalAulas.textContent = `${aulas.length} aulas`;

  const modulos = {};
  aulas.forEach((aula, index) => {
    const modulo = aula.modulo || "Módulo Principal";
    if (!modulos[modulo]) {
      modulos[modulo] = [];
    }
    modulos[modulo].push({ ...aula, index });
  });

  aulasList.innerHTML = '';
  Object.keys(modulos).forEach((moduloNome, moduloIndex) => {
    const moduloDiv = document.createElement('div');
    moduloDiv.className = 'modulo active';

    const aulasNoModulo = modulos[moduloNome];
    const aulasConcluidas = aulasNoModulo.filter(a => a.concluida).length;

    moduloDiv.innerHTML = `
            <div class="modulo-header">
                <div class="modulo-title">
                    <i class="fas fa-chevron-down"></i>
                    ${moduloNome}
                </div>
                <div class="modulo-info">${aulasConcluidas}/${aulasNoModulo.length} aulas</div>
            </div>
            <div class="modulo-aulas">
                ${aulasNoModulo.map(aula => `
                    <div class="aula-item ${aula.concluida ? 'completed' : ''}" data-index="${aula.index}">
                        <div class="aula-icon">
                            <i class="fas fa-${aula.type === 'video' ? 'play' : 'file-pdf'}"></i>
                        </div>
                        <div class="aula-info">
                            <div class="aula-title">${aula.title}</div>
                            <div class="aula-meta">
                                ${aula.concluida ? '<span><i class="fas fa-check"></i> Concluída</span>' : ''}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

    aulasList.appendChild(moduloDiv);

    const moduloHeader = moduloDiv.querySelector('.modulo-header');
    moduloHeader.addEventListener('click', function () {
      const modulo = this.parentElement;
      const icon = this.querySelector('i');

      modulo.classList.toggle('active');

      if (modulo.classList.contains('active')) {
        icon.className = 'fas fa-chevron-down';
      } else {
        icon.className = 'fas fa-chevron-right';
      }
    });

    moduloDiv.querySelectorAll('.aula-item').forEach(item => {
      item.addEventListener('click', function () {
        const index = parseInt(this.getAttribute('data-index'));
        carregarAula(aulas[index], index);
      });
    });
  });

  atualizarProgresso(aulas);
}

function carregarAula(aula, index) {
  document.querySelectorAll('.aula-item').forEach(item => {
    item.classList.remove('active');
  });

  const aulaAtual = document.querySelector(`.aula-item[data-index="${index}"]`);
  if (aulaAtual) {
    aulaAtual.classList.add('active');

    const modulo = aulaAtual.closest('.modulo');
    if (modulo && !modulo.classList.contains('active')) {
      modulo.classList.add('active');
      modulo.querySelector('.modulo-header i').className = 'fas fa-chevron-down';
    }
  }

  const mediaTitulo = document.querySelector("#media-titulo");
  const mediaDescricao = document.querySelector("#media-descricao");
  const mediaIframe = document.querySelector("#media-iframe");
  const mediaPlaceholder = document.querySelector("#media-placeholder");

  mediaTitulo.textContent = aula.title;
  mediaDescricao.textContent = aula.desc || "Esta aula não possui descrição detalhada.";

  if (aula.media) {
    mediaPlaceholder.style.display = 'none';
    mediaIframe.style.display = 'block';

    if (aula.type === "video") {
      let videoUrl = aula.media;
      if (aula.media.includes('youtube.com') || aula.media.includes('youtu.be')) {
        const videoId = extrairIdYouTube(aula.media);
        videoUrl = `https://www.youtube.com/embed/${videoId}`;
      }
      mediaIframe.src = videoUrl;
      mediaIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      mediaIframe.allowFullscreen = true;
    } else {
      // Para PDFs
      mediaIframe.src = aula.media;
      mediaIframe.allowFullscreen = true;
    }
  } else {
    mediaPlaceholder.style.display = 'flex';
    mediaIframe.style.display = 'none';
  }

  window.aulaAtualIndex = index;
}

function extrairIdYouTube(url) {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function configurarControlesNavegacao(aulas) {
  const btnAnterior = document.querySelector("#btn-anterior");
  const btnProxima = document.querySelector("#btn-proxima");

  btnAnterior.addEventListener('click', () => {
    if (window.aulaAtualIndex > 0) {
      carregarAula(aulas[window.aulaAtualIndex - 1], window.aulaAtualIndex - 1);
    }
  });

  btnProxima.addEventListener('click', () => {
    if (window.aulaAtualIndex < aulas.length - 1) {
      carregarAula(aulas[window.aulaAtualIndex + 1], window.aulaAtualIndex + 1);
    }
  });
}

function atualizarProgresso(aulas) {
  const aulasConcluidas = aulas.filter(aula => aula.concluida).length;
  const progresso = (aulasConcluidas / aulas.length) * 100;

  document.querySelector("#progress-bar").style.width = `${progresso}%`;
  document.querySelector("#progress-text").textContent = `${Math.round(progresso)}% concluído`;
}