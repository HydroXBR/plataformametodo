// Inicialização dos gráficos
document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de desempenho por área
    const subjectCtx = document.getElementById('subjectChart').getContext('2d');
    const subjectChart = new Chart(subjectCtx, {
        type: 'bar',
        data: {
            labels: ['Matemática', 'Português', 'História', 'Geografia', 'Física', 'Química', 'Biologia'],
            datasets: [{
                label: 'Nota Média',
                data: [720, 680, 610, 590, 650, 630, 670],
                backgroundColor: [
                    'rgba(254, 0, 0, 0.7)',
                    'rgba(12, 18, 72, 0.7)',
                    'rgba(255, 215, 0, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(33, 150, 243, 0.7)',
                    'rgba(156, 39, 176, 0.7)',
                    'rgba(255, 152, 0, 0.7)'
                ],
                borderColor: [
                    'rgba(254, 0, 0, 1)',
                    'rgba(12, 18, 72, 1)',
                    'rgba(255, 215, 0, 1)',
                    'rgba(76, 175, 80, 1)',
                    'rgba(33, 150, 243, 1)',
                    'rgba(156, 39, 176, 1)',
                    'rgba(255, 152, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 800,
                    title: {
                        display: true,
                        text: 'Pontuação'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Desempenho por Área do Conhecimento'
                }
            }
        }
    });

    // Gráfico de evolução de notas
    const progressCtx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(progressCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
            datasets: [{
                label: 'Sua Nota',
                data: [520, 580, 610, 590, 640, 660, 680, 700, 720, 750],
                borderColor: 'rgba(254, 0, 0, 1)',
                backgroundColor: 'rgba(254, 0, 0, 0.1)',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 800,
                    title: {
                        display: true,
                        text: 'Pontuação'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Evolução das Notas nos Simulados'
                }
            }
        }
    });

    // Gráfico comparativo
    const comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
    const comparisonChart = new Chart(comparisonCtx, {
        type: 'radar',
        data: {
            labels: ['Matemática', 'Português', 'História', 'Geografia', 'Física', 'Química', 'Biologia'],
            datasets: [
                {
                    label: 'Sua Média',
                    data: [720, 680, 610, 590, 650, 630, 670],
                    backgroundColor: 'rgba(254, 0, 0, 0.2)',
                    borderColor: 'rgba(254, 0, 0, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(254, 0, 0, 1)'
                },
                {
                    label: 'Média da Turma',
                    data: [650, 640, 580, 560, 620, 600, 610],
                    backgroundColor: 'rgba(12, 18, 72, 0.2)',
                    borderColor: 'rgba(12, 18, 72, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(12, 18, 72, 1)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 800
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Comparativo com a Média da Turma'
                }
            }
        }
    });

    // Navegação para os cursos
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Evita que o clique no botão dispare dois eventos
            if (e.target.classList.contains('btn-access') || e.target.closest('.btn-access')) {
                return;
            }
            
            const course = this.getAttribute('data-course');
            window.location.href = `/curso?tipo=${course}`;
        });
    });

    // Botões de acesso aos cursos
    const accessButtons = document.querySelectorAll('.btn-access');
    accessButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Evita que o evento se propague para o card
            const courseCard = this.closest('.course-card');
            const course = courseCard.getAttribute('data-course');
            window.location.href = `/curso?tipo=${course}`;
        });
    });

    // Menu hamburger (reutilizando a funcionalidade existente)
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