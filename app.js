// select the classes
const links = document.querySelector(".links");
const toggle = document.querySelector(".nav-toggle");
// add event listener
toggle.addEventListener('click',() => {
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // }else {
    //     links.classList.add('show-links')

    // }
    links.classList.toggle('show-links')
});
