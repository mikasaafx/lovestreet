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

// let page = document.querySelectorAll('main');
// let nav = document.querySelectorAll('header nav li a');

// window.onscroll = () => {
// 	page.forEach(sec => {
// 		let top = window.scrollY;
// 		let offset = sec.offsetTop;
// 		let height = sec.offsetHeight;
// 		let id = sec.getAttribute('id');

// 		if (top >= offset && top < offset + height) {
// 			navLinks.forEach(links => {
// 				links.classList.remove('active');
// 				document.querySelectorAll('header nav li a[href*= ' id + + ']').classList.add('active');
// 			});
// 		};
// 	});
// };