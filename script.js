// script.js
document.addEventListener('DOMContentLoaded', function() {
    let text = document.getElementById('text');
    let gateLeft = document.getElementById('gate-left');
    let gateRight = document.getElementById('gate-right');
    let treeLeft = document.getElementById('tree-left');
    let treeRight = document.getElementById('tree-right');
    let grass = document.getElementById('grass');

    window.addEventListener('scroll', function() {
        let value = window.scrollY;
        
        // Move text up slower than scrolling
        text.style.marginTop = value * 1.5 + 'px';
        
        // Move trees slower than scrolling for parallax effect
        treeLeft.style.left = value * -0.5 + 'px';
        treeRight.style.left = value * 0.5 + 'px';
        
        // Move gates faster than scrolling (closer objects appear to move faster)
        gateLeft.style.left = value * -1.5 + 'px';
        gateRight.style.left = value * 1.5 + 'px';
        
        // Grass moves slightly
        grass.style.top = value * 0.2 + 'px';
        
        // Fade out header when scrolling down
        if(value > 150) {
            document.querySelector('header').style.background = 'rgba(2, 9, 18, 0.8)';
            document.querySelector('header').style.padding = '15px 100px';
        } else {
            document.querySelector('header').style.background = 'transparent';
            document.querySelector('header').style.padding = '30px 100px';
        }
    });
    
    // Highlight active navigation item on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navigation a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if(pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});