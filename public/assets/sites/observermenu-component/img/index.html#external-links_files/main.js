document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".target");
    console.log(sections);
    const nav = document.querySelector("nav");
    // console.log(`footer height ${footerLocation}`);
    
    // window.addEventListener('scroll', () => {
    //    let scroll = window.scrollY;
        
    //   console.log(footer.getBoundingClientRect());
    //   console.log(window.innerHeight);
    //    if (window.innerWidth >= 820) {
        
    //    if (scroll >= 1200) {
    //        nav.style.paddingTop = "240px";
    //    } else if (scroll >= 1100) {
    //        nav.style.paddingTop = "200px";
    //    } else if (scroll >= 800) {
    //        nav.style.paddingTop = "140px";
    //    } else if (scroll >= 200) {
    //        nav.style.paddingTop = "70px";
    //    } else {
    //        nav.style.paddingTop = "20px";
    //    };
    //}
        
        // console.log(scroll);
    //});

    var observer = new IntersectionObserver(function(entries) {
        if (entries[0]['isIntersecting'] === true){
            console.log("etymology");
        } else if (entries[1]['isIntersecting'] === true){
            console.log("boilerlate language");
        } else if (entries[2]['isIntersecting'] === true){
            console.log("boiler code");
        } else if (entries[3]['isIntersecting'] === true){
            console.log("see also");
        } else if (entries[4]['isIntersecting'] === true){
            console.log("footer");
        }
    
    }, {threshole: [0.1]});

    sections.forEach(section => observer.observe(section));
});