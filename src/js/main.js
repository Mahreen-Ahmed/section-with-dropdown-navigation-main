var icons = document.querySelectorAll('.desktop, .dropdownlist__desktop, .mobile, .dropdownlist__mobile ');

for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener('mouseover', function () {
        this.classList.add('active');
    });

}
for (var i = 0; i < icons.length; i++) {

    icons[i].addEventListener('mouseout', function () {
        this.classList.remove('active');
    });

}


// Get the necessary DOM elements
const menuElement = document.querySelector('.icon-menu');
const mobileNavElement = document.querySelector('.mobile-nav');
const closeMenuElement = document.querySelector('.close-menu');

// Add event listener for hovering over .menu
menuElement.addEventListener('mouseenter', () => {
    mobileNavElement.classList.add('open');
});

// Add event listener for hovering over .close-menu
closeMenuElement.addEventListener('mouseenter', () => {
    mobileNavElement.classList.remove('open');
});
