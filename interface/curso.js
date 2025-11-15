// Dados das matérias
const materiasData = {
    'mat': {
        titulo: 'Matemática',
        descricao: 'Álgebra, geometria, trigonometria e matemática básica para o vestibular',
        duracao: '45 horas',
        totalAulas: 24,
        avaliacao: '4.9/5',
        imagem: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
        modulos: [
            {
                titulo: 'Álgebra Básica',
                aulasq: 6,
                aulas: [
                    { id: 1, titulo: 'Introdução à Álgebra', duracao: '25 min', video: 'https://www.youtube.com/embed/LTx-Jd7pyZ8', descricao: 'Conceitos fundamentais de álgebra e expressões algébricas.' },
                    { id: 2, titulo: 'Equações do 1º Grau', duracao: '30 min', video: 'https://www.youtube.com/embed/0lbhe16At_A', descricao: 'Resolução de equações lineares e problemas.' },
                    { id: 3, titulo: 'Sistemas de Equações', duracao: '35 min', video: 'https://www.youtube.com/embed/DmN535Y2PGw', descricao: 'Métodos de resolução de sistemas lineares.' },
                    { id: 4, titulo: 'Exercícios - Álgebra', duracao: '40 min', video: 'https://www.youtube.com/embed/1I7Dckv0zAU', descricao: 'Problemas práticos de álgebra para vestibular.' },
                    { id: 5, titulo: 'Praticando', duracao: '10 questões', link: '/questions', descricao: 'Teste o seu aprendizado.' }
                ]
            },
            {
                titulo: 'Geometria Plana',
                aulasq: 5,
                aulas: [
                    { id: 5, titulo: 'Ângulos e Triângulos', duracao: '28 min', video: 'https://www.youtube.com/embed/0CnUdzmpO8E', descricao: 'Propriedades fundamentais de ângulos e triângulos.' },
                    { id: 6, titulo: 'Polígonos e Circunferência', duracao: '32 min', video: 'https://www.youtube.com/embed/SRa7sWNT_Yc', descricao: 'Estudo de polígonos regulares e círculos.' }
                ]
            }
        ]
    },
    'fis': {
        titulo: 'Física',
        descricao: 'Mecânica, termodinâmica, óptica e eletromagnetismo',
        duracao: '38 horas',
        totalAulas: 18,
        avaliacao: '4.7/5',
        imagem: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=300&fit=crop',
        modulos: [
            {
                titulo: 'Mecânica Clássica',
                aulasq: 7,
                aulas: [
                    { id: 1, titulo: 'Cinemática - MRU', duracao: '30 min', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', descricao: 'Movimento retilíneo uniforme e suas aplicações.' },
                    { id: 2, titulo: 'Dinâmica - Leis de Newton', duracao: '35 min', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', descricao: 'As três leis de Newton e exemplos práticos.' }
                ]
            }
        ]
    },
    'quim': {
        titulo: 'Química',
        descricao: 'Química geral, orgânica, inorgânica e físico-química',
        duracao: '32 horas',
        totalAulas: 16,
        avaliacao: '4.8/5',
        imagem: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop',
        modulos: []
    },
    'bio': {
        titulo: 'Biologia',
        descricao: 'Biologia celular, genética, ecologia e fisiologia',
        duracao: '40 horas',
        totalAulas: 20,
        avaliacao: '4.6/5',
        imagem: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?w=400&h=300&fit=crop',
        modulos: []
    },
    'hist': {
        titulo: 'História',
        descricao: 'História do Brasil, geral, contemporânea e antiga',
        duracao: '30 horas',
        totalAulas: 15,
        avaliacao: '4.9/5',
        imagem: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
        modulos: []
    },
    'geo': {
        titulo: 'Geografia',
        descricao: 'Geografia humana, física, do Brasil e geral',
        duracao: '28 horas',
        totalAulas: 14,
        avaliacao: '4.7/5',
        imagem: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=300&fit=crop',
        modulos: []
    },
    'port': {
        titulo: 'Português',
        descricao: 'Gramática, interpretação de texto e redação',
        duracao: '44 horas',
        totalAulas: 22,
        avaliacao: '4.8/5',
        imagem: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
        modulos: []
    },
    'lit': {
        titulo: 'Literatura',
        descricao: 'Literatura brasileira, portuguesa e escolas literárias',
        duracao: '24 horas',
        totalAulas: 12,
        avaliacao: '4.5/5',
        imagem: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
        modulos: []
    }
};

// Estado da aplicação
let estado = {
    materiaAtual: null,
    aulaAtual: null,
    aulasCompletas: new Set()
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Obter parâmetro da matéria da URL
    const urlParams = new URLSearchParams(window.location.search);
    const materia = urlParams.get('materia');
    
    if (materia && materiasData[materia]) {
        estado.materiaAtual = materia;
        carregarMateria(materia);
        carregarAulas();
    } else {
        // Redirecionar para seleção de matérias se não houver matéria válida
        window.location.href = '/curso.html';
    }
    
    // Configurar eventos
    configurarEventos();
    
    // Menu hamburger
    const hamburger = document.getElementById('hamburger');
    const navLinks1 = document.getElementById('nav-links1');
    const navLinks2 = document.getElementById('nav-links2');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks1.classList.toggle('active');
            navLinks2.classList.toggle('active');
        });
    }
});

function carregarMateria(materia) {
    const dados = materiasData[materia];
    
    // Atualizar header
    document.getElementById('curso-img').src = dados.imagem;
    document.getElementById('curso-titulo').textContent = dados.titulo;
    document.getElementById('curso-desc').textContent = dados.descricao;
    document.getElementById('curso-duracao').textContent = dados.duracao;
    document.getElementById('curso-aulas').textContent = `${dados.totalAulas} aulas`;
    document.getElementById('curso-avaliacao').textContent = dados.avaliacao;
    
    // Atualizar progresso
    document.getElementById('total-aulas').textContent = `${dados.totalAulas} aulas`;
}

function carregarAulas() {
    const dados = materiasData[estado.materiaAtual];
    const aulasList = document.getElementById('aulas-list');
    
    if (dados.modulos.length === 0) {
        aulasList.innerHTML = '<p style="padding: 20px; text-align: center; color: var(--gray);">Conteúdo em desenvolvimento</p>';
        return;
    }
    
    let html = '';
    
    dados.modulos.forEach((modulo, moduloIndex) => {
        html += `
            <div class="modulo ${moduloIndex === 0 ? 'active' : ''}">
                <div class="modulo-header">
                    <div class="modulo-title">
                        <i class="fas fa-folder"></i>
                        ${modulo.titulo}
                    </div>
                    <div class="modulo-info">${modulo.aulasq} aulas</div>
                </div>
                <div class="modulo-aulas" style="${moduloIndex === 0 ? 'max-height: 1000px;' : ''}">
        `;
        
        modulo.aulas.forEach((aula, aulaIndex) => {
            const isCompleted = estado.aulasCompletas.has(aula.id);
            const isActive = estado.aulaAtual && estado.aulaAtual.id === aula.id;
            
            html += `
                <div class="aula-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                     data-modulo="${moduloIndex}" data-aula="${aulaIndex}">
                    <div class="aula-icon">
                        ${aula.video ? '<i class="fas fa-play"></i>' : '<i class="fas fa-brain"></i>'}
                    </div>
                    <div class="aula-info">
                        <div class="aula-title">${aula.titulo}</div>
                        <div class="aula-meta">
                            <span>${aula.duracao}</span>
                            ${isCompleted ? '<span><i class="fas fa-check"></i> Concluída</span>' : ''}
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `</div></div>`;
    });
    
    aulasList.innerHTML = html;
    
    // Adicionar eventos aos itens de aula
    document.querySelectorAll('.aula-item').forEach(item => {
        item.addEventListener('click', function() {
            const moduloIndex = parseInt(this.getAttribute('data-modulo'));
            const aulaIndex = parseInt(this.getAttribute('data-aula'));
            selecionarAula(moduloIndex, aulaIndex);
        });
    });
    
    // Adicionar eventos aos headers dos módulos
    document.querySelectorAll('.modulo-header').forEach(header => {
        header.addEventListener('click', function() {
            const modulo = this.parentElement;
            modulo.classList.toggle('active');
        });
    });
    
    // Selecionar primeira aula por padrão
    if (dados.modulos.length > 0 && dados.modulos[0].aulas.length > 0) {
        selecionarAula(0, 0);
    }
}

function selecionarAula(moduloIndex, aulaIndex) {
    const dados = materiasData[estado.materiaAtual];
    const aula = dados.modulos[moduloIndex].aulas[aulaIndex];
    
    estado.aulaAtual = aula;
    
    // Atualizar interface
    document.querySelectorAll('.aula-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const aulaElement = document.querySelector(`[data-modulo="${moduloIndex}"][data-aula="${aulaIndex}"]`);
    aulaElement.classList.add('active');
    
    // Atualizar player de mídia
    document.getElementById('media-titulo').textContent = aula.titulo;
    document.getElementById('media-descricao').textContent = aula.descricao;
    
    // Verificar se é uma aula com vídeo ou link para questions
    if (aula.video) {
        // Mostrar vídeo
        document.getElementById('media-placeholder').style.display = 'none';
        document.getElementById('media-iframe').style.display = 'block';
        document.getElementById('media-iframe').src = aula.video;
    } else if (aula.link) {
        // Mostrar placeholder para questions
        document.getElementById('media-placeholder').style.display = 'flex';
        document.getElementById('media-placeholder').innerHTML = `
            <button class="btn-access-questions" style="background: var(--secondary); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: var(--transition);">
                <i class="fas fa-play-circle"></i>
                Iniciar Exercícios
            </button>
        `;
        document.getElementById('media-iframe').style.display = 'none';
        
        // Adicionar evento ao botão
        document.querySelector('.btn-access-questions').addEventListener('click', function() {
            window.location.href = aula.link;
        });
    }
    
    // Atualizar controles de navegação
    atualizarControlesNavegacao(moduloIndex, aulaIndex);
}

function atualizarControlesNavegacao(moduloIndex, aulaIndex) {
    const dados = materiasData[estado.materiaAtual];
    const btnAnterior = document.getElementById('btn-anterior');
    const btnProxima = document.getElementById('btn-proxima');
    
    // Verificar se há aula anterior
    let temAnterior = false;
    if (aulaIndex > 0) {
        temAnterior = true;
    } else if (moduloIndex > 0) {
        const moduloAnterior = dados.modulos[moduloIndex - 1];
        temAnterior = moduloAnterior.aulas.length > 0;
    }
    
    // Verificar se há próxima aula
    let temProxima = false;
    const moduloAtual = dados.modulos[moduloIndex];
    if (aulaIndex < moduloAtual.aulas.length - 1) {
        temProxima = true;
    } else if (moduloIndex < dados.modulos.length - 1) {
        const proximoModulo = dados.modulos[moduloIndex + 1];
        temProxima = proximoModulo.aulas.length > 0;
    }
    
    btnAnterior.disabled = !temAnterior;
    btnProxima.disabled = !temProxima;
}

function configurarEventos() {
    // Botão voltar para matérias
    document.getElementById('btn-voltar-materias').addEventListener('click', function() {
        window.location.href = '/curso.html';
    });
    
    // Controles de navegação
    document.getElementById('btn-anterior').addEventListener('click', function() {
        if (this.disabled) return;
        
        const dados = materiasData[estado.materiaAtual];
        let moduloIndex, aulaIndex;
        
        // Encontrar índice atual
        dados.modulos.forEach((modulo, mIndex) => {
            modulo.aulas.forEach((aula, aIndex) => {
                if (aula.id === estado.aulaAtual.id) {
                    moduloIndex = mIndex;
                    aulaIndex = aIndex;
                }
            });
        });
        
        // Navegar para aula anterior
        if (aulaIndex > 0) {
            selecionarAula(moduloIndex, aulaIndex - 1);
        } else if (moduloIndex > 0) {
            const moduloAnterior = dados.modulos[moduloIndex - 1];
            selecionarAula(moduloIndex - 1, moduloAnterior.aulas.length - 1);
        }
    });
    
    document.getElementById('btn-proxima').addEventListener('click', function() {
        if (this.disabled) return;
        
        const dados = materiasData[estado.materiaAtual];
        let moduloIndex, aulaIndex;
        
        // Encontrar índice atual
        dados.modulos.forEach((modulo, mIndex) => {
            modulo.aulas.forEach((aula, aIndex) => {
                if (aula.id === estado.aulaAtual.id) {
                    moduloIndex = mIndex;
                    aulaIndex = aIndex;
                }
            });
        });
        
        // Navegar para próxima aula
        const moduloAtual = dados.modulos[moduloIndex];
        if (aulaIndex < moduloAtual.aulas.length - 1) {
            selecionarAula(moduloIndex, aulaIndex + 1);
        } else if (moduloIndex < dados.modulos.length - 1) {
            selecionarAula(moduloIndex + 1, 0);
        }
    });
    
    // Marcar aula como concluída quando o vídeo terminar
    document.getElementById('media-iframe').addEventListener('load', function() {
        // Em uma implementação real, você usaria a API do YouTube ou Vimeo
        // para detectar quando o vídeo termina
        console.log('Vídeo carregado - em uma implementação real, adicione eventos de conclusão aqui');
    });
}