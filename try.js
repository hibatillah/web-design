// *active menu
const menu = (params) => {
    let menu = [1,2,3,4];

    const active = document.querySelector('#menu-'+params);
    active.style.color = '#fff';

    menu.forEach((item) => {
        if (item != params) {
            const inactive = document.querySelector('#menu-'+item);
            inactive.style.color = '#94a3b8';
        };
    });
};

// *accordion collapse
const accCollapse = (number, n) => {
    let accordion = Array.from({length: n}, (_, index) => index + 1);

    const body = document.querySelector('#accordion-body-'+number);
    const icon = document.querySelector('#accordion-icon-'+number);
    icon.classList.toggle('rotate-90');
    body.classList.toggle('hidden');

    accordion.forEach((item) => {
        if (item != number) {
            const body = document.querySelector('#accordion-body-'+item);
            const icon = document.querySelector('#accordion-icon-'+item);
            icon.classList.remove('rotate-90');
            body.classList.add('hidden');
        }
    });
}

// *accordion open
const accOpen = (params) => {
    const body = document.querySelector('#accordion-body-'+params);
    const icon = document.querySelector('#accordion-icon-'+params);
    icon.classList.toggle('rotate-90');
    body.classList.toggle('hidden');
}

window.onscroll = () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        back = document.querySelector('#back-top')
        back.classList.remove('hidden');
        back.classList.add('fade');
    }
}

const preview = () => {
    upload = document.querySelector('#image');
    upload.src = URL.createObjectURL(event.target.files[0]);
    
    document.querySelector('#output-text').classList.remove('hidden');
}