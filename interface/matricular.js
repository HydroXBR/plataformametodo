// Mapeamento de ícones para categorias
const categoryIcons = {
    'Administração': 'fas fa-briefcase',
    'Agricultura': 'fas fa-seedling',
    'Artes': 'fas fa-paint-brush',
    'Assistência Social': 'fas fa-hands-helping',
    'Biologia': 'fas fa-dna',
    'Concursos Públicos': 'fas fa-university',
    'Construção Civil': 'fas fa-building',
    'Contabilidade e Finanças': 'fas fa-coins',
    'Direito': 'fas fa-balance-scale',
    'Educação': 'fas fa-chalkboard-teacher',
    'ENEM': 'fas fa-graduation-cap',
    'Gastronomia': 'fas fa-utensils',
    'Gestão de Pessoas': 'fas fa-users',
    'Idiomas': 'fas fa-language',
    'Indústria e Tecnologia': 'fas fa-industry',
    'Informática': 'fas fa-laptop-code',
    'Logística': 'fas fa-truck',
    'Marketing e Vendas': 'fas fa-bullhorn',
    'Meio Ambiente': 'fas fa-leaf',
    'Moda': 'fas fa-tshirt',
    'Outros Cursos': 'fas fa-ellipsis-h',
    'Profissões': 'fas fa-user-tie',
    'Psicologia': 'fas fa-brain',
    'Religião': 'fas fa-cross',
    'Saúde e Bem-estar': 'fas fa-heartbeat',
    'Segurança no Trabalho': 'fas fa-hard-hat',
    'Turismo': 'fas fa-plane'
};

// Carga horária padrão para ícones de clock
const cargaHoraria = [
    'Carga horária de 10 horas',
    'Carga horária de 20 horas',
    'Carga horária de 30 horas',
    'Carga horária de 40 horas',
    'Carga horária de 50 horas',
    'Carga horária de 60 horas',
    'Carga horária de 80 horas'
];

class CourseEnrollment {
    constructor() {
        this.coursesData = null;
        this.currentCategory = null;
        this.init();
    }

    async init() {
        await this.loadCoursesData();
        this.renderCategories();
        this.setupEventListeners();
    }

    async loadCoursesData() {
        try {
            const response = await fetch('./lista.json');
            if (!response.ok) throw new Error('Erro ao carregar cursos');
            this.coursesData = await response.json();
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
            this.showError('Erro ao carregar cursos. Tente novamente.');
        }
    }

    renderCategories() {
        const grid = document.getElementById('categories-grid');
        
        if (!this.coursesData) {
            grid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-exclamation-triangle empty-icon"></i>
                    <h3>Erro ao carregar categorias</h3>
                    <p>Não foi possível carregar a lista de cursos.</p>
                </div>
            `;
            return;
        }

        const categories = Object.keys(this.coursesData);
        const totalCourses = categories.reduce((total, category) => 
            total + (this.coursesData[category]?.length || 0), 0
        );

        document.getElementById('courses-count').textContent = 
            `${categories.length} categorias • ${totalCourses} cursos disponíveis`;

        grid.innerHTML = categories.map(category => {
            const courseCount = this.coursesData[category]?.length || 0;
            const icon = categoryIcons[category] || 'fas fa-book';
            
            return `
                <div class="category-card" data-category="${category}">
                    <div class="category-icon">
                        <i class="${icon}"></i>
                    </div>
                    <h3>${category}</h3>
                    <p>Explore cursos especializados</p>
                </div>
            `;
        }).join('');

        // Adicionar categorias de carga horária
        cargaHoraria.forEach(horas => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <div class="category-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <h3>${horas}</h3>
                <p>Cursos com duração específica</p>
                <span class="course-count">Vários cursos</span>
            `;
            grid.appendChild(card);
        });
    }

    renderCourses(category) {
        const main = document.querySelector('.main-content');
        const courses = this.coursesData[category];
        
        if (!courses || courses.length === 0) {
            main.innerHTML = `
                <div class="back-header">
                    <button class="btn-back" id="voltar-categorias">
                        <i class="fas fa-arrow-left"></i>
                        Voltar
                    </button>
                    <h1>${category}</h1>
                </div>
                <div class="empty-state">
                    <i class="fas fa-book-open empty-icon"></i>
                    <h3>Nenhum curso encontrado</h3>
                    <p>Não há cursos disponíveis nesta categoria no momento.</p>
                </div>
            `;
        } else {
            main.innerHTML = `
                <div class="back-header">
                    <button class="btn-back" id="voltar-categorias">
                        <i class="fas fa-arrow-left"></i>
                        Voltar
                    </button>
                    <h1>${category}</h1>
                    <span class="courses-count">${courses.length} cursos</span>
                </div>
                <div class="courses-grid" id="courses-container"></div>
            `;

            const container = document.getElementById('courses-container');
            container.innerHTML = courses.map(course => `
                <div class="course-card">
                    <div class="course-image">
                        <img src="${course.imagem || 'https://via.placeholder.com/400x200?text=Curso'}" alt="${course.titulo}">
                        <div class="course-category">${category}</div>
                    </div>
                    <div class="course-content">
                        <h3 class="course-title">${course.titulo}</h3>
                        <p class="course-description">${course.descricao || 'Sem descrição disponível.'}</p>
                        <div class="course-meta">
                            <div class="meta-item">
                                <i class="far fa-clock"></i>
                                <span>${Math.floor(Math.random() * (50 - 20) + 20)} horas</span>
                            </div>
                            <div class="meta-item">
                                <i class="far fa-play-circle"></i>
                                <span>${Math.floor(Math.random() * (60 - 10) + 10)} aulas</span>
                            </div>
                        </div>
                        <div class="course-actions">
                            <button class="btn-enroll" 
                                data-id="${course.id}"
                                data-img="${course.imagem}"
                                data-titulo="${course.titulo}"
                                data-descricao="${course.descricao}">
                                <i class="fas fa-plus"></i>
                                Matricular
                            </button>
                            <button class="btn-details">
                                <i class="fas fa-info-circle"></i>
                                Detalhes
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        this.setupCourseEvents();
        document.getElementById('voltar-categorias').addEventListener('click', () => {
            this.showCategories();
        });
    }

    showCategories() {
        const main = document.querySelector('.main-content');
        main.innerHTML = `
            <div class="content-header">
                <div class="header-title">
                    <h1>Matricular Novo Curso</h1>
                    <p>Explore nossa biblioteca de cursos e encontre o perfeito para você</p>
                </div>
                <div class="search-section">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" id="search-input" placeholder="Pesquisar cursos...">
                    </div>
                    <div class="filter-options">
                        <select id="filter-category">
                            <option value="">Todas as categorias</option>
                            ${Object.keys(categoryIcons).map(cat => 
                                `<option value="${cat}">${cat}</option>`
                            ).join('')}
                        </select>
                    </div>
                </div>
            </div>
            <section class="categories-section">
                <div class="section-header">
                    <h2>Categorias de Cursos</h2>
                    <span class="courses-count" id="courses-count">Carregando...</span>
                </div>
                <div class="categories-grid" id="categories-grid"></div>
            </section>
        `;
        
        this.renderCategories();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Categorias
        document.addEventListener('click', (e) => {
            const categoryCard = e.target.closest('.category-card');
            if (categoryCard) {
                const category = categoryCard.dataset.category;
                if (category) {
                    this.renderCourses(category);
                }
            }
        });

        // Pesquisa
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterCategories(e.target.value);
            });
        }

        // Filtro
        const filterSelect = document.getElementById('filter-category');
        if (filterSelect) {
            filterSelect.addEventListener('change', (e) => {
                this.filterCategoriesByCategory(e.target.value);
            });
        }
    }

    setupCourseEvents() {
        // Botões de matrícula
        document.querySelectorAll('.btn-enroll').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showEnrollmentModal(btn.dataset);
            });
        });

        // Botões de detalhes
        document.querySelectorAll('.btn-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Implementar visualização de detalhes do curso
                alert('Funcionalidade de detalhes em desenvolvimento');
            });
        });
    }

    showEnrollmentModal(courseData) {
        const modal = document.getElementById('confirm-modal');
        const img = document.getElementById('modal-img');
        const titulo = document.getElementById('modal-titulo');
        const descricao = document.getElementById('modal-descricao');

        img.src = courseData.img || 'https://via.placeholder.com/200';
        img.alt = courseData.titulo;
        titulo.textContent = courseData.titulo;
        descricao.textContent = courseData.descricao || 'Sem descrição disponível.';

        modal.style.display = 'flex';

        // Eventos do modal
        document.getElementById('modal-close').onclick = () => {
            modal.style.display = 'none';
        };

        document.getElementById('cancelar').onclick = () => {
            modal.style.display = 'none';
        };

        document.getElementById('confirmar').onclick = () => {
            this.enrollInCourse(courseData.id, courseData.titulo);
            modal.style.display = 'none';
        };

        // Fechar modal clicando fora
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };
    }

    enrollInCourse(courseId, courseTitle) {
        let matriculas = JSON.parse(localStorage.getItem('matriculas')) || [];
        
        if (!matriculas.includes(courseId)) {
            matriculas.push(Number(courseId));
            localStorage.setItem('matriculas', JSON.stringify(matriculas));
            
            this.showSuccessMessage(`Matrícula confirmada em "${courseTitle}"!`);
        } else {
            this.showInfoMessage(`Você já está matriculado em "${courseTitle}"`);
        }
    }

    showSuccessMessage(message) {
        this.showMessage(message, 'success');
    }

    showInfoMessage(message) {
        this.showMessage(message, 'info');
    }

    showError(message) {
        this.showMessage(message, 'error');
    }

    showMessage(message, type = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            messageDiv.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(messageDiv);
            }, 300);
        }, 4000);
    }

    filterCategories(searchTerm) {
        const categories = document.querySelectorAll('.category-card');
        const term = searchTerm.toLowerCase();
        
        categories.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(term) || description.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    filterCategoriesByCategory(selectedCategory) {
        const categories = document.querySelectorAll('.category-card');
        
        categories.forEach(card => {
            const category = card.dataset.category;
            
            if (!selectedCategory || category === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new CourseEnrollment();
});

// Adicionar estilos para mensagens
const messageStyles = document.createElement('style');
messageStyles.textContent = `
    .message {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1001;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 400px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    
    .message.show {
        transform: translateX(0);
    }
    
    .message-success {
        background: #28a745;
    }
    
    .message-info {
        background: #17a2b8;
    }
    
    .message-error {
        background: #dc3545;
    }
`;
document.head.appendChild(messageStyles);