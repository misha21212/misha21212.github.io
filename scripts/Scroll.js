const nav1 = document.querySelector('.nav-home');
const nav4 = document.querySelector('.nav-contacts');

nav1.onclick = function() {
    document.querySelector('.home').scrollIntoView({ behavior: 'smooth' });
};

nav4.onclick = function() {
    document.querySelector('.contacts').scrollIntoView({ behavior: 'smooth' });
};

