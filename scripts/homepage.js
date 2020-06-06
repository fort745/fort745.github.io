//function to select html elements
const selectElement = (s) => document.querySelector(s);
//opens menu on click

let open = false;
selectElement(".nav-group").addEventListener("click", () => {
    if(open){
        selectElement(".nav-group").classList.remove("active");
        //change icon to down arrow
        open = false;
    } else {
        selectElement(".nav-group").classList.add("active");
        //change icon to up arrow
        open = true;
    }
});
//on scroll also close menu (helps for mobile)
window.addEventListener("scroll", () => {
    if(open){
        selectElement(".nav-group").classList.remove("active");
        //change icon to down arrow
        open = false;
    }
});

selectElement(".nav-group").addEventListener("mouseenter", () => {
    selectElement(".nav-group").classList.add("active");
        //change icon to up arrow
        open = true;
});
selectElement(".nav-group").addEventListener("mouseleave", () => {
    selectElement(".nav-group").classList.remove("active");
        //change icon to up arrow
        open = false;
});
