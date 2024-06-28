document.addEventListener('DOMContentLoaded', function() {
    var accordionButtons = document.querySelectorAll('.accordion button');

    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var content = this.nextElementSibling;
            var isOpen = this.getAttribute('aria-expanded') === 'true';

            if (isOpen) {
                this.setAttribute('aria-expanded', 'false');
                content.classList.remove('show');
            } else {
                this.setAttribute('aria-expanded', 'true');
                content.classList.add('show');
            }
        });
    });
    
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('open');
        navList.classList.toggle('open');
    });

    const navItems = document.querySelectorAll('.nav-list li');
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('open');
            navList.classList.remove('open');
        });
    });
});


