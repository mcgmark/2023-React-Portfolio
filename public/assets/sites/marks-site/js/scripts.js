let toggleSwitch = document.querySelector('input[type="checkbox"]');
let menu = document.querySelector('#header-navigation-mobile');


toggleSwitch.addEventListener('click', function(){
    if (toggleSwitch.checked == true){
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }

});

window.addEventListener('resize', function() {
    let windowWidth = window.innerWidth;
    if (windowWidth >= '1270'){
        menu.style.display = 'none';
    }
});