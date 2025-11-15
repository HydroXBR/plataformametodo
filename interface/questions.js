// Banco de questões de álgebra
const questionsData = [
    {
        id: 1,
        source: "PSC-UFAM",
        text: "Carlos e João receberam bolsa de iniciação científica de mesmo valor. No final do mês, Carlos havia gasto 1/2 do valor total de sua bolsa, João havia gasto 3/4 do valor total de sua bolsa, sendo que Carlos ficou com 𝑅$ 100,00 a mais que João. O valor da bolsa era de:",
        options: [
            { letter: "A", text: "R$ 360" },
            { letter: "B", text: "R$ 360" },
            { letter: "C", text: "R$ 400" },
            { letter: "D", text: "R$ 450" },
            { letter: "E", text: "R$ 480" }
        ],
        correctAnswer: "C",
        explanation: "Carlos ficou com metade e João com um quarto da bolsa, sendo que essa diferença de um quarto corresponde a R$ 100,00. Portanto, a resposta é R$ 400,00.",
        difficulty: 75,
        videoSolution: "https://www.youtube.com/embed/0wcfB1qS1iw"
    },
    {
        id: 2,
        source: "SIS-UEA",
        text: "Qual é o valor de x na equação 2x² - 8x + 6 = 0?",
        options: [
            { letter: "A", text: "1 e 3" },
            { letter: "B", text: "2 e 4" },
            { letter: "C", text: "-1 e -3" },
            { letter: "D", text: "0 e 2" }
        ],
        correctAnswer: "A",
        explanation: "Usando a fórmula de Bhaskara: Δ = (-8)² - 4×2×6 = 64 - 48 = 16. x = (8 ± 4)/4. x₁ = 3, x₂ = 1.",
        difficulty: 65,
        videoSolution: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 3,
        source: "PSC-UFAM",
        text: "Se log₂(x) = 3, qual é o valor de x?",
        options: [
            { letter: "A", text: "6" },
            { letter: "B", text: "8" },
            { letter: "C", text: "9" },
            { letter: "D", text: "12" }
        ],
        correctAnswer: "B",
        explanation: "log₂(x) = 3 significa que 2³ = x, portanto x = 8.",
        difficulty: 70,
        videoSolution: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 4,
        source: "SIS-UEA",
        text: "Qual é a soma das raízes da equação x² - 5x + 6 = 0?",
        options: [
            { letter: "A", text: "5" },
            { letter: "B", text: "6" },
            { letter: "C", text: "7" },
            { letter: "D", text: "8" }
        ],
        correctAnswer: "A",
        explanation: "Pelas relações de Girard, a soma das raízes é -b/a = -(-5)/1 = 5.",
        difficulty: 80,
        videoSolution: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 5,
        source: "PSC-UFAM",
        text: "Se 3ˣ = 81, qual é o valor de x?",
        options: [
            { letter: "A", text: "2" },
            { letter: "B", text: "3" },
            { letter: "C", text: "4" },
            { letter: "D", text: "5" }
        ],
        correctAnswer: "C",
        explanation: "81 = 3⁴, portanto 3ˣ = 3⁴, logo x = 4.",
        difficulty: 85,
        videoSolution: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 6,
        source: "SIS-UEA",
        text: "Qual é o valor de (a + b)² quando a = 3 e b = 4?",
        options: [
            { letter: "A", text: "25" },
            { letter: "B", text: "49" },
            { letter: "C", text: "12" },
            { letter: "D", text: "7" }
        ],
        correctAnswer: "B",
        explanation: "(a + b)² = a² + 2ab + b² = 9 + 24 + 16 = 49.",
        difficulty: 90,
        videoSolution: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 7,
        source: "PSC-UFAM",
        text: "Resolva a inequação: 2x - 5 > 7",
        options: [
            { letter: "A", text: "x > 6" },
            { letter: "B", text: "x > 2" },
            { letter: "C", text: "x > 1" },
            { letter: "D", text: "x > 12" }
        ],
        correctAnswer: "A",
        explanation: "2x - 5 > 7 → 2x > 12 → x > 6.",
        difficulty: 60,
        videoSolution: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 8,
        source: "SIS-UEA",
        text: "Qual é o valor de x na proporção: 2/5 = x/15",
        options: [
            { letter: "A", text: "3" },
            { letter: "B", text: "5" },
            { letter: "C", text: "6" },
            { letter: "D", text: "10" }
        ],
        correctAnswer: "C",
        explanation: "2/5 = x/15 → 5x = 30 → x = 6.",
        difficulty: 75,
        videoSolution: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 9,
        source: "PSC-UFAM",
        text: "Fatore a expressão: x² - 9",
        options: [
            { letter: "A", text: "(x - 3)(x + 3)" },
            { letter: "B", text: "(x - 9)(x + 1)" },
            { letter: "C", text: "(x - 3)²" },
            { letter: "D", text: "(x + 3)²" }
        ],
        correctAnswer: "A",
        explanation: "x² - 9 é uma diferença de quadrados: (x - 3)(x + 3).",
        difficulty: 85,
        videoSolution: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 10,
        source: "SIS-UEA",
        text: "Qual é o valor de √64 + ∛27?",
        options: [
            { letter: "A", text: "11" },
            { letter: "B", text: "10" },
            { letter: "C", text: "9" },
            { letter: "D", text: "8" }
        ],
        correctAnswer: "A",
        explanation: "√64 = 8 e ∛27 = 3, portanto 8 + 3 = 11.",
        difficulty: 95,
        videoSolution: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

// Estado da aplicação
let estado = {
    questaoAtual: 0,
    respostas: [],
    selectedOption: null
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    carregarQuestao(0);
    atualizarProgresso();
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

function carregarQuestao(index) {
    if (index < 0 || index >= questionsData.length) return;
    
    estado.questaoAtual = index;
    const questao = questionsData[index];
    
    // Atualizar informações da questão
    document.getElementById('question-number').textContent = index + 1;
    document.getElementById('question-source').textContent = questao.source;
    document.getElementById('question-text').textContent = questao.text;
    
    // Carregar opções
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    questao.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <div class="option-letter">${option.letter}</div>
            <div class="option-text">${option.text}</div>
        `;
        optionElement.addEventListener('click', () => selecionarOpcao(option.letter));
        optionsContainer.appendChild(optionElement);
    });
    
    // Resetar estado da questão
    estado.selectedOption = null;
    document.getElementById('btn-confirmar').disabled = true;
    document.getElementById('btn-confirmar').style.display = 'block';
    document.getElementById('btn-continuar').style.display = 'none';
    document.getElementById('question-feedback').style.display = 'none';
    
    // Atualizar controles de navegação
    atualizarControlesNavegacao();
    
    // Atualizar lista de questões
    atualizarListaQuestoes();
}

function selecionarOpcao(letter) {
    // Remover seleção anterior
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Adicionar seleção atual - CORREÇÃO AQUI
    const selectedOption = Array.from(document.querySelectorAll('.option')).find(option => {
        return option.querySelector('.option-letter').textContent === letter;
    });
    
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
    
    estado.selectedOption = letter;
    document.getElementById('btn-confirmar').disabled = false;
}

function confirmarResposta() {
    if (!estado.selectedOption) return;
    
    const questao = questionsData[estado.questaoAtual];
    const isCorrect = estado.selectedOption === questao.correctAnswer;
    
    // Registrar resposta
    estado.respostas[estado.questaoAtual] = {
        selected: estado.selectedOption,
        correct: isCorrect
    };
    
    // Mostrar feedback
    const feedback = document.getElementById('question-feedback');
    const feedbackResult = document.getElementById('feedback-result');
    const explanation = document.getElementById('explanation');
    const difficultyLevel = document.getElementById('difficulty-level');
    
    feedbackResult.textContent = isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta!';
    feedbackResult.className = isCorrect ? 'feedback-correct' : 'feedback-wrong';
    explanation.textContent = questao.explanation;
    difficultyLevel.textContent = `${questao.difficulty}% acertaram`;
    
    feedback.style.display = 'block';
    
    // Configurar botão de resolução em vídeo
    document.getElementById('btn-solution').onclick = () => {
        window.open(questao.videoSolution, '_blank');
    };
    
    // Mostrar resultado nas opções
    document.querySelectorAll('.option').forEach(option => {
        const letter = option.querySelector('.option-letter').textContent;
        if (letter === questao.correctAnswer) {
            option.classList.add('correct');
        } else if (letter === estado.selectedOption && !isCorrect) {
            option.classList.add('wrong');
        }
    });
    
    // Trocar botões
    document.getElementById('btn-confirmar').style.display = 'none';
    document.getElementById('btn-continuar').style.display = 'block';
    
    // Atualizar progresso
    atualizarProgresso();
    atualizarListaQuestoes();
}

function proximaQuestao() {
    if (estado.questaoAtual < questionsData.length - 1) {
        carregarQuestao(estado.questaoAtual + 1);
    } else {
        // Todas as questões respondidas
        alert('Parabéns! Você completou todas as questões!');
    }
}

function questaoAnterior() {
    if (estado.questaoAtual > 0) {
        carregarQuestao(estado.questaoAtual - 1);
    }
}

function atualizarControlesNavegacao() {
    document.getElementById('btn-anterior').disabled = estado.questaoAtual === 0;
    document.getElementById('btn-proxima').disabled = estado.questaoAtual === questionsData.length - 1;
}

function atualizarProgresso() {
    const totalQuestoes = questionsData.length;
    const respostas = estado.respostas.filter(r => r !== undefined);
    const progresso = (respostas.length / totalQuestoes) * 100;
    
    document.getElementById('progress-fill').style.width = `${progresso}%`;
    document.getElementById('progress-count').textContent = `${respostas.length}/${totalQuestoes}`;
    document.getElementById('progress-text').textContent = `${Math.round(progresso)}% concluído`;
    
    // Estatísticas
    const corretas = respostas.filter(r => r.correct).length;
    const erradas = respostas.length - corretas;
    const precisao = respostas.length > 0 ? Math.round((corretas / respostas.length) * 100) : 0;
    
    document.getElementById('correct-answers').textContent = corretas;
    document.getElementById('wrong-answers').textContent = erradas;
    document.getElementById('accuracy').textContent = `${precisao}%`;
}

function atualizarListaQuestoes() {
    const questionsList = document.getElementById('questions-list');
    let html = '';
    
    questionsData.forEach((questao, index) => {
        const resposta = estado.respostas[index];
        let status = 'Não respondida';
        let classe = '';
        
        if (resposta) {
            status = resposta.correct ? 'Correta' : 'Incorreta';
            classe = resposta.correct ? 'answered' : 'answered wrong';
        }
        
        if (index === estado.questaoAtual) {
            classe += ' active';
        }
        
        html += `
            <div class="question-item ${classe.trim()}" data-index="${index}">
                <div class="question-number">${index + 1}</div>
                <div class="question-info">
                    <div class="question-title">Questão ${index + 1}</div>
                    <div class="question-status">${status}</div>
                </div>
            </div>
        `;
    });
    
    questionsList.innerHTML = html;
    
    // Adicionar eventos de clique
    document.querySelectorAll('.question-item').forEach(item => {
        item.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            carregarQuestao(index);
        });
    });
}

function configurarEventos() {
    // Botão voltar para matérias
    document.getElementById('btn-voltar-materias').addEventListener('click', function() {
        window.location.href = '/dashboard.html';
    });
    
    // Botão confirmar
    document.getElementById('btn-confirmar').addEventListener('click', confirmarResposta);
    
    // Botão continuar
    document.getElementById('btn-continuar').addEventListener('click', proximaQuestao);
    
    // Controles de navegação
    document.getElementById('btn-anterior').addEventListener('click', questaoAnterior);
    document.getElementById('btn-proxima').addEventListener('click', proximaQuestao);
    
    // Teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            questaoAnterior();
        } else if (e.key === 'ArrowRight') {
            proximaQuestao();
        } else if (e.key >= '1' && e.key <= '4') {
            const letter = String.fromCharCode(64 + parseInt(e.key));
            selecionarOpcao(letter);
        } else if (e.key === 'Enter') {
            if (document.getElementById('btn-confirmar').style.display !== 'none') {
                confirmarResposta();
            } else {
                proximaQuestao();
            }
        }
    });
}