// *append child
const cta = document.querySelector('#cta');

cta.addEventListener('click', () => {
    const desc = document.querySelector('#desc');
    const newP = document.createElement('p');
    newP.textContent = 'paragraf';
    desc.appendChild(newP); 
});

// *active menu
const nav = document.querySelector('nav ul');
const menu = nav.querySelectorAll('a');

menu.forEach((item) => {
    item.addEventListener('click', (e) => {
        menu.forEach((el) => {
            const active = 'text-white';

            if (el == e.target){
                e.target.classList.add(active);
            } else {
                el.classList.remove(active);
            };
        });
    });
});

// *accordion
const head = document.querySelectorAll('#accordion-head');

head.forEach((item) => {
    const acc = item.parentElement.getAttribute('id');

    if (acc == 'accordion-open') {
        item.addEventListener('click', (el) => {
            const hidden = ('hidden');
            const body = el.target.nextElementSibling;
            body.classList.toggle(hidden);
        });
    }
    else if (acc == 'accordion-collapse') {
        item.addEventListener('click', (el) => {
            head.forEach((e) => {
                const hidden = ('hidden');
                const body = e.nextElementSibling;
    
                if (e == el.target){
                    body.classList.toggle(hidden);
                } else {
                    body.classList.add(hidden);
                };
            });
        });
    };
});

// *scroll animation
const scrollAnimate = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade');
        } else {
            entry.target.classList.remove('fade');
        }
    });
});
