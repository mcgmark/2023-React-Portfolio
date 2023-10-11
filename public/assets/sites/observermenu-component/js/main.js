
// Animate navigation menu on page scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".target"); // Initiliaze variable with all elements with target class
    const nav = document.querySelector("nav"); // Initialize variable with nav element

    const options = { //Initalize object containing IntersectObserver options
        threshold: [0.65, 0.7],
        rootMargin: "-100px 0px -100px 0px"
    }

    const onView = (entries) => { //Callback function for Intersection Observer API
        entries.forEach((entry) => { //For each element being monitored by the Intersection Observer API
            const sectionId = entry.target.id;
            const link = document.querySelector(`.${sectionId}`);
            if (window.innerWidth >= 820) { //Only do this if not on very narrow viewport
                if (entry.intersectionRatio <= 0.65) { //If the element in not 65% in view turn current navigation link back to orange, that section is no longer in view
                    link.classList.add("orange");
                    link.classList.remove("white");
                } else if (entry.intersectionRatio >= 0.65) { //If the element is 65% in view add class for white text to highlight current section
                    link.classList.add("white");
                    link.classList.remove("orange");
                };
                if (document.querySelector("nav .etymology").classList.contains("white")) { //Add padding to nav element to slide down according to position on page based on what nav item is currently white for active
                    nav.style.paddingTop = "40px";
                } else if (document.querySelector("nav .boilerplate-language").classList.contains("white")) {
                    nav.style.paddingTop = "80px";
                } else if (document.querySelector("nav .boilerplate-code").classList.contains("white")) {
                    nav.style.paddingTop = "160px";
                } else if (document.querySelector("nav .see-also").classList.contains("white")) {
                    nav.style.paddingTop = "250px";
                };
            };
        });
    };
    //Event listener to slide the nav menu back to top when browser scroll is back to top
    document.addEventListener("scroll", () => {
        if (window.scrollY < 100) {
            nav.style.paddingTop = "20px";
        };
    });

    //Create new IntersectionObserver API 
    const observer = new IntersectionObserver(onView, options);

    //Assign section elements with trigger class as targets for the IntersectionObserver API for observation 
    sections.forEach(section => observer.observe(section));
});