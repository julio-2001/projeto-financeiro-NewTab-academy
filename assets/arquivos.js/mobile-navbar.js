class MobileNavbar{
    constructor(menuShape, navList , navLinks){
        this.mobileMenu = document.querySelector(menuShape);
        this.navlist    = document.querySelector(navList);
        this.navlinks   = document.querySelectorAll(navLinks);
        this.activeClass  = "active";


    }

    addClickEvent(){
        this.menuShape.addEventListener("click", () => console.log("hey"));

    }

    init(){
        if (this.menuShape){
            this.addClickEvent();

        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(

    ".menu_shape",
    ".menu_navbar_list",
    ".menu_navbar_list li",
);




mobileNavbar.init();
