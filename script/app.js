/* Delay Javascript until DOM has loaded */
document.addEventListener("DOMContentLoaded", function(event) {

    /* Object for name section etc in Unordered list */
    const ulObj = {
            navName: ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5"],
            sectNum: 5
    }


    /* Create UL using JavaScript for each section on page */
    function createUl(ulObj) {
        let li, a, strng;
        const elmt = document.getElementById("header");
        const ul = document.createElement("ul");
        ul.id = "header-list";
        elmt.appendChild(ul);     // Appended ul to header

        let sectn = document.getElementsByClassName("sectn");

        for (let i = 0; i<ulObj.sectNum; i++){
            li = document.createElement("li");  // Create a new list item
            li.className = "li-inactive";       // Add class name to li
            a = document.createElement("a");    // Create a link
            a.innerHTML = ulObj.navName[i];     // Text on navigation link

            /* Click link and scroll to section smoothly */
            a.addEventListener("click",
            function(){
                scrollFunction();
            });
            function scrollFunction(){
                document.getElementById(sectn[i].id).scrollIntoView({behavior:"smooth"});
            }

            li.appendChild(a);
            ul.appendChild(li);
        };
    };

    createUl(ulObj); // Call function

    /* Highlight button when section at top of screen */
    window.addEventListener("scroll", scrollFunction, false);

    function scrollFunction() {
        let header = document.getElementById("header-list");
        let links = header.getElementsByClassName("li-inactive");
        let sectn = document.getElementsByClassName("sectn");

        let ymin = 1000;
        let imin = 0;
        let y;

        for (let i = 0; i<sectn.length; i++){
            if (links[i].className !== "li-inactive"){
                links[i].classList.remove("li-active");
            }
            y = Math.abs(sectn[i].getBoundingClientRect().top+60);
            if (y<ymin) {
                ymin = y;
                imin = i;
            }
        }
        links[imin].classList.add("li-active");
    }


    /* Collapse section - onclick*/
    function collapseSection(){
        let btn = document.getElementsByClassName("btn");
        let content = document.getElementsByClassName("content");

        for (let i = 0; i<btn.length; i++){
            btn[i].addEventListener("click",
            function(){
                collapseFunction();
            });
            function collapseFunction(){
                x = content[i];
                if (content[i].style.display === "none") {
                    content[i].style.display = "block";
                    btn[i].innerHTML = "&#8211";
            } else {
                content[i].style.display = "none";
                btn[i].innerHTML = "&#43";
            }
            }
        };
    }

    collapseSection();


    /* Collapse Nav bar while not scrolling
    Leave Nav bar ontop when at top of page
    Use setInterval to delay collapse */
    let hdrID = document.getElementById("header");
    let sect5 = document.getElementById("section5")
    let didScroll, didMouse;
    hdrID.onmouseenter = () => {didMouse = true};
    hdrID.onmouseleave = () => {didMouse = false};
    window.onscroll = () => {didScroll = true};
    setInterval(function(){
        if ( didScroll || didMouse || window.pageYOffset < 50 ) {
            hdrID.style.opacity = "1";
            didScroll = false;
        } else {
            hdrID.style.opacity = "0";
        }
    }, 1000);

});

