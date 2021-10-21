const slideNav = () => {
        const burger = document.querySelector('.burger');
        const navLinks = document.querySelector('.nav-links');
        const navLi = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
                navLinks.classList.toggle('nav-active');
                burger.classList.toggle('toggle');

                navLi.forEach((link, index) => {
                        if (link.style.animation) {
                                link.style.animation = "";
                        } else {
                                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`
                        }
                });
        });
};


const themeNew = () => {
        const dark = document.querySelector('.theme');
        dark.addEventListener('click', () => {
                dark.classList.toggle('clicked');
                console.log(dark.className == 'theme clicked');
                if (dark.className == "theme clicked") {
                        document.getElementById('theme-style').href = 'light.css';
                } else {
                        document.getElementById('theme-style').href = 'style.css';

                }
        });
};


const allFunction = () => {
        slideNav();
        themeNew();
}

allFunction();