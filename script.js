// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    // Menu mobile functionality
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (navList.style.display === 'flex') {
                navList.style.display = 'none';
            } else {
                navList.style.display = 'flex';
                navList.style.flexDirection = 'column';
                navList.style.position = 'absolute';
                navList.style.top = '100%';
                navList.style.left = '0';
                navList.style.width = '100%';
                navList.style.backgroundColor = 'white';
                navList.style.padding = '1rem';
                navList.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });
    }
    
    // Fechar menu ao clicar fora (opcional)
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && window.innerWidth < 768) {
            navList.style.display = 'none';
        }
    });
    
    // Smooth scroll para links internos
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile após clicar (apenas em mobile)
                if (window.innerWidth < 768) {
                    navList.style.display = 'none';
                }
            }
        });
    });
    
    // Botão "Ver Projetos" na hero section
    const verProjetosBtn = document.querySelector('.hero .btn-primary');
    if (verProjetosBtn) {
        verProjetosBtn.addEventListener('click', function() {
            const projectsSection = document.querySelector('#projects');
            if (projectsSection) {
                window.scrollTo({
                    top: projectsSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Ajustar menu para desktop quando redimensionar
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            navList.style.display = 'flex';
            navList.style.flexDirection = 'row';
            navList.style.position = 'static';
            navList.style.backgroundColor = 'transparent';
            navList.style.padding = '0';
            navList.style.boxShadow = 'none';
        } else {
            navList.style.display = 'none';
        }
    });
});

// Efeito de digitação no título (opcional - bonus)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Inicializar efeito de digitação quando a página carregar
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 80);
    }
});