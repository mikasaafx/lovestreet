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
});